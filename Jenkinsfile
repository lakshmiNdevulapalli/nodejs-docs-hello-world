pipeline{
    agent any
    stages{
        stage('Origin stage'){
            when{
                expression{
                    return GIT_BRANCH =='origin/*'
                }
            }
            steps{
                stage('Develop'){
                    echo 'develop'
                }
                stage('Stage'){
                    echo 'Stage'
                }
                stage('Prod'){
                    echo 'Prod'
                }
            }

            when{
                expression{
                    return GIT_BRANCH == 'origin/mockRel'
                }
            }
            steps{
                stage('Develop'){
                    echo 'develop'
                }
                stage('Stage'){
                    echo 'Stage'
                }
            }

            when{
                expression{
                    return GIT_BRANCH =='origin/master'
                }
            }
            steps{
                stage('Develop'){
                    echo 'develop'
                }
                stage('Prod'){
                    echo 'Prod'
                }
            }
            
        }
    }
}
