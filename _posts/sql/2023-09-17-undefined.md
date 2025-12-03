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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRDYCDQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHIoxZnfAwYTs5k0HRX2qmiRmD%2F%2FTps0OkpCMljsHww8AiAjicIcUBlEcVcP%2Bt2CRDvEtOiDXcNsLMbp4BorJ3zyByr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMFeswxYwbGM98EQYpKtwD6nWZFervQ2JgPNQtlUCmKsJNJDEDjcDtlQJ8lwxwsr0CzXeQvmwMajgkegdP6WA4%2Fjhct3c1LtOzlQNAP6yS0j2T%2B0NccTRGPvGV5trZ6GoyU5PX2vtQRwYfSlTQBkE1qcAZRBWZpFCoB9dfKUoF3LMWh3hftT%2FvIOB%2BB%2FkO1rOe0BvTiRbghFDIWHqygj1ERkocFNkxYqbQekCwdvhCp%2FWLA8uwdGPE8bFeb%2FsA7pMgOeToX3ILMUXv5sM44dMiJxNicmRea5PZcUGjMn6CWPukOe1KcSjOwGtPgi2PABtUEgHjxMsZt3t5AR3la4KFA9nWD1PLP4a7qI8wvp3Y0YGmFqhtDkCjS%2B9r%2Fsj2VVU%2FlC2tSPsGwgLPE11rljrRN01HGuX2uILoH7NizeYgmaZXfSUZIDMKjXBTOuEJHAzjkhVzc2BRmyGEgbOd8ZQ6JgSYe0WLX4UHmksALzL59CapuVSiSgKeuKz9nmL4s4hgL32YMHf0dcYFVfHbnI3punpPqd7pcWm5L9VPPmd4eiYbTWlxOw1RG97P1%2FENVM1wqTCWNXnXtJpDM8JxJ0HOoQfIVgaaIiKMi7gtSedrzbe4PxR5deB3FbVrzbigqRSW9EQYeRrRrhif7pQw1NvByQY6pgFYjHdmaT2w8Md8OLTWa63NuBmA8s3DLAiodw%2F6kSjguYpkTvJiHQJYwVfwzQ6qJcCApRKUi0%2Bb8JRmIo7cCxygxVCM0QbuudlSWanmEzqmmKviJvA5Xnc1D1shyyO%2BnbMIEy7BTMka%2BHLpPzblWIGf9AvzZjIe6ROCRY2tBPD1Wl4CGaC6rGFbhWnDJmmGBqtv%2F3IoAZs9wtXVvEGTdeDJS1%2Bu%2BX7g&X-Amz-Signature=03b225beb677d15768bbeb398630054405f532bb3cf428fc89c8221f931507a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

