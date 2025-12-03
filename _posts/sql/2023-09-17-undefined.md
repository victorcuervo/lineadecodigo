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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIYWUO2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGu6yoSVsZdhUegpmXzACf54410Rten93ns1LjMKfVlYAiEAl8CtvfOzLvn37dbmiLnqmz9rjxA%2FkxQfpzpoJfj7KKIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDF7CuOCdcAiihtWGgircAzO69XWutSYEIaCosVeQf0e6JLVov73BndcopPen9Sodlclb2sq955hAiQsE68HNN35Hpe2iA8aL2pQJNkBUF8fxlBVIJc9RZS0n6JXt3aZ9D%2FS%2BZrHb%2BijnT%2BlxdTPfOt%2BX%2F32%2BOdA6Bo03xQFJHQM6nFRbmlVsubJsaaFZ9Qq29zVmC7rNEpSLBSQeAoCoMltJoDOSmWZJOHQ6HQdObsO1CQAXWB%2FWzEwmTaUyxEblhB7pXTVd%2FJLd8dOFeB27i8K%2BJVnnJ4wgs%2FiSi%2Bv%2F1Q9QDl%2Fn7MiKySIhhy7VY6zaMeBye8gQRajAD6SdrXSMb3JtmN5FHwLmQ7wfALgwmwAmXN1kWEPNYI8%2BipCftu3yhYSHg2NocHM9uRT3RElFbGKcL5nOv2iroB6Qox14RcYKaFA4VGu1BjJR%2ByN9mZT9x8tP20faKfQhAFyYHMCavs2g8GEkmvfV8gK%2FJjgp36N9Dea%2BSvELalnSDtz4ztQt5gsL1Lv599%2Boe3WxvdCDPY9GvdC9EHN8hWV3YD%2BS1WgkAAV6IgtbjmxzcKnfkdnJEo%2FtPvk0hCZM0nTELrjWZPNd%2BL41YzYAutRWBJIv7ohHQ1ZcwQul62skp2n8VF6jn6BrL8j3Jlx1PD0SMNP1v8kGOqUBaG3b4JwPZth7LG2NNSY74cl5nCojw5YmT7ynByWkoeimhWUE1q62VG1F6pHYLNCbQ6XR8pdTyKmrfXXvO4vh%2F8O50aBXCE2bqBh%2BXBe9Yzhf10Q1emxVHe99981pTWCbX5xU9cy4Hx40rv%2FCD1051xAsrOyhStZNw1uyozzeWH1SUqoC3oyNYdslNDQurTSIVWjGuStd9%2FnEZ9bZ86feF7kZwdbX&X-Amz-Signature=584a8e932b5de8e1260df660236fc95d607ebc3bc001a7eb78f1742f43ffe736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

