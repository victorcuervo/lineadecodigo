---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHG46AO2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDX2coiPMvEJL0LTl4Nr8WUBd7Hnvw239u7%2Fzmw6oltcgIgaJvfPKOpCUdNz%2BkU2CjLH1S5aZr7DDedRcd8Os7X0B4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDEj6srxxz4h8lPP4tyrcA%2BfcRMfCUbrZQTXjwj%2BaaWN0bmYUAJU5ZJ9ecdAsKlJiVQ9HCKvA6ZxHtUsT0rxD9b9W0Q1PmozVOJ0hsvpSssNtADqS1Gx37WDwUrZgTxEyMvsmQ4YkO6dG7J5RVGQJ5wh7UhU0IGTM%2BwMJ8VQY33g%2FLaNc0XZRIQC48XRzWFUrzPP9XZmwJLqklJ5bJOwZeP7NhXhQdDhtSg7RNuZ0SRE0i%2BKQ95bJH3P3qVkL8WBQgOS5THdx4I20ffm2vOSVcK2Y%2FbvNHq%2BMab20EG%2FVPZ%2FtCqR8RVJid8ZkrlA%2BeSFazhxx9PqiGCaMkkejBjl20h2L%2FsYz2wgI%2B9ueagxrm1UoKP9xvbXgPFmAHQB9CfuDoHD8m1lMEnV%2BmN3oSBq6y5ZoZ%2BcOuBMd8qbvC5YcCvR35Dp36lyDoiwk0HzoOw5wNtjpbFgWL7DzlHgdjih%2BCcDEVfjoeFE%2FUP7aPt6J89cCxpS2%2FvXTi%2FTAxZ24M8L25pDvJTzS3ktwz786HUz9ZoYLh%2Fni1h2USVhDA8d%2BQvVHQ0cP6SpPcsJ9DnkfSfqWOe91D%2FZtlIft6KVW5tle0aQTxtXIXzmLpvzzzvXwM2qk%2BYVZ61jB%2FeXBcK5YSj4r0AMfizSKrcNRPSaiMKn4wskGOqUBYdxs8OwlploXG4qAvMwya7SLS8b2ni1Ps1hp7ks07tzkABbKuCqST4lxWNRMWlZFXSIAt7emcjd2XymOUE45DhrUX0MbsxvAN7Pvy16KsLCpjVuG3rB7Te53EQnoDMfQ%2FojmXqzoj9%2B118EmYxwskJoGg9vugwwltg2zPWELpHGRj9W2EiDywvcmyzCD6M0P8CwrN9Ajzo20FcZFnyVnufb8mim0&X-Amz-Signature=0dd4fc095997e6f536f92d314fdbce6c4f80d069ab71bbba0d96c4ad72663056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

