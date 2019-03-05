pipeline{
    agent any
    parameters {
        string (
            defaultValue: '*',
            description: '',
            name : 'CHECKOUT_BRANCH')
    }

    stages{
        stage('Develop'){
            steps{
                checkout([
                    branches: [["origin/${CHECKOUT_BRANCH}"]]
                    
                ])
                echo GIT_BRANCH
            }
        }
        stage('Stage'){
            when{
                expression{
                    GIT_BRANCH == 'mockRel'
                }
            }
            steps{
                checkout([
                    branches: [["origin/"+GIT_BRANCH]]
                ])
                echo GIT_BRANCH
            }
        }
        stage('Prod'){
            when{
                expression{
                    GIT_BRANCH == 'master'
                }
            }
            steps{
                checkout([
                    branches: [["origin/"+GIT_BRANCH]]
                ])
                echo GIT_BRANCH
            }
        }
    }
}
