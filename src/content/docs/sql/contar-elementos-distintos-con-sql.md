---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URFLMIK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD9kKzLI6Mba6sDj6Zd3A%2BSZWIBbBgonXsgsFfs%2FTn9VgIhAOAhrszsGwS7pVOeuAVmAUrEQ4Vdw0E%2B71p93VE%2B3AYgKv8DCDwQABoMNjM3NDIzMTgzODA1IgyH%2FjrQkEie0dhaoI4q3APRXXNJGr1n6kdAnEix5v8lDLR8b3TlD9Y4lmLsSXVuKzc3NLPQvxLw9eQLPkxIiI6cfDhbGryRv3V6enUXdKATU4ch5QpAxfZOVeJBg%2BOIqd4DjeUnncgULD2eKMFOHXDnXhl0PS8njH%2B8ObiZaz4FG6gRUFKNdgFeps85aM1sBpg7To%2BF5YcYq9KXC51iMBn2AbhupKEAuU%2BTMMPTS3s0YD59ioZlSe3rv5dpmb%2Fuu0BnyH9vTF54ghGHD3U4kFkskK0%2BQfXPqA3l%2FIvoAjH%2BL7AOB69ROOuMoHxqz7999yStoZFnmNB%2Fr8MkEFG8DLhL1Z%2BcwQ5LctGODRjOahNtv6cVCnnFm6VE48tq%2B97awQ5r5gAYNVr%2FM7q%2Fi5ua37nmRdXyGIPoh%2B95z3uFg%2BAX8j%2BDrMtMOq0o7iDzbplawfDcRz9Zt6LkIQYUoANzKzWtnFW0AAJnywIs2Bt4oPJZBxywg48CIqS8Blva%2FFFl0DT%2FfahSd7f5WWKeoWrpbpOFFShFcmUb2XwXlphJ14prZYDQ5nvLbvh8pcZQih88Ud7pXMZP6%2Fd8yXRPTocMYDIFXoXaxSh6XHH6iRk39rCdlBNySPfi496%2B%2BTHqlL0DcTcgUslzONQQfopUnzCF9MPJBjqkAT7%2FoIhZg%2FeJT7d0bizCMcaVx927ec1P2mBabi%2BjpU27KBrP0AxTb8e5x7bE0gTRTvUqb%2BdTsugxca3EfSCKYV%2F9bdUNCvdZkZM2w9Km6jzgtr%2FZsQll%2B5gD8jyQJYwuy523UPdM3ltJ4Pqjc0QmvFsEXlOZKGZMnsY75ibs5aVW1Uw3WhmHEJO6Xg5Wm5U%2BDmuO4%2BJECVk0cIg9IANzIMBUlGTR&X-Amz-Signature=608cc45f576eff95ae2635add191adea18b3b1854dbf880b1d11d85a95a85c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

