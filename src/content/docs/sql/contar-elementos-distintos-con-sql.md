---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHYMDBOP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDTm6zOzTwEjspMOmgbI6N7A2jiybJQgNVHfES%2FiFOEwgIhAPstQtL21b0GF9RapsPjzfIDbc%2Bz1oRzlgPD7DtC1TYTKv8DCD0QABoMNjM3NDIzMTgzODA1Igw2eE93fFv4LcyBybgq3AModwvUI15foB27AL3CMpaTmqKU8E9qFn8ZpfzBa4CaWWFvS1HB83ucFe4Tp14SU6ky8rNO5stv%2FqRJ4aZQ31gVcpmWDVCg7qll2Ev1aQU3QZWPcPpMBQ1euSZRMyxgkbFHwbuNJSqnEPBUQWz5c9TGCBwii1CdjACr8oH65mmqX%2Bg%2FfGuciDpQfyjEKOE3%2FvHbqDADUyEPfPTe%2FlkQIacJolF9uDCEidb1zmRHwn8BaDXwZ9ZKeXTZBTKJzn5A4RfIml6XIyDBfwkikL5wOsulmXRjU5xBSbsNkSFLgzq%2FFeUHacVYGQ92YUDCIAMuU9Rw1iNfTTEKGWSDt1vz%2BKNuKbIG1J9svsd8kxtMzSlcz9j4NIIMAObmRuRHNvTTwgd9%2FcF34h5sui2IZG0Sp%2BJG%2F9mjKT5vwhK2STmVxEYAt9EKeeyeKzZ0wo5WHOseHMLVvTT10wQc2mW8ToFyCRmgsTXVDEozYNMbWDgOGe0an9fihROoI7B5GqTbGxtJ3VR%2F2LkJzkKxX7%2BuxVZ2%2Fa2OKDVLp%2BEyVRuUKiW4IlMA3h4reKD2P2BaUi6pOr7YEdfnNwxq%2Fo0%2FZdcWWI5al7IaND0seWCw6SoyFKYEyASqDXkvP7bWwJsRxU9kYzDQkMTJBjqkAZQ1Lq8vZh5R4XKwuCewhX1zPIKFqlgYG5YjLj716A4oVfdrOmrr9vEKHvjJRKHuTKgO86nzW%2FOBcrjJc3%2Fo3OkAIa4cZp7u%2FUzUQqhD71uEqMcpSvNnuMHEnXriQrKDvkhsmDWuspfeHKOVEZvHzIRPMljWc7W9W%2FR88qwAc%2FYPijouUN1zrCLWarF84xKlyuW7wmUdDiWpl6zkEgDQmMauTeHT&X-Amz-Signature=a41dca43c96168d2051b709053097dc203643f27f52fc12e427ab7f3c128a8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

