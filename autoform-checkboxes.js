if (Meteor.isClient) {
  Template.hello.helpers({
    testSchema: function () {
      return new SimpleSchema({
        check: {
          type: Boolean
        }
      });
    }
  });
}