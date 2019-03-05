/*
* Jenkinsfile for LaunchDarkly Migration
* Dev: Bala Venkata
*/
pipeline{
    agent any
/* Stages to differentiate Dev, Stage and Prod */
    tools {
        nodejs 'nodejs'
    }
    stages{
        stage('Develop'){ 
            steps{
                checkout([$class: 'GitSCM',
                    branches: [[name: "origin/*"]],
                    doGenerateSubmoduleConfigurations: false,
                    submoduleCfg: []])
                echo GIT_BRANCH
                sh 'npm install'
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
                sh 'npm install'
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
                sh 'npm install'
            }
        }
    }
}