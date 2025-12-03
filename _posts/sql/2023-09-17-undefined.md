---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXUTUHS5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIH1A5i4uXEzBUld1EiMgMnxlDdHZV%2FyXjCFaeVBDu9FLAiEAogxohTB9HcNy00sDUPRH6SzRmirX43Z7c1LZRhV%2BSQQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDATIrcSo8hUW12q69SrcA16DDnLLr1tREVU0HJzNNn%2BapoXV7uFvCPKBtSOQTpcTuIMPXbm%2BSc%2BDo1KnEAVd4H5kgmTzHUr0SqdrOCOR5fLlwAfvmVEr8hZaV4S9t73plygDKpa4gAru%2B1uL8qpg%2FerzaKVqyFfoNKra7O5dWqcM8PKYVktfV187tvsQ3ct5IuwkwDfXlAh358xWyccBC%2FQWKxsTEd4a%2BS53SiCeci9vuLw9auHgQc2DlXUNwzCnno6%2BKDHg4dVZYZ%2B1Zgi3Y0IObQe4JZhmRx6a0266XP40rVEPOWrzvsD2s6RUhYMQkLBRiTiUgL4sBZwntGMaokRbLptG%2FpOMB%2FVmOw8f2Ty8zYNhcw9u0zgslgDFCROjxc8qWSTKLB0CeSjVF79sK7tfONfRrM8J66IlmXWeLokLFXwm%2BTqNEiUseNq5GhLLl%2Fvw%2FslWOqhcO0JgpKOAlaJ66PUQ62I4DyOxdMGe3lFVAqozBTsptzr7dHJX32BkPRCmL9l7LbZYSrvg8EkSsvqamRNlhET%2BBFpDOGpaQANO9qujAikBToDb6LfoEqSk6eoq2T91POkoohS%2Bxhn4lDmzbGLH4ZIjNtN3CGw3cZGr87cfjxE%2BD4EdT22F85UK3p9TmUHjJhDWmN9YMNe4v8kGOqUBSjVMtuEE9zk3Uoz3WPzrqENWefsr0s%2BtDmJh8kyknhzyxj9qFoWbEWEy%2FQq%2BE0XkUQ%2BeVgwVzqk6ViHCVb2MqdMmDSr3BI1LHnNPl1%2FchcXmrhswljjkG8Q038dOCFrRusxrl6%2FXfQGXVSAqv11DHNYixyA3oXPza90uR0URsFylZfsz%2B5BTFLUGN%2BcP0ucYKUL4YumLesCXQCugwy5PIfFLPbvT&X-Amz-Signature=e8eac2282d082e7819f7bebf6bbc45c9ec8cdc1f4f842f92ec38f2d951bba2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

