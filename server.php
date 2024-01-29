<?php 
    $todo_list = file_get_contents('todo-list.json');
    $list = json_decode($todo_list);
    
    if(isset($_POST['nuovoElemento'])){

            $nuovoElemento = [
                'text' => $_POST['nuovoElemento'],
                'done' => false
            ];
        array_push($list,$nuovoElemento);

        file_put_contents('todo-list.json', json_encode($list));

        header('Content-type: application/json');

    };

    if (isset($_POST['todoList_index'])) {
        $todoList_index = $_POST['todoList_index'];
    
        $json_todoList = file_get_contents('todo-list.json');
        $todoList = json_decode($json_todoList);
    
        array_splice($todoList, $todoList_index, 1);
    
        $json_todoList = json_encode($todoList);
        file_put_contents('todo-list.json', $json_todoList);
    
        header("Content-Type: application/json");
    }

    echo json_encode($list);
?>