---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2UZDFH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBHrsU7jXkbo8cUj%2Fl9VAfzyJuq7wjtFicd2%2BtqrD2SCAiEAiIjeBcBrXsXEHJe8AeG%2BoNMjG22%2FCv%2FHaebS9s9FAmkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFHfn3hh6hLeMbpZeCrcA69okFyLdPa7ajNjfHpqGC05H637SOy116OKh3mwk%2FjWT%2BlDydR%2FFALKawk54QkanUt2M731HCf%2F15VZoaPNXm%2FW0K9Sv7mqq6H6xU4LK%2FU69DTR6CU0j2VY2MLu9%2F4kyD4JZyk6WK4PV9QwrwW0GNviUgquFdtLUn%2BpKDJ15thbrMbyXHHi9EcXbwToqFhA34aP0n%2F4IhfE%2FZ6ZHycjUze20PXUGK4%2FDDzkxm4wJtOcV42jIjL2W8zIY5XPkTM3YUBgL2bDHCl3s1yZEfGWglaUXhXHVo4wY8klhbW6fNgOM%2B%2FM%2F%2Br0r7HNQi3VGZkYgTHlMOSt%2Fjolw04kCwGMmi0L%2FydQySyQq3dBmD2Vag724OPREp3KESxShSA7jW5qsPAqQp8U7wU3kFHkCpGTBVjpNtNERiSGih2vJ2aa8XwMFPlzhRo6JMMW5Nl46yxmZ0LGnZ0raiw29yEqgFvl0%2FEREcQX6LO4nfFDAkYq3c6Ke7JqHNz5YMsr%2BzqiHaikm%2FnjdAqQ4NIfY%2BXzJvFXCxVF0fc7OQG9FxPOP2INVkZ7G2rYcaIuzWuf9mojLT0iHwE5Vf60xgQunKKh0D8ywMBzOw5UvcbJ1yVndJ6kMHAF%2FJfU97nTjWQgWCtsMIjdwskGOqUB8ZgQNzl9njEborN0%2F7dVtyU%2BGscI75JzjDsIC5%2FdF9uX3Fivh5DXq0hLA4HNRqh%2BIMpzPz3t%2B%2Bh%2B%2BVYNYrHYfjNv7v33srM8TC6RdRqVHEk%2F7emSEa8EEwBtir60XqoIOswI%2B2FuybB%2Fwlkq%2BdPVSx6M1MkerV79o62WDlsJZR7aBLjLsd2fmBAsVV2tijNsdIaI4xa1RVZatxlFWLWRBM9sZH4D&X-Amz-Signature=77d004adbb2806b123e26cae21c9e6e1b37d849d2f20de73804e5651393398cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

