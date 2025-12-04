---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636L7LDGY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCvV5qak5S2qipeXRsfvMi7j3p%2BJm97c5YaCzPVk5UIHgIgLV2YpL0GqS7WbMjIjvDSqK2aaISZ9TRbKsBgkInq2Doq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDvM0lsi9CuH0Ii%2BnyrcA6RL1A42qdwraXDKnY4HZ4n06cNn%2FJ9GidVTJ60iuVWtPuOpFeVJXJba2V3wEMPuh0MRiyU7h2CgHc6fLvKlBIBVUe5qAYI1UrXmrzDRZOfN5wjw68HS1wrC0cCfkByunnZyurHzva3dHqg7uNKOOCDvjexLQAG6HfqkkstViK1tyqiYuL7uUXgP4y9g9ynxn05cpcgHyD6Gi8uiQMYcFcERtXJLI1QWwroP4YCYSKR7bxbTjAwxmBkd1QemN9i81kbnmoHQgdUNLEqHW8bJhCzvV7MjqhrcaiX6KMhcPzNIoB6wKO3E2PPwYMtg2PtwnDdAKCb9IQpyRxxtykMAT1HVduxjE4Q5Ff%2FRLBSb40pQOzLRkpFXHBJML8ASUvOzpAjz7eiCIvFmDFg3LmEHIE%2BWYUGK%2FqauZkBXVsbrq8YlR%2BdC9wg42sT91sQjxiZIxSA7Up%2Ff7lpvgcEZNGGlZXW0DX52ACiSiYdaDwq4ikEhBA%2Bmkp77Sl5ZLIgZcakA1WAIMMcboxz%2FLAomKJvH7arBHmSVsPg9SZn%2FXGGnvmcgFpyQIkNOzFWWylAl6lh130GEbLxnUsF1nH8ANQLEmV0Ak4qDbePtNe3fS8TElXzFyUcthF%2FC%2BgfyK6vWMKirxckGOqUBjuRsJ9oWiYDEKC0x6ue5HVrE74GivsQdUv3YVFO6TzYDsuskRdCDH%2BUWqHU0gvAHn4w7ZpZFbDlzT6Is0%2F%2BE%2FRbO3yuFUb52bG1Is56tBzBEQbY%2F8SVqvnZnPs1IICWqRkqEmW0mc%2BSaziJKrW2Av%2BVqgmYvcUqhcxk%2Bijq2NgFcvGwB1Ddo9Hxd3v0IX9WwcwK0XwBaaiMjfMKtsXAWSWAZ%2FU7Z&X-Amz-Signature=dfe022697ea2f63cdd1a9d67d7e2066482c7a36312c21d39e8fee54277fe9e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

