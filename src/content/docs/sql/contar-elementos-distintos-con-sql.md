---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOCMTMT7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDr2YUq%2FcgMSVkxwwRjLD1wJjGO4UDL5pIfaNnMJmC2sgIgKBiJ4JAXnuTu8yDuphW7pJLkPMIDtsOiaVCOFIdryB4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDC5ZiZqL5er8UrUCPCrcA4UheWPIubnAcwFXz0k1BYb5qPp%2FcW9%2FtOXTmDLz4sSMkXULoXkqNyyACOiQ89A3L2LQH6dFgoQEQtwBbnsOR4pwpUZ3QJx3%2Fk4wEqaC8%2BJuN7UGsb54jmorYvuVydd7PP75fZzQK4YmWSpivJ%2FpLDdtPTfsuRp0Uzyul873LDjx82SxB2dOBkwaKpaMSWQeQJQvL2uhI9SdO5fhaS6IsUL3wRh1lv1tpj0fvS%2Fiiy4Ma6fFHbLq2zp1TwUHuPcuxeiElPSrRNgxuc1kB%2BtsT5MaqMEotwbYnzH0CNZF%2BXH2BXZ%2F%2Bla%2Bvj1ITyUT9ZkrLT%2BkjIcgPKkoSlCuLMZF%2BTxh%2BrMhwPfgs7R%2B7M7hWwFvSQuxjHwrQBg4SYT%2BXe3hj3zSxdFwZ3k4XvcqrlkGoGAcl4MmwR5LId9LyqPYU3TXX%2FscWkl3JMxDg91wuwUzNF6w%2BU8nxtGWXRZkLH11CamyDiYaMGkEVOirx5bBOPTMGtGbZrAgepzdELiWCIApWfxSmB6dKomOCNi%2Brss2VW9lg9Oms9791aJ7%2FtSqGSM3RjzHpz9iFK2evOVWg7orz2g%2BaahJ7nv7Axba642ZredWNGT3uouAC4lz5Of9BHg5fk48avtfwJJ%2FnbIgMN2%2BxskGOqUBkrP%2FvK1Y4e4G3Ab%2BTB6xcMiJnlV1yznD33CtK8PVyWye4Rd82JOizp%2FzFBtBQZBIZj2WJgCSwchfQvD8sZmyjelMuwhuZw0HjWRFAWSlkzW4hb4FXs%2FxXNpZDMPsvC76%2B710df%2B8oCthayp6s6Pm7d3MDp1SxHCQh1AVWXhhie1%2BHrNe4z13U3OX0e7gyoC5TwOlxJMOLesmmmSwo2zgjQ3vpaXe&X-Amz-Signature=e71e8a798d0ac27c0eca6be7a5ca330f28461b32c349e3cead2d2ca3cbce2132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

