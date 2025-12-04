---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXLIIYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDT08s8Jl%2Fagz2yx39%2FYtE5TY7HY9ozM2XGFQFv06lg9wIhAJJMXZHciOedAoHTOxxCdujZsQEihs4R9o4YXQh0wmKPKv8DCD4QABoMNjM3NDIzMTgzODA1IgyKr7pSnmozV8%2BEpBMq3AORKQTGZABah4cdXH6TsjQVCquZUp%2BfusIPXafttmN7f%2BWc6eBo%2B4jajdmRxX9sP%2BwUgBFpqGjdHuFxEmX00GYwfHDxrmvZxPAzCY0yDxaHT%2FqoaXok04itaDOhb%2Fq3YR5TJ8X%2F09XQ394G0VIOMJFuBIHYUAxab1iB39mTxNj5sGr4QnyiqIewlZUp75QoDloIlSoJYgvoesHVemKaAcCwgGTwBgXsCXBPcPjNUFmevnPw0xJcaEc5LZU8LNiQVK99WgiYfIDjQgtJQzr2NBIS%2BrIa3DybKbuc8hKypk5wKjGRS7gy1cBA2zi6w9eLMYbF2u%2B8%2BiKFploHXT1bvjNK%2BHjF5ak68qqbJCmqIqsA%2F6cAXxfkaCiYMgwLUbD0n7S6%2Bnpr4dA%2FRpYQDSzKtaDiXWr3lagvdTEdQhhpbSqffSoDzlNhHKR5jDR5s9xJykERaj9bhbZ1Ji%2FoNve7LaJbloCEQK18YkMpWCp1HEZpo3HWgG7GL%2Fw%2F5fXscV68r%2Bsda%2FkhdTl5Tbntrlu%2FNainMfwMhoOua39Qdcg97J0rXTZE7sH%2Fs005XJl7ELIMia7MT8inhseDFirLqxP0OI4p25hy%2BunPisG0uncwBczBegwg95sn8QlZYOK%2FTDDrrcTJBjqkASGCF7vvX%2BNp84teCKYq9FhNe5s6Z4Hygi%2FNa%2FmTmEEJaEb5oi4DwsVXMKV67U9wg6py%2FXn5svqJI9rmUhaWkLpQsUOMynlla9s7reRVyHjs6YRa3ioyLInAPvVbU%2FJAnPIgsIaF8w46X9p29M4vW5L%2Bkh6AhAqSCyhonCweC5jpb9kUb3ym9h3Vis4XoBt3Oe6mmpD7wwu6AxuL3e7hARNWQztj&X-Amz-Signature=e3eeafbcf9d8daa1f47ddd149257fa061afddaf711dd1ced10c474547f7d0a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

