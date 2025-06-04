output "auth_service_ip" {
  value = aws_instance.auth_service.public_ip
}

output "product_service_ip" {
  value = aws_instance.product_service.public_ip
}
