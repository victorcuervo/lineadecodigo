---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFONTZEH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICGCmWMKpony5ygAaZGhPDEtI1sK1I%2BXedYiOFbiFdm9AiAC65WUPCWB8q%2BP35yf2V4ziOfpoDSPdFgJ%2Bgmc5RUozir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMdZmFGgON5%2BE0mSLFKtwDrgo0wg5k%2ByVlBd5hVdDm4j7YsxxxIwmDACmKd62ABoY11zSzoS8oHm9wx3hrJLyYwmVc9%2BWgwFW5tNOnD7drrI4qlRnuXGa7UVFaUUmiZ01IkixDbqrANNbMl9U5Cas2KULCyTXcyScGFh3I4W6uf0XoUAp6hfNucsoos5TB3n%2BjU3F8jlMIJCUn9yjZGENiwI0eUY4YlV6%2B04oNzwvi5LXvBpq9m6m6C1k96cupThbLlHKLVFQaOB0fXDxhH2Wp%2BNpztX%2B0rMhGjtLvFDhFrRh%2FNZUx4xtu%2BgYu0G1GPf%2FnMlHjmBtkaLvZ4jfWZOSdN7jfLLpTEg%2B8c05RF1lmno%2BTfTIvKPlH9fVKDkqwBXGJrAhoor3ugEv%2FmIoVPv%2FJ9iQuixK8dvMg9mG2OsRzW4lLXy398LjYqrwZwvul5yYh54N%2Fo9ukkJwSb4qP%2BfpyO1IjPrk%2B%2BppcnwwI3asefk%2FyhpdVM20dXmlJv%2BozOWcs00PS9RsKIJZmwg0a5VCjIYFzhg0pXTTJE7GPPgsr64LBul82nQh8pDve8R8C0wm8WB15jhSHJDM288BVBPzf1xWN6etzV%2B0hBEUHfTcabApjf0qKN7Huyri6G5PhomgkNcTJaV3ZCCxKdz4wo6%2FEyQY6pgEqSXAzbAetwIcTLBByZQywXgRFqhhPtd4t1MoOn6HKSQaDUJMMFOZ4eFeCG8p4sfjd%2F7JFGi4KdqDDYd6sZHl%2FzSw%2Bbf94MrqteelK2eow28QPD1tdG4rO%2BlRFvs4OAaQb3Didk62%2FCK5wBH%2FKV1azmjwLzW75Pmp5BtiV0%2BSVt%2BTseH5gsasCmIR7C8%2Fncvl7Q1FZoBSHxppNrFNwtVO3RZHX0ieg&X-Amz-Signature=f042210d39a43360092ef181e10cc1cd69bc7f5486ad066d0a22717254dce9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

