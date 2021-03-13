import axios from "axios"

const getPreviousDayPrice = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await axios("/historical/close.json", {
      params: { for: "yesterday" }
    })
    return data.bpi
  } catch (ex) {
    throw ex
  }
}

export default getPreviousDayPrice
