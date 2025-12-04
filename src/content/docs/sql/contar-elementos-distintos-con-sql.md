---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7PWF4T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDeIAJsSlDNFaCvVCytlZqL2DEwrbnwdCa9KkDA2eUB5wIgJmy35v8kTeMDj7AF3gWk2MPbbqzC0zLaGfau6BB86IIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGXrye2ys31DVThCNyrcA4ozK6uAs963VBqbAmsK9fCoLUn3J2BFUQtuE4nSLhEdsetG%2B2Q9zNv4dbPDkSzbn3PMi0BiBiezl7Ec6%2FxjC0ln%2BblDQ0%2F5c8p5iHjlKu8Q%2FAY72RvkrwTORV15wyFOI7kd09HWSJOaqlTe7JM67MiX44qgMytao0DbKQdhktiwa9Ye%2Bz87nBI83pPNYQekn38O1ouhuB6TFFcWVM6P5uQT4ys%2BO06x6vFHRGgXC0ijiggpe2x%2BlVSwkU3nrBShP%2Bh2lW0tWs2Z70NGAyGu%2FWEyN8TnUfqRTH0W%2FiAC%2FpnL7nUKxvvsnG4%2FnvD0uBLKUxUmNoq%2Fb293J2UJU%2BtrQulGX%2BWSwIrlf%2BawBKgZ3PbXgKeowOGCMYtvEKq91v3J04vcynBtzjhfu%2FsLlBDwSZZkyiw79Nr5TyE7gsqtjSXUojZCJnWWHY8Ow3WzLkZhbZycnS9NV5r20HwDvtRDXQZr2vlbP8wJZLdY7%2BqSAR4Z05x%2Fj6%2BHHRxzFaoV6i0%2FNqVmxh6w%2Fbf4P56CPWCQH%2FlxYlhwFwNmfQqvnzC9FxZfWenwdS5oycjraNJc3v5DOXIquBv3uyyj7Q5aLb9OYx1Z4svHPFkgaq0Kj7UkaHQQm5dZXJiNEDoWOlK1MIv1w8kGOqUBpfvGKyX8XSjyxAoObEBeosbxU2YrDW8QmbWOVodT4BpXgeqiWTQlvNPE7QQtvVECrUGbI8eKtLx6WvRNetgR4MlIIBZ1tHETpad04NvaYeNB7V8fJap22cq2l2o5W464UlmulFxV2ZZdxsd1XXP6hTTaivMJECMutbPFNgT55Ivjy1rOpbP6Cs5C%2FbsF9GV4EzoUbs5z5TVhMlbaowLxZq4bA3z7&X-Amz-Signature=cc16751c967c3e168d29edf732fce256381310767fcf11321d559ed143b9aa9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

