---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTSVS4WT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICm%2BQuaKJOMq40uUeeLNZ5zwy1nCM%2B4K2y8TyrEp%2FGWDAiEAhbWEjFk1qTZDmW%2F2BJtwzc5Tmfnfn65dknis7ZyKrC8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDO5pZuy%2FVMPz7QVpfyrcA%2FNKmDGwafLn%2FspxQ1PliXPqR%2BCJoFRQwfMt62qIY5G6Nr7BBAgXYmvhy%2BPpbhe3ONujHVLhmjM7BQPHtHjqeLDdE%2BSDj%2B%2BHmy7PSH1iZlNKyvnPOYu6kT6TofUXuEAL4tAXQLc3fcM9ikWJdfLenv4lQIhUkWnFf5rbxPNKMY71lDG1ffbdUG8pResNG2BQdJjPkYFRFfwwOtBkHMdh4WEqwv47gfiztiuzZyETNPpU8TwdGRK%2BNmIWIEpZI2BIgFF9MV%2FIbj7h6pESBw3ckwaj%2Bk9GXEgw1X9sdyscnrMtUVhSD9VU7BiXTJ2dwmc2UX3CV1UmDucUHdqVleR6DyllpMhYolccPiRwuxpR%2FC5nLkYcMmFRXyisUeGGEJm5cQuCfjp4%2FT0vt%2FYmw6p201iKKYwMJuk8WVZ5lrHtAlv%2Bckr7CVjmV7Ssi2f8JdHaaw4ekmsgdIPZTvNaqpRn7ztPp60YssG5v5ojQvSzt90nrNovIvS%2BBG5oA1f7CZvzyY5vzQQl%2FHQYA%2BGVwk%2FruLUIn1nyw6IGV33JeAgMxt1VPlN6Pyps0D9inuJHgdYYWH58Jn%2FxlzxCNYMnTz%2FYcZNtAz7Lojpzuuv%2BpoFcVyV9NP7qTDUXpE8T9Y7mMOj6xskGOqUBBsYn%2BBiypQYU8PK%2BKWZk9VTpnokP3ZXz%2BC%2B2BL6zfssdkaeoJ5QDRX0iyh8D0aVjV155MDtWpL0PHtf3nIy%2Bose6oUIQN8Nc3sXfVA7fCPXiZEEt3gRz1SWknZ32tlwlnW69lTfLXIJzi3XNPIO4NOQCwrgAp0pWtNB04Nt2egBIWbXJjqQKTyXt6ZltiQBi0nicrxUfSnlUtRDdExlnHxsLSv6J&X-Amz-Signature=1f8f2a31b3c1717e9ee4a32be6eed10e7fe54c1ec9d5f0bcd9935004d236a563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

