---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBEGVSRL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDy3tk00t8tR80QJxyQAno%2FVxyyd2faY9GLBs2OARAMEAIgPZZMpNpvqZ%2FLVm1Ib0bum3qr2KzvS7NduwQmnV9KcQwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFzjjKd8YqU2vEViFyrcA33qlEpT3fdAggrrwmZ5wXHF48mz21b02JTeNxaIwB0CEB%2FMhhOqRNAMUk1Tm0v%2F84gPeSzfR3Coo8yp%2ByketCbwcfxLro%2B4YlmCOmWoLZ2VcQwHsmca%2FzOjwpai%2Bl%2BwkVlz8kpNglaC53IcWu2gpCbmD7K%2BUV9Qs44whuGy3fIwY4C76U0gVN83tjMe6K4siMwdt4LmK97FOM%2BBAb8Zm55EvCJ6rkNwn1MR3WeqCMnSdVMqxKIw1muuvF2ZFc72X5i9SIZeLksr7SoSCKneyazAf09Xk8CcNsE4P3%2BM2uFRTZXXrEwKSUBOAen2HVjUhC7fmaEEFwHiPO%2BN8gk9u2YKRjqL6JkVS%2BBjk6yTxnG0XzNrXnDAUfOyRRIik9G3qjW7lc67eWI7Ayx5eEd9XpieyEP1vV5yee7TJd2i09BD2%2FWbVcLGmmcsSgVQPGRQKZNI8urhY67fhU39pyEEKRl8R9AE1yB9EcIzKDetwSm0Ud9LElL7%2Fp7HveMcQ0%2Fc6wZ1M0I%2B1Izax2yg10IZmpfUNU61xEVGoEXiTI8uR5QGG7OazToOJYj6D2dT03lOdUSM0iZX%2BG4FwGCuz1Ypkbira%2BWtSBi3ZutqTeMcwuQeYLrl6wWHzkBlkUG6MPOFxckGOqUBtDBcfJzvJ%2BiRys6KqrAgtyIV8QEZzN%2FPKj11unQssQWTpp12A%2Bb5gceX1vND0g6aYFeBiAjP9mdaJf13VGmjZR5yGj592Ki%2BIoYZTum2ccdDRyAaxJjGnWbrvSfr9GTBf8ol7FKocJVM0rdTFWmJOcs%2BW7Jchp9u6k0zz9%2BRSKDp88PZ0tFN1Y5nv9oAaQXxyNfpvy7kbbTh0BCQoYOAsJtZy8cV&X-Amz-Signature=06a1ad0d1f3b9fc721f6a0a88cc90c0d9ccc82493e97a4f0898d8c6ce54d568b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

