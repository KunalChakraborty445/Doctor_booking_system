import express from "express";
import {
    getUserDetails,
    getAllDoctors,
    addNewAdmin,
    addNewDoctor,
    login,
    patientRegister,
    logoutAdmin,
    logoutPatient,
    getNotifications,
    markNotificationRead,
    markAllNotificationsRead
} from "../controller/userController.js";
import { isAdminAuthenticated,isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/patient/notifications", isPatientAuthenticated, getNotifications);
router.put("/patient/notifications/:nid/read", isPatientAuthenticated, markNotificationRead);
router.put("/patient/notifications/readall", isPatientAuthenticated, markAllNotificationsRead);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);

export default router;