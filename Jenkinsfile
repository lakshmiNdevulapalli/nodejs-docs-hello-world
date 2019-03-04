pipeline{
    agent any
    stages{
        stage('origin'){
            when {
                expression{
                    GIT_BRANCH = 'origin/*'
                }
            }
            parallel{
                stage('Develop'){
                    steps{
                        echo GIT_BRANCH
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
