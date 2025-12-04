---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMVM5EQT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDOfZ9WVfxUFxCbo0nxMMesEIX07Bg4%2FQAlivgscKB0pAIhALTsjwTFM3ppt8MAZEdKhck9DZvqnSxczn6aQ6kjA5FzKv8DCEMQABoMNjM3NDIzMTgzODA1IgzVx2SeR9xATWp8Ygkq3APOKJmzcpcyQ0dpT49hI%2BZZplpIAxRDDgTKUx37%2F0S3oN9dgt73CmvvUdzsQCgifH5jAYVMrAgrjN7PRGV%2FTEWcp6W6E82aojvR4tSy1m0SUOuU102kDgR2OmZ2tRBH0NxCT8D3hrPzyNZ4RXDq6%2Bzp0GVk%2FS0WZqIoGULwkkljHBAntg5ZsvfWa8I3hN3EKAljCg8q32Fn%2Fhs%2BhVYHaquBu8E0nxvhp1XL9hxKiaZsuCwKFSs%2BuA3H42ulJyP7B83Atgal605qMwNCkqvcO2jJ0gBJK%2FMHsVlc1h97jMvg3aX25BHJ7UX8TiE9utrQKHoonaovPRoWYeo69V92nY67FAHCHl3H4q7j5Bs6hGFG2YLTuLF9VzESUwDTCDidGwnAJcTtwh2VxzFUikK6Bifr0z6Q8tAE4Mmq8I5NZPBLcgpZh%2FECif%2FREwogaVDFVE%2F%2BzYXbr2CXwFKlvZWRf9FVx53IRXUxdafj8Q28raMkpVkr6twdJHFDcvdPDylrteMJsvZSNjF39r%2FLc7xmbQalgb%2FfwcIfR9LwM21%2BdkyXwvJ%2FJS84uDnYw%2BxMcFOex0th6vQ8kK1A057qjinKF8JCeEOb0rtWWPkawFW5K5X%2FJt6FOMfbtxHLcgYhQjDqqsXJBjqkAUWhAH%2F%2BkkAFRcAQDOYF9ldSC4CW6DsJkqH1ynIfrwSFjS9qrOjNvVo1CAjvfcoB9dt8SMZyy%2FYfAJlOay4NrUoucKjOVYbMa5wjPKYNmgn7ipiUbTvjdX0iGf%2FCliBWQAVnHCZx5xPR%2FhXfkQU8egnpGSR7pLVmf0%2BG%2BoZGf7GpCErB0hFaQ0HNG4erNDaTAexvwA2DnFwJoPSO8KYflo20RCKX&X-Amz-Signature=0d2649df9b593044352c9691d18dc752e54d6f97c5ab052726e1cb8bcfb20246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

