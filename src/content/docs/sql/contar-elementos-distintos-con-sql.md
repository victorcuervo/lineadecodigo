---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD3J7U76%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICOm0oFNcHgrOke5JvsVqPUu8rWjhOOc58PUdODNWVKuAiBaBqxlGyitXWLma2zHSoutF3eIAkaMcM12BFTU3ub9%2Fyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMlxzS40kJHTlfCWLoKtwDrlOMBL65rYZuhvKEp9sMbYa7Wk5kNzgYEN2pcXqxj5OBvTjuFzbboT8x0mvoejc6DI0ytFMYT3V1NoiMLVWo%2FSZFDbTlz%2BRh9ImPJJT1UaKCbSmIkzGgODTrBOupP%2BJEhwc1DP%2FoDdQzym3NN9x6iP5t%2B3S9C7naAUrY0ai1HqkMZ1bCQjYxDplIwVmufdepOjmYZ2%2BgHPQujTxMCFq2mZ3wuMKD3F%2BSW0s%2FWPdKcJ035xOWTmAWblKF9bew81PZqpuQcCYbMA22n%2FHFh6a16qrcpkwiHcIbK2nEGsCqeISXzVR5kpUh5eGFq55FLKvAaIOrfCnb8WMKZMuOWEWG%2Fkrvb0bTbNFxNUghcAuQrXfbV9u4EWHMd%2F1wh8APJDctNV8mlc%2FUPJ6O9F0U7FK39TTq%2F9YJWW6pwJD53rBXa0KZvgz%2BlYYRdmaX0z5ozKpXSqBnTGl671NlAkm1EzDQvRDI1WDupd0W0YEMqnmhauIlvqXBW4va1%2Fm6Fy%2FgydFmGklFTq0tZjnllmsDdm2dQcvqjYU7Ah89I15qEcP4pegM8xwRQbOpyTgrUnwLnvlVOWk4prQRmUnL26sj7paWnoA%2BQPC2ThrrVFMZXZMaICMMR9gpuWbTrc6nvP0wtOfFyQY6pgEjZF9GlennMLMl8MX3i0jkNXPK5f8cV7NYqwK33KgMRsf9GNC%2FG%2FqCNgSosR3EU9DQkRpkebpYZiMwrnFzYSEH3CSRWSOI1JiJRWmDd71jJS4pApsUePXVLY9k3gJoQQ4pts77Ul1nSZlS2n6oQ0v42YCBrbhgObfljWnm7eMW10Dpn6Mq7bwUTBWIqhx4TNhwv94rziFPPxbh2Hp7xmQX%2BzcBnBdm&X-Amz-Signature=9fc7219aa5b8b7177d96a2b210110fb2f0909e1edda5a907d3a774330b01b3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

