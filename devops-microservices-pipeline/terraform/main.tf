provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "auth_service" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

resource "aws_instance" "product_service" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
