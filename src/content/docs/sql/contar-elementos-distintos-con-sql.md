---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJERI2I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDmG1hq3rlvPqE9Ymu3yIev59awdYpqWs4yR6ZdfC8XDQIhAMuW3iZGYeAaZKUc80t4nrLXlZ4Lj94ZSCHSuO24Zo74Kv8DCEEQABoMNjM3NDIzMTgzODA1IgwGuSuiUcEB94HAsc4q3AMvESUjOo96OQoiso%2B7lnbh9VWvLNRGxyAL1zH2ZfKx4rrLae9NpPaDjk2mUw94kUp3q%2FssaYjQmnB%2BkTB6ZhgUBIc5fXEEKMg0ckhtEeTDLtrZvE9dc%2FYvV0JZ3QaTp87Y57q%2Ba66QWde7B19kvbcGtDwqxFG0eIfGdxCrT%2BdhRCeHVNuChywlF%2Fh9M2F5u7PGBpDCKvbmYqNhsKGX2Y%2Fren9unvBInoVOGWyTb3%2B6cZpJeqrMARMW%2BKc5vIPSXc8Mvt%2BEV1zxhi1PdXZ26%2BN6uzBle58fuUMIJUshsxALJ2%2Bcf6AsiIWCVUYHfJpUZm2EyG43e%2Fg%2FcAt7pvD4uk%2Frobou%2BLrwZ97SzzcrWZPqx81H2xvcSTrlMNDHWfANrWg0dOzRS97pl5RJH41hKLusq%2B%2Fb7vHr3Wzghu82qfQOPafarj2ziAo3ksA3cmMU8Dt8%2F7AULQCVB4IsP6TYSkmSamPZYLaZN6w6RDo%2F2VD2nNoX7pVJroXWB599CejacEuDEmhJN74y%2BotyhTMXeSdGSvoSB15x%2FbX%2B4ExChDCR59MnbP%2FGNjCIyBpr4iABSf%2FEuKe72j3b4IHvL%2B8oTqyybVuPYe%2Btv%2FVFTwoWJ8Y%2FwvSzv1U3q7SWnzq5MDDkhcXJBjqkAQfd4s8a1qzBWuiUFrnCK9czJj%2FRbu%2FAsPpJJVEDa%2BKhTDg8CPaXRJpFc32GV2tp%2FqNwlEs9kgzfq3KWHNd6IA95vAkF3ffGnTxMQ2NCRKEAZE%2FyL%2BTL2EHIyrWn97SFExRJGNSPnYQ%2FClYe%2FuI2MrZFGigNMHYcv2dd%2B31p8Or5sezrAySe1j5FtanVaHamWhuxcwem3RCybdrZd12vUSvTUj3u&X-Amz-Signature=cbc627cbb73bea0b626fb457a66b1db9ee9b5953194a7a49d185bbd72011df0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

