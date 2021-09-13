from flask import Flask, request

app = Flask(__name__)


@app.route('/request_loan', methods = ["POST"])
def request_loan():
	requested_amount = float(request.json['requestedAmount'])
	print(requested_amount)

	if requested_amount > 50000:
		loan_decision = "Declined"
	elif requested_amount == 50000:
		loan_decision = "Undecided"
	else:
		loan_decision = "Approved"

	return {"loanDecision": loan_decision}