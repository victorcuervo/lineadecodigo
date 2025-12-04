---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V255QJK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGuEXY8Y8p%2FEBKmlqiwk0%2FR3ECriHdAT81qETj1DwqScAiBa8Ty39ZhI3jaq7ZYL5shDApLXAG129YWm97vrDp8LUir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMF0%2FaX2Q3v8VxFRdcKtwDJjLKEyqmGGg30I4iQU2al%2Fid9cOkTnXgxaTyXFbIo8gSuOCm2MqySPy3bj0WrbgzlfJxqRN3pyw9jqNMGwd%2F23uJ5CX4hnmkYNPPfSME%2F9vWDG7Qv9QBgmWezAnUlt3cZJJ01Y4nUp4xxAclQfs7i83zp9aNz2AK3YP%2BsjGfRsNtUhlkdZ6oBIVuWqrA115puVvm1GfpNSzvjThqTk90S%2BbirOcDm%2Bm%2BzeasnAY5rnDSf38RxeOflZJKFuysm1DefPUwM%2FcTSyD%2B72jma7Huug%2F0sltljSqJGaGoG5v9WjsxG2tv3okPyaQIecd41T4cGXf6o6W6Vz8Pz8szZ9kbmNCv4aXwpnjGDGN8RI4alRgswhfpM0ulCVV5C0w06C3aU67UiGE3qsJ0H03j6EGyPtSPNq1bIZ3mhJD6wvrDnHmDbnb%2FKklqDy%2Fzg9AWhoaRfXtoYgscrfGF7H%2F9QmTR%2B4wy3OHQVGAtwKYhmsChyqjsN68LPQhwjJW0nlImdv7H4QOW%2BQIbaTdqhxaceisc768GzjZd7aIoJX7U6ahMpoUImePlS%2F2XT5ihly0Scm2IAH7It4o%2FhlSM0BI6iavrc54JwKPVRxrxdgKFqlJcANciY1pXyyt3SF7nxKgwycrEyQY6pgFw8K6CYW5Pv%2FVe%2BBeY7E0KUli4%2By1HyC0%2F6OI6fENOfZUm0d1inN0i67jtaRq%2Bn0bDj%2FwhqtdSylWdb59vAYGBWEjl4j%2FfFM9Tx3HobPRJ7PdDL%2Bode%2BJMsqus6r38iX2r%2Fx0DiAUV1%2BIMZTxA4vFSMZrN%2BOc6iouk13cN%2Byb9pINgZnrCo0OCQT%2BUNoXDDo63KXn7gWXxOhGI%2BxBdAGzNYP0%2FDIiZ&X-Amz-Signature=2d211609ebd6af139104d2d30038411290f1e289ffac3f8521c995d579e0788a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

