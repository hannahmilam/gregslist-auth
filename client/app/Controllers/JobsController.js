import { ProxyState } from '../AppState.js'
import { getJobFormTemplate } from '../forms/jobform.js'
import { jobsService } from '../Services/JobsService.js'

function _drawJobs() {
  let template = ''
  ProxyState.jobs.forEach(job => template += job.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

export class JobsController {
  constructor() {
    ProxyState.on('jobs', _drawJobs)
    jobsService.getJob()
  }

  async deleteJob() {
    try {
      await jobsService.deleteJob(jobId)
    } catch (error) {
      alert(error.message)
    }
  }

  async addJob() {
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target

    const jobData = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      rate: form.rate.value,
      hours: form.hours.value,
      description: form.description.value
    }

    try {
      await jobsService.addJob(jobData)
    } catch (error) {
      form.make.classList.add('border-danger')
      console.error(error)
      return
    }
    form.reset()
  }

  showJobs() {
    _drawJobs()
    document.getElementById('controls').innerHTML = `
      <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
        List Job Ad
      </button>
      `
    document.getElementById('forms').innerHTML = getJobFormTemplate()
  }

  toggleJobForm() {
    document.getElementById('job-form').classList.toggle('visually-hidden')
  }
}

// <button class="btn btn-info custom-font" onclick="app.animalsController.toggleAnimalForm()">Add Animal</button>
