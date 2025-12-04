---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4RLPJQS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBhyS6xXtG3cyY%2FdFyIMSaxCrbWiZU2o%2BiBfsJgQwTLDAiBwU27stbjZrON6nJ0hugKD%2F%2FwLa4T4wYbhf82Ohkc%2BLSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM4HinzXsbx9zov%2FWxKtwDLz%2FRkL0D8%2B8aeZ%2BFFEWKZL%2B0V%2FQt0d%2F8k7zmOo3XG%2By1onWxARzLcycB0aAu%2BcHxTXVjWtbZTD3w4VJnLYUTj7r9qR%2Bhe8QeSQkfs1CWC0bpgRjc71UlVAnnw6nx7rw9pS0jkcHYXfPJmEfJ%2BkJpaDw%2BsQPUjPjkLj%2Bi5Yw1PlMBEq765Lfm4QiqmRli6ogl85NasvLZhgwjdgDPuzL0J4I3qICaSg%2B26sUXWZNUUDVjiokPxy1W1fAa6%2Fc7E6cT6%2B9xqzZTeaT8XAR9uIF5eZUuSirLobmuuaQWAQQTv6IszNVLVSKB7F1O1Y0t%2B0a2tD8DCjoH3bBY6uKW1DTqQK%2BPhKHPZpKHxLxvfpq%2BeMv41yHC%2FMLY3jI%2Fcf%2Bo1YXzeoRdXQ5TwMF1%2FhMPJi2VOolwGPkburD8jalfQQFdYNEEsc0fVbBEQZgag4wiz%2B3DS9xhxDVZw461rn%2F7xuUlh3n30FMznorxJzqVYrQpYwHxjM7QJmG2ouSqWIdFAXbhix%2F39zLmc30o3NlJ1SNMaKbe5CVBShMYlgmRlM14t3sOI8V9TOdFkEeJ4V85KoSyvC%2FpR5ONyyfXiErrejt4Jvx2T%2FPuSHpicHvXE5tB1ktOqTSsLVPU3nbE5EUw9ZTDyQY6pgHTH6Jxfx67iehPwx5KqiNSE86WOf717Lzj1qe4nPdkapi7NDsK8ct%2FF2sVS4c8ltZ%2FPSdNS7Zjjbcg200zY8J3j0nKqkKzp3PNdTichc%2FSwJWrT1sibULvet0ysSE7lArFaFMCCp4FYcpBEGQPfLcW49t4Q2YzVCKC0p%2B9HUaxoQtuy8W8wVCqWnDuCZbczsK9sbDr4EZc07q01tk09px060yPbXQC&X-Amz-Signature=b515e95db492330d76fdfa5f994d4309f3dd8163d7bff67c7b6a3acfc4368939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

