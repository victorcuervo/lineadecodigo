---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZKDLBMZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICKCtY1kowf9%2Bhn48dFfb3Pw0N4hL1%2F9t1NuidN1%2Fe3vAiAO0YnHucS6LoyqoPWKzKQel0uDQEkQiaQ7hhNojY8Jmir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMrKJgBBusT3wMoSAAKtwDmgzVoZnkTkq0EzQSX2mwhqw%2FD5Er6iLeN5jCUWiYMoLtWokxIR8Sj%2F8ky47hkc8FrMZ4V%2FZ5Aj1IF%2FwTxbEBkUq5vpqcLyWxK6ABwKBKCVO3TgvzXthYl%2BmbKrw69Wjfgh3DeSXGO3ryQZgiiwdTR8BIzRBD8K8IocO1ubP0V7bnfFbLCRklfRjrwC%2FhKtFSkX4TnYuqJ6FjEZ%2BJQpYst9LO5J4g0gdjm64ormjmG5b9cQRqcOSailzzMKMnF65WafWlDBANJ4TltRJbyNzS1WC%2BKWTPzj4jHw%2BzkbfE9WCP2Ncxk2CaYZq5K6g62CpTfNFuz8cyox87TimJIgBkMIn9xfHXnvag%2FrQKhwtKr2LZIawGi6j6fx5EywjGESRYrSvaj0gvPiUwdQyt2ljeHkiL1iyTSnjBqf9A2Gxe3%2BlzD2cs2%2BDMqT6MqPqlOMTsBDZQGgbnHrVw7Tsz%2F%2B1GeMg%2B66i7fD8LVCG70nO5XmB8gmwuX8X7AqFFYlMev%2FAqD27K6euxPCHjxC25WiIpHtKgZ3SLwzli4hAJt%2BgnLxv%2BQhzzuhbIvI3p10vXtPnwnkuaCL39VKOFmYjj0ptP2HmtNkOhUSisGt09MAogsZKiy%2FKZy0FpnBBCwvYwhq7EyQY6pgHm0imF6DxkPKKPFiDO6pLhunwev9G%2FiiSLQoddqS%2BUSPPdOjywk65Q%2BJ4hpH7u%2F0ZqAnIxf6pFI2jAaFv9Sfs9YSLIy0v0WvGTog9QI07pLNEFSNUqfeBuv7w2yekwBJ6S48L%2BCOo7lQeMvFp%2BS3VgOkcyQ72W8eO5BGCOcYMKoNoimq4MGUVLg0z4UivYItRBAzfaFpml0Eim43bxiRJjhonP%2Fk0s&X-Amz-Signature=d0a170551b983a179e88bd36520acb8dac45099a137fff142cddf462d6c9dac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

