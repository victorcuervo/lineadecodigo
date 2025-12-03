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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5AV5EI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEzCHwxVBmGzJAoPQctKrD3Y%2BwCuJvBTlc8M%2FUGZFo%2FjAiEAxRdTqxk2atRXabdSTVLPC4%2BYPDwk3ipUePwY9CsFHCUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDB43yNOQm4P5lzXMSircA7CapuIi37dvAcZoedR1MEUPPJre6GsicMsMnEXHw%2B8IZQSO9fa48uXJSKdUh0BoxkKzuS0podnEHzzDoUsS0yF3QWoqV6SKmIcxpMuHkvCrqn6EHK8NVWjx5bpBZinHd3QCB6cbwBnua7TMCPgimLv%2Bv8R5SY40yx17BULkj9nxSNImH4GWdb0kpMxreRwrRnPQkWc6DUytfY2ZGv9xjzg8TJXHPt7kMCZC1SX1ubeRDNpXMJ44YLeDFrDzAoIfbrEaqqrb96u6ThdT9O2p2TGS8bxYC8INXBZRtKsizf6xoEOp60McwNiNbvGIU0JPOXyBI64mhSGtIrZcaIJLV9jeqKRZR98OTSwC0j4eeNd1FLpnN9ELVb4RMYr6NogN6NqNnURushW%2BU6h6AQe3Kgs%2FncaE66Ar%2Ba4Uwo%2Fuk8aKdkAB1g61F0R9tgaqIxGUoUGKraRBDzZSVTCvraZxO4dla3xLWxYEl9AhWnZPIeKdnw5tKP3hdj42FcFn7hJ5awIQa0gazpakC1Ix49hoJYh1AN4WI3k7Nc6aOSHojdjOZoeglDL9hcrNOXQ5T%2FebMDqn4kqAotYJSgDRgZOHIy26pXqin7tAm%2BXPepBJB4F7tHHdmf8oUH7dvclrMKeWvskGOqUB7LV%2BxU%2Bd6de8wsASlBfrA2x7CnB%2BYfgYj63a9k12MrIhu0Hh%2F6VYA70kWEowPvJ71Vm9KlsLVuUv%2BPRMU%2B6bUd17l3lfGyDyol%2FmAfwUN0n5Bwpdk%2FrCXjzY9bmH%2BxHHcyck2D9vlprXyWSDqIL%2BhHCRLeIQ%2FT5kXrU46CUolrhO9kg1YET844vm%2FBsPQ6NJNMoHvU8UUgsU6Rqs%2FBS9jmLYIhR6&X-Amz-Signature=fcd81afe174b4514cb39b8e53101a9badc1479cd9050aeeb245ba416ae5bb1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

