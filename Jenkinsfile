pipeline{
    agent any
    stages{
        stage('Origin stage'){
            steps{
                script{
                    sh 'git branch -r | awk \'{print $1}''
                }
            }
            
        }
    }
}
