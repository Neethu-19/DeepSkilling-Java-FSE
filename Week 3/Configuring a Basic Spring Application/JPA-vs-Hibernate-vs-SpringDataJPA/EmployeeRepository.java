// EmployeeRepository.java
// Example of a Spring Data JPA repository interface

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    // No additional code needed for basic CRUD
} 