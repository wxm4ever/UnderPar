$(function(){
  var content = $('.right-content');
  var faq_item_template = $('#faq-item-template').html();
  var template = _.template(faq_item_template);

  for(var faq_item_index in window.faq_data_items){
    var faq_item = window.faq_data_items[faq_item_index];
    $(content).append(template(faq_item));
  }
});
