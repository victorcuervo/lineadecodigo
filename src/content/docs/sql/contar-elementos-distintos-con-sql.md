---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4AAVIHM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIChMfqZViABhAtkNywWN5xKsmUr5Yp0AEgD40UOgJjLqAiAkGuB8FKfMk4BBIIWZHpdvP275SoHmo%2B86qIGXtng%2F1Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVZWs01KRaTaojOPMKtwD0txhugGJ4BffV2UEs%2BguYa8KNbUztSs9DhhRReqZfzzUuzMzx9IDyfXL7G5LY0GSZCLqeK0GUfSM0CUTf%2BDHaVqUHu0x3B2OfFouPFLBPYn6e1bN2GkR2U1JTgbNdFGXvzpDR7bfQQMJ6msbN9t1ToVdee3s5fqE5Ptf0CCLuBwdjtM4ht8rt%2FIYRo%2FMvMujh1Rvfbq5B0c%2FW5lgqcpM5C1dYyEBCSa8ecz5HTeALnWW0CWG%2Bi9nJjM5X1%2BQTiDnLy%2FdkMCPfx4%2F2u4aTec%2FLGnOs79yGn7wxJd0edtontEiDTfr%2FbG9wMDwM3rqB%2BF1E5kPefyHhxQPSiIzWKJCL9M0dqGjuAipZuO6mJsOpoMuTWONeUqaCv7FxwIzVbgtAfhWTvmXXlUAlqYdBOslSy1SGAi5hJYN2bxzEIdIIrskPMCJQcqALs7H64rENIXMVnqMhfV2N31%2B8HbNRsMx0txy0g58%2FDT0G6Ha2jPdyNcVNjjoed4ilGSCSg22BZpC5nrOSXRdE0XHnS%2B8q9%2B4vSeDCfZs2sbZALWT68PFMDoYHHifrLesjJvlEMkmYJ1tOE1bgw9UFN2b4xQ%2FLdQpNhqfdOt2EvErPIvDDLItI44m%2FcwPV62UUVExXNcwl5HEyQY6pgF1jYjLObgL0DXNgtoALZePUkKDzSpAshdiagOuknV6K4vPYqaIMvrzbCjoYkPUl4b4xBj4ZjDrgNpCP9B9Bn%2BWxAWNUcGInD7wLUF846pnbqP8coWI5PP7%2FEgEPErl3Oh7aqaPJNm0CvPQw1%2FWgp0KPxNNWz1JJXN0zuFubcEiCjxhz3Ga3mZ%2Fp1A2LPDcwkC0gsPvdnQ%2Fb5oAWUObjXQ4Ti97AdFj&X-Amz-Signature=d935a5fb87ab295ef7d6ea972e46fd012938985abc6e7fc9a2491f4bc279eed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

