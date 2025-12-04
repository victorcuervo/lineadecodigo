---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OT2JZGM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCUePmkRA3otVHNLaTusTRprnRnKln4zzsGmxv2HpjnKwIgKZEjyiiUcPxiSfUd7RPOqQoK%2B1IiKVmjzcJEcnRd6kwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDG5aVKOcF4zHzCZUvyrcA2N%2BticK1eB9Xv0SoWz5gN0a5vE%2FtpDvMN8yOVfg%2FxuMT4MLeEDGeZMvB6nTQGjMiEdBKH7eda9kv8s9jZJPx4PMSJCukT0DKvnBgrHsawvXI3xthUwLgNe0AuOg1lbLyD3q3trjeVApg0Z2mchdbRcg3NQ98S09aePpchvAwefG7a0NxY1tYxl7IbtqW7rAggBYjyRO8n6kQUIpr1h058gCUX7rNLFNr3aTvJEDuRGF8sLb9lzfWF96G3o7Blli%2Biza6pq3SR5QzDc2qMBLUsGN51n7qTa6UjWappuUrZ9jnoO6JiMLegnGexmC3l8zGXjuoEB62%2Bs7uAT1hm%2Fxvtj86L%2BupzYiTjx5r92j7LFD0QukLJWQObV2T%2BCPSWVrBNX%2BIL3Rk4v9NpBAWWn6zCNnl8nglcM%2FWxgKHXmw7DV2VleMI46gevnrJoz89GBzXNZoSmVrsKUv1Sy1jYO0nc4Nvb0pRfJ2nnqr8WCW6Dqh48IjlQIlvcaEb6Cn856Co2%2FxJ5GzAGjHIuliZlKeWoorjoPireU1NMriU05xWo0hB2NY%2Fv0Do7cMzBxrBfpXQcj0k9cefGYqRkODXrrG3KxbHupS6Q5ln6e6jJceZb0gqBX3k6x3IuXAqlJBMP6hxskGOqUBXgLeaS24ytEJOol%2FSKUQZWza4RR4VuLvQNC4QvVY4mBRXfMu5GWOOFDdHyEG%2FQW2v8PBroAAmnCpPNv0iqJj1JsaysUh7LaTxyrgrA9STLbdItK56YrkW%2F%2Bdpp8mSJAtG2UWhLvdSyQJBZ3nOfAW9qbhFP7%2FAMFimUUU2kXf%2BLjvEUK9fXQ%2BNCN7VtDiuA97r0gA0eCOM5kVaudUHHJh0xwMaS3M&X-Amz-Signature=f633ea9de6a2fcfd84bc9a45780a9e8f4c0f66b9efebd5b3172204cf09542c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

