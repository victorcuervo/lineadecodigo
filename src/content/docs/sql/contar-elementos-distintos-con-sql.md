---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4N6BSU3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDwjzOtXUo2pyBlEmYwTMP6hFaG%2Fk4n2qjuDrMbaBPj1QIgAMs0%2FAH7H3cJuBsAGPd0glCAw%2B1bssk6k%2Byg6glTyEoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHtsYuVFoBazJog0mSrcA%2FpjRzt3Bu8otJojsDR8oDf7p9KWelRClMMblgAhz17aCvd61%2FpsVeDQ57nwnUmF2utF8vEw2kRAaBk4KuKCNw51OyqBljt%2BCekWc%2F5Otp3U3FjYjgHaE2Wmp6mdmZEJirRTb%2B34TjRhh6WcivP7jFfPl9aFlMCpxP%2FrYPtJVqHsT21s%2FxeRWeOQCHgOGvMEroy%2FrmhSyTMJv9yfL5efupQr86xIbEGgSUzUEZ0YoMR8JS%2FWzOuDO5GUmCsuJn6%2BD4qH37wKcpBhUJVz8yEt0FKxIARXE%2FiXMfeG4sER5c%2Bg5WJ2CsoIwkWXXvXzXkWaRnJYN0GAStitPiLyP1amF49a3E64pLlheVCpBb2HVg2W5ptufFrmWBFpkjV4rAdRTTFvfMdwxmGEmzkNoPc33cPwYv6ciy%2Bshr2Y5D3rqLzc0027hyWtLde2JAw1yT%2FBPcUVEsz0%2FPzSDkdpwI2vkzfHOspeyzWdrwE405NVKa5L%2FV1%2Bl25hbZTh2ex9jJYwTho2A5zx1lYIC%2B%2B1mKWMF8wB%2FYSl4DJL2XJsZoVXs1LLUEMmAR9POaYA5R6zcYdJ88u20AUtLK6PeLoFf4PIYDINeeDXLxJB04YfM5Q6f2D5X%2FriPQvonJ335u%2BCMM2GxckGOqUBQ7KsCZHCywl3rxZZUV0D%2BCiFt%2FZSbgagMvrqv4NZm%2FrRqaHNj4AFfvj%2Bq5U5uePUhNVPWcGtQ6iDgTVX2bhw6cPtr0xVT1Jzvxrniz%2BdF5%2BRuv9js9pSq5yqb81K1dPww1Ftkc4kxP%2FAJrddW51ix4bk9nXG3C6VNOMQZ4ET1hEaTaoGQ5zGMx1dFHkjBI1obm6SgpOiyM%2F7HhRV2OCrhHWKbhh7&X-Amz-Signature=e25056ae9a37eb32a13fd7775078e4cce62874b2c2eb506dff4e5bf3392116fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

