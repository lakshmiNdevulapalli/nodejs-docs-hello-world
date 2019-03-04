pipeline{
    agent any
    stages{
        stage('Origin stage'){
            steps{
                script{
                    if("${env.JOB_NAME}" == "${env.BRANCH_NAME}"){
                        echo "${env.BRANCH_NAME}"
                    }
                }
            }
            
        }
    }
}
