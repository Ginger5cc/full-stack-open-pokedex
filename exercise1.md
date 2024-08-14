We assumed that the application is written in Python.
For linting, we can use Pylint, flake8 , Ruff and mypy to automate the linting process.
People mentioned you can use Pylint and Flake8 at the same time since they catch different errors that the other would not catch.
People also mentioned Flake8 supported many plugins that Pylint cannot do at all.
People also mentioned running Bandit to check for a set of obvious insecure coding mistakes.

For testing, we can use Pytest or Unittest. Pytest is the most popular options among all the testing tools.
For python, we do not need any building tools unless we use any extension that needs to be compiled.

Some popular CI/CD tools that support Python include Travis CI, GitLab CI/CD, and CircleCI.
For other options, we also have Azure ci/cd pipeline and AWS ECR. 

It would be better to do this project in a cloud-based server. Because it is a small project and only involved 6 people. 
At first, we need to know whether the project needs special requirements for test, such as using graphic cards to run the tests. If it is mainly for normal usage, a cloud-based server would be enough. The configuration is easier to set up.
