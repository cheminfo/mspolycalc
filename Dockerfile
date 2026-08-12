FROM joseluisq/static-web-server:2-alpine

COPY html /public
COPY sws.toml /etc/sws.toml

EXPOSE 80

CMD ["-w", "/etc/sws.toml"]
