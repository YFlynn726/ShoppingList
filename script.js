function handleFormSubmit() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const input = $(e.currentTarget).find('#shopping-list-entry').val()
        console.log(input);
        $('.shopping-list').append(generateItemHTML(input))
    })
}



function generateItemHTML(item) {
    return `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
}

function deleteItem() {
    $('.shopping-item-delete').on('click', 'ul', function(event) {
        this.remove()
    })
}



function bindEventHandlers() {
    handleFormSubmit()
}
$(bindEventHandlers)


// eventDelegation