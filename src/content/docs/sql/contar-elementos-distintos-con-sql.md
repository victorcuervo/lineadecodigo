---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHLA2IJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGC2JFJqazr3j0Q2NmSKmNKU9r3O%2F4%2BZSOYkF0LZURsPAiEArydHZ73KO0Ru2Gdofmh8pMTbD0lWW9RkMnQ7zT%2B0TA8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCLhobRz%2FiN%2F%2FcE5QCrcAw9zuE2mbzSNsJHyKFDpJb8X%2BSm1u0Dy1qon69AIliBmWld7iqranBbBKsu90fp%2FXQixDaAmRARIY%2BhMpvPKOktgoX2BmEU%2BlIM4CzLZ5tHbL6DeFIqiZJlNDml4BCCWpS4gpg53xxlAyglrzDmOxwOk7uy2ohfJxLUlF7f%2BKAgG5A4%2BCUtHwg5o1%2F2iYxiaS0u6nt0BP3w0BjSR8Lnow3D1uv5d7dniYUpzLkaFOKP4iIbKcESfl%2BROrvjfhPc2DJQGDB%2B4lha1Yj3KsjsFCwrQKj9PdVGE98eUe6RjhwXRXNTEBj4xaAU00qn%2B5MbgjA7bowKzVNo9x%2FZLJuuILju6%2BJlkHq6FhkOJSFOdfj%2FbuhQbs0d241tA7jgaw5dDht6jGxbCqmJ6hOxnsRpz%2FMjhC1pPy3K5openEFCYk2knQseOPbKWK84hrD5hOM1sUmicio26JKYCMXC5FwhB8%2BMP58vCdR4ezF3bJI5scDHkpzQwN%2FlhPl1Z820vgK6s3enXZdcqwtgxxeK7kPCkXZsXNqWUrYwxG6HqO1OXPHqcGF3VzhcHxjy8CL9co%2B0UreFOaLfYH2QOvisZqc2Po%2FnS6RXKRGkiAx8djtWriCC44EWt5ZFTKMH17bK6MNTbxskGOqUBG24ndrClvuU%2Blsm4GjSN62ERJ2IogJ3f8YZACtIjN0Ycw%2Fotk7B7pO%2Fl%2B7tWGvgQjFt%2BNNWxS4Pb1VK8DKo8DGq1ijT0MOS3aG6O73ksDBuisMguskwZtV%2FZaNDcBf5kok%2FutgBjI7lQtQLsEsvY9sfaB%2FxeT9SiDIofx09Rgaz%2Bd4O7X%2BqA%2F1tbwv8ljtEllmqM%2Bgzf4H78uUlxbthdkRze42bg&X-Amz-Signature=ebf68de417832b4b7639704fbe00194f1e8d17c1e4ac0644b405ab83bf005f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

