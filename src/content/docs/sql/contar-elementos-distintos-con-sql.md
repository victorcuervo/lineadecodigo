---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPVYRYJZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC4WaT9FJpVZOIDGafHp5WWiSiU4xWEVk4HHN9O9nMToAIhAKPdtxAJJe%2B%2FtzRbHI8qO7moVlZtsVFjqn2oGi%2Bw2Wd0Kv8DCD8QABoMNjM3NDIzMTgzODA1IgxA75xcLVOkiChu%2B9Yq3AMWC8qDQRjHH0RnUfjB6HkzOmDryErRiXhQuA5QAP1POw1zMFW6ZKNtNABT%2BdVuzfUhexOXwqidkxtbZkmUR6wtga0sEEHA%2BBlvWSMUPsDHkvzMnolkga9Xy5qKM3QswZ5bF2qPZjFVg6orM%2FazggyQI6wcNEcnEMrW%2FY7j8WHhekA%2FPPRJSmkVzoMYHLW4hn%2FuMDzTErmauSbJ7MK1xwH6o%2Bb%2FPHWM5Zsey3HqDZ5TVdRpwARv5NIiJzPcn%2BYvMzf%2FPxUOHUB2qq7xA4pSQ6JeESfde4yKgLkefS6qR%2FyHVEsoM1SVK5ODChdqpAO1wLhvjrEx6pWaWlxppuvhM7v8fxNFEtNKrADC8dkoi14sfV8dRTwcBhKlCRRDY65hnsR0XUatGeLQga1wDOBlypfovveEs4o9CscFymhVsKqYAmilogr7rH3scsBJmN7jhlfzLR5y7I3dg4bAcYsXgt5CKZF7oENXUOmSSKxlOoGO0RgpKIAxD70wiuaOm13kMoTEb3OpQmkorPObbAeVX53Z2n1zg5m0CiLEfcbc1KppHH4ngVVOwxa42kToXCdp0nudk%2FvtSSXp9f3oxILQ%2BCSFWwDe8e1aEBSY5p%2FTjlMdi5I3dU%2BiDc8gL%2FGnCzCXysTJBjqkAcGlyX5%2B9K%2F9OJaXBgoKlvVSnSiQiOZ4MXsUeYNaSeYjJO6EP1yKZgcWFEmq%2BZ7k8BY1bgTO9hYK1VCoecJRf6Dc7ud10oQL5e4D7yUN7xQiW%2Fb%2B5No2%2B64fuXnUEYtMkJgchfXgSDLohZilHNWmT92CLHyYmujz56y%2Fq4JEwTb0LIfCrymcDeL2IdanWuYiojLN%2FcnbgyxvrzFY%2FE9dZ%2BURtndA&X-Amz-Signature=cad5621cb37310b2d7d5ace673af98c19e5e3cabfef8de23f5647c01f7922569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

