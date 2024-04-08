import { Router } from "express";

const router = Router()
import {
  createJob,
  deleteJob,
  editJob,
  getAllJobs,
  getJob
} from "../controllers/jobController.js";

// router.get('/', getAllJobs)
// router.post('/', createJob)

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).patch(editJob).delete(deleteJob)

export default router


