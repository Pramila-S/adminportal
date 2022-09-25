import React from 'react'

function Topbar() {
  return (
    <nav Class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/* <!-- Sidebar Toggle (Topbar) --> */}
                    <button id="sidebarToggleTop" Class="btn btn-link d-md-none rounded-circle mr-3">
                        <i Class="fa fa-bars"></i>
                    </button>

                    {/* <!-- Topbar Search --> */}
                    <form
                        Class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div Class="input-group">
                            <input type="text" Class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2" />
                            <div Class="input-group-append">
                                <button Class="btn btn-primary" type="button">
                                    <i Class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* <!-- Topbar Navbar --> */}
                    <ul Class="navbar-nav ml-auto">

                        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                        <li Class="nav-item dropdown no-arrow d-sm-none">
                            <a Class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i Class="fas fa-search fa-fw"></i>
                            </a>
                            {/* <!-- Dropdown - Messages --> */}
                            <div Class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form Class="form-inline mr-auto w-100 navbar-search">
                                    <div Class="input-group">
                                        <input type="text" Class="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2" />
                                        <div Class="input-group-append">
                                            <button Class="btn btn-primary" type="button">
                                                <i Class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Alerts --> */}
                        <li Class="nav-item dropdown no-arrow mx-1">
                            <a Class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i Class="fas fa-bell fa-fw"></i>
                                {/* <!-- Counter - Alerts --> */}
                                <span Class="badge badge-danger badge-counter">3+</span>
                            </a>
                            {/* <!-- Dropdown - Alerts --> */}
                            <div Class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 Class="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a Class="dropdown-item d-flex align-items-center" href="#">
                                    <div Class="mr-3">
                                        <div Class="icon-circle bg-primary">
                                            <i Class="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div Class="small text-gray-500">December 12, 2019</div>
                                        <span Class="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a Class="dropdown-item d-flex align-items-center" href="#">
                                    <div Class="mr-3">
                                        <div Class="icon-circle bg-success">
                                            <i Class="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div Class="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a Class="dropdown-item d-flex align-items-center" href="#">
                                    <div Class="mr-3">
                                        <div Class="icon-circle bg-warning">
                                            <i Class="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div Class="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a Class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Messages --> */}
                        <li Class="nav-item dropdown no-arrow mx-1">
                            <a Class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i Class="fas fa-envelope fa-fw"></i>
                                {/* <!-- Counter - Messages --> */}
                                <span Class="badge badge-danger badge-counter">7</span>
                            </a>
                            {/* <!-- Dropdown - Messages --> */}
                            <div Class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 Class="dropdown-header">
                                    Message Center
                                </h6>
                                <a Class="dropdown-item d-flex align-items-center" href="#">
                                    <div Class="dropdown-list-image mr-3">
                                        <img Class="rounded-circle" src="img/undraw_profile_1.svg"
                                            alt="..." />
                                        <div Class="status-indicator bg-success"></div>
                                    </div>
                                    <div Class="font-weight-bold">
                                        <div Class="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div Class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a Class="dropdown-item d-flex align-items-center" href="#">
                                    <div Class="dropdown-list-image mr-3">
                                        <img Class="rounded-circle" src="img/undraw_profile_2.svg"
                                            alt="..." />
                                        <div Class="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div Class="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div Class="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a Class="dropdown-item d-flex align-items-center" href="#">
                                    <div Class="dropdown-list-image mr-3">
                                        <img Class="rounded-circle" src="img/undraw_profile_3.svg"
                                            alt="..." />
                                        <div Class="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div Class="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div Class="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a Class="dropdown-item d-flex align-items-center" href="#">
                                    <div Class="dropdown-list-image mr-3">
                                        <img Class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="..." />
                                        <div Class="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div Class="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div Class="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a Class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li>

                        <div Class="topbar-divider d-none d-sm-block"></div>

                        {/* <!-- Nav Item - User Information --> */}
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img class="img-profile rounded-circle"
                                    src="img/undraw_profile.svg" />
                            </a>
                            {/* <!-- Dropdown - User Information --> */}
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
  );
}

export default Topbar;