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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IEUC2NU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD08rOWO%2FW4n0qXyQXsykO2VItGcEjiBv0avKFqETP6QAIgf4Wz3mD8u7mldnhwncVsMoJzuTL3f37mc%2FLytQ3dRA0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAS4kVu%2BVlQ2A%2BhGVCrcA87cuXmXluACBI4u0mfbaIZ3tNoHSplDb6qaPBWs3z1sLNnufudK%2FtViJpqy7xtGF2MMSM3rlBKZVtLI5jbfgc13VmX%2BdskdGMlZu47LyT1jx9DVKb5IjSEFLNazB%2B22HyU%2BxpfKAJRZZT%2BuBJU3SwGmskbLRy6V3YmGKySh9olmWmfOL%2Fale5mODyffq9f1VcQb0BTBwE1jCT0B58CJ%2BSD%2BeyjXo%2BwJajtVZyW%2FMCf4g5arG4xAZe%2B036FvnZ%2BaChz1VYh8t4igOQ32iK0a%2BRPJWhNax%2F4jIAH4dNJfjjHsolIK7oynESeMuARvf1Ml%2BMkGWub0WIAMWXzc%2BMpnJ%2FocNpVgkFeRo%2F7FfFbZ22GEknKAJO7u3R8gYbsUF3CRNQ0%2BcFnsnloYOTU3g4XBHI3xKf7tUfd3a2CcM7g1h3Y9I7pOSfOyCRDRz4%2F9X82%2FEwejLPgbXBLG4wY0hcvUhQFixYeRgIhwcfXGK6MnSgZ1bcSZN4epIQzEWX0oYBfpOR3atxRmfntxBMM2szmTzMAciqtCq81CASyjAbmZL6J8VtJOiEkBGdz8kM6LVrv4tshtMA%2BvRBHyvhT%2FRiEW3yBvIrYdFzxn7zo52%2FxlqkbakCASPSB2A4czrIFWMMGUvskGOqUBeK%2F%2B%2Bgm9eKLbxywa3WM2zhpjslsEcL8%2F2Bmwhg0UGqEiNHb50kLMKAa6awH9PoOP33xtHLec0eTH%2B1FrF%2FbxK04bD%2F4mFvWgIcBfmf7g4fgcZnjV1fTPZ8bPKw%2BRfVGp5Cohzl6ESzYQFqLBffQxjlwmReLvAOVwStq9LHn5F%2BH7LpIXh0oTvvvMEOEp39ZrYpcs1LrEvpKR6caGO75itfXnm%2FU5&X-Amz-Signature=537bce5e6fbb7e445d9e0b1bba65e88b88d8fed6d865e45aef923f22993e9cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

