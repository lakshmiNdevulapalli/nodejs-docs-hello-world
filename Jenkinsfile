pipeline{
    agent any

    stages{
        stage('Develop'){
            steps{
                checkout([$class: 'GitSCM',
                    branches: [[name: "origin/*"]],
                    doGenerateSubmoduleConfigurations: false,
                    submoduleCfg: []])
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
                echo GIT_BRANCH
            }
        }
    }
}
