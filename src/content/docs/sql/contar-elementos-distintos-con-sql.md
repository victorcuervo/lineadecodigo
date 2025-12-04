---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJUO675%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEtjLmb5XaZpU1WQz6ldWOl3sOUxm0xXGmL6FQeSSUZVAiAygHBV8sODXQpUaxa7%2BdKgVD2HcQuM8vJc%2BPgTul9aHir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMQQiYfqYGNelILsBsKtwDDMDxTm56Y7m7OvNPUiIjfrGV%2Fxjns84o21wa6l0PgyICyIttRgzHe1VfhhyCD6Gd1iJ%2BYScxNM5w6H%2B7w3mufsAW%2F4%2BBQACD9MQTurDMfz5ywehSv7HLVS1uiXmjDcuK18vQOQv%2Fd%2Bat4EDUz%2BeV4A2nTnfITaTRYR6gYQOceMMqoiW0%2BrfV6rz9rAGdeScbJHgu6DwO3Dx1MxuofXCm4nGM3FnVSeCaEWdKEYCU9Kae0%2BYpNEQj6LPdre04cArdCtJVSP5pRvbRXMP2RPQjQ3%2BBkXCwTHSobhcnNAQjsEDiaraXKlhnrjJHDdujsvYQGMnYwDAJWeuNoYVAplmSXwqTj5a3Mr%2BwIr5nwrCOF8OYizqcR82olV2lmjiniN8utzkI4fyOvVDpPqKDrH002DGSK1tCXLgtA0SXpc%2B75x7ykJYle7Og0kGZvelsgntZ72maN9yz9lPKPDFnVCgOSdJxu%2FJpYgaQN6O2T38ljcWbZAVD440EcB70P0xx3xWJt4wnq5FmUeEuy%2FJfo3%2BJTDJVUtP2%2BcQZCrLJOtg3u2HPJkT7jMQPv%2Fjpg2y1E0z%2F6CWuZNZ5qOYcXm18d65DLjE2EmeWs4kY1ETLrKgzAB01RDjB5%2BYaKdQbYA0wtvLDyQY6pgFHqSR5r5Lw28ZIJTGrfq3TDETDL%2BkcJ136iE8F3srTYTPGUWZpWr3uzjavENEOkiJv1myCYhUMCX24MSIIEIlbPpKuoDiKGamrhQ%2B5mBcwm97iTwaT2ylqDD64iPvkZelk7RsjtZIrB9xUuaK1lLE79awvegUa4jbqFbOGhT%2FSh2q4T15zhi%2Fi%2BHbib%2B2E9xnDMZnuW32VaLsbtYC0ET5bjY2Qq3aL&X-Amz-Signature=347853baa3e2529bb3723f74398e91640635c8b09ca921401fe0cfd924980619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

