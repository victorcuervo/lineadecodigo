---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653Y4C75F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDYvXP57yYZSZ8yPJI%2F8sRU2CuvtA13xpLTih%2FmPyVcdQIgJc4jZodzS8QfExNxZxfWNJiM4HjcDtAxmYVyHstKleQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDE4SssECchLuf78IxyrcA%2FYbXgsbpZQQdWj4Q%2FM4IjeDeGhyOOhZfGQg0xmqS5%2FgmfgOFU6DVLYpwB4G7%2FCCZXxsDd4zC%2FL2%2BgBSjuh6ZxxMUmLRbRwN5gmAJm17pyoXKpNFQsQBxAGBvc9YJtliY1W3NWkVQCk4cvXRmD8NuNjnvJ00grqp87k2TjgPvsYqezg9j7iKkGAGUPbTrQjxDyV7FnS47SaTzQ1v1Yq63fNnL2xSWdZLbGBssPh75C%2ByH142FnAF%2F158jWv6KQLdXIP7xH4npPkqB4LV8AFLDmg6WHYH8PlCoUR7Q32QJgWVJIsUox0dvPrc%2BSsuNtYBgnqxbLJQnopq%2BG0%2BYs9lhV4Bn1507%2FABt9%2BIU5zh74AVZ0letMD3KjcCI2KqDBPQnBv5lSRbWkC8ItXRbRJ8tkLxxG6%2FVB%2BATfEoPSqIw5dxtR6X3pbNrG3kEu9sZFUHYGlVfs4RbrYB%2FufrIBOPtbXw4cl51ZtcXWn%2BsG7NyiqKOPQUS8y%2BNioeA0ThLfO%2FfeVEU0NIZk3b%2FzHa4Xt%2F58V6yNTMJ%2FKbilZ59sH5dvlhM1wrEfr2LIjZZQgg8h4dAnw7vvAQhsLm8wyJ1VSGXqSvR%2FxyL6%2FTf3QyTO4IYbWhVfwIcaX1Pnr7MydCMMu1w8kGOqUBrBR355DCf%2FXJ9glRlXU31B7VdN%2BPXJi2Wd2cqiSkkchjpjBkClNzJnoPWByMLFuRqBd7lzKul8vVyCtpD8rJjM926UUyxwsyy%2Bl5OUtUeO%2B6uoXK4aWIRQ0UmcJBxPLt4wPXYFsgDkh0%2BQ9%2BSvX%2FCM3okWp1lhts%2F9njHaMv2fZ8t%2Fn27dHKgVfXym6RdZSy0XgBNIwbyaiqj%2BXvZ4yOsfH2WGSa&X-Amz-Signature=7265f55d9352914eae95a26951270f13e175e47b44f3f5b7bbb1ebdcfda825c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

