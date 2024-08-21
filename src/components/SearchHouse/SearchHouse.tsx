import { P_BACKEND_URL } from "@/utils/meli";
import { useEffect, useMemo, useState } from "react";
import { DataGrid, type GridColDef, type GridRowId } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useSearchParams } from "next/navigation";
import HouseChart from "../HouseChart/HouseChart";

export default function SearchHouse() {
  const params = useSearchParams();
  const [properties, setProperties] = useState<Properties[]>([]);

  async function getHouses() {
    const maxPrice = params.get("maxPrice");
    const minSpace = params.get("minSpace");
    const url = new URL(`${P_BACKEND_URL}/api/rent`);
    if (maxPrice && !Number.isNaN(parseFloat(maxPrice))) {
      url.searchParams.append("maxPrice", maxPrice);
    }
    if (minSpace && !Number.isNaN(parseInt(minSpace))) {
      url.searchParams.append("minSpace", minSpace);
    }
    const res = await fetch(url);
    const data = (await res.json()) as Properties[];
    return data;
  }

  async function searchHouse() {
    const results = await getHouses();
    if (results.length > 0) {
      setProperties(results);
    }
  }

  const averagePricePerSquareMeter = useMemo(() => {
    let total = 0;
    let amount = 0;
    if (!properties) {
      return 0;
    }
    properties.forEach(({ results }) => {
      results.forEach((prop) => {
        total = total + prop.pricePerSquareMeter;
        amount++;
      });
    });
    console.log({ total, amount });
    return (total / amount).toFixed(2);
  }, [properties]);

  useEffect(() => {
    searchHouse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function createColumns(data: Property[]): Array<GridColDef<Property>> {
    const firstItem = data[0];
    if (!firstItem) return [];

    return Object.keys(firstItem).map((key) => {
      let headerName = key;
      const colDef: GridColDef<Property> = {
        field: key,
        headerName,
        disableColumnMenu: true,
        align: "center",
        headerAlign: "center",
        width: 120,
        type: "number",
      };
      return colDef;
    });
  }

  const rows: Property[] = useMemo(() => {
    let props: Property[] = [];
    properties.forEach((prop) => props.push(...prop.results));
    return props;
  }, [properties]);

  const columns = useMemo(() => {
    return createColumns(rows);
  }, [rows]);

  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([]);

  return (
    <div className="">
      <div className="flex justify-between">
        <p>Precio promedio por m2: ARS${averagePricePerSquareMeter}</p>
        <Button
          variant="outlined"
          disabled={selectedRows.length == 0}
          onClick={() => {
            selectedRows.forEach((row) => {
              const obj = JSON.parse(row as string) as PropertyDTO;
              window.open(obj.permalink, "_blank");
            });
          }}
        >
          VER EN MERCADO LIBRE
        </Button>
      </div>
      <DataGrid
        localeText={{
          noRowsLabel: "",
          footerRowSelected: (_) => "",
        }}
        sx={{ height: "600px", marginTop: "1rem" }}
        checkboxSelection
        // disableRowSelectionOnClick
        rows={rows ?? []}
        columns={columns}
        disableColumnFilter
        pageSizeOptions={[100]}
        getRowId={(row) => JSON.stringify(row)}
        rowSelectionModel={selectedRows}
        onRowSelectionModelChange={(newSelectionModel) => {
          setSelectedRows(newSelectionModel as GridRowId[]);
        }}
      />
      <HouseChart houseDatasets={properties} />
    </div>
  );
}
