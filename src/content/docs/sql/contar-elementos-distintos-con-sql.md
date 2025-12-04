---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QBLVQBW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGnxvT47hSwG1bU%2BYXFzd2uYMFl9NwYssGTQAFE118KqAiAvmU0omOR8jmoMQ0bwBQH6x%2BxROwqw2Xw8r1B04moLMSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVRGErSVBVIyM6RbFKtwDmmekabCbW9YG2eo5svAkhqb%2FeCL8TNUsd0CR2ibdRpX%2FRrD%2Br396uBknhhbLNWu%2F6SZb2CJkKnX0Sxi6x%2BD638UaBVAt2POugfsVMnE%2F43h%2BU0HV3mXWElVV8cwai4LJCxGi2NHKaIEtnjGxZTth4NDY8JHWUzmirUChBvNqEQAhToGYmmn2%2F%2FtzYTi0q6kF%2FX9bPQPDHFUlunF%2F58ZfUd6lnG1uV2BAOT5awUEL%2BrtckQMydDiH%2F6mv%2FMP9CRrRy5GqDFXY1XBnX%2BCZwnuggEP%2BixmmWzfgOW74TmpKGtpsRTWvYjHsocshUKlcTmIkmTSxqJvX%2BPLtKFFuskooCXlulnCno0qbDRiqJq7951R8MpxSlusVdf3i9Uo9xfwtgGR0fkcOOimPCbEIuncM05EmneZ0Tl1zUSr4bwsOHrUR91IfJKXrVOQxADWs%2FgsCd3iFli4d%2BPE9J17JPJ8rvp5GH3l0EKKa0IOrI6YLeCnmY8D1SbPgpUkFYoOcX9vMjEshlSk5LaK73JBHPfrmjp0AIljYkhgRrkpu%2BFhGesJe2g836VNfFq9xDWSzqnE6%2F1mmw%2F6uElcF2PC0BPSSFdxphpGfCKfsnKQIIqhPMB0JjN%2BV1M0syvcLMpwwv4bFyQY6pgHVj%2BN%2Fkt4QmCrmjLFAQcGRZFfpwx9oe3d7UDoKrRLq79mBwsGe%2Fvamk39UuORBSdu1zA7iq4r%2B3dBzQsPirnxtSo4Ls0gbJVbSRG%2FOlcXDeljZG88NXRvqFgqCQDftjTuLQqP%2BdUiXpmPgAYKsxsFEAR1JRIC0vzH6PvjMK4BvOpc%2Bv8KCONQE9CV0o%2B%2FjD%2FpxSgxnSoJZ4SoK%2FZN%2B1pw1WBu8PLEw&X-Amz-Signature=cb7c012a4357eae056056b8a15ea10c80a8e29e50682f875fe7aca71a3b50e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

