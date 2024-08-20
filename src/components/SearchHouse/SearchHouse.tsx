import { P_BACKEND_URL } from "@/utils/meli";
import { useEffect, useMemo, useState } from "react";
import { DataGrid, type GridColDef, type GridRowId } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function SearchHouse() {
  const params = useSearchParams();
  const [houses, setHouses] = useState<Result[]>([]);

  async function getHouses() {
    const maxPrice = params.get("maxPrice");
    const minSpace = params.get("minSpace");
    const url = new URL(`${P_BACKEND_URL}/api/house`);
    if (maxPrice && !Number.isNaN(parseFloat(maxPrice))) {
      url.searchParams.append("maxPrice", maxPrice);
    }
    if (minSpace && !Number.isNaN(parseInt(minSpace))) {
      url.searchParams.append("minSpace", minSpace);
    }
    const res = await fetch(url);
    const data = (await res.json()) as Result[];
    return data;
  }

  async function searchHouse() {
    const results = await getHouses();
    if (results.length > 0) {
      setHouses(results);
    }
  }

  const averagePricePerSquareMeter = useMemo(() => {
    let total = 0;
    if (!houses) {
      return 0;
    }
    houses.forEach((house) => {
      total += house.pricePerSquareMeter;
    });
    return (total / houses.length).toFixed(2);
  }, [houses]);

  useEffect(() => {
    searchHouse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function createColumns(data: Row[]): Array<GridColDef<Row>> {
    const firstItem = data[0];
    if (!firstItem) return [];

    return Object.keys(firstItem).map((key) => {
      let headerName = key;
      const colDef: GridColDef<Row> = {
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

  const rows: Row[] = useMemo(() => {
    const rows: Row[] = houses.map(
      ({
        title,
        permalink,
        thumbnail,
        currency_id,
        price,
        location,
        attributes,
        pricePerSquareMeter,
      }) => ({
        neighborhood: location.neighborhood.name,
        currency_id,
        price,
        pricePerSquareMeter,
        coveredArea:
          attributes.find((attr) => attr.id == "COVERED_AREA")?.value_struct
            ?.number ?? 0,
        totalArea:
          attributes.find((attr) => attr.id == "TOTAL_AREA")?.value_struct
            ?.number ?? 0,
        rooms: parseInt(
          attributes.find((attr) => attr.id == "ROOMS")?.value_name ?? "0"
        ),
        propertyType:
          attributes.find((attr) => attr.id == "PROPERTY_TYPE")?.value_name ??
          "",
        title,
        permalink,
        thumbnail,
      })
    );
    return rows;
  }, [houses]);

  const columns = useMemo(() => {
    return createColumns(rows);
  }, [rows]);

  interface Row {
    neighborhood: string;
    currency_id: string;
    price: number;
    pricePerSquareMeter: number;
    coveredArea: number;
    totalArea: number;
    rooms: number;
    propertyType: string;
    title: string;
    permalink: string;
    thumbnail: string;
  }

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
              const obj = JSON.parse(row as string) as Result;
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
    </div>
  );
}
