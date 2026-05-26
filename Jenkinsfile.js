pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Snyk Security Scan') {
            steps {
                bat 'snyk test'
            }
        }

        stage('Pipeline Complete') {
            steps {
                echo 'DevSecOps Pipeline Successful'
            }
        }
    }
}