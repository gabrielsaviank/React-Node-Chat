import React from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
type BaseInputProps = {
    label: string;
    variant: "standard" | "outlined" | "filled" | undefined;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fullWidth: boolean;
    sx?: React.CSSProperties;
};

export const BaseInput: React.FC<BaseInputProps> = ({
    label,
    variant,
    type,
    value,
    onChange,
    fullWidth,
    sx
}) => {
    return (
        <Box sx={{ ...sx }}>
            <TextField
                label={label}
                variant={variant}
                type={type}
                value={value}
                onChange={onChange}
                fullWidth={fullWidth}
            />
        </Box>
    );
};