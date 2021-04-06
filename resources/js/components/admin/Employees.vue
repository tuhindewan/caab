<template>
    <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Employees List</h3>

                <div class="card-tools">
                    <button class="btn btn-success">
                        Add New
                        <i class="fas fa-user-plus"></i>
                    </button>
                </div>
              </div>
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Department</th>
                      <th>Role</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td>Director</td>
                      <td>ATS</td>
                      <td>Admin</td>
                      <td>director@gmail.com</td>
                      <td>01303454560</td>
                      <td>
                          <a type="button">
                              <i class="fas fa-edit text-blue"></i>
                          </a>
                          /
                          <a type="button">
                              <i class="fas fa-trash text-red"></i>
                          </a>
                          /
                          <a type="button">
                              <i class="fas fa-eye text-cyan"></i>
                          </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
