---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6ALIOL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCe8ga6Sn93EMIlhvaQ8ZXLUyO1gL7p1kyB6LPnrT7WWwIhALSpRK2rEzIT%2B105cn0X%2FcKIDNzDt34Wi4nzuDn7pk7FKv8DCD0QABoMNjM3NDIzMTgzODA1Igz3eut5OwH3GMtVKJ8q3ANLGb4fCEJsc6oxgyHhIR8OAwiVcY0qZWDf7LttDnkspnV9Z9CHtihCJzaDNLNo2TI32DiFwSJqxxTUaqAv1enE%2FOz66axbMMUPym79Mq%2FcK3ISuyoSf%2FlljtUfWk8xsiu1rHfescr3%2B%2BLQaEHafohiCIyIKJZjNACeHmJOs5br83FN4g0sXwVHKpZp90XtIiTHXt0tgDxdcsTDvRN%2F5enVW8Eej1VMME8geXMcUzz%2FP1NzR2FpKDRKyZKWvzYE%2F0UPHQw2HefP6ifpMC2h26By2KNyc9hHZHI%2Fq4mKBEW1Ybmcs4n8%2FAWCXn8AZUxVUlETVxhWYSaZcQjgTOQNvr7U73hibce3ZUBytRiblSVyo17EfkBtgvyC3fLCU7ZRaYAw62NwkywkrLemY9Zvk3zP4kcMjtqBp2yh3jaDZgw53k%2F0Qd%2BE%2Bfv88lSuaZrcNP6uWEzxzSDHuop1E2t8dnWcsznCyk3ph6COi7fXnHXv%2BY2v%2FxXfJYJ%2FK1z1RYWQ8a5mxjhTAuFLVONBGeGJM%2BwWNAwvVpAvM%2BsR2dgjDR3QM1Tynk%2BS5QAZ%2BvcQWSnwwcuVvoNWXb%2BqMJMg7zYSub0pOo6W41s%2B5mJqC7VaPqkUNW%2F6qRJLE86JXK%2BxazCbkMTJBjqkAf2%2F5csq2rEIJ6KgT4zUv6DIJTrc238vc5zUyqCJ%2FS%2FUwtxt%2BES3m4%2Fqnz%2B1aVLag7AhVLMyJrCO0D08DAWWWFoCICm5ewJfe8YTT88ZIUz5FgctIBLsfMM%2BE5trb4Ppi8eaAWE3kGWaLdiRkAPfXdtUdYD8Xz8NAqdeH4imKVWdA8CFf6NR2vdZnrjlz8JUei%2B52RKSVNZWylNpdG3qLomBHZry&X-Amz-Signature=ef86fb527c3e4c8f1b27543a87908aa3cb1116d2abfc610eb4fc0c47f000c297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

