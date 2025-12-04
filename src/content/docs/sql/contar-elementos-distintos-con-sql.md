---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI7GHFOB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCDIE%2BDJnsSiL8JUQybe0qrXjl0bx0Jgs%2FVpksOwC4adwIgT0WhBojdsox819lCib8cjpNkwzAScsCc3UYZ78sEnZEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOIfQs3YYDrCG9rkMSrcA1NeyCcOb%2BGXzuxNNi887WbfCd5Qs4dU0zdNJw1XndfjvVUlPbPsKw%2FBaIg4%2F720UPa51cjweATEPh8ya%2BZ%2FLVC%2BSMeYj6iDwvfumAttm%2B0fxx80qWuaJzsWO0MwUEyAd6Gr4y%2F8TS%2BivDg8G61EJ%2BlNN3hSs7cO51MK4pCT59yBm66ajAH1vdRAp40gmGpKPagXIxWTUuKVBKu%2Brfmy83y99Lma4W78Gj7hsKQXxj8sA%2BOaz270BYFxxR60O9j3YhKQAg0n7oCID956R0Et0H4m9D2IvXKxAgxlCxJI7AR71%2BSpqstGmY0wGO1vyzrtSiOLyjWR%2BW7vSZT5NsN0ClegS8cBdDJwW74EAxNKs0LzyvnlvMKFqvu746u56k7uneszYLAkmdMJ4o9W4mgQefsbGl%2FwTanGEqrjymg%2FbiE3eit5lrSm2oqkb091LoT%2BKBnI%2BsFbDPAAscY0KfNrIXBxyzzGIzc1Fld8V6BkrwXpfIQpzT1UYJDRaFMqAw45shXCQcER8mOWVTwXUxmCzyK6Ckp%2FYRw7YAcgzzYELAT3UhwRWBLM3dcvw69OUI8MF2nV8clX39u40RlkN3Gp4DUsVaSwoujlyS7D5u6pYW1GZ9MjINdAaZKvIpjhMNbzw8kGOqUBs%2BJf4B%2B8nT0dm4TIcAWtZwCfV%2B7qs1qV5negswRGU74ITFrQXpIKIRsTUBolq5vuMjT6PEO%2Fdz1cHDT5khXiHI8mDP8YnknXbjTaqas6Pd2Nam0hHTAV%2FpnJE9L6cFyj2LymaWfGGYIusuqkevbUrIDKuYUuA7s9v3KMeJslm3xFMDxajbubIiVJn8RTatfE2DiW3pE8XiJ6l%2FDxhPqze3xazZ4%2F&X-Amz-Signature=a3cdfcee34562411633ec0caef20da024d05c4254eecf347ebbd5392d8c55a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

