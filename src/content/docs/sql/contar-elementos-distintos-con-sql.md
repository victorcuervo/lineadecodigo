---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLEUSTWV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDf9kybbU8cLNuOIajs0%2BhGXsgdeoC63aqQvAjUOFolKAiAfGAVmfVFfjLbG4KnkJS2W0MFHvy9mE8436HXtOO%2FtNSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMo2PewLzSX%2FSXpCTKtwDHH6c%2B4wDlRiY%2BkFc91V79AjrUSyX61PZtjxD9JsQntaRDA0XjO%2Bt1%2FlX3cOtiQkQA5aPbDxK8XDw8kNre2Ww7U4QmMZVp6AzBgc%2BAVdATybPNG6WV5ipe5ehW%2BvJ7AsW5JEk7nVz8vY4okeIHhakUUqLEtJnYy7KoMIOhtVSqrLzvLmY3CSsAeoYu2DfzGWumeC3EdXAm6zd0Qj6zGTjCGiXO2rqU6pn%2FwTLdd3SvHMMAmdh62hyLP14s2Lk3hjKSvNbdgU%2BTfPcozrVR1oxJaZmcrS5rHkqyYI9pEa2MismzW4N9shuC5Oz6B74EjI71uSzRYNLsDeYJEk11ihOiZjhQMJK4S5DJbjDR5wu8ca0VFWjWkyu7zfz2Z8qZyWqFAFbP5bzHWA1jB0o6SOnidgh1aDfkoVJUORFfvlP7n9BxxjyCbp6WiwdvrAmFWXJR%2BhmtOdKG%2B8SqIIdaT5VTZZuKZ7cuJSqTS5ytYqjV7h73dLDxnYbapWoUDfWcSUCrSN0Ny4nLansl%2FPEGAnLgB%2FTtmRRJ%2BlqZGrgD%2BiShU9pDrQGOxju3HJkoM5A1I9FMFNKStUhRvrHAamKnlcyEKSs2lRHDK%2FTH0rhy4i5QdnrDhcGs8SypBpCc2EwzpTDyQY6pgHlUKVFvkCBBb%2F0BCV%2BW9NCjoUTSg%2FjvKKP2fwhpEG%2BMVVdYpU6Wcw6CCU39FACqb6hWZsIpxuOHDZ1%2FguAqaZLBfe5Ptmh7E1hTnBJOe37sQSn09%2FvR4XEXmtjsWSFd%2FvAL6xu2SXIzxCDwJYFIhoWJY6G1dKJAhLXUpqpMjg5s%2BYhUrL7ShD1%2FQXV7wzcsRl04g0tXGcFu5WAs7L36B7Gueb%2FWE5S&X-Amz-Signature=60c0bd03d71db0b9daedbe3554619465b38120ab626dabd3ce49aa172b3c5eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

