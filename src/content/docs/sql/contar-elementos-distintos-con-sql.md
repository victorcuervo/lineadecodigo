---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652LOEPBT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAOlC7HVlGD7yHyHsJmh%2B%2BxmItSfWkzr%2FBjGrVZvvkaVAiBRSHdRRRCXQMxbGR%2BhgvDxo7npip7IfnLj3oU51OWEMCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMvf0j%2FhdzaOZVsWLeKtwDRx8YUk9bpewu2PKYvx%2FzwqMTSxTLrCC%2Bij2T8dgf0E%2FO29o5K779R0XfnOrkKU0h%2BKLwp6awHoZ0VtwqFRWIKMRZASmu2sjYZEtCOw%2Bo1A5T7SofJNn%2ByJi56dhr71uqvxL3UisgHmKtacMHZ283hNNDa6PXcMxDAhPwJflbYxKYRzCe2aOmBqGc5oQO7RHwwOGJT1F3z6CwWsyEuwmrAkfzSUPGV7mLA%2BajSzJh612IRqqV0EFlnKrok4ml6fjXk%2F0uIyj5Oc9X4w9k06OAMGCbZjnHhNFMipwJxHtRfNXbGszU%2Bc2HgTD%2B2Y1h43Bqr7Z2LKbCiAHwEUSB9x8LaQn%2Fv70mPi2ALlSsSdMwzEmygGoW305cSrcVfeP%2FB1l7kJjJjcwPy5Z1jw8wto1F%2F3YWcD%2Bjwjqhku2kMbEiKd2YCAYL%2B1AuB%2Fsbtk1UcRmHCBHfopMduNsad%2BSHnCB5outzZd8FBaKBmwZKyHf6UyimwXDocCSl0hSXroRWoSRt%2B%2B%2FK2%2F3cOxXOyQEa6aRmbDAM74%2FH7X%2FCudZA%2FW2tVQgj%2BG1Mc3YbE8APEVEkF61h6cMU9tJfqo3xAHWzCjcB9X5cG8almHWGG%2BfUsu3a4HYu1Z9HH%2FO7rB86Z90ww4TGyQY6pgGCJNWoFjwq9dduG17C83q4SVrXZWBDOBIZUkx6OqcAaO38maOv%2BrnHkWVBmBD35ZNhSY5zCu8I%2B7ESNBI6bHE6fVYMnme80V6moDo1E8O7UCEBcYz%2BoiBUEu674RX4p0HDDRNTTjKV6WmV8Mstp9rGiptEySyn4Xaudc1%2B4ua3p4df7QKxq8ijfx5Ppe4iW70gxSB5LWODpmOFUEuckPfV2fW0vqzI&X-Amz-Signature=c6f4c54975ca328fd246b8dfafafe7d37aaa4bfb2194082ffbb32e11260bdf77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

