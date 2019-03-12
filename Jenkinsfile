/*
* Jenkinsfile for LaunchDarkly Migration
* Dev: Bala Venkata
*/
pipeline{
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
            agent{
                label 'build && linux'
            }
            parallel{
                stage('Build'){
                    steps{
                        def extWorkspace = exwsAllocate 'linux-disk-pool'
                        exws(extWorkspace){
                            checkout([$class: 'GitSCM',
                                branches: [[name: "origin/*"]],
                                doGenerateSubmoduleConfigurations: false,
                                submoduleCfg: []])
                            echo GIT_BRANCH
                            sh 'npm install'
                            sh 'node index.js'   
                        }
                    }
                }
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
                //sh 'node index.js'
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
        stage('Deploy'){
            agent{
                label 'linux && test'
            }
            steps{
                exws(extWorkspace){
                    echo "Run npm test"
                    sh "npm test"
                }
            }
        }
    }
    post{
        success{
            slackSend(color: '#66ff33', channel: '#alerts', message: "SUCCESSFUL: JOB '${env.JOB_NAME} [${env.BUILD_NUMBER}]'(${env.BUILD_URL})")
        }
        failure{
            slackSend(color: '#cc0000', channel: '#sample-project', message: "FAILED: JOB '${env.JOB_NAME} [${env.BUILD_NUMBER}]'(${env.BUILD_URL})")
        }
    }
}