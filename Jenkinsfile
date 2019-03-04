pipeline{
    agent any
    parameters {
        choice(
            choices: ['Develop', 'Stage', 'Prod'],
            name: 'STAGE_TO_EXECUTE'
        )
    }
    stages{
        stage('Origin'){
            when{
                expression{params.GIT_BRANCH_TO_EXECUTE == 'Develop'}
            }
            stages{
                stage('Develop-master'){
                    when{
                        expression{GIT_BRANCH == 'master'}
                    }
                    stages{
                        stage('Develop'){
                            echo 'develop'
                        }
                        stage('Prod'){
                            echo 'Prod'
                        }
                    }
                }
                stage('Develop-Release'){
                    when{
                        expression{GIT_BRANCH == 'mockRel'}
                    }
                    stages{
                        stage('Develop'){
                            echo 'develop'
                        }
                        stage('Stage'){
                            echo 'Stage'
                        }
                    }
                }
            }
        }
    }
}
