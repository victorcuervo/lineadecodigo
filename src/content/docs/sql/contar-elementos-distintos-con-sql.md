---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWAFANDC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAKCCecekm4VVKC7m9PD3kTEE6P2jqrk%2BImsxzEXanLCAiBQxz7iBgVoGwkPKBITGI75Prx5qIqDRWf%2FIshE5RFlair%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM32OjF5sjfePj0IqHKtwDZZWVOPF8Ks6VrVRICZeAyy2zQghsauKXnkccCs%2BWkCiBHp%2F8T4t9iCqB9SzksMmT07loaoNNZ4Am5xTUQEcmMiMwLB6nyvFCJ0wTljy38brJNSo3lQgSe7J%2Beog94FnvDFkERT%2Ff6dMtjjyf66twMD9jMG3Ox3fmXj3nwnQH2ZXO5r2m8NeX7cP3a9PGdbn95oUKf7mbBbul5NTsi1PTSn748dHcHw568y8guZYdiC4q6pRCQcr8733Rz3x112OluNRm1xDbTIU2Lev%2FV0i7jlP%2F0nkrQtTsEpGe%2Bv2cVKaylgC9JuPeHpGKqfBdOD8Jbq1dYW2RRDl%2F6kOPy8KMBKSgaP2DFN7R%2Bq4XO7cTC5c7dxY3%2BOVfbMOMfZKdF9N9802s1P5Nh1V3mKnsGffkLFpcDdm0QJ4DxMbLKUkh7h0xw1P2LuGvQH2cdZHo2gj%2BvNHeDhvDjwH4SPzNN9%2BSQKvZ5sp4Zy%2FGr4pidEe6oCRpyHbDGsuga%2FPLeA%2BWnffftjydt0E324HY8DA7CSJbzCsxJ%2BYWeEpE7PFoq6vA1XZI35oOCe0OkbWkrQeYSAImYFdSTgf1ZT2hhEnTF4KLzdWdT15Fc2KrLmRmMv77LbPU5OkpwE1ONiwRjsgwrIPGyQY6pgEhswNgf93sC4RlepyfkYyHAZ5Htjf3MWQ2ZewhRb0e1Z%2FLEnAAmWRO%2BHiU8pPoeo7HVl6EhvBjJ8SSufHOWEcHY4x7cQX2CwYbcL5FhrdetF9MbV%2B1uQWTSZ8Wcft0qT%2BK9gOhPm9ZqXbiutOjIeMiks6aZzhqCqYcj8wRYS34ovmvBfbTz1QFM4KzgNok0MSGpCmgGjh3kjGrkO8PtyRK9EgTfzka&X-Amz-Signature=9fab0c84e2259998d16d74ddd6cef5082e1a05998c5e55671205f15bc4e83a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

