---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THXPQUNZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD8vghECvOXn%2F%2Fjl5ccoHBjYrh76Al47L3MESD5cnvtngIgAgIOZ69iVEu2yktyIYqj4iTqH%2BcfsrSEGIAkkkFo5Zsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNmJwnYmKsgDnO2hrCrcAyQJKcMfk3D4AFiKNDEdQK9BLHernRmqIgVOaKneciOFXziD3jSjPBWm6nxJB99NIm7CwDbm8vI893%2BHfiHmJd9vBieP3BroIUNfnNjc%2FrtUDEYsyfKCDQp0M1zratWIZWASaUCtrNcebWjf2WMMO6ojajxRsssu9vcVCmUCEae3dock%2F0FTL2H1NWJw69FNFdXI6QzGBQvchIrgs%2BEC%2BOmmdT1lw5QOsgcVckctrC%2FfXBOhFQL8K4CZMnOxuNjbn5MEIa75bBpoJ%2Bxze%2FEscTD5%2Fiqa8QfDtU0VjL1UQSgNVemUnIzum8n2Urn6lXZdtfPVTfLLWZKjs%2FEIOQIH7L8v15%2FQqd9xN7gwrUvNl8WD3df5x459eFryiGs67P1OYURj8ETsd1u7U7Q3Yc4lfo77RuSi%2F4riyFA5DEkpDYKQmLnu3MiKI3g444AO%2FpX%2B4m%2BZPVzs9jUmibHi37aRvE%2FBXVdkLw4M%2F9elFAX59%2BYk1JWXK8t6ZfG4mf7xKBFuC45%2BXxwEpumAnQZsqnyUwFB9hFWPSmMz34q%2FHmHz4SXGkSc%2FvOQSA%2BN0nLwXmBF1h8oqqzUBTxMNhLXdIMdh5sFoU8RFDsaguOFzoRl5udmmXTGuEjg4Iysuo8hZMJ6uxMkGOqUBwExF42fkYH0NsVWNTMCNjczLXTyYzxqLMqTSspol4y2Zfr%2BY1vxw7Iu%2FB69YN%2B4XMwXqCAWx6T2228BlYnu%2F5NrJZY9bEDjTgzZqKYOuEuxKJtKiJZaizdlPM41%2Fo%2B32fwzrPktbe4oG53G6%2B5r1por3vGd4PRuruuuuc8RxaFLM5TxbZifbxO62M7wMftbfxsEPWMuC7g0F97SdkFsD2sH%2FDIWC&X-Amz-Signature=06e49302da13624a2cd4dc14b7f28e6ac6e9685ea2750fc6e5c1ad371ce0541a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

