# MSPolyCalc

Interactive analysis of high resolution mass spectra of polymers — Kendrick
plots, mass defect analysis and report generation, entirely in the browser.

The page is a [cheminfo visualizer](https://github.com/cheminfo/visualizer) view:
`html/index.html` boots the visualizer from the lactame.com CDN and loads the
view from
[couch.cheminfo.org](https://couch.cheminfo.org/cheminfo-public/230d2530cee8782b3cb63dc4e25931d9/view.json).
There is no build step and no backend — this repository holds only
`html/index.html` and `html/config.json`, served by
[static-web-server](https://static-web-server.net/) with `sws.toml`.

The visualizer version is pinned in the two `<script>` URLs of
`html/index.html`. Released versions are listed at
<https://www.lactame.com/visualizer/>; bump both URLs together to upgrade.
Pinning matters because the view is written against a specific visualizer —
v2.176.1, for instance, 404s on `browserified/openchemlib/openchemlib-core.js`.

Everything else the view needs — the visualizer-helper modules and the shared
libraries it asks for under `../../github/…` and `../../lib/…` — resolves
against the CDN on its own, since that is where the visualizer is loaded from.

## Local preview

```sh
npm run dev
```

Then open <http://localhost:40828>. `npm run dev` is a dependency-free static
server for `html/`; `docker compose up -d --build` runs the real image instead.

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
