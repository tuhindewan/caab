<template>
    <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Employees List</h3>

                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" data-target="#addEmployee">
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


        <!-- Modal -->
        <div class="modal fade" id="addEmployee" tabindex="-1" role="dialog" aria-labelledby="addEmployeeLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addEmployeeLabel">Add New Employee</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="employeeCreate()">
                        <div class="modal-body">
                            <div class="form-group">
                                <input type="text" v-model="form.name" name="name" placeholder="Enter Name"
                                    class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <input type="text" v-model="form.designation" name="designation"
                                    placeholder="Enter Designation"
                                    class="form-control" :class="{ 'is-invalid': form.errors.has('designation') }">
                                <has-error :form="form" field="designation"></has-error>
                            </div>
                            <div class="form-group">
                                <input type="text" v-model="form.department" name="department"
                                    placeholder="Enter Department"
                                    class="form-control" :class="{ 'is-invalid': form.errors.has('department') }">
                                <has-error :form="form" field="department"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.email" type="email" name="email"
                                    placeholder="Enter Email Address"
                                    class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                            </div>
                            <div class="form-group">
                                <input type="text" v-model="form.mobile" name="mobile" placeholder="Enter Mobile Number"
                                    class="form-control" :class="{ 'is-invalid': form.errors.has('mobile') }">
                                <has-error :form="form" field="mobile"></has-error>
                            </div>
                            <div class="form-group">
                                <select class="form-control selectpicker"
                                        multiple name="roles[]" v-model="form.roles" :class="{ 'is-invalid': form.errors.has('roles') }"
                                        title="Select Employee Role">
                                    <option style="display: none"></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                            </select>
                            <div class="help-block invalid-feedback">The name field is required.</div>
                            <has-error :form="form" field="roles"></has-error>
                            </div>
                            <div class="form-group">
                                <input type="password" v-model="form.password" name="password" placeholder="Enter Password"
                                    class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                                <has-error :form="form" field="password"></has-error>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary btn-sm">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                form: new Form({
                    name: '',
                    designation: '',
                    department: '',
                    email: '',
                    mobile: '',
                    roles: [],
                    password: '',
                })
            }
        },
        methods:{
            employeeCreate(){
                this.form.post('api/employees')
                .then()
                .catch()
            }
        },
        mounted() {
            console.log('Component Mounted')
        }
    }
</script>

