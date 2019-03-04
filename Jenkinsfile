pipeline{
    agent any
        stages{
            stage('develop'){
                steps{
                    git branch: 'origin/**',
                        credentialsId: 'c3396add-9145-4d12-98cf-ac4bbda2a47f',
                        url: 'https://github.com/lakshmiNdevulapalli/nodejs-docs-hello-world.git'
                    sh 'npm install'
                    sh 'npm install -g --save-dev @babel-cli'
                }
            }
            stage('stage'){
                steps{
                    git branch: 'origin/release/*',
                        credentialsId: 'c3396add-9145-4d12-98cf-ac4bbda2a47f',
                        url: 'https://github.com/lakshmiNdevulapalli/nodejs-docs-hello-world.git'
                    sh 'npm install'
                    sh 'npm install -g --save-dev @babel-cli'
                }
        }
        stage('prod'){
                steps{
                    git branch: 'origin/master',
                        credentialsId: 'c3396add-9145-4d12-98cf-ac4bbda2a47f',
                        url: 'https://github.com/lakshmiNdevulapalli/nodejs-docs-hello-world.git'
                    sh 'npm install'
                    sh 'npm install -g --save-dev @babel-cli'
                }
        }
    }
}