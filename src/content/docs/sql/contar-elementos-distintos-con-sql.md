---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2O3UQUQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD%2BffJ9VGW5XatFzQkMyCixfdd4Rx73O%2BqCEc4rwE3O0gIgbR0eYdfF5%2F0aNszIVxQsedAms4zb2T1FxDtCcjylH%2FAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFfYZYowD51FeuoGwircA8GwDVwaSjXwF1T5YhRWbrEdTek6tMTJ330LttYxqKdLFBhm7zovIcI57iK%2FTyLaNJHKVg91voXkaL%2Bbxus%2B66wtUYnvrVxXUFkmAD0J7hP1hNzrG4%2F5JFW%2BVQP7L7cp6uPTjwXKOF1poz7A6hxu72m5C5nXaR1zXOJNfr%2B85NbC3vmv%2B0mw4W8vNhJZzMRFHd7mv4CfcDG3B8rT%2FFRUf69kY1Bg1%2BlMinqT0zJEG5MGt3wgpFeWwUxjubZFyLWY%2Bv9yRyySZcgJOQoeiOfUZ%2BdPTbZjflttokvIHOfHBcogSIzjvks6ZGe4fpVPVrvttoqm5XCCKm%2BQ7oFRCnekjSjNZ6%2Fp%2FVhMqLU1cxLdt0XwI7w2IELcgGojfDG8IxG7lL%2BhgtOKHErgrsMRq7UBHlciKiynQx%2Fv%2Bhm94GfRKXODtXDG1nxBF0POXRD2cfV1Moq3MC0RW0LgiuylYdf4iC3Df6ifTBKoYR6dJ2kUyFBYfMUntIQ7n9q%2FlrBMBoi8vLfPVRZ6RFN8p0nM3SxhOUI9MgHBd3HIqq2cBe09yQ%2BliAh1na1u8Kq%2F6VBXCGymcQrsWsj6xaUANX0ZDnITNfe6qnv9wzp%2BRjws%2BwXZVNrjVCErDqHiHii%2FhK8%2FMJ7KxMkGOqUB2ckSzbBRAA6ipMybgrPmAwRttQahyPL%2BJAYa7JRFqkOmvzpKIrqtQuXpoFLp5sRGO4HTjJ1VOmbgreY41EXEt1pp7Sh%2BWjGDIF5KHgjRwnVd8L5tm4J7XUtqgB3z1UR%2F4ytI03a9JaJHO3nAxQmspVlp5H4g4pGKgEkNiCLjAv7lFsKliIjcXl4V1vmircFg%2BZzsrNh8UGkL4T%2FhVNQGF%2FXmkTtZ&X-Amz-Signature=09c48d564474e18fa894553de824e3fa68fa22df2d2e3e796fef0d718deff8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

