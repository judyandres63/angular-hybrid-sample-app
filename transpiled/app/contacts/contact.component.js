"use strict";
exports.template = "\n<div class=\"contact\">\n  <div class=\"flex-h\">\n    <div class=\"details\">\n      <h3>{{vm.contact.name.first}} {{vm.contact.name.last}}</h3>\n      <div><label>Company</label><div>{{vm.contact.company}}</div></div>\n      <div><label>Age</label><div>{{vm.contact.age}}</div></div>\n      <div><label>Phone</label><div>{{vm.contact.phone}}</div></div>\n      <div><label>Email</label><div>{{vm.contact.email}}</div></div>\n      <div class=\"flex-h\">\n        <label>Address</label>\n        <div>{{vm.contact.address.street}}<br>\n              {{vm.contact.address.city}}, {{vm.contact.address.state}} {{vm.contact.address.zip}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex nogrow\">\n      <img ng-src=\"{{vm.contact.picture}}\"/>\n    </div>\n  </div>\n\n  <!-- This button has an ui-sref to the mymessages.compose state. The ui-sref provides the mymessages.compose\n       state with an non-url parameter, which is used as the initial message model -->\n  <button class=\"btn btn-primary\" ui-sref=\"mymessages.compose({ message: { to: vm.contact.email } })\">\n    <i class=\"fa fa-envelope\"></i><span>Message</span>\n  </button>\n\n  <!-- This button has a relative ui-sref to the contacts.contact.edit state. -->\n  <button class=\"btn btn-primary\" ui-sref=\".edit\">\n    <i class=\"fa fa-pencil\"></i><span>Edit Contact</span>\n  </button>\n</div>\n";
exports.controller = function ContactController(contact) {
    this.contact = contact;
};
//# sourceMappingURL=contact.component.js.map