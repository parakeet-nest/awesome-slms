FROM golang:1.22.5-alpine AS buildernext
WORKDIR /app
COPY main.go .
COPY go.mod .
COPY go.sum .
RUN go build

FROM scratch
WORKDIR /app
COPY --from=buildernext /app/completion-speed .
CMD ["./completion-speed"]
