---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667AW7KPG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHP%2B2hIc9Lerl89K1FORRxWBXF7ZIOawgWiCmQw7Vd73AiABwA2qP9Dg83UlgYi2Dff2qAy0CXRrae2GoyyfMIS6byr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMTVmKR1EkP2M%2BWGm4KtwD%2FlNkYmqfP1AlaeHTKiCtK3D1QG1cd7j6eMwXm8sTkODQSQKLRMGGmtRJ8IRSlukyxDjDS5hZfbFw5n5%2BV26G1Auk32tKFVNrAclkG1jd3KuaRxSCgw6JSKyozR0TBGyqZnxFpQHPgop31537n9cjQFUIRwZwFPrUC7aIvoLclswCH4dKuK%2Bxxat%2FWx9o%2FwkyDOqkP%2BM5X6nbThxreG%2FBICC065M2SU9dfjqJHdxv4H%2Fs5p3hibmGeislTJBo8cjiZ3ly0WK%2FqsSnaMPf9sNOl%2B8pIUfole2oEP2K9jDy08G5Bf9GrzX%2FB1pRea%2B6EvMGNABGngRKu7PRvHb9o3TAxJxiGcUaCt7CWzjXFgjmLhPsu5GVAHA8ybz6c5X51a0bdccDY2jrLUDqCDapCeD4GvuRS6XkKD%2FJeNuovDNb%2BBDqWEft7JGGta2JHOgqcH4zbi%2F7dQLSppxPWoK3Go2%2FnwRef3msjJWYHIb9YE1B2l7gLx5VwP2E7skNhshqDt4t5j18i9nJ5EWvHWZKI6dQn7ftWcjxKEaRrpgtqfD1uV5MzFYpQ6KxbXKLkGHX3NdSSq2w7OACCLcsmViyEVHvVnElCFONOp9HIdJQMHOzeLRWYclVvUxuIqJGYhMwh8rFyQY6pgEXmCZaEnfV70UGg9FOCjifaOBmrzVHy9lnHba6CxWVF4c3U%2BpANmfHGHF00UE%2BqMsvKzVGTJPW1pzj0oWVwk1OAr2D%2F5zde4aoVU0BjCqo1VVXrk4llmmlONa8vxkqf%2Bc%2B994b%2Fxc6DQYY%2FIbBRlwQv8kn7xiUFn8UbJRx34k5%2FUgHco3M3LT5zmF15uCyB4Yty8Ntvojh6UWJOL0Cg6pfbtKyXVC6&X-Amz-Signature=0d589682c614d5cd120db45eb7a3866838d9e60f18c5a01172236aae1e0f87c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

