import React from 'react'
import eureka from '../img/eureka.png'

const EurekaServiceRegistry = () => {
  return (
    <div id="eureka_service_registry" class="active">
        <h2>What is Service Registry</h2>
        <p><li>Service Registry is used to register services available in our project.</li>
        <li>One service is nothing but one rest api project (one microservice).</li>
        <li>Service Registry will provide a dashboard with services information like Service name, Service Status, Health and end point URL etc...</li>
        </p>
        <h5 style={{color:'red'}}>But Question is where we register our services ?</h5>
      <p>
        Eureka Comes to market. Eureka is a service registry where we register ir services.
        <ol style={{}}>
          <li>It is developed by Netflix that is commonly used in microservices architectures.</li>
          <li>It has 2 component
            <ol>
              <li>Service Registration</li>
              <li>Service Discovery</li>
            </ol>
          </li>
        </ol>
      </p>
      <p>
        <h5>Service Registration:</h5>

      </p>
      <p>
        <h5>Service Discovery:</h5>
        
      </p>
      <p>
        <img src={eureka} style={{width:'40%',height:'20%'}}></img>
      </p>
        <h3>Procedure to create service registry</h3>
        <p>
        Create Spring Boot application with below dependencies:
        <ol>
          <li>spring-boot-starter-web</li>
          <li>netflix-eureka-server (this is from spring cloud)</li>
        </ol>
           <pre>
           {`
              @SpringBootApplication
              @EnableEurekaServer
              public class EurekaServerApplication {
                  public static void main(String[] args) {
                      SpringApplication.run(EurekaServerApplication.class, args);
                  }
              }
              `}
           </pre>
           Configure Embedded Container port number as 8761.<br></br><br></br>
           <b>Note:</b> 8761 is default port number for Eureka. If port is 8761, clients can auto detect eureka server and will get registered. If port number is not 8761 then we have to register clients manually.<br></br><br></br>
           Run our Spring Boot Application and Access Eureka Dashboard using this URL (http://localhost:8761/)
           
        </p>
        <h3>Procedure to create Service as Eureka Client.</h3>
        <p>
        Create Spring Boot application with below dependencies:
        <ol>
          <li>Create Spring Boot Project with below dependencies</li>
          <li>spring-starter-web</li>
          <li>spring-cloud-netflix-eureka-client</li>
          <li>Configure @EnableDiscoveryClient annotation at Spring Boot start class</li>
          <li>Create Rest Controller with Required methods</li>
          <li>Change Embedded Container Port No if Required and Run application</li>
          <li>Verify Eureka Dashboard ( Client should be registered ) </li>
        </ol>
        <h6>ProductService: </h6>
        <pre>
          {`
            @SpringBootApplication
            @EnableDiscoveryClient
            public class ProductServiceApplication {
                public static void main(String[] args) {
                    SpringApplication.run(ProductServiceApplication.class, args);
                }
            }
            
          `}
        </pre>
        <pre>
          {`
            @RestController
            public class ProductController {
                @GetMapping("/products/{productId}")
                public String getProductInfo(@PathVariable String productId) {
                    // Retrieve and return product information
                }
            }
            
          `}
        </pre>
        <pre>
          application.proerties

          {`

              spring.application.name=ProductService
              eureka.client.serviceUrl.defaultZone=http://localhost:8761/eureka
          `}
        </pre>
        <h6>OrderService:</h6>
        <pre>
        {`
          @SpringBootApplication
          @EnableDiscoveryClient
          public class OrderServiceApplication {
              public static void main(String[] args) {
                  SpringApplication.run(OrderServiceApplication.class, args);
              }
          }
          
        `}
        </pre>
        <pre>
          {`
            @RestController
            public class OrderController {
                @Autowired
                private RestTemplate restTemplate;
            
                @GetMapping("/orders/{orderId}")
                public String getOrderInfo(@PathVariable String orderId) {
                    // Retrieve order information and use ProductService using restTemplate
                }
            }            
          `}
        </pre>
        <pre>
          application.proerties

          {`
          
              spring.application.name=OrderService
              eureka.client.serviceUrl.defaultZone=http://localhost:8761/eureka
          `}
        </pre>
        </p>
      </div>
  )
}

export default EurekaServiceRegistry