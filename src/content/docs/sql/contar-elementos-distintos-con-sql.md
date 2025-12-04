---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PYRJNJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDth3pGwZjyEzCl8vxjr44JDnxPqjoSzLkfguLka41TCQIgW8KtZcyMx%2FGuE7kSdPsmEhF9xloiwFZ1a42EoeevP70q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBqwwWUxXdtj69MD4SrcA%2FwML9ohVitqXj0WKbggzkZdTyfMxWfzXsEoPKYbt%2F%2F%2F2MylLE44VwoQt821roQu5Ln2i0%2FXNtvRiuGOKGClzwXzHptSlOt0L72BCvlelHw3SNQT3zaXfq%2BRMQptvdDXaWqdegGZfJO3pTGYfRbt0O1WKGAVdQjmTdVNtDAqmJPp7yVVi%2BNTulJNsZ%2FdQNjVaxUp7fZuLnxGbuBwqFAIvg4xG1svN4xOi4gbp84knpopBWu2ODw9g1qighQXavIi4pgyoMrc%2BIDquu3nThLJXDEr5kXy9Ke6n%2BoWWFcnRfEujIl3XYCSemy%2FSrPKeC70wzH3LxHA9JEJ1rpL0GGhUdrvFiv68Fn2wWsoUVVOYhimXcc7HYg0lVlRiqiNlNggqs3Yms8UN4ZdB41M5ScWUOwl%2BGhuGNaZk9GNP6u1BeWA65I2RlIPq15QAVS5RKO9ckFAzq9g7PolIKwt1sLtjoi16rJTeHaNOF%2F2kl8KbaxbWcBIdbzmvpy0qnID89HtqqMD5dPlppOA%2FCc%2B3h5sde1wTVb%2FsQS2M4Pr5FPMhUlzRxO81mwBSBlVlOUim956jiwtELCYfCYEtH%2FZw84vV2hw5PjDXnA170fcwGUHiYmbUzVjyXimaLVjBCPVMMG1w8kGOqUB8iB9hBN4ucTli6nKa4b%2Boe5bXlAgRZt70Fj6LHl8FWzSz6gNfZxSYvFNzgF7h0Xe84tt0oQTUNiT9nlZEQyRx76uLW6pLfS1f4KA1s9K6zQxLI0V6NNow5WNHaudJvvOvogboi6jcPkykcpA2SBX6pAS%2FYgQozLIMQLB7zN976XIw2e2LiJxNCRjowex33zhA08f2VE2HkUNK0K3YspBfp3Naz0v&X-Amz-Signature=39035ddcc14d6d0f42c067d440b21d651a5dbbdec645306a6c57c96a2a7ffa70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

