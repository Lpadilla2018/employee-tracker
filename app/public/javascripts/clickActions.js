function addEmployee() {
    window.location.href = '/employees/add';
}

function cancelAdd() {
    window.location.href = '/employees';
}

function confirmUser(){
    return confirm(`Are you sure you want to delete this employee?`);
}