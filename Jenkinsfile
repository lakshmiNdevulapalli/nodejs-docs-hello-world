pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('Preparation') {
            steps {
                sh 'npm install -g @babel/core @babel/cli @babel/preset-env'
                sh 'npm install -g @babel/polyfill'
            }
        }
        stage('Develop') {
            parallel {
                stage('Build') {
                    agent {
                        node {
                            label 'build && linux'
                        }
                    }
                    steps {
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

                            def workspace = env.WORKSPACE
                            def head =  workspace[0..24]
                            exws(extWorkspace) {
                                echo GIT_BRANCH
                                sh 'npm install'
                                //sh "node '${head}${path}'/index.js" 
                                sh 'node -v'
                            }
                            build 'LaunchDarkly-Deploy-Strategy'
                        }
                    }
                }
            }
        }
        stage('Stage') {
            agent {
                node {
                    label 'build && linux'
                }
            }
            when {
                expression {
                    GIT_BRANCH == 'mockRel'
                }
            }
            steps {
                input message: 'Manual trigger -> Staging'
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

                    def workspace = env.WORKSPACE
                    def head =  workspace[0..24]
                    exws(extWorkspace){
                        echo GIT_BRANCH
                        sh 'npm install'
                        sh "node -v" 
                    }
                    build 'LaunchDarkly-Deploy-Strategy'
                }
            }
        }
        stage('Prod') {
            when {
                expression{
                    GIT_BRANCH == 'master'
                }
            }
            steps {
                input message: 'Manual trigger -> Prod'
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
    post {
        success{
            slackSend(color: '#66ff33', channel: '#alerts', message: "SUCCESSFUL: JOB '${env.JOB_NAME} [${env.BUILD_NUMBER}]'(${env.BUILD_URL})")
        }
        failure{
            slackSend(color: '#cc0000', channel: '#sample-project', message: "FAILED: JOB '${env.JOB_NAME} [${env.BUILD_NUMBER}]'(${env.BUILD_URL})")
        }
    }
}
