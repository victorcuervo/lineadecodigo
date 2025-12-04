---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7QKSYBE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxAIsitmEpyZfN2Q%2B8Ag%2F9iZbp6qzNgcbI4b9IfmYs1AIhAJrdC%2BD77Dz%2BkPMJHYwEk18ghU9WJ0WfOSiYEJnInRyhKv8DCEkQABoMNjM3NDIzMTgzODA1Igz3aWfkOiduSo7lFokq3ANZyZzwrrNoojnXN6CQdUCyBaKkZtcVOHh2rqYmRGXTQ0daUgEwsNvh%2FN9tsbUq9atEvnM4lW6XfRqE9Dl%2FyE2v4cRQmYSiofMnC49nJSOXvzzZR2HISFa%2FKd%2FBq31sdGiYDUzLT%2FAN%2BAUX2wc1Q7erTEbmuf8qexSld7qAsr8rynFatATEvR8cYVrxZlQ%2FnpokkzH0EgK20ORlCL2eZEKgPJQur%2BKPG36GguKq3SwwsBURGRJb%2BdTshI4hzSoMhfJfq%2BM3RXy5JWlzB4DNUUjt%2Fx1kYQD5Ee8b%2B9FpXhG7ZWq3yBtcjO9rJGh0wJvDuCFbKS%2FQVKC8Z%2FfjDDweJ2KESjopOVmlhPgvvwgB96Ldr%2FZz1uKWM9cv8RlZifTT8gjdpbHqgRucyeUwNpXW7O30cwUwdfBiVtTGzsuABtTbiykGSDcsFx23EcNn%2BIe6uzIII2ENJ3FF8evqj6hIaQeVg9h9bCJ1cv7KGODobiicw3PrdDhY0JDpxVUyPPKDJtTdzb5x69zGH4vl%2FfKOmW3joCmH%2FKLYqxR7%2FGCivi%2FgPKnWaFsmAWz4lm4nY%2BMG44Fm9MVvDxxeyz2hsSbb8N4kzEYBMbp5iqgo7zxdRu%2BcD%2B%2FgGbA49Sz3VNAqlTDo28bJBjqkAUxxpMD7QWep3UOIX927DGnY1Hhu7YC1k8lL9DiEVwiGUVqZrLciIs0MOrWyFU8txlmmJSE34xNPrNfD0Auhb0sg9Bb2BCb3t%2FSumWg7MjPds0F4667aSCQo%2B9uSmw3x%2FI358XdP9EWjEiWS9cG57OoLDmbwGwVAR3Lz6iSiFp4L%2BY%2BB9hKZVv7s%2BWOwRmGytEFhcnAqOGS3n%2BVnvqH6Sdh4PKHe&X-Amz-Signature=14980ebcf415514e3062deada824334f8f50dae4a98e5116a64f5f1158940dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

