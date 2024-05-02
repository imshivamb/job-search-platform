import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { techRoles, techStack } from "../lib/constants";
import { RootState } from "../store";
import { setFilter } from "../store/filtersSlice";
import { FilterCriteria } from "../types/types";

const FilterComponent: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch(setFilter({ ...filters, [name]: value }));
  };

  const handleMultiSelectChange = (
    event: SelectChangeEvent<string[] | number>,
    name: keyof FilterCriteria
  ) => {
    const value = event.target.value;
    dispatch(setFilter({ ...filters, [name]: value }));
  };

  return (
    <div>
      <Container
        sx={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}
      >
        <FormControl sx={{ height: 38, fontSize: 13 }}>
          <Select
            sx={{
              height: 38,
              fontSize: 13,
              minWidth: "150px",
              minHeight: "100%",
            }}
            name="roles"
            multiple
            value={filters.role}
            placeholder="Roles"
            onChange={(e) => handleMultiSelectChange(e, "role")}
            renderValue={(selected) => selected.join(", ")}
          >
            {techRoles.map((roles) => (
              <MenuItem id={roles} value={roles}>
                {roles}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          name="companyName"
          label="Company Name"
          size="small"
          value={filters.companyName}
          onChange={handleFilterChange}
          sx={{ height: 38, fontSize: 13, marginInline: "15px" }}
        />
        <TextField
          name="location"
          label="Location"
          size="small"
          value={filters.location}
          onChange={handleFilterChange}
          sx={{
            height: 38,
            fontSize: 13,
            fontWeight: 400,
            fontFamily: "Lexend",
            marginInline: "15px",
          }}
        />
        <FormControl sx={{ height: 38, fontSize: 13 }}>
          <InputLabel>Experience</InputLabel>
          <Select
            sx={{ height: 38, fontSize: 13 }}
            name="experience"
            value={filters.experience}
            onChange={(e) => handleMultiSelectChange(e, "experience")}
          >
            {[...Array(10).keys()].map((exp) => (
              <MenuItem key={exp + 1} value={exp + 1}>
                {exp + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Tech Stack</InputLabel>
          <Select
            sx={{ height: 38, fontSize: 13 }}
            name="techStack"
            multiple
            value={filters.techStack}
            onChange={(e) => handleMultiSelectChange(e, "techStack")}
            renderValue={(selected) => selected.join(", ")}
          >
            {techStack.map((stack) => (
              <MenuItem id={stack} value={stack}>
                {stack}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ height: 38, fontSize: 13 }}>
          <Select
            sx={{ height: 38, fontSize: 13 }}
            name="remoteOrOnsite"
            multiple
            value={filters.remoteOrOnsite}
            onChange={(e) => handleMultiSelectChange(e, "remoteOrOnsite")}
            renderValue={(selected) => selected.join(", ")}
          >
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="hybrid">Hybrid</MenuItem>
            <MenuItem value="onsite">Onsite</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </div>
  );
};

export default FilterComponent;
