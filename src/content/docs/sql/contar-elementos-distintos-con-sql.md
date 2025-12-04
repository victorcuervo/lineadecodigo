---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YBUBIL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIA2VqJt9Kz0KmAfaLsT8blMIUyGUMipc03kXoZsWynGEAiBaY2%2BdleIxaQC05ErZtrcRNqD1ALPXUfTpMiQluXNNUir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMQzgQ00PqMk85yVS0KtwDrdj81chRXXSmSdSBK7%2FgerL0qN4a%2BsRmk8QSE35VrAjK9XbOey39BrVY%2BcI6bkNI8NMxNNZKAi7wIaieYmLOzULV6NkoMhL%2FxqL76YjYjlRs6xQE8GmqLZiCF%2FQ0eRKC4yl4miISMAzZP8oxdw8LP0hdmpBBMOkeqKmr1CiQcX7b1WH0F69df9gJo%2BQXjvaDnAIJFME%2F11ybAYU9iFP%2FyskcvKFFDhKZl8vIppVrKFgtOKAmw8TOY1Hls0eYK2vAzWJjluxfZM%2BRtWFl8V41eKPkSk%2FCXqInMK%2BUiSB6C8LiJM%2FWJpvribEf7IG8xbyNfTfmgfglIZJqBN1BeW2IMXb%2BshxjvD6vvIAt1r4JWhIQYOWGnvzjFI2xBdjTUyhlZc6gQyRT9hFZxZyvImCIUlj6w58vJILWXhEb4VS7C10Dj4BOF9houQIYMLzbs0kCe60xWTCg0HvgYrMMLyqL023H%2FYRFy3jNeXzABbDNr1P8Jxk1KnKGDO8EG8v8tEe9UdLCyzTe9R1LPE0SkxhpV2nhh51rGU2vn7MgisizlJ66f69pIaEmrrq3tE4tN1ku%2FjGrNnX36n3t%2F4Uuo5SyY0FLiwaen0Ab4YSfS5ArE8KCs6cJiUdjJTXQwsAw64PGyQY6pgHHzaiff8bTnkwT%2FIBmcsGaIDfeURHvHLz8W69hNxyaUVS%2BzcIdvZex1%2BlWLBVdzLvTdtrhAY782cCHiOuUIyxqk0n6VAuV3Y6q57oLRmySLrncy9xxsYatQv%2FMgKgAbA6pg1nBKC9PpLTIhDnHmcMho%2FT07Vz259dij5j%2BmKoxN%2FVuuvx2DXGlt9BgYlHWzv8Sofl%2BvpAd570T2aB71gy6g2t0am6T&X-Amz-Signature=8f1885414ba1e2496b44ac7e303319fd3d64f3fecd9c4c7af5990235f4674b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

