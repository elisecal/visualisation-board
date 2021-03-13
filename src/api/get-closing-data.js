import axios from "axios"

const getClosingData = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await axios(
      "/historical/close.json?start=2019-01-01&end=2019-12-31"
    )
    return data.bpi
  } catch (ex) {
    throw ex
  }
}

export default getClosingData
