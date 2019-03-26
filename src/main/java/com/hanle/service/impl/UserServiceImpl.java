package com.hanle.service.impl;
import javax.annotation.Resource;


import com.hanle.dao.IUserDao;
import com.hanle.model.User;
import com.hanle.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

  
  
@Service("userService")  
public class UserServiceImpl implements IUserService {
    @Autowired
    private IUserDao userDao;
    
    public User getUserById(int userId) {
        // TODO Auto-generated method stub  
        return userDao.selectByPrimaryKey(userId);
    }  
  
}  
