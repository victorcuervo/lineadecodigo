---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZO74T5Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFLqTBSRD1oSVoTR9UOYUC1QuhDxPsK8jEq72the64hcAiEA9W81iOKUo8xZ9pykcTJUIbytulczM%2FmbThcfxr6Hh30q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLdubMz4%2FZiwJ1zpQircA%2B0zSNCQkk3yqxg8l3uKkJxVZnSlTf9%2BLuYdgEdhND7wUIJ49hlmxycdrxgRtKkIIpw%2BkZCI0oD7couZ7Dajie%2FD2T1qrzZkEWeLOC0hyE%2FBPDVk0nAJLoNy8Wp7PM7ycgOexacfFgLHR%2BGhTvr9OgwokT3aVU0xdTAPkrt0E3VduTsOG9lgJuv%2BYNk%2FHyYuIWrZHi6EhaK%2BduXW%2FQ1Z1MYKumQbv5cWSGNEVdGjA7eyb7IKL1mrX39cSwkb9SlQt6iP%2FusY4ZmV99I0SG9xP9KfboW1kv3HUaikwKH9JM6Xd82vnrlbl3C8QDkAPqppEocxCpc54jZZawdf7Yf%2BTmUAm%2B8GPrptRTIHF7ZOq1YSh8vUhdQSG18ZfrnnVAuDAceTx%2FFpwb5vdJfODLbDtlBSU%2FRfzaVW5Gr3J60ymRSDIYlfmNQKPJNP8zHegP4x7x1PqrGqFB9nQAZsUHndbTwUXxr3X46EfiooX98BTUW%2BrI2lIlEGx7lqhv1WVNz4FsvXBqY7xOD5zQbAyfmRL9Y%2BbYNNq884OUG9gC%2FM2qT3m9UMqvPAnbYZPff2q%2FIdYh9JaiMaYb1NUD%2F56bEcrGWODVGwTbuQiBEtl%2BBPDZS0NrflmCo8WbdGsqvxMP2Uw8kGOqUBfISh9uad4EFXYTEFmEoVtHzUgdziH7h8KHFnpXoMPnATeN%2BxmEaRmXpNV0PrQTUsOF9gPmtKOWWn3E%2F0fOrySrAF1%2Fd2ZGDJTA%2BfZ1zaQmP4%2FKYN3GyHcv4dO8XNZncTCLGfhOniMAoao25y%2BW7Bw6sgFVYw7%2BMW6ZWTpLK1TZrmO1XJjkcK2jNpcufw1JhVrJRLTXldwEmxgvH1jyTJs9ZVAmhF&X-Amz-Signature=17af34f967badaf12bdb87a64cfef420c9a7d58a3119de3609bb84b78afdd855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

