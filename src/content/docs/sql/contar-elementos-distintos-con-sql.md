---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N4VY4Y7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDROyV64qAoznrJCbghCJaMiALMzwVORmee2zvEKzsKkgIgRWc9cTnbEpSajoOYGv%2B8c3HpcWhBSjz5d9lwQWu2am0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBsDordJ2OuY90TSFSrcA2hzg89%2B0LDqM%2Bs6mrLyjYcKvB6A2EQKKBHH%2BPPvk%2FOY5ab4tGbNR5hktfn09DIq21qFeXa9PRiNWropU%2FI2b7nTSyMHHiMGhrP8Dv1sZ1QxmSPRZz7U41lUMaFpSN24ku2Sc110L8eSf8sGX8gemHP8Z5QEiRD2Iu4DaSVnfiCIK%2F%2BKY4rdvQCk06zMBxvYfXJPsuDru8CrxSoizmjnkixoBw6QUjGbtlje7ktijOIbi50xGQZRUXakMd0q5HYabBfr%2FNr0Jlp1dSJ6zScRQ8votzmGyECsU1OsjK4WRtg%2BmbSz6MkpQedpSo%2FRGSSkccIzGEeliJt1dWG8MOoZPuDJ3Z2NwJWQUEICyORyLMji3jhQW9hj7aVEsAjPgPUtFhYSpqPEjZPRFJb%2FCVmG6dMP5ov0QvYyfBTCYvwme%2FMCsgFw%2BNfbq2PIYN6RRCwuL6hgK6FcFu8bXAS%2BtD3PTni8zCGrtovA6pIf4Us1eaDvA8nUOjXAUEDH0ArGr9Dvt1MCVuikPPDZ4EjeLsE1rYZ%2Fud6RDKUAXWUUaudlXykRkc5cM9UzedR6%2BXK3AeMarqmgXCBzfE5oua96WNkRUP2MQP7m%2BC8ar10fC6Qa6Ux5O7xf1iNzX4Psj10yMM74wskGOqUB6DEFx9J%2BMMphuJF4y%2B9upMqO%2BrAOKzhyQ4temIKm7N23RU2rCG7yDyha%2B4OKutlN44iPx86ENdM7%2F%2BPklWId5yGqdOsWUh%2BFceUkXBCVDibIzFv2%2FG9cGhLUD%2BeH4Tv5FFV59VWg4CSry7fsgU54WGPsI37lOJFVE64rA0ISkCzAY4j6lBHGJXi%2FsArXllV3bi3R6S2kGlMgQm4PYIcP7k3FMKe8&X-Amz-Signature=760fdb30b380700a2bfee8effd3e3f69c44c90037c06eed0a34db1214526da05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

