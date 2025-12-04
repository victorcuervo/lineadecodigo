---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q3PXHWQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDGunx7ufMvusisigNqxPGvFvIdq806PME8RPoMB5PCgAIgNka0CIDkaHX6EOQXmigub%2BxDRrOJFJcjDw46vbkAg%2FUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGaiNojGWfQFSJW5JCrcA8pDJeoZRN5yG3fXg2LOhXPUen6u0dcglR644tUe9ViBO502RyoEtX9Slt9W1bKBFSuB5iZoNtHBo0iI8U0onUqhaAzc3%2F0vSw%2FHIsG4ceWRaNdgy8XIXhrZ4%2F42sYfFTgB3mk1GIEsDl%2FVUfxCJ5TtTvCx2%2F%2BPiNAm1C%2B90xyeIykfa1iVUhXt%2BJCMqa%2FQRhlTSrmub9TPSfVlxet4FT23e8xNXtmGeHGSkyeg500AEhx7r9bumUZKND%2BnA%2Bkko0WP9sdjoedTBl09rkbOLrKCe2W3A0nwaDy9jWhfDoOYU5AK9I%2BjaJE%2BZh1nmaRH8X2d%2BpaaS66qtA33urN%2B%2FZx0gamMN0gCYKVxp446InloeXqNoqkyoFbKU8uHaImlKM1SznB8uyMA6x41gO5F7RYA79mxUWQwKSwSJvMeBUy4LJNsZuYsmf7bduMkCTpIpOqCdz2XfrhTlhCahYM%2BnXqWvNaniRhy9%2F%2FMm%2Fdts9fuu0501Pv1zmeiW4aovucBvXsXdqg8vJ%2FgYEkG%2BdzFNZXJp9lFKwZq35H9lR%2BAYEdTgtHXXhjRs5VcgUh3gBgoSWDH2l8IA3%2FJoBd26cHilnJbOU3rtj7kBTsFuvogG9si1FH7YF5ASbUQx85giMOatxMkGOqUBRvmjc2P6JQEuDUSLsS2oK4sXr0nTbLO2rSt12ORLNJaJHjKpWLrq%2BVmKoRS5ozkUtBKL5ZPRtPB6C3VvWCsqGxZmTCq8QO3QoA%2F44b9Gt3KfonMrVCb4r0ea8MoEU6%2BhZQmtrgnYA6CAiuCFbFUdfAEIfF2Iyc2m12E0Sjt0fJ9jqe3O3ucxg5nr1EWJwFFdgDEj4%2BmZ6X1F7bp8rltwZZ6vMSlT&X-Amz-Signature=a62f626ade7dcb3561ac7e6e74a0676b1b6f3ef18501a05cc7e124cc16cc6e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

