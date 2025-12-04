---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W3QTIDI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICD33V%2B8%2BFt8%2BjPaeoI7hfKF2%2FkggC4YBIiDEVwufv%2FiAiAjq3rjT4O%2BliBcxaly9qSn8D0tqXFlMXbPm38WpB3%2Fyir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMDrc49HsDWlWs%2BNKDKtwDmgE32Y2L0cYnF1aZcDkHaiKt%2F2mJpeWccDEA%2BJtET%2FoPmjTYTQdt0PZlCc%2BT%2BgHVolx7tXpwzEToaFBNDXYef1PR4H6uAQMGQ9c1vwIuEusnAV%2BkbO1FQQ4gjnmbvfMOQsxfFjfcYr9ErC4oOcAt4pIaToHGNHMDhNyRqaGlWs6VXe7pZp3Are1I6mPkL2HSY%2FUB8O%2Fcm2g6KiO9CnGPYn4d4Ouc3m%2FbLJu0EEP2ehvSTpbnQL0FuQgM88o5mmhGrx25hOfy%2FjRNdK%2F53XaHA8dW9DDgHrAn5FpR9IqQ0c3iHEr%2FPB6gmFr7ce%2FTXnHPhXZQslWBOcROPy81eRvPc2WtT8Sih9RLzcOVEVVzfVBc2jzcHTF%2BqBfs7j8IIeNZKLINjDbnyTBki5hivjIW7qjHRnJBPqzuxJvwIlsBsJWOJvHhKax4xKZB4IFzigO0p2vsMCC0OTWEJn3HzkQpiS059dZNfs2CQbJoQeT2N0hgGoXzIpMYtIwRxMASkFWxpJCOKVg9qciadvrrguGeBCwKjGECs0F%2FN3a4HmMsKijfEw3v97lms6nmtEpGUMrMLM5pgM8OhAQBTyupakEXShA9TulgoSRV%2BmPFcZPCrMEk9KLHaitneIHqF7AwhdXDyQY6pgHD3%2Flf%2BnE%2Bwm9EFGG%2Fwk5uNnnjpY77kZK6%2F7h7CEnoibnztTW4bxo0PTXk5U%2FZRehBJcQmYYOGkeqx8gu1wiRzrWv4rIQCLKOchDt4uHSn%2Fknym9NpooLO0Ak1b%2BC5AsTBheBgnXa7o2IWEfYVMjU1%2B7OR%2FpGbGfGfegiGb0ddEwPijZkHeviu%2F%2BG8qz2VcOHtOsaEFoESsvEvWqfnmFhXiWqo6WcX&X-Amz-Signature=039056ff8ad5fab919e288a74f97e729faa50e57a14703df6bd41f454a77fa8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

