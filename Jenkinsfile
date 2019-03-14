/*
* Jenkinsfile for LaunchDarkly Migration
* Dev: Bala Venkata
*/
pipeline{
    agent any
    tools {nodejs "nodejs"}

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
                    agent{
                        label 'build && linux'
                    }
                    steps{
                        /**
                        * Assign disk pool to capture the project and store as artifacts 
                        * Re-use this artifact in the deployment stage. 
                        */
                        script{
                            def extWorkspace = exwsAllocate 'linux-disk-pool'
                            exws(extWorkspace){
                                //checkout([$class: 'GitSCM',
                                  //  branches: [[name: "origin/*"]],
                                    //doGenerateSubmoduleConfigurations: false,
                                    //submoduleCfg: []])
                                //echo GIT_BRANCH
                                //sh 'npm install'
                                //sh "node /home/ec2-user/workspace/LaunchDarkly_mockRel/index.js" 
                            }
                            build 'LaunchDarkly-Deploy-Strategy'
                        }
                    }
                }
            }
        }
        stage('Stage'){
            agent{
                label 'build && linux'
            }
            when{
                expression{
                    GIT_BRANCH == 'mockRel'
                }
            }
            steps{
                /**
                * Assign disk pool to capture the project and store as artifacts 
                * Re-use this artifact in the deployment stage. 
                */
                script{
                    def extWorkspace = exwsAllocate 'linux-disk-pool'
                    def jobName = env.JOB_NAME
                    def first = jobName[0..11]
                    def last = jobName[13..19]
                    def path = first+"_"+last
                    exws(extWorkspace){
                        echo GIT_BRANCH
                        sh 'npm install'
                        sh "node /home/ec2-user/workspace/'${path}'/index.js" 
                    }
                    build 'LaunchDarkly-Deploy-Strategy'
                }
            }
        }
        stage('Prod'){
            when{
                expression{
                    GIT_BRANCH == 'master'
                }
            }
            steps{
                /**
                * Assign disk pool to capture the project and store as artifacts 
                * Re-use this artifact in the deployment stage. 
                */
                script{
                    def extWorkspace = exwsAllocate 'linux-disk-pool'
                    exws(extWorkspace){
                        echo GIT_BRANCH
                        sh 'npm install'
                    }
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