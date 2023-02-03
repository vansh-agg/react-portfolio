import React, { useState, useContext } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { contactcontext } from './contexts'
export default function ActionAlerts() {
    const { btn, setbtn } = useContext(contactcontext);
    return (
        btn && (
            <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert
                    onClose={() => {
                        setbtn(false);
                    }}
                >
                    Your Message has been sent!
                </Alert>
            </Stack>
        )
    );
}