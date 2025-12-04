---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLDWY77D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICxyciwFAF5kad24gSaWZopsPP3MrNAL2%2FtQTsP9%2FymvAiBoZErpryxfWhqRYWfe%2Bl4jP4hYZp3mz9mX4euIXhAMbyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMBEHevCYCFDhojjvEKtwDOm3HWNrXG9S7p%2BKUA1eukk%2FX81mtBD6fj9J4UPkNHL2pTTde2SsgnbewxXQP7lQTwbITB3%2BH5wY4Kj%2FSaBsRHIXMvVJvD4cQk63qo3vmlsBqWAFaFd9pl8YimUQwHeuJNDFJRDtXUz2NP7MGbF4T9icTKsOPL%2BxQg2qcSK%2BmMc1zSIwPie1%2FY3Aw1lXlSF7nduZ%2BaacuKg7HSrdcSxgNgdLjesy7LzvVAQdjissxzVe86NEeT9%2BO9NiDkoWhSlpgv80Hminj%2Fu5uwIQekGcuhBsmnXyhA9y2uD1DxSR04kYFlntXrGKKQ1n4KS5WbmrYhU7B9oz6oz6ZJ5JcoXGMeNrblusIUx7cZ2BqJGPDl63TyZ3%2FEt1L%2FMrmawPDAyfqegVLbTjhgpro7NgtXmn0Z1e9lvEsNAPqxyGM6koaFNgGOKj5mvjKSFic8KQYFJF2f6fHlQlG4vjRZGE6a%2FUA4gpy3sdh9DMEyKfZtb%2Bo9QJRs0krZO%2BepoiiyU%2FiYl0H45wy3tJN%2FSaAWZIhdzGgPCcSqe%2BE4aVLT1BfiYXV5645TaubU1WuIyQcpW8ZyFCP5ewa3q28M7WRf%2BJD7FH3EnuYc0ohTPCk%2BpPCfbZvK4AbL1%2BksJA1U5xuHacwxZDEyQY6pgFrVCbnUt8KEXurpc5D%2B6gTMEfQSymfLQZ10Ty7ijRGD9fEZNMAfYb5kPM0%2F8%2BN0eNiNQbcJYm%2FnMpol%2FE6pJDJjT3isC9ps28jvaOI93%2FXLyrsoA1O4OS7az0PiUQb79ioBafPefdEYhd9obx9%2B6eqUQ186ymIKLc252l8CuNjgMleJ1keotfmEgTSfgoxUGon9YIQzNw8L8b%2FYuAoiMRlbib6RS9G&X-Amz-Signature=0c725aff3dbac28d37bbc32c71b5654b2fe73e4ec6d3ae98954a1289ac6d054f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

