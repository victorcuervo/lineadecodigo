---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD5UORKL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCR7cYLpllAnvX5lWIvaith7LqTGl0D%2FPVBiMDplNH38gIgbF%2B507zbgQG6bOaVgoBMus%2BOyjLxT%2FbWoWuWyyYLKHkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJj0EGzfiFBBNBoY6yrcA4qNY99u1fmuLYypp7aFwoveYpWcEDTXs8yUm6tdM8P57d%2FdSJ6ZUYdKeI0BiFjTNC6Iqrf0iimKAMOamTQPA3D7MSc%2FhzLSBgxCOXI1FD%2BqfnaTMQZFExq33DY74pK17f2qWdKPENPNu5vi1dWL8UPCJpbsKhwlbeoVuy2UVaszUr3sQBE7kyrBi%2F%2BVKQ7X%2Bvs3uZTkU41%2Fwf6XZD%2B5eE2prTAVJ2nD1MajgATciwfJW%2F%2F31Wn0ZzH2Kg8pqTFOkfMK0GSy0s%2F9pDXoqHAONIPTNi4zKytDv0mTc91u%2BnxM%2B8E2XTiq06NUeb2h7kX4AZd%2FZcus0HKmK7VPOE2VmbO4oi6ZkORI7YNBnkB2JzcK%2BsLTp71Y4IjWVV0loed7NTirFdJlWuIEnbQn13OlLnM834EQeqEXB8sQ0f1n8fHM4l7YjY6xthA2cbmPZ0OUPXTpR1mv97hLLbh8qgFTDd5BaE8Z%2FjJSHlUCYycdAdDx94Scmxpn%2FXGi7JEXZj3ZzX07BW5KsoQsIU%2FVgRy3fz1M7Av7udFBdfeRRC2d2BFtYLMMYg34jjcF35LdGkZYLq95K63f0%2BXLcCyWrya41u9w2S7iI4c85ug4g%2FlJ46rNeRwPTU1VfFtlX%2FWgMNSUvskGOqUB4fl6nP84F0by66p%2Bq1%2BIDrWz4OwPGVcmib25bh2N89glNNZtOwfwPG7Q5SZl9vGBxbwjXcWeljJbZqlSBPIHMGuLnUF%2BW9OeohknUANblk68%2B9LKkEhStBzPO2PmxndAgEPWjXqRC2l3rL8JMuAKVZQ3RCZLvCPytOLBuK8MtrAZXS3qJx%2FVEoyml47ivLgqyAdWIMFKkMKOyY0c91PPqVLMkcVi&X-Amz-Signature=2d3c989af52175617039abb8987b4d7af9528b068b146c8e7f36fb45d8b51339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

