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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPOD4WT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCD10%2FhxwpCSaTnT%2Bw9CTyluIovhfvRBcC7A%2FjWvOEyQAIhAOO4fTY68qqqpBaqiARTQoLvF6OZCrLlg%2Bx6DSzjzXybKv8DCDAQABoMNjM3NDIzMTgzODA1Igw9zK5hgwTBzOJ%2FbjMq3APDspMJK5qeIsGY%2FJUk6g7%2FG6XNayAuzSk3%2BIQoDAbG7w7z6F%2Bw8tTUcYpyPjPBZBoi6B4tLKO%2Brlhm7cvh8ufiK7TjsQDzW9B1q1VXgsPoShOyxrx8e91cccVd8d2gC%2FiWDqFW%2FQw4K2Ir3CdSACEUVn6noRtTOjkgHeI%2BUC5Bf7de5o4jg6iq9Q74KRkv8TRxw0JSgGqhIwIihENc8TWqNe1RH2vu2uB5ERfkQcJKp4rslfJs2at1gAltLJZk9GmbfX%2FbkTPlkdImqRlaEU4%2BDwgrvwNgluF5GG3fobgW%2B08XVlOX0i0NyUb9vGM4m5BOn%2BpNEQZS46QQnstCZCfDinbXCaMY1UxOOgZPka3u7taMrINpIDzvP7hx07WPoWi3WpVJgrKVGGlC1JQqWM74W21ZkM01AvFLXc4iBB%2BAHzw5Tcdrw6M150hzqrkUYQSsEfT%2BtQzvXySMstba7N6nUNS4gzAryfv%2FCj8hpwxh3%2FlH%2BAI0qEe0E6arF%2BRhx665jiRsIJW8PW3IVdsuoODZ3nZVcbFAdtwjFMWnZIdmpDt6JSSlCT8LUdE6Wq70lIALrvTQJWt4zX0DLoi3g2CF1c%2F9pNgWPdQaTDHYEQuEE3tvqgvGWh3ASz7MoDDSpsHJBjqkAXWa5Qgsayyqqs3fraLsqVy19dE6cEo2V7iSro9Lg2fbaNBO0qAYR0Ht28D%2BmUq6a1uZP1gUj8UdkyKedmQbjx4qR5IH8d4eav1dtM6K%2FtH6YJOhfzaMNIL%2FDhhf7Zk%2BhVtFUO3enfz2oe90Pv4Y%2BsxO6lPdsUOF3h4DReuDVHfMCY2iFtt4hJOPNU%2Bf2v2dXBwaThOu0IpKNugEUS%2BsT6n4pjXw&X-Amz-Signature=2df8b8b2ecd5b14add4246fc5ca68879c4554a8f1ac77f4e9f398cfe846910f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

