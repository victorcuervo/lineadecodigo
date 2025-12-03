---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225SCF4V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDzYle%2B4FhuNHle%2B66AZuMSiaxKnxqZoh5s%2FBEHzhHwjwIgASO8IzSTC8AEjSlNO2f2FXoEdPa%2BotpTMoxlqTWij0Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDG3E3zjeelqP9JzXhSrcA498fqwbHzGHPis8v8v2rvrnytf9e9F2T38bB6%2B9ER8guIiN5StNgQmiEGAmRJhLDGEpmPlJhi50cw4BX6B6jdXz3GqlqC3Kbw%2B5n%2FaKyiFi%2BPdUSiUQMmx5efxaswsdCHvE2IYXBKqB%2BP2gKSGeelfShyvvkX23z6UQi6gc0i7G2iuIC3mBCslXwjevjU0Fht877XdPYTv6Hxf25PLPszEpqb1wuRRpVAqQEcKQK0hQxKJPWYR6oJ7kdV8WMY7eMeBPnJ6Hkm%2FiHjCHt6oSq8P%2BUYnuqzu4NxK5HPAprWlT7lhEzcQOo40uG0vMNW2LJ%2FFQuQap0pJsvUhuybgyKNpYaHE8Qi%2Fe6S6yOj8xAw7h8bLQnYNttx4F%2FQRfNkpWL%2FgVei24on2rO4dtebgT8sDuXrTDXUTmqILJ4n47hX54WOZ93hEkqSkdS72AxCMlvK3cbro736CybyNwtUHA0m5b1hagJZRf5%2FQjH35PwbdV6ZsiNYynVknDLwCi7fOk7B9%2BM1Ak7UDmcSk2%2BqX%2FwTxcd58Sf0jb6cnDybvU5bVMFuPdaJMeF%2FCwpvfxHbqKwQFG924FwNjoRzyb3UEq2SDpa2OBL%2BIDWkCBjBPICt%2BzZRdbCauUOYGA%2FuCHML3Vv8kGOqUByHH7%2Byf%2FZyJ5bjrM6qRHuuoxWli7SKt6PPPj9OWan%2FS0FqkXspMn77zlxo%2B0b13tIHIa8ByJQ90guWECWZ0%2FaPts%2Fpd%2FxDyjxZTNVSBnPHb8%2BYWQ6DOslF86A%2BWMlW9rBKPiZ9OB7wpytVprqxxjlXkltzrfZ3rQh0B6VnXQ%2FhGRp6DoDLGTACLDNon4gzuxGRLk4aDSo2epjidKxCAqkq7CCljq&X-Amz-Signature=bd58022da57fb345eaf22be96c241ab9223cffb1f62777f1e75bafe0a49a3f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

