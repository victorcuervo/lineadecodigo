---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAQDDV3G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDOj7icoe9WUCPRHSr%2Fwz8NGqoNTy6gky0HS7iyomfCBgIgdSDRXGt98bRmA7owvAgHWEW9l1%2Bcda9mN%2F%2F8L1PYMgEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAACeC%2FJXMbT6%2BquTyrcAwbFXN8sG03ZZRozfXXtRcMTR5xMWcHh0iCWwYQf1VEE457fx%2FpvPmYn8GlPfsJw6jas1H%2BkXplc6fefW9meVLiibJ9AxMmos1noRPX%2FVSjoycc5celPfvPhOl%2BHwdBK81GkP06dbpuIWEsk8FQ2leRNp%2BEynhNAoj7HqYWR69mVUnXY8DMlUoNDgaN7qvqeAVJvmJLGLE9Z%2FBwrT9XWkylomu7dtuNSFwfkJetCXKbVXHxZ3COw%2BZl5F6aIlvxkeRqbQTtTb2E6lrI%2B4TTzLRiSK6eC7nMJ8gLANNFsfX%2Fe18kVaEFhfLvQuh3Brp9lZY5ioOzkVhjs6uKoBs9kxuUdSC09SURNy53uTcDS6A9zMmQBkehzjqNdedg%2FHU2pTDaJpY7pMtN0IVlzaRS%2BmuPB60nr%2BIig1vgv16wbqkpnvcS93HUuO5LhNCY%2BvY5RlenQaNGRGc5u9003c56WfQfO%2BK5SooTi5NAxGa3Ym3CjAOLntRqj1URG3PPgN7x0ngGL3l7T13xfKrfTuy5fBuOvR2etaEMDmFehQ8MciVl0wdRq5lId1Ye1Fb%2BFYpMAX%2B8oZN3yZj6oBh8A0WCvZcdr3%2BkW2OLZksmkv1D5%2FSPPZbeYwKa0dkYNt7pTMJrcwskGOqUB6rLnqTP41EFb4pngalwPsjfrUl9rYfUsql1zuyCuE7wJiHKxbQrFyUPjIdCzfgR%2FW%2B6qXz3ATGzXXdaIw%2BpD1p2s%2FSZhqUMnLpGeVY1Z%2B4MoMVFWEObOayrVAGNgzlDkilSfjxugf5uqt3baN0dK%2BWvxnfUo75JjQFH318%2Biov7lSIT6S9UC88aVcqx52xPsoAe%2BkqQa1A0Sm%2FW8Y%2FZtbJdrtO5v&X-Amz-Signature=b211fb9042de75439c55c4a6a036e3b685c2efa8515afcd42ed8ee407e82cae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

