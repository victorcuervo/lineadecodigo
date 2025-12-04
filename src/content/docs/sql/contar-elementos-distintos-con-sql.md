---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQEIH7G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCTC0isJ9jlanMZWp%2B%2BpbKSq3Lyp3p7cZ8Rk9AcftuJ9QIgPM%2FPp82VMs7LoD3v78InpYqr4K0tMwPO8%2FVbPh2tA%2FUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGhEc%2B9SHZNkFIaAmyrcA1rq%2Fm6ZtL8s7Sm0JNS%2FmLxlD5tv%2FA3tw%2B3Qzsgs7DB9qfLbNcZn8aGNprdMKMd32oJaD%2BE6VMqY1G0wEEbwddp71%2BhLVFPTkB8Bw7HzXE3bv9Vf5Cw79%2BziEsiihe8tSeIg7Ty8yGtUe5u3ldEujl3cpTaudGvUqD%2F14CYVgWNE4kDVOFAArL7Mo5Vpi9ya6Hjt%2Bnkg%2FvoIvZ65fTGXEHrot6anC%2BA0PlNFoJC4wvMXVnnb8uSfIO0lVEE96m7dfsmX28fr3F5l%2F5XyR0Yv9MetHwL6IRg4c4B%2B5Q7W9X%2FQSoXB8Xyz0sCISFq8DWilPoYjrQaVcLPm1u8R6BBaqoOwAv3C%2B07GWUcOtXjZDXpd3amVRVoy72z40D3cAN0FfjAxqYRgcKKzCFYJ1LTrUdhgnMi5td%2B0ypczWoi4ZfvMCrWmzPM%2FojnnbJyodH8naVvA1Y61epGHL4kFUCCHuDh3O%2BmJ6s2odRxZZnfUuysVj30dSdsRV%2FmsoNa0BeKLxaPON4cfIXne1UDMoM31p%2BenrK9ZsCsOvEcxZvdsZOe54XCCBtMfrujSapbVM2QPqQYHePiPUEfK8rPaxRLOX5MYrbGWHBfg0QLHlyktaAyHygj4SfcrIZ8qA2RqMO3Uw8kGOqUB9tGWyFZ%2BAc8xW4KQMoVltauxEvRD9H%2B6s1I0VqL8UREdL216OO%2FGlz6c29MZt%2FNE0EGCcDyVWZE7u9hvMtJeEKOBn15b7b7sM5QeBiuTCRSGjrfwq7M9keSk%2BhkHgHGSDc9gD%2F0faHBRA7EUgqVWagmbKI5wJ%2Fy%2Bs%2BsYpwC6MGqkBqHrtHG0z%2BlSHSQAScI6sRoVsWMA9xdQvhqtR%2B3cuNxe40xE&X-Amz-Signature=95a0aadc223b3d462dec54dcf60c298201a155d7ec3b5853178d5c434efd29d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

