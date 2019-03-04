pipeline{
    agent any
    stages{
        stage('origin'){
            when {
                branch 'master'
            }
            parallel{
                stage('Develop'){
                    steps{
                        echo GIT_BRANCH
                    }
                }
                stage('Prod'){
                    when {
                        branch 'master'
                    }
                    steps{
                        echo "Production"
                    }
                }
                stage('stage'){
                    when{
                        branch 'mockRel'
                    }
                    steps{
                        echo "Stage"
                    }
                }
            }

        }
    }
}
