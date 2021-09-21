var context = {
    items: [
      {name: "Handlebars", emotion: "love"},
      {name: "Mustache", emotion: "enjoy"},
      {name: "Ember", emotion: "want to learn"}
    ]
  };
  
  Handlebars.registerHelper('agree_button', function() {
    var emotion = Handlebars.escapeExpression(this.emotion),
        name = Handlebars.escapeExpression(this.name);
  
    return new Handlebars.SafeString(
      "<button>I agree. I " + emotion + " " + name + "</button>"
    );
  });
