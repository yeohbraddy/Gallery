package com.gallery.model;

import java.time.LocalDateTime;

import com.gallery.constants.Constants;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author Braddy Yeoh - 17357376
 */

/**
 * User object
 */
@Document(collection = Constants.USER_COLLECTION)
public class User {
  @Id
  private String id;

  @Indexed(direction = IndexDirection.ASCENDING)
  private String username;
  private String email;
  private LocalDateTime creationDate;

  public User() {
  }

  public User(String id, String username, String email, LocalDateTime createDateTime) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.creationDate = createDateTime;
  }

  public User(String username, String email, LocalDateTime createDateTime) {
    this.username = username;
    this.email = email;
    this.creationDate = createDateTime;
  }

  public LocalDateTime getCreationDate() {
    return creationDate;
  }

  public void setCreationDate(LocalDateTime creationDate) {
    this.creationDate = creationDate;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getId() {
    return this.id;
  }

  public void setId(String id) {
    this.id = id;
  }
}
