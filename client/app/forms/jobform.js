export function getJobFormTemplate() {
  return /* html */`
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Animal Listing</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <form class="bg-white rounded p-3 shadow" onsubmit="app.jobsController.addJob()"
      id="job-form">
      <div class="form-group"><label for="jobTitle">Job Title:</label>
      <input type="text" class="form-control" name="jobTitle" id="jobTitle">
      </div>
    
      <div class="form-group"><label for="company">Company Name:</label>
      <input type="text" class="form-control" name="company" id="company">
      </div>
    
      <div class="form-group"><label for="rate">Pay Rate:</label>
      <input type="text" class="form-control" name="rate" id="rate">
      </div>

      <div class="form-group"><label for="hours">Hours per week:</label>
      <input type="text" class="form-control" name="hours" id="hours">
      </div>
    
      <div class="form-group">
        <label for="description" class="">description:</label>
        <input type="text" class="form-control" name="description" id="description" rows="5">
      </div>
    
      <div class="button-group my-3">
        <button type="reset" class="btn btn-secondary">clear</button>
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">submit</button>
      </div>
    
    </form>
     
      </div>
    </div>
  </div>
</div>

`
}
