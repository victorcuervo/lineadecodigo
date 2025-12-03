---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWRWANOV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBbv86Ltv2t1L932RAOpH6xQkLvSKvkJaj3ZCR%2BQDXJZAiBS1%2FHiS39gm9M%2BFFNWDjtoA0vCIbiWCdZM8qIlKAKcoSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMMgeXUpX2pru7C1nKKtwDzle%2F0%2BB31I4poYLSoUdckrqio7taGV4pNI5Rh6d2%2FI6tQR3SfezRqMN3bS4AMXVfCTi58%2BuQpV15OCyROmogoYp5bOpLdzQ5Rsr4ea0dXFdQkINDBq6FfCSDN343Bych8Ay%2BXcqX4CUdUtiTR9L52YjAvRpt7oabv7GVSW%2FJSdBZ3tMWUutHsivRruSVjXN%2Fdhf8cEwc%2FcG5iydFn%2BFPi0D5kjfhP7iukIOeISabjlmx9mnXBjEpSJKN7tDDZ%2B2HCNuNUNp%2B7KYHTeOFqh9S4b1Wo%2F0wBKGX8S2U6Zgx1QVhx9FGjzKAjihLcHVPZchKcWASq8d9M8twwCI0SNzLzPaLrH3xMq72cRk4dzgfClSvzvHW0ka7kd9LD0EXlk6CGjsdP8TTPU6ZF7NwYJ%2BFpBgH5NGLgD7kvYy2pvhvm%2FpHszmvTZy%2ByawkfKtshUKPVCdAJZT4ZsOwncgEo9Jf%2BhVaqQJVEdvNXLB2CivSagBwiqxtoH%2BTSo94MIRUzNFtdbpzIET3bFTIiwiwZthIAFgmprRMRyBdMd2zduZyQXStioApQ3V3Cl4ht5Jmdx%2BFJcnLtoYsl3I%2F7HLdjadIk8An6vDLfx6ya6PCYLl2jwSmVLhWJsBBjTfRT2cwm73CyQY6pgEgfM0ajUqO7QifCCgQmCN9zNT0z7AsJDmtJRjY1abr4B3cbs0G5swoo4j%2FHPQhtsWTqnxVAw%2FNHW279nRthvlDLTZrH6sWJsrFI2QvTEOTvcyDSfnDhfRoHAyKWnIqs%2F2skRXe%2FVxKMW%2BWvAUN3B2VPVgq2FlhA%2FVScJJicShTMjJSYhoOYoYK3iniSGh60YlKU%2FiEAh8JR0S0Cfi%2BDHa1uP5f1fol&X-Amz-Signature=a6de408aa18f573098d87fe1597979e0088944c8113a34eb3b6a5e535c2758af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

