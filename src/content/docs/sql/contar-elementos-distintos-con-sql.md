---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JJQFW3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDgrwvVFiWraxycq%2BufeJ1VsaWHHlewBM4qgPiQYXv3WgIhAIhooIzE%2F43ApAjmxqos6yr7tnhz5N1%2B85428%2B%2F%2BkHd7Kv8DCDwQABoMNjM3NDIzMTgzODA1Igzr58vm51s76K5zL%2F8q3AOKQ1P%2F3vipJZyWzozgME126z363kfIyIuF3POkRmRrY4ckjGGpoGy6bcr%2BZB%2F59OxAOMDZ1uCIzJADzxwuCiVZrIwLCqJklxiUm9LRh3gIFpAuVcyJ1yk2rubMjSMcMxtCcqMO%2FeiFgGNqcMVuX8D6rIX2D97Di9zlBp4vAmetud%2BKVcwGIKM5SmAmYT%2BUrzGoT5LdB29feK3Ss%2BxwLURbe7TFEXy3EPTCbdhf6nfcWFkvbPQuzh101ixlBDDADECW3oDzTNJAEQ8mHPtt3h9XQ04JD2qpRJcDoZ0T8xaUjpXRjfNxFpzNUrdxp44e2l8wvSBdKXMnOtbec2EOOnQPUE5GMRwPThaMfbxZW0fD79Sf%2FsAgA1tqvZmkbzWE%2BpVQlbVgdyM2XeuVtAzbBlJ0AzZREOtGavwRdUL%2Fdu%2Bth1gxdXrNFW%2FAgePfzZPy1mTLbiT4u8eDDBwppzK94jAcZLzTPvsyK63cC%2FvfyF33dqRdNA9t2F7wHt9PDPQk887N8R2p36aV45C6xKnK5kSZUhtMmAj8FSVLVZAfsFdk37jvugSDqcap0qFabwGMVaJcMomv3VdCCLPlXLSBxh%2FLqT3AhQz8ZKK2tIVYJ33ODGRVGt9qnSaLs1CDnjDH88PJBjqkAayi0DLAdncSfJm8Sw0EkayOliVopjRkVWeEXpbic7LWC%2BVxDPCli4yJ9uBNqb0wVHshq10IuCJgB7cWv6zpzzaRSwjO4snWmfrTWzIKqXYwk1MiBkH%2BVcgZAKHykuw0LPKLiYRszlSj0oyJ%2BpjIMPLgADjNVtdLv%2Flyctugbn1YjAGA%2FNHGt9xg14WFPuFD0Pwk33X8Wgpre8Pb9tJnf3XzcNC%2F&X-Amz-Signature=36a8febcad65fa90f79f9429eb8514abad0dd664f9fc095dd379221e8c04889c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

