---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPP5NZ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIF1CW9KDEQt9IZSdxevHaWzOIMJDOl7UOnvzpX6pN8w9AiBODxGAFJhhrQ058hBK1FRu341Mo1t9kMyW3fejfc1yOir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMiGK0goljVn39IkT4KtwDA0i5ggjM6UC2WIdmhPmQ0NvO5aaXBprfLuR%2BoTAC0ChOhmWihEy0JTOcDvvVRFKLUCbXK0PvfMgv10oP9pOFTaL8fWOn0eoq5B8oHbuVkxTz2hNF3Z1GLHxY%2Bto018PEYrdQj7iyUzLPW5SILLaX2aFwcM8Fgj%2Bl6PXaGqIjSfCSeoX9CxDBgrIWqiynx9R0PG7w43tGUvXIWsd0sT6ZQdWe0Dit5UyxSgskt1i%2FDnVfiqtCgwMsrmWr6fAr3dpUbJuhzT3dEZsN54Y6sjtemcdWCMuGDx3PsWaOYK7qYvDzq0%2FYDhEGBNyq3YMm%2FZYlQ7oWgPxed6IsR%2BYKPAWJFAB7f2VR8lzkiZbday3djylBYwbtkw8k76vTRRVJ5JbT1X0gdX7NWoJMX6yze58bJVGgG04vw1p1tT8y%2FyTDtPbQJY6SLleS%2Bhh0qbof8dVUN2XJp%2Bn5WIFXrcSTlNHkv61UgfTc0afgdVkhtpLp2yiChn9Q6vqpwzpqfHdi4aPA9fHgL2c%2BZPBE%2BnBti0GRgQXH5A7h7Zf4wUUUC7ahw3WePSrIO8UisfxqdG8bYNSotdNA35CAMp5QyHFh0kheNdxk2gWvEBvj%2BtMMDlPbW%2BK8qWWzGmGvbrptM7ow2IXFyQY6pgF2zkES%2BSh7myBvDqgm%2FqyMOmgNz814z94N3Uu4eOgW1amG87KvYEACUuAkDrIn55rmQdSz7N%2BE4k58xy6oWlIzxO7xlfw0uXnQ5eJOoxW9xrPEkOLTsP8AW1a%2BgOx2TtDOlFhJzvXUv58%2FR1yIMLuo%2FSWwPQAa1EPwGG8ydY5gNXjNoU2kUS7ZXQMiwK9y3%2FY95pfYv1yYCVjBte1Rf0x4no1N0SMM&X-Amz-Signature=e70d53a26b33ae0a3963968f5ff3cec47a5153a4874885f2ecb2635447a514e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

