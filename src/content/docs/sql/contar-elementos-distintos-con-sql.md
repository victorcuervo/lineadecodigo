---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7FLFRP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeNBXr5PAuCLHQvBRE4WJ5ND3dIGRFAoynnCGnB67hNAiEA9BBGbN%2FDtgshJMER2ixtuxTjkjh5PKrwQqvvOoc81Mwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIjd18vEFVhTgCtFMyrcA%2BRn2BBgr9aksl7631iKn4tLKfo%2F3Vb5faF93YIkAIYcAxVErxyaiUz1l8y8IBfk%2BLSWciBQxFTiywkRW5QcJLMuaGAI5fPj7JCPpuhzXL4ZOIEH5%2Fasw%2B2DKh6hB57hJuJ%2Bo2OVLzQ6sW3TO2%2FCmAcO2A9Xl9yHbeecYdUQ9iPVyna52QTHaP0gXLWKt3wwnYWA1bm2pl0mlUXxDSpRQq9H00lXP6z4162lQbMJUt4qlpl2IHAxNSwipv6SMf%2F0oC35OZ8PscSkQFOmeLhEI2Dft%2B%2FU4nWubf5B6W5yTUT0h33%2FO%2BO9s4%2BS0WhRZlGR2MnCNMReZsUyiGymtYoNDdAb5QQ8Uk0ZPfKpWs0%2Bar8dVnaT7Yfgj6w2v%2FF73n91L0UJLyLjpXBs59i3a%2BRuZiOUW2r9ds0KfOszUItYmC6bMQyIATf44IqZiTRpHK8VoOQA0bPXSSwGsyAcU%2B62XUkDiXUr%2FgAM1Ule0Y1En%2B9hueu%2F9XnG9DHnCefxcYNPPS7SKz8tbDFgc3XhNVJdg%2BRaJh13InjrJO7FN0o2Tg03vuNeJg0Y8nXh5mvGJrYcx%2B%2B4ZGk5xzgEjR6YUwdBnTGrRW1yOUHwDaGKY3C1ExcnrBK9WviUqfHMSjmQMNXbxskGOqUBhrNqgNlL23u6PmdTE55NUMcHcSet3tPLyfTIWvxoNbAT3HII0D55SB%2B5D62WUzUABU2nPVbSWt31r9Bx0ghs6GwZA4t1KBA1K4BKCJ9Z2gGZ%2BiWcIYMyC1M3P%2FK4hqStQjWuMl8LFCL8Z7RJeL2V4aGF3H1do0g1WL5CUPTen1yRvCEM2EVjoi5Z%2BNF8KbESWNFDrdgFfLXZcxXKwxAD72yYaj6y&X-Amz-Signature=de48d96205c83a77911fe4a3a7ef744564613fcb57b28b91ad521ca87a6f1742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

