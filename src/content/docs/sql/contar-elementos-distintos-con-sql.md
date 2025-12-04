---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNPMQUQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBdiIyTr3dxj%2BtzK%2FhyC5FQZQIoIub39MqZ%2ByV56g2SAiB%2FCcfiuvywYHyCEbuMwiSeYp6ibgkO1WD6xiN9157tCCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMGLSbevnjtQjhbckVKtwDMVuhAatiXAiuLCRq%2F49Flzjl44KPZuLtJxdDR%2Bu4OhpAJwKjPohqog5NUhkp8ESghQgX5J9HB4XfX9III3V5kyimOyVYzkMootKaNzBipgRTCUES%2B3yK92r2HhADMEY%2F8%2B%2F0zS4%2Fp1bdbCXyXQS4cZa70AAR8l5Wel6P0ju05zsVBDg%2BRC9qcDw0Y0YJIIa6BenhHvdiCmdkWuJglyppw1mksJYpX17OYWM35c7JOcx2P4DrYQ23my4ND7iOWd0OujwQtZXRLv9eucxokN1PHDGLTTo%2BGPKAHibGKz3S%2F9r1WlglYBDBOwt068g5dtdTgrt3ZYfLYmASw9ghc9DXBCPXUZAxomC07Q2tY9dv5jPPRb4h%2BS6lw80nNisGe0bQUWe%2Bf0mj52Rqfq2B6eWjJkVBonVafV%2B9aoT38ov3ej7eyFZlnfD%2BWZW9BrA%2FBffYNTCK565Hf%2BDUa0pEYrJNDEvfFXBXpX92lycmrH6%2BzhMr0oM8KheNtzPSrX%2BEKkrTtP33BJCcqXEy5ydf5xPEnbE6lqJPKGRH6mr0mn%2BZ9od2t7VaTTgczPPNk2gB5RP2CNCCer3LCEinHSdRUZ0TnvBurHiuA%2FFMqGnBJ%2BOcIC0Cf%2BKtHYc885bAXp0wtdzGyQY6pgGgEidDNMtw0FvBhnlB1Hcnd95BeaWLWfRh3BBg9VYiDCj2mkjIL9zQnOobmBT%2F2yMhGqxXZVjr9zm8bT4ZJZvWn1rCwRZbS14rdHyHKWZwEbfbhi1fTEb0HmCYMYAZV%2BzP52wXC2TUqyH6KNFMCLXHGXQCTJdVareiuBu8cZKZvPaXvhVeaiysXzJsyxEs3bija5vWq0g3%2BU74jhSpgzKiZRQWqaJF&X-Amz-Signature=0d04c85c64472676f090ca5681ecf6f15738c6706a025364b29de48657d2cefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

