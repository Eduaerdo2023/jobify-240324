import { Router } from "express";

const router = Router()
import {
  createJob,
  deleteJob,
  editJob,
  getAllJobs,
  getJob
} from "../controllers/jobController.js";
import { validateIdParam, validateJobInput } from "../middleware/validationMiddleware.js";

// router.get('/', getAllJobs)
// router.post('/', createJob)

router.route('/').get(getAllJobs).post(validateJobInput, createJob)
router.route('/:id').get(validateIdParam ,getJob).patch(validateJobInput, validateIdParam ,editJob).delete(validateIdParam ,deleteJob)

export default router


