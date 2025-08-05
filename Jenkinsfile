pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                echo 'Cloning repository...'
                // Jenkins will clone automatically when using SCM
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jenkins-demo-app .'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests (placeholder)...'
            }
        }
        stage('Deploy Container') {
            steps {
                sh 'docker rm -f jenkins-demo-app || true'
                sh 'docker run -d --name jenkins-demo-app -p 8000:8080 jenkins-demo-app'
            }
        }
    }
}
