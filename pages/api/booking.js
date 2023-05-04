

const rezervari = [
  {
    nume: "Cristian Scarlat",
    nrPers: 2,
    startDate: {
      day: 11,
      month: 5,
      year: 2023
    },
    endDate: {
      day: 14,
      month: 5,
      year: 2023
    }
  },
  {
    nume: "Andreea ",
    nrPers: 3,
    startDate: {
      day: 15,
      month: 5,
      year: 2023
    },
    endDate: {
      day: 20,
      month: 5,
      year: 2023
    }
  },
  {
    nume: "Blonda ",
    nrPers: 1,
    startDate: {
      day: 30,
      month: 5,
      year: 2023
    },
    endDate: {
      day: 4,
      month: 6,
      year: 2023
    }
  },
  {
    nume: "Blonda ",
    nrPers: 1,
    date: ['30/05/2023', '31/05/2023']
  }
]

function get(req, res) {
  console.log("get");
  res.status(200).json({status: 'ok', data: rezervari})
}


export default (req, res) => {
  switch(req.method){
    case 'GET':
      get(req, res);
      break;
    default:
      break;
  }
}