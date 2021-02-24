<?php
	require 'config.php';
	class db_class extends db_connect {
		public function __construct(){
			$this->connect();
		}
		public function read(){
			$select = $this->conn->prepare("SELECT * FROM `employee_master_table`") or die($this->conn->error);
			if($select->execute()){
				$result = $select->get_result();
				return $result;
			}
		}
		public function del($id) {
			$del =  $this->conn->prepare("DELETE from employee_master_table` where employee_number = " .$id);
		}
		public function update() {	
		}
	}
?>