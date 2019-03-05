pipeline{
    agent any
    parameters {
        string (
            defaultValue: '*',
            name: 'BRANCH_PATTERN'
        )
    }
    stages{
        stage('Origin'){
            steps{
                checkout([$class: 'GitSCM',
                    branches: [[name: "origin/${BRANCH_PATTERN}"]],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [[$class: 'LocalBranch']],
                    submoduleCfg: [],
                    userRemoteConfigs: [[
                        credentialsId: 'c3396add-9145-4d12-98cf-ac4bbda2a47f',
                        url: 'https://github.com/lakshmiNdevulapalli/nodejs-docs-hello-world.git']]])
            }
        }
        stage('Build'){
            when {
                expression {
                    GIT_BRANCH = 'origin/' + sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
                    return GIT_BRANCH == 'origin/master'
                }
            }

            parallel {
                stage('Dev'){
                    echo 'dev'
                }
                stage('Prod'){
                    echo 'prod'
                }
            }
            
        }
    }
}
