---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJFK7GU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDUgL%2BD22sMfeScODpvMLNcIMyil28Ibyu6T4CcTMa67AIhAKsNJrFJVGW1sAkmXqRxYXwgsx9osxim%2F3tHg1aJrWXTKv8DCDoQABoMNjM3NDIzMTgzODA1Igzl7v%2BSSnhxWj4VM2cq3AN3cZ5pVa%2B2Mh54Jdb4AC2mGm3dUJR9QHF1jR67AjZ2NKY6I3j0N3YHsNAK72M%2FVqT%2BjAt%2BBymXIz%2FW1ObupSYYzDxnp8rXYtv62gR6XRkPuANGowIoNxX9%2FvhWffNUhS7L%2FCH0u0ZZ53vUMToDYNKt%2FLlps2jHxo7fzmUu8SjYssPS3lWBdew%2BCtKiPmTcZniyuNwVkeY80E5f7b%2BqxnfCwObFJFcAf7tdn52%2F88P5pX6DxXYaDO2SCwcP8CfaX2Sy38JyEdwtLMSXhQ95yC7etg%2Fjc%2BwhAk3Up5Olu1%2Frv9l88ORKHnPy1j7ByaDw6sut3Iup7ylq8P5th3Zq369JdMSJ9UFh9XIwGDo9V57V5RwpVETllSSRSVcT8bhd%2Bipndhw9rhHvPfYMYEnO42yMLoSKW%2B7opnSp3uGljvUiP2NcTHxXiK6WSBOKlrzJruK7QX7YEeELLI%2FfEa7gmbivNhHoYcPBSDrWzfD7XyS%2Buh9gsWLdJ9vsWG3anB0daEMwYDzys%2FPG1zRGsWWIO1d%2B3UcGl8v%2BJTxKthpnXW%2FSMXhPOBKJpiPWxVFWDV9ZyGeCdHz2NGlulXh2mxndmWS9WwL0%2BtU5k5sS4fbqWRO3kbSALRMPRNNIz9VY8jCNtMPJBjqkAXI0MlzQcddRXnVy8rugn40pYHAeuxJruaUwbH36vxDZp%2BYdiK%2FPvW9%2FV%2F%2FVwrJkToPrgn6jVqgXHjyOvPBPzNksn9VvJ5UkRF93J7JKttIZ8lYY4H%2BQHkVSK8Px3%2Bzeyrj0ZhtQRiXE5Tn6BKvYfoLBZ%2Fi7wX%2BqANQJXL45vREn%2BS7vPkKQosmWuerl1skqTFWc%2BacD08khK7cBThCfFrv5OH0u&X-Amz-Signature=346fe9c254b80cc8283722e898ce205939b787f23a7d3a615de13d9554479d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

