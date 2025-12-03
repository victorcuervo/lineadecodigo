---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQNGBBE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIC3JqqX6JsBpEfPU2gseIlyCm176wdRros8DmYUiSiTDAiEA%2F3uL%2BkBg8NIr4St8EiWHSpYHn1NcvRw%2FL4ewCu10LdQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMsvRyGg6t%2BIn%2BpPoircA0xJx1TDFXU0%2BhYcXR3Src0cPY06MYDAvCsILWi8AfUU16MvDJh%2F6Z5vbfNr4xvPZ6Txq3jKi10b4NRKQD2I4H0yeXOVDhQkyvovu9vPlRgvI7BUDqZTsaiJ1MFnBC%2F%2FumjSe6WlC00ABX95S8cX5KY4xrmEs13tD467nwkZuZMphhqNTLBxATRLm4bFFBpLsE4zpjxFwsYl82rV0FXfCUyzN9zBB0NCD6ePoMcxYxQ7ht2ireWavyLyI5xUQmq5ZDTtvtWoaM0Y5b3rp1bDbs6c12Kcm4%2FDMNp2%2FAOnAdITS7I%2BVe8kCeKK%2BpVC0yhSC6pHq4nEtb9ieYo7twgnGvGDzTmTaE9D9L%2BO2ghoHP9rqofvtdcSGYAIrtckNJ2gOqXNQOuOZ0FBLQkLbrERFZmqnARCwTXSXP5NLnLtLPndDXRWYQe%2FiYwczkjNnOUuJe%2FTlMFqmMJnGXwaxd6RZL3XipWMtrZGQ3D3naianW%2BxQllb5VaOWyGxdQkdMO04rboBinjoqf6lgg9ZLWzxExS0MkSPBnqlJK1HxQ75KrDLTSTA7gCjEEOtkZhbZZHZQlYucHvBBvQcI7siVrVmy2dZ7Z2psEgEpK6UvzcXKlm6z2uyBvJqo9IHaqmrMKiRwskGOqUB0Ji8rWVogRsrph0lvnGLAR%2FslUAlgXO%2B3QB1xdgAm7Jvful%2B1N1FbWPbz4DaJlipMcPE7hhU8weoEhvfS8FNx1zPctL1HgvImUZfhAYSCOL%2BHLETXK91qUDzs6dWJ8alrqfD3FmaLvq6TbpaMgObw%2BKW5u9%2F0gmsynPXpBnxNmeEuwbFSJzxqRX24eOnd%2F2RlMAaAozLI2UvrjjpfV44SPTnrcca&X-Amz-Signature=8461455d8d05c900dba2e6103889f10e0fd6ed643fc0dd58364b76e531a927fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

