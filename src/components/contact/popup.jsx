import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ActionAlerts() {
    const [close, setclose] = useState(true);
    return (
        close && (
            <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert
                    onClose={() => {
                        setclose(false);
                    }}
                >
                    Your Message has been sent!
                </Alert>
            </Stack>
        )
    );
}