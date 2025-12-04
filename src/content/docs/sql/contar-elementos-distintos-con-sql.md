---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QNMX5KF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCzCNn25SjqtUShq1F87uR54iBPy04lsyN%2FsrQqFCJVAwIhAJDvJlO87Xu1ZWzZf%2Bq0p%2By00W%2B8NXlgb362gt%2BE1cGUKv8DCEAQABoMNjM3NDIzMTgzODA1Igxivo4MN6QSkz%2Flfjkq3AMC%2BHxk%2FfqQlz0o30Chh0%2F215UWG2TEL6lHJ0ZkVGl5NzZR%2FM85j2%2FZrwuXxc49ht3j5rvXyLj6hQ%2FL%2FKYUnIX3n0DfpqTwe9COEdCa0W8%2FzTRFRxY7sRKbjSjkvSufSKT2cZfpP3oH8yhoKa2DHCiTiqdRawCAGrSrqT3gX15KjLXMAI%2FfUynNUCp0dHH4wj41z%2FzRYe%2BW%2BYJrryv2INRQRuD2r%2F%2FWsiD0N7%2FR6k24C47vtuawMpPmkcUR%2FNy2Mh1cohU7%2FWhtbUONuzf7B2Gk%2BtJrurnip67ty%2FhSuUX8CKI40jvAwgl5WgPpaW7fFQNOCEdvzpaCenMPS7AdXisjVCfLoFqm89W%2F%2Br%2FSIdWDkiJAG%2Fo52kHVGELLWVv4YivQ313e2g%2BcoJyk8mHS%2BUJ7W60NvYck8Fh6W34WkmqX5BHI9tEStVlw1i%2F6wO%2BDKy0UrggyhGSyQuiNJi1%2FKm4I9TMVr%2Fv3qNC%2FIET4n0A%2FnPCjkg1NrQ1yhFIsvCbsFlMbVj2J2zn%2BUs0QUGdNsKTZhimF1o3Oj8IyTqFrjqzK%2FmMKaA%2FN8hBoyOmiGxUE8zFQS6w0cRW6HRnxwlIlaRcCEX09g3jErG%2BpPWck%2BH%2Fl3qtn1836WBtKMVn1UjD558TJBjqkAfQI%2BIi034FGiWp81Q7CaBrCkIuN%2Bpw3J0MCRVz%2BEuz%2BAwD%2BOnOSLXrNLHJIxxwPLXmutU6YQxSFy2W%2FANaptq5wud0syDnC78FxtdPoxynENtN%2BPfMPfJbDEKe7%2BjeaGoHDL2pNkycnRMhZpea2b4ZBPyHoe%2B1RbQbXiRScBwQXRB7tiv%2FJvREPtQFqRstxf86%2FlsUfE7yPRhvzUswSd5UChKav&X-Amz-Signature=6c9408c939ebcd894f7ea184e66b3d1b9d04b66502448df832637e6a6d74efe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

