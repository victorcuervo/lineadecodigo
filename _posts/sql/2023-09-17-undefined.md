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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UOYA2Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCTVLGnkrvNOo40VXgZ%2FN8hpa4FU8XbjcIG9LGq2FU8ngIgZZ3Zm0%2BzrNQqZTQ87yNUDAA5hDOCaGEaUiLI6aNy%2Busq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAJ5a7J%2BortuDcinLSrcA%2FyXQBzaYj4G6ibitekJJ1RHgfqCFjslMx2RalneSzUNhGdnUPl%2FyK0NRBrLnCMJ9xqjzadNoskSjXbYgRsy7lC2MFFacqMFIFHHLfFEdmcl0x%2Bwuaw%2BVwY4DtIsntoUhv1srbsnQEMOdtdRB3yDE8s%2B2%2FbNMKrHGsxWfwP3ARFCvfjhH4y%2FAU1uWWzmN2cTSdtMfSwMgSIQd5gt2kSBaGJAlblj80deOklEni3XMY4C%2BRCFLUUsChqhRB7RjRaN9uMYYWD2CTvCHMlxGUh7SxD2MbqdK8BrldXfkY9XTPLW%2FKb6bz6iIqcSgovto4WaYDz7M6wndFvsK4rSsU3DolQke6TsGEwbHbmbSpagOxA3EEtrFXYTs62jFQdpzhA9v3cTcAKFvqlG2wDXplouf7tRzhpqw8HSTzt4vlCuzCZLsQi98j0M7O7FPlch0aEE%2BneLVb40t9b%2FYYLD5VrDm7wjeoS%2F%2F2nnO%2FTVzYN69zeaYrXIVN9Y7aZBZsM34%2BxECdRdsiI3%2BY4aQbggTOuBsLlnbTI6ayq0x%2BjYG%2BLNnvksXR2FdBZuIUOrz2svfRXvcX06h%2BAiyuStCouw%2BTXenzyr0E98VxAs4t9qjuOCihDX332pxBZ1R2aUTwvdMJGcvskGOqUBc%2BtWH0ueHyYIsX8NZHC8sNRdAHtv4T%2Fwo%2FAsN54vIzw32UuLf36pd%2BJ3NCEattGmVCjj8jFN60h5oultiReDFnhr5Kz7H7dm7FEii2ohrw7c%2F8quWTznpMRjFAfVKKopY7MwyBOXH8CcJlKynlTJL3NBgKynsT2FL%2BLp%2B4gXpksVTGqaKEdlB8I4vPZuwxFbPJUIciM2kxhJAutelOPHb2wiR%2F%2Bn&X-Amz-Signature=50306b68894e2c65892e67e61411c1e8212df1695d04b9cff5fe07faa5919c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

