const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true,
    },
}).argv;

//arg.direccion

//lugar.getLugarLatLng(argv.direccion).then(console.log);

//clima.getClima(40.75, -74.0).then(console.log).catch(console.log);

const getInfo = async(direccion) => {
    try {
        const cor = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(cor.lat, cor.lng);
        return `El clima de ${cor.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

getInfo(argv.direccion).then(console.log).catch(console.log);