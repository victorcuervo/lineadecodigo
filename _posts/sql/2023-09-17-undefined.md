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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXWBTFR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBS%2B%2F0X9sZv9sSDLZdF2NVutbzSh5c7zTbhm1D6xDkSDAiEA7ymj%2BiT%2BiAXL%2FJmxzBUiDniX1nIKrj1IJi%2FgfOPVYFkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDF7q2BRoJoHS2mBOJCrcA4o23%2Fvsr2Cq9d3e%2Bl7WPdvM7LTEle00j7tV7jZgWLtoQ66tJ0aSQxWpkJHiztOoDV8TG7hR8%2FC85dw8IwLJ%2Fqaa%2BqjWULr45mErFsiDA1QQ%2BoumTlMAggJrrotA1LhA2AP6j8e8RcZ9GmEujALIQEjp3e5V8pEQOWjnJm%2FYxLyq0D6Yg%2Fq9OZsf3NFWhpQlMjzqOq%2FoUWs53%2FeIe7aZXPSwhNnvKCfsk27SgGTpqeYMzLAd7MCc6C6SiZH32dZRGJEa%2F2Y5qOXQSXAOZUB9QnRE6V6V71z1VQ4OSCZJzi9u70Ezo4wUnkUT8kxpIIUJeyoscIMnnyuEliH3beQyPCRTcLpTXirudErCvlagR9jSNFFq7%2FZ4nni1w1RkQBLTz7lue%2F24syiXAdif5vzNKg%2F4ENwBUBFxqTqGf%2BvcOiAsG%2F33fpFZsiKxIbKhhz0%2BZWrBhXEbLvtQR%2BEKjFQdZHXpCoFZs8ur9RcsLd1t5cu%2FZa3C88b92E%2FF%2FMLoKCfdXED8xRG0qftq7%2Fq03JtQCQzk8Z87AM0W%2FuBNL4RdYnMfhR3wAa46IG0LniQQjNQNaCYFeZZaHNxxBpQn4Yq8jWTiZ10S%2FKYGx7CrgXH9EKqGLyhV25CskTfYUF9CMIXqwMkGOqUBPDizR5oojxaFJBNz3iV8sshhg4Cbj%2F1eXRGQbBGacuki9tZkeviDxz9IiMNn3qt0lwb%2FDSWHYsi1hI9INjOaNWnC5Nzr6%2B1pCJAG6FnDkgpB3tV7kWTcbKbpM0lMDygB715ZWGsU%2BoZa8IHBIcdI1%2F5iTKJrNoOTCVMsVkEaclYPO2RMBrJ%2B3Gg%2FlSTm0gatV2283ZwKd%2FnbsnMkBVneFf8y6%2F0I&X-Amz-Signature=a3ff445d520b189994f9c868e179c917d24b100b791d02982ce4715d2b15348c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

