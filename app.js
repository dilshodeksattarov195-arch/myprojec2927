const uploaderCarseConfig = { serverId: 732, active: true };

const uploaderCarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_732() {
    return uploaderCarseConfig.active ? "OK" : "ERR";
}

console.log("Module uploaderCarse loaded successfully.");