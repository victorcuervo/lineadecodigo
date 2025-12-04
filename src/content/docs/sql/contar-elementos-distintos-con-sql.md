---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWIDOMFT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCAl1bIFHztXgl9qk7DQCzNTgPs5qjCkINfaksbp3V%2FqQIhAPyriOfR7hs1oIHKb85zfowmcJuJvunO%2FUDlS%2F5p6JIKKv8DCEYQABoMNjM3NDIzMTgzODA1Igx1H6%2FW0GBxic20wj4q3AOzo05JeZVteCUcvsMQMANQBqaxIZpYtIzewV0h3VqM%2BI2eRght2QDoiAHm%2BfAfoSlh5mEjBTMwNtPFYWINH0L%2FUHHC52c7%2ByltogAQwTCynjWu8oa4vvT7UzRMexW%2BTrZeYYf%2FbPeTwmumCjF905NATzCTWMH1Zlx8DwGDbKKKVke67c1vKWE19lSCj8CmFWWEfcVooH7B8YG1SDOP8uUHGqwdT3%2BhvB3FXSO0WXpGZnq17a%2BMs1FUBpJbL2W8%2FAJwpmmAEC6MLO9FTHK%2BEUXow%2BRKJ4IkLuc%2B3BCX7sEGmZjKgwOQN1fMG05M0PZtB5ed6iFrXx%2FkXJBAqGPFLxiHu1In6HED%2B3y4H8HoX9tOiv99ddObTKiXywbIcvPscqQc7ehDRaXyDncbVii26I%2F4%2BsF%2BNedYseuO%2FC3MI9RH8pEQqB8vffsKsninaMUioxabREaM0nvqtnaAA%2FSJ87ZAJB89bxpFjkkcmnXVtckv2qCPRLnkGl8uHq2cQBeDDWAoxaMkjLko13eYEK%2FfwC389YYwS3tomoqKQTtGSfcIiIUswPpep%2F2FaGs8NCsTM5m9XoYzFyy07xdkczJyeoVgPPUKbChklpqpm7b1QlzuiVUPvpzdkjttaAp5zTDUg8bJBjqkASdjo%2BKC6NPNTnEhvNIkAGrhbz6T6HuD8xInyNsKmbP62f9QGTsj9Faej0bNspWdnq9rty0DsfZ0DxoKLGVQLwg%2B565XvJ0%2BRY7xyMdsOfJarS6KDPttYMTDVr1pPgShx8Obw7bCoLYJoCcvuSK%2B2hEr905Nxe7FCMkZl40UXIrefLsifHC6RwNnLEhWQgFB7ranXtPJVP0yKt5vmmD%2BYKnnRbcG&X-Amz-Signature=979ff4b7c0158e887c3315cf0c329406fc88879671a64ee1d8612ea9dd2d453d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

