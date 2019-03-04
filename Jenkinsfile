pipeline{
    agent any
    stages{
        stage('Origin stage'){
            steps{
                script{
                    if(GIT_BRANCH =='origin/*'){
                        stage('Develop'){
                            echo 'develop'
                        }
                        stage('Stage'){
                            echo 'Stage'
                        }
                        stage('Prod'){
                            echo 'Prod'
                        }
                    }if(GIT_BRANCH == 'mockRel'){
                        stage('Develop'){
                            echo 'develop'
                        }
                        stage('Stage'){
                            echo 'stage'
                        }
                    }
                }
            }
            
        }
    }
}
