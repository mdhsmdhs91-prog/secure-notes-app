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

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    bat '''
                    "C:\\sonar-scanner-cli-8.0.1.6346-windows-x64\\sonar-scanner-8.0.1.6346-windows-x64\\bin\\sonar-scanner.bat" ^
                    -Dsonar.projectKey=secure-notes ^
                    -Dsonar.sources=.
                    '''
                }
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

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Build Successful!'
        }
        failure {
            echo 'Build Failed!'
        }
    }
}