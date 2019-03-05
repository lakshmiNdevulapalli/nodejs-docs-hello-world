/*
* Jenkinsfile for LaunchDarkly Migration
* Dev: Bala Venkata
*/
pipeline{
    agent any
    tools {nodejs "nodejs"}
    //def nodejs = tool name: 'nodejs', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    //sh "${nodejs}/bin/node -v"
    sh 'node -v'
    sh "npm install -g --save-dev @babel/cli"

/* Stages to differentiate Dev, Stage and Prod */
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
