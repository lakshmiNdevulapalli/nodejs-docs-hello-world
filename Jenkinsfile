pipeline{
    agent any
    
    stages{
        stage('Quick Build') {
            steps {
                echo 'Building'
            }
        }
        stage('Deploy to Dev') {
            // when {
            //     branch 'develop' 
            // }
            stages {
                stage('Building Distributable Package') {
                    steps {
                        echo 'Building'
                    }
                }
                stage('Archiving Package') {
                    steps {
                        echo 'Archiving Aritfacts'
                        archiveArtifacts artifacts: '/*.zip', fingerprint: true
                    }
                }
                stage('Deploying Dev') {
                    steps {
                        echo 'Deploying'
                        timeout(time:3, unit:'DAYS') {
                            input message: "Approve build?"
                        }
                    }
                }
            }

        }
    }
}
