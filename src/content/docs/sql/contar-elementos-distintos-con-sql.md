---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXYI45F3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDloYCXz6ueOh%2BjWBIjJ2g8HzR8q3v1y6ZRPw0XFZ%2BEgAIgQG51o0xkWFZzjLE4W6xhbIKEOebtySMRzgA3pC3Cc%2FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDF60kb7AauYaV7QCsCrcAxqlFmNJ3gxcdVb0B7xyeuNtLgZWP%2BEQAuUZcLWtsaFHmiE8uCjzpdjIUAh24kJtDH6meHqatQtUPTYat3v2ELI51eYdrfLxtDPW4BipNWrrI2T93X387u9hYAtBCY1Gh0pYKvv0hMosHFAxwCfA4FSXXCH%2B1ghwH%2BYFJ9LocUqJ%2BA5VjYAoXVtVOBjYw7eazljiW0%2Boq0yO7EFIpozhpb6dnVdZt6BrHA5oubFt0bZxE5YIoTcqjSvqwlVOV%2FTrH43Fdy8C2Ap5FTxjD3hNNEu193y8TlqpPaL2JJaUiArLzJdNXkSKaMdovslPxW7QUzfVDXsQm9uXHUISP3aaX%2FTYq5qG0eRt%2FFekj1565kz9%2BJ7yqgGMOtr0S4Va2vnZs4RgyEUVQJsJTW3JzZ0OCI0%2F3n9HYJvY1ntdVahbXekif50XgVa34BlvLP3GYQxT1QiatPkY6xS0nwIKMQ4yptgwto%2BNwGAqjZpXVo%2FoueIrOpdPR6AgKr3UNiA%2FCWcOlut3sNZCqrJzxqddOi5COShbEkcbEchLbocS8ge7mT4oiXBuVj9B6dIijpGdxj%2FZnbhOp%2FwZ8%2BkjiUaZygN%2Bpg9WS4YJXSp5MR5pVWminMTTES8HLK4C741s0fN7MK2DxskGOqUB7nP4nzzfOX7sEpaN6%2FB7f1eUYj%2ByFgTyk7zpKVqaDXX%2Fyy6kNF0VKQdwEh6AiMRdcvn%2F4yHWUZNPyFCPmMNfB7a%2FKUCGT9FvdvZkRpup8zlLXl5Vh9WSv2N%2BmH9JzVrAUHCfNBSaTISc1XcuhxW2JBjB2p88ehugOia5vR6AIF%2BZ9G3krsPLek4yLu4basfTiv4zPOcN4m4gtZfwgyrLUnpLXMKP&X-Amz-Signature=8e72d459e37fef50e8773de277516d468676c19bd73fd36683c4a331ec5f994f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

