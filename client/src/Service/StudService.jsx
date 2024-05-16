import axios from "axios";

const API_URL = "http://localhost:8080";

const StudService = {
  authenticate: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/adminlogin`, { username, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  authenticateStudent: async (email, phone_number) => {
    try {
      const response = await axios.post(`${API_URL}/studentlogin`, { email, phone_number });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createStudent: async (studentData) => {
    try {
      const response = await axios.post(`${API_URL}/studsave`, studentData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  getAllStudents: async () => {
    try {
      const response = await axios.get(`${API_URL}/studview`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  getStudentProfile: async (studentId) => {
    try {
      const response = await axios.get(`${API_URL}/getStudentProfile/${studentId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addSubject: async (subjectData) => {
    try {
      const response = await axios.post(`${API_URL}/savesub`, subjectData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getSubjects: async () => {
    try {
      const response = await axios.get(`${API_URL}/viewSubjects`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addMarks: async (marksData) => {
    try {
      const response = await axios.post(`${API_URL}/addMarks`, marksData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getMarks: async (studentId) => {
    try {
      const response = await axios.get(`${API_URL}/getMarks/${studentId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default StudService;
