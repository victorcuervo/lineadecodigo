---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HPIFAX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCT7BU5bXnu0qFEh%2BlFr1gcHNgZQ1mAkZD64dhO%2FPTZ1gIhANfedEODJ%2F7bMl4fjfYrbokghLnRKw7xBVFJ4d1jc65RKv8DCD4QABoMNjM3NDIzMTgzODA1IgweojQoTu7RJyPnuJsq3AM%2FbYAgmifluC0Cevd4uNq0VAIpqg%2BP2ylmTFj9PZ4VugKLGmQ1%2FBV7nKipCeNJZoeL7e5qGxc3wE2vzCwrPHUebdfaglsJyu9Na2oEaI%2FtEb0zWjgD%2FKcFQE3%2B1gEgzR9YiZEv%2B93mbLW3eo9HAPVhQsuGrTjzWDbt%2BJIry4dp6Zmv4jwRpU0oWnSIq5%2Bdt%2FnkKi%2FFNZMQOVTFDZjO8k1kji%2F8zTfPRMK5QW9dSZ1HXPOldNUz2t6ppI8CeW2%2FXuIBt2c1Wtc63wJ5NuP4F%2BDBprnSYUvIw%2FRhMUY%2Fp2JK6yHVS1L3rMlKz4cnojMVAOW8aT%2BXzJXWVEAVLYrj5zmR2RsSTxWV9n%2FBs%2FQUgpHwJW2BQ%2BMfpCj79f%2BFCpMzmfUtPbRB%2BcFvoeUKH%2BOeDgM27VYOtqUOEbdYMN5EJDlVzkq2hIzIHgBLB%2BGOSt5nZlFwN6Et8egDgrVuA5sjCWt8rgRo2P1vrcIA6mhWfMCHaFGlYCJZPWJ0zOkt0p9xGb3SBmR6jBqjDKmvinGNtw0AzX46Lcy4uhuWiaynqsyXRPz1f7Xyk9cuddIReqmn1%2FxFBDe%2BsX8C%2BjjyAWxQEDSd%2FUdISZJeoO3SIClhZoi%2FSFjXdN12tCUKvApg4DD9rcTJBjqkAePYfEBtwd1rHG6iZVkGQGLcPRMKVdihAo262tTHiLYr%2FEDHlLX0zc7oXuE%2BMcfgWx0LT8Lf1AVd%2BnqHhDNZuSc9FTOM%2BnlVHAkpcogbvl4de8VxRzQ6blzLzBcHz1%2FEM%2BfyTd0VmDLEa%2B%2FOHaCtaDESTXz9BhcMSjj1%2BdWjscGfBRIQDW5VWda5phLEx8oKi8iZD9hA8eBiIdJH4rhx28yJdmE8&X-Amz-Signature=c55dbf03d63004b549f20b61ba2274cd424ce9fc9a0c9f64988bd5ac606c062e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

