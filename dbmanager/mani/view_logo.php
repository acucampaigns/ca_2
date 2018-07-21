<?php include('db.php');?>

		<div id="content">
			<div class="container">
				<!-- Breadcrumbs line -->
				<div class="crumbs" style="    margin: 6px -20px;">
					<ul id="breadcrumbs" class="breadcrumb">
						<li>
							<i class="icon-home"></i>
							<a href="index.php">Dashboard</a>
						</li>
						<li class="current">
							<a href="view_logo.php" title="">View logo</a>
						</li>
					</ul>
				</div>
				<!-- /Breadcrumbs line -->

				<div>
<h2 style="color: red;"> View logos :-<br/><br/><br/></h2>
<table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr class="odd-row">
					  <th>No</th>
						<th>logo</th>
						<th>Action</th>
					   </tr>
                    </thead>
						<?php   
						$m=1;
 $query=mysql_query("SELECT * FROM   users");    
 while ($row = mysql_fetch_array($query)) 
                             {
				       		 $mid=$row['id'];
							 $img=$row['login'];
$email=$row['email'];
$pass=base64_decode($row['password']);
							 
		                ?>
                    <tbody>
                      <tr class="even-row">
                        <tbody>
                      <tr>
						 <td><?php echo $mid?></td>  
		
                <td><?php echo $img;?> </td>
<td><?php echo $pass;?> </td>
<td><?php echo $email;?> </td>
			<td>
			<?php  
				   echo "<a href='delet_logo.php?dlet=$mid'>Delete this logo</a>"."<br/>"; 
				 
				?>
				</td>
				
				 </tr>
                    </tbody>
<?php } ?>
                  
                    </tr>
                    
                    </tfoot>
                  </table>
</div>
		
	</div>
</div>
</body>
</html>