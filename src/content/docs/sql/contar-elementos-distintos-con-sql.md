---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDG6625L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDUCiboyVOagxho%2BrgCKQsGSbM2qqvCZUFa6A6hqFevPQIhAKfn3PAKVPghJyPaF2IRLjQFGKFdZwjDgFxR6tSxal07Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwHsLDqnIzJFhhKHY4q3AMjzrV8r5lQd8v3RxNGJqK5egyGO5fEgz9Wv2g%2FeUUt7UaazZVUCy%2BmHHTuF9qoYTNyFhY10aazIKtvpW80WEeQHkxjk%2BPsfkA6tbV%2Bnn7wHUpOQd%2FBRN0FOU4ESO6s86Bn8%2BrRmQnX%2F1PxKqtAhYODe1SHC9CP%2FqzZjQjS1%2FFpzE5yx0oTCxSTPjcqof321iM2uvquWNVBR8IcoMnp1srqBH2maXwb4lVs5N8GoZzb5ZwZBKlHxNUIISEOOEAavgRgW7Jv1Aebtr8Z9e1JBaz%2BoT47kBg0XjtCMPV30OOrfftNRJI69CeZ5FbTGyJ2eCCz%2BnqpQ6pfc0L2%2Bz5y39jrXmneo3L3YrXqJl0GkYrxtsOXvYRV%2FUnW7rZIWsCjIgXvDeLamVlspMcrSddhP%2BSUhW%2BRRrlgR99h%2BWChcx%2B5GSwbfaiXrkw6iN1lnH8zqVaVstbbWMCRDq%2FbYag4h%2Fy01MXlL6mJuazGcLgJoJeCcDQcHayk9HSoTuV2Quq4avmLzABzwWGJTCZmj%2Bpoi5a1akt9FUutPV%2BYkUAOh6AzaFYa%2BNAhtlBtHnjkEDsoa4YSmHOfxw5WPL6vpZMthYC%2BIim%2BapIz9Axy6ouiKjtgFNX7AUcLnhe%2FPp%2BFvjCxlcPJBjqkAempcZMN7T7fayYpEzDErTx8cPQED2F2gsnuR2Gl4yOKroK9h1%2BxQTzzzALSem800kiF8WlEQSxxxjpxo5litVVIcihaTx0zMHIaPOFza%2BHcImy1Vk1Zjw8AYkNp%2FRtpdh%2F0wxAXJc3xn%2Bd4cAaXNm545dntk1qFGHMX3jxHO2tXE0RF5eydRgLp1R1isJeAYFC3fjlX%2F502uheKPCvEBjL6s%2F%2Bx&X-Amz-Signature=24c38d34fbff3ebb8b752d4f80e68c8894d0a0d28dd3345a5be1f5189cc53db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

