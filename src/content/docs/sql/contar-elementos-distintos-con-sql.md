---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FOQ2ZP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIE6pJ3MrN9xyr0weoPnPDbPBz1OlxHzMUlE%2BRv1eUPxCAiEA95tuGEOaR84GSN2sYaKilY68p4nWfrsL18HYLd2kqQ8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMsE4FO%2Buxe4IPci3SrcA9KUaRjNtsEcMzm4JbhRCYfO9Hs9WfK7gUynAjKbKds%2Fx8QovUXZL8yFHMRLclB%2FonJpZ0HbO80EDQ%2BdJ0eLF1DqDJdNvD1V32aMdXD1u26zQoDz%2BDbgLHaZqYu9mDTL%2FUwDtaf2sgwroydVNK9YuCgQu03u5mwLUkWxTy0ujpH0UoTF6Rgo08STU1VvoLihX8Z%2FAR0hYSe3H9WTPwy5KFW0MHl9iU%2BkKKEHGtH73rHCv%2B3jnBYr0e%2BMLiKXh86eMudBEN3nYKJVknTf2T55sj2YlLUmOGPk2tPqq8ZKsOsdkhK%2F5DT3MWhx6freR1IJu%2Fcz%2BTib28Gg6e3ViBiu8unPVg9N894enrCJAvwq7Q1urEo7wORcatulnmRupw2I3rCTCPQPc851FZG06jL0sm5xCArnjhqmkmPg7K%2Fm62EnLdg13QBHmArH9lJmzZw5xp%2B7%2FnANeXsfaLLHO0uFqQoASTKRGlAGwVaM%2BGFrKIkpHWkl96fMvfmnEQky5HANHPiYbFM9YiAM3WqjcD2p3Dp5L%2Bcv2uYtqWqwlx0abq1KqftauvEutS8MnOBkuET6mLkt6cmQP3h7TMb7aVm3HfnQFvzJFTPdkfHaKIkN7npflugHQRk6IiZWrXZJMJ2QxMkGOqUBRlI5eS3Wj8KtyH9B0gx7jer%2BsFbhKjT%2F5Xi1m1lRXpeikxLIxO%2BWdwSyOoWqcxG78GdtTYHYkFRKpgI8uyszj%2B91NhBkC99Xw1SSq4veI5p0bt4059M7j4yCYtHd7a0dYV6HQI0XqzS4r1N3JJHU1cQ4jxodv2xZQQAw3CF7q8TQyMaXuDzn8ftDJghWolGdRFdLNKz%2FctRKq1pICQDnFLVPU0jp&X-Amz-Signature=2f1a4a2847bd4e2983f6ebd5cf13b467ed33c63d8282a491f830411bd6d4fea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

