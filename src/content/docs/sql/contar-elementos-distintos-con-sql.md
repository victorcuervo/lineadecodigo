---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y55JUQSZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIG6dqscPrIEKMAu55wQvxIs4e%2B00yaociYSuzFhhTcrfAiEAvIMQHdOeAEpoRLzituKkDEJPb3c6VmCg%2B255fdA5JZcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHQvYgz3C6ma0WCSnSrcA7ELT0lsXUYanqdPkUPtmi1ZGR2nLtjDUNrDzDlSfSjO%2Bi2%2FJ6VnS4Zv6QFaNWyWxyJpwwQHnCU2DEw7kMjR03AECOVYdqDCj3iwm6nKhGdDgZPbRaE1jyHCZho99JJQkONOfMuai8m4NNF5BS0yYE4b4hTnJv%2FoK0%2BY4XV7aH5Hs%2F5MJgf28Vpu9If3iv4aAq38Ugp2kUhjygPYHWBWgghgiFPS5vQNz1qxX6neUDp8lNR3%2BAPdYUi%2FEiudsQFdi7u8jN2h3ysGJlpQRdwmcFFzmXm9MbzK0rx%2FHqfxOfrd%2BPVgT%2FS3hUDqXox6XEa6BEzd53dNXMcSNwC4lFWAcKH5LVdA5ij3pIompA%2BdPTq57Je5Dyv%2BW%2FLF8UFfZSO7pDXXPOQkFHjq1XO1gAkCt6H8HZ%2FB6L4b7M49RUh5SImYstLZ1TPqBI08I%2FpHOLfv0Kj4mbbWTb5elFFtZP0KjxXQMgG48TDv7zaC3QoV8FjZ%2Boq47ZineHwk691LVNT1E5Dhwcu0wuh7bze2DrN%2B9FNDgQohrgjKaw7w%2FM4ma9qIj8YddYemTfY8DSxhtuiEUMpmRZ7iD6sm%2BIchVoffhgocbedLrG9SZ2NXwBaFB4rwbP%2FR19WRcGMG5VL2MI74wskGOqUBcudsU4PbE3o6KIn2zedZa4WNFNTvfOuYAQgnRVJ%2FiiITwQzxn7%2F97%2BDAE0iuyx8idbOqaYJXoLn84q4Ar21i0FhgfO%2FAkEdRVldDPC9aF58EtAFnfxuOAZ8HIi%2BcAeDBBlmsAHdeGkGZU8N1sfVvjq3uOjWQ5ly%2FmcsYF1lssS%2FaBWVB7gRpBfRnIs9UPIp32nNmMUxkYjQxII1X%2FxYd5ZIIwWHs&X-Amz-Signature=2a417009e7281205474831aaa9b758f774481f7933bd8ea7b02262859da728ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

