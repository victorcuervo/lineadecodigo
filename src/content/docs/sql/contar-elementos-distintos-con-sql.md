---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJ5GZXT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEWvHSNrkW5r4wrxhFuKeLgBQl2%2FDV8cAS803U%2F6VS2CAiEAzgvp2qDDfwBVBeFbMcYE8pmnJzKNwE4qlRLBMotwL6Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDG9%2B0RrrpdMQEF6HMCrcA%2BusAK8ONyn491SWdPura4WoAehs8zeZO9FDKlxmG0hbAp6L20cv2Iix11lWcISyNFGOp%2Bni6ZbzqvP50mTi1J1dUQGSGldDYKCUU%2B2AdkQBKcG%2Fj5KvAFoMIAoMK5JeE2Qn8xKoZpT%2Bomzdc7z4FJCh%2FAFYAE74HRNQJXofRuviHhfW74T86mjXNCj3J38QVAWf6Cy%2Fqv1pE%2BiJpFQK%2B1XokdkV6NrKFBmebo5w59FCHltbFcPwo5pmzuFBdz54b89VQ6sdaka1VQl4Dd%2Fc%2FqX4mYVv5nw23Evlx0B%2F8Nh%2FitImPh5NHlC4rZ0%2FE2OryWpHT9sbOQMUfIK8%2BA05X4KG6oI1AFVb5JO%2BDkDsDPM43REM%2BeSJKhCcsLvKHbdxFwfkYP3loyyco2dlU1RxZufoCQPAFh0L2RHYOvEOvMP382Enyo7YE1YrJPY7%2F6%2FSTPSxm6rG1IzniW3JM2qAL3oL4xcLf1PYXlen%2FFejEMJrtf8yn7a%2By%2FJfZAyYEzDM23AUbgMD0JApl4rOUnJRq68aGDfajvaGI6qzdkJNf0BJ9WURe%2FpGkagbVM1386gvuoDS6DViEifNGrRL33%2BhFsHytqiCM55oZraOWLZRz3GCHM1PFX%2B57Un1AwezMP6FxckGOqUBDTawxWuoVL48%2FOHxH%2B%2FJtd9H1w%2BjNLeMIdJOY1tV86bMtk6LIfKcjFCpSXP3YofvpQlLZPFaCMoocJ%2Bpg8C48Swn9f7KpzqwEbH9gPYE%2BqR5lC27u7X7JiiNArItVnP%2F8hjmI5lfGC6AadS%2BBokiMq7OfsIYMKkppT9Pe%2BrjpewIp0gXnlajSH5pyx8Gyi0tfZ2C6%2F6XnspIpfdvvQQXdgHisTyj&X-Amz-Signature=dc26fa93b0431f586931707b40b56e5f0cc2bd36ecf61f3a4df7c5a8d9c17c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

