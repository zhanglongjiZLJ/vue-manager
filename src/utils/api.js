import axios from 'axios';
const api = "https://5aeefad55139c80014f228c3.mockapi.io"

//失物接口
export const getLost = () =>
  axios.get(`${api}/lost`)

export const createLost = (body) =>
  axios.post(`${api}/lost`, body)

export const removeLost = (id) =>
  axios.delete(`${api}/lost/${id}`)

//授课接口
export const getCourse = () =>
  axios.get(`${api}/course`)

export const createCourse = (body) =>
  axios.post(`${api}/course`, body)

export const removeCourse = (id) =>
  axios.delete(`${api}/course/${id}`)

//布局接口
export const getLayout = () =>
  axios.get(`${api}/layout`)

export const createLayout = (body) =>
  axios.post(`${api}/layout`, body)

export const removeLayout = (id) =>
  axios.delete(`${api}/layout/${id}`)

//警示接口
export const getWarn = () =>
  axios.get(`${api}/warn`)

export const createWarn = (body) =>
  axios.post(`${api}/warn`, body)

export const removeWarn = (id) =>
  axios.delete(`${api}/warn/${id}`)

//活动接口
export const getActivity = () =>
  axios.get(`${api}/activity`)

export const createActivity = (body) =>
  axios.post(`${api}/activity`, body)

export const removeActivity = (id) =>
  axios.delete(`${api}/activity/${id}`)
