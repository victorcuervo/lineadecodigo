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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2GHEG6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDPKXipRNoT4p3PTmSq8BtMBlZcadhKP43EmQWis62yqgIhAOVnzPXJKkvakNXLm6ICuZe6P5k9CBZgNbJKC0Z21XBCKv8DCCwQABoMNjM3NDIzMTgzODA1IgwjA%2Fo9uYO1UROoqzwq3AO2q%2Bv7o8o8ZySsOtKL5pFLWhAeHG4Tnj860pPPmsx%2FM%2FwJFLXZx5dj%2FW68Mw9DJye5kWq25XreTMHx0yy5VIlhHFi3PVHjTuyJWQZqqmbGS574W535QHGGIwYU4lyOOT8aKt6u72cdhU2M0pdYQCfk78mkW0ss7wqUY50mGouXsSxlX2H0dnIbPL5lbyIeyRHAIIOZ0%2BeXJCXONI0M7XTyFb8%2B1x4gpmdLFY2bfIVBXxjdvSXWHO1bsGULOUVHqsulKXAxlAeEXQ6vDc8KdQNVonevW8E%2FRoNfyoAZjEMd3m3vi0j8PnRKa0meLFwGYkXp0qUrczO%2B9NKxLs1MnoqsYR0F2L7Ea%2BVWYQfz%2BzDur%2FqFLMGlclr4BGXhaln6Lvr0nP8eZc1t7%2BCoKuX%2BGF8rYMC2AKycG2pEXI4QNVomfDE1jfSmb2ujoO25NYCx8NEtFen0Uf6JG4wgTe5WXE6QcUOvjzT268xfCbBqaxf%2BLL4CLYUWPIn2YSX74rIaVmGIBSymNPf2UEMLIRyYssJFeDCRSoCDJ%2Fvw%2FhSMEHo%2BpnbAvXUgQOFyT7eDWsARXL950%2FDCYWhrmZPdTWg9qaisF%2FDx%2Ff%2FeqZpNfVz%2BHnWts6TFfAHwxUprNZt%2BOTD3rcDJBjqkAfxOZixaVX5QdxUDwOfUTj0EInMHFiTmsztYIWnxa4nmzdN9%2BoMHndHEbaxNuRnqQFZ8zXvKljAQLUe5mkd9ywMLQtmwtfBm1nsRr6NLRj9XuAJVxnIbxef%2BOGW1%2F3w8m8jA%2FUqOIwwXicujpWLaCgFT7gDxbY1vstAKyNgqIAHtwO3n9IvzJfuGQLQMcdkzt%2BPO4ojis1bRRtfNCbSTANk5xVN6&X-Amz-Signature=510117359ef1695808a460be2946282db5d727ef8cfefc4cd06ad2898ed1fd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

