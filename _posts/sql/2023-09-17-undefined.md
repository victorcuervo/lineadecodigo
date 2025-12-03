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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEG5D3DY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCj5gKuxRGBt%2BggDwzTTnXZfrVoMBjGAfxDZYRdvk%2Fr1AIhAMCGIknt%2BB%2FDgytz8I3xrzDsYqFte4Aqv%2BwOPz5rRMwqKv8DCC4QABoMNjM3NDIzMTgzODA1IgxMgC2at0R5UT61okYq3AOo0QrtTrAEgsSkJADr5rWIBX2J9e7diJM1OE1Tu1UfO7gyn7XmfJY1X4Su%2F5iStWycP1xCbDl2bzGYXYxawpGCGNtkuz9IqLw3XCnCUCEn67F1zhbOhylnO4OB3fLosu5qz8YK%2BEzHdiS3uxwIgnYQSnaCw0NQWseb6PqyS9yzqiJK0PE40zoDppDmeJUevTaCZR2cBcos5PtlSKaVZ0k2K7d13fjbhrNio2%2BU8H24mo59BQu%2B1ajWsr3e4RZlFBXGsNjHH8%2FAT4%2FGvGuCO5Tj%2Ff5r%2FhwdpwR3swYbccX1BrK4f8KFsFVSMisJf453XZKzlYlWGZjcfhlK46E1N8ddS0NXdaYrowThE7m57DdJBdWbzkUY3GwWU%2FefX8qec4gQUs1F35gwfXBr0Pm59JZAn3pDKl6ru9RaGU07SW9z%2BktqAkBvoLJeN7qCW2gPOSeroZAiPxBW%2BVi6ly3a%2FlX82srDVX%2BOKuBT5zmfS6njYTSslT9vItzesH7H2PEKhoeW533WaCbK%2B0i05VNR99861l5H6aM2rfJQf56Zh6jK0ny%2FAb5NKqKF1a97WAxRi4vLMG8HpUls%2BlklygqYrorRlKoZ8Y%2BAoVeTV8CDNeXWAoVj08Ecr3JsfMsb9jCw68DJBjqkAaL8XcdZ6s408yxfLsVFXqo%2FqCxVjzm%2FoY0O4xuM1nBtaj6MXgx59Feanqlu2%2BZsylw7BsuOCCVLcGKysjt3uhf1sQcRY3M8wigxSvjSBb9ppWuK%2BPzJWidjQy9W2xm6KK3VrwFh2Ay6Woc6BGcS2rKaIqlS8xGbrpasvbh2CqvDI6%2BhCgwNowspyCehNFNL%2FSCYaJkauqttYr71%2FKOc5903q5RA&X-Amz-Signature=7708dbf4851911f3522e4339669286265d106350a08d7000035f6464f6c76e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

