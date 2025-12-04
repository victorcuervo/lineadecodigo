---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G5VCQG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCt%2FU5eVMnigM8wosEA%2FB4Au2NkhoWQaNaspnY09XyeKwIhAJIwPJrhqYJlB9Okvgupin96Bi5oYeCSDStC4iZT0pvKKv8DCD0QABoMNjM3NDIzMTgzODA1Igyl6mKROpO5V%2F2qdxgq3AP4ZoV69mznC572389RuCXng3zZJk8%2BF5kvuZfqsItAtrsFvkyjdTy9Zykf6T7ssh0SL35dq0y5w7hdykz%2BxappswXpLb6WBIuZLi17%2FUt0hxg9yFwtSvouk4n6Su2ax6S%2FBbx1ZI0CI3LIKmqFeYsGU1j9IeO1%2FONoAYuFIMSknUir6fAqeaxbvwxVLHKNvLDczwfHiE4vJKVEA0fIrAkWoMtIwhsOVYPsiiLpvkEZraNrpCAfolZ6wsXLk%2FnFgs5%2B1CyW0CDUbNR00WQHhUDKCJl8I1VARMQjMRepLeq%2FE2sSnr199wDEXqMaksCVBH%2B5wzbA5vChjGFHU3%2B2buXqbe0WeHL1XhnNHAbijckyT0bYpAuO8MLBlaoN17V8%2F3G0gzDmoTmKehl6Zhgxjt4iU%2FvH1bjfspLdPcEiWZ3V8YZjmMfS8ffOFF88N9BMpOmNkLkis9vtrEGXbMFlVW8uAMMEpOdDe0aHVAnEFKXu8xPtG9PVrtMTRxOyCQgbAmTVlYn%2BpEQo38diUJsOsDcb3OAZldVKuq%2BG46XF0r5vEvymXM0Y%2BAgZyf5Z0lKQle76hK%2BG3buJQ%2FaXkEUp61ne%2FEiBq5RrEwLLAaa1CDjx9XGqPnVvPT0Da95bOTDjkMTJBjqkAZL4JuQAMycOgl8UbVymnkW1ZzntEyQw0nspl16mhF9J2SuIsCDVTt6JTQFYqqbsO4PN2DI1AaG6ZkbegIUjv0aeG3M1Mg3FSW%2FR%2BM2PmdFA39KpM4Hk5nwT4X%2FLUjfNx536IE4S186ghQ%2FWxJai8CXr3Lv57d0w9Y7HRplrPLn2g3sKllN4m9akPM7mStTGltxF9zgRmFh%2FpsxYhERhXOAEjFRv&X-Amz-Signature=e8f17c42723b88030c714ad584ec56da938be0ea2cc35588ff60a9719aa52991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

