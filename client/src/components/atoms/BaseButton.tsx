import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


type BaseButtonType = {
    variant: "text" | "outlined" | "contained" | undefined
    color:  "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined
    onClick: () => void,
    text: string
    sx?: React.CSSProperties;
}

export const BaseButton = ({
   variant,
   color,
   onClick,
   text,
   sx
}: BaseButtonType) => {
    return (
        <Box sx={{ ...sx }}>
            <Button variant={variant} color={color} onClick={onClick}>
                {text}
            </Button>
        </Box>
    );
};