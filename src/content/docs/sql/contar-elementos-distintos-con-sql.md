---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ237G46%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIC3XV4MbfaYzHp86mDKK9QjXG8WK1u0eOnSohNqL7gHnAiA8JwJ%2FHWbHz2LLigHV9bffCT%2FuHkkij6H7TcS%2FNe%2BVOSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM8Qwp7BAwPdvcn7rBKtwDvlHXXdavK9b%2BFYMUj%2FFgIHvsnX6vk4DNzu91e0OOaDPIFOkDY9W799zo8bdUN8JuA2mSUHlfIS9MxQPPVPEUlGxw0TSwoGrO0F2vhcwz09C2pPGm8exvnOTsZlw0uRQ2RWYn2S9MsW0ZIhV%2Fl9RBSBMRsiscXvgWaqxU9VwXsq6w%2FfWgp43ou4mz6358vxcQb40P6y3yxlQx7p5Wfoz%2FMKgrol5aC4TCalSnwbQK7uKndKmG%2B370BJbqxQzcXXnuWXj8xvsk1iXtHN%2FTDu9w7gXnG0qhSNTQPK2VL0dCTnGuoEdv1dtZ01Wfm%2BExmQDwLWuKY5%2Fle0oKMFnDItHkDtdxYtH7PDGsbdih%2FbbMwPz6baxRJyVLwjgjRGcf6lvC8u6K14eDIxnp2C%2BJU7DlofWBvhK4tAzdvde59tXY78Albfy8GSfDb8QPerha9SPHWI3XHdGn7aN%2FaVrTdoFnhJSssvNUGJFrKWjdLtmhpzSpL9FbOSjh4VCU%2BdEvCWiBycaPeFBjf2i4r9n0O4iZpA3o1g%2Fif4H0BU2cfiUWKJ2%2FtC55yekAFAg1gYv9Yhz3K6KVybOJ4NEubDXAa%2Bhhsf8zPR6KQbSeKy%2Ffvw5KwLqY2aaTZRVJLWWzKGww6pXDyQY6pgHPW6g7%2FKNyE0e9BYi69OUlxa%2B3HCdCt82WkiWLFdcOtKipGoe4ajse%2F3f%2FoqVmTmVeqclt2K%2F63YTT8Oqh60tDqDyYkgd7bjLzKALHI5m%2B5jKa2GDgh436hc9VISlowK1DaOH8r8ut6zU8KJdE4wY6Hw70E32phdk0T9XVVuhMh%2FfPUq11BZBH5LveQdJyIeB%2FR41Ye9dicI7wYWeSOFGA96g7Qx5F&X-Amz-Signature=eef200c8b953d22d98185393e602c91c1a807dcca703c0fc74cc9947dc8405ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

