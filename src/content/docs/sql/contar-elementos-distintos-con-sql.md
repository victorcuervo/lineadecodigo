---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUUINXW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDULWk1w9ArpzlQa%2FJdN0yKIYpR%2BLfTmmauvvMsTaL8PQIgWfXTrL%2B6FgPi5NkgYp9weiF%2Fwl3wIbL0n8QHyH3qFdkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKOKQVbTBV%2F7anuhiSrcAz%2FDqqvRsyprsS2cY%2BZ%2BtTQ1yYWKmH%2BUUMwgMgoqJtg5fH6EFpH1x2VhMWiKyXyimMl16rkWYeOUDry1R3REDhHRILrqtqoUnsWKDg3DBGuY0BCI19EbWR0Tc7my9fW78%2F2CgpIhe8JLFpKnNWCcPES4MziPjH05T%2FA3%2F45NZad3Z3WRIv8RCOOn89E2jRdXgjioMRqrkaBY0FlV83ic1p5gcnAyESlOHcS4l0PLlOSZ3JhEOcgpJTsiJnWv1bHml24Wlx9c28qBz474EI66EkzzX5wIXbnsbZ0godH%2B5rL5fEwhn61R9BBePY%2FpTdm6BMnVhe5BKvEVKMTU5V9JS99zzvOjSGkZfZ%2FIIp9eOy%2BkDZ5j8wZW3e1wFn%2Brj0r76Omf7h2X7gNja42gi0nHmQeJP5u9Cfv2dm780tKzePW%2BQKG0bwyCCYTKa5sB5dTZcQxmUmnBJ5DPequY4g47SCLjyrE%2BZvLIKQFoLxaC2K1acVDX2PgsvN38f2iViNs%2FIWY%2B0pk8HPqoDJMBoeE3pogXTwT%2FIeGmmJmZTEf350ms9QL6%2BODXp81K7Jt2g1v6wvZRe6eTW58Zd04wELxn9FxMX27INkf9F3ICwnZD18ku7GhrLd%2BRfw2VMiwfMMjJxckGOqUBJM3l1h4ODIz7vBTp9ng772zMF1vljUkqPNtet03wk%2B0bz%2FSbKCPrss%2B7s17yOk6Zw8tehvaKhI1DOsQz5ql%2BEblUC%2BCXwbivZp01helvNowy1qUqZCFxYGBaq09TcWXDriZ58AXbJ%2FKrjjFvIJU4eMJBOP9DsC8trw%2FvoA5YJIXQiy5RLRFaiOWERKkT2%2FMDNA8u5qUwJ9V0tprTk%2FstpDeLITp4&X-Amz-Signature=ad9717d3f2c361ba62c32bc6a129e4ddc0ff03c1cd64a2c004c2e67bda1a1d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

