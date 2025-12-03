---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ4R5U5W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBcwTOGWPIcxS20zKOIRd8MoSUBq%2Fwux1FAmt8qOyd5CAiEA1GB%2FB%2BBfWCMP0IUz0YTA%2F0h%2F0SeHYYYDkdGS91qp040q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDIlYQRFowasvyioDByrcA8Lay7HOr3kq8BqNQJi6IT8el8B6AR8VW7G%2Fx8OoYZvvMOs6HqxyOldpt9qwmRli4dky0olq%2BfTG8DLfi%2F3Lz%2BOFaCuWMgkL2lPN2hNRd1MWQH2QTqP2NvZcSSLskqQIANAUBTGK3VHMeOsvPH0KBri8WQuwDf5wJ33%2Fp3ymtXOBCBiBl1NaZTdXJtvgVXLvBA8fO4JSelU9wxJvgaJfeKyiM5yukCl%2FGquzSEe6vKyhKnaTurFgBICmZw2IXZRgYvceEIcMVW2onuFQnBjTNA%2BRwFrc3gJAZx3Eg3ylygbh6%2B7vJrMFuJxafzG0kyQ2qxOjUXxgPOfAus952DuK0nGyiKJBEEkplKuq7d5kxnm8ZjnlmIUrYNvHA7KGiV4SIVvQiRSx%2Bl07%2BOm3KxWzni3H8%2BeOG3zdhLksqt1ljH0Qu9MtgEU2EiGa%2Bf7F62gxss%2FRr89JGnP6q9NSSgEq%2BXFUF9EMXcOAOByKDVJztPvzKj3LGHB8D8TrNPn0ytb782vfor4fcy%2FcAWcrEzpMlDQZ%2FfrrrOrdofFe9bZFhXUijTn1cjtHE2W6CTXbqL3d8qTM0P1pMkg9g5NLzVOcY1Cu%2BL82UjRAqiR0EBM2e7fP3pjbvY51yVIqgr1IMJb%2FvckGOqUBchqcGd8rS%2FKL4ccHKEzdg%2FgRu6O%2BalfcD9VuawYnvPTL4SR%2FeIGMbDBFW4%2BltdA5UF73yWoHcJkV86cUCrcbnfgAuok%2Bdst9USBOt3EXLURABpP5RPU7s49R%2F5GnIlFD5evNK%2BAoBv%2F33fGY5YaiDwhQidah3TVFDn0kdnO0Vsv2hJF2xx%2Fvs4bRnww8Sxz%2BGT1F3D7P5l3nyHiOdAd7jXIKF4q5&X-Amz-Signature=c67ae0ddcb78c698eacc8558d67127fe925e300abf665c257854a22a461e7d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

