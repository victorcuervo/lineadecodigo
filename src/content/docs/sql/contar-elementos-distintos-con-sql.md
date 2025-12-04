---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE7P5V6T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIF9Ha3xiB0NjGJ8mvDOpbqUMw1Ie2CgpekrZLikFnzSgAiEA%2BTL8yMQOzWtym0fq3IJLZ0L9DN%2F8%2Bc4Mgqz0Oz8fDQcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPtCZcJw4FErXhdz2SrcA2%2Bq6slFdlCOIiEywhjnan%2BnhCzcUW3qXp36O7G9VFBSxaHgphEn5nRLOqr4cPbHcknXzziWkjlRqC%2F7%2BusG68K1Qcl37mkp0SjWChItrao%2FDlAdom1bVJm4Ws%2FpNoyq7gR6XXMm%2BTG%2FEnVLkxffr%2FgaE%2FEvVWGVJ%2Fhn5aEC1RbCaEjM8pXKZdpdyPilBGRREOhN35e%2BonWBXGmCTYqENt%2F2ogE1Ho5ysFJcrPIX75%2BoYlL%2FDMatLbuBw%2FEDV%2BJlAxH6XnqHDd69PMsIuN65kTN25t1g9SoEZ31Vs8mCTJcailrRntzj4Gj0Iohrp%2Bjy3yQBoxwEsfsGm95tpHPkUKjq3eCFp0Oi3nPeCOen6A68VsmGQj3YncMnZchqiSAOhYvVpoGSrIgGhJ0oiGehHvhTvm5%2FVUHFVWHRmOTgmcGSeFoDe9D1p0FV4Ybqd07O7CvJcQKz6t76Hjz%2BWgWIpLvH7nKBK%2BnBMWqR3nkXgvd8Knut9UWjWesuAigjMLOdUg0mcF02yCuuwdiEp3w1BGge0rVvUYopcWMfmdTORxJdkQ2%2FxUVWLSVdak5PP43tgG1%2FjWNBOMc33pB9MZzV5iq2Aw22Y5jd8RTUBxCTFHFVLkXNWK28HqBaW%2F5hMMDnxMkGOqUBQs%2BQRjpWRsXEKWMT7aGIOFIan03SjG7Xyvq5Ur6utqgteV69isAFEow%2Bi6hTJpyh7pft%2BV7plQNxxPtE0IXIoVwIKu83sM%2Btfl2zmUmZUCmXeNYn7vpAtPPgSOAGLFRtbW%2BxTc5%2FLZ%2ByY2l5Fpb7phUtUVifqJfsaYK2LCnH28VPmMvcR1LKvlPooD%2BbWKoc2aVpVMWlrqBxJXyvgOmKEciqHGUQ&X-Amz-Signature=03371ef137bc77e9fd569bbfcd6c717e1ca48dc9dea7cf96b0a97ba94af2a824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

