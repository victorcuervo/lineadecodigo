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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5TDYS3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDUlZDpwxUrehMOYKsyMKZcqt3HQ4iFyzr%2B1In6eSOSagIhANbIGb1sBEPCY7CtS%2FwfQDPLibk2aIEL4xLLdzas%2Bf9KKv8DCDAQABoMNjM3NDIzMTgzODA1IgzdxjBZu5ZUiWV0pBAq3APRrU1jySod7lK6BwX1X0J7RwZLhhZ0DZHenPn8lzQhiguK7cpCX%2BBhSundJlRVwbL5RQ2ZOLtkidGOc1D0DBCIkFRVrDbsQvHAi4twQSTWRH16dhMd19E1J2z56kMzdPHaYzEGbbUgyXlNro%2FfDvYA2sWTiOxLVpdVFtOVvJDRdg7hm9XgBsnCllZ3%2BNZ9EwzaoaknrGnjvibfOFO04R6JbmIyfT60vzPk0iX2bwX7Sm4GQODbtfq%2F8VffEeisP7I%2BYQPUIC0U21ytT472nW%2Fdv8AYk2kyl0anIWvIuQdhBKc9ao%2Ba6EHjavRKM7CmYlg20jgTsjOkYndr1Pus%2BN9qMIGbnmfTf89AJZFgcv7I6%2B%2FM0djKaeTuEySfO%2B4%2BvPqou8fzirngZJf8hHH2ORBFydonsSeRiWB%2BWFzgr3FFQewkY7DvlZcm%2FyeUzwIyjlhAuRS0U14W3jL5SxDkCrumFcUnmqmSk18AvzpVOwTcpCdGImgWvJQhcTBZ6R0Db39r8bCduvkFbAyvrVKeH8NXyls5E8Dp1XGr0wPoq9XibjuGe2TcEZQLT0cwzZGCs8qOOObSxZWop8BB2Je6qRkWIxoYSNyjU06rA22AI6al%2FCqQXLekxHhh5WnXOzD7psHJBjqkAdK6mXJ%2FFsm675%2Fm%2Bh9gAWxjnv%2Fkvyr2A7pN2ELPowNrrHLg5YLjdJiW6gd9kC5%2BNiLJwYfLnG%2BdZimWPWjHdNyq5phHxzMMlrSvMY26ZooN8rQ5cVHlNSxUabeDoA6jT%2BMjPPGSfTDq2mVE9HlpOryig5n2TYEr0mrCuBL%2BS52sEo3STG6fX7zKdqoPBtwaJNYCQo25LY06MqWE5t9jlQr2w2eX&X-Amz-Signature=6a5df171b0f282a412c0a39c0261fcae39575f4affa988ca76c8c0a24d6c75e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

