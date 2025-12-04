---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3LSNIH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDmT48JTx86rEa0JtCfIWBzJPxH6I8IWBmXL4Eq7MyTOQIhAPMji7CUk29svK03TqcjuTDzplTS2JaLW3LbRY0XRBLGKv8DCD0QABoMNjM3NDIzMTgzODA1IgzeQp6RS9uLDgaIMf4q3AOt%2FuGP7oKeCZp1QoLjiGJKGIVDNUXLuWwEE4Hwv9kmK970bZ1DUc3Qx5r75aD%2B9uYOX7GuFiPome6IbO94NE1NDVqJ022UUq6aq6dDzW%2FmZgcdQ3WBxpz5YzjaGeMBTeFTv%2Fbs5h%2FNrmg4fOAb2hWiKie7JtcbLhzleWunVINfrPiMOl76LDsdbwm291HrROO012jNFMOSPQpKHr1%2BWiIgLe0T%2BMfXv1xgW6yLf%2BUf8KOPVV%2FGH40YGZGq7pIWTiMpYLKyqp07nAM0Lb%2BxAfLiuHZsBY%2FY59zzeiMhPIJw%2FuD8B%2B9zzJQ3PnKEPBCrS4dMyQzTcrKc%2FRkEio3fEqVAmHLffTiX3SDXTWQ7AeJhqQDoSuAWfFkEg%2B1DNsuSOfJSLLgplwyRJArpgQxlYl8DotPuWhq2bl0RT9kPpFx3ijj3OBHA5ohaYn72mha9KJ2%2BR6ylhrSBAojHvPRTxDqLmVqeZbRfpC9DRXqIVThlDjlfDw7d2gvX7ySOtd0bEDE1BfBD78BgrGpA7nquc6UqIjcG%2FBqyjCnJ8mFFiH0NrhhG51FE%2FR%2FbT1iJ7TH6iRr3kiWM0ivVyWrguPrc0xTL0wK84Xf0omrj6DlPHfSw2Jeb2QNhrZ1EgaSR0jD6kMTJBjqkAfhQKOosWwfpsEaIrUUB00Jg9F5Oiz9TSQxBlYapabQQWs4%2FfYe5%2FS8xWRqcQIEr6VHlcRA%2FIf76GtUE27o1yLcGY9WzNKOuqxGZisvcwpzdNrbjH7N07MR7EE%2FubgWPJp64nt%2Bjrh9C0HEypHxnucnKDu29VLrr%2Fx2fDvVqurAIuDnAxPIlWqYxx2zKcjwbcmyRfOJLPrlCDy%2BTG%2FUIvAWnhRiQ&X-Amz-Signature=82ea1a88af3a12247a898ee45bea062692d26371235c9d5f02853bcedf700e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

