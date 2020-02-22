## Retrieves a new JWT token and copies it to the clipboard
jwt:

	curl -vv -X POST "http://localhost:8181/rbac/users/login" -H "accept: */*" -H "Content-Type: application/json" -d "{\"email\":\"test@test.com\",\"password\":\"asdfasdf\"}" | jq -r '.token' | pbcopy
