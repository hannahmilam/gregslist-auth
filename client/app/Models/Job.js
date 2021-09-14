export class Job {
  constructor(jobData) {
    this.id = jobData.id
    this.jobTitle = jobData.jobTitle
    this.company = jobData.company
    this.rate = jobData.rate
    this.hours = jobData.hours
    this.description = jobData.description
  }

  get CardTemplate() {
    return /* html */`
    <div class="item mb-4 listing rounded bg-color">
      <div class="card custom-font">
        <div class="card-body">
          <p class="d-flex justify-content-between">
          ${this.jobTitle} | ${this.company} </p>
          <p class="d-flex justify-content-between">Rate: $${this.rate} | Hours: ${this.hours}</p>
          <p>${this.description}</p>
          <button class="btn btn-color" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
        </div>
      </div>
    </div>
    `
  }
}
