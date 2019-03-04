pipeline{
    agent any
    def credentialsId = 'c3396add-9145-4d12-98cf-ac4bbda2a47f'
    def gitUrl = 'https://github.com/lakshmiNdevulapalli/nodejs-docs-hello-world.git'
    stages{
        stage('Origin stage'){
            git credentialsId, gitUrl
            script{
                if("${env.JOB_NAME}" == "${env.BRANCH_NAME}"){
                    echo "${env.BRANCH_NAME}"
                }
            }
        }
    }
}
