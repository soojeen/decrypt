# Development

`npm install`
`npm run dev`

To pass in a private key as an environment variable use `DECRYPT_PRIVATE_KEY`

for example using the test keys
```
export DECRYPT_PRIVATE_KEY="
-----BEGIN PGP PRIVATE KEY BLOCK-----

xYYEZeEerhYJKwYBBAHaRw8BAQdAsf68+zwBGxo24FRo0i0AXDjq/EjBrKlp
2g95sLY6WNP+CQMI2oXeOAxiQa7g+hF6qv9N8FxKNrzffGY4Bk9aTCqzBqsC
oDKSejDx42BqoZMvGOl5V9WAqplxw3XPa8YcM2h0aKuv3oJbsA5TSiTiF0rn
3M0bSm9uIFNtaXRoIDxqb25AZXhhbXBsZS5jb20+wowEEBYKAD4FgmXhHq4E
CwkHCAmQe8NfrxsVYekDFQgKBBYAAgECGQECmwMCHgEWIQTWum6P0j2ET0uP
rKN7w1+vGxVh6QAAtYYBAPE3qdsSsVsF0EIc73BzfNODiSUmI/2prF6Xxps5
0SgrAQCYGrBWR6WQh3L43x3GKAMtV+bd80mlTk3vhH6IIjy8CseLBGXhHq4S
CisGAQQBl1UBBQEBB0A46ROQNWc8nKVG/hmB7apXj0PVvHwQbMiHKuSFMTYi
ZgMBCAf+CQMIBlECABMRVRjgm9Ivs8Kcvdu5xQU/cA+YuCZRMwoL022yscX4
ekYtxv/3mQtgYNV5clAZI3zaXJh87Ys8bYA1h0pt3B7GjAi6cw9I3oHrg8J4
BBgWCgAqBYJl4R6uCZB7w1+vGxVh6QKbDBYhBNa6bo/SPYRPS4+so3vDX68b
FWHpAACSsgEA6M4M/hrghP2tESoir6VJqWxFEzVugZ9ksViCO8ntSCkBAP0a
674ZxOp4c7ffRWEwjW6jN1L9AtWRJEZ12Z+z1xwD
=qUmt
-----END PGP PRIVATE KEY BLOCK-----
"
```

# Samples

See the samples directory for files and private keys you can test with.

# TODO

- https://stackoverflow.com/questions/21999877/node-express-generate-a-one-time-route-link-download
- html templates using template literals
- obfuscate keys? https://stackoverflow.com/questions/5442436/using-rot13-and-tr-command-for-having-an-encrypted-email-address

