---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH2LFRQZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD4erLNxdAE8axzAkqLTpcdac66tsUqLRV0wuqifq9ZrgIgYRMD7f0%2BKlyr4FCCTT4O7Kzya9MzL%2BLxTPVT8Us3Ks8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDK%2BruUeU%2Fvkv0kTeeircAx0WSEO%2BVR6tmwCRKRZLFQzBdB0VLFDbi%2FmrSvq8rMKGycOU7BlI0p9uUVCpjMZbTM2VW5ggEwfqiPVmCNadJueFrcoot1UHimjlnpmfo3xryLFTJwm9MMYZDbdd3qPi2Y8Kbrbede9kRoWkkas8U2pRJRIIVrk12oAhRwOd2KJYQvYULfpm%2BNOMJKnUe0m3JDn4JX1dtDy6Yd335He3BBX1qnjGhBbEexavisZwRXUsW6q%2FQujkhBXMxOFxRyshLdH1tjzRPiDFalqscd4HHc1QRLAGqWPLwWcjkJ4S79iQh%2FX7RODs2ZTfsjyUIXN%2BmIyLVbDvJ3SQTcpwqrTijqegCtKs6TVOE6%2Fo%2B5wyCJzQm8PD16v%2B%2BxdcQALuUe4acJ94ZqsSDdYq6arzdPlY6RVBlPIYly%2BsNS8NfkeIL5whJ4IkVCEqqd6GomjDvXgL8wEONZcxUrAveSQmLTsHAzYuvmImQunUzqVBH%2BfIs7aidh2sNtKE8Of2X8HmqmWhssVvIpC0sbSKTKJZAxYJAK%2BYz%2FC2Vj5o52FB4MZnnlhq4lK0V774KP2nAw3wRCmDp39pR7uPEU%2FZOeNF9bV0RGuX60Md%2B34b3%2FL3u9fKc3I0ZYI8NECtbMsuQq3vMMKuxMkGOqUBiN%2F4NSqAOdXqBjij5e1PoZwQ6LWHITWN3r9MwpYBfPLeePs733WxPvoK8rrqxUDlMiaJ2NtWJowwmgzttQ2fIPkdGAwFbVG8H5e2JsKYWmyUgRk4PARt2v8m8A49ut3FTJEZRUGDROh8VpDPYFBQ3MMLhkCmNl4JIEjkQqPrauZq4ZSH%2BUmgxbR0NxUkjeM9yAK9ZFo5Q8yJYCbEuuRQK3TW%2BZPY&X-Amz-Signature=33d78030049784a732f3d99b6b09430ba0c3db77bfb35bc19592f00dcdd2c4e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

