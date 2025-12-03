---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHWYQY5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFj0dLfYwM9oeRb%2BhQfbW3LOhdVVDzfaYjrD6kpPhOyxAiASjWj9ienU1tlMmh226SXyW%2BciYQ4g2G%2F5GBwn99NkJir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM6SFnBSTrIOWWwxoJKtwDH%2FP%2F7L%2Bx6orKmZBvcTBtayKg5jH4oaAVUgT%2BhmmNKKyEHkUgE3Yk2%2Fmx9Att2uJZ7lks6tbfe8bCFskfzHt7B8kVpKrDCT6mCbrd4MvpcToRCTJWNfXY4VelQSrWJyVRjkI3Ijy9oS16i4%2F8mxu4lHXSWR9rR6aXpFP%2FBshbE%2FktqMXShEhD%2BTNBftYy6m230GgPsVanjTkeoUK494JrZ%2BfYIlkz96xfNPvKvql3GWNb08AuxF9LPtB8LxMOsJ%2FdLgQKjXoNZTWLtGngC4Spn48C1H7YwLel9B8vs9bAC%2BVkaFScSCMPIh19LKdI7aZnDykFv%2FSeDKrfp7C%2BAhyk19M2QROt%2Bh%2B1CwQDFr32hlzdRERUqbT5LtrQlNFyJwVV%2FlkJBl6OdzKV2g4f%2BgFKZR1VPwTxAGMenPP0mNi4fcfV%2F%2B1lINhMp9EGK6uPVJkmXaEMNg5%2F4YuGnoVwIuuSB%2Bo998Dcvl%2Bhz8S%2FcYPlxOsUWy7bm46e2JTvhQRgmpQXixHgLRWR9YtHOBrZghHE5g4Jc6wMAIH6LvjDDDWR34HwinP55VcC46uKTjxBPhyiLdf2CiUusMcCldDZkXEipFPl%2B0D2kQezZ4fALsGO5U2wkIEM4aLpAf34pBkwmfjCyQY6pgHz2ohKoRihm1mUNp23UD7T5f7atNiLIzcCWJ8OlgD78FCFyzwCSUkzzZnkfzm3lBcOvzwcdJ4ITau6BsS30qF0L1FnfYPN6nAmdADmuTAGO61zi1dL7Zl%2Fy90xtNWrlLTU7DGPZ81vthG579KwqCUXmEZLFc%2FACGyIAI4Safx6gzrzz0tK%2FG%2Fn%2FiOUKHMhs2psbg9PZWZ1XS6ZAp5MJqREoH0qD3I1&X-Amz-Signature=9161a1c517bf3eae38fd374ab36c02af17a1baadf49e8d314eb5ba2bdfb6cd2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

