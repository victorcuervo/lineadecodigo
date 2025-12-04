---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RHRD7A6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDyjOVbOpqvELCUpFZ5xudwmxEsW2aEd1Py8MNHtPfyUgIgEJaMHIKklyLuR%2Bh1wMlgT7lMalm1%2FWxVAnhcqYq0HGQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMOGr5TNjNEB2o9XuircA1lbWh98%2F%2BqrISRqNQ9Nm%2BQIOC8JLOrlrv2RI%2FZ%2FhUBasH7SJlC0cJ9IDJVGxeI7BkPXfh8k3s9ZClKQlYc3o5EwaLXWUCMHJQ9AKa9xnmsQiEXgeHhMzLXUmk8h4Vs%2BfGBYyiDgNw6053ykQKt0Phh2x8wBYQu%2ByDuks1o45hYr%2Bcamhw1iVwUSCF3woMnHJ7jBlUfC58KwudvW8GoxbyC4uUrgtNVPgW8VKrB9bgBgcJ3H9arONGAESatbBlvoveOADL37kXKLzSdwfivCb1BouOhR8nX3BXXEAiovJmi8BeGjq2n5CfN%2FkJjA7jh533krAACt3jKjOs6wtLnaEdxm4Kc1TkRWy%2BLC5BSX8QUUkNmolUzB0fZLW%2F8fMVW7nvU%2F2mx6f84%2BTXcOMjS%2BNXs2DJYJhqUYSrLxMUz022GnFMbgTQTUFWYO1zovgmOxymc01IUUA4Qx7afmp%2BGGvWshjI0jGKttnzWC6ERLcUJHlPOAY80l4DhuPeECg5embYTCpy5aVWDrsZV%2BOjpFY8HD%2B2MAfmuzPSQNvc1uLjY66Ex4ej44sl0EgID69C7GYaEWRBJKNUOftqoWSQMXqZwmIF8bO50tQbw1vt9zVlsxjgzjug5ttJpNlkb2ML%2BhxskGOqUBiEi8dDs%2BZ%2FIDHSpOyQ4hEzgIF2bT6GmdVr2PK71CKKgIrmXb2odEwOYYpdo0GDM79yHCNdM6o3%2F9ZkWv05BBnMNIdgqbzdPYPypDwRQoZ%2FVAN9YLX2PxiZj9hnd7Y6H3DOKt%2FM%2FIKbwa6VRim4uSU%2BMF7C05tM8NFMONw0CpJw%2FpiMqXgzxEZk6sqBXkUcaEfiyhvcXLE2Oh2xD0VjeSVRWRKoe3&X-Amz-Signature=d1a8971d531cfe14ace40ae81d865a552266110fe11a1a908c2f14b0886f9fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

