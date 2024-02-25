import {
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { AvFilter } from "@/interfaces";
import { Dispatch, FormEventHandler, SetStateAction, useState } from "react";

export default function Filters({
  filters,
  setQueryFilter,
}: {
  filters: AvFilter[];
  setQueryFilter: Dispatch<
    SetStateAction<{
      [k: string]: FormDataEntryValue;
    }>
  >;
}) {
  // console.log({ filters });
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.currentTarget;
    const f = Object.fromEntries(new FormData(e.currentTarget));
    setQueryFilter(f);
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        FILTERS
      </Button>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        className="p-4"
      >
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex flex-col gap-3 outline-1 outline-zinc-950">
            <Button type="submit" variant="outlined">
              aplicar
            </Button>
            {filters.map((filter) => (
              <FormControl key={filter.id}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  {filter.name}
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  {filter.values.map((value) => (
                    <FormControlLabel
                      name={filter.id}
                      key={value.id}
                      value={value.id}
                      control={<Radio />}
                      label={value.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            ))}
          </div>
        </form>
      </Drawer>
    </>
  );
}
