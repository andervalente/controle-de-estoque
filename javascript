// Função para adicionar um novo produto ao estoque
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    if (name && quantity > 0 && price > 0) {
        addProduct(name, quantity, price);
        document.getElementById('product-form').reset();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});

// Função para adicionar o produto à tabela
function addProduct(name, quantity, price) {
    const table = document.getElementById('stock-table').getElementsByTagName('tbody')[0];

    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const quantityCell = newRow.insertCell(1);
    const priceCell = newRow.insertCell(2);
    const actionsCell = newRow.insertCell(3);

    nameCell.textContent = name;
    quantityCell.textContent = quantity;
    priceCell.textContent = `R$ ${parseFloat(price).toFixed(2)}`;

    actionsCell.innerHTML = '<button onclick="deleteProduct(this)">Excluir</button>';
}

// Função para excluir o produto
function deleteProduct(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
