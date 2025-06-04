# devops-microservices-pipeline
# DevOps Microservices Project (Auth & Product Services)

This project shows how to build and run two microservices using Docker and set up infrastructure with Terraform. It also includes monitoring with Prometheus and Grafana, and CI/CD using GitHub Actions.

---

## ✅ What’s in the Project?

### 1. **Two Microservices**
- **Auth Service** (Python): Handles user login or authentication.
- **Product Service** (Node.js): Handles product info or listings.

### 2. **Terraform**
- Used to create cloud servers (like EC2 on AWS) automatically.

### 3. **Docker**
- Packages the services so they can run anywhere.

### 4. **GitHub Actions**
- Automatically tests and builds the code when we push to GitHub.

### 5. **Monitoring**
- **Prometheus** collects health/metrics data from the services.
- **Grafana** shows dashboards to see how services are performing.

---

## 🔧 How to Use This Project (Step-by-Step)

### Step 1: Clone the Git Repo

```bash
git clone https://github.com/RK120994/devops-microservices-pipeline.git
cd devops-microservices-pipeline

### Step 2: Run the Microservices with Docker
For Auth Service
bash
Copy
Edit
cd services/auth-service
docker build -t auth-service .
docker run -d -p 5000:5000 auth-service
For Product Service
bash
Copy
Edit
cd ../product-service
docker build -t product-service .
docker run -d -p 3000:3000 product-service
Now you can visit:

Auth Service → http://localhost:5000

Product Service → http://localhost:3000

### Step 3: Deploy Infrastructure with Terraform (Optional)
⚠️ This step is only needed if you want to launch the services on a cloud provider like AWS.

bash
Copy
Edit
cd terraform
terraform init
terraform apply
This will create the servers and show you their IP addresses at the end.

### Step 4: Enable Monitoring
bash
Copy
Edit
cd monitoring
docker-compose up -d
Then open:

Prometheus → http://localhost:9090

Grafana → http://localhost:3000 (login: admin / admin)

### Step 5: Automatic CI/CD with GitHub Actions
Go to .github/workflows/ci.yml

This file tells GitHub to:

Check code

Run tests

Build Docker images when you push code

You don’t need to run anything — it works automatically when you push to GitHub.

