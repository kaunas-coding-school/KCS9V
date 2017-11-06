<?php
header('Content-Type: application/json');
try {

    $db = new PDO('mysql:host=localhost;dbname=zinutesuser;charset=utf8', 'zinutesuser', 'zinutesuser');
    $duomenys = ['message' => 'No data'];

    if ($_SERVER['REQUEST_METHOD'] === 'GET'){
        $duomenys = getData($db);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);

        $stmt = $db->prepare("INSERT INTO zinutes(vardas,pastas,zinute,datalaikas) VALUES(:field1,:field2,:field3,:field4)");
        $stmt->execute([
            ':field1' => $data['vardas'],
            ':field2' => $data['pastas'],
            ':field3' => $data['zinute'],
            ':field4' => date("Y-m-d H:i:s")
        ]);
        $affected_rows = $stmt->rowCount();
        $duomenys = [
            'message' => 'Success',
            'status' => 200,
            'rows_inserted' => $affected_rows
        ];
    } else {
        $duomenys = [
            "status"=>400,
            "message"=>"Bad request."
        ];
    }
    echo json_encode($duomenys);

} catch(PDOException $ex) {
    echo '{"status":500, "message":"Something got wrong... !"}';
}

function getData(PDO $db) {
    $stmt = $db->query("SELECT * FROM zinutes");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}