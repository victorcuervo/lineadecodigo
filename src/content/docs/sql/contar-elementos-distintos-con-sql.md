---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRIDBBL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCbahaXlFounKSdgl3QdWo0LTH7My%2BJCdLRQDM13IDbBwIgRx4nZRSzCU3xX1pQB1ac8zj2CymK83k2yf0533drnFEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGKbMjS4dZZsTWtYYSrcA%2BD9Q7gW5NWJYJdVPuYMD3hpT2vfkpL674ST8vHIZL1rayVijZufOnVE7yvejtCytocolu72r8jEuulXC9Q5eD81lMDD9yMW5ZGMjis9RBnz4jz32GXC58%2FQ%2FUReg%2Bq7zzjWQ75Y%2BVK%2F4e9VgXvvc8bNAatiW8Sr%2BNPrCXV%2FWhOBZ8mAidbVIgGVw1na4y7voOTamTDQfPt8QZ6PlVYADnQcJoQYZTsgFfosCONxale%2FCFeU%2FrS%2FryMAGsJE6AO5ck9QW1qRj8YzvnqgDsHSEcPbR0G574020b0kxbkiByGFpCs3wE%2FNcZfqdHZKGrzJb6TdY5UzgQVQ%2F45OEXef98tmjfe3mtYPvtnSu6pCz9tvFHGfiweDokdxBAxqQL3Of6RZsDLJ1wdByX%2FQfwNHoYoDbhZpn%2Ffxlk9prSS8vdE0JuXx5tkU8pKFIrXFqTl1ihqNoS%2FKODYMF6Hl3Ubjk96vsy8j0ZAwvz6yEg4gvLBKsoCUld8kWrrNMNjaNtTnn%2BYzKtrhQESwL94W%2BqS9MLH82zG%2B8RJC9hIwI6JBItgVXSr4BNymz%2FrRPQUNIvxMXOK7pHvIQIYflKbdWRZbmmHvG50lP2QN8PGXtS36Ahizk9%2FBm9oywAueXc88MLG1w8kGOqUBOWQK43yG181JPoNuoQoSClJ0EQ6XP%2Bm90G33cqs%2F%2Fq4vmBdM1ixkwjvF%2FaaBm75bBVsfJ868SVAqGQt%2FnxDPOFoHvVLHSVmhxYQm0A4ogvp3rd9wUlnsBSuEIsaKE5IVkK5m4qJLaWNquIKTTq8AZdEQIBr0XrSI0A0xICTCvskNjyslhikrXV4khPEtal2J3aEmccgYn4IvRIcImEMOqrf4a8Mp&X-Amz-Signature=2007422d633e2a4db379c95bad56becc831af89e6b69c20e5febe4ef734af711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

