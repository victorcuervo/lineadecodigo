---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUV2KOQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG7PRu5jviZWDcp9GPw548zOog%2B12bDIri%2FeO4zjf%2ByiAiEA0gyTjvY9Tbu3Dv8kX8KYZt835s9qXpi9RmRP1Y7VlL0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDoG2%2FUOCha7kpRQFCrcA5P3tKMxUGdlfwwSrccFKz3yJbijmt2pr75VVRCr6utKoNYCE9cMePW4X661Z00ijCh2hrPlFr0PKzSaKj%2B5nU%2Fj3tlBs1DA26usMYyBWzVjRdkMErOpENp5kP4%2FW1mI1gaB%2F5UmEXnWHMJHljl8WhOfRiNHF0Z3%2B%2FmkpBQ12MoEb1zBhnloOkVy1x7OYHawrzRcg7vavK7neQEBRcb1B2jCX9Yqulhnax%2F4OJdWa8KlgFMd7kivFZvzj0zZj789sbKk4ghmT79qx7OetD7QUV%2FziRhlJZwlw5BAuAyJAVEdV9%2BN4fX5uxYnaNA%2FsDyD3xjFQMbGNHpoBMFlhV6v1e3BMTaWL3niesHbz4rliNE9uUk5XZUiRmd1JBivPFPxcr1zbxB1V6c9iVuC%2B8Y8V2qPja9%2BHtQBCESY73S3Orp5PZQIJSetBu0AGaCOwsNJoNhPn63gdpgyRHnexyGsPNJyu2SoHT2zQqr2BHWGIHS4e2RQK9F2WGfB%2BxdURwB0lR5E0Xyf48Lyv3un1RnWt0T9Pyr4HRmzXmteE5bLb%2B3X1HzPJuEpoV1ch%2FD4YEao1QppL6IqbfxBOaH10HrZma8aZOtkDH2XdECLSvbtKtcBJnFHPvMM13YaDozpMOrmxckGOqUBHjZJZufYm8%2FtkyWlVZU0VJ%2F2OR%2B%2Fiv4gTRGIJzytA0Te0B87PuDlZVASxfgTQkVNCUbTBEUiTYubDboL%2BzV0%2BelqL%2BzsS%2FJk3%2FCcKdLUAcxhcZ7mSgZRyPtdIPidHihKaou3KJLh520QAdVwsw9Fx7rapfqX%2BKlBpyTjKRSO2yGAdJtfBSrXiHCletP4YpvS3R3G9Ej%2Fo4X306lvOgplhPdr2HQt&X-Amz-Signature=2348805c3860a110a7b6dbf23c1e026f7211c3af9eaa09cc6e90633829907e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

