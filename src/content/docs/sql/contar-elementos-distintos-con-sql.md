---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMB7FM4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDsG3zo9vMac8cIxhrU0ZXyZoUxaw8kAC8PshXw4hiwuAiEAx3aQlrcme%2B7zURT8Rkl8qtcZp8J%2BlV0g7Ntfk7DW0oIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJsyaVTbSM8s5E2L8yrcA081C4yRu0L1Lpy6ahS5mRBr08n63YFCqsFRhdV5o020DuxH2rB9GTUsNMwN5Il1jYCgNpnGmugBgxkJkiqjDxC%2B4QV%2Fwgf9if%2BRTb49eag2J4kszUufEjiGxvz88uBVJxpFNHRHAcpKfnADRn6cl19zjDBJWcgO54YlnYBx4fMVA9EFdkBFyG7I2m%2BC42IGxcLiRO%2FJM1%2Fr%2BQxcN0JelmfQbgHQ8tZD8WsiQyCFVDYYknFnKcPe8A0dHi%2F3ZQZAPExUrzpUk4mGT4DSvHAy%2FqhX1tYiPVhMau9wXa3XfoQMPgeuzwHA%2BVCO8zxjdthBAQSAX%2FDIc%2Fs5AmbDiIMCJbotUSPfX3Vr0X1RP6epUbR%2BPvr1qxk7uJTskrae1dCbujnIWrZiShbGVSJU8%2FbypOX3FP0mvG3upCaiTZspmCM4Mw8IQ%2B95cQYjcFtVAWKBhxXGVlnDXSvfrps3KaHc6jT4D8UB7U9t%2Bu9qHiQdxMTp12DLxDanN%2BCLR53tqMCQg9OghTkJi4I3hJFSQ0zZDb5Y%2BYdlnpJLSRM6jpXZAsxXpCcyAh4lZvQeaLUZCS79w8e6o0hsLXjQfcdhQmLq1HsOwVvbwC0XHdCwe%2Bi0%2BtfDFR1JTAM9hTNZxNLEMK%2B%2FxskGOqUBfh9DlgSa15cazjcS50gfOMA6iVmhMho0bOpxeta5EAqFOV7l%2F8jLHKmQsm95yGfyKEar0IPRBH%2FCTBWUGFenoG%2BbtN0miHQ8MJ9FXyU%2F2SZI7EAOcvfoX745OlnrnEG0PkRYP%2F3qaUfOAfXGNzsvM3WLsgk9ZkmccoimxbTySzjNs%2F40jMzYbb3aJFQrJ2ggJ1TjV%2BPD%2FCQzkyT3ZlP6eQsh3ILM&X-Amz-Signature=f634063b4d22fd54f024477b200910a1fea22198c57d8df9b7a046e109a882b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

