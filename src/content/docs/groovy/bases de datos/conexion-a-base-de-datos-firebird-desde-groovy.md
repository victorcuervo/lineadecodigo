---
title: "Conexión a base de datos Firebird desde Groovy"
description: "Descubre cómo realizar una conexión a base de datos Firebird desde Groovy de forma sencilla y eficiente. ¡Optimiza tu código y mejora tu flujo de trabajo!"
date: 2012-10-15
updatedDate: 2026-02-07
tags: ["firebird","sql","newinstance","eachrow"]
slug: groovy/bases-de-datos/conexion-a-base-de-datos-firebird-desde-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-81d8-8623-dc9d35c5ecd7
author: ariel
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/bd/ConexionFirebird.groovy
---

Mediante este ejemplo vamos a explicar **cómo realizar una sencilla conexión a una base de datos Firebird desde un programa Groovy**.


## ¿Qué necesitas para realizar este ejemplo?


Para poder codificar y probar el ejemplo es necesario lo siguiente:

1. Tener instalado [Firebird](http://www.firebirdsql.org/en/downloads/)
2. [Descargar el driver JDBC del sitio oficial de Firebird](http://www.firebirdsql.org/en/jdbc-driver/)
3. Usar la base de datos de ejemplo de Firebird (EMPLOYEE.FBD)

Al instalar Firebird se crea automáticamente una cuenta de usuario (`sysdba`) y un password (`masterkey`) que nos permitirá logearnos y acceder a la base de datos de ejemplo.


## Codificando el ejemplo


Lo primero será importar la librería necesaria para la conexión:


```groovy
import groovy.sql.Sql
```


Es increíble el ahorro de líneas de código, basta con usar el método `Sql.newInstance(direccionBase,usuario,password,driverConexion)` para conectar la base de datos.


```groovy
// Datos de la Conexión
def direccionBase="jdbc:firebirdsql://localhost/examples/empbuild/EMPLOYEE.FDB"
def usuario="sysdba"
def password="masterkey"
def driverConexion="org.firebirdsql.jdbc.FBDriver"
```


## Ejecutar la consulta


Ahora para ejecutar una consulta SQL usamos el método `sql.eachRow(consulta)`:


```groovy
// Consulta
def consulta="select * from country"
```


Ahora solo falta recorrer los campos de la tabla. Para ello utilizamos el método `sql.eachRow`:


```groovy
sql.eachRow(consulta){ fila ->
    println fila.country + "  "+ fila.currency
}
```


## Ejecutar el ejemplo


### Desde terminal de comandos


```bash
groovy ConexionFirebird.groovy
```


### Crear un archivo .bat o .cmd (en Windows)


**ejecuta.cmd**


```javascript
@echo off
echo Teclea Enter para ejecutar programa...
pause >null
groovy ConexionFirebird.groovy
```


### En Linux crear un archivo .sh


```bash
#!/bin/bash
read -p "Presiona Enter para ejecutar programa..."
groovy ConexionFirebird.groovy
```

