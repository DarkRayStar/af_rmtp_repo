import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//common routes
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

//admin routes
import AdminDocUpload from "./components/admin-components/admin-file-upload.component";
import AdminHome from "./components/admin-components/admin-home.component";
import EditAdminFile from "./components/admin-components/admin-file-edit.component";
import AdminFileList from "./components/admin-components/uploaded-files-admin.component";
import AddNewSubmissionType from "./components/admin-components/create-new-submission-type.component";
import SubmissionTypesList from "./components/admin-components/submission-types-admin.component";
import EditSubmissionType from "./components/admin-components/admin-submission-type-edit.component";
import MarkingSchemeUpload from "./components/admin-components/marking-scheme-upload.component";
import MarkingSchemeList from "./components/admin-components/uploaded-marking-schemes.component";
import EditMarkingScheme from "./components/admin-components/marking-scheme-edit.component";
import AdminStudentList from "./components/admin-components/registered-students.component";
import AdminUpdateStudentDetails from "./components/admin-components/admin-edit-student.component";
import AdminEmployeeList from "./components/admin-components/registered-employees.component";
import AdminUpdateEmployeeDetails from "./components/admin-components/admin-edit-employee.component";
import AdminGroupList from "./components/admin-components/admin-registered-groups.component";
import AllocatePanelMember from "./components/admin-components/allocate-panel-member.component";

import AddSubmission from "./components/admin-components/add-submission.component";

//supervisour routes
import SupervisorHome from "./components/supervisor-components/supervisor-home.component";
import SupervisorTopicList from "./components/supervisor-components/supervisor-topic-list.component";
import SupervisorEditTopics from "./components/supervisor-components/supervisor-topic-edit.component";
import SuperrvisorStdGroupList from "./components/supervisor-components/supervisor-stdGroup-list.component";
import SupervisorEditStdGroups from "./components/supervisor-components/supervisor-stdGroup-edit.component";

//co-supervisor routes
import CoSupervisorHome from "./components/co-supervisor-components/co-supervisor-home.component";
import CoSupervisorGroupList from "./components/co-supervisor-components/co-supervisor-topic-list.components";
import CoSupervisorEditGroups from "./components/co-supervisor-components/co-supervisor-topic-list-edit.component";

//panel member routes
import PanelHome from "./components/panel-member-component/panel-home.component";

//usermanagement routes
import userManagementHome from "./components/userManagement-components/userManagement-home.component";
import StudentDetailsList from "./components/userManagement-components/student-list.component";
import AddStudentDetails from "./components/userManagement-components/create-student.component";
import AddEmployeeDetails from "./components/userManagement-components/create-staff.component";
import EmployeeDetailsList from "./components/userManagement-components/employee-list.component";
import StudentRegistration from "./components/userManagement-components/registration/studentRegistration.component";
import StudentLogin from "./components/userManagement-components/login/studentLogin.component";
import EmployeeRegistration from "./components/userManagement-components/registration/employeeRegistration.component";
import EmployeeLogin from "./components/userManagement-components/login/employeeLogin.component";
import EmployeeProfile from "./components/userManagement-components/profile/employee-profile.component";
import StudentProfile from "./components/userManagement-components/profile/student-profile.component";

import UpdateStudentDetails from "./components/userManagement-components/editProfile/edit-student.component";
import UpdateEmployeeDetails from "./components/userManagement-components/editProfile/edit-employee.component";
import StudentForgotPassword from "./components/userManagement-components/forgotPassword/StudentForgotPassword";
import StudentPasswordReset from "./components/userManagement-components/passwordReset/studentPasswordReser";
import EmployeeForgotPassword from "./components/userManagement-components/forgotPassword/EmployeeFrogotPassword";
import EmployeePasswordReset from "./components/userManagement-components/passwordReset/EmployeePasswordReset";

//studenet routes
import CreateGroup from "./components/student-components/create-group.component";
import studentHome from "./components/student-components/student-home.component";
import regResearchTopic from "./components/student-components/reg-researchtopic.component";
import reqCoSupervisor from "./components/student-components/req-cosupervisor.component";
import addSubmission from "./components/student-components/add-submission.component";
import StuFileUpload from "./components/student-components/stu-file-upload.component";

import HomePage from "./components/homePage.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />

        {/* home page */}
        <Route path="/home" exact component={HomePage} />

        {/* admin paths */}
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/admin-file-upload" component={AdminDocUpload} />
        <Route path="/admin-file-download" component={AdminFileList} />
        <Route path="/admin-file-edit/:id" component={EditAdminFile} />
        <Route
          path="/admin-add-new-submission-type"
          component={AddNewSubmissionType}
        />
        <Route
          path="/admin-submission-type-list"
          component={SubmissionTypesList}
        />
        <Route
          path="/admin-submission-type-edit/:id"
          component={EditSubmissionType}
        />
        <Route path="/add-submission" component={AddSubmission} />
        <Route path="/admin-home" component={AdminHome} />
        <Route path="/admin-marking-upload" component={MarkingSchemeUpload} />
        <Route path="/admin-marking-download" component={MarkingSchemeList} />
        <Route path="/admin-marking-edit/:id" component={EditMarkingScheme} />
        <Route path="/admin-all-students" component={AdminStudentList} />
        <Route
          path="/admin-update-student/:id"
          component={AdminUpdateStudentDetails}
        />
        <Route path="/admin-all-employees" component={AdminEmployeeList} />
        <Route
          path="/admin-update-employee/:id"
          component={AdminUpdateEmployeeDetails}
        />
        <Route path="/admin-group-list" component={AdminGroupList} />
        <Route
          path="/admin-allocate-panel-member/:id"
          component={AllocatePanelMember}
        />

        {/* supervisor paths */}
        <Route path="/supervisor-home" component={SupervisorHome} />
        <Route path="/supervisor-topics" component={SupervisorTopicList} />
        <Route
          path="/supervisor-topics/edit/:id"
          component={SupervisorEditTopics}
        />
        <Route
          path="/supervisor-std-groups"
          component={SuperrvisorStdGroupList}
        />
        <Route
          path="/supervisor-std-groups/edit/:id"
          component={SupervisorEditStdGroups}
        />

        {/* co-supervisor paths */}
        <Route path="/co-supervisor-home" component={CoSupervisorHome} />
        <Route path="/co-supervisor-topics" component={CoSupervisorGroupList} />
        <Route
          path="/co-supervisor-topics/edit/:id"
          component={CoSupervisorEditGroups}
        />

        {/* panel member paths */}
        <Route path="/panel-home" component={PanelHome} />

        {/* usermanagement paths */}
        <Route path="/user-management-home" component={userManagementHome} />
        <Route path="/student-details" component={StudentDetailsList} />
        <Route path="/add-student-details" component={AddStudentDetails} />
        <Route
          path="/update-student-details/:id"
          component={UpdateStudentDetails}
        />
        <Route path="/employee-details" component={EmployeeDetailsList} />
        <Route path="/add-employee-details" component={AddEmployeeDetails} />
        <Route
          path="/update-employee-details/:id"
          component={UpdateEmployeeDetails}
        />
        <Route path="/student-profile/:id" component={StudentProfile} />
        <Route path="/student-registration" component={StudentRegistration} />
        <Route path="/student-login" component={StudentLogin} />
        <Route path="/employee-registration" component={EmployeeRegistration} />
        <Route path="/employee-profile/:id" component={EmployeeProfile} />
        <Route path="/employee-login" component={EmployeeLogin} />
        <Route
          path="/student-forgot-password"
          component={StudentForgotPassword}
        />
        {/* <Route path="/student-password-reset" component={StudentPasswordReset} /> */}

        <Route
          path="/student-password-reset/:id/:token"
          component={StudentPasswordReset}
        />
        <Route
          path="/employee-forgot-password"
          component={EmployeeForgotPassword}
        />
        <Route
          path="/employee-password-reset/:id/:token"
          component={EmployeePasswordReset}
        />

        {/* students paths */}
        <Route path="/add-group" component={CreateGroup} />
        <Route path="/student-home" component={studentHome} />
        <Route path="/reg-topic" component={regResearchTopic} />
        <Route path="/req-cosupervisor" component={reqCoSupervisor} />
        <Route path="/stu-submission" component={addSubmission} />
        <Route path="/stu-submission1" component={StuFileUpload} />
      </div>
    </Router>
  );
}

function callApi() {
  fetch("https://af-rmtp-backend.herokuapp.com/", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

export default App;
