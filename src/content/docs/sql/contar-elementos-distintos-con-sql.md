---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTIJTVI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCsSfTODaJ7hWSEcN%2BYdmL2aQNaJXlAtwaWwufQycY%2B%2FgIhAIyF%2B16aLI88wDjKQ2eNct%2FQn7x4iWare6v9YJe%2FQBTnKv8DCEUQABoMNjM3NDIzMTgzODA1IgxM2MWsfgHQDTHzwF4q3AOfr703tD4gOk%2Bro5C%2FBm2PBsfICLHDksXzLwaSbH7FvuYo79kEMK2ISUHGZ6dPgJvKauwL1exW7QFXxZLSg2o7YB51TtrwaP3bVCzbGaDjEXKJTcXhBkCImgAGKz2V23NYmyuaUZb4ycI5I8jlPIqHvmvIES3wmKj6LZWrNgZjiTZmmTeAC0M960HQBeJFo9CwjPgbbKmlTqNBAXroD73XDb0JtN8cfsxfR1W%2BAMjICT%2FeJI8aPVYMUzkoSnXD5vix5XbYaYQjBioHbXmC%2BZSfdKfQ6LjgotEzlDbuMoK9KjeukvT4GGdmI9feY%2Bp4MaxPutZ96itJXL2PuzSam12CGogfvQ6B3WbEuZH8DSwEO9iGZjAahDlp3MPMhovA69zPZIxdkTCbH71eSm1MwnO%2B%2FI2a8zZ%2Fpm5qFahzfgeuI73dcarQhEpj9qFwtqQiiXWQexgxM9a2aiO8mn%2BVlTRpjvZLmhs%2F6U2wrhdUrd%2BaKrvJ4Cfk83nAkwTI4MdIONCIn%2FXKK855dUn6ueiht09n30Bl1qm28baxmLernQQHjWDzch2I000Lc4MutwW8CZxOFIXGslixwJ9lCgL%2By%2FC9Pptf02nFmUq0JGVsX%2FP3wZNSz51%2F8TyUqcoZRjCF58XJBjqkAbU0BLkQ5gAKgY4jY%2B9aoh4XQS51gMzQ4skLhXa%2BnC3cpqaSFB9dsRZ06K5Eee9G08qc9B14YzPcl5TCvgS2KWvSUPm7IyaM33LWc6Qjg%2FmLN43%2BvPk7qQ3Dv4lcwcPKczCGraNy%2FAaHLChX%2B2m6dZOhbx%2FkEK5%2Bhk%2Fb%2BruRgsSKTitXbDCV6zPz0gznE%2F2NrnGI7KxZL3dL4E77t%2BzjS5NGDLL4&X-Amz-Signature=20cdc228febfcdf4fd802bea09bcb6a14420977a969a8d154d3f88299b01e8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

