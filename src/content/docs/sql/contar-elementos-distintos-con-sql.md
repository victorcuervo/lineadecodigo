---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OIYDDSA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDL9pwpTKeCG9reqDBYCevC8QAwPa1hvIgfDiuy522V8wIhAODMPCJKwUEcHAJc5PATZOYSm%2BnYn955XJwPfiQtgbqHKv8DCDYQABoMNjM3NDIzMTgzODA1IgwUiOBQPSn%2BDAx5vNsq3ANZ0havMlWXFRlwu6KzFBah2yY9FAgdU0uwWz76A9I%2FwX4v4KWCme1Y%2FAbd3qgz57FjizScpaCzXNcj4P5tjlP3zDB26cLpf0bgl%2BhGejItNFMyfRCDxpTy3OH2bMd43IqVnCq7wsd7QetvrlZEdNo4q3CiKrQLEFxjb3rmGWHlb3zw7tym9duGWpf9V9xLGt6dCV28OxpbclrtyOOeHwM2%2Fks%2FHKgOU%2F0pVxzhUAak9MQZ928ZjLsjK8j3%2BgsAQ%2B4ihr04n7TJZ9Aoi8pkLsbCAnHCFVAuxruixTUdnArNYv8m6FmGRKuo0EfH%2BCEy3uOn5mZHoxfqBmc86yi%2FB6lFCHbGoZzUoD8bTp0u%2Bc5mlXpL8TdO%2BagR%2FX29VYN7kd%2BgHmxiyQsrRUHgW%2Bjeg25v%2BBhYqNOYmsO6kHO1SQEOJfhpxvKAlOuZUGoHKjT8JDSPLOBxnvSwrbGJq0cz1QnWRCGFLrhp7TBfv6veG82zaktwVh1VmQ99hqwR96jgnTkY%2BBqB7AS%2FjHNvQnNc4QHwTWAwkvjRYAwIKK6vsBoMp%2BIopPpCp6u9fs72uHFQ7FOmRSXa8Z6JxE61QTwPCMYcWYvJHJbqOoKvA%2F5FJ%2F5tk30Q2OG9VldAyBNlTDCtvcLJBjqkAUE0ZMW5l6tANQECkW4rKkDrl8FPiOEfjPe4m48Jhkh%2F09MlRrbApAOQAdN1JjwSf3kz0HkGvVz68ozSvNbR3NtuDU39BEyWHGWdQ3%2Fp0FfypApnijZz6wUn%2BCGGmD%2BhCH1juGztiyvFtZTXMCcfp3uBf%2BM2B0zdCkpPy4s3lD%2FWpKtxME5YbHCv%2B2yzRmHHAvyAGUR%2BQo4vmeZjGv%2F0ULnSJvUm&X-Amz-Signature=17e8c9e897d77980a6ed7a18a2c2813ababacabf0085f9a72fa0838a628c150c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

