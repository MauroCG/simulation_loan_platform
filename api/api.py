from datetime import datetime
from flask import Flask, request

app = Flask(__name__)

@app.route('/time')
def get_current_time():
	current_time = datetime.now().time()
	return {'time': str(current_time)}


@app.route('/request_loan', methods = ['POST'])
def request_loan():
	requested_amount = float(request.form.get('requestedAmount'))

	if requested_amount > 50000:
		loan_decision = "Declined"
	elif requested_amount == 50000:
		loan_decision = "Undecided"
	else:
		loan_decision = "Approved"

	return {'loanDecision': loan_decision}