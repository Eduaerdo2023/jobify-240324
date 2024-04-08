import Job from '../models/JobModel.js'
import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/customErrors.js'

import { nanoid } from 'nanoid'

let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'facebook', position: 'back-end' }
]


export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(StatusCodes.OK).json({ jobs })
}

export const createJob = async (req, res) => {
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}

export const getJob = async (req, res) => {
  const { id } = req.params
  const job = await Job.findById(id)
 
  if (!job) throw  new NotFoundError(`no job with id: ${id}`)
  res.status(StatusCodes.OK).json({ job })
}

export const editJob = async (req, res) => {
  const { id } = req.params
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true
  })

  if (!updatedJob) {
    return res.status(404).json({ msg: `no job with id: ${id}` })
  }

  res.status(StatusCodes.OK).json({ msg: 'job mofified', job: updatedJob })
}

export const deleteJob = async (req, res) => {
  const { id } = req.params
  const removedJob = await Job.findByIdAndDelete(id)
  if (!removedJob) {
    return res.status(404).json({ msg: `no job found with id: ${id}` })
  }
  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob })
}