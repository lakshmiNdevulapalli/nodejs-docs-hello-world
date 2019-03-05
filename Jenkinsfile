/*
* Jenkinsfile for LaunchDarkly Migration
* Dev: Bala Venkata
*/
pipeline{
    agent any
    tools {nodejs "nodejs"}
    /*parameters {
        string (defaultValue: '*', description: 'To identify any branch master/release for now depending on the stage',
                name: 'GIT_ORIGIN_BRANCH_PATTERN')
    }*/
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
            parallel{
                stage('Build'){
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
                /*stage('Compile'){
                    steps{
                        sh 'npm run compile'
                    }
                }
                stage('Execute'){
                    steps{
                        sh 'npm start'
                    }
                }*/

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
    post{
        success{
            slackSend(color: '#66ff33', channel: '#alerts', message: "SUCCESSFUL: JOB '${env.JOB_NAME} [${env.BUILD_NUMBER}]'(${env.BUILD_URL})")
        }
        failure{
            slackSend(color: '#cc0000', channel: '#sample-project' message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'(${env.BUILD_URL})")
        }
    }
}