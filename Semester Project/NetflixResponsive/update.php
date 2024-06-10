<?php
require ('include/connection.php');


if (isset($_GET['uid'])) {
    $uid = $_GET['uid'];
    $qryupdate = mysqli_query($conn, "SELECT * FROM netflix WHERE nid='" . $uid . "'");
    $row = $qryupdate->fetch_assoc();
}

if (isset($_POST['btnUpdate'])) {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $country = $_POST['country'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];

    if (!$conn) {
        die('Connection Failed: ' . mysqli_connect_error());
    }

    $qry = "UPDATE netflix SET 
        fname = '" . $fname . "',
        lname = '" . $lname . "',
        username = '" . $username . "',
        email = '" . $email . "',
        password = '" . $password . "',
        country = '" . $country . "',
        gender = '" . $gender . "',
        address = '" . $address . "'
        WHERE nid = '" . $uid . "' ";

    if (mysqli_query($conn, $qry)) {
        header("location: list.php");
        exit;
    } else {
        echo '<script>alert("Error: ' . $sql . "<br>" . mysqli_error($conn) . '")</script>';
    }

    mysqli_close($conn);
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Netflix Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
</head>

<body class="overflow-x-hidden m-0 p-0 bg-[url('netflix_images/bg.jpg')] bg-center bg-cover">

    <!-- **** HOME PAGE *** -->
    <section class="w-[100%] h-auto border-[#3e3d3d]">
        <div class="h-full w-[100%] px-5 lg:px-40">
            <header class="h-fit w-full mx-auto flex justify-between items-center pt-4">
                <h1 class="text-red-600 text-5xl font-bold">NETFLIX</h1>
                <a href="index.php"
                    class="bg-red-600 hover:bg-red-700 duration-500 font-semibold text-white h-fit px-4 py-2 rounded">
                    Home
                </a>
                <a href="list.php"
                    class="bg-red-600 hover:bg-red-700 duration-500 font-semibold text-white h-fit px-4 py-2 rounded">
                    List
                </a>
            </header>
        </div>
    </section>

    <section class="font-mono">
        <!-- Container -->
        <div class="container mx-auto">
            <div class="flex justify-center px-6 my-12">
                <!-- Row -->
                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                    <!-- Col -->
                    <div class="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                        style="background-image: url('https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
                    </div>
                    <!-- Col -->
                    <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
                        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" method="post" action="">
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="fname">
                                    First Name
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="fname" id="fname" type="text" value="<?php echo $row['fname'] ?>"
                                    placeholder="First Name" required />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="lname">
                                    Last Name
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="lname" id="lname" type="text" value="<?php echo $row['lname'] ?>"
                                    placeholder="Last Name" required />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                                    Username
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="username" id="username" type="text" value="<?php echo $row['username'] ?>"
                                    placeholder="Username" required />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                    Email Address
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="email" id="email" type="email" value="<?php echo $row['email'] ?>"
                                    placeholder="Email Address" required />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                    Password
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="password" id="password" type="password" value="<?php echo $row['password'] ?>"
                                    placeholder="Password" required />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="country">
                                    Select Country
                                </label>
                                <select
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="country" id="country" required>
                                    <option value="" selected disabled>Select</option>
                                    <option value="pk" <?php if ($row['country'] == "pk") { ?>selected="selected" <?php } ?>>
                                        Pakistan</option>
                                    <option value="in" <?php if ($row['country'] == "in") { ?>selected="selected" <?php } ?>>
                                        India</option>
                                    <option value="ch" <?php if ($row['country'] == "ch") { ?>selected="selected" <?php } ?>>
                                        China</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700">
                                    Select Gender
                                </label>
                                <input id="male" name="gender" type="radio" value="male" <?php if ($row['gender'] == 'male') { ?>checked<?php } ?> required /> Male
                                <input id="female" name="gender" type="radio" value="female" <?php if ($row['gender'] == 'female') { ?>checked<?php } ?> /> Female
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="address">
                                    Address
                                </label>
                                <textarea
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="address" id="address" required><?php echo $row['address'] ?></textarea>
                            </div>
                            <div class="mb-6 text-center">
                                <input
                                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none cursor-pointer focus:shadow-outline"
                                    type="submit" name="btnUpdate" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php require ('include/footer.php'); ?>

</body>

</html>