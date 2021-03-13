import axios from "axios"

const getCurrentPrice = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await axios("/currentprice.json")
    return data.bpi
  } catch (ex) {
    throw ex
  }
}

export default getCurrentPrice
