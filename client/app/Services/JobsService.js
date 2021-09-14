import { ProxyState } from '../AppState.js'
import { Job } from '../Models/Job.js'
import { api } from './AxiosService.js'

class JobsService {
  async addJob(jobData) {
    const res = await api.post('api/jobs', jobData)
    console.log(res)
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
  }

  async getJob() {
    const res = await api.get('api/jobs')
    console.log(res)
    ProxyState.jobs = res.data.map(j => new Job(j))
    console.log(res)
  }

  async deleteJob(jobId) {
    await api.delete(`api/jobs/${jobId}`)
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== jobId)
  }

  async editJob(jobId) {
    await api.put(`api/jobs/${jobId}`)
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== jobId)
  }
}

export const jobsService = new JobsService()
