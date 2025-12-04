---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMLXUJ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICH1FbpfJY%2FJWNitq2dM6kVzo3A4GGXSN3x4yL%2F8G2iaAiEA7QdaEgIJ02UcQT0mcSKSEyw9kswPb%2B6OKAUowm3p5XYq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGq%2BwW009r8kD%2BZC%2FSrcA%2FhZ0ENLu6Bw0TkwYret9l%2F7pBpIegMs6OFpLg7zEYHkbWxCNW4mmWBRWoC66iifY%2FlXl1GgBW0R7UtHPGJeZgc0%2FDrw%2FcPtmHfzX8siClzWV2Tqcx7RQb4%2FUrYPEyhBiR%2BGSDx%2BeXjwNTX2ZLi74KHTrpG%2Fx%2BR5XLKEbn83QYo2jDwW7kDi9zD%2BXn2t6ClspD3XicG8jT8StJhe4HUUfT5fzRMdmWyEgLHz339f6hsCnKGb41LajhTPrnLlKFOKDRrObS%2Fx8ZlbOZCPuolYOURdUU4JFjwb%2BJmEQKBUPZ%2Ba0y5NAM7%2BBKycKPg6xCo7Bm8ebU1KIQJECz9cSmA0GTazSUgwYu2HfrMNErzkHwZQsofPqAB0kwkhVxYfmhA2OhdLbNS6Yrj3YJdYd9C38m0cHqT4tsM7ZMGvtOOgJ6E9wk6qNfyQfQIdhKjt2tR5fh8guyYHnA3fhrW4B5dSULBZo9wV%2FpQ5ELiSvvlqDg%2ByhsMb3DbZ17Yfj20T%2BR5nSiq5AmAIVScinGCkCBuVVqqkbpVq%2FdLOUaKzSQ9i3JSBh2kGld5PuewY1%2F%2F0qBdHSfUSDdHq%2F3ZmqW8qUXQ5U%2FRmKyygiVBK7nc26RtrXp2vhnyNzx1seCAdsBlkMIW1w8kGOqUBzV53Jcx6HcKcov9uNIQ5hJpyQW8di%2Fzod86sjfKeDCqYXSEArYJBxzmZ58zB1Qj8TYbRqEHrdBCexJS0tT3YmTsP1Mo5GxsoG53f9%2B7P5HiOOX41vfzC4VEkGlff7R0Y%2FoATAseEgOLl6sRWlbm6Fd%2BZSyUbjc0W23CAv0h%2F02B8ZsG%2FIHj%2Bw8hvD3vT%2FLNe2tEDlznNpLXMcLeoX2R5aowpR0BV&X-Amz-Signature=5ddf48b9c44b2d6734b101c31ea7296cd4df89d4d44e9772db5187e0a534ea23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

