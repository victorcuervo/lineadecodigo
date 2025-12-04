---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK6NC4SK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBknWoBe0fseXE9jaWfuSZ1C7r5Qf88%2FcgD0j7IKu8H2AiEAgBzrQiayV4J8M3Pl0JGyRtnOI1BK%2FckYcwmLZcedD8kq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFgVKb4XjGNEzgLdZircA58TLOINGOWPD9LenPh1vi7y4Coq1mNUqRoU55iYDi8FBuFOJXX%2BBEjq7Bn2xc5ED%2FtOXcVYYiEA7QUdbcXmXXV7tos7ImeWAHhFQKoQDCadP2C7%2BbGzz3M9ly2thFp6VLA1YAuy%2BjwJiEv8uvAe3Nr2YrqlK73QyyqARLgtTTp%2BEPoCJTrV65P2SmUHngjKpBGCteMekIbO2ABFL4B4zO%2FhfE35%2BePjEu8ISWtcNUuCX1XIiFzNa%2FlPtLIK%2FNeUZxiP9gDEIIgYM7FiEQdLywunBqxoya8ii8NAUXyv8PpAYlmSZt0tM5XpehBu3oaZBUzrCEFuUCqCzyxuKDubfUDYd8KiLC3Kytx05E3cF%2BtEp4KAF1QAl6lGs%2BqG%2BBpQW9yee8bReopn1vHEQfqGOqkWJib3bbTnTPdkwkr6rFe6IuL%2BpFB9%2BdSmh1Gy8v5LdyeQ06bERJS0OtbOZgw0Y%2FClqH1mc4sSiEpItKducpsenPeYWStNRW7Bh5B%2BNpyVv8fOqCfnBiKFewVNs%2FdeMvkwy7r4QmZz5YpjZBdQMJMCzJVK%2BDbH13%2BxZ1ArtZL%2FyRlbZsbBNm3SC5v6N43zDOwqRFPqYJdp62zkkmJKHV590CBYSRrZ9GQ4cgHXMPGFxckGOqUBJrSvzQxGXqr2zpW3L3P3JIjWB0V0gfW4Knk3QlWxI2OLaNGWmKUfk%2FofRkqsEha7gzEpJsUj%2BTyWGCaEB0u6RypyhzYOG1%2BiLK5IYcjavZ9pqpz1kACGVXGvimoIWgAYnYil39cyywFbuIt9OasMd5PlP4%2BGLECJOPnxnx4IqJoZbk5AI37rElFbDswDRY4QhQlS19cFPH9B2ctAZbRVu3NTGnM1&X-Amz-Signature=e7411d4115429f51888813757be753a790362821cb4ac9c389ffe0d0c24bb30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

