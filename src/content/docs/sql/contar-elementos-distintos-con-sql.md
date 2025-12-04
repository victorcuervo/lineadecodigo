---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSBNRYQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC50V1lHg3kVteJaQENt5vSBBXOHxLb19eHi3oqIfcVYAIgamodjM6T1MLVtxUxu0MXDrtu6%2FhUFv7IFoJFz%2Bki5w8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGVHQmSqQeK1ZeHohyrcA%2BgyU7JBG3ssVuqmMDHtnQGZYyK1W9eYgo11XuATIOGeuw3p3ZJfPDJGdzNd%2F%2FN4TcCsrp%2FROcLD7iK8L0Jws71fEJHFuoCPnsFYUXmAW9sd%2B0Kf%2Blxe569mx9W8%2B%2FxWis0C3N0CC%2Fzu6SEoqeZo82hjboGXJWa102PC5D9oVVhDx0mrIYyARkaKOS3ykasNVMR86ShjrtnlM9zdXsAvoiVrMfcWCx8OCEMtGoYI1Q3I6JFb00MX9PA1IAQQddOxUuEciFPEA7Lo%2B3jy4oAftXUyDflJHNsL778ZW4vmjA9d4%2BCtdypuetz%2BM3uYlqTLTyP3HuIkJR01XBFIepjftzq3ZlykokDyM9ebxXNd1Yo2Im5wsCxnV8T6AUv4cCziXEedhSuXyb10MV%2B0gmSUPPRPVaDajGpkPJlkBgwf4vkQOkGO3%2F7puwH9KOH%2BvPMsmkRfG38ffnU1xGG1zhBkmgl%2BO0zdwaEwX%2F2zY2SP3iO3zNWyrzWCzzwrvNVgca3q%2BanpssgQcvDAJUrk6RfQexuLKLd17ehUi615MCh1%2Fq0ZuHOvprkmQ%2FOzwc6mnO7kUjbIIseFeSWVSOOWE5wS5%2FQRE6u6GoAdln6YyGC%2BZqRirzW7zVY0hRKSDs6mMNvmxckGOqUBpKEtckr9cGTZA6uwHhWQo%2FM3BZB8LTglSiCGLm4Z4FNqhqJowEO0iPL5v6N0KoCMLnxKFrTdmyvMw3EJfRqhYmNoNHWwk4piQllfy5eZZ5EMkNC4B0wd7E8OB%2BeEgpcCZIDqxYKqn6ZqtJDuKFgQ%2Beil5cCoWo5yRuHWL2fLStcrrHHqJAa9zOltchwLrOkCAlN4DSN20DpRwwODB9%2BEGro8E3JR&X-Amz-Signature=8d2399b7bb437a22a325cb52fd0f907ec76ce3d643acf55cf7de63c12b466ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

