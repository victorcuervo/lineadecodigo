---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA4QQJER%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDAPmpFuNg4KpfhFhBv57Cl%2BaV0EyqcBHaJU3bSNF%2B6RgIgJOtHHzfwQldLxifd8T1SNx92CAqWlee0dHdMJFM8vTYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHmM5LtCX%2FzvQYBgVCrcA1UeP6TWfHsZ7BMsjEHNmVd3bodLkI5FS4mE4%2Fw4WYXMybCHnXAAR44RV72xP9IkBhDo4LLQ5W0hK0OgojoH%2BuByftdXJ64adNcutl3DnD4%2BHoy78J0e0drYtjum1J%2Bg0kEUYbEOUWlVFpE7V9fXlED1T%2FRsWnorczAQ65a%2FMD2tBR9M%2B5vK2JnveWNeePR0iXUz10F5FvDT%2F%2BqqmAWs2OhwOyG1CNMs%2BQqxed9q%2F18p8gkD9xVFdbZUVJB2h%2FoXUyzWbYtdZp8BjYbu1P5vKx%2FmH2jRSAo7b0xYeX%2Fr0iyhtuapu%2FSYAZTqCkiZ5THoKhi2%2B2G7TfhsWiFHrKL%2Fb9qOOfdqyRt1HvaZyGuPWHnySS6w8%2B8%2FUZ1Z0JzhGshcNuCiIxMnxHkcHrPpqn8T52P70teHpOHCmadURlTEswhDGzM%2BGeqUFhTNd%2BnwbkbCOU58nuy7nTZ8eG7rGDCiJx8ZjV1vWY8C8128E6OIblJ1s4jFJKnLjzWINdzhCYp6Rv9Ff66s%2FeiWocmKJKQ%2FptOMqj8zG7KXzhACXel9wl4hnmWxygJ27%2BAZGqvnbqwESfTWYQ9YAqy2gNLuUUNzkk8LlezHtP5HmhHGYCX%2FuA6f0TcsHo1qK5fSKk1kMLOQxMkGOqUBs7aUlmJQOtxPruipF0fFjQW39OzfXehPEua%2F28FrRXQOfCcWPp2vLPX3KXKosDV9KRQNvAUpBFHgxenWcggTNKrkR%2FW3ZxgmCtU5S0bf6cFul%2FfduLux05Jy5Yl3HJok%2BewiEEMjPEsmig4tgZFE1STQflH4a2LsdCj7KMmWpmL6odMbzl0KglstTpO1bOBITS2pL6G43KCaQ7P1MVJOweTUAbrQ&X-Amz-Signature=ca45f6704d086a32597431f54789ec449cd5560a8c9594d1bab6a8160ad5126f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

