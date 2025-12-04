---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNGBZW2Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGR4fGMxY9GFo3hRJiud6DbWBDTIBhOFyGsqUp9%2B3VJRAiACaJ%2Ft1DWZTkmW2khDlU0UWWTEjyWHqVZYLFERGh5JZSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMh%2Fn4%2FqPMUXA1kuy2KtwDxvUM1i6xwNR735VUJmEtVQM1q1eVOiKJsaQO6DcwFv47rRE%2BwaPEs7ilX7%2BCvSfIKHmxD1fQjmJ4666DB7CmfLG8MxXiA4ckHJezAkt0Di9l0wFfVw7qSSiTXhwMj9ZPMzknkkY4jNiYxQKg4cM%2FPclGm5E4hxHnB6tcUIQaYezd6A2%2BJepMEh%2FAu4dhQL%2Bx%2BwBOV27fADtv%2Bxe3aN43AcvPjUmSGc0Hwr6gOCbUtQ9MnWAM%2FiFD%2B76RXr4eZfnV8e%2FHfN4AH8FAMq6Gl93W3ZEqlX5eXx9YB9ye4NDzuXkq4g3hfKwN6suOqwOMdMcf%2BjXqLaXCXLf206ZvX2aPuJZarOZpxFLzaIaFoKupyAlieS0CRYCZRMmZuiREfK8%2FQTwmXMdC9YFM7tSwta4mvRnWL5CQu17WnLH0O7VUyPEfAHeGrxRtSt5IVzy4k%2B5dEuqpp%2F%2FwT%2FnQxzA1tU9J0k%2BCKEc4iWtbl5pqHMkM53vpP5Y2F7AFoWjB8OVpq%2BG7rXf5HGevTJgixNyLxm0xdEIqs4QBgTOP0jZTXvj%2FhrKUbrwxeIPAPubOFzL7JHyxbFjRpvzR1wP851MYdirgT6i6Nm2Hukna%2FS%2BVbZ4M08kSCC6BfN4m1gUf4igw5PLDyQY6pgHaYEU6%2FZvIu4iVHBCg%2BRcTn2U8NkW8NuXU91F3tQQoyf8Z4xXSbFvcEbujORPJLdf8iJIhzjkC6H7TBTFIbmtNz%2FGj2679EDDgLs25bgRzovh3D8yWIXPKKU3gXHHFYj5qDUIJoILj9Wf6gpBdBPE5dP91BdVECQbiO%2FF7TTdk4vz%2BMQporYKsjivo1rGedbGx%2F8G6NA%2BIAuhcs3M1Zgk91TCpRFy4&X-Amz-Signature=72078f832bedb78dd8c3a3854b99b859d39518b4dee7eec0ce0c99c8009362b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

