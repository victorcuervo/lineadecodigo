---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQTG5YR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDZnVIcuS122nYA%2FLmzXBxFi2t3rwDVkrvoNhHZapKYMQIgVqxAE8J%2F5Z1gnK%2FCJ6D97qlBin0UiA0MiFhJd%2F7fsz4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA53vFlp43b0XOWdmSrcA9Z8QvvbyRKuXfWq6VVVx3DSKn1VRqR76sGYd1O7mmttGgNBiEsXgmyVACXsQT8AAgYPQFO81Yf3QW74Jn%2FDsZc7x%2FdqHZNRukcxg9c6prLxoVTwNyGRNfcHVVO1bHOv2qr13rQeEZKn6qXqnCxAX4tWZ3DyfvlmY%2B9gmiKlqw3%2FMlXQZK9wlwx21UKb35auTVQ1AU60%2FnKcHKNwSCJh%2FYPS5M3fsb%2B8MZRB%2BN3FjEb30%2BtwzN6L9Uzdn5M1PKvcuukXXWzAuRwJcMNCUB0IOPDXxpMQc6twxOJpNX8BuKNuTuqK0zfted3bB%2F%2Fp4AbHeFYrIrvykZJWYqe%2F4C8ZeZT2a5zvhdjQB%2FoerAeTe3sz%2FTl%2Fn9WYsgjzPYQCw0pk3faKPdlxlRlBasiHcLjHyF6S6foI%2FJiEXgfWfMg%2F5SSz3BYjBhD6OxcQzV0ZgeB0HpILxLhQ2gpag57kAhgmqoBkoHKC0zKClM%2FPI1ySRNFBBl8dVDe8by0Act%2BQArZo1sVE8L%2F%2FY3J%2F0nqMAOlN2eFILAuCwS3POXEF9Y0nTkFC%2B5Dhcf4GqhwTDuHhtbC%2FKYMVDKtJLP6KyJ0KVop%2Fl%2BIA3%2BmHpc3g4PTebJn8ie7ZsBdr8IWv0vFcuFZHMJfzw8kGOqUBKQj7RxNv2oIBZUZKd9%2Fq6sK4tVnLz0IawwD6%2BvIZ8s7cBPAXzA4GEmXZQF350%2BjGoFlPXo1itUOMI2FABukovu9AAg2ouQoOAvgHPYlWhTfsa43m3X2X6hMg4hYGoAW22b%2B%2BXhSDnOazOQJl%2Bd%2BE2iFFTW0QYQ6KPEQJ3ZPyv90IAQPrqlJtNtJVMGegUo%2FohH4nAzKg63AUFKL6osTOzi4MvtTe&X-Amz-Signature=94d6a00a746699a310cd4e619eadb6011914bf1c35c625ea451d70d3db2b768c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

