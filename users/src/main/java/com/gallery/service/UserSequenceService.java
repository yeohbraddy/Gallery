package com.gallery.service;

import javax.annotation.PostConstruct;

import com.gallery.model.UserSequence;
import com.gallery.repository.UserSequenceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSequenceService {

    @Autowired
    private UserSequenceRepository userSequenceRepository;

    public UserSequenceService() {

    }

    @PostConstruct
    private void init() {
        long id = getNext() - 1;
        userSequenceRepository.save(new UserSequence(id));
    }

    public long getNext() {
        UserSequence last = userSequenceRepository.findTopByOrderByIdDesc();
        long lastNum = last.getSeq();
        UserSequence next = new UserSequence(lastNum + 1);
        userSequenceRepository.save(next);

        return next.getSeq();
    }

}