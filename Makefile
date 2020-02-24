#
#	                    __    _
#	   ____  ___  _____/ /_  (_)____  ____  _________
#	  / __ \/ _ \/ ___/ __/ / / ___/ / __ \/ ___/ __ \
#	 / / / /  __(__  ) /_  / (__  ) / /_/ / /  / /_/ /
#	/_/ /_/\___/____/\__/_/ /____(_) .___/_/   \____/
#	                   /___/      /_/
#										   nestjs.pro
#

## Retrieves a new JWT token and copies it to the clipboard
jwt:

	curl -vv -X POST "http://localhost:8081/rbac/users/login" -H "accept: */*" -H "Content-Type: application/json" -d "{\"email\":\"test@test.com\",\"password\":\"asdfasdf\"}" | jq -r '.token' | pbcopy
