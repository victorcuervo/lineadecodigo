---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFPFTR3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFvwwJygkzaDyF4pib%2FKm9xnRuuZCTdvYlplW6Z2xSgTAiEAv6XZ1wFHPXbWJbVWRe5zMvKWMuPUNrdTB5rJxFU5uJ0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMafIlDqxPktc4odSSrcA2yPNQnbkuGmitJH608LyfEcbcrOnR1Er3%2FDMZYWWS%2FsX3JfmNoCMKcMmz3xKXMJnKn6ZY5g%2FE%2BfiTWIacXOgt8WSjXNwObMNMnJSq3DUhVtgiMqjlfFpPyb1Yq13BYLLwqA%2BvlNNg0UdeiK0fJA7nTm7mLY4PUJd4080%2BVxkNlvDiWdP76I9xD8HVSQsId6NHIXegKZIY15PFir6QxnB94YEle1gbhvHL7Ysib3J%2Fs6%2FuZSknPJ9e5pNI696hId2%2Bbf5WOCaoeU82f7pxQSuHlBRn7gl8x4Ggp2Blcj4B3CiKVw2kRP%2Fz8xGRVfwegjQtCwBOKVMYagRnOp2SoTqKPGMoeLadraugKgYJeSfwMX7db6JBpNP6L3LS4U9tDj2QGCTS9Bhpa2%2BRNQfxczo%2B%2Frr0EhUmnFoNklaEeJM%2BfS0wS1%2BOwpR0F2DXy65bz0xaD6fgq0M8Pyf%2FcDSKLwuKfbqhOYB4ZLcX%2FhTkx7AFcamLzmNloUx8oOJQfRcgq2Y99xzxnnh2B5zdjPg%2FGsQL8K8iVwAY9d6rm%2FLxlYT%2BG6dK2Tf%2Fyaejxb%2FpJr4na5M9Amh1%2BfRl3Ua%2FOuE%2FXPwGAwqO9vuUJESl3rff2uNKKIleGcbovD9euofufGMKK1w8kGOqUB3T8JdNx7DSEOMpMeHpMbP9Xuj1%2FyjsOUuVycbBTGj1%2FFPyFdQnKYse%2FmeAhJ4v5SQV%2FH4QKK%2FaBT5AdNeMDldQoK7sEgKx9i%2FvOfke5JxSnrBzG6%2BMbO%2BctS413bNh1ErYYVp61A8pnZVI07AJ%2F1Q19IOP4wJFECd06kgQIQD0td%2F8T5ibltfDy%2FS0KJfaONX2LV1Z5jPzCTiIM5mTWJ8Aej%2Ff2Y&X-Amz-Signature=988de1ddc73b448ed7c03e5f4761a299ece6b4f5e96f3b6a28b3635667de7ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

