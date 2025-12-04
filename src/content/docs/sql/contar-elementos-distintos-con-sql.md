---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHSCER6Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCa4tee8fJUdXjVrG97NH11Y4OxkvjqqAn9eKegG0vlpAIhAO8DsUKQXc51%2FUF4o0fQRDyNsAB0xtxWYRds4c%2FCGNRYKv8DCEAQABoMNjM3NDIzMTgzODA1Igxi3NTsZYwRM5Zx1vgq3AMEfSpzHu6jWaxm0%2B8umXtk3zFBYMb9ckJB2GDVO1%2BBfvaye08SjS%2Bu4cURySV2%2BsiS1dKUkzYvsQD%2FYZbvze1ieV0dYNTFXMB5BEUYkJ7Onz16erK3qJ6VcV0%2FRk4dkGo%2FWwIrjNNa4RPhVwKLG4k4YVfhyxPWC2%2FCBDMv4k3ELvzAtehdl6NfXhcTBk5X%2Fp9FJ4k6GnT7K5stfZwPiApRt%2BmJtIzwivCtTJRppgahJB5WtmXQUUZFGt1lVcPhzuPs7kuTN2YkjlpBwgNJPmecXL5t8U0zqfszLcGF9rTXkjYyLF%2FtR3aUrGR7uSUCgTF%2FkVE%2Bgt2KCcBXOCJ5Mm1D25gspn%2F4OQkc4OsG8NyVfsubbo1BzgL1sg5KngC3XLcpgEXMac63X1YrQ0rXFTQ57kEUR2%2FAxWk94iRN%2FdYJytcKzVtoBFSUMJPsC9LZoDNhbKs3qqY2ALr%2BS6t6C5raLr%2BvgfkcMxmEt%2FaFzgqI%2Bqw4aK137uww1PcfDLowygcMX8isltrUsBQh4D3BlZUgEga1ujNgIZjLhIl8z75fM2ulrziKA7v0zmVtCej3LEOqOUIwjkR31emUwJ%2Bx2mbCEBuL7MqHEaDnU%2BCib7bgfn74k9qVUm8lixAI0zC358TJBjqkATai8xVFmywhUiqNlUMFPPYmBXaZ4MyPxAz2wYDsSpQohyjA3NN9zhT68Lz1xTO8LMh0POH0sif2qVpVgEXqE9DafZApJNyqU3qS%2BoZ%2BCh%2FcH3dfTC31KruUW570WKkpgIm2sJuf1m7WgpTo1eVK9y1OxpSyaF%2BwFmHDVRshoC6NrcgFZ%2BmAiJzWTCSAsP9B6UsjgjdRndTQffmicFxyxzh076xO&X-Amz-Signature=2b4135d521eaa707ace911c5f2b7bd9064459b22f7be74ae1ae13dc0c941ba88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

