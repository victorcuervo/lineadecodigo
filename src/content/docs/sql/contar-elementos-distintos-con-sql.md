---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2A47YT4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICPIxru5FGt0y1FWWr57H3OHukj9MdDrmupUf4KFHByBAiEAn0SWIeNWTVOraL0zAObSKJBxsWPZhJnAF4CTgY3xpocq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJTPU73Wu8u6DyRliCrcA7jjub4%2B6j%2B7dMY%2FCUUEeE2h9G33mF%2FVYyo8ieEL625QTESV5Ld8wptD6Mtdk2uvAtp8jssBQ9wkhjNV4MEi6Bu1bOOslY6X7QBOOJFIc0JAyei4YfuUMxRdFEF31VMJjM%2B9p2DpAQKIMVqOokR1DD1pNa7FHqkInU7OPOqktcsEiSMCIPhFPgxQsjILaB8i9DH7Clwcwxo0joatU57L7jKKtMXjVcLY6%2BXWpyFEMOUvw7qA5x0g5lYqPAHcPScozMaIGvycCihMULaXZf66JWZF8ZfYiowYm%2BeTYY37yG8uUS%2B7Xkn6vq2dM6LykNS8qn9MDRPCBvUO5XGrZCsr%2FP9iHDy%2FrUpHThK%2BDFfhz%2FtVBAsyaG4q9Gu3FFIXHYtSDFEeYssobA09QEN0DO8suAVOCMMQ7iYgD93L4Y%2BufXGgL572QOU4DNje5vVT1C1gzljbx%2FVI9kV%2Bs43QIX2wNxwmTcp7pIfcb11CTwP2pOR6XuA7QcCnsQlWvtnGMlzoFEPwxymkFxaLh%2FiPHkZKigxNUUQwhHmX3fpLQQTxeDrovKKcgixbfqnuhfOCzikL0dWIDSJL2NiOPD04RzBvaTM9YtaKWL5Z5BAZ6dr06yEfSHXbI%2Fd3Wrx5e1gRMLnyw8kGOqUB9RyoqH9PCHmRJ%2F7V%2FZj5I7HnJS5NcKMyBLEA5kYoM7TPYgNbQ%2BMzcdPndCKrZ7eqjd%2BChFB0a3JPSuyTN35kgC6s%2FwTQWIbrJG0WEmNnQVc9%2B8LYezQf3lTbEJmZYZzEF7MgEYwO5PkpEXskrrcMdGbp7kk4eJD%2FyYlvnFjgrsBKP0KnutKPNBOPe46MAY1mNfQF%2FduF5cXIvG5LjO1tPp%2FJZao3&X-Amz-Signature=57a304bbc7661d6addf43388041c45c15a099bbb00f45b85141cb5573ba23917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

