function handleFormSubmit() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const input = $(e.currentTarget).find('#shopping-list-entry')
        const inputValue = input.val()
        $('.shopping-list').append(generateItemHTML(inputValue))
        input.val('')
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

function handleItemDelete() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
        $(e.target).closest('li').remove();
    })
}

function handleItemCheck() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
        const span = $(e.target).closest('li').find('.shopping-item')
        span.toggleClass('shopping-item__checked')
    })
}

function bindEventHandlers() {
    handleFormSubmit()
    handleItemDelete()
    handleItemCheck()
}

$(bindEventHandlers)


// eventDelegation


// eventDelegation
// W3schools- jQuery