---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQLSF2K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFGx4ay%2F4LkdRXD3Ul5a3CKVFatruZe7JoWmzCF%2FB0zGAiAZ6wTzmgX8Zu%2BGry5%2BsEIC2qmOP3sugrr01S5iyNmdSSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMU16KeFq8%2ByOCuqQaKtwD0eWTZYBlWTBLVDMvQ1Rm5TXX4afJQ0%2BPjEP5HgRyC9qBFme4atVMzj00NXndj9y44GhGoWBTPFC8%2BnrkdVSUdr67fNQ9ZybGuU6kmIRcIjJIz4bvLJI3zQ3VOEpnRfsS04qRyJ56%2FXIf8fhPk%2F7iDD%2FNL8DVh8T0R27eHLeffR494Sc5BGWGJwjbH6ctUcT77GiEjU6R7%2BkGn4ZwGFXzbc2yb0midzeW4ASa1zKp%2FbWIn2stNUdFSZRWeHCL4nmN9zYS9tnNBnqWHXKJk87eK%2FawQ12Q0SYbUw7e8J9fPsaFWqW%2BoUY%2B8dprtY4oyXmIcSHcQ%2FT31wdEWsRCfPXN5E7d2lHBOl26rSZW5qODF4GXj%2B%2BVIYswSs6lf%2F2REM7Llun9moYs0h4LaT6F2wAIWLXg1LlsCsSEWrOULKyFkcWpjpyPKn8r948QnJcvG14TQRun06rmBJWfruKVqhwJbrN%2FihnK%2FDvp4c9WfD%2F4%2B70tjvTep7i53xMTzmMJKgAr1AHE7g6Bz03ZOUrRCtYyinzB2Z8sH6y8lhji3G4KnMD6k1ILWpmDf%2BGkpSYVWQ7%2FNM%2B8Dx5%2Fn%2BQKjjuHNtJfMwUpzFvJ%2Bvsp12FSTDcVCGa%2B25GoVkJC7eAkU98w8ZDEyQY6pgGx7zksr8EdcQVAUXGUrgnY%2B5W2xnQY1brUnjj8eILGFxTaM8xmA%2FTfhvroaqHjySl01WZIUru05VWtC%2FOXfbQLS3XAThupEXoCYSpdrBZBuw4ZOaIvvr07v8ngn6IkRuPxwFzeEoL9nnTV6Xn%2F%2BrL2u%2Fihzrgeq5WSKNyTcV1O6GEwN2yblN98My3k2iO%2BnJHSrid9OVqMNitY5ho2k9jjJ7PGvnvB&X-Amz-Signature=047c7c97860f230cd44eb87a79f14d31b8681b086fb9fb13e9598f44f08b6dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

