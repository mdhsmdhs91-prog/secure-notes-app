pipeline {
agent any

```
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
                sonar-scanner ^
                -Dsonar.projectKey=secure-notes ^
                -Dsonar.sources=. ^
                -Dsonar.host.url=http://localhost:9000
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
```

}
