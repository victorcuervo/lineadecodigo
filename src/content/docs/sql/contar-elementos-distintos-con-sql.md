---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C4H3JY6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHr4KEMsDIyfmJX6BdqtE5cKwPfHnUM%2Bkos3gwapK%2BRQAiAvFIb5qjS%2BozmnGmXK09aSMIhrN0uBKFXdGc2BCoogdSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOxGSDKnsWETLiMF6KtwDU6tDbyySEhzPjjf7tkAnjmMTbiujgcbIELx1lIEF108FmxzQ1Buu9TxJlg7F3CDyexlHvKrKpbo1%2Fp169deUf1OrgSqwDTyBNoTcKbnA1yuX6%2BVa7QwOrBcLU6ZCz80XY14XxzDmplAZkvHrj3Fcjt5kRroV%2FWX0RBIaU7V7NSsC5KeP%2BN4rsUc0rR5Ms%2FTAM1s9WSCwKIgIYfR8dCm0wxnJ%2BN0UtNcalY4ZQ8htc0jRUJuYOxE5MxkS32w9HfZZBif4zYzDnWuxL61jHyrGGU8zLYkl0mSnElIkdTNmiuzD66IEADZTCw7PUDZTtR6ajCezTFO185aJysDcbvZoeiHPxEY%2F65XpFNObwM6sQxgiO2XOjaVQqtkK2V9iDlFn8TuJ5TwBpk5BvC9qOiWdau3PWJnA1fB5zrdmSM%2Bqp%2FbGz0qVCM0NU9%2B1pQgo2opVG8%2BBrRT3QLAKBL0gGioRaX4nS3vvdWI4umvLpRjl3MnqlSts3MOH6eV1ramo5CIbwOVqy8KX4VFP23B%2B8%2FIuKd3QL7WTevlOu8tgpnZ3jTQCMuN0W5eaJDQc4fqXZC25hJsr3U3WOyNSQA4%2FCBJVdAaZGmfyri%2F0eWv9dycElVKvPPdD1Dq64bI0PKIwgOnEyQY6pgEPY5o%2Fg55UDN0SIn4zii8JNXiZA0d0S2w2NsnVbDy9WiJnkgACkVLHlVpNeu4WknmrbS6GmIqUC4YGnCq52CRRbKlAFmc5dX%2B7s6MWWRb2RgoVB3zcAOgWAUY4%2FOsa13dKwztfSOJWKPvyU3g%2BlLuRP6vYmG1TlQ81yqKghQ9SBmKSOcUIw6WnEEa3dmigiOtUe6zPKSs%2Fz%2B%2Fr1tSAn55J09s6e2lV&X-Amz-Signature=2e7f9cc62d88f15470c7837b10901eab4e444cbb869d28b1cdccf831ea3d331a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

