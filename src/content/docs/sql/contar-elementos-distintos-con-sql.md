---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNSHUK5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBh1iCO6iLeWF0BA%2FU7q0LcI6pr54iY3AyXqTflbwYv0AiBL7Zsbxm4STajIlS8rE8761hNub9ycuY%2FxwtB6jDGMNSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUWAV%2BUxFuagr3LyEKtwDPFQIHE%2FamUEK8lZ0cE6RUUjMH2DTVR9w%2FNQ8ldk08hHSMLoLcnSm8YpMh6eNL%2BV3XIMV0QD9DQJxQtty2%2FJGBmcFGKQDeJ55olBBhzDdjtS1EDPUZImLOGsEvk5xlyUHy7NTFqTZ%2B3y8r8OCE1aIZmZnO%2FNUNZDKb5isMPVgNdAVu3BcpcdatGzzyI6awGF5fu7GcCuVyZTywhTXa0zbxE0QZHuiIfBNjmHD91NYGKbRJgxVNlGyYc5HrmIc2nJCWPILJhn54g1tmwe7zEB3i%2BpPOBxfPdY0JOKB%2BzCEdUVSAl6jbDuFQ3WZFn%2BsYngq8R7%2B1YFhBUStzi3t4yePtJpqvJllxhaPEOE4WjaQ7kPIgUGOHHM7p%2BQHJyMnIv%2FnthMr87bIOSRm%2B4IPIi%2BBOpUKmChv%2BXtxIF72sdnoCUGtXmiXJy5LeOSVYH0JojMWKWGd9VrtgD4erOrj%2F0458fzYxS5WVVywZ6dz3e8L8r2C5WgA2pMMSPMGefshVV8Mv3vU%2FMjSxzQGzqtfFtnMNoi2bNBZwAn4KkX3nw4YBi3m4ZfSZc8Gy9ZswVih5PUoIGBnpusg8PSRA1sKd%2BsuJlTIX8tPC9eLC8tQrXHZ1gp4rTkbdCyucfTEaK8wvMnFyQY6pgEiiNf2YpfoOq3uEuIaeG%2B56J394KHngmeOSQiGUZElYwuENFyQFjEDpZiJl6kIyeJ2gRcOHt9EzlzMbWRi8HPp%2BpKCH953t6%2FE3r9B801oHMGi83RY0bK92MDLIyH3Qnnrwsj4W0MeBcYX%2BWuKuaD%2Bf%2FpLwh3B6He1ifapsr47Nm69DKRY7j2NR0mhij9hCJWf4eTQB5Ch6wbkvUQWtiLjdkDwJmdo&X-Amz-Signature=483b1d83292e42e2b98e0724da95a0fbe6c46a388c46ba83491d675d8e227b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

