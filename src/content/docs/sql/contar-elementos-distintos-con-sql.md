---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4WTXS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgd0IX%2FlmnZLbEYCt%2BnV8vagN2B2FNzbmlL9919xUGNgIhAKVtbyDl6k49GiuIdB0hsPbOw1SVybXNXeT5QyVBJ5vGKv8DCEoQABoMNjM3NDIzMTgzODA1Igy6qSgkQGUPtMOo%2Bk4q3APBKvs5YUxvKURytEiJv4JQ%2FQ8KH0wLGYE1S999Z3Y5aAu0XfQ7cEUmmiXIk95lfP5WrXVfF11yZfTvz3pVW7%2Fceakjj9%2BtueAd9E%2FIVdslWufQZc643YepGR7oZT2q08DaeexJn%2BNAWfqleWuZ28KAyu0PfYmymwDxkyTuaAAHk9Lbmqlc8BSylGVBBlqwDSLPjsx7Do1tqNWFd2S0zEa33d6oq7bsSuBIFjdcj%2FFtWsHYO6V25AWxJNbNvlLNBtgF9aZVmIRt%2Fzz0iirA2fKERgm69%2BI0sZ15V%2BXiAelKDGV23%2BThKiZanPMeDr3jglfKCiGcnIb5u450xu%2BoYHz7kgDM0LkrdK4JLHaV%2B0yFtbRnG%2Fq9ZdYjmozMA54V7It68rwbhZhLEIe9BhMF9%2BGjDybskq%2FyzpZhJyVQF3065aZO9BlzrqgPaU80Nzy8kdIXmehwqbquhFhSEfd0PWi%2BZkwdLC9H3%2FwLC75rHlQ%2BtUTFN954bJwVTe84fqkYV9R%2BjBrK8wAlbIFRUQ4hSMIs0vAGHS7uPFrKwxQQ54h0KnG168%2BlBM%2BfqRv7I3Nh4arvEpNUN%2FVXbwpmyq0DzFP%2FuJlmo7xqquPRRXjprae5yguT5iHGdlD929Fo6jDC%2BsbJBjqkATDrcge7ep%2B%2BX9n5p1Qb%2Fno%2Fmefj4DLkQLWKLiIReQtzEC8pDE4urx7rDmuhp3izG9rePfH95sBPwUOqyVyFSVwweu2i3EFTlpIF6kX9dXsy0OKnQ%2BzZ6F2VQrtINGF94z%2Bc3%2Fn0QNY9jid%2Bx22y0bKq%2Bg8mRfnWPEGDW5L79TFcZJinDXL7myUsZmH7yvsmMcz7ZUMPdyyNDJ6chObV7nLLJQCn&X-Amz-Signature=f387188587bdd9480ce1b37cc6d2cfd267de8feb4ca5fc850a8705834c278c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

