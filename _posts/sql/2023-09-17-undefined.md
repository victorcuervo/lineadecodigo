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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGMPSSN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD1bvo2vJlzbtNPFPafszeYbRT7oIYDL%2Fjwdl370n1u4QIhAKf4kloADW8Qxun9TIKakOqf17pUMyxnMrpG4MMoMPjpKv8DCCIQABoMNjM3NDIzMTgzODA1IgzMjr6cF%2F3I5%2FSXPJkq3AOTQJJzNtdbI0zFC4nT7WRBPvKlwV0WnNJPPF8Lor%2BwfJxLgujxoNf1kGvD%2BQjZo5ksf9hOQw7xtTxFoB6KGbYBf7WIySEd9TVUVoY%2BXgeLlUZoU4hA8HojNbefUEaS611ZWYQDqamlvGrHeQIPORrMgpSsQiowk%2BX5bEl%2B5V6N3pw8T%2FlA6leCpTQ3mDUBeC08bihQvDFWJExH8g%2FY1V8XRCIR9xp7WZqEwu4syyn%2B7ZD8Ys5vCxOLegoj1UEgFmrF4ZWCNYRffOo8yIxirol5CH2RqwLrglzS8nocF2g5GgmOShwWcdkyKYoFvmMgef8hnwjANdCGELcxRFuNzA2ltbcfjNK5I74AhMutVbQWGVSgBwiqCIoKcNMQfu2oTd0tLZJxzQDBHlcu%2FKn%2BwoXXGU7PEorJegWTFOwEgrTaxY3v%2B2sd5liosqt%2BKuPsEEsuBuE8O6fkMIFCdmMsIDxpytNWvjOq%2FgMLud3%2B7AeZlTHiiL2uGZro3%2FF7XLQZ2asvwVMQ5t%2BReVqWBs74bJXY8lE3sBB7KU8QZVdyapbAp87tXiyOoeJVCkGs%2FzKbO2cQwXGYm5gttT8u7PcW1RqQ%2F0u1I3U1QmZnw8lCyoXrSDP0oO5IlvbvYtdb2zDylr7JBjqkAWTxlN9bdroBbrw92BsvlIRlKTP%2BhEeXSgNqakvYhA8XwfqfhmQ%2Bh2W9%2FRDyIxkSRok6Dwkik5ynl%2BPFpP%2BFfWnoAamqk7rwWHU3I53gE1eg%2F5wX9C4%2B6MfgMpIzuoNG4tXavIkX2ed5AbiprfRhvbCBPG3iKPUhVEgqDgQBYoUi9AP3VVlu%2BEkbBZOBu8J81w7o%2BUY2juoiDFcHCWbTyUH9iF2f&X-Amz-Signature=fe8c044e6ba0c2d6484385b1e19ba3e3bddd8fac2161bcc8e6fc37e8bbad6acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

