---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6MLQJX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDnxI%2BY25PUHYj5fCi5uhAjRAB1dx86P2pkYS5T93VTMwIhAKFk1P%2BkpFdR8Jb%2BXYfuGS%2FubrzT5kfp2k4Tpct6esXIKv8DCDgQABoMNjM3NDIzMTgzODA1Igwf3b5eUNWJU0R9G8oq3AOu1vv%2FAiZr0YnreH4pPuiAB94YMRkMBpNG%2BMN0qm3o%2FDFg6G4S%2BbY0EvQhxNVQgM5DvDftDPJ%2FrJN49LgTcj0fE8jntYyEGop81DHb4uPe3K2VaHwwN8HWVcoXMmnCtnmM4mzSKZ27Gkde5D0%2FdkBfL83O5VqIIIIniRMZ7U9pxSleMWDdIbkWXU6F6ZMazYXQWs7OMbIfmwWegYtQOVkUrT4oCgPoHiaTmhC9lorh%2FouyEyBTcFUW4LVFcDxWoIkhuckBpBTaUoVSTFw4EDZnp8SbtyC71QbCJQUHVX033cIY2olcGZdzArDkvYOsz4xjvWwa9F50yci%2FjrmDKzM9SjlbM4DmU7HRD7UUi6kcCqrJjHAO3hLw%2FagC1MRDFuPLE16y5X8bwG3Xh1lQtJ7wPDKHhq5AL97lELNSCVEYUX6Qe4TBSPePHUdKAeu1dh9aLxO3plGNJJQ6rRe9RrAzGOpX6GIJ38RhVWhpoE9dKVJNFZZjdSWEUqxxZ3hNN6BKIN4HHvvmPDSphuYKW9ozqjM9BeTwkeaUXGWMcpqTxKvzaJ1DJlRg%2FfVjZSnqI9BUvsBWHFQhHSC%2F5Ndmi1l5dMngZ%2Fb3K9lG1sZxbOVADSK7TpHnVvXCJRr0hTDF98LJBjqkAdCbeJ6WMXed7%2B50vpTgrZFFLZJfwnkai4OPV9pOlF5rqtHi4LeQfxV5jrbcId%2FEodimQgqQT5d60haKD%2BBJYcE3%2BCGKp%2B0%2Fkkvn7onmSffnaFWu9IcCxpqkRVcajrXwR1HSvLjfASlyWYhh%2Fo9JAOaVUaAqZ0BjfW2reWBeo0hefw0EVLYpsUEpRJTAvowN96Q10NR7WPzsMGfDZsiARN1qJBw8&X-Amz-Signature=25da73f294763c69583c4590dd993e6cb13495825681f27cda13a7a5e5f10d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

