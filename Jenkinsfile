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

        stage('Snyk Scan') {
            steps {
                bat 'snyk test'
            }
        }

        stage('Deploy') {
            steps {
                bat 'pm2 restart secure-notes-app'
            }
        }
    }
}