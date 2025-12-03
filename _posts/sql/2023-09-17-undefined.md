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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TRUAHP3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICsadzScfA9qHwB1w8floMCLXGMTgoQntgHW%2B%2FC%2Be9vuAiEAtI6j9GICS3GBhC3%2BAv7mp0EsbfQtou1icV1A8OW28k4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLy0e5YpPYCT15U%2FESrcA8Y2yFnShb9UCULZSk0HNWKL0ssbfLomvd4CuhnfGWjsbRzGC6gBjhDBgYlVTb%2FDGNzfIAw1cpxXRSXHQRQv9qA%2BAZHHxferclcJe2aes4Yk6XGWp%2F4XL7oKYEEnCJJugCMNF%2B0J6UYVUHMlaQ8eb2q%2BngBM%2Bz73vYk%2BMNC4dCHzyoW3LV9f0%2B%2BL21%2ByCqHHZH1zGhZtzPukGcizmvQJ8bbYqJs2yq%2FPlXpwp%2BZE0d108UECa2btGTPszM%2BcfE8qa8rF4SaUshQ6AhcI0KlGe%2B2lFvoZeASKdfdSyx1QH56V0gQmdEJqxpYaQWyPRrIJdqYIAhxRlDa%2Fp5sojGBe%2FjwZyba7SR3dxFXrZwAJvu00BwrrNULzrtCiTPL7e06yOWqp41dRGZAOBjiX3qnoHDYTwX5Mplz2Vvdmzc%2FqWsoIPvVCNDwNuNgRsXJMyoAPB15UJeEdFEjFo4A1p6%2BQR5P%2F0DtpVYQFeeAW8VvbQGFsNkYrJD5MOfD8Gs6klleOsiBG1qE98DZvmunHLZd5%2Fc9EKva1qczcORyET4EFeBj9ZWkaRwyYYFhpUtdSxmaD6Q3gxivRXluwaDR1%2FDCeNAUUHOSb6dAX92iMPyqoISk0dueuI6nkk%2F1VBdLmMNXawckGOqUBB5MtrBZGgEs9%2BAdFrDd3HqExDu1nZXYyhjxe9py9pQurifFnvD8pYjsjkfw%2Fh1li%2FZ4tQnOuGqiL%2F9zlM87OmDiG0OndTjCTwVUtPXE1E3jdJVwTM6U77u5%2FrolULZ3xj9FYh%2Fb3nKniv4III%2F9NGONV0dHpr%2BpKQm85iW9kHxJkl1WOi5ZxH9MAj51WsQAIxlvTRJ%2B2DdbEg8ZgrnkRidVruwVs&X-Amz-Signature=54e80ed643ec81be6e4fb4f2bd2db2f58f8da7c5119fe7ba4a8beca9d682e94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

