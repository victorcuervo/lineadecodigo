---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMD46MR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACl%2BVA7XomeF%2BhKeNiDYa%2BCgY5o0ZzktsY4CpjR4Om8AiBwWXM%2FGm7bUQYaCTx0Ngze80jAxrKfdr3Kz%2F1Ofhc6MCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMgjuupHRqLkP9kFsRKtwDBee3J%2FKKGNfdbXC4HiFTcV5RK9J32oY5Z5YzqV3IzofMnL3iTECoCNqe6raTmXTAKbGiRZOdk5bxeGWibymh5wdacVSaSPho0A9oQLY%2B7NroWeiUAxFvCmM2hRmjFUCYvpgt%2FnIqF9HzcLyZ%2BoFutcuPGaRDNwybO3CgvZu7bKJsALZtGVr4nWAPzvL0r%2BUWYgJ%2FIapV5NbNVyA4HRRGcvYcfJqAB4aElPg9CooJIQ2YIseUQvfjHJQD9p6KQ9T3jdSv9Gq8DHWiSSXRjQb61D%2FH99ojlSAwmdpOaoSIqsZvyMm1Znflc26oYx%2F5TLO%2FuDsxfOWCSKopQEvf0mdRJ3La0DR6QMszVstoQI1%2BULuJVZUb40XkKzx1R7mzYucodLXj0fg9GZiZgAmHNC%2BbNPqcf%2BPIl9pMU%2BkgLdpNK38gBPPx%2BMNuZ6RjNf%2FiKt%2Btu%2F6q%2FQ4h2x6LEu1Go412bpcwb7kU224DhMFavlL%2F0%2BYs%2BqTWYQ2Q5hGhb0qNdK7TYJMoR0efqMoiHiqWX6zufDqleF9GG%2BU3jGTtS4MbpXZ0okckijgDwvPWv%2BhQYmPzyQFs3ll72RL3aRdF%2Bs5LTMc3VhHyWDgs70y4ygEOkkqQqENBXte5r8hbYKkwodzGyQY6pgGNOCUyExAq%2FGSxNeLkCGd31TanvdMYpuWJ%2FEnufg62ON1QJNDRJH%2BFR%2BmuD2mBa8gjjCu7G%2BzyHJkyBzPTzKtQ%2BiH%2BgWaJSZrz2OXPQqj4wSWghKqDRXBaKYIP%2BDrfaj%2B3zFwjnMvij6lPKCP7e8Fa1tBF3ZuLDBWszbPg1bi9JplWKPW2xF0GATCpl1qRbn5BHoAwLMVPRSyDgz%2Fgd%2BR6XRQhMDYl&X-Amz-Signature=9bed405c4cf0d3c76ebeacf14b9df934b7072e1565831e781e03b7ef9073443b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

