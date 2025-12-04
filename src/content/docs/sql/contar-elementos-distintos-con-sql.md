---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQ6RF45%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDPRYk9R5yEf3pb%2Fc1%2FOUYQxjMoIqdpnoXNMDLTmG9MdQIgOErBve6Ca%2F2%2BpzSsX3ZCg2Dsfw6IrjaF5HUfhMw0uPsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIqEQJeZuftWYP8iaSrcA4fUZkiNnkkVaDfXpHxk%2BZcxHwTi5HaGlWEkMSvFbHzl5pRtfF%2BkhpC8lVDQGExdqAc1QEoCWM84ifJ6AuCVQ8Gx6VzwxEWCuikN1mms7OcL6oF8SYyZEwGmaKiOBA5tefvrtSUD81Bxn7JYXvK4PdvFgcoSGRVPS0hsr8JzEyQg2WSKlpgfbhzWfEZw40XjokRGidGOkQBgLUdm3vzrolIgk8GXH7IVElAVfYyfCwhyX7fKKRVCZyKg1q1leimvWf47K9HWaDYfy1B0LKY1eihZbM7rZi8CYZlsz54pVbQBPCaTaOPX9GJu6%2BADW0QLJPJ%2FWUJz6Jvt%2ByM%2FXa6zMbkESr69cvukM6U1YiyMnOPcdR%2BNFYQW8VW1fazESiBSjNN97tR1l5%2FTbE%2FINE6U0qG3Ex%2Bg036xg5CA61pX91lIefkQuOJguePKdSqDbDZh0RaMPvi7jcubs6O5koPK9guKaBBBisyS3kQg7CdtvxyI%2FlKw2aHci4J%2BeXHNUuzWneLkccl67%2FuN7LA5A%2BCI7CJeeQ3lDKdg%2B3zE6NLmryFRABBYtvWG4eb7%2F%2BQp9dPA2rSfKPG3KQlxsa5WAIPtCMkt5A2JYWgKu%2FEIBbrSXvFCcAzqUoTlpGs3hJ9XMM2GxckGOqUBQYV7dp%2FcGPLum4FmXwg65TM34n%2BJ41udlFu7EMxm%2BI6C4299cE45Xkga6IitvUKJ3aUM%2FmVDG4fvMNCQs2r8uN57Seh5AyCDiM5xfNGMgF3Z79PUMAzAcgA%2B4gipWrUT0hkfQsDbOx1GB5INJyS82rnSDifSugE3WRjPLoq0oWOla6hevp1SfHN4GO5uk4WgNKWbulDJTtUO6QcEYZcaYWykxydj&X-Amz-Signature=851f20635988343af233c0496cf0b977dfda2cad243ea5a4e33cfd1f2b4eedd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

