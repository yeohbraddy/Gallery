package com.gallery.controller;

import com.gallery.core.request.UserRequest;
import com.gallery.core.response.UserResponse;
import com.gallery.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin
public class UserController {
  @Autowired
  UserService userService;

  public UserController() {
  }

  @CrossOrigin(origins = "*")
  @RequestMapping(value = "/{username}", method = RequestMethod.GET)
  public ResponseEntity<UserResponse> getUser(@PathVariable("username") String username) {
    return userService.getUser(username);
  }

  @CrossOrigin(origins = "*")
  @RequestMapping(value = "/id/{userId}", method = RequestMethod.GET)
  public ResponseEntity<UserResponse> getUserById(@PathVariable("userId") String userId) {
    return userService.getUserById(userId);
  }

  @CrossOrigin(origins = "*")
  @RequestMapping(value = "/{username}", method = RequestMethod.PUT)
  public ResponseEntity<UserResponse> updateUsername(@PathVariable("username") String currUsername,
      @RequestBody UserRequest userRequest) {
    return userService.updateUsername(currUsername, userRequest);
  }

  @CrossOrigin(origins = "*")
  @RequestMapping(value = "/{username}", method = RequestMethod.DELETE)
  public ResponseEntity<UserResponse> deleteUser(@PathVariable("username") String username) {
    return userService.deleteUser(username);
  }
}
