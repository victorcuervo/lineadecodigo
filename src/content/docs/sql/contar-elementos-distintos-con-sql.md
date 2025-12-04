---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR2QIWSS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDtA78lJ3T0NZtQEFl7VqcQOcr8pcbfHehHLsCtZQM8gQIhAObVGWRMcbRFEP4058y5uflnk9gjm3%2BVGnqCK89w%2Bf7LKv8DCD4QABoMNjM3NDIzMTgzODA1Igx57nTyBLSO0666x%2FUq3APJU%2FGl5SHCyUmHoR5IvmvogdvlpuJDR2e%2Fw%2F%2B6gJIojL9UsBw5k7nXBBUtNP7iufDKOkNJPDa9UU%2FlU661jDdf1zsmWqeB2rbjQek4eg%2Fk216VF2lUzt39X7sWVwJAruo0sNLyG%2Fvb%2BBcStQoGLzeL1EaxFWzq9n5Sx%2FZkHes60aZdwOZhbI5gvP1jNcvQMSUzfizKrXYFcyvD5uRVTuUnB5KbDimp%2BTJ8z36oQooSRRtMYcWEfDv%2FotvR4LepjgcLo9j5TG9pNrFn%2F6zgDXSc6ce7ZL4c6uSlAxKRdPt4dHwn%2B%2BEK01L8BCOsIkCfHF89nUQKVZgsV3IExA7dxmmLidN%2FLcUq3u1M%2FSxM70sr%2BWwKSGl2juh1%2BNPADbvUeGaPPBje0jnDl4%2Fs7H3JYQOF2uDaMCzqGPzqEF3EH4HrGSgQ7DBz6oAFcvtkx%2FRGaE8D349WfTSqqtuEFx9wAhUAl2Dq5O%2BG8I3f76HdWMw%2FmlayW%2BzyZHpUUvf38tcdUsWwOt8PzxjeQ%2FffuJIBPSDs7%2FBzSYTY8OnFQrZumBIQkNq6B2aIbSyt9QriaXhSIkDLcel9C4dAaqovZWcFOMwiJ1rBAIvPlyEdfOqTkJdVQrfkzhP6nS3RvjkOsjDlrsTJBjqkAQolzlB6hALVXm5bN3aWj%2FAZS1Xxu6Z%2BKyA0x6%2B3MrDELWumQr3IsEMINZrp0QrsPJEMLRJlwsTKaMCFHOaHNRokgHuLT%2BBkv4GK4a98SEBiBzKxrvGeaHySFemWZpZjcot622zolNPNLQvQf8VblgjmbkzTeEsbAIm5VwSrnNzmBm76Z36WHmLpalxoM6DQdN9GKJrVoPkSjmOsh%2BmNjSumajQ%2B&X-Amz-Signature=215f0948d1dd76e3bad1ccc016390a87683868f0fcd1da22ca234473a01c744f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

