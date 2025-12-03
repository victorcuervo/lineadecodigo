---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLGQLTWD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCwbwF6vZtY72639mZRselHrSjAyCtF9g%2BBzd8gErNOMAIhAPX5znQBATpLMSNUf8Ld0tnOD41%2BKzBQCvEkPU4yh0rnKv8DCDYQABoMNjM3NDIzMTgzODA1IgySCY97p0y06FDdHLoq3AO77t7Yqo0wmSSifhzySrbyPS87pMKJqZbAPhHEigVllv0t4cSXh3xAls%2FOW3TFaeaEdCX1IQJTrMzly9bwDiiqL052X%2BI5RA0jxP7NvO%2Bd%2FhVIEa9p1FxzdPY%2FkJ2RrvRXFfH4dfTSrMC%2FFmqheYgZN67I6RIWWYs06CK1wZ%2FD%2F9kKYfSi68J%2Ft4WHpB%2FImTMFph30aHCP8V6LI4o5RkdYULigZCyHDdJl0mHYaofrEiyH%2Fxecajyjs%2Fcx6c8IVQTkBCzICsq9fBTRSlZKHO5KWKWGJwSzp5kQyG%2Fk9PQyyd%2FsrvHb60x6pyZGFbrHVKaCov9DyHR9A0g5Vb6eGXLcyWJZQhsDKcJUz2EwqNYHAe%2Fd6HoHlOFHSayh1ctHruJlC1EaKBxvtQJ2J8xXgnZ%2Bi%2BTldohm%2BjNGNo%2Fykyr27ImHUgWlTdHhVO8zGQDoFwQgLPza%2Bm22vuPjVWT3jc7%2BpJZYPDGFYqRgprKa8kp2l1uQQEOC3kulOnmEo6xlkr07ZNFn3ywZ0hOWHSl6y5mD2YJhfj0eiIE7MpS%2BarRRY%2FFI2XIvLS0aZO%2BJ5GKA27ewHZEcBQNKn5PZeiMsjNudFTsdAkL8tbxzC9ENDBajz9HVy20fG4T3oyQR3jCyvsLJBjqkASFq7y55poWEozF36hMLQevCJRWe2wbTYSOsz3BO7MdoceHtXw6HBeBdbWKV7OWcAK67%2F7AOLBP1VKiuEafbGmzCltpZesCsGlSukE0Ew75fhTG1aa8VZ9M9CTZlQrN638fYHrtUkIFRAySTXHBEqZd2Ld1EMxjpKHbpLcquPA6v2%2Bc6kfvU5Lohi13SKzQ3vDNC7zo%2B23dt8Qmuv34RKx9h1PPg&X-Amz-Signature=ec06ba11abbd4cb10a6cb8c651aac195ef341c708e72c74a18da60c3f858c0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

