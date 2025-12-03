---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTEPSEG4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD76S%2F34URA85LmnlA9VS1UNUbGC8EYYtzgGC6EVuwOywIhAPfcvk33eguNKTIsYQL42nXytC7LvdR39dZsWAnC%2FyWuKv8DCDgQABoMNjM3NDIzMTgzODA1Igwz0VNMsxK%2BIv3MMxIq3AOgx8KbYR7bvukURt09rwE8Oqukxz%2FBNMKx%2FaBCxUPC0w3Q5hK1a8C4Lx5HbZahABritxblx4VcsyBxJGR58zRY4Lg38HcgEQRFBDQ8rTKe13QuxBsWEKl6avwdoF61iPkxJ9cgeaEr%2Ba8RGk8mXuUvkjVaojtg8%2Bxt4tmu66ERergK1Oo%2FBppxY9xG%2Bw4jWdtzjJNWj4xTBSGT0sgtrs2b%2F9Z%2Fi%2BPomPH1KXSot0%2BUAOIzmM7YG4Aig8VYsIhz1vac8yBhKY1dqBBlDDbh%2F%2BRxu0dN%2FzxkOYMvAnDqprpzUhQ0jMdL8LjvYJk2tP1YAodedlFoQsmjElTmPQMcDE7W7rrmNud0CFeUNoDZAjB%2BJYgYKQ9Srzsg%2FNh1EktduSL%2Blv2c0yXfAs4OX6I7i5UBaTHXu4jFmmx158pU3xJhQvh1uaIg0oEKFtYyu8P6WBbn5cxdYHCU51ygEdXKRtNnmPP5WqsolN%2FtacfeJsSFfyIkDW6nMKw2Mdh5EI%2FGN5onTy%2FbIuqQ1xrui19cPsYZj%2BZ1ZmyogvLWTwElvg43vmwYP2pw1tjiSFN27f0kjOmSFzAbrDzzXOrb1VtFDldg3m53NVrZXD39Zxn7E562b%2FxBTzBIFRMQLDPQsTD4%2BMLJBjqkAd4XLUJ%2BT7Mqy%2FDb%2FnnJ%2Bm5IWkhIRIjlvgGFopN1ikpfAVQXHj6csJ957Sv7fYz9o3axRh1oxvgOpuspi4qw7IPn%2BG6zue3BGq8kDmv8QzlZE9aM27%2BL88s%2FA9IOc0skp4JMX83asgkRnkVK02Tv39dJ9vKAMfqbb%2FkDdWHabGgd1WRqJmTxSPo2JmJgZ%2BI8s%2BIMRYKwpG3eQYKIrvlT%2Fx1p3h5s&X-Amz-Signature=404234a372c345bf7944aba682fff391c1a2fc8859871323fdb4481b086a7a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

