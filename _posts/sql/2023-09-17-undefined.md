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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMU2PW64%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDzTA9BkRhNdK%2Bp%2BzVS8PEHIdSh9cELm4vOh4D8qOGDGwIgNzeII7yl5trcWRFdKoIDCcvhQGHTbIq%2BmfcfC9H3POwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGv87FqsC42MvO1VPircAwt%2BHExFEzMgkUvGxdgLdzjLCv0MhB8b4mb0ZCj46Nf5rlM31vEsxWMJm0kmJ8m1wv5CRiht5cF9cjMmJijxHTKy0YeL2lzPfXvorEbRq65brKj2enRFUM9QxVP3mJEdRBt2WZmIRAtmzrsxXmVPg2VWJuMIPf%2Fk3oSiuYBtD%2Btf1g9YUbQigDC62O0%2FBvO6ayQ1nH9A5N4WuioS1SFJxTs%2FAx87rQX7MGXNloeRjpHN4I4gTQ5i1JYDgbop2%2FezvXebyCzxF6RWhpbUo76VR1rvbZia4oUfFFDcU8F%2BqFEcVboFYFlBtQPdmNxUc69Fbyl1%2FwXsF5Ql0wI0RCQVrVYaT7WrpQMsHxiUv%2F0SvYWSQNT5fK5cV7zdw%2ByE0hrnr02Site%2FnYja1QsDOaPc127uwCN682zk30UouZyFZF9tt77y9t57y2WBtBfwl0TKpbjoBCYqyDs74WXo%2F74tsLbu%2F6jvLiXtWbn2azkzG6y4fDLUl75ov6tX8I9rlxrXdUrUn1KOaytXeAlHiYrArjeCCugyAFqp9O7S4LWonoKZh%2FOugDb2mkiXa7z0E%2BfnQWvR9cNVk4W5CPMG6yCT1POcM2kVnbPWIXGzZH5qzNpIn30kTkgRET2PRVuIMPvVv8kGOqUB%2B7KPzx%2B0yQ4atIgH7U0FgMRS1K8FW610CNqTYjfGtcYaib2881h8x9kJfTbCAcm9rCn9GasOvvWSmKNAiLnPgyoZ61GC1FGCxp6Bnq4z%2BIwEU9vwNg6ViX6LON6kaEEdMcaEft1W4EAvsB5Yy9CUZ2Ri2vjM0QGqrlN%2BqVH00%2FhQ4XdEA37iw9ZWdRkqG3tzZG3MWMZycncnR%2F1MfhIltCdzp%2F6M&X-Amz-Signature=8bffe704ab0db70ad905fd25c3abf1cfdc9a265d7a43e8a8de2b01d274eda85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

