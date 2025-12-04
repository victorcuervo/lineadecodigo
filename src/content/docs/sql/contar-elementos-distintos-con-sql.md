---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W732XZF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDrtaBFe9R%2FcgwROr9LZlVKSGd%2BpS9IJaM82%2FDDH0YJZgIhALQDnsvyDbM64Pqj2SliF1D%2F%2FEmBWRMHn%2Fw6CNm5o%2B32Kv8DCD8QABoMNjM3NDIzMTgzODA1Igz7fIwpG2rX1uZ8w%2Fwq3APN7pz%2BgHm4olnb0uWYDXulpMHfiKog17kmt8vFEBq9RGHbx3595h0MNBTFQQxWsXWPexZVOPAexH5deWHn3sUWAdOxIc3RTV4DAjKUPnpZ3CtqvLsm5WQIrAW1DEEZkrzI%2Bpuv%2BZu1mGOpXa1Eaj121%2Bx1sU%2BKPwnN%2B8QxGecC4%2FqvECKmssAv0DPNnwuZhTlj2VGBcAV%2F%2BVs0ctgq%2BMXkkpx4zWMjh%2FrBJYqtfe8gAOEkSGLzuQCsKLcrr6VNdD%2FguEX3KRIMWZvbqTVzQ9ROsutn9tTKyWrGumspdw8ZWRlMrkFucQUHgff6jTnHpxCVP0inkUG2Jmd4yzXB2ieys%2FaPjtMH9Nh1y2D4p6EgqPK0Ze%2BQns2XYUvUB4ocd1CfQ1lEUZCBK0L7LM4mTzVVxxTJFM5ZfGhLj%2FlRqBR7AcCmiKL3h6C7w6D6ynj2JXfszuonl5M1nDrLtbwZCGy2heK1v6AwJzktSIZdR3xa7K0KjuLxfX6Gevuyfiy6PtoeeTzJFPGSJSU89ANWc3%2FNvb9l3fU%2BnGd3E5FKwdXfwtpdzwBm1TjD8YC5e1o9x%2BlDNtQ4OQgLa6nRRJBfCWdlFATdqsJGgNH8BIbBoxTNi2PV%2BxH0hnrqOsLvkjDjysTJBjqkAY01MhiNxlmvSCv7WrRxVNb3lGnAqI5WkWNgszVRuj1nQgtnk6OHpa7LQ8zoN15vyz3xbM2lQE2r4Od1%2F4gJRh%2B0pTApD8QTM1I2InpL0IuzrRVDMUkmGiRfJCM3aaSTF8qTf1AyrokGzd1gaIuSdiPL8qhF2j2A%2Bovgw5h7xPfy%2BMj%2FXva6zv1zm0XzvhstP9ntDL%2BBpYjLvs1Sn9%2BazpvG%2FHhT&X-Amz-Signature=3bf6d9216e1f6d976aace17616ac4964963ff650a66efc67f9990c3829b15d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

