---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFJMFRK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsqbXRoiOT0NDe9FVX7Q1X9gpMnskuF7LmC%2FHKoD8TsgIhAMBHqtodbkjlCepgL2lgtrN47yiF3M43ay%2F5PzHqblXXKv8DCEoQABoMNjM3NDIzMTgzODA1Igy%2FQGKG8rF%2BH5777WUq3AN3t1Ldb5ri%2Fesvi3S3Zrb1%2Fl4d8dOaCvvceYFYvOCv3s5vG%2BZ7RdlrS6hdIBLRa4xT%2Fpc%2FAN3q5AEAP7X9hiFINkx0vaMEzOZzVjh3jZWfN29MG6ogLllu6e0oV%2FM3XZsIaowrL14tbO6Lyjr9MgoalfavwGYu%2FhQFa3TKP%2FVvKPy%2BxHdlu4vgKg%2Fxk2MpWy6xRXkzaj4L5VJhByp91QR2HxipZCNrg%2FPqu6PTLgZHEmlsgA2CqJ9NUMue0gUuUT2qW4OvsfQ%2F4APXuBNnLyoqEKNPYykY%2FWqg85rjB5Rrjm3CnHHnN13J67O02WMSrysrxOPTrpibPNN%2Fm%2F62hXakblnT1VjVMIeewqePvFWNjdt6RuuKC%2F8AHKIK2xIZZ9OKm1LwJBvHYyeZK3GalsExHppnoQF5tCEkwIer2DiDXICboFSV4FPceyiLPpWtL6oSihhR8PJc11UnjXT9OnN%2BAJP0wvELm4b44OTVizlTVJcmlQ6YWKul92%2FmKmSC5FpK3Z9CKrM%2FeCkVIFbvbGPKrAXBtK9tfNi5QlCrLvMvcrdF%2BmKahAa6ROXEXHs%2Bzo1O3umN54QBopFC%2BHUZJClu%2F%2BtKsHiuiuWC4ptA7AjvQ5Pfl7sIi111lNtiSTCH%2BsbJBjqkAQrDSGneGBE6LTSNEQUScViIA2av%2Btd0LV6u1UhZurw9fR9%2Fy%2F64TawocPQJwr59lMKMqPUGW6972IPV6dTFr2JLd37SEzCTHlzoFG%2Bs%2BJzxyleYzWMO%2BVw7DQr2eLBbj0PL3SgHu0RDUzFfqBYH7VvDEJydR14Hd6eWDJBEbWSQAcLXx7b7HFs1ezoT6oGtbURquB0LkoDZl8D6nOQrEQjvRf83&X-Amz-Signature=e6635c2b359b704eb1d8f6131d3b179d54eb7b15fd1fe17845680c7c8cc9e08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

