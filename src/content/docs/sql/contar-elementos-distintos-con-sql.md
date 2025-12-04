---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMWOL7I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSz82%2BJyA%2BYBDwdiBaj2U0gY1%2FrTFRrpf%2FWxMqdvD3SAiBcIIpFjMtm%2F3TwxnYssX5d6HNooH%2BaKLjCUXQIzCCzWyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMSw4liSckNyqwYx1RKtwDumKyfdIOf%2FcQ0hDjtRmcSwD5TNMCNrWUXSCPe2QP1HywrJO4gEdCRyspNx%2BB4ySoltH3iTF5IYtLkmBn%2Fn%2F8tflBbE%2FF70PbY6VJS2gpNqi9T2%2BREV2EPMkvMS4xXjYsvRwauy78VH44lMTY8hopxnPns%2BMluhK3mjFywmsypcAz32fOt43%2FvJFFKQsrwOayAGwl1gykr83EabAT0qG8NInH67EJm6C4e1TlKpTw5pfAlj1qPwFWWF4iMA7Gv3%2B0tId50vWURRjPtYDcPx6qJhV%2FWHv%2BPIhiHXWCHN9Btghpebv%2B6jX1WrlKDJVdSv42iNNXuxqm3jElCoj%2BVxQKB0Br23k48pw0ZaiFK1hdvOw40ExMRouYLPoSzqlnBt39Ha5LA05WtN%2BarFFjDpbF4wpnyUZgrzKXDExSSeV%2BGswlyza%2FL0GkqAhlWzn0e3GMb%2F9hLHtb6BeC3wFkes%2Bo8WUR0BnxFnzZy0V%2B6jPxLBAl7nr8oDOT24yqRUtnEjPtOs0BzPzPszCCfkKswBmFyg0KD3b1cOT5OH9iNyG7K80%2Fwme01Vyp1XkdYpFq9K0AD%2FHYc3RJzQqcCpA%2BCIu9INdgk%2BAcaI7ja2wxUAPllLsi%2FM%2BpuW3QOfLyPuYwydvGyQY6pgFDVZOoaV4f5vLRIz6OmpXZWPpm2rhp2oJQ6Rgba75WliR3lj3VcBcoybJyWtNkrw8DbAerg0%2BnhnfBZWGKgvqRMTepgvzRRegttHroxu8dnvNmVexXwAJrgJcrNQeEPcDt47DyAvMN%2BxrDZGv5kLgqRLy1SgVNTRAsNJgZ1iqIY2gBXHiZ9T2RsFvtjmRDYd%2F1in%2FqCqMCBG2nW36%2BJ6JYd%2FWg5PMv&X-Amz-Signature=6a4f1928d3af2b5b09efd55b82ff48a61489d1fee4566e91d5eb203243ca84e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

