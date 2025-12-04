---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ54YJKH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHMCmuDmsXc91G7czWavZdCKUNEnztrCoV2j6%2F4uzN6oAiAyvlHVTOSY8rG28ksxeVpfjsYOjnPUJCJLhVi4NAevTyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMTWHgoHIPmmuC70MWKtwDQLNJuGbV7KRhsYulW3qhjnoGtyZ7ThxbSgtDchBac7LNqQTHraWPei2qmS8vhRws2fBYD7JC3b%2FOFjG%2Flj8C%2BbQpxYw1U52Dh3ZCl6WxlmMliPDOD85vZsungo5QZWHHINUZnPj%2FLQ0muLoxd%2FXEX4YtnkM5aRVeHLGN0x9wH2sRSXzacQM4CXlL2Ce1dwZ35EMbrc5jSKSOxXhlYN72xtqTOUalB3q22xwI%2BeXl%2BBd%2BGYNoNg9EyKBg9X07%2BFi5N6Pub1ZnzVUVrBKqWc%2FZ48wrcxkNiQYdGcDfN7XeIN%2FyVMtQlNwR%2FZiUzz0ZSUq59nLKl1wfOcC3ifMSGJwQ24piMpmxC1wGrA7tjQv16tQciQu1ecggDQ6Ko3jzRGVfXdUKVG6RmpLv%2Bq0x1Woaf4X9qHVHTlkWR6O4QUTsF8QIMdN2aTTK5FYNoPXboneAWScZRQiNbR7dwJteZqPNe3rTosbXYV%2FjPqBea5Myz%2B7tlp0GA2XMalVXrSLypIL7UyWKhzhBKRZWk7h44N7pa0dXe%2FTHL66l3KzvIvVXTjIDvsF3uuKhwC%2FQh5GFrR9ysQL1dT4F9V%2F%2FIZlnyLQ8obWypi5TGTF7HZovRqwsBCsngsh1pD93DRMW5YIwubXDyQY6pgHqafw%2Bv740IYJmOKg7qtf%2F1mrd2vWeWqPe%2BaYFONzF4XkdTg3U0zmbdrK%2FH1r56U3wnO7jduTB8Ty71Hw10WeXbbyQNSfz7iTmIh0jy%2BHDxtkShBEbNmc3Lq7MyoqXrHpK69jWTAnHx%2FkmI3jbpTQE1p9CbJdqZnCHhzP%2BcnOPMlvUDDd6h%2FGDZzQw4gKBpA8KGOHF8dscyUWB74GP4U6qOQM7FrZc&X-Amz-Signature=848d9f14890ead5d16a6d6919deec23087acc25836e85780bd4ed6344f9df654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

