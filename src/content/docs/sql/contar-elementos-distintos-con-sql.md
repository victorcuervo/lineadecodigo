---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IN5J3PB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEYEltQ7h22EMPEcbp%2Bnf%2F3rjL1f2799udgcveSuy7P1AiEAxZ2qrYBJP5AgJShu5YaLuRWAJiiipteSOekWxW4iFSUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFLr%2Bw%2BTjjBFIDq7DircAwIqM4YTFqXh2qvQ6j73uj4b%2B3FA1XCCf9Ky0vXQ%2B7wGExE3iXNUWpxAOWIxqIWlGwa5cOyEopJVV4Iil%2F13SbHU5kl2pCY%2FMcf6S0VUvzOle4vpDunxDC4kxnyQeNpFABMRADl78m%2FdH5vqWJfdWkeEAy7Eg%2BWWuwVJ44y7dhBNVLQgGIbhXAqjUCQ%2FhebNxZQUwD09uN7WQWqRKhpmzwhmzjqJj2vVknKyIrg5T5iMuaeFkT9k7eP3j0Nhjb5NeKpftQfqLciuA%2BlDxKddkokC%2FO6jSkXE9Ar3UqODVNhpx13Q5qsNmHIElrK72l%2BsoSCGjn%2FRhere1CpjYE%2BIZGBIUyCub8FXR1EoqItxrWiEVEMsj43hL9%2FaflJ%2BnKmZBW4RN2WeW9M82TDDpLVO2f5ySTWhz3Fy2LKtPxTnafYfHB3kzxuEKlIIfw5kp9peEsYWAcO6I7LDlTy9qbGhsoHe8rrOX3JFIn8wvSjOFEAcaSe%2FOjzrqKvTkg93thrWcCrbHCF1kR%2Bh0jJD%2BrDkOFgnfs0obC6rD0d03ac0H4Q5AKXDTWuv%2BcuLkIq8z9WVF%2BU8I2BO43p%2FdVZS4a7qeYt0AoLPc244RCZEZ1b3LngVME5updMoW1vXd2fEMOXTw8kGOqUBkL9VT2BqJB0UyVLMhSuyo78h2YpBqssceKEpUd4rmHd0IwmMwPWkYLy%2BrjDevpmffjT%2F9hM3KurVxKzRYkb11HfQLUcOQuGVV0tfA9neYRFMqvsqSl1qkjs510fK984Hf6zq8ruHWYswSAq36cftlzfBhMIgjxf%2FGNdfI0JxGF%2F%2FrCj34ZL9NVBvoCjDQBqcPrQu6HZFrtrSIkM2KUl%2Fgr17oed8&X-Amz-Signature=b3a7f7e562d06f01197bd85966dfbb985cebed56bd8085655f15db0bad4cd9af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

