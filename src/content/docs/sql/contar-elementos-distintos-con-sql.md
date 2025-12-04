---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFT64ED%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDmAC%2FTG3DLbW17ji23n7T%2FawB5uNG8qVXzKKIVTTFHZgIgCaKFe2wZIzI%2BI9f1YU1cvULORoyOKI8FkQlSwGI6lvYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGrPUpGElc5TW71lsCrcAwoecdBY2J5EdcuC3O4bwonUl4eKhdzBMuOrcT670Bt2XFfAKW1%2FnDWcivGosKeo%2FprXadH%2FMBNGAUi6KvMRItvPqbUsMdBn136ntyzLcosXT2nwTSVTdGy56RmuUD97gaQ%2BJ%2B1gbllrJI9gnMJSyTeXBAtwL4K1bCszSkhtndpAiOH%2F6ly0tBg79GIHSyw6P7lnb5t1tt1XFlpAD296Wu31NJziEsbXgh8sFvqTia1Rc2%2FObexgAZ53kH6sUopyCW3TwUJpsWmh6qm%2BxQiWEMlYo1F7ydDnTviiTquWxmN7pyIG4scwWAbxjSyxWUR%2BQ3KXZJn0DmO7WGVl17GNiqFFFavGaABB4C9jFrq%2Fxc%2FAdnzL%2FZ5fVcrD4ONNdbzd736PoQHiBW%2FhjCrcMdqqPNbtGuT%2FBj8Gzk%2BHSBa0E6deHU6m7wG5fVdSX8uY4MpDf8W60%2F5Cx3jDcZA8PHxHvcZorXS0GsQC3eTlCUXPZc2E2SKKz4cqHA2a%2FfCNp3H8MC49%2BX1zlM7vsjdI4U4jPWM%2FNgoxaJE%2BMYkuZITXwKlO01CkfEVjxfpoGhTxGjdeG1nDNdlitQGzBA6YSqi4dD48jU7fW8SQMTwE0boiykPqezA0oYzCr1dA%2FRg4MIyQxMkGOqUBTIM54ZMg4sH8K3SFDJ8cSFsjDQJDOfwSmXwPPNaAk4w9eEOByeLMaDNdBdnMAQeFCyAxTjYMZPLNYf%2F%2FAnbv5NnVU343SB%2BNJ8DZQ7phx2MV8Wis2P7I9R8bLUTqlLpClCH3XuDRvlEjqe5RnxxKEfNje4416NKAmSXb5y3cNouQNu8erc4zjLhiJ9P8L5fcJk8fXD2C4tfXSVh9Vh1K24X9Dynq&X-Amz-Signature=72566941e6bb4d0834d905365842afc086295fbd2d6083889b8a616fc5e2e1ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

