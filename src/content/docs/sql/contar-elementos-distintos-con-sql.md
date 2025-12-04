---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IGG77M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHMJtHtalf4xYA9jfVR9PObpox97wrQksh0Xvzwpj4j1AiBe4iVgDMPedNoL793MXibQGer5Xp04rIMlrvffkjybXir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMVYTQGOt9W%2Br9uu1kKtwDCQIFpoKNw56W7IwLYFzzR%2FNmemD5MylQVnjeZdNax%2FAlWJ5hMOMGmd2XbRUkl5lL6Uwakgjg8zSBG7snXPSjioNECmZa3vDweUOYJYwuzBkRNlPlW%2BBpqdz4klAaBTLV3I7lFxWLnwWDFiJqJaL%2BeuyIHLBkZ3HGiFazhUxPgLhiF7nwWtnH3wxhZErOXQtQweeRx17QiLnTw4JXf%2FHcdr6sXFaPnmE9KxmWuhqkzxEbu4dBPoPxFQFQqZkl1Tmz%2B7KQtLSOhzgDyDXIyxST%2BnLBhdATI86DzwqY5HubpeAS77ugfG6j9pbFbSKOebPwCcMjyMttTpTD4Lt6KupI47Ww2F%2FJZO8aD9vZL%2FkPCJoXlwXORAsRmPlyCxFivDqZ0FpJMKwq8HYFPyalSnJXd6%2BTYZtPr68OqKCptbPOTZeOQAUKT6q7Y4meGKWNY7fOrm%2F2sIXx8D%2BykxtwbQS09iw13Pqkbw3xoNiwhqYK4BhDQYwZJlrjrtxtN0W3ffuV9RvLv4RUeSkNt7phuAtGnv7iXira5n21MOUaX3UADt%2BQ%2FKx5VYbJ0wQnh2KW5W%2FYGBIDQtMfu%2FrT0idQiNABnZZGgVB8NFhYwTCv%2B70gFUtKImcxB4qQ%2FPQGkGYw2%2BbFyQY6pgHLfmC8jpeVUlpQWgXggQhA%2BRoiUnDW3jHc6k9gXE9k9p4ofEgajADC4oqKBMi1bqbX8HCO4Fjyh9kJ%2FsARTGzeoWcElK97hQ%2B7nw%2BrJ%2FJnStqNWmIpr1rBLUymbEGoGZqMugQ3ZiyeZYZKPT42EoW%2BuBnai1%2BGwc4z57KZ%2BAAZ4tnt7h5s70y2qgspWRRzXN9Alk0cG3JkhDXIL215%2F%2BSO6zt0w5Jo&X-Amz-Signature=70a6648df297b97d483779a1cae0d54a570730575e60c86c3a31197cee218be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

