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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAT26EXN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAXyKOthfRWo6jH8puQl00XfqxNxWAnrEzHcT4Im%2FwOWAiEAtjK2b5lYf4b3xdqq0cTcgi%2Fp%2F2JjiW%2BEZ0jHsQRmoqgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKuMCeT%2BqT0mrU6NjSrcA908Yr65oJC4y4D1wg1OUVqXsVHl8BZu2WlRt%2Bk4%2F3XRGkskBCrKYljzz1CmysRwVtff%2B9sQjHOeQajv5HuFyHpQpfhubaE8kHhM4n6it2kYK%2FMItMBCYWay1EoFkGrWzkVy6C%2FMlX1kNO6QCHn6qQ1X%2F1jq6Cj1lIBYJkyNB%2FljRD9Q2%2BcG%2FdIGD7QhQ8js4h4fFa1hy%2F9Dd9himO5OPw1VhbKDfUZVwoYHNXQkWE%2FUSJSHVqWAHrm2gzxMYn33dcG9DB6ah7IvTlR57PUgmt1JQCtKohrUarTBKhW2AuUD3pfqDetruQuNfzjKWUvBptBdJjoHFReFhZRy1RryRbBu6U91xReUbu6I%2FbvV653fPlBZMqBhli4GVIezAuSv7bi55amDp%2Bq9ssUl6fOGJVbRG7GDkxp7ANnsPpSDuY7yRjXJHan6ktI6l%2FeUSuVJQj3QTCd%2Fge4RG%2Fi2QHQje1BtGgyzAk3yTfe48Bj6QCE6Smkv3JapS2u%2FVHVytzZPAY04AzKbg9y4abc%2B9pVL0d9%2F6hLDEdEMdHKI0lRK8LVvXii8O289ljkpOW2MxIwqVzAIZMOn0hkXRcaZWi7SCny%2BRuREDC4gS9v6fgbHOc%2FdaJymvrEwq1z6JtfsMPf%2BvckGOqUBCS3Co7ixmsQ6Z7pYQT1hsHS4wXW7gNLBDI39KX02GB%2BFWUp4%2BMiBgJAX%2Bj%2F8tF6LUSMva%2BrXcP6S82yjKKx6T1wl%2BFV010YCKAEkAQGKFjO3tkr5aHT7ckitM213aFTFI7ZBzOF3Hn%2BQe3r5zNAwpbVqS9%2F6iRByB5clS%2BfKLQyWlL9rqOWrTL8jOnhrN6sINEzfL%2Bk202Haje3rGVHVznHuIXmm&X-Amz-Signature=3739b635e65340accd135c90939f55d117a71e8be0f9b49a558d6ed05114670e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

