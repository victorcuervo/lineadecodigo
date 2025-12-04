---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSB3P6AC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIE0Quitmbi6U90rl7AdOt81j91%2BpopqmOzgBMyQa%2BGp2AiA9%2BZQnKb1%2F8dfwkheqZj3V41eHm98uonHe8iuHr4pztyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMGfHzaEK1J%2FwidEdrKtwDKyqwqUeHOOzURb%2FaplxUcAxoZR2rTUtbCGABHy8QmGwJ046TSzdeP3doec17HxSnYVUvbRJx224XkKsKN9d8N6S4YJnvBIYF1rVz8wA3Ei8fgcUrBNcyOxG%2BHQwP6CpANRKeDyG7i1vgO3eJEyIS5P3tKlzJbT3kGZM0j2S4%2B0vuPWuHCpCSwoizF1ANgBMfd47Y%2BK%2Bwef%2B1TvzUy3BZVDDqjI9uwkNg43eBGKKiXHKNLxBOAHK%2BLZPVShYwPc9Y05SsmYyo%2BTEcfbqTLymyj1MY7AQApTmkV0xhYailnKj%2FsYSz6IowV%2Fu1qYNMfJnXkUCHXRloiPhqacCKX28BeZIqfqkjP4%2FZRSy884oxuXjQ93puWUgmLUa2rmKk2K%2Bpk2A1TzAw2NDCpOD25l7oQYQd54ziJJr8PyKQUCARNZC0S0HoVednxN4CzMqhyTE3WK1M7bCtINlSirXs4WX5XTYr8Ah0G6K2a4sYC2LvQ0i2gNulJHHYdVrJDG30axujtyY%2FXBVm6pJxYYPvtN0kzComNA3aAKJgcHZHUJ6NR6Qaf2RszP%2B1B6c9JmUHNE%2BSq71r8uVN8B7CPsIl0X2h5FK%2BQLLikN0Hb8GAch8bL0RL305E5t%2BiTxzM998wnJXDyQY6pgEZMNWBxR7qxIqeqbrShcPgAD96uRrt9BfV7Lcg7j7xfaoYLwYi4v57O8muEZwpDxyVGGZM24gxTXMKXxJg2muwcjhsH8GmbUOGp23fAq2bOfeUADg0FkeSA7OxkrfBVBgdiSTg7IkglH%2FRP%2B9McOsvrjeO6f%2B9mLXE5DbbVzCFSWj2%2BF7wule%2FeXWvMOcRcO1Vvqfj3te%2By3OXM8p%2FdL7kk0Gak22C&X-Amz-Signature=62689d0a45e4e04c428aaa7abb77658297602e274585870139af4b939ecb1278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

