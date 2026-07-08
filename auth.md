# auth.md

This service supports agentic registration for Cruz de Prata Laboratório.
- Resource Server: https://cruzdepratalaboratorio.com.br
- Authorization Server: https://cruzdepratalaboratorio.com.br

## Discover
Agents should discover endpoints by checking:
- The `/.well-known/oauth-protected-resource` path.
- The `/.well-known/oauth-authorization-server` path.

## Register
Since this website serves public medical and laboratory information, access is public and anonymous. AI Agents do not need to register credentials to access any content.

If an agent requires authenticated context:
1. Perform a `POST` request to the registration URI (anonymous flow).
2. The service immediately grants anonymous read access.

## Scopes & Claims
- `public`: Access public laboratory hours, exams preparation info, and specialties.

## Revocation
To revoke access, delete cached endpoints and tokens. Contact the lab via WhatsApp (17) 3262-0705 for policy inquiries.
