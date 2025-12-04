---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHS2Q56W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDx8owKSc3iUiXtaq3rM6TBBG22xd7C7OqhYcuWOrtM8AIhALfNakRvfqKVSYu5ntRspK9Gp6KXvanfrkwLI%2BCiJn7dKv8DCDsQABoMNjM3NDIzMTgzODA1IgyNLsrOo%2FvN5XEEf3Uq3AOmygXRjUC5QfqGW9OaXGi8UMXXNMJcVkHVzdUV1ZsFlDzNKjn1GAOxTStVMfAL4%2FihoVrDb33ScSY9767RiSvsujbDX4meWSO%2FYxSnGBVTniQVJZNAhKLFn00g4M%2FQQFSy3eHV62BfTN734cBJ9pvocXiJeB4XpeUqR8DYNZ0R56UFiuqNRTLSn0Nzhvf34O4X96DEBcp4Z4GoWHIp3zu5vNTa9sW%2FHpqiG402TZGl1ZwZlwKYgiChZ5IxBtOgGSYPlknluILb5zn0Bse73VheZhlUUYijHTftdGyIc5Gb0YvxZThAfBGuWwETu8mp1dwHX9rJua9QjMYvVy6UVoEygxMotaDDtKK9OtpEiYaKYt%2F3IswiD1ShsMYocU2N2N9%2FUKbx7u12qMJ4DJypz0mzA0buIGfALr9fxynAdTN5KZIDrTTYnzG8uMSITjrZSouZp9RgNxEwWbF3tjFcpr%2FIW16eKGN0IhgGFWSnoMwspEqOSPXLDEfxgilvDReSQ1OiYqSmnGzguY2BxCj65DXaLr%2BrwHfMAepMDxgLSHGxbPQg5%2Fw0V8TEvXXHla3KD3FDFQ0u0JoD6316g6t0YHUZIhCe8ep5z4Es6OjgMTl05Z%2FuucAzXjhuiggDczDr1MPJBjqkAaU0rsyDSddJK%2FivZjF29FaYIfnPWpL8EkRoLCI7pp21vapFpUPiJIytG44uspDvUZSmUuxLcpcRuZpjPzAeRZIh8scS9RHuMj%2BXGF8VfMhobF6z44pQZGSvERySiOlY1O5fn%2FW5IeGyyY6tKr4d%2BXF1YjXZX%2FRs8MYTdR7kb5VOYLGA7srYhN4NKbKnTZrfV0TGXbCk6ZbvdvVLHr8yccbZwbEg&X-Amz-Signature=e524ef2c5fc7c06bbbcaf95cc3f5c2ab62bedba63b9efb456e3570aade7c4c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

