## Configurar la imagen

# Use an official Maven image as the base image
# Stage 1: build java project with maven, generate .jar file
FROM maven:3.9-ibm-semeru-25-noble AS build
# Set the working directory in the container
WORKDIR /app
# Copy the pom.xml and the project files to the container
COPY pom.xml .
COPY src ./src
# Build the application using Maven
#RUN mvn clean package
RUN mvn clean package -DskipTests

# ------------------------------------------------------------------------------------
# Use an official OpenJDK image as the base image
# Stage 2: run java project with jar
FROM eclipse-temurin:17-jre-ubi10-minimal

# Set the working directory in the container
WORKDIR /app
# Copy the built JAR file from the previous stage to the container
COPY --from=build /app/target/backend-jar.jar .
EXPOSE 8080
# Set the command to run the application
CMD ["java", "-jar", "backend-jar.jar"]