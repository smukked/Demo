angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/t1/template1.html',
    "<div ng-class=\"{}\">\r" +
    "\n" +
    "    <h1>Demo</h1>\r" +
    "\n" +
    "    <p>This is a demo</p>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/t2/template2.html',
    "<div ng-class=\"{}\">\r" +
    "\n" +
    "    <h1>Some other stuff</h1>\r" +
    "\n" +
    "    <p>This is a demo 2</p>\r" +
    "\n" +
    "    <ul>\r" +
    "\n" +
    "        <li>xxx</li>\r" +
    "\n" +
    "        <li>yyy</li>\r" +
    "\n" +
    "        <li>zzz</li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>"
  );

}]);
