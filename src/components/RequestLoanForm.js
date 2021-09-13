import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function RequestLoanForm({ setDecision }) {
	const { control, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
					   setDecision("...");
					   setTimeout(function() {
					   fetch("/request_loan", {
							  method: "POST",
							  headers: {
								"Content-Type": "application/json",
							  },
							  body: JSON.stringify(data),
					   })
					     .then((res) => res.json())
					     .then((data) => setDecision(data.loanDecision)
					   )}, 5000);
					 };

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
		  <Grid container alignItems="center" justify="center" direction="column">
		    <Grid item>
			  <Controller
			    name="taxID"
			    control={control}
			    rules={{ required: true, maxLength: 9, minLength: 9 }}
			    render={({ field }) => <TextField 
										 {...field}
										 label="Tax ID"
										 type="number"
									   />}
			  />
			  { errors.taxID?.type === "required" && <p>The tax id is required</p> }
			  { errors.taxID?.type === "minLength" && <p>The length of tax id must be 9</p> }
			  { errors.taxID?.type === "maxLength" && <p>The length of tax id must be 9</p> }
			</Grid>
			<Grid item>
			  <Controller
			    name="businessName"
			    control={control}
			    rules={{ required: true }}
			    render={({ field }) => <TextField 
										 {...field}
										 label="Business name"
										 type="text"
									   />}
			  />
			  { errors.businessName && <p>The business name is required</p> }
			</Grid>
			<Grid item>
			  <Controller
			    name="requestedAmount"
			    control={control}
			    rules={{ required: true, min: 1 }}
			    render={({ field }) => <TextField 
										 {...field}
										 label="Requested amount"
										 type="number"
									   />}
			  />
			  { errors.requestedAmount?.type === "required" && <p>The requested amount is required</p> }
			  { errors.requestedAmount?.type === "min" && <p>The requested amount must be greater than 0</p> }
			</Grid>
			<hr />
			<Button variant="contained" color="primary" type="submit">
			  Request loan
			</Button>
		  </Grid>
		</form>
	);
};