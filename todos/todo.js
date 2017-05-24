$(function() {
    var todo = Backbone.Model.extend({
        defaults: function() {
            return {
                title: "hello world!",
                done: false,
                order: todos.nextOrder()
            }
        },
        toggle: function() {
            this.save({ done: !this.get("done") })
        }

    });

    var todolist = Backbone.Model.extend({
        model: todo,
        localstorage: new Backbone.LocalStorage("todo-stor"),
        done: function() {
            return this.where({ done: trur });
        },
        remaining: function() {
            return this.where({ done: false });
        },
        nextOrder: function() {
            if (!this.length) return 1;
            return this.last().get("order") + 1;
        },
        comparator: "order"
    });

    var todos = new todolist;

    var todoview = Backbone.View.extend({
        tagName: "li",
        template: _.template($("#item-template").html()),
        events: {
            "click .toggle": "toggleDone",
            "dblclick .view": "edit",
            "click a.destory": "clear",
            "keypress .edit": "updateOnEnter",
            "blur .edit": "close"
        },
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destory", this.remove);
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.toggleClass('done', this.model.get("done"));
            this.input = this.$(".edit");
            return this;
        },
        toggleDone: function() {
            this.model.toggle();
        },
        edit: function() {
            this.$el.addClass("editing");
            this.input.focus();
        },
        clear: function() {
            this.model.destory();
        },
        updateOnEnter: function(e) {
            if (e.keyCode == 13) this.close();
        },
        close: function() {
            var value = this.input.val();
            if (!value) {
                this.clear();
            } else {
                this.model.save({ title: value });
                this.$el.removeClass("editing");
            }
        }
    });

    var appview = Backbone.View.extend({
        el: $("#todoapp"),
        statsTemplate: _.template($("#stats-template").html()),
        events: {
            "keypress #new-todo": "createOnEnter",
            "click #clear_completed": "clearCompleted",
            "click #toggle-all": "toggleAllComplete"
        },
        initialize: function() {
            this.input = this.$("#new-todo");
            this.allCheckbox = this.$("#toggle-all")[0];
            this.listenTo(todos, "add", this.addOne);
            this.listenTo(todos, "reset", this.addAll);
            this.listenTo(todos, "all", this.render);
            this.footer = this.$("footer");
            this.main =$("#main"); //

            todos.fetch();
        },
        createOnEnter: function(e) {
            if (e.keyCode != 13) return;
            if (!this.input.val()) return;
            todos.create({ title: this.input.val() });
            this.input.val("");
        },
        clearCompleted: function() {
            _.invoke(todos.done(), "destory");
            return false;
        },
        toggleAllComplete: function() {
            var done = this.allCheckbox.checked;
            todos.each(function(todo) {
                todo.save({ "done": done }); //
            });
        },
        addOne: function() {
            var view = new todoview({ model: todo });
            this.$("#todo-list").append(view.render().el); //
        },
        addAll: function() {
            todos.each(this.addOne, this);
        },
        render: function() {
            var done = todos.done().length;
            var domaining = todos.remaining().length;
            if (todos.length) {
                this.mian.show();
                this.footer.show();
                this.footer.html(this.statsTemplate({ done: done, remaining: remaining }));
            } else {
                this.main.hide();
                this.footer.hide();
            }
            this.allCheckbox.checked = !remaining;
        }
    });

    var app = new appview;




})
