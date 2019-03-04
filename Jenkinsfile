pipeline{
    agent any
    parameters {
        string (
            defaultValue: '*',
            description: '',
            name: 'GIT_BRANCH_TO_EXECUTE'
        )
    }
    stages{
        stage('origin'){
            when {
                expression{
                    GIT_BRANCH = "origin/${GIT_BRANCH_TO_EXECUTE}"
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
