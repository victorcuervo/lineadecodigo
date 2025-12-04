---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZT2NLZM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC51DZ3HR3tNncHYXf5n5Bz2jFC2eYGDTmOrE4CgabW1wIgdK1VRTWfpPtGwTKzZXEcEWvKNDKwaUMSfIiCVNvAdNcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBKsT9pJEwXOljovSCrcA%2FyRwb%2BTGpCpbeUEtgW3rBzhw0qiteXJpi3KgQuaDyE%2FdDzHvyyooKwYYy8pH%2BJypgR6SWx1UKgjLYE8wjoZj08Kkvz%2FO%2Fl7hYFI3RHVs542SEK0O%2FV4CnmeBeSruyZJT90Dc%2Fin%2BmKpxlkldpYJIcwqOHzq4MZ1cEfQbFLM18DbmELCOcvEtcepAY4jd3Ylfs%2BTrd4S%2FSLa5mJE4oLsikMLuW%2FqCwrLfVxIpi1761ssYlp6O7C6E0ORfimb%2BjuAzjpf8Jq1mEfyXHgjvu9E3nC9l%2BsipTSOWNmZdgRcwWScccCspXx6e2cCOGwEMZPvJdPEeY6yH3s3o5cxuFsKSK5yYG94Tgi92HDNCe5tW7gcgPuzWwXdYQtt89k6QreXlqEgMD7bU%2FCGwCoJYWPKfRn3GtwT1y6mbSvQWpfZRhQlHqQmCqwYpTfU2Ixy8oDIxZgd2PzrTINs7gzCYd7exz%2Fyn0dDJg4%2FrocV8tidJBvMYjeM0nV9fXcmKcsfs50yMQZrmdo45AgBBHri6H7whI%2FCUkvhKZUMrRzLoPOk%2FvhPZzplPJyba6oajPL0a%2BUtbb43U%2FQNXQyngSZhJQ2%2FCBsMu78q0NRCCkEeHvtMPnQNmJvnT6%2F5nb3yKwvaMKK1w8kGOqUBPW9pPor%2BZ4SIfGPE27cru0cDqEkAC%2F%2Bge9kVQX3VF3qcBYEbUglH50qiBHe2YSYbMu%2FKl3ctihDgQkdeRBReqjruwp%2FBZZypzcqtyR0I9QOFLGAxjEP69eURenrkOllWbJMrLgeV82VCEktABrGPTEfj9bhme20QSunxAgyZstcnxK61SLSuEh5SUpe3iRDbyitATVSYZEc67Xmc6iaugUoSW3gu&X-Amz-Signature=abe775bbc20a4296f37efa585d6d1c81109ddd9b606adaef70f9d5a0c8cb6934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

