const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader(
        "Content-Type",
        "application/json"
    );

    if (
        req.method === "GET" &&
        req.url === "/products"
    ) {
        return res.end(
            JSON.stringify({
                message: "Get Products"
            })
        );
    }

    if (
        req.method === "POST" &&
        req.url === "/products"
    ) {
        return res.end(
            JSON.stringify({
                message: "Create Product"
            })
        );
    }

    if (
        req.method === "PUT" &&
        req.url === "/products/1"
    ) {
        return res.end(
            JSON.stringify({
                message: "Update Product"
            })
        );
    }

    if (
        req.method === "PATCH" &&
        req.url === "/products/1"
    ) {
        return res.end(
            JSON.stringify({
                message: "Patch Product"
            })
        );
    }

    if (
        req.method === "DELETE" &&
        req.url === "/products/1"
    ) {
        return res.end(
            JSON.stringify({
                message: "Delete Product"
            })
        );
    }

    res.statusCode = 404;

    res.end(
        JSON.stringify({
            message: "Route Not Found"
        })
    );
});

server.listen(3000, () => {
    console.log("Server Running On Port 3000");
});