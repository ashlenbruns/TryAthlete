// Interact with our app via API using axios
import axios from "axios";

let goalCount = 100;


export default {


    goalsCounter: function (){
        return goalCount++
    },
    //--------------------------------USERS------------------------------

    // Gets all users
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Gets the user with the given id
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },

    saveUser: function (bookData) {
        return axios.post("/api/users", bookData);
    },


    //--------------------------------BADGES------------------------------
    getBadges: function () {
        return axios.get("/api/badges");
    },
    // adds badges earned to users badge array
    saveBadge: function (value, userId) {
        return axios.put(`/api/users/${userId}/badges`, value)
    },
    

    //--------------------------------ACTIVITIES------------------------------

    saveActivity: function (activityData, userId) {
        return axios.put(`/api/users/${userId}/activities`, activityData);
    },

    deleteActivity: function (userId, activityId) {
        console.log(`/api/users/${userId}/activities/${activityId}`)
        return axios.delete(`/api/users/${userId}/activities/${activityId}`);
    },

    //--------------------------------GOALS------------------------------

    saveGoal: function (goalData, userId) {
        return axios.put(`/api/users/${userId}/goals`, goalData);
    },

    updateGoal: function (goalData, userId, goalId) {
        return axios.put(`api/users/${userId}/goals/${goalId}`, goalData);
    },

    deleteGoal: function (userId, goalId) {
        return axios.delete(`/api/users/${userId}/goals/${goalId}`);
    },

    //--------------------------------CHALLENGES------------------------------

    saveChallenge: function (challengeData, userId) {
        return axios.put(`/api/users/${userId}/challenges`, challengeData);
    },

    updateChallenge: function (challengeData, userId, challengeId) {
        return axios.put(`api/users/${userId}/challenges/${challengeId}`, challengeData);
    },

    deleteChallenge: function (userId, challengeId) {
        return axios.delete(`/api/users/${userId}/challenges/${challengeId}`);
    },

    //--------------------------------FRIENDS------------------------------

    addFriend: function (friendData, userId) {
        return axios.put(`/api/users/${userId}/friends`, friendData);
    },

    deleteFriend: function (userId, friendId) {
        console.log(`/api/users/${userId}/friends/${friendId}`)
        return axios.delete(`/api/users/${userId}/friends/${friendId}`);
    }

};
