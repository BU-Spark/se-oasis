import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { firestore, storage } from "../../utils/firebaseAuth";

// Define a type for the structure of journalData
type JournalData = {
    date: string;
    entry?: string;
    file?: {
        name: string;
        size: number;
        type: string;
        content: string; // File content as a download URL
    };
};

interface JournalEntryProps {
    defaultDate?: string; // Date string in mm-dd-yyyy format
}

const JournalEntry: React.FC<JournalEntryProps> = ({ defaultDate }) => {
    // State to hold the selected date
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [textEntry, setTextEntry] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // Convert the default date string to a Date object
    useEffect(() => {
        if (defaultDate) {
            // Parsing default date string and setting Date object
            const dateParts = defaultDate.split("-");
            const year = parseInt(dateParts[2], 10);
            const month = parseInt(dateParts[0], 10) - 1; // Month is zero-based
            const day = parseInt(dateParts[1], 10);

            const defaultDateObject = new Date(year, month, day);
            setSelectedDate(defaultDateObject);
        } else {
            setSelectedDate(new Date()); // Set current date as default
        }
    }, [defaultDate]);

    // Function to handle date changes
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Get the selected date from the input value
        const selected = new Date(event.target.value);

        // Adjust for time zone offset to display the correct date
        const offset = selected.getTimezoneOffset() * 60 * 1000;
        const correctedDate = new Date(selected.getTime() + offset);

        setSelectedDate(correctedDate);
    };

    // Function to handle text entry
    const handleTextEntry = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextEntry(event.target.value);
    };

    // Function to handle file submission
    const handleFileSubmission = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        const journalData: JournalData = {
            date: selectedDate!.toISOString(),
        };

        if (textEntry) {
            journalData.entry = textEntry;
        }

        if (selectedFile) {
            const storageRef = ref(storage, selectedFile.name);

            try {
                // Upload file to Firebase Storage
                const snapshot = await uploadBytes(storageRef, selectedFile);
                console.log("File uploaded:", snapshot);

                // Get the download URL for the file
                const downloadURL = await getDownloadURL(storageRef);
                console.log("Download URL:", downloadURL);

                // Update journalData with file details
                journalData.file = {
                    name: selectedFile.name,
                    size: selectedFile.size,
                    type: selectedFile.type,
                    content: downloadURL, // Save the file download URL in Firebase
                };
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        }

        // Save journalData to Firestore
        try {
            const docRef = await addDoc(
                collection(firestore, "journalEntries"),
                journalData
            );
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }

        // Simulate API call to save journal data
        try {
            const response = await axios.post(
                `${process.env.SERVER_PROTOCOL || "http"}://${
                    process.env.SERVER_HOST || "34.132.142.209"
                }:${process.env.SERVER_PORT || "5675"}/api/v1/publish`,
                {
                    topicId: "userJournalEntry",
                    data: {
                        jsonData: journalData, // Send the entire journalData object
                    },
                }
            );
            console.log("Journal data saved:", response.data);
            console.log("Journal data date:", journalData.date);
            console.log("Journal data entry:", journalData.entry);
            console.log("Journal data entry:", journalData.file);
            // Reset state after successful submission (if needed)
        } catch (error) {
            console.error("Error saving journal data:", error);
        }
    };

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            spacing={3}
            sx={{ padding: "20px" }}
        >
            <Grid item>
                {/* Date picker */}
                <label htmlFor="journalDate">Select Date:</label>
                <input
                    type="date"
                    id="journalDate"
                    value={selectedDate?.toISOString().split("T")[0]}
                    onChange={handleDateChange}
                />
            </Grid>

            <Grid item>
                {/* Updated date styling */}
                <Typography variant="h4" sx={{ color: "#007bff" }}>
                    {selectedDate?.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })}
                </Typography>
            </Grid>

            {/* Text box for user input */}
            <Grid item>
                <TextField
                    multiline
                    rows={6}
                    variant="outlined"
                    placeholder="Write your journal entry here"
                    fullWidth
                    sx={{ minWidth: 300 }}
                    value={textEntry}
                    onChange={handleTextEntry}
                />
            </Grid>

            <Grid item>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* File submission box */}
                    <input
                        type="file"
                        style={{ marginRight: "10px" }}
                        onChange={handleFileSubmission}
                    />
                    {/* Upload button */}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        Upload
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default JournalEntry;
