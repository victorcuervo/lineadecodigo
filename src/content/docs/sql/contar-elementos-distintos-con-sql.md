---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBSRIEW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCID75er8yNJc2w10SwqRHafiBQJvJqzUZHXIkGalm4wR%2FAiEA6L%2B1vbH3S9XUJzgXtG2NCgkED%2BOwDVGU5mAoKofGBZ0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPFifQ4GopwDDa%2BqzCrcA7mmB18Bmoe6m5lW5ZczFkqiN6InRhXTV97BlYeyzsDd6x94wzlVvUpIQRU79Uwa12hwclK6HMh0CpDLT65oD3o2VOnOTZO83oI22mEtqZ6RECi6hGotFKxxZ3aJOM4la2ZSVn8UHq7Ez%2BtIciJsOJ%2Fw9%2Fd5kk3hg3DG9KLiAvbaxxYQzrzn9myJCfRq1r0hvmFuEgSfOBi9nAWBqAwyl09Avvfd0PWmEREtjNIseggxXqDPPQFWj8xi26E1vVR7kY7uo6%2BYMmyStmwvKBGjK0x%2BVHp2g%2B8KJJIPYDkRwBvdb%2BajJ0w9oThH27%2Fjq7l7SZLGaqeeqfue0LLeV%2BnUnxtGjBk2R9cldPRkGliAOtNd3afk%2FJGKbvHMX4Xe4JC43wy0akKfB7O7FD%2FxNEWI%2BYk0SGpyf%2B9%2BABPFtt0JO5Pn2RAHMvo71inblkHY5u%2FfLP7TEj97WbR%2BXZ%2B2%2Bp7ewODH3ecbkq9sIdtIfPwhbnlcbE9HoEQ5pxpfaSGrEcI4hF71%2FrGuADc3qb8TsP1D0GYzyQ40y4vMZPXYpC2GT9JtorAILyOUVfrAwJJGUtXuY%2B3KEUozY7ROT1T58n7884GwAyCJrKcCqpXQgNx8yawOTx%2BseX6dFms1MFSGMJPJxckGOqUBN2W%2FsEU76B2re7%2BSaynOIFl2w2Y%2FAGlZiSNL9QoVnmE3DCjGs4R1SIFVrQoLyavd5992w%2BvbwtOxKr77QrxsrAeRDo3tSuh9kVcj78KTv%2Fc0lw3DnVXdNGzUe0Vq88S4%2BCALUD%2BxTH4fjfUwsJ0IsQH9K2Emh6kuv5b%2B5SXinsUqS3fGvKLbDOR3dLJg%2BO1k%2F0NAKqhL2Xu1pP7%2F1hECGBYvJmM%2B&X-Amz-Signature=3fa96ecf6082276d7083469323937e0a8a7953ba149178549b2df27aeca0cde4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

