pipeline{
    agent any
    stages{
        stage('Origin stage'){
            steps{
                script{
                    if(GIT_BRANCH =='master'){
                        echo GIT_BRANCH
                    }
                }
            }
            
        }
    }
}
