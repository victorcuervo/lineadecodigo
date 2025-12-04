---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZIO5LN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIEsJjgi8ZR7dz9LmFXiGlVhKI5ybnNTF8lpCXtfS4iJpAiEA4jLHsygLnVjtlphy6X0erGmEzMnvWPfymg4eexOWJr4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIlaMX9iiLKUIKiB7CrcA07XfQJJUFyS8gPLxnh%2FPRqmtrD9rVhotrfidyeyZYxpHcjXowZXcwf49TwlgBd%2BkuokZQBGYc%2BJRGAtxWklsVUk4LibUnhVv1VQ8qmnMMf5PcRGslkSPxuIYr46Vhoqv8I2ySKI7AQAjZEUW4cEUDKWrwgZKvF3%2BzGlFCikvYyRYVt0P4owpukumBUvQNl1wu1tICL24nIKNnv6qP2aw%2FcOG1qCSRdgkKXOzAuu8J9XU4ZKCG9IjyqTG7cVzbhyDKNtnDSyQUy8x5%2FOsDwgpQ6mNgDN%2F0geJadGCm7XdzpftEPhm%2BHzXrJ78Pnxy7GUr22Wv6frWNJvpd2cklsF1eZda0oFoH7qIWeduZjk4N%2FCmw%2FZh0cOIN1K9ktx2Iykk9rShkkO%2FhwTyyiXgCz1ibDvh4iPZ6JbA4qCvhkovgTlpqEc5TLaRraOXBPz%2F3KxWLIuijko8QT31TdMqiSvJ9woaIoisUfL3TZWrK8lLIKt1WNfgMonhnp9CtnZJp9elrIOJPN2k1CQNKB3ULQLVNjokeu2kEseteTGWapGKyxmapPRWG87XcSylMjsSXsrBxCIghdFkSaV7Nn8jc%2B1CNHdB7B1UD6551rT%2BqdDhqQvTTkX62CjDaic7eHaMJOVw8kGOqUBd%2FPB3uTeY5u%2FJbDr4b%2BstisHNtKfYpmMzz3V%2BLJ8VXGyoPtUoGGpdhEl3TXH24%2FO%2Fem3ItBaILRvUBgqEuqRDVEOnlC2huhv6DoVOMgB6JbpprNwarZuMx0GK9mTa3pwqmgHDcGtJWyfJB%2Bt762BNSsVnlHTvGxA7BFMIJmHjLuBILfBX6sm1pnqrHalmAShD7T3WnNLVCRCyUh6O2YDpUTZEsYX&X-Amz-Signature=a8916e0917fa6e485eb6d92989a3b1d860c237809cefaa5f185a7a837769f053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

