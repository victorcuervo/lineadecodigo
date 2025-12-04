---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELJ6VLW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDlRj4DSKzS1%2B2gPz5zepqrMhZwXEWG%2Bq5m%2BwT31XcgDAIgYsAkR9thpIHwD7d36CRF03YD46wFWvyRdHmvoMkeU30q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJdp1ZtMDobt3cdpkCrcA8kHrN0L9WPIJX6OqIS3wUpmhgBP6%2B%2BC67t5G6Tnqsj0oAC%2F6iKOR9kp59tXiabhMmFrAop86jdQ%2FIi0Bm5tUNdPktXFRtThVRzNvf7ZtQ2ABTrTS%2FR3IOcx8DMyT0Y4WHMlbAJD8tz3hfVWH%2BItTSLoBbIdudykdX6MqOPX5n%2ByMg7N2k2aIRekTF9ZR0d5F2X3GCHIEP58w2mRJTc49jMPIBX5UUDCkFuSWSnXSbwXhyN6JbclHu6e1iT1klsxVxex%2FvWcCD5UXFhIcJmTUFo82aYObysh4DOH3FMbiYF%2ByhC0NBvo7KsmXeVaUsXtFLj7IdImGLjmCogZUlxTcpG5GoY1iVjMUqrN0zIM%2F7CkQgbOK9NTlo8u0ZwULFb5pQm1Xu6evcaHG4mNMgh7XCXQlMM0PRAJDLZHFzWFqySpZWXfM%2FG76KxzHQyWXSBfLQgFvo1Sdig51v99wJLUyjm9ReubJkQr7gC9h20i3r6iurBSMp3ueQXzfAW4mF9%2FtXw%2Bcb3sNitpYjjJck2rYUaTzcMhbGunT22Fftt7AAclZB%2BpnC5jb9Prp7QsBQVrC50xMnToKBoCjZnU6kidQHS3yyJ0TCL7md6XmFv2zt7oD3jXtElY%2BuTYgwZmMMuUw8kGOqUB%2BNX0WRJVTiktxsmwEwW4CLOx2GcqHn40t%2BHq%2B23066WsEupXnpqpxUH%2F1BogD%2FLUhZZZkZmTI3%2BMTW67SsDrMNGhG2mPfnU%2BLpSES9sWmMOyxKv76sDu%2BQ1iIkD6KaxmbXEvVmqprtWehfpEVQ783BthMWHXMBhF7A6zkAr%2FGT%2B3hi4NnDPl6fWA8NkbdspYeUJZDoo2wZxh80QTZoFP9WVFti7e&X-Amz-Signature=ad496c1be6ca28509148f8440b08f4d0cbd3a5c7c5f7474fb8d1dc730b3c7d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

