---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3XUO3TM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFPFhtrZPhhH35%2BL8uWwqyTUdSj6F4i6KVeplc5VVTdUAiACUg3flft75N0WTPDkEJcd%2BoFGZ3iRYr%2FME%2FHppwBCWir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMljnCPLAXeI1jVSvNKtwDD0UvKf2QFJPb132zwUPDMQBwHvHw72REHsD5EG%2B%2F8vg2ELdWYdGGQE9BDDo5hnEfmq4BW3sQ2J%2FmCCu7t7O0KlVHjWo2h8ayjmIB0503pd%2BuFJ7REpcZbCMJCxBQT12pKM1iKmGscEPY4oa59%2BoukNUOY5XK6gHJlrORMlxfIClxXUTP0do0zv3PlWpbCKizJffnnf0Oa19ykm0VPzaKy7J3j%2FH8OFq%2BNuwM9wJM%2FlWAw9nUT7eszy3THbGUGYz1iI%2BB2A996cFMvZoD5%2F7NsgaY1XImU%2BLhye27d1nK8OGdv8yZv6XKJMTOTfLjRc5nqGN14AvbtnmvlD3ua3%2BoiBDaBloVgumzFp%2FbuqJnbesmCkWnfoYsb6hw4XGXMIplseByHlyazTG4W7ex12dk1fWW%2BOxeK4CD2uUG0y8D8JzQR8I9vtV4khML6mj1fWSY5Q1QNbO48NMD5hf%2FTzs%2FB6jiEdfhsJWF4scg8E%2FPC5M%2BmNMmyhLydlGrDogom7AjGVW4TKuOAyQUGUIGUdWDOVKpwAGMvChN2%2FSko6MLHGNukHPOKYfPobH2nZqeJTu%2BCjNJKOrv%2BMy50biRqj5XE9LJHnXlgM7O7Y8Jbcr7h9hXH2duRFwMWTD1nJ0ws%2BfEyQY6pgEE8dQM9n47CJj%2BinM8Od67HuYPlbaloQMmLV5%2BGGtcrezINmpgweuATq%2F12BDc2JPeruWlNRi9FUtrKgcU1Pb9WH4VfpNhqbqx3bkkJGg0JEoswmFBiQzZsTnLgsxQ%2FRqHDF8hmhhvblf%2BJZXtbGBa8zjguD91TnE6SZTADWekQCl1fW39ssHrukgnghfJkyUZFBE5sJXA0KjTRGYFMwzRNW2b%2BxRt&X-Amz-Signature=ec1b8bacfa843da5cfcc2938330476419deac860a02ea5db99f9d1062e55dc3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

