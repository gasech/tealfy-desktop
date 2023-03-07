import Data from "@renderer/models/Data"

export const saveData = (data: Data) => {
  window.electron.ipcRenderer.send('save', JSON.stringify(data, null, 2))
}

export const readData = async (): Promise<Data> => {
  let data: Data = await window.electron.ipcRenderer.invoke('read')

  return data;
}
