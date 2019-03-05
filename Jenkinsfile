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
                sh 'npm install -g @babel/core @babel/cli @babel/preset-env'
                sh 'npm install -g @babel/polyfill'
            }
        }
        stage('Develop'){ 
            steps{
                checkout([$class: 'GitSCM',
                    branches: [[name: "origin/*"]],
                    doGenerateSubmoduleConfigurations: false,
                    submoduleCfg: []])
                echo GIT_BRANCH
                sh 'npm install'
                sh 'node index.js'
                
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
                sh 'node index.js'
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
