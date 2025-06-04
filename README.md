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
 Step 6: Continuous Deployment (CD) with GitHub Actions
This project includes a basic CD pipeline that runs automatically on every push to the main branch. The workflow is defined in:

bash
Copy
Edit
.github/workflows/cd.yml
What This CD Pipeline Does:
Checks out the latest code

Builds Docker images for both microservices

Optionally runs containers to verify the services build and start

🧪 To Test the CD Pipeline Locally (Manual Steps)
If you want to manually test the CD process on your machine (without GitHub Actions), you can do this:

For Auth Service:
bash
Copy
Edit
cd services/auth-service
docker build -t auth-service:latest .
docker run -d -p 5000:5000 --name auth-service auth-service:latest
For Product Service:
bash
Copy
Edit
cd services/product-service
docker build -t product-service:latest .
docker run -d -p 3000:3000 --name product-service product-service:latest
Then open in browser:

Auth Service: http://localhost:5000

Product Service: http://localhost:3000

✅ Summary of GitHub Actions Workflows
Workflow	File	Description
CI	.github/workflows/ci.yml	Runs linting, tests, and dependency install for each service
CD	.github/workflows/cd.yml	Builds Docker images and runs them to verify boot-up (local-only setup)

