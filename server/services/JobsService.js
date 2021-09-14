import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
class JobsService {
  async createJob(jobData) {
    const job = await dbContext.Jobs.create(jobData)
    return job
  }

  async editJob(jobId, userId, jobData) {
    const job = await this.getJobById(jobId)
    if (userId !== job.creatorId.toString()) {
      throw new Forbidden('You shall not pass!!!')
    }
    job.jobTitle = jobData.jobTitle || job.jobTitle
    job.company = jobData.company || job.company
    job.rate = jobData.rate || job.rate
    job.hours = jobData.hours || job.hours
    job.description = jobData.description || job.description

    await job.save()
    return job
  }

  async removeJob(jobId, userId) {
    const job = await this.getJobById(jobId)
    if (userId !== job.creatorId.toString()) {
      throw new Forbidden('You did not create this Job')
    }
    await job.remove()
    return job
  }

  async getJobs(query) {
    const jobs = await dbContext.Jobs.find(query).populate('creator', 'name picture')
    return jobs
  }

  async getJobById(jobId) {
    const job = await dbContext.Jobs.findById(jobId).populate('creator', 'name picture')
    if (!job) {
      throw new BadRequest('You did not create this job')
    }
    return job
  }
}
export const jobsService = new JobsService()
