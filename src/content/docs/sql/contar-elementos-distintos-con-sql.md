---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN4EIEUH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDsDdz1vvlbhvqQiPSCWNin%2F4CdKLasOW6VIfG7l%2Fl7%2FAiEA44bj2XpUTh3sswqw%2B8rTPIBgaEZB6SCjLmtt65D2HY0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDALFDSMGb5UM7uRTPCrcA0O11zO0GR%2FqDUsqcbSMV6Q%2FCjri6EMpx1e6wwMzp%2BIyi32THvB2Uo7WsnIGd8WvN2jIctfOIVQvQDWjsNP%2FeAkfOzE3QFUVWzK53aiWm%2ForVpVInyeC5dsfGr5TFgU6CTB%2Bl53e5bSivAhz33J5S4hhsO%2B0G1RAMNIcGAmPkDjuwhY1jaY9p6T2A3LbzvxTA%2BHCasT1ckhx6yM3gSktIB9jZwlpP%2F2EllrupABL5qoEKnYrpYodvmd4aiZ2r%2BuiyiLREd%2FWdU2oKaFcuV6s3cTlFCWivx029abafCZUq8D%2BktVapKn%2BPSNVJn78bwjvQIHdtH%2B%2FQ%2BazdWs1iVSiY6O4z7C6bSHMyXEECQ1Jkv0cycW7Xw0G95NS6ecmSz2nEDEEqj5EmHUvjl7QezYRLs2mgMgxxQmUTKl7gwqrLVfRYxwvrUEBa4JwMjHcxAe47YswbOeW573a7yzIpn57A%2Bv6udhw7zeMD5Pc3hLy%2FsYTXjKdpr%2FHBPz0W9zxvxLEtd9iE8CMFcpM81GlSlscWaA85l%2FOmwfQ4%2BE7zFZdiM5qjauswkfcrXozZc4cDKybkQ7B13lPXson6MMceBejwuaPYyiKLkU0MfofWxVCJPhF8bT9%2FKDuKmqkaxOlMIW%2BwskGOqUBBH0wHKEOv14WImh0WsmkZrxuN%2BfBkEsrhfaeNbo9JmbYUYcentAKlmigaIubvBxLw2h9R7lv6aBArtA8EM%2FLqd8XFUxpNcNNUr5GBT1HNlupeuHY1SGq2ZdIF8p6MZEOiU%2FMIe22NYDAhypRaf7oXR890N30uOh1OnQA3Ri10RYYs7blGoIWpkNTsIrg0NfPeEIhl63g0Wqw9QmP4phKwGkwj%2Fyo&X-Amz-Signature=2e54fc877910a7386f1142766683773b32512dfc50654a9a55913308b28fc41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

