import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter';
import {MainLayout} from '../layouts/MainLayout.js';
import {SecondLayout} from '../layouts/SecondLayout.js';
import {ThirdLayout} from '../layouts/ThirdLayout.js';
import Home from '../pages/Home.js';
import Articles from '../components/Articles.js';
import Present from '../components/Present.js';
import React, { Component } from 'react';

FlowRouter.route('/', {
  name: 'home',
  action: function () {
    mount(MainLayout, { content: <Home /> });
  },
});

FlowRouter.route('/article', {
  name: 'article',
  action: function () {
    mount(SecondLayout, { content: <Articles /> });
  },
});

FlowRouter.route('/article/css', {
  name: 'css',
  action: function () {
    mount(ThirdLayout, { content: <Present /> });
  },
});
