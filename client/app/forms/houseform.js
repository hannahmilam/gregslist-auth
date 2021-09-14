export function getHouseFormTemplate() {
  return /* html */`
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  <form class="bg-white rounded p-3 shadow" onsubmit="app.housesController.addHouse()"
  id="house-form">
  <div class="form-group">
    <label for="type" class="">Type:</label>
    <select name="type" id="type" required class="form-control">
      <option disabled selected value="">Please Choose House Type</option> 
      <option>Single Family Home</option>
      <option>Multi Family Home </option>
      <option>Dublex</option>
      <option>Townhome</option>
      <option>Apartment/Condo</option>
    </select>
  </div>
  <div class="form-group">
    <label for="price" class="">Price:</label>
    <input type="number" class="form-control" name="price" id="price" required>
  </div>
  <div class="form-group">
    <label for="bedrooms" class="">Bedrooms:</label>
    <input type="number" class="form-control" name="bedrooms" id="bedrooms" min="0" max="20" required>
  </div>
  <div class="form-group">
    <label for="bathrooms" class="">Bathrooms:</label>
    <input type="number" class="form-control" name="bathrooms" id="bathrooms" min="0" max="20" required>
  </div>
  <div class="form-group">
    <label for="levels" class="">Levels:</label>
    <input type="number" class="form-control" name="levels" id="levels" min="0" max="20" required>
  </div>
  <div class="form-group">
    <label for="year" class="">Year:</label>
    <input type="year" class="form-control" name="year" id="year">
  </div>
  <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="imgUrl" class="">Image:</label>
    <input type="url" class="form-control" name="imgUrl" id="imgUrl" required>
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
