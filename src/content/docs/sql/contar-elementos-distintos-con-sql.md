---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HBH3REI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICr1IyRurnhsiSNyThiJe2lwbng90E5tUPKmQAVVDq9HAiEA6snc01TNqhomT1wQWtOQhkLscSiPv9Lr82DR%2BrTR7ccq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCVPsuzmACEiTF0e9CrcA%2BIuLmnK%2BgYx3nWBzyScvW3dL3V9%2F8mMgyylXl9eYpPAg8FOJNzAcQve4fywho1xt30SNru2mXSI9VoOGJ0d8%2Fssxpy4oIWXvlNGxIoIiEsphXp4UcvvUl37rcYoF12B%2Fp%2F%2BeiN6WtjNgr8V0CYBLe6bA3aMSrhmd5jLhYDbH3LAP%2FXEeTUi%2BrTKcs6oTxJmilLghYatuU7kW3CP7%2FbvoFF20DBTURDZBfV43yOFmOjFu20Bnzp%2B%2BeGiB%2BwCFzA0EYJp3ZlRaWuFDTWJdCECcPZKcHFOQiY%2F9mw9sWcG4Rgk2Jj8onx%2FJ6yJYCqoKA3Ozi9CE8QoPzr03Tv6QXpXtaXwkTvl1UrlMZI2TCNizr1WL9pZCX786rv4lK7rXA05G%2BDqzfkyYrwn3cbDKj0Bw6bQNAJMHtnr20v5Wc5FU4nGPGwQTYCuGdM6o0eIzUsYJGvmt3cDKIPBIinsIbIgP%2Fu7OXnFbt2ZD%2BTFpi2vAKo8UcqKSBWomCrtwQibm%2BcxgU6KZ2V44KUoN4oIVL7jd9QkMDDLDvMIKKGObAkyFvLF92dY6KiGGFtN%2B0x1zvxywVACX0MzZelyHidAmcIoMc8BQ7fLj%2FOvyYn00TDJj%2FRvfEpRGmXdLkuzj2u%2BMPa0w8kGOqUBZrJcUaUH8mdjv4EDIMsjy8olMcVSCMFwNoR7%2BZD3YyKD7D6eBqM4z93O%2F6nfPG62YlyPqGJivwIbEBi9Gc0geVQF%2FaDmWZ92Uhurw9MHD8QPVxZUEPMVSZBbHHgji5OO8u0poaGKYoR1tXAOQ%2FguPNnUts7F9uKUy6XVIv0W5txbud6VanqlcdAMFFw%2FPL2HbfzyYyfYRDmGxLD0bepdsQw5HWpl&X-Amz-Signature=3ec405b54325370d641a893875ee4da05bc094e191dae8adb75ab43a373d8db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

