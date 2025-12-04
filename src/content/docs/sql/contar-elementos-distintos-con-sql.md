---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4EOMCWT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqDGoMXlaBgcuyRBqw4TxMJVQfeynRRsXeTVYDxLqwDAiEAoFQlR3l0sHNgzEIWS%2F%2FQrk2bMTbXpH4VKq1yF4zDEq0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGqOH3UI2JU3tcagkCrcAzbpKMqbW4ucJLUPrijGmC0M%2FCX1uY6xXBsYyZt1GyZokifdygrVsM95VNQnalGbzKswQYYQNRpW6Hr%2FMbVRNTpF4tzF89F0tK43453bjqqK%2Bw6tGiebynv87%2FeqooRoXyV%2BSbdvHVmiGzuax4C79T5RO8CyA3pIVBkovrjTXdzm5ets6ymoPVIclcpBb1pbW%2FBxKIIXA6dhdtHfWt%2Fv64I1mM1cW%2Fpxml763Bu%2FyNcCAbB13CPo62NmA89YbKbPklDjtFf098RKZMDUIHKISdG%2FkehZA%2BE10RKrIqpKO75IVlWsOhU2DKN9Vqb1NUCq8%2BNR6JfnYcUoqsHymnhhb%2FcQv8QB10Oej9uk3JbYtRY8vnV8UehaRlL0zMbYLI%2FfyG7HCeiDM6m3klralmuOraWpjWCgN7%2FsUkniuIZFWfrnZ0NhF4t1gMGDcvopo%2FWXNlMX%2BoPtG%2B7ZKbv94xo3moZvnroqkkB5je78Cu2EEO0Pe8M8aCkyYkYcEkuId8mfmLUXPsRh2XAXQYk75Bw2w%2BKsDQ4%2FhmAoMgs7UDlGHOgght7dVIBu73EzzW5HqDGUCndSleM39GWNhFltFJXPXj61vyM6XBQRz7lyN8sge0l%2Fv4wyot11lHLF5%2BUPMM%2FcxskGOqUBtNsHS%2FgGdiIuxHIeXt4Kl8%2FdJHYg0m%2FVHHbc%2BGNGVFmpRM%2BdMg5j9HsBPD%2Bww1iNqckjoCmM%2FexBloOB%2BMTVrpQrB3h1iqZS8gvODYa0q%2BeSHxdXSQP20I9pbKbSltPr%2BDsWm3gWh%2F%2BvwVM8TUJoA9nf2gF1%2FJPEGuZb%2F%2BtwQDx%2ByPoXcFUQmYUqDlE0WGuT6te7a0%2BvYA4zJOfV7ZgaQ3ittnVD&X-Amz-Signature=b24c11ee8f278f83f16e570e61ece2428cdb4e957dbc6980f2c500e047fb888d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

