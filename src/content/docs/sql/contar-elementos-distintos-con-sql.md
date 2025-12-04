---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7256RP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCNX8V6qDffHJBelvC4K3JC02QSnsuQ3wCvqfJn9hRjlwIhALTG4%2BuZTmZFVm0ZDomKA6n%2FSz0V02ky%2FJWvvdlpTz5fKv8DCEMQABoMNjM3NDIzMTgzODA1IgwpKWw7%2B8n4nNdfrOUq3AMB41SbRC3EQLitIqvo0gyVHAe6SHJAQJpAlXi3cvcwUEEo32X27gAUxMTU8hSV2T2DN5V%2F7jiUQjahgjasI30HR9ao5ySgHCgwGUYeftiwlZoAWCEsmnJQCgfw0ftoyg5J0XbDwMAuLVortZDnlZSAD86fa%2Bhp0e8dwYPVh%2F4%2FgcDQI9buUPnY2ubmz%2FbF2BkzFSnKFxUDPp3od9oJD1XLzRE2ZX6pOisRhaxXHZIjDutSj9x%2BGvM6O2O4uJ4DfkudTLVDSbFcOfJxVZVEoDmZg%2BTl%2FkATPGmkAaov8WC0OHjXl8uv6xKvF6p%2FpNsoM7Lf19uB9PIe6m%2F7wpOxwR%2BmkXXqT%2FkE5dvavVeejXEMio8poQH8vBuRwWxO1zhEvJxPc5TSZFxrmsaS0Sehmg2GyJhBcxn1jVcRJaCwL6hzOwikhRVJopiLyab12E8QnErXdIjObtA2KmdBV18GoixRoVXf8CnyHrR9pnuD9UbTVP79hP%2BY4tJJX8Jnw4D6B2cnkrw5xEwqMHqdDQRTEKdEduw5vxXY%2B87ZcrLs%2BC0Hw5JSeLWQKMmATYVwlB%2BLtrCHMwpCsG%2B5AiRkhc7K86slK3POqTcg1oSjiAYsEZCyjT6kwpzAoO7zFYG2xjCirMXJBjqkAXc6wsQ%2FxM36teLzGWc9qcvk5D9Eb0dTo2hj3bLfOCvFCe%2FkMTsajKg%2FpKUuSZQdEkfv42UDcg2mBCuJirsg41H7XP%2BdOa03bWY17sVuldxoI1I%2Fyq2VrS2eyyPLjzwnb0tAtjixTZADkC83ciRPrL5VEPuW9o2zpYnl%2BomiUoPQAD53UlooaKYTpUYswz57k8ToGnqXigecngXE5TSyUXqv0O%2Bf&X-Amz-Signature=3657560511df479b6321ac366fd49ff73724a9d0c930a17ad15bbce17be054e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Dada nuestra tabla de libros, podemos realizar una consulta [SQL](https://www.manualweb.net/sql/), para contar elementos de la siguiente forma:


```sql
SELECT count(*) FROM libros
```


Esta consulta [SQL](http://www.manualweb.net/sql/) nos devolverá todas las entradas que tenga la tabla libros. Es decir, todos los libros de todos los autores. De esta forma, ante una tabla que tengamos los siguientes elementos dentro de ella.


| ISBN               | Titulo                  | Autor             |
| ------------------ | ----------------------- | ----------------- |
|  978-1-4493-0814-8 | What Is HTML5?          | Brett McLaughlin  |
| 970-26-0518-0      | Cómo Programar en Java  | Paul Deitel       |
| 978-84-415-2348-7  | Java SE 6               | F. Javier Moldes  |
| 978-1-4493-1439-2  | What's New in Java 7?   | Madhusudhan Konda |
| 978-1-4493-1608-2  | Just Spring             | Madhusudhan Konda |
| 978-1-4493-2838-2  | Just Spring Data Access | Madhusudhan Konda |

undefined
Obtendremos que hay 6 libros al utilizar la sentencia `count`.


Contar elementos distintos en [SQL](https://www.manualweb.net/sql/) sería para cubrir consultas del estilo... _"Contar todas las editoriales distintas de las que tenemos libros"_ o _"Contar todos los autores distintos de los que tenemos libros"_.


### Count y distinct para elementos distintos.


Para ello deberemos de aplicar la función `count` de [SQL](http://www.manualweb.net/sql/) sobre los campos editorial o autor, pero con una salvedad y es que utilizaremos el modificador `distinct`. Mediante esta sentencia `distinct` estaremos contando aquellos elementos que sean distintos.


La sentencia [SQL](http://www.manualweb.net/sql/) tendrá la siguiente sintaxis:


```sql
SELECT count(distinct campo) FROM tabla
```


Así, para sacar los autores distintos, ejecutaremos la siguiente sentencia [SQL](http://www.manualweb.net/sql/):


```sql
SELECT count(distinct autor) FROM libros
```


Siendo el resultado igual a 4 ya que solo hay libros de 4 autores diferentes.


De esta manera ya sabemos cómo podemos contar elementos distintos con [SQL](https://www.manualweb.net/sql/) mediante la sentencia `count` y el modificador `distinct`.

