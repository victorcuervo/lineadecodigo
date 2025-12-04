---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYLBB42%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFiLCc3GuZSnOmelI%2FO4muzhJHK8gl%2BmHivB04dAsXvQAiEA0N6%2BJahToiwBoHNC3w0559Eo5A05nXEoDogVtg7UF7Aq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJfWcTq7WupQG3owYircA1k35lAaNUfS8keSCqrrYHIAFeZS7H2CDkjS%2BNWflH9Lb5pcjFFIjOLSUrDqHrHQRJdKauZG1jRaG3vAGkueXhxvLnztbzvS%2FwreuCoLHOvOwByyG1F5fT8hiiQq6B9%2F4pd4XkdhYANIfE%2FY1qGfAnEP%2BO9aV2yody%2B0LDTfnYW%2B%2BCOJ9QND7maBfgu7FsfH%2Boq7MP4U0o%2BqvuDmWp%2B2q4HKXSuWd%2BN5gpO%2FqjW5eOKNcKMv4armzxnl9yLkOuWutld3J0oLjaoGsC1%2FlCpYl4lpXj1U6GqkrqmDjkf54x6Csmo1GQPCLX3p7gIEQfrAZBtY6xQa9JsAcFOjsxgaW0%2FYCEBkPPmDarSXS5EirTesKuYuGIlavcJhfHb2aws09fD7h8fiU8iPsIPzb29T2pYKPY1QG53MqAJ1EphrDxGhcHzccKyLJUHi6LqyTF0364L3Wm2ULag7TtYoG6mG7Wd4Nk0x8tWAcg807X%2F%2B%2B4cKqsiZYH4gnRGnvbpWhe56B6NEYUqC0B9nZfi6DWPV3ofjNWMAKaf5rmZfTUAwkpRx6N7%2F4HIIrwnVjDJuoh1zisMzFUGZ9o7gyPbiJknN3w08lQo8JVl5j4r2oDvSSDdaWvwnu7QrDXrDq28FMKbUw8kGOqUBY4n6KAAS2fCN2okUTfnhoSqGgf6x4yg0Qr5dqRGw9NWtdrtigE0iqySFoi%2BEwWv%2BhU6%2FjlFGXWTYEtFDWk6vnbzCn68Vy0Nf%2FI9lHR4iaAzK4dEqjvO6QCKeBmEAnjRYCCzc98gZG1YfbghcQgfEpVDOHmREhqO6Vvo%2F6pAxC7c0lS5peWH%2BoyMP%2FVdrVRxal3F5ZrQ9jc9pbsYdA4I1x23GFNxI&X-Amz-Signature=68176b77bd0d49bc8a05a3531016fb016583ae2e5a80d0e9006299af34481910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

