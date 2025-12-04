---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASVX4SW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIF%2BaX09FIHviYbDFbNd0c0BYALPJVTMWRK%2BEgyAnSZuCAiEAgl%2FjaexgTqmcZhTaRKdtJYVWDQezlbr2%2B6jF1m9ACq4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCmsl3HW1KYep6Q2UircAyIBvftjQo8T%2BiV6ghnNRSgAktiKa86IeTqRvPGwCPWrC%2FJW7RdkN111Rb4msMcN6XM%2Bv9v9AhayMR8%2B5UBTbSYmmqfeCSpevxam%2BIwJJOYsR9qHhhdkdbr8G3zKZe8Rc97SHnXWrNDK9%2FA3MY%2BHSkd8HYH32s0LrIW0iGZJHs3omQBcbDY5hbTzsZ449r532uLaJEuvh0u0WDpmeUodyflM5Xhn9HbDarLON7lNNKeVQTSSHNgj4%2BqSxObKSYtDZy2wt8%2FrxAIHNsFyA5K9EY0Vn81x7sVLKjgn3a57p3y9L2cyX9rIrcqHwMifBCDBzYF8iXTan%2BNuusTw%2FfFJiWLYbW4iosQs3%2FTVRgtOh%2FQeNBLiByvNX076h%2FBKIFn1PPk%2BeKe8RqA262x749C1tSiN8eNWVGjBdbsUcFLgiHEntA636sMTySn%2B37qaVAJWkyNdMgleVXS1Pa%2BN2X%2Bu0Uhzg%2BksrNcCB2B0hPNrfH%2FG1wAYxE0ok%2Brc9GO50DsAWkbo0z5Rq4sapDXVHrQhKcDm7%2FxPCqmvmvxii29j7Ntr3t4Z4noEfJxvvBRUiYPenNkbygaJ%2BBNpHziLCDTOrQEkp5Zfnx2pKOCsGy9kogdfaz8E7ZYf%2BO8fGK6yMNPyw8kGOqUBGHocgB1qj3AKH4KZIX3f6t0OwuDXAMb%2BGqNLdRXT%2BQ6vwQw1qdNgcS%2BVBSxqRUDXglgrvEU%2FVSObFGWG0Uto6npmqiteVmg%2FALnIIwt062WdMey73rOj0w5R6Eo9IKdy718xoMo4KD0lZKHpgwJQO6QAZh%2BS1AsojLh95BHX9Dl1F8EE%2BDY%2BrcEGg2eM%2FKHnrt3Njf%2BossL6lAOPrOZ4xG6j4MEM&X-Amz-Signature=dcfe67a50be5681335d032773bc85deb2a741d2a9499d145190ce0cb5645faff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

