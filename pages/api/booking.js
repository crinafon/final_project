const rezervari = [
  {
    nume: "Cristian Scarlat",
    nrPers: 2,
    date: ['11/05/2023', '12/05/2023', '13/05/2023', '14/05/2023', '15/05/2023', '16/05/2023']
  },
  {
    nume: "Andreea ",
    nrPers: 3,
    date: ['15/06/2023', '16/06/2023', '17/06/2023', '18/06/2023', '19/06/2023', '20/06/2023']
  },
  {
    nume: "Blonda ",
    nrPers: 1,
    date: ['10/06/2023', '11/06/2023', '12/06/2023', '13/06/2023', '14/06/2023']
  },
  {
    nume: "Blonda ",
    nrPers: 1,
    date: ['30/05/2023', '31/05/2023']
  }
]

function get(req, res) {
  res.status(200).json({status: 'ok', data: rezervari})
}


export default (req, res) => {
  switch (req.method) {
    case 'GET':
      get(req, res);
      break;
    default:
      break;
  }
}