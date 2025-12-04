---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OJND2F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCqpbYDEfFdNt0%2BcwkMHkpJWUmY6Rc0IhcnC4hqxErCjwIhAPlF611aHtN6jG6LWnE7rfOEQfLQE1M2NPrnbQnFn6KdKv8DCEEQABoMNjM3NDIzMTgzODA1Igyi4jiUbVKM8nZUeFAq3APxsh6hTJvSN6HVL7w1f9cU7vVzkalTuQRhyh2qh1%2B1qSWEhNwSHWtoz97Hht7jBbNE3LS1GHf1fj7TYlL62mlNMFYw7Iy9vesvcvxHOmKx%2Bz%2FWxddi3mEeJvS8zD9dJ%2B%2BaRX%2BU7dWHp3VVSXiswED%2BrFDl9TTowyl%2FKWM6ZGURskYaJ92X3opn7NzrVszS5CKktR8M1ifwB6JFNqzwy5AayruNepFe2nVqfh5ls9cL7SL4wn1oLCu%2F%2B21MJ98nHKRBEXQUl8mz4ffkRUoiKFILG3KRqxiouxH3qfHHQ4SjQj5wkk4Q1mPCbxGqfovwvuQS3so0fDpTEaC7fJjGA4BbWGAw2QGhmSDaDYQaEV74ptu%2BmJ9OWEZ879h6AY%2FNpB6fSaP%2BMFE915SO2XKEQDLqr4H4RoP2GQnPT6JUAwVH44n3DP5CnAJ0K%2BSxtv1LCuADReCBasvMWu6WG5JsaBgOHFxxr9UZSBlOKRe%2Bj9OaNqOh2OY829lsTswoNwd2SXwBCHNmodOL1f9uhBBifA0O%2FQSZH5QONBVv2oGP%2BeH9FF%2FvOrKXqPZ1GBZxfHjOIMROiIqy6QmFNv1iShd6U6ir5BHsXvEaPvofjA%2B8P0TTxZNak6uVT5jRgzJRnTC6hcXJBjqkAfTX3VnxAMLnjUorlw9wRIrHigTn0vwDWBTOd%2BPjJfumlENKAMSLF1VX%2FSmq1Hzy9vR3VzLB8oAXSFO0IjRQsmcxUmDDM0ECryujoqChiSL%2Fk%2BHB8DHJCYZPj9bNoSmqH1mCfupjIgCJyMfJJp6tqtYXUadWgaZRltbznyzET5nSF3z0H6C%2Bq%2FN4A48ukHxWHLICPYq7sdlsaer%2BzprYhLMBWJt1&X-Amz-Signature=008caa50d47ecf40db0a6e4cddd57ba8a9c7edd50da65f14563a5335de6831d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

