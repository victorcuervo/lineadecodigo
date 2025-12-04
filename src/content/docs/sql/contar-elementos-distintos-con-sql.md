---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLGFHXE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHXpcxUubX2xnnJAYKOssA1qge0ojkWPFnWI3t8RmOL1AiAc4M9BZHT0GtdPggU3LwOUNoFg%2BqbhdFhGbTpIp4occSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMM0q67oxravytyubZKtwDjNXPlNDvZtDakdZvnJdzwWIOaDTLST6qG7ptXiZuDAvBDe1%2BKEXSeja38CmBsKBP%2FCP94xsZRG6CrcN%2FraZ52Y15N%2FFpy1i9XNsV8r9AuRqKpHthIIVBTuytzZMEeYhjq18ZlxmF9NCsCVhQT15ZswnQXkVTABBTk9kjRbOuapk4RsSXSkCgeUIUpkN3ucAOsJVzw6Y4DhTJHecAbSimwJknnhAd%2BBQnOxt%2B3E2hD9QlC9tF1Z3nfMwFxkiGV3fRab%2FyU8g48RyxN6JhqxYmiX4qlFwcMtKgU9SrMSnukoB5Mppr8KlSB8O4MCmYPwe2Yrw%2BU2GzDJixrqOOes6%2Bn0zOjnUfY%2FopZ22DsQzn3RPt7V3Y1FWd%2BoljAESEuT4b63YnkC8ZPgIi4P6qKsO4nHvBwxi2qvKbavd8msZ3%2BhBlFV7cZ4SF4eL4O7o96I91hTAksPw20grJ08MA%2FiG1bVRulD3shVPyA7mWVgEiFY0A7EZYGj5CGM%2BOHKiRfz6mhHB1Kr9ur3Rk%2Bq0qRimoYS7lhh3%2Fs2sIkrmWLlcGy3%2BDyFpswnyg5uGQM%2F4m7db%2Fwxf16Q%2FA80QF9jIDcgTQmBUPRLJI8fjy%2FFLqEVIFw2rdIipBk7mCjRSeDgQwq7%2FGyQY6pgGT0r1gp7HbAwlrscTu%2FfQiopukDHuB14eDU8AhHl%2FI8DBQ%2BHyXj2Lg4E8fxiCocZ0lwaIGt1KcfKiy%2FtmhZBjvDzIxbXTtjqSAg6ljGUvrxFc%2Fxvnlvdlpknrrfq4gacPbXGFxnolF3coQZwX1ZNTt0plNGBGpK%2Bvq30nBWgYHtkTiKpaaQIMrXqX6KtuCLvoyiUINRqDoN2BweLr33KANpFLC0x8g&X-Amz-Signature=6e131894e96b514478b71522a804e2c7bc7ceb431a86f60606bae63b52104e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

