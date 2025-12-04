---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74WKDGM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAldZc64LZMfYgxiUfz%2FSGmS2sLgn07prM2PkaRVDbmlAiEAl%2FyPRrbfCAigQPxHKtPAqo1ESOkx%2FL0lU9q2eFPNS2Iq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNqQR3mfDA7%2Fy4JPaCrcA5Jlk4GJQLgPpOMlo6PfMxVySoZBEhn6XeMwvx0Qjy8kB5DTnr7ZSg8kVj4FCKCiNR262sa1uc8UJ4XFEqW64O%2BmSqYZ8EVFaeErB1zJNehnuUAn4nBxTdOIO8zUttW2K6cBNyjSEvjLH7FHULOCBjagESnVhEu02iMlhcwsvpVZ%2F6W4grj%2B1Tv3D1I24nnR9OE3fma%2F2M0KMaGjcZ17D2yZ7Z31qhYGUYCfd2MJKiDDWtvEsKRhAEjVjXQrqSUNnuFIhBo6KEVM%2BBotxGRq%2BZutCCoePOp9hIY88hcUB9KbacAc6C16I8MF0lcdcCe8Vhk2c7O6hIuH7rOB83HHvrzXEv2mc1CZhCbztv9HShgM8sAuK9DqL7PNdLM9B821Q2kCxHmxemouN%2BUQ%2Fqm3MLliqS25YSfSWVtqEyk3U8bKzlLrfbB7dvLISdcwX6gAq%2F9lketfktO3qL1p9uV5uJNbWfOslX9WnFI40%2BSCc1hkian1TDQZbNkXYUQzD7Gfl3IMeYhKfcMSGiWmcwUq4AvOEAckgwuZz0PWTA5oG8qWQaCw3vKRZ9fwy9%2BlssSBO315om4HNTAmVYQA8YEcAxZw6v8cOmYpgIDkqEzdmeNuv9b34%2FljlPV3Gb%2BOMI2RxMkGOqUBTdUXTVkVzh3Xq61%2FHgK4ZwkEqygJyLyz%2FMLWm70KSKYfpV%2Fp3C%2Bm9qyFUwcFKOYh8%2BYxHYg2rQWNbvSoHZWh0ggflVa2O4e3qdNw3%2B67FW6chhpS2VMWhDfet2qE4lKZnrSc93BvC8ITHFChKTJgCVhZ1QXlEq0xBV5BtxmfY4LpbiexQVx2oPeAdEVYOwjEFVyZeRjQraGQGPyLXNwL86STaOF2&X-Amz-Signature=0002953bd39775bc07c5a3c2ee649d2b47aa25d2e37b45ae6ce9f990364cd303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

