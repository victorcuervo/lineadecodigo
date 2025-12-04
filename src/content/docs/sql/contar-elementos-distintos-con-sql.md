---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBHKRJZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD%2Bs6hHxpEtNCsf49dpyw3FNjBlhXokcQVPzZtQ4erQyQIhANijCGm8jFW%2FB%2FMFzc3OjbNgQfmZrywe%2FVxUmkLhf9ZAKv8DCDsQABoMNjM3NDIzMTgzODA1Igwbp5WzQyD8o7zoMe8q3AMLlYeuHffYujbmAr3j9YyAwSuNn5N%2FGw59sFyAqNJBMxZeVyrWziTGSweNvFIZQQRDBcZ%2BFvM%2F4%2BPnHftX7a8RVEfAAxOPqH%2BlH9%2Fvk0GNunfoKvaVLMgk7EVBRYR9Jqrt4HohgLO3q1f7zm5H4ooWFV3hhamg2c9Gy527jcaTTxeqVsDyimvPPKvxYCiK0529fU7guQ2mJB9TfuXbi%2Bqpb3OdUnhHWYStYe%2BgQvv9ER7fGbQYktZn9kbGchbZs%2BdOYDM6R33n7W%2BVrgwbCUXq8tg%2FpvZYt1CPSNVwigzo5SB7KXG27q%2BHSrV2TlzIuC0gBQZyHNtwD5aeJmeO870z156xH6UZrKfnF0X08LvbcEgNL5n2gtN3RhTo3nYfoA4moezF%2F%2FIwM3xRDVqNc1lcFlPQh31eaq4ezudgBBe3P5hFT4OCsRsHcmIkr4tzT0NeVWMyEm%2BcsUyeTcF%2BqaWJf23KNS7IAKKCX5aIrfeYdczpxi0mYqdRNtb%2BGa3ii9Gt40ybRK8lMr%2BUG%2Foeyfn7bt2aX2RVF5bMBjjwlCHbQWOBK3Ht%2FzDT1iyuNySQK%2F2U913zLhlN%2BP1qrzglIDpHL0MsZEuPmgC2yOaRJ50ZMi4dO2cU2q5NuV8BkzDv1MPJBjqkARIBIpqwiPiol9Y8jvnka1ur0SZExl8oItq%2BDrB1goNQhxTosQoskkUEJle11Y5Z2cDAM6DfubLN6mKgrEBRRX6CTO10CG2WBJMmGGmCzmQVBwke3i6B4q5RCCHwN5yhh7tmVP%2FxgsaahaQehmt8FjaqTEp6rvXiWGTxosMWQr%2BuDvEDIrYtQZV%2BBkgu3%2FWke5pBIlAzUq05tfFTQ6WSZ53%2FaCNw&X-Amz-Signature=6f4e7df46ec92f39878b83d3f6367902b05a8c7abd6379a177fbd764a4251ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

