<template>
    <div>
        <div class="row">
                <div class="col-lg-5">
                    <img style="width: 100%; height: 100%; max-height: 705px" src="../assets/images/Frame 1.png" alt="">
                </div>
                <div class="col-lg-7">
                   <div>
                     <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>  Back</p>
                   </div>

                    <p style="text-align:end">Personal Info</p>
                    <h3 class="display-3">Register Individual Account!</h3>
                    <p>For the purpose of industry regulation, your details are required.</p>

                    <div>
                        <form>
                                 <div class="mb-3">
                                    <label for="exampleInputName" class="form-label">Your fullname*</label>
                                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Invictus Innocent" required>
                                   
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address*</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" required>
                                    
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                   <div class="d-flex">
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" required>
                                        <p>show</p>
                                   </div>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
                                    <label class="form-check-label" for="exampleCheck1">I agree to terms & conditions</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Register Account</button>
                                <p class="text-center">or</p>
                                <div class="d-flex justify-content-between border">
                                    <img src="../assets/images/google-icon.png" alt="">
                                    <p>Register with Google</p>
                                </div>
                         </form>
                    </div>
                </div>
        </div>
        <oladele />
    </div>

</template>

