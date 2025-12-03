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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIT7H6BQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFPVQLyKB3MNz2WoWdsEosV%2FInF2%2BeGi9DMdd8rywNWVAiEAvHPbVoR%2FmSI3JMbUZFjFBUcjq7gspE%2BsHuuJ%2BDLqu1Eq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOcnIurtapsb%2FBlvECrcA%2BKySBAy6cf5AEMNWRY3NIgNDeFCUA82PrSLB8h72BsbWN%2F5%2BQWttDyk%2B2GT%2FCf40aIV5VpmA4lhYVCSZ3Xc%2FcPYKWLuA53TxDE9oP9WDcWeYzo9W1Y0U3OkIRi8ViPizawRTI5siDW7NImS8XFSbCPd%2BPe3zMVS7GBKjZHFeu%2F0OwSGM0J3STxEE6X5EksWPGpg8lGdMJ2%2B1YTl7k9JfT2NCVmuN9rhc%2B8PvdJ26siFG9Q7FPeg851MvT6SGgZan3mglX27XMfSgi%2Fztz0e8IPMFKlHPxyKbX1xB271RiR5io3YADTQOPLV8mKTnGJQcgSkmKKmR1sesjjufkZsKS3rB66sjsAZyw7rat8FRKdlWp7o5MsRDGnIkS%2F60QyamPjeZT2ZoYPs8fHGS2FBcHcYfRRiW2TTP%2B0xx2fFxIbLXIhQ9f0r0m%2BjylFvoKE2jqtQXmnA%2Bb4AfZyOVas%2FN3kaZbwIcqKXxNMLivap0go8iHLYR1apZOiJe7%2BqnIfnkVk3x2ViwZwGpkQpAwBrw%2FEFZG7gWLGyFhxWm8tvvtNOYV1wxEHgw4e5sbY6IwlhhmeFKJr5D8jyWAU4f8UbytUq8YfIU3TKBb3RCSfmoCMnUx4npTBbJJUPrhjIMNmVvskGOqUBhVC%2FVqglGfqnKngg1fmVNN3CdD7rRehzeu7THH7SKpfVEK8iHmf%2BJPAJv%2BEIrbyQgRdrAvBakyfVRoRawcArUUMwFijnBrS4Pi1CbsQ2eTqiCmTSxI4DSIXKtr19FR%2FEd6saK4QibKjXW7Pqy7lmXUeF%2FVRrkV9jlYy2hYaDzL7wtKz3imk7Us6NAFfgmybHBnwus3I6q102FCMOpTxuo513D9jh&X-Amz-Signature=1cab76b6980f5eb525cbd7a8e0feb992b7b02aec3fb3d349004056d3b87de866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

