pipeline {
  agent any
  stages {
    stage('Preparation') {
      steps {
        sh 'npm install -g @babel/core @babel/cli @babel/preset-env'
        sh 'npm install -g @babel/polyfill'
      }
    }
    stage('Develop') {
      parallel {
        stage('Develop') {
          steps {
            echo 'Inside parallel stage'
          }
        }
        stage('Build') {
          agent {
            node {
              label 'build && linux'
            }

          }
          steps {
            echo 'inside build stage'
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
      steps {
        echo 'Inside Stage'
      }
    }
    stage('Prod') {
      steps {
        echo 'Inside Prod stage'
      }
    }
  }
}