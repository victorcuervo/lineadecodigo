---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R55AOZQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHyxv7lxbpWvsj15ZiUygc5LTRt8zAn2pVEM6X3u0U9DAiAPoKriivYoboIgqLk%2BUrcDKnKEkFrTB%2FilqnItiiSSCyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQ0%2B%2B7DWn6Of19AOvKtwDP3fT8v91YOgQjNvkeaeGwruGsRuvBONBI6bJb0gP%2BXZQYQWbr4u9SXSflbcRLR%2BU4RxqmfsdbdUGUPW5HMQIeNP%2FaRh5gTe8d1cbYaixYAcXL%2B6wHjjt07JWhTj2dRrn%2BuFONZz7viDnEBtPFRF3lM%2FXRBDiTb8gcM3G0%2F1XkYKpC6vfLDuuusOZ9i2AhMuHYklK4ZsNtLOCgWR9EaELSP31FGsxwC0uwcGrcscKEcrZ8L1XsV90NxS8gfBLFB8ra0HfLVBMTcyob1nh8ATGbxYILR%2BDI5xZmvjZ1jZIQae91wbKWYvOtuuVAK49G4KwZ2FuCWE363g53XC3oVCH60gHyrdVGSC96x2J0Q2fzL6T%2Fz%2BnwC6EmtpidNgZ9Rjmw1tTrizcPgiYc8jXB%2FT5jztLSLzPJ7XDplaBeL%2FFZ03ozCSEZaT2RxSK7v8w3SwdWDyQ0hHvR7zGWcPSOVyya5gv6hIKskegLJ4eiiabAB5TbYbODKCfgnOW8teK%2F5GwC1WYiDvs4DrIyLZFsp6w%2BMVLGjy32fowLPNNQgocJ74t6VZR75bieoGHp31jW%2FuoGhb06W6Krn8Rg4tdlUyjJ%2BZxAxYNW%2Bh8j%2FBInr5OQNU7f5B6qix1bxLwooww9%2BbFyQY6pgFra4IW5Ew3rvnVOKyqusJ9lBZq1PLsHh4RbEJIfV2H0ukrrrX8TYUqtTtnfVT3N%2BIXOViaHhlaIaRuZ8oY5RE3bSuUEumy4tmYw9qk2aPwlQR8DX3jPL7pOBToOG1T20TVa7s5mHPpF5ThS4TR6GEVQPXPIP75N4uhftZuuyr27H2cMoiSMufPyS6bNVKuPyJkRi2XDxTu9Fee5qhgYElWs%2FjPGrnK&X-Amz-Signature=8232defa977b746f49c495d7972f81088fc4c65183c3f6f79a493d1505ab33d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

