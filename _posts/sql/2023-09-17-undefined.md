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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4T3BWB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCuYLgZlN02DJEtGD45U04yHPc3%2BLj6YXjeYUzh3lOqugIhAIcQ4oh%2FGJBkV%2Fx%2BtCjcG0qZaFAFg%2FwvJdk0jaIGJs4FKv8DCCkQABoMNjM3NDIzMTgzODA1IgxVgrJxDP5ubmPblP4q3AOA7%2FD0qarzA%2BUsbegkPe%2BTbgeDzpFE75I%2BULsFPd6Zer1RW8vsEwppGN1RuyzaKM7ctUhCAZV9cjOeR%2B3O8xZOYx%2FGdxUktrNpW6MWhzj73OTPHvVmtkJdFfb8Ci%2BQc3W0DJtDbwvetaA2x4j5n07bkOldwbHdsyngit34LSube49ADn2o1n1gMS3Q9YLgcPYlDgPrRKYweIeeZ2ae0HfgGYFarrgHhHJ5xqwkwLJ87c%2Fo1rA1gfL4fuuzhTgJ%2FMCsOeCDJgQOmIXxBgD80%2B8R%2BwsQ3IbVKbgTvbbQx6M9p28AGAe2RvOpt0oiF%2BaGJXKP66hewZ84wSp3hodcGKPd9L7T5RabUNx3p7TIJ8d4pwGFrlO4dWkcZCVOlcUM7xOlJx%2BGB5Wzd6b6333PHrrFHVuMQv9MWp%2Bdv1uW%2BBfmByQuUVgTu%2FXv8qT2QwAGw2XpmV2cUGO2PzWtkCoqA45hu9Qv3De36B9hAYLu6Y9zi1yZ52pAIuk5%2BB%2Ba92Z1yLPMM0Fx4nro68siJCmIreJJU8AC%2BdThQrz3GkqyWd2jq1RJZREJWSM%2FzPJpdIekuRilAqn1rkcwZ2VpQsAQkh45YM3TpkLA3YGTlNpHJG2CwZ6Fy7gOka6SGMEdPzDz1L%2FJBjqkAVqDG47FfQlEkIXWbND26NUOznaC2FewTH9vc1YuF6ZOcswJxfnELzgjvtttorHfyk3n2ZVW13%2FC5LA%2B%2FZwIlJ7eafiUc6fdyXnjbPBOey7tlFC4kv7oDD23WP9RYFTVXCU1yqOI8euxKclvxpv6erp0gtCUbMYOC6giPw1nUdt%2Fk6M04eLPtcAemM5nmmiLeIcYi248AzQiyKQdgYQC0B7XseG0&X-Amz-Signature=f611af688a1052de42d2995b27e833659564a163bf11dc8a44d0034552e86266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

