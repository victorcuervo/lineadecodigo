---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URAHJPC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDzZkqGmcf3Vtx%2FhW4veHdDsxBcfFW%2BvRUpQcGzqTos0AiAxfIj7yJFWlnKDU987YjH%2BhMeEeDXQQovmwzX%2B6oX7fir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMkfTZfMn2%2BnoixVpfKtwDPG%2F2Ntli%2FQoPK%2FRm7i6zmDXSfafBasO1seu3m5bFdLoU7eb7KfLrkubCrBoAIkYqx6gcUQuXeA6ow4VM51PML4%2B44Yja%2Fdz80VYwojyQU0yz%2FnmFCpNyU3HiDlWv9UOA7VYnFCPowymQLIi1bC%2BVNj0xtuExVGl8GBd7fAObTH2xGzprZxccMo76mM5PXZN8kPLIMIMtORpM97O6SWWZ5n%2BRNV9nHpXIfx0V2ZjcCUbMZOtLaJv99EjGJLRVd1TF2W7ak%2FxGhlibYnskN4MmXPWwMzFods65L8ssTya%2Btx%2FGJgv6%2FzKNepCCTC%2FZ47vtE7mdX6CTBjrdXApILL5IDSIcCzvVL26Bg7m5DIee2UNfXxHAOo%2Bu9qSPJYwCq5nPEkQ8oAo7Y2VMwJmwWnxuz%2BFssbcxzTxeUdgkM0iCCkEM8r0F9Z4vY0Jihcriq1gtUrC6b6Lr53XeNIpQZq7qmH0Lg89PTPZpACh9bC3jtDuh5qHNVXmhPzqi6qLMCOcU52NTG0pjXFrL3LXNydek0sdcn57ieMuzFXjupSACBF4DjfZMXnP5nPjbbSFbvFTJ0%2FoFIqR7ahrfuQJQ%2Fk83rJfa0lfKSyjy9jMh76%2F0gdHRvmtCgSTrRNWP3Ucwo%2BfFyQY6pgE%2B9WTxWtllzg70CyJ7%2FzNrilno0faQ7tB94VEbiDDcBFWAiZbXr7%2BxSK%2BkzDzWlBwJT5Ck5SsrGe7CUp8iL%2B1%2BlK%2Bfdek0wjkxZclGHccwyyU3q7rDQbDjHpsqOX8Ebs%2Ftg%2BXgC4rLXBZY8APjF3%2B6ppdmSxbs5cqWTKo4Kdt07bvEnWnhM7j04z%2B%2BviLYT3bx2c5sUjvNi%2Btlh89OZZRoEZvjb5fk&X-Amz-Signature=9a223472bc9700eddffe1edc807e16f72af5a09b93088520156021a0f58cec0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

