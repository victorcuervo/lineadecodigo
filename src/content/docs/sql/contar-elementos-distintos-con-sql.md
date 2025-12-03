---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUXSTZPK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD0QwrS6bU9%2BrPNRIMa2AHTuZtzblpT%2FzCYpA4oKRJOlwIhAI8OBzA2HDJgT%2FnNnDYXLnGMrC%2FwMD0ggj%2Fnrtk9Add%2BKv8DCDgQABoMNjM3NDIzMTgzODA1Igyej9uqqY7ovEPrcG8q3AMR97BBceuluwnpymRx0Iu2ToZD18qN0D3BX%2FrVVXV97Kjuzs6z%2BmQv5SNGFnGkdRCKuq%2FAGtBTe6r6F%2B74uI9qYQTBEVimLHyubn65B%2B4P%2BhC%2BKv3u0p%2Bh2lx9t9wN6pnMlPZY0aYUHln4azh0FOFW0c3VQxgGL1g085qzImMYzSyDdzTgCVfyjileRfm2pNQ2ybltHnFnxmyexpIn5Qordgo2MJhFoOiDc%2BM9maXbGIKVDdGvoltnrYfYPoPIqK3FOH24i3b7aW0XycoK%2FCC2BkNmuh4u7eKsvofJtTyFAYYL%2BeF7CAOF6xRp%2FEcaQDMLwubH1FhqMsND9GK86zWhE3KhFJRKgY%2BRA47CWYsDZGUMSlPeU5F1bzQ5f6MIPy2cf1Lg5N4FELydaFqZ9IbCkVB%2BytTsK%2Fp%2BijYCltjP9vxmnAMO6RtClovo9KIHInyi4ltwrzqPgSE%2FUAo4E7vb0E7IE3s8%2FVmX2vEBKqZOs9lDhzmJ7QODtjbhaBZwQheOJD19PPXZdCpNaArq%2F7OfhlYY3h6yPG2X7s7C0fiMmPFM%2F26nH%2BWm4ur4%2B3oxKQ4A02IwMWUddSIzLVky1uGnNmZBW5HiuSsKw32QPiRYs%2F6yWNDwjveRGPPzHjDM%2BMLJBjqkAbgR3VeASz0LeKjn0Sg0KvH9wLyemgUcE4cLrK7Jx31GA7PP%2BMRimg6Pw2NuWBf5E6Qpxguaox8D6GFyqL0XQNcGuSaTHD5QfhOiDe1h1JQwMI6o0Gu0P%2FI%2BbULq6z3TIdkF0yrX17KxDdOe9o57v46RQldCZjW59U35eDYaH1yobaH6XFqwfTeC3hXQB2l0zKmSagKMGgIerPbKk09jUOEOBp2R&X-Amz-Signature=0a36aa8a7c2488da33ce55bb6d271de0adab890becb022220d638c22fe4db8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

