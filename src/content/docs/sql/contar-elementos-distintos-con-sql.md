---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CISDOVT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDz5mHmKDqr4k4FH%2FpKLc2fl3jLwfzkzF1JU0Px83tHEAIhAMVdmFLZB0jIpLGaxDVkXwJccyAoe%2B6KLV%2BVDau1b6b4Kv8DCDkQABoMNjM3NDIzMTgzODA1IgzkhHMoVy0rCi7r5F0q3AMlXg9QJsOpziTrarJSCdLI%2BVmurpTtWuajZIL0aTNhYFPi3KSKljpUwF2bdpR50HWXG4kftRzM%2FuCVVcVEuzYrbrFclksXE1kASE47U8gnIofCL%2F5dYbPR0EH1NV5C0klSnUJ44Zqtx1EA0NN4MkkAd6z9RtSnChG4pEunr9zYiDRv5GuTxcDxWHn7lhFsaXzSSF9P%2FBhyktO8JiaQrWVuqnrU4jwMeLfraVjzyl2D3tKz%2BrFNR5%2BBCSGXZTc4%2Fe2UmgLm6KgJsuTNhO44DRTWVw%2FePgkOKE6Jty7Am3lIKqoJYCVR0eWYiJFxZYbVs8aPB4rcMf80nSXWNJ9kH8eTHpffxNURMrb%2FzepsWTvtkw9NPQhRL0mBcYnvuhe24N%2Fo7j5tFB1ovYfRz0CrU6Ox94vgvtSaFlnqUlOUB6M8fRn7kphzpiakB1KwlVP1d3m%2BW2PG5TJ0aL4fe%2F4%2BtMV9yOa3Fg5RwoyOTbHjWu3el6Lwjxa58Dib22JFeGVVvWovU%2BIeVu3TFL6EOgHwD8YE%2FNWFdNwKSegg5wxiGhZlMhW97ZVk2i5vqmIG71qoeF36h4REFsh%2FMR238tIQX0H7ZVjQQ8qqDHxSCbcjc2DuuiQdeqH%2Bl%2B2wkUPXmjCslcPJBjqkAX%2BE%2BvSVTO1EnIEaOJ3ETpe7gwytY%2FswSo8q0EJi9%2FlTegyjzosG%2FrjNJq16dNqvL3BSWebOnHd75domuyGUO6QuLzOJbREU%2BWnyDPmBUZbK%2FZGARkTcHVJFYtZpCW1E4J%2FqzNqmYxkuD7he%2BfI4eYLoKtltcMVjgoQMVAZ0UfNDW3p6pdil0pFw1fSYDAjXnf3yUZswM%2BbL%2BfyBCfIEBmMLqh70&X-Amz-Signature=cb1985772c7f5955d240bf11f230d9cc2d2de837f8bef4fa083693d72ade2e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

