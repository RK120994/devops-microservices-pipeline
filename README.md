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