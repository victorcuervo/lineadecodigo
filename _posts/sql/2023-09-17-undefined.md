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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTX4EJOR%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIENk1Z4UO7C3cAbxZHrBS6gNUdTntQcBEHHZg1MqZJA1AiB4vmzZ12e6UmakOKF758MtyzoDkm03DSk8xHty89wWfyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMSSxCBGtieR4aFbK%2FKtwDS1R4icsP4AvAgvcESH%2BDsteHkUsvMESXBjRmFINWLnnjHV%2B%2B9dwdhbePmIxo2KGIsS2oSrJmNTMSKzJb23htnMB%2BXsy88baMvEj6MGdMuuIQ6AbsgD3cKEC2ByOSNcf9jRqOMuobxtNLnJa3PqeHHZZ0EtfEfaVVuh9PahcEnFi%2FqqgiCrdbdnVOdK%2FKdDhi%2BwCDYC%2F9eaq7MBeBiYzqva%2BOoJZ4ruvkIAc%2FY4TJTgyq%2BI8JVmyJOim4x6dPmG%2FUKgO2tSlcxmC5KwWEB0VcutjPXUJH5adCCmXG3gkPwOvlkcgaDLhaTctSF0ee4wct6jhbNtT8EMfColj1D0MHhtG3iOLUPM5w66qP%2FBlxwc80PgRwuL9Gj%2BrLZio6yFlnggR6M%2BjnO4A9WHp2vkrJ%2FV94Ex2YW6MOsl2uCVnEg2c%2BzBG4PCwdnh8OrdPpj4YMQQwYpKF5WcGk%2BKHqVj7q1VORJ4zVucw1sOX64noTAXaLCoIremql5xReQhyq8btN50lMdvq%2FXmFXRjOI5UMDIKYSFJe5MZlb9wWJniXwHKJjdLtiYwMahOpTxB3oGFNpyXEEImBWRCCBP1dirxQpw6W%2FfuIuKN4OLNczu7RBZyQGkBYzKB5FXAOgfEUwqOW9yQY6pgHHx1UCp%2B%2FUPlXrY2D9L%2B8EjlQ6eys8yqlVWgO2TahbV2rydqYAmTNk9prPunfl0LPGVJVDUMRjQ7u9GGyZvPIEEzjv%2BrSQ5RbnK4amDTdMOePjdSx%2FfvNms6Il%2FPcAbpbcIkfjrpOPDleMh3kX6AhGqfctrWeENGJSSPBdex14N0aadhYz8Hxi%2BzCmGpxdT718w%2FwBAB3orT%2BUhZcBLcRSo2uQxCwo&X-Amz-Signature=4dbbe3abcc9e7d2206f6192a30a698685fe4ba9b68fb7687ff962234c39f8d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

