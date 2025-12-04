---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MM2NQV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD2r5V9y7%2FgGApQFf84d9WyRAgD7cfhKCcfRRU4TKhB7gIhAJwrm0FeMkrwoSgldIhPVNZNBI3Y6woiP%2BntOwKaU%2FT0Kv8DCEUQABoMNjM3NDIzMTgzODA1IgxxyraVq7Zh56sA1D0q3AOuu1kYpAEXg23kTe4YBHuuzzxXwoB7kmn%2BrS1sQMjEx%2FzyCDbbC60APMLEFseTiIhBx2cljl5MCbRzIVP0oJTOPuInGOhwhJFHuZVYoZFf3iPA5ulEICf%2F26hck5rSoQ3j0bxWX6mHfo%2FliHxSwJAD%2B4kV%2B3Xi%2BKkoY7Qgu6Or2VMvxkx9KcwSqr5lXWSiw%2Fh0OYDlLPlWLCKKYc8FaNuaCEByiQSo32wSFAagz04%2FKCqok3z0yiAK%2BP%2BOY39AmjqJfENNj5Us1XndBuPkeB3uJy9pqSaNnzCown4qDwG12jrHykFurilxviaIfzXka5qVmb4CBlE%2F6LD06uu0uWVkUTTdyOFNsDOTZqTfdQ82fWy4IyKIHfk5i8sR0I4ac2C%2BElBRe%2BdGPYmwpeV2s1%2FJvz6S4JDVvFkI%2BUig52UtYKnp1BPRkk4kVQ0cGUgAvoSWL9ztbnmdjgILWKWvAPaQzZoUZBJ6Xq0v9lC2qmU0DwQb70mppXrKnDt4MGRbH%2Bs95hgbNda1lA3QQUhmdhOPQBmP1hx5jGEMkeQs5rhjkxxP34gd4dJaOJgQut%2BYuemTiWl0I7RIQ4sOw01%2BId41rf7roVrP3ZmS833l7QDyHGuhCaz6EC4327geyjDD58XJBjqkAZqJqnEI1h63%2FPV4O5i1oxpuAJoRjqzheY3DN7UsSd6WyNdk%2FhvgWlBuQrVqBKviIMI3r5mj5ZuYB8zcFS%2B2wnaUQ2YO%2BabUMW095qIVzWsr%2Fy%2BuBr2m%2FNinAEZb2wVn2lUwZOo1zSrer9z01FXX3R6x5s%2F1VGrbw0SgkzXOVokW0VBYB2cz%2B6cqip%2BtYw%2FvW7noWzBiCADUiifvPkrgQxBDIPn3&X-Amz-Signature=d334b7f4d104b2c63284695671759209335b6e67f96a0eab6c478015a3a63d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

