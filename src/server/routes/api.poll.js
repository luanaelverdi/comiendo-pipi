module.exports = (server) => {
    server.app.get('/api/poll/:id_user', async (req, res) => {
        const credenciales = server.users.find(user => user.id == req.params.id_user);
        await res.json({ credenciales });

        if (credenciales && credenciales.qr.id_producto) {
            server.users = server.users.filter(c => parseInt(c.id) != parseInt(credenciales.id));
            const newCredentials = { id: credenciales.id, qr: { id_producto: null } };
            server.users.push(newCredentials);
        }
    });
}