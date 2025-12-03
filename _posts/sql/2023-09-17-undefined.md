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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6K6EEFI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDA5hMNWdtWF2k0Z8TdkrduEXLC%2FaC2mtzjTpLwhiwPDgIhAJpfg5l3cLTavSZhPGbLcXs%2FnCDNC4jbKgmlW3q75dPRKv8DCCwQABoMNjM3NDIzMTgzODA1IgzQVmrl%2BwE9Fagzwr0q3AMWoL5CtLYALi3HZ9urzATt3LY1Xwws5TAwYPGYOnU4uMAfJ97geZzJw6IbPLotWBcyDyG%2FWNHWgJUsgMSPsxIXZ8hTaB7XqhcmbonVXbiv6QJt7AofMdgDarU7ojKDiJ%2FZyBtA5O9LXmuf77DYhQUx1tZTuBn9ydtFevXCmzGMwLGij7klMzZzA8Vx1WmXOGTcecnH7wUhQpBsbeB%2FFLaDNBVpAMQyOhOVGPYMw%2BcFJtym6LJy04z8rXaipa1N7u40JSDUSW1C4P4xeTM61RlfEgNscMuBFdkZq%2Fi6LsvEK1AQdn0FJpLv%2BiPh1GTpFyLdX%2F5m2uNEFYVaDojLMwgKmTJEdevIj%2BnRRhhGc0ydl5qbm1FBgnkYbRR188%2BdEkDZV3xlwkR3tcJdYR1oKFEyVTWlWEo9dfAyWKfG3JnhH3bp8Ih%2BE%2BZdiChVmGTQhIEkOdaKDnOEcw0CYC6fTWzJGjHzyInz5UO91o3NLQSOZES%2B%2FuF4nIPYUtYHtxVzYcld1bSuF3NCjiaJRMzbBCbKz%2BZe6dNCVMPQ7gUKYAbIocxSsBrNmOFkdkNkg9Mu4uSosc04HkFtH8NwVnOjJtnUo71%2BLHgFZEZr4jTULcn0TD2%2B78QWmcRrudNWITCQr8DJBjqkAdcfrMiu8735GGkNR0j11mB%2BUjRT6bwgkEyXr7xFHR%2FAHeSmsw1mJUkFMYgu97y8P7BIDFDVuTILSNUcyq%2Bk7mERrNttU9au%2BrVbTqCDYFjN8wBqNWwRNoIkP8Eulk1M0SF1QYhseFxL8keZzlnGxVjwsMAKkT48KItZT0E4W4ZizFlR80l3JAvCpCeIzwTKGKQKp7pg%2BBRxJZoMw7tpWLP5WkVJ&X-Amz-Signature=c65e5ba785751b7d86f93b643f55c995cf9960b048f390079f417cc7602f2ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

