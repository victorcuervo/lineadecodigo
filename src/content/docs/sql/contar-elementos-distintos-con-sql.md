---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67MZD6J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIBFVODe5yB%2BJ219EjMO44UldHHi6SVtYKG70s7gui5ROAiEA3dEaEHdGHlGcb720R3oS%2BH1CrnzsQm4wjqhJewkvPj4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHHPgVVPvpBTuXO1zCrcA1uvP3gPGKuk%2FHnhO1FR90JBvaHfDngKFe2FntzjVrOudQ4qk7xqOXkKtB8v2DZEzQ%2Bjyz3Fh3CztYrW0n1F%2FVp0en3XbjFbtLWCZnZYcdIc4MOFt0onmb3doXJwfKkHbcbKp2sQExTuNTlo55BKa9Oy%2FE0QlhAJnxP8aEVWtAuXAvSI6UbvzMu68%2FmWkRprrpdDRUmFgUSXb%2FZDSKpUp2CnDhfWvf6S3XsCE%2BM4RYoOjuyQLVTryYu7%2Fb%2FJXYb5hb977KFb4eaEAmtw9%2Bq0zertNANE8I%2BS%2B3CtHlU7PSOU6T6IS6Z%2FlMUgnMH6%2FlwBTCs9Ej%2FbchEEDoRrsdxwoaHbVFtY%2FJALoqfXc1cAIzvuoQtEPlRIvNFuE6MfJIatkxr9daxdhZ5L3PEPHMpiG7tH%2B5%2BGZwqiwwLrJ%2FiPMsZxE0zhOvZxFh3%2Fd%2B5KVQIP%2Ft81tPQ1cRvId%2Bxy9kD4tFlSVfitRiNBY%2FFXYqFI3cPpmjYaqICxT39QGVqI7C%2FSmzOkXg8pPJoF0sx79Zy7e2aJ11AActNSjI95jUsyX7tTeytRi0o9HQEGVhR4sOOqprxlg%2F1pUdKeCXPFRqQ7S5XUb%2FXDRr0Cn1QAQcfYG86IE8OtgS9ve%2FrzjheHMMe%2FxskGOqUBosrl2aaw%2Ba0JHZiLOWmbNzdI4wAi60iGOKBX1RZyDluaWYm2xMZm8ou3NB0l6jUhcPk2Sv9UbFr%2Fjp97st8O6U8ORdKQCsBbi%2FGTXH5tPKejWN77lzkuzkDqdsNuB8L2RYMXIA7Dmo%2BW22hbwf7TrmS6P5aLnfOm5n61%2FJeYyCoCvCvcWCGatFLE33ayzjimHF%2BSkkwfeiuX9igA9I00DpVAx53Y&X-Amz-Signature=dd7702c481169cc3e5cfcb63ec9e37f7de3351460293d27e28562cc067ad6664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

