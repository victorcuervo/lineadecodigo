---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTMZ2GU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGMFVheREoT45fJgXiQUGP9l377qIG6j9SC%2FIcarNTnOAiApK6fd7510k4u2tGrXJi%2Bq7ekkJpPKHnQyBD5yNF39NCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMpAwN%2F21d%2F4FHNxQUKtwDYrdAIZyu4IjQvy%2FqP0Rpsxl%2BJmNhgZqonjJN3VVvjwXqN3QBXS1nzW4ol6oQKmhnA2RSqOM16qXJVe7CgO79RbPJjkPI5MtGJ2WOIPfcUiSQIIwLDYN%2BTxHEzI5SMZH44263Pm6TEX1%2BESTiDbRq21qT5Wiyi1L2Wp73RO%2F%2FaMqXesgOckOTo%2BJA6m5Ll3D7RCEsk9pAdutu50XPYF4IZIKUYvn565lW4oqyA1astrz3ALT4r8OVg%2F%2FLd5lxuJAd%2Fm2cRwJNXvdjrDm2yXd%2BnqAx%2BuRCP%2FX7TcFlqkfWsqbW7GjqqlVVCeZcAq%2FBhgDAn83oBG2xjy2JbWq4Qf5MJGb17ujz8uAIdaxLmZCaJyfyvhYU0luzNvhLcrvjLLEwZ1KMlkqkhASUYWFlEwI1jC9bkefo3GZvtrzme2rYKW9OU9Gayqvo9qv6lJALXBxVuMqDvAIZ3FLE%2BuLMBie1oTnEfsXk4jB21rDxuk97PF6ceiuwL%2BokEibACR2g%2BQY%2FB2POY4XXV6qi60RLv4Dw8%2B6lMeCsqsqGyMAeT05A8PWykmWwT5JTFR1JvhF3FDxgOj1368uE68uanXsgOJHCQT2xNpvVsqTcstPUpqz5VRTTg10p7g9MZ5y%2BU3Iw1%2BfEyQY6pgFa1RHn2hQu0HYsABRALL0uFsFsj%2BQStMlLDMZEouBn9UPeBm%2BbGzDw37266uq1val%2FvqbxgPN28JcJddnkOuJtXa6jBTU%2B8ndnB7Y7x%2BD4Z6KlDsoj9uCm9S00VU0ZICUT9N6HY%2BsalxTOfB3n4KgAsUCgEZhcPr4Rlu3K64CXgr7OHoU4DNR%2BG851x2K0sqJ3VM4rg17u%2BdiFYk6HZpYmicmOFdEC&X-Amz-Signature=04b872adab8c01a282a73fe55f06f85f1904bbd507871da6865ba05ce78c59aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

