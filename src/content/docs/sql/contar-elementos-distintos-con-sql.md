---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEF7LMOE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7cJ5BgfCu%2BhP%2FQY6Hpjal68e8f3KQYSyfKbCQZYo74AiEAvpMpI58ZGcaHmmLp52u8WBp7WeHrUr4l4lyc5DfCmGgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGI%2FySW3V21ySOkmZyrcA2cvukTiHjh5f6uRPPYrMcI2prlUB1DgQJPvuejb9AacDtocfS46c4lPsbKoxWdsiA%2F%2FGE00UfzZGbPsf49c6221xSAB0sET9TGr18THcuDWGio5%2BgUU%2FY0G0KJ3FNRyD2tmsz7ARfs2o9MuU31buvTtWDEo%2BwhDve0m%2F8vjCHUSvUfPM%2BXBT4r56b9mxuEVAp%2BwGG%2BFhR70DpZzRNTWqLnpEYRdFtAazJqLITpji8lsJSw9auXRjhDmiu5QA028x8yLN32eYptO9yB%2BzZPBfmm7T2dXz12ATDqw41fA1zCR7oll2CiL%2BxMVuv6pjvf8NfHfnGHyHrQx62AjV29o5Q%2FoOPXwvu5cJH7VpTgq%2BVMcD9ThKslzSf1ZR1JSapLqGFPsg34ciaDFV4MKHrIS5MXbYytpVmwentLlTjpO8VV2UZkNEUVkXDDX8x3FGpLO8FnnuHTWvJFP3a7Q3maKf1eHAfa56gDNBofUeUmx7U68CEj0WfvHfj2oO304%2B%2BKKGVlFWwBPcihBGiiiz7%2FvISMAiu1QsGN2k0VcaBo3dI4fknMnnk4YCR0liEvRxYsv04TSUjSub2%2Bm1lYMnWWDylTfwBQrloBIHfAO%2FckvvnmwkHGLspUjYFrA9NE6MJXcxskGOqUB%2F%2FU24ENpt8lpyXHIb31mqLuid%2BeovpRO7ayc2ODGl5p01ZpSAKAd%2BOsJJivCtVyRksb0cI9%2FQpHL2ViyKJ5NdLaytEPrxJFpWitrlcGu0nbT0YUlJ9Zqp8ItRJ46xAWyWa6P8FIpy67kGIut4KgqV9ZFQ11Q2hApQki0arXQh%2Fy9q1lvmxeVAKiOLAKpza5VpRugRkDm8aNshUp4B%2B%2FvNCAO5%2BeO&X-Amz-Signature=2809a76c8a4f5ed77779025229786bdf658a69afab8c86e5d0578a8de0112105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

