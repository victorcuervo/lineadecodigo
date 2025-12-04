---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGEAOWI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBrJb87x30P5p%2Bzo63k%2F2J0s2rLuHOa5Jy4fBx5JCh6SAiEA50%2F8MgHti%2Bz%2FKmNTWrtqOoJniIdCvV6hsYpwsCVDpmoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDV6P68QicUiqlnG%2FSrcA5GiIZr1EeqHapdfs9YjJ81FdpPLkeDHdPP3ahsK%2FPmz7cuxzv%2FwmCUsz97x6OBKS%2Bm%2BvzBKxSeM5ez4t6JaFfDDWOauOCMQJhrYBbPfdehGRE6Vp7eGx3LvIHUpAahF%2FC7IdSInjkll9tn8UgLEA%2Fs9rHtnqngp9gRBVxt7n5PB4GtQ9uE0R5v78qcGuCsxbz9MwzY5oWJiqTiCFVVgsVm6fQXpcPcXz5NLsBqdHCGLkhyZ9idgF2H4bbBgdsJVD4pkRvA4VHrdfKOH4aBOdkwV1E7bMA7XqmTIvI0etO1C2cfPz1asf7XTBrZ1FWOKO2%2BPigQn3gtAly1EDsXZ4xJ07bU29miB41BYra1qEyE9N%2BdUdCIMUKm8KtpT%2BjXVp3TAaP5if%2F4vKAaSgChRBkPAfT1zmXGq%2FKIFqsUIiyTagYwwFEWETLoB%2FXo71%2BsE2lVRtKLUp40E7J9AR4ODMC8KMoo6YY7kX5XMkVIItZl215TnZrx4j2cQMcee5GuQ5qLx8D%2FM%2FGfdD7z4xpSgel63f3v9pXiQVEBPNe9Tp2%2BevE2g82OsHYRXh4DT3nv7NK6yCsbZbJLKydege439CsLb3%2BG4e2opXg%2FkpYp2BqBlgBfo%2FFYwhk5EgPGgMMuqxckGOqUBz9QR9oacEISQLmFghiyTwx%2B7DAzgXQnG3XY3oWMkHmaFEqZ6ou8Q7zmCk8dOZO%2BzdtTzt4btSmeejc4wXrmfeSJZEsF90H4%2F6yQv8pkJDftJsPlZKo%2FSAfJOBQkcUKFuecieq6xrw%2BLlXv5QE%2FhVTGBx%2FeKqYfDSYwzJsFJTz%2F03qURYQIxsON63MoN6Lz%2FqiJlDIuxKvpZbt6ugtMy9hwvRH9wa&X-Amz-Signature=4ff63d5b54decee3d5905f13c266c46cd97c4a1c7e012dbf26b97f52a48f6704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

