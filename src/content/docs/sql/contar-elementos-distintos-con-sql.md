---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOODT7H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFP5tj%2F7sfS8A6gcJurb%2BHEWBtiL1%2FbOdzJVS9xqQ4yjAiBmynvXGGZiZbd3aqRW8aV%2FMetQ1jpjFsYFZQ5xIciU1ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbOu6UBn4XuA0%2F8NOKtwDKEYPHHhwSIUllC60eAtfxRGJfhWxx6tqWcqWGH1U1wyEe3q%2FRvruDbVwmknyBbTA0cgb%2FVOX9kvzNo3ABFkJTLyDiJ%2F5Ea0y0WF%2B0Lr8fhJIucLLZArPPA2zCVovFDFlgZEuT1869spIyY5g8BWVNAjPwE5LR4ryGu81iTklJh0FUg6lcXDF%2FwO2kIzM%2BkFpPqd7i5quKZvxQL0PcsxbB87Ike9brgDmVrQCDV%2Fk5v%2F1%2FeiB%2FPUODZBNOWYvrXhvZe5N02DUvNySVfOtvWzKuZeAbPD8pM4yjuP%2FBwPYyY4M2a3qTxkQgkLM1w%2BKKdI%2FY4%2FmGk%2FnYEalH%2BhJKgAo%2BLCFQ8P0FPPOI8yNV7tRK46KhMLngFhbRbJCzVxVpFo7RCNnV%2FsRPFY%2Fc0ibiAq12EZJA7OGNw%2FWRdhdbKHCyR4MwA8RRZnZF0aD0FINEh1E8kuOL7ANNkInQ%2BoG%2FbjHr0TA%2FgrImMiUTVtfRL7pcq3c7HzIZ0Wj8yKtYli7IxvjwjuE%2BnVQai0s%2Fn%2Flul89eufk121weuNXrsT59%2F2LAlS3POmFu3w%2BCJkOPewNpKAELr07Gom6CMzKjx5TqWLJFY%2FrYqr1avbnnnRfcLDZ9SMP4%2F0GFbF0VIZL%2BDkwu%2FPDyQY6pgEjq0RqiCUUgRjE6MV9P9kVWgcJlJV%2Fv1AVTDjDElvDBRxe7xHX%2BoWfoFkgPbWskW5yleKvhrvzXM1aAPCllWwQd5lhZfC7ZQ4e0UqcCLqi%2BG%2BZGD1pbA5s%2F5VCn6hI4RJ3Op2Ws1vmOm9Izb76o4AJfZSY7sqreEjrartrb7w6F2wApKPY%2BoFH%2BHaoP%2BzWA44NYj5i4MX8r93AUOUvApuQ0SeQk46D&X-Amz-Signature=465e5f2e654b389b0695dac7551225790e043482bde9900c2ea82ac933ad7e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

