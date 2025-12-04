---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTF4D2BZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC%2FluL91m1xeQ8m5nuDvwypx1%2FPWNT3d0CnPGOOZqVYhQIhALS3ohu6Ke20lvOOoaHAWbsZt0%2FMRm653bZQWm%2BfXugUKv8DCEEQABoMNjM3NDIzMTgzODA1IgzbM54UqigzajW7xuoq3AP3LVtE%2B%2BHKbytEDyk1mUmV17B%2BP9IGRD6tl7XPIT%2FmHZg5bOIDtiDC3VNJq6tSs%2BWa%2BdSAowpW%2BIj%2BGrMstw4JmEnxUYCDeHNW8QZVODg9ZPYkXOLTJibPuK7g8apbsFvhUknOmgEHLQSlcz8q6cDZmZATGpU5982GxKD4i1yE64OV%2FQvidDC8ZiyP%2Bit3%2Fkebr%2Bv00yPQxJYO%2Fyi47qIyhhnfRUTkd8VxXbIWKtLnu%2BP6DNA7RaIzF9HhOs2TaLthK4yaShc7GitmMLpmkRk9PnTEt7Zy%2BnHIyVWQ2qtXABghsUcjWBDGGA9njvDlppAdYbzfzrTSwDxwRnpqg61ETKQ0GWRCdmXyk8wrDFt3JAhStN7x0GISY58q6edbCUyXhPqsh93XqLtt2PxtF5fN%2B%2FNnV82c%2BZ7qzzxajjvv5tYv6hFTxFNYRHsCheum1jejdRKHtVMK%2F9NTJPMUky2bB8C9F6ZE58Cbb4Dz9VGJ4uHE1Q7rSjgfmF%2F9Q0MVzhWm3MJWEBms0%2BQYSEXOmuCbnsWw0bpRjVi6w9MhuJvBS52V3L2aHZy9RwHVLtM8bEd%2Fi0toE1aG4BwjmqhgLqOyQteYfup0y91MDQC7ePICP0Tl5ZESvKwB2YWZUzDYhcXJBjqkAdPYZZBoBU%2BDJoDQRS5thjKr45raOrWPinz27Tqmw8PmyuYdgCLmH7z4Hh5%2Fexf%2B0XpSIMNDlZeo3o5av3oKP6z53lObEWjwkJitnnBq%2BOONNOC8EYBBrbKl1Vy8XfjbUeK4ykUn%2FAdPGwFc2KBxk%2F003qySKC0sn2zyxJM2ven1DTqWMSCPlb0jbB9jr4FkvZhoxtBJoGexM5bodjptUeRM%2BEz%2F&X-Amz-Signature=974d83fe0ba1fe2108a0e80d25943818e2b573cdcf6d8fdf45a2a701e1e1ba3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

