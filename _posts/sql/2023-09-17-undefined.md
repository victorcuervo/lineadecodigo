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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWCYAGN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCUTNp4d8TzkRmiZLqHeM3JAhKNT3yAMcq2xRoxJLUlgwIgN8WAuepH3PoCa%2BiegYftrCGanl%2B8jujoXUdn6tRhgUIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAiWJNEeN5vmUONhiCrcA49nW1WQZVZf9GV1l2uLv97y4C6sCNVdjaUGJcYc87QQ%2FGTdFFqtd6elxgRef0mWhGeMzymuw5nTKpmRvDnDgcrIAc84HGsj6KI41FNjQm%2BB4URXmeIZlUkFxJbZen6DhBlR4%2BduGvhyVks8RnT57Ri2UQzNt%2BRDcA9BxBNEverbUZU8W4pCdNwMPjFK2x16Q4snim4g8woi0HOaW8w02PaF3FoT0pC87WtpwAiiRxwCZBgjXmChJllMEzCe9H%2B9ljV6YWVk5GmReQUrlWhf8XRSoWovWHnq77OPE3GsoVS%2Fo0y%2Fq7lo5QCYDHYEKZTpZ9Y4LSHFzam%2FJAv%2FuV85G0TS%2FeuYgLZGY%2FWHPlyYOssHgKXvhJDrCwu6AMdJM0ocBq1Y4xBJ53tGars8Vz%2FZuLQbBiX8S9sCpmJgaLi5K%2BKtqjkefTs9x%2FINEBR1MdLgOzKfBtOBUkeIsBj%2F304Z5BvCz0dqzWfs%2FpTozVX%2B2qewzVOonFlbbT6i1LYxPDimifAferHjhBLrOP0o%2B%2FVdqGqLm55luwpGcKtKy%2B%2F7PewNBL8c9XvNBeP89bCQ977lR9bpBeL8YOBPkJO4mtIyrKStFwisiduE5Ro3QkkHOLvve7vul1DIqELM4EgTMN3MwMkGOqUBoy53xEuUWptgE9kEuTA3bzXC86mh3%2FLqrOxMBoIKUF3%2B49077VEdPIne7FuTqTWV5BnaztWG85H9rLoL2etcBqeyBTAMjZ%2B2mwMHs8Qr8nbvT%2B5LuvPGeGxyq7lD5J1Gx0DPfur5nADcKDVlJ%2B2L20%2BkQ%2BLdgm4WGEhPQm3tWsGJ94O8WYps1a4Fnyze76XXy%2FKEnWIcmcFaEI0rlXzcKqaPkIdP&X-Amz-Signature=c7c350baf2240d37546dcf6796147f54084a14ba103c7bad3405cc9fbe8f4ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

