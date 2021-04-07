
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css" />

<body class="hold-transition sidebar-mini">
    <div class="wrapper">
        <div id="app">
            <!-- Navbar -->
            @include('layouts.partials.navbar')

            <!-- Main Sidebar Container -->
            @include('layouts.partials.sidebar')

            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Content Header (Page header) -->
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Starter Page</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <router-view></router-view>

            </div>

            <!-- Main Footer -->
            @include('layouts.partials.footer')
        </div>

<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('js/jquery.validate.min.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
</body>
</html>
