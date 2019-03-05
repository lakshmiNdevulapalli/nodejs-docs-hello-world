pipeline{
    agent any
    stages{
        stage('origin'){
           
            parallel{
                stage('Develop'){
                    steps{
                        echo GIT_BRANCH = sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
                    }
                }
                stage('Prod'){
                    when {
                        expression{
                            GIT_BRANCH = 'origin/master'
                        }
                    }
                    steps{
                        echo "Production"
                    }
                }
                stage('stage'){
                    when {
                        expression{
                            GIT_BRANCH = 'origin/mockRel'
                        }
                    }
                    steps{
                        echo "Stage"
                    }
                }
            }

        }
    }
}
