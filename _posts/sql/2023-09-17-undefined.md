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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YTTV2BJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDm%2F2VdmkucL5i%2FLe1r51TxZV9NQdiHe8gkFc9Hvgaw5QIgQePdG6RIqoM8%2Flg%2FE1ogCG8b8LBHITJBOyDNOts%2BeVMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDG0MEAR2Zh1%2B6S%2BTDCrcA90knoyJ76GrmQWieznwkzZkaGVW4y%2F%2F%2BtJiXp4rJNb4r94iZbKJDDttRbmJYQTuytExxImlbJAzJ014YauqADhAPh63SVSA4wxeQIIDFF2VyJJq7pojhvD2dAwZP3aZhKiysBpOcj5kgBpH2VwirD0qsNBFF9%2B%2FLesvz1nF7ojRRlWBvhCHr1ru%2BKLRl%2BL%2FdesZ%2F1QmRa9PTbA77bNK3K05inO7wjM%2FEY93Th4f%2F26Wmk8YF%2F%2FBDv4m2743Z87RKD2yDq5yhc5xQH2JlLjbv3fOcwozH57kzU5ht6T78JCpvKxEFh7mpRCGPEzGLoIDyyv%2FAo9abXpED2C1gjpJ1M5hKMG4n5XzkD8md3Z%2FFEy6hduVAoGMXFM8JimeH8jleST%2F3leZTZXhoRGNm6l2AUKhUY5RVPmjeGFw058nsTPkQNlZb2Gk0w%2BrGRL8o4d2r7lxtMxcwQpNM38r4f61IWAkv9v3mYBsrtapjlLrExUxzEuhtSBwmuH2Zda0FrSVEUJN0mC8m8%2FOMVTwYZplOdCoRJrangXMsRJ80I9vVU0nlNjZGbKyqa3Ly5a8%2FlYl4Ux9ozlCy6N6Y7jNSTBA%2Bv17ClkHqM3BQ34JPqZCENc%2F2lIbhfgm2sV8lnEJMNXWv8kGOqUByefNAmrwl1lMbK8Cq14NRdmnBVC2q4dsUVtyrYmmbMFR%2B88Di7%2FPZZl6rXoy5yaSFXnZ94L6wggmFVE%2FZbFUPBoC%2B3CzlIF%2FQxj3JUlXws7zo%2BvYmTt%2F1ILd6qMXMVeb16KcrwgcYUI5RcqDNsorJL64S9V1noII0BYqwP6AOglpk9i3SSrvderKnvhdnyKyln2CzEHoAEDY6E7RXX3sB0iJ6pAW&X-Amz-Signature=b7c5ebb7e49af9d79b0c68d110109c9e5e703ba98cf7f355b967f17dd33a8d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

