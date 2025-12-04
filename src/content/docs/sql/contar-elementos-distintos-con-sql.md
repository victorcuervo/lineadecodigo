---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5LGGB7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCgluIquwfmBSFExQcznXL2iRJe%2BIgzTwr8eF%2FK7Pud6QIgFP7dTwdPppCQpOGypQhKQcfAcvbSHvk4E0wSg3Nu6R4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPuizc%2FCci6sJ0mZ1CrcAxpjewcbkCTWFrPVgITtvJb9%2Fp7u65fTzNLGyQqchAGAf7ue7j0959oO5uQon2XlnHRcMqa4cYyXBs%2BwluMOhNo7tYu%2BAEA%2FgvUT%2FyGpLMBq4Fe8h%2FLCk0x9fRype1%2B2LZy%2B%2FC1D0fXzYHmODhvlLT95DocBAodFmifXoih1GMKesJDp%2BYCnbc3T8kUL6kT31Ph0tB0o4kUMgjfkvHxBBmnRTUyAG4H0AO5zBWHqdi4ar56gj6YhQ7SqYLIm2Q8Vz1r5qEZma8ax3N8yqVTC1jv1RuiV8a9cy0flEAoMctybcBsu8n9OSYkrxV8cEm0iNuUhlHWEGVfDW3d6UuujiuLQwItu7P%2FL8wt53b2OQYsJGiwJWc2Coj3YuUp8SvMFHymL4MJbP6FGjMBLMadsJCbxg8uvSSGxq%2F7oR3mXf72KozQSkA9leo0znc7ZzdwC2TF6WUmY47U7pqcO5SqAV5m%2BPtNHcUltOoIq9KYwbaKJKZJwOMFH997CA9h3rEk1XK%2BHqX8cTFLGTLvnHJvmpXON93QdZS9gwfCoE3xbv5C6gncecv%2FArCC2sq335G%2FvYaRtM%2B5Tq%2BCnUZteg8928tLat4ewtlfiEnLoYYDigC2XieTdJwBEpYvpp2ZdMOjoxMkGOqUBatnW0cZA%2F6oLunaidBH8vkmQQ8hi99IvZwwOTS9R2XG7uN7N9k7RhXybblQuOfaxbk9JfszhByeqE151n%2FyuXHyQSIRFNMBfpd5t2BNK0p%2Bj5Jf51E2Q4RavtsBNgUIpy9snUEs36kdnsR29ZrBtQD3%2BaedYo9cKnl2X7Lv5J8f7C6hurpqJS7LCGGDwyxBOeCPn7YNVgcPQbMS1d%2Fu%2FS5iN0J3X&X-Amz-Signature=7a7ba4dedfbd430566591390b5dbde11bb38765bce33103c496d64dc04d1a68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

