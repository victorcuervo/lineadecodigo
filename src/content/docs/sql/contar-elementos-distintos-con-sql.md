---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4DSGPMQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC8D6yEh%2FC1UCAvCABOWeiTskCiMa0H0wWXzM07AV%2BUzQIhAOSOPY0j0XQdN%2Bwscp8sui3z87vBI9JS6mICwXBI9WhhKv8DCEYQABoMNjM3NDIzMTgzODA1IgwBI%2FyhWFwT89lih14q3AMtR7YHOxWdJ31wV9xPy6i7ZnPuIjIAemxyFWf19uzYKt6QIAh2CaPsIh98O8UG1LEQhO9E1cA5lUMTOT41R2vGRkQLoRKPm8SXYSXomu4ptdyWYqx0Lk6BN5greCkTj9Df42zaeLGI%2Fqq44z6DBOGYda761o5iP%2BQ8nPuT%2BPfH0V%2BU68BRhwQMN9YC3ONl2Ifa6OWq7gHWtjujCUarQzwMDA0C%2BuNlDyFZCe8PnwNgnJlTeLGRNWNTnxE8Hj6Umdn7765mTUGe8pqRHug8NXKra6HYtYiH%2B%2Fn8s5JgbaMp7UE4feHSmllsRWMMaEzVbRuopyZf5bfBEMB%2F1bYMdU3nsNzM97W7BEHsoaHvgHx8bL4C05UzuxLtTmo5w1%2BRapOscL8mLULBiqt91xhsmCey0pHx0DRKEds6TOAoJf%2FeeKhikohyKFrBkv%2F5PmrxuZP9KxOYJsZFTTYYb9OBFhPquapLkLv4SYQX9llnWEiTaKWwBhtkHuDE7ghmwzI%2BY9t2S%2FjnB9J2e6Aa6nx4EP4bQ3BvgUnm1KgA8mp9FB3EXMkfEbUCCEayvtEyTl%2BY0%2BNf9guP4Q5c%2BbD%2FS%2F2y4lOz8ctQuwS8I2W4pwpuvcKHIe1QHEZ8KV4Sows5bDCXg8bJBjqkAefXF%2BqAjYNj4UK9L6otXtIVQansI9jOP7IiXmoYzhx8pKU0cBsBz3vHeVg1Ls6GzXU0jZpBXOVUqeO2Vy7xTZB2IH9IlmDzjeFWWy4v1x9ldXMb3hwwJH1K64N%2BIrv3h9Q90uIKRID7zCXHBUeYDBs5dhEE5tWvc1rNApO5eQ9ZJOTGnisz%2BZrwhZ4D3E8C1mOO8XCj9t0ZeE3YT9iYJCkcvZwE&X-Amz-Signature=43005fe54380b8ad2f51ec95be1272c2f5e3cddf545502d4e86386d532562af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

