---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDQFKHIO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBfpJwD5pin%2BywhkSIDhc70PSGkJYaO3J6kKx8LluRFYAiEA054J%2BseTnn1%2B7ng2IfhH%2FqQYX5QK4dU3UKN9cnhUvooq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEj0gmB%2F6YHvwzDyICrcA0HbgCjCSBws8yHDomkHcNm8XYbJgUAVAYu6fseFD7aN50TBiw8yLYH9KPu%2BjhGY3%2Fp%2BxAinKkONf6VrgNU%2FOuaL5gn2OD2BB2MkUE9xGmropJIKja8s%2FeBhm1lxe4jGc9Kj%2B46FqImWcT0yyimc%2FeA32mVXKocE9HAtAXijlePvfHnc3cTNU%2FDLCNyiLeGOLwxXkSy4MImJvqkfQUmjDRLROt8jpWCyIfrzZS%2FOev8DRDWqetC18a2qIHUWhfmpBDjifMnHC8tpniL0G6nkWSml8mrSpBN9W%2Fvhdu2TT6h01Cbqg%2FoDav%2FEomsK5D4VVMJDiq5pUnpTYveKOeulMIC%2F1AFG2Ss9xB4pXb6sKn5nNACWAtQuw2J26zabCYg3MtkqfeTmLia2Yp1GXPT57cMQ6%2FaTF0NoPRx0L79s9c%2BPNAx%2BlElEOEa36iu%2FYlJ44f2n7PzqWIRctH01LSv4raUX18tCSIh2LV9KHR8wJEvX2vx4oLO6MEzcPf%2B%2F1wDvXF5EN6vl6ikRenNCWjbWqnlvtYabWheMgUWXtWGQrqGt0%2BdlwfYF%2Bbs0dkZt7WgnbIBiV0v0mj%2BiQV2A7YE%2FO%2Fgj9FiJsUHahlBOtgkrKJRhuw63kShhfWxjiK9pMOKDxskGOqUB7O%2B4lK%2BCBkartDhVkRgL78%2FAYHrymniTwU%2BstlPxgXzLJCb%2BIbq%2B7JfG4twndEVACOvpLbunDucHI2afKUKcUMo4KUMfoXdg9D1qk7N%2FmCNsqKr61yIfvrwXZrshq%2FsWhkCuhIgKYSK%2FVKNHphbNAzsZgPu5h5q1RfWE5P88wDHiX9lmBhBHMxKvCf8Y9uMObdAppiiIe2B8cLA4E5WC4VwTKzWH&X-Amz-Signature=0a2f16e067991139fc9a807f1cef170f4b506d7aa216cab2500b22eebb6bc526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

