## Simple Testing Framework

### Instructions for use
- Clone this repository inside the parent directory of the project you wish to use this testing framework for.
- In your main project directory, create a file called ```SpecRunner.html```. The contents of your SpecRunner file should be as follows;

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">

  <!-- include source files here... -->
  <script src="src/class.js"></script>
  <script src="src/AnotherClass.js"></script>

  <!-- include testframework file here... -->
  <script src="path_to_test_framework_file"></script>


  <!-- include spec files here... -->
  <script src="spec/ClassSpec.js"></script>
  <script src="spec/AnotherClassSpec.js"></script>


</head>

<body>
</body>
</html>
```

- Make sure to edit the above template script tags to include correct pathways to your source and spec files
- To run the tests, open your SpecRunner file in Google Chrome and go to the console. Your test results will be printed there.
