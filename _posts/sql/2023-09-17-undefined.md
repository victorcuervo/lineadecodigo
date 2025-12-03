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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ4L4YUL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDcT920WcgRzuVQYuEQTE%2FQo188In87rJCJauCEyVG%2B0QIgPT4JhbXQh0ZyYNeI%2FcZ7atqGFYo9DJ0PQcpXUCZMX2cq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAvN6dB0L2wNcqHVxCrcA32Rzl29bgaCEAitfSymNLUCpKH08F2k8rbodq%2F1FtoAcndr8bYvet%2Bt%2FuTKdbB%2B8oBgqqJSEKh3meiNaNFswBT44j2DLH30wiOyR0xVVxMdTGpMhMhhP7cvRBCq%2BSo39UNpveYFu22xBiPXD2bnoJAG6Gp20gKUhlfnEMd6a4ubInMiTA5%2B02oVMrCrKqRTmaoRGGuiTV80jf9%2F0ZE52n5vkxS75V8yrc%2BhBntq8rae4eWQzlm%2BsiBcEPRAVjyI%2FgEm9xRAVSr2b6S08K6Rp0fwEXgGB9J%2FUDTEvLVZXkNaQMuaODTaF22PIFr0Tms4M3Pv0rsznPIf7pSZsDCcxKbw7YjIz6lTvvzUowwQV2OYTFaxsriCuRWPc9PJPw0dzwHzFoWhzgCHyqx7Uwa9K1bNazVrKL1YECe3210DhYN93mcHDyd9%2F6OB%2FRaDJcJoYHQi1GmIVYnojaJpDN8QUan9nJTYmsPnvzVzq2sUvyggmKTZNNL1ew8gCDvBB28BGZTCOtxjWpIg6doOY2KsrpnGNs23EK%2BxELBAZyo7cZwyVafaEAKFTpo0V%2BN5GgrNPmRQAg4ifKH0m8PIOuttbZfGfUSU7csinK1nC4Xm%2Fp70h5tmrd1eeDjopOVpML3BwckGOqUBazl%2FYsyM77lHkf2zA1Os%2F3rp87P9pC22Qi4IpPGTHKG1zkY7COBTL5hBnOS365DPrjusdj2CYaOYoA80VmcZQu5JIfYuyn32ZBdDGTcZGsphxiLsXqrIs2p1Hv7JgjLOCB3cnm1knh%2Fu1mGDXAI05MamxwIT5Loo7DBXuAkCeG7cHLiNfpriFRi6k6Mo6XGDr8bGEay0T7GUEnv9BgZl9ysDyI6t&X-Amz-Signature=8c7daa220c153b293354664d5fce4b94730c3a9a1ebdda8947c477e35add665b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

