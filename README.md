# MSPolyCalc

Interactive analysis of high resolution mass spectra of polymers — Kendrick
plots, mass defect analysis and report generation, entirely in the browser.

The page is a [cheminfo visualizer](https://github.com/cheminfo/visualizer) view:
`html/index.html` boots the visualizer bundled under `html/visualizer/` and loads
the view from
[couch.cheminfo.org](https://couch.cheminfo.org/cheminfo-public/230d2530cee8782b3cb63dc4e25931d9/view.json).
There is no build step and no backend — the whole site is the static content of
`html/`, served by [static-web-server](https://static-web-server.net/) with
`sws.toml`.

That view asks for the visualizer-helper modules and the shared libraries
through paths relative to the visualizer directory (`../../github/…`,
`../../lib/…`), which only resolve when the page is served from
www.lactame.com. `sws.toml` redirects the `/github/` and `/lib/` prefixes back
to the CDN, so the view works unchanged from any host. Without it the page
still renders but `mass-tools` and several helpers fail to load, and no mass
is ever computed.

## Local preview

```sh
docker compose up -d --build
```

Then open <http://localhost:40828>. Any static file server pointed at `html/`
works too, for example `npx serve html`.

## Deployment

Copy the env template and pick a deployment mode by uncommenting exactly one
`COMPOSE_FILE` line:

```sh
cp .env.example .env
docker compose up -d
```

| Mode                     | `COMPOSE_FILE`             | Exposure                                      |
| ------------------------ | -------------------------- | --------------------------------------------- |
| Port published (default) | `compose.yaml`             | Publishes `PORT` on the host                   |
| Traefik                  | `compose.traefik.yaml`     | `www.polycalc.org` on the `traefik` network    |
| Cloudflare Tunnel        | `compose.cloudflared.yaml` | No published port; needs `TUNNEL_TOKEN`        |

Every mode runs `ghcr.io/cheminfo/mspolycalc:latest`, published by the
`docker-image` workflow when release-please tags a version. Add `--build` to
build the image from the checkout instead.

### Domains

The Traefik mode answers on four hostnames. `www.polycalc.org` is canonical and
serves the page; `polycalc.org`, `mspolycalc.org` and `www.mspolycalc.org` are a
301 to it, so the same content is never served under four names. All four need
an A record pointing at this host — Let's Encrypt issues one certificate per
hostname and the challenge fails for any that resolves elsewhere.

## Environment variables

| Variable       | Default | Used by                    | Description                                              |
| -------------- | ------- | -------------------------- | -------------------------------------------------------- |
| `COMPOSE_FILE` | unset   | `docker compose`           | Selects the deployment mode. Unset means `compose.yaml`. |
| `PORT`         | `40828` | `compose.yaml`             | Host port. The container always serves on `80`.          |
| `TUNNEL_TOKEN` | unset   | `compose.cloudflared.yaml` | Cloudflare Tunnel connector token.                       |
