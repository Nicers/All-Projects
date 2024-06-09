<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Netflix Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
</head>

<body class="overflow-x-hidden m-0 p-0 bg-[url('netflix_images/bg.jpg')] bg-center bg-cover">

    <?php
    require ('include/connection.php');


    //Delete
    if (isset($_GET['did'])) {
        $did = $_GET['did'];
        $qrydel = mysqli_query($conn, "DELETE FROM netflix WHERE nid = '" . $did . "'");
        if ($qrydel) {
            header("location:list.php?msg=3");
        } else {
            echo '<script>alert("Error: ' . $sql . "<br>" . mysqli_error($conn) . '")</script>';
            // echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }

    ?>

    <!-- **** HOME PAGE *** -->
    <section class="w-[100%] h-auto border-[#3e3d3d]">
        <div class="h-full w-[100%] px-5 lg:px-40">
            <header class="h-fit w-full mx-auto flex justify-between items-center pt-4">
                <h1 class="text-red-600 text-5xl font-bold">NETFLIX</h1>
                <div class="flex gap-[1rem]">
                    <a href="index.php"
                        class="bg-red-600 hover:bg-red-700 duration-500 font-semibold text-white h-fit px-4 py-2 rounded">
                        Home
                    </a>
                    <a href="form.php"
                        class="bg-red-600 hover:bg-red-700 duration-500 font-semibold text-white h-fit px-4 py-2 rounded">
                        Register
                    </a>
                </div>
            </header>
        </div>
    </section>


    <section class="font-mono">
        <!-- Container -->
        <div class="container mx-auto">
            <div class="flex justify-center px-6 my-12">
                <!-- Row -->
                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div class="w-full lg:w-full bg-white py-[5rem] rounded">
                        <h1 class="text-3xl font-bold text-center text-[red]">Welcome Back!</h1>

                        <div class="mt-[2rem] text-center flex justify-center">
                            <table class="list">
                                <tr class="text-[red]">
                                    <th>No.</th>
                                    <th>First + Last Name</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                    <th>Update</th>
                                </tr>
                                <?php
                                $data = mysqli_query($conn, 'SELECT * FROM netflix');
                                $sno = 0;
                                while ($row = mysqli_fetch_array($data)) {
                                    $sno++;
                                    ?>
                                    <tr>
                                        <td class="text-[red]"><?php echo $sno; ?></td>
                                        <td><?php echo $row['fname'] . ' ' . $row['lname']; ?></td>
                                        <td><?php echo $row['username']; ?></td>
                                        <td><?php echo $row['email']; ?></td>
                                        <td><?php echo $row['country']; ?></td>
                                        <td><?php echo $row['gender']; ?></td>
                                        <td><?php echo $row['address']; ?></td>
                                        <td><a class="text-[blue]" href="update.php?uid=<?php echo $row['nid'] ?>"
                                                title="Update Record">Edit</a> / <a class="text-[blue]"
                                                href="?did=<?php echo $row['nid'] ?>"
                                                onClick="return confirm('Are you sure y')" title="Delete Record">Delete</a>
                                        </td>
                                    </tr>
                                <?php }
                                ?>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php require ('include/footer.php'); ?>