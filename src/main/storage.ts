import fs from "fs"
import os from "os"

// TODO Add Windows compatibility...
const storagePath = `/home/${os.userInfo().username}/.cache/tealfy/`

export const readData = () => {
  let data;

  try {
    data = JSON.parse(fs.readFileSync(storagePath + "data.json", 'utf8'));
  } catch (err) {
    console.error(err)
  }

  return data;
}

export const saveData = (data: string) => {
  try {
    fs.writeFileSync(storagePath + "data.json", data)
  } catch (err) {
    console.error(err)
  }
}


export const createDefaultData = () => {
  if (!fs.existsSync(storagePath)) {
    const defaultData = {
      widgets: [],
      preferences: {
        colorSheme: "dark",
        fontSize: "large",
        fontFamily: "default",
        clockFormat: 12,
      }
    }

    try {
      fs.mkdirSync(storagePath, { recursive: true });
      fs.writeFileSync(storagePath + "data.json", JSON.stringify(defaultData, null, 2))
    } catch (err) {
      console.error(err)
    }
  }
}

