---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5CNIXPF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHWw59rPLQ5T9DIpkqoLn2DJbVZH1zpmwrJ4t4G6YqscAiA5W2%2B%2F5%2FBw5ZppXobESxC6V6EL5BvD0ef%2BpELSFdWPWyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMfU%2FdQNoCdXZsw0cKKtwDzjeVEgHd29Fr44667qhHzebol2ZUgIfZGCX3%2FDi9AYkdRJhruB%2F7Rgd%2BgSSC1iffxNkrK56H%2F8m0ebvGzi4QdAGZgEhFeIT1ooWdMoyPbmtRwKQ2jT87z5VL12PidJUqhxLDRyOgplt%2BJynTt5jtEmrnpk%2F68%2BZOlHjvIuwFUBA1khNXqvyguGxHrtRO%2FFwwxgmhnd%2FF1u%2FEv8TKx%2BvylGkFVVqUrstec0em6nK8r67uBy7Y2OqxNaKzv04wvL0tRTJgNi19kSOOx6pXPLJgCPjf7Uaw29dm5JfMqe54K8ic8ugblnpYqg8seHouJbNrHS%2BwDthJ%2BTh6wtyP72kiFq1rUyiJD1gnHq81ZJyhvogR%2BFym5w8gVaJYSqqoT6PssAebmnSfp09cImpYtto9pX67O60DV3dOdtL4w8MI2g2Mnapzy8oyDP925UGUp5rIumhJBgBcvq%2BcSDTJ7LCEb8VfdbptXTngsw0AGWc8xrA7xQhhqaJXmgAAo37ytxEXHFgFMoSIho%2FYCm9KTruiqG0zJBRi7hQxAHuiaHcv2KuCxZI36YdzK9M9IR%2BKr6ghQnkD9OvftUhm3UUfbGFlkxF66CCKkHCVN8PLLDyttbyEWSZ0xwEv9scGtVAwjrTDyQY6pgG%2FmaesK5zNoStZoB%2FaLUgVpoxEsNs55JLMi5Bo%2BsiWZTPaNEVSVYD5Ct9qL%2FwVySaw9LKPgoGZrQYBlU%2FLDbCDbMvBvePn8DbHkb8L3oYxX%2FbiWX1BYjV4FNGhAEi54VJpLF1YaePesPg6qZTvjetHCtuTQA1N%2FIKWyPlmCyRMTWZTWBLKu3e%2B2s%2Bvv2Umg6%2BdgkDgG61jjYptah6k0rl53m2itiXB&X-Amz-Signature=ef857bc2b7733e16af5a5a3eed313ea42fe12342ff38c8b05823ef11e54c8b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

