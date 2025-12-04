---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKZZUH4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBA3nz9T%2F5G5puZJPsIkqg0KFRh3oCQ0T%2F%2BdxphdfgJyAiEA27agxwkjJMPy4oWFlfthZtJvU4EwxVhIrY9Vs99JO9gq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJTOl4r00K%2BuW6a5KSrcAzn50Zw2ZcRIuwrnyXyHIh8Oylin3q%2F9ypZhk05dLF0NVs0wHfeUvU6AIIw8eWrjme4X3hziK1AGJPk%2BOWBiqoHtIFwrydGJgsVn6xTUOXZrfHE3zfHAOzBkEHK9Cz5Fd0Hro1tYOLMfREZSxiuUh6i5iHKgQN5TEHLZXBUZpl2zq8hnGqF6sqllbP2iYDZS8jQYthG7pwX31fpXtV%2B%2B4ciX48rg9o3DqRMtzD9gBRAZRW6catRFKgTJg5lmSnZcAwRVKSRZT79Zcfo7QfO88FzAuRUWE2YnHasOCFMYIQB2ly99XH4WHO%2FHtVwzuTq4iDBZBkKRRHIqjaRGPxqgpaC1GzmyzUZq4D9OgaZRf3Bf0%2BXBeM%2FGWYtSYooGBMGSCxpJaUTkQqPbANBEy9C4f9qjkcgstchsS4RYkXac2eJEwLjliczy%2Fwom1Ak9Tt276lZKV12DieUADzNLUE3AGRYrTYkkuj3ZVzhZ%2FC54x0rfEOk%2FiYhWernqqYdXXYiEl7qFfdAS8BIgFCspY0DVxAbP0HfrCRio%2BqRuPGobFiREuzYl6MOFDR76n2IeQ0SfA6xm1euN9YkAjodZE5J5MA2JCk82PhSSigdcCqPoliZghSpIMMsyESuZpH9NMLaGxckGOqUB8fGQoIvzR8t6Mb9zK244Tsq7dYaPGFUdDCJQuB9UVUiGY7jw%2Fnebf%2FZ7LYKzdDCysgA6KheyhaaAL%2FOfiDfg9OO64N0CAVdSheYa7tZARIPEwo9uDhAypYb5iR7mZ5DNOlATZUIjEIeh9BS8VFRA8QtHl0IA6gS1QWk5hOJbpwdYcNQC4XnbD2USVdXp3RCALUNtu1VDTvZKnzMH%2B1I7dzDUwL5Q&X-Amz-Signature=a02ea6551b254c0cf2cbb01d0c0ef23a5dd195aa5b67ae95c2cb80b0db3d3554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

