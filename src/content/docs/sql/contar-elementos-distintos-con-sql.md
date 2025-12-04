---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AHEJ7RJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDlX%2FKBl1eJEPoGqnKLcvHEgp%2FPtMpIVI1GFxusVvEyKgIhAJmG8%2FmsVE38OHQOzX7ahcwKzfJDoonbjjyXVhAJzpqFKv8DCD8QABoMNjM3NDIzMTgzODA1Igy%2Fgt9axg9WjHHv65Yq3ANp7fMdwCJ1eWO224ts2cCfaKr2jhhCNaNjfI94lDLo%2FM0ffqJDHVScKgmTbXgVWQmKMoHeQP9H5TqviEzvEdr0ptPTzn0VfH452ziRfuKTwp9j9K1KaKm0Ifwv37A0g%2Fiov8TDWOEoqhIshduhj3npT68SvCFAYpuPhwciOGxwrctV%2BItJm5BSlH%2B7Oax0JuTq5H49EOXuj7JMa6Pen%2B4xk2gc8VSBQZTtU6%2FEHCGeZ5q%2F%2FWEUnBFWTuJC8G4avLt98FL01e6TRILo4qz0kBdE6R0YjWJYnwGn1NDEQU88QntPw3ambMl%2BO%2FEYt02Oos%2BPugGkhuFD55wG9c1CnH7s613HAlKMrhSuXhvxq0v7MCwhbVa%2Bh54rJJwnJULnkgOSJr8ruJVvFFYfFU%2FnzHau9zyFWOrNMgFdmv6zfPQ%2B7UX5yGs%2FUZv4HwrsrPicVPXtBn2aHqjVtU%2B7AnT5RRbtR5hfg4kmqQKCLQG00w6xUOJLbQd8XZR0ZtITfJbMEhj2fkbI2X4QCEpbTBSxvYpSuLmI5uQ0RA85u014If66GX%2B5UBDvZdXg586pRBpkkSgUdA5%2BelsRAhli0FCooebL2i8NQTZLrpLBu%2FkY9%2BJJ7d%2FRItpzrnkKJZ1ACDC7y8TJBjqkAd%2BdQny5PyBmnj%2BpAHw3n4bGSu8Kin%2FUXAfzVLRQATQZCP7b%2BOdda58SJid9NXIiYsEWyMSp1o8PnKqcLJMF2Jh1beVc778ARHFhzKEHkWosNi0AD2%2FPQSMVEwJ7I0YoNGyu5KF%2BF1c7VO0pV6PeQ0dyEeCf%2BJd9zELvAl9nldqjbXmYt4RUi5rqerPke4xZkL%2Bxva7jFyhbTcrixazEIGNPgeKM&X-Amz-Signature=c44fde7176a44455126d6f9b817ca71e7f196388d979935bb46f0a713c89db2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

