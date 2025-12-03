---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWVPCDBU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEGUqgDpAVh%2FvkAGsVN261F9VQJ2hOVv%2FCmNFP1p9Cn9AiEAk2xBU%2BGCbgEwDs%2Ft8PICdIY5ryQP936EqbrWLBgenpoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBDa1TEBfWqJerfZ2CrcA29XYnrnswQpU5nHtrV6dB%2F2y2B50X7n4ZI0VRDbeLD5kBGEvLo7bUFSaN7Bm1OJys3k17P%2FzjdtVf9IjdHq7O45wYeimSLRiu18a4WFnrzleRXUYvVonpmQVmTZ3cHqNI6IjWW0J4GZgyYFC8ESg4N9x5B6GY6msspWp0QG%2FX6R0l7z82C9QhGyhJAp7d9cLOoNdLkbNZUjfr2P%2FJRcJY1EHTE%2BVjrN3aW6JCX9sRXevio7yiqh21G4aI75q1SSIywSyfn4A%2FQ56hZ29RFSSaX1%2BfWW9g7mmHUJ46jCKiD506mzhBAh0sR1MBEdTJ8z6qAxz14sOZWbKo021XiSqh9PUayPppkDAhhenXwOWfA0Kd15xXIGph%2B6LKXaOqBooI8ELxODsfMUQnZuESUJ476heWPkHDjAWBjHiABOOJlUn%2BOfiUhtfph6Ho%2BeSM4j%2FzWopRlanxa3wriHJ1DtXPwuAUMqSvY3yb6RfZz4GBy2jyUcTog3isKKh5S0WFYvbAwAdQe4BzVW3AC2hpkEwfS3v5wD3uIPwOUY%2F8i2LgZ9Mt7HBj32Pbw2PbDFOd2%2FcnV4g1orqZlIP39C8N4%2FXTpAulPH7nIZ86UKsZUu502Bg5F494admKXARPUMMNSUvskGOqUB0UgM0xvo9LEvvJgkK5WRQ01MXdC1%2FtYYsBZXej3X65Cp3DabaVuKa6%2B7dH9N4hGyk13bna%2Fx%2Fo%2B5ntCTjKLEJig92XMnrqvOviZ9DM6Iar0c2lXZwD63sgh0etFNG%2BDixfhcZDfgg8JkxocN4LCbJ6pOskaghHVJ1mWPXUVf3MXNpSgpxWNIPYCCr%2BfaZtNFhFoweKsT1nqokkm9e9MJFXKvo2Aq&X-Amz-Signature=5c069a42e4a04634907baf47083cf206efcc37c800156c6384d8f146de2f2b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

