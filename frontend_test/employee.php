<?php include("inc/header.php"); ?>

	<section id="employee_section">
		<div class="container">
			<div class="table-responsive">
				<table class="table">
					<thead>
						<tr>
							<th>First name</th>
							<th>Last name</th>
							<th>Contact</th>
							<th colspan="2">E-mail</th>
						</tr>
					</thead>
					<tbody>
						<?php
							require 'classes/class.php';
							$conn = new db_class();
							$read = $conn->read();
							while($fetch = $read->fetch_array()){
						?>
						<tr>
							<td><?php echo $fetch['first_name']; ?></td>
							<td><?php echo $fetch['last_name']; ?></td>
							<td><?php echo $fetch['telephone_number']; ?></td>
							<td><?php echo $fetch['address']; ?></td>
							<td>
								<a href="#"><img src="assets/img/ic-edit.png"></a>
								<a href="#"><img src="assets/img/ic-delete.png"></a>
							</td>
						</tr>
						<?php
							}
						?>
					</tbody>
				</table>
			</div>
		</div>
	</section>

<?php include("inc/footer.php"); ?>