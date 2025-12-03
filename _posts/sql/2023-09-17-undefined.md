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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIK5T3PF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB7NRgQSd6QY%2FvpsMr2IiYgvvTaip090zVndrSE0ZWi9AiEAthlMuNaE%2Fr2G%2F2nGXSbl%2Fs%2BabzWexcLEivBjBw6UHjgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNZhlWbS2mkxv8QcyCrcA%2B8r8%2FtwemmtKP%2FDGGvV1dkOpTbkR5EjvTzvYeyVsuReZTxniEge6kwO1Ox%2B%2FpyJqCkf7PzFw6iG5i2TwP%2F2j8%2BPdy9zhUthrmhTutdwAYHUndXI%2FrQSWd0zcbEHD%2BzcQ%2FA9SHU2VcFNdkAUwOQ%2FxB73577VJ4bFrwUG9DLqP14s5f%2F610Vm76SBNNJaTZGBwRonO3ynqlWzs91lidj4oBkVmE1%2F0L8a1STO8%2FCHvsLhq81xdzE3WnRBcaSbiGmC46NyxggTpiSZeR26Xdhh7hNaEUHELV5YVk%2FMB8JkBZpvVrEsbpnDV310Sgwoa8R5%2BvutFI15lJtdP713xFxvlIIItSmAIZHyr%2Fh0cnoyD0vBpIu%2BXYdAWCKsVaofWHbqU2UbFlFZI7yoOnK9dmcYywingcCDwvQFPb7ny%2BNRs%2BN5t5C8haZCHOHqfIY8nANcJGSB06HZrYi4Lorh7uD6xnwj53A%2FpwMTj%2F39H67M72hCBcwduHHywOSNujBIKV5MaZzO%2BSsfolCQPK4vkTUjaQ49hcvVYceX80FwCxA%2BLcBC%2ByxFB093kprd5rFPP8WT79FB9BoDkTpBFS%2BUKVRaTpVY2tEh1SoKipWE2vqgAViTqQo9Lp%2BTQEEVKvJ%2BML71v8kGOqUBowX4RgmlZ33BEkF9OalU%2Fi48KX4EbNgBFxpC2mE4U37Ts5ox%2Ftg8z9KKobL9Rx%2FEKwYZApPMeWMrQBOwDRv2xcdTgQ8thl1CLq28TdqO2BGpcttmWeJ4RHuSo2mY5FlN876uYmxQxVO1BXW1IB045css44H%2FpLFDITTLO6qi3KA50%2FMgPUJirjnKFjjiv%2BW3iouDCwEmjsepk59DyFs6BOSC%2BqTb&X-Amz-Signature=22ca8dcf2b7ed67f76231697b7abb997e362b4e149739d604d8d8e4cce2a348f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

