---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632TOMT5L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDeUdE2wArh%2Fxwg7WUFTLXOtUBSD8yWLlyiN%2FpASEgwFAIgDRND8kRq05PW3mE2RQpFPFAN1pKWnjBlEVFs%2FT0vGCQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDB4FtQBTXLU%2B%2BUlRDircA31P1CUDXB4%2FeavQTsggEWpojuBPcUpIGBi6kiQcyckhvPcDg4yNBYIMHc7UDKtISHJZ8vMp6WOrmThjylRm0mm5ZgcF2WrG5ky4Yg8jPJ5grXz7omSmFsxosIOTmPbFjA02fDAzMn6X8YheeHXsoG9%2BwdPvgmhMwjPw523srawxrXcyVj8c9xRELTW03NFRpCsfdiu3fgHdK6EaAHRucHGz3KsMYoNXNjxuwcDTPUjOpwOOjyv%2FEZ1Ho4cyGWajGO5Ox6EewBvzA5DrzDfPyzgKnA93ANKk8nwZhsJyhjKrPgoB8zDimZJKU3IyZC%2FrmUCXGKXIXBmdbtx7SHA7IY4sFZG%2BqcvDXJA%2BevyuxHRdWJ9uQD5ANMouUGwopwqyiARw%2F6AWUgR8eBkQxaK4Ot5FvYAOTL02h%2BmJFc8qDL3c8HKeEPc06bc2gyew6RUDFNUK5Y2oRtV0gGBll7bNxupQuBb2Il2N%2BI4Q3QxWvAK6WJtFxL6n6TA3%2BjAK8vYPS41yPjOxJ%2FAx7HB1swbj2OD0Xf1amer6Qk5m2UU4aVGsFX8A6w93y%2FZTvjjqIbO3GShJg%2BkKpTgdrB5ddpcXMFVgoZ78OPtNf7OwrC%2FS8CsaxDdxoHGFljkOySrAMIHnxckGOqUBFWrWN6KbQOfl794DKYKt40SUMH5tBn5IPQ9T86fy1F%2F%2BRK247%2BJRahgsvZCjiub5zYXW3WAZqVkDFiB12bRG0lo6NMSfWzcr9jCXIDxGAzwZRHVKFf1f1UHGPExUOh%2Bt%2BQh8unIC3Ss%2F1Ww%2BPFgj%2F0r0Ot3ZP8YVs58PS13VFSCr9GcUkiHPc97LI2dwrakBMrJucp6i7FFYDsqTUsjTx6K5cFLh&X-Amz-Signature=5b0a1a042421730e097a1669730e38fa9f9160f9e0f9bf42614d1941906d6c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

