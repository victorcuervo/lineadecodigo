---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YPRBWAW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFl1CBU67Mwy%2FMDYnYt8BHluytSzzmTq5fmObdVSQ5DNAiEA9zfraUgW3YMDrWUZHB0fpZ0WF7%2BP3cj7GolQnCiPhGcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDI49x9dskDU61oeGrircAwzG86d4xbAcCqgu8jMG0Wx4CieMAon8r%2BSMwfSsTOK%2FKxosSB1H5nvF7MTTmq4tMAtpjax4apoW3bKothFuzA6m%2B7QrjBtVezzkAEr%2FSt6eyREiIiuYdNHXOCqrkTck%2BaotI7cjB9dri6yPPsFNItRRkrNDrtMdj8%2BnuCmgpMXFsI5wKcCbeq2SavEQXb5t0u3fTrWsvYnXPNK%2BdYOVghC%2Bs93%2Bl%2FzaV0SzknzSPP3Q2GklgA05zLfrnh3arlscSeXjTB%2FO%2BB2f6%2FRKdLQfcAbQaqp4mBaDN%2BZpGTgJ14xb33q5yFcvdndzzasIEkEec2Dh3tI3Q16g7ANvmNAMh7xD6HzJmz26wXYfxDwZGmxrHcTO%2FsgcBKgVSrmWtSlXlEucQp7zvdINO2aGvMuqg3ml0Lz%2BUfZqrLeG7JTPVdm7PzOa0xFwzHIUYVMyCa4Ow%2FFwtblfQkrEI%2BaoQkqHyP8Wm1d6R9QTmdOXiPJrKYDoRzsIBHR%2Bx02E4JB1M%2Be%2BYrbRZqHaF0%2BjoYmiU3hsWeuJUieK5Ao4A9kxOd4L0AZVWe9376NxPhOEz80X5OL5GtogWslg4e1%2BstJMwREkYjq6zL%2B%2B2pfivrg56fMN69qYf6WueWJspxH8JPnYMI%2FLxMkGOqUBA8VwNjePnT%2FGT8G6PWN6x6ngQ0yuNP092M13RR0%2BDhyvzDAGVYBJ6DOZ9u55tkXcnrsZha2kXGwhi%2BBpi7J%2FAbE%2B1Re374DESelFHphBiHGJWQw4qLMvjvwl1KmNOcmsyFVhJ2tBcpPDpEykfuq55Z4zEK0PwEavyHXOUdLMwL2LdlHV9sRSd9hdg3tYvGOGNyi2zDZe5FcN7KQPnpkcba0oeqMb&X-Amz-Signature=60f9b23272b620532572bb3877b66c31e48d3f58c69694aa58aed076d3524560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

