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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XEUMWR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIElHpsnAx7mLuPplDIi3spcANPqt90UmP1quzCNct0bgAiEApKsWy6ouhPNqMGGJN8EyNIY57CVHp1hfNuu9Ji6NXpwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHFW%2F3zo8uG6si%2Fb7yrcA%2B3odYG%2BiGd%2FsWWZx5c8%2Bx3Hx9MkTqVkTVmGdWOACsqcByE8%2BopHmy%2BQJvN5REsP%2BDuhwS%2F%2FuXuMBdqef9MvRDahP8K0xRK5Y47Cb3R%2BWk1DERyEGwEfgS2qcuJn8tusfhoztkA7u9QRHzfTVniMfzTWdLQcvJcLQsW2Y3vE0FMEfT2s%2BKHD69DADx2yliE04J0egQMercRfaGsBY4%2FnIZ1PA5fD%2BSkojQUEVP41tbPdxilE6GJnV4w2FFtdxOsz332T1t%2F7nTnvQmeGPnjDR1Vha5f8HSj2A9CYLj%2FIIUMYgypEZ7gVbr3iVW%2F8BRXd3pA46Rd8O9ev0KP2Qow4sgiTQaJuSB5YNXJ78yG2yTVQAxIVbhbBEmpVPdByUz21Zi8QUKpjZJDNiMcq%2FsLmYeDj7grgp%2FYVAWHzYGvL41jxff%2B7klpOp8XNO1F%2F4FJy82WMLPmydSstfEXs51BZDzDbVvRyStRI%2F7gKvD6GXFJl99neIyamjhSAxg91d4mjwAUQ%2Be79334BOKQdgmeee2ww7oNt8si0I1c70lPA0gqaffBdFsoy4g9zQ6Z59GlqxL8n7r8d%2FCGrdLJKpzYRqUSUMVfTA0Ni1HHMhaBPdLZofxJNDeGT7bStq0RgMIn3wckGOqUBfrgR%2FSSwqr%2FGNT0i9lHEI%2BonMOsR6LfC5N3a8DYkiZHWx9hFg8w8l06pOSBgFHX1N4r0cauKwbefxGucSYMnYHSWb47OkfnPJ41isLf%2BqzwhPfZkj%2FauqC9xmU0eL9npczAo9UIhyE2wc87qH4otv%2BOTW875e7y5fPXbTlsipAt8uFgEV4TJTopgt1wMen0F%2BgRtXyScjsjfto%2FeobeiS4jRMlos&X-Amz-Signature=5a31228aa83e20f59db4630d97d0b5474dbec317883f8e35a39938b1eaf3f6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

