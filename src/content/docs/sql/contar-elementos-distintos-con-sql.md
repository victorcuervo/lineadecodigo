---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMAWHNDX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGyQKo94Epfksg0jSW4QXKdq%2BD63%2BvlYNEr5%2BnZVb4FeAiAWdIdQy3vKQSRNxKY7RbJ4wKkXxeEgYcBCZaXQLHl4Jir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM5W%2BgcV%2F9K33Git5YKtwDCHSd%2Bp9Guen3aN9bwdW1iV3KZ%2F2AYlv2lZtix8sWj5Y3uZ6u%2FezZ%2F67vGdJmzWPE9215yh2uhkiXbXYbeR3wZ1PrzBO7kCxXwNcgU99NfFPARXvV2BKhHyJDq72cY39S32Cj5e4JgC%2FKyx33zu2sIp5TjW5RHEaEe%2BnbIBcSWZYl9igrc6NqedaYijOhv0NMT04eBWUz5qa6ggqn7BK7ZZYNsEFgnwfiTSee0rl4h0Ke%2B9BB2YLLFxrhBBnw6euyAC6g9f%2FFzZkbbTUqa3ORmGxMfoDmUxNhDRcz7M7ZEmkkQDvfRMcSVkLt3p577v4qJyqWcuu6uTUiD9OkxTWpLxx6aftgB0ok7B7Y3QN%2BsFdpt8Em6SLp8gOwQP%2BUf5TA3ENssWu1WyL8CR05%2FTN31O0Q7IIvYFl2GsXgdAoZBSo17Zehb8D9NcMhTO5AtlFhNrKXc6SC%2BChKGRk%2FJDBVC30xmnEX8uhnDA7TZZJ%2FoD8yodrWcB7FSb%2FND%2FzUohP%2B29evl3ApxiOYkh%2FpPiVzWsw599ETOiuoO9i8MUgPajKf8GEb8h5Y0iRqUHM8O15SJnujozPUyU599ttx58UAR3sXM0QomCRoVM6TMuK8avNAhPWJ0wInjLAIkQQw8YXFyQY6pgFxHmgIWwk7c9eXcJJRkI2MH2dw3JnVKHLrVVsDS4lGvAgTH4OAs2gMuthzW0jy3enOx7VaGtI07NAVl8XvOk7%2BwMIxC6R5AZkW9l4oEX8Tn6k5vYhjAzEZ6tZQFLchrEEkxjwc81Fcfep7bdT%2B8J79xosLMFRW0j1hcvNhm0uFn8n7oz0bDtjG6ObvqIBzcGgIpYdRkT7YQwlOwDjSWNu32ry24wwe&X-Amz-Signature=357d712a2fe9dfa8af5078cd50b700d93274c1674040aab2325d55362406564d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

