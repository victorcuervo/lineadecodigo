---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYJ76WE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDtk5jEp2f0JlBcEnZbT%2BaT9CeMAANqKdY60g9pFRYOwAiEAr8RGwoXtEb8WuEv072xq%2BrtpSm1TSO9qNHrn42Lm5iIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBkCbiIuQLUyuxUurCrcA297pJyUfgjOC97BhnbwxYEjsNJPCpAldrVeIEeARvwiqgAJNE2TThUxKzafZ01RTdNjaiabZAKVIRNiZKFSC8Dx%2BPS5i%2F9B%2BidzIbamg1%2FHL8GXBD4Ez4gVOUszWQLZoGCs95oebDNYnVqA9PIhIzps12UVV2YCTk3uwps9KAyJ4to1quHr72pCUZfPY2UhvZXC5DiwyoPYBzAdUFxhT48KdSpX8Z6S5pgAH7eQSMihYpdAsGubEmIyuCloz6C%2B4krh%2F%2FIgV7sM9%2BtbGES1DzNYYS8kOR2COLh0%2Be9CysXdSo4mj4yrzLQUoAXwzeUmBUOh%2FuCtaUZbg21gQTT6jphNQ%2BsbjmTBgOcq4fvHDVwZIob6v3TjsFCiNRCKBfiFyZsjRpxsxoqpFTLbldZHnLFWX1zd6EFG%2BGEfqfazv25%2FHUbyYm8wMkHMfp2WJXkSNO3NNU4UxdlT4RQ1eQGTdxnG%2Bp34Lzrs%2F1hNXf3aslOZjxJYaFuRJHU6DPAji9j42Ze%2FfGY4GfSPlTnWjUyZOtGw0a5vLjM7mzZPFIjlexcUxknUqsHFX5Akw%2FlQxiGG%2Bg%2FpUaB4%2BbsJhzgZUpDy%2BjZ3xh8HsMIf5GV1mrXp0ltxHCx5gHwfvE33GFfRMLHcwskGOqUB01oJ53Ri8yYoxwr1gPedxU6GEnTjqp7eFJB6H9Zqn1AbAg8Qb7K0Ep7Mh3cxpWz2dsdOUKZoruUg9rjmm9P9Xz23tz75Ga5P0%2FhPDfilh5DdNse8hHLZ7VWYLgjywX55Rt2DW%2Bjw2nAg2TYZllZxMs2r35nDtY162xTZqxgy67ompl2N37RASTW5dAV%2By0GYGP7CxSzVhbmzs4pXZdM4hOcB4KZM&X-Amz-Signature=230a0a8c33a3ded009637015d256f6d88b930ec8920c723ec701f581d6455cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

