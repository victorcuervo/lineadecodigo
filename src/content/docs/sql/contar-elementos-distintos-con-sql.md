---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSU53TD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCSNkcmR0sB057rHy3IljQyQvfFMJwxXk45VCeP70%2FGsQIhAI8QWdrl8UXzbE1N6CbyEq3uslPg6tkSnpdhHuH5wJimKv8DCEYQABoMNjM3NDIzMTgzODA1Igys%2Bjvf2ijxzx2q6yoq3ANbJsWt%2BwM1%2BTX0KsaHv8Rj85t9nmmsoc9buriZkq0XF%2F%2B0vD42QTqzm4iTOzuYe7quHVCRYDP3TRgEqoRLGlM0h8RcbL3%2FSBnlv4je93B1avJwSMNy%2BGCu7BOz0UephRX6XLnYbLzaD9VbVHP8sDvrv8snlzq45yP47OmEB4is4HHBdtsLJVA5rqlsmVpyEE8%2FfdQ6aHISTf0BjPVqeoTa5doO5AzDsSsesB5qak4MLE0jRuRvzSJxGQYvsyZ%2FE7YxLznp%2BZ8VdPFlMh9xP8EvQyVcgRQGvp9Ks48RjWI1p8PMZp%2Fw5S47z8jIXyMh3f5Tkt3ExLqsHPtP6zVXejdj2%2BiTx7UMbjWdOONRHUaDXrsEFTaUmZ9XngJW7JykhBOnTANQ1tho499FZgeSExiwke5MnOsbv5V7VBEm7IpUwmiVWhvVgHVgvDihM%2FDSMwNjKzB30RsGl97hms4zWE15RYqYJG%2BM6n9FIf8n9Kmd8ibxskHxpD7B83r0y4YlP5ppD7LE15VIkcD3tcgIdJemojyDXiRuvXVu9KvtyCBoBr8TyCx82mxsjnPz4vMbfNJfBb%2BKF61%2BglVcVhLOreTRYwXLjJhmH4JJnne2Kxo4cdB3NA6Q6G2byaae4jDFhMbJBjqkAf0nxjUecRvl9BuJOqnCt%2BPuZqeDdmvjt0xy3R7RIYHStlBiZzEp5bJjm2icPXaQxOg9dJ7XRogfwRDOGSW5mGvzs3nQyOzbulXEpsCeq8efkkyqz%2BkeWweYgRoNR8%2FYKNEEKsE6MvjgQj1Ds2oa2%2BZU2QANGyNhAVgERMx1M%2BxQ79f3HRSwTPw6IV9okZfU1PyHFVqBCNc3EAhmoV93bephmv6z&X-Amz-Signature=f54741ad0be926202e94d3871d238771c8834e546f21d13ee2eb447f2a4634a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

