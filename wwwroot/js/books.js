document.addEventListener('DOMContentLoaded', () => {
    const addBookModal = new bootstrap.Modal(document.getElementById('addBookModal'));
    const editBookModal = new bootstrap.Modal(document.getElementById('editBookModal'));

    document.getElementById('addBookBtn').addEventListener('click', () => {
        addBookModal.show();
    });

    document.querySelectorAll('.editBtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tr = e.target.closest('tr');
            const form = document.getElementById('editBookForm');

            form.Id.value = tr.dataset.id;
            form.Name.value = tr.children[0].innerText;
            form.AuthorId.value = tr.dataset.authorId;
            form.CategoryId.value = tr.dataset.categoryId;
            form.Year.value = tr.children[3].innerText;
            form.IsAvailable.checked = tr.children[4].querySelector('.bg-success') !== null;
            form.IsNew.checked = tr.dataset.isNew === "true";
            form.Description.value = tr.dataset.description;

            editBookModal.show();
        });
    });

    document.querySelectorAll('.deleteBtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (confirm('Are you sure you want to delete this book?')) {
                const tr = e.target.closest('tr');
                tr.remove();
            }
        });
    });
});