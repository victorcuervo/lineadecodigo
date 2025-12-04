---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJGX7XN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC%2FvXGZHuJOabZDJhkbU5DfJ57p8Xh5mGXa9Jfsvegc5AIgeT3mB9DmAob9dkxRbFiTXXBGYPYn31q78vPHQ4iLNXYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIQsg9TGlLz99B1zlSrcAwTy2SRQ96HtWp%2F7Alwx6d5OorUwsF3PCcD%2BfhvZNF52dA8hS1Gqbh%2FvFz%2FMLx2mL%2BaOJR%2FDcXJY7AtfNIXdz6AoYhsMb9MnmUMh1JRmJMnfin9RxiRuiLjrrj7bbhtBjjCXveY13%2FmOLqZD3TUhtBpT3BbmxyzsG7I%2BxxvtHxFs%2By8LQc9%2F%2FDb9kZdXjKHeWnFmmtGaz0%2FmYt1LJbHNGVA4oLp%2FYN99bTF4iaqdUFsntraBILR1rn7RJKzbYLwrnJTT5gY0E0RXp5ijBTObM%2B2peJ9pt6XV%2F%2Bk%2BXRYemC7C3xx4Z%2FlBIyDy2068lw0i9Vgey0e529XaMYFcb25hr%2FaaPHw9O72Um6GVQqGoJTmGDcxjyaMwdWb0MHtfGKxVXqLTlWvDT8G5o6CWCNVruA8DVzQYmXNmqUbq%2FrPS4ppiFLyHHYalV00Exese6Crjrvv93HVXhculFtb8aR2vzGEuRH2lKEtqHT2%2BJHDLEkjxcbrcLUd3ncXsah4vXlUOKXskzcY83YNM3H1OqwhkSUO8FNhxApt0wdJBwhCrPACIzFXwecdJVr7VrxvimUhJYkpH%2FBVNE1ags56tF9sA%2FanxPgS8vDbP3paQP6T%2F7pgOwXIBzakSKrxQZLRFMP%2B%2BxskGOqUBhMUdKrxUwkLSy06sSbbnxL56k5a3MhBdXMHppWrKihRMST53pYpSPEp8ZiQpRqdeNgh5Al%2BTdt4X3JY83s6iXlXMwFLdGyY1RQnlrGV3coOLiRlkGqu2FkhHwk3R0NVbc4mDjz6VG%2BowB%2BMR2Ni8EDj5IiaXQvZ94AnLXAx59CFRnAvDqMfU8L0hkM1fKoksX1dlP34LiaHU2S3MM0Y88Vkj3SBs&X-Amz-Signature=5fb724021381d02402189595a479ffeff1ce4cfb4d8d0e24362dac5c8c1e1151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

