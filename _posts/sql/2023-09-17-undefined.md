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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYE5Y6CA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDdgGsINgxf7zCfCLZuj9RSRTs74rqAc%2FytLDEenHOJQAiEA%2Bm20zjRIHjm0pZYp1%2F%2BilyCmH%2FXRt0WYjOQn9Ut5Wdkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDH%2FZrwxwgh9PAPUiDyrcAyZYj82YSUhQ4yKixAs74HqDqBYdDljiGdJFftOf%2B9ql0D7S9KS8bvB9j0gVlFkLaOJaY6NyGjPORibxH66%2BF6qj9bVnfwvYPMaCwefyLGWPwqipiKpkRsfIWk2EJh99NV3kdqzx5%2BSYozZWkBoOz%2FEJCe5m2O%2FLPjrLbi6nQpUzxpfsxliQnLCJ4tGFmjhw9wYC2NGDc5SzaRlvk%2BeauXVFhcLEuTiHUJ2XR0yVpbCXSJCSnfg1CWrJDokoplSGhY0Qz%2BqG%2BOK9Dct4sZCQ8XefljovodsOKwMHZKPygJxeDYyDuEdiyjzP2unc3JgOifF28yqymNRnUzbV%2BJ1RXDa7TZxu%2B9QLzLrs%2FcJCMXUH5EyoHjTjb4k%2F0h3MEJL68EPC4KN4CDpn0pDQ5Cde5wuN%2BDqFEWb58PxpUlyP4sMQMb8moItv4kJirhEl%2FJnrWENBZ91K%2BzMWbDPc3cvhK50k4KIsVdhj%2F2OWhSUvy1R0lgfewYR1Im%2FNItZVDWdG5MD4yuwlO432ZPIDzmxlbiaWxrqjUC4tLA6J4%2BJUmeKUinWx1GsVLMOQqT38dU6JUH8K7Tbm%2Bw5mtU%2F8ZM53k8Ng6G%2Ftz4BZTUlt78gGeQrVJStiaF%2F4soSimUQNMIbNwMkGOqUBmKvKPldzedIA0T%2FswS3ZsmY8UW2nROmd5Raa0fnVyzEqcAXxig%2BDMS2jG%2B4PAfsIbkYQm%2Fk3jL6lfHjiny%2FiUsKTPLMPZQXQ3v50roDdwXvYwvGHRGqxLMerMJt1uQ%2BIzfHtabg2WKxMpm5iKQzK3aIiwsaPWYLavfZYXNglGS66PrGClY511Xmh2emikxMcacc45mF9xr1rXwojtR33rWmvtec3&X-Amz-Signature=7ceca9c233843eefaa0818a43af31a82d5de63a84e4438212d9f7ec73be0e935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

