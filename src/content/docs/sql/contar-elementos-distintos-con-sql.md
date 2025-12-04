---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFXILDK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSScRiY76B0ZoFTZt0Fabkenzw5H4GzSiwNeOH1D0oCAiEAq6Pi4Rrzs0lBlqHFHs6gzP6Je0iaVsHzxDSA4W9etmEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPOrdKsffaqX9HdTHircAzSkY4qP2xNRrsFPG8Y1BebwwD0%2Fjzw43qVQ%2Bh7g4%2BvRlaMN%2B%2BdMNpiwFhHTdAEx06bpVKQvx8tqqqxvibX594nR2JEJYqvUkcGh%2Bt%2FiVmbcktLICS%2FsMfd5xjeiv5DGOjfupDv%2BqB8AJxLONXWlu%2FnKwqg%2BU0mE0qMY6MNk1Xy02UaEIBadiMG%2BE7tS%2F14y6swzrWw1NYRxnX4E6DZkEwHnrP16mSdiGp%2BcuCgUez0sn58JhNthfi%2B%2F7r0Fu0Im7T1m8yWU9cwT9YxcDFvsxTlaWqEndHv3vHR6FZLTFye1doGHqDTUEzGyCQq2d6%2FERWyei3dbOouWuN3VQ91u1hse2q4kRGVeQovpCCFjy%2Fdawpr%2FisaWHly7T1OmZZdxafrznm%2B%2BfZ0C832QH3r6XxnyNta54%2FNHVbr2vDaBy2KBWViID%2BrlMvX%2FmEeyObQ7k6T81BG6DCW8XrGQrQberOP%2BPhmvO3zMyKau8S1ZHMhhC3NNdunOfNAplo%2Fy%2BdTj13fACTLJaK3eDWVk9ZixAlkqo4RIaPoUq9o8GccyHxUbnaB8vZOoKaHheiGaIqUu0Mwmnbjk%2FDVmJYtPBldIZhlP0IRANYc3MnXv%2BZH9pVzCSwoVvErLcq4whTm6MNHbxskGOqUBRumJrfbQp3jnMVkduNsrD2c2VoGcWmJWKU8HHIOIBtgiWL95zUu0yfEKAVXBHRp8413o%2FlOn%2F5L%2FU2hu%2FMoTk%2Fu9s4bGvpVZi9WI79gowFBar%2FabESksHoFXZI2%2BZdXwSYVwIgYtyPXY%2B2SklnwbULSmiI2iyGxnecGx4KxAE9hbMQFcXlgo7QZSMLWIikfOgShqZXcoO7ZpdunOBIIWHWZTsuPb&X-Amz-Signature=c21e8d0433df4b77674dd817b0059c6bd9e0fd82617252698c9d11f06802eb45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

