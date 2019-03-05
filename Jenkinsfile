/*
* Jenkinsfile for LaunchDarkly Migration
* Dev: Bala Venkata
*/
pipeline{
    agent any
    tools {nodejs "nodejs"}
    //def nodejs = tool name: 'nodejs', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    //sh "${nodejs}/bin/node -v"

/* Stages to differentiate Dev, Stage and Prod */
    stages{
        stage('Preparation'){
            steps{
                sh 'npm install -g @babel/cli'
            }
        }
        stage('Develop'){ 
            steps{
                checkout([$class: 'GitSCM',
                    branches: [[name: "origin/*"]],
                    doGenerateSubmoduleConfigurations: false,
                    submoduleCfg: []])
                echo GIT_BRANCH
                //sh 'node -v'
                
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
