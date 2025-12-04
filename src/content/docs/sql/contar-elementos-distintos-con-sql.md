---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJMMYYZ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAsjpQtA9p7spVHhJS3Xu%2BFnn04mc%2FF6kGxH47Lc7ATTAiEA%2BFttrv8K0NyBm8eQfpZulXMjHBjI0A8%2F1f1UhIX19Dcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNCsohlKfcfTsAPLmSrcAzSHtY5YicpsBHVnOdjcmquoVJmW25LA04NPuvJEgRFnM4VvNOSTvhkyRuQHKfEEucUpDIMWRLF53aVx%2F%2BHxe0wFxJBXMugv%2B%2BUJ0Nfhyv%2FNAf7MwP55NNW1NOlAf1OSt0cNzVnB1LPpNx1O8vvAL1jfawTcDHNor4roenzT6hZROu%2FIbkrlqBWXPt6grzf3HEhgFgxUc8Xi52zYdkYT767k1FSzlPiGTaBcH93W6pGorQR7bMgVkYQuEjrOY9NZZfnCb%2F4GgWLy1447MPeVoxFpMc3UYGztpfnyU%2FdYB%2BBFfruH7f2dRUFxuUmxzXLF78ArxyP2Md%2BCiftE4Ez6fvpwh8KvVm%2BWphu%2FFYL26ddP%2F%2FigSYisWy%2FMKpTtOer74JEj6YyHuUFiim1OFn6p7Kv%2FyY59kpH81chmOYqx5CNY0QLEn%2FzshpVyAdwWNtEriJRUlyONiloCwyoAnqgGPbl3SytEgpM48ZioBfA3Ybt24f85zAJFfAvUGdTrAVCtkoQs%2B0x%2F3NDMy9dwdC8yc9grhDBHjfuEMe%2Bp%2BDpYJQwo6M868iFw8SXtrzOTHuHpPPWbZ6KRs3EjuM%2BkDLmjbI0SyaUDTC9ewfAXNB99UGFa%2BJ%2B9qsPtJACmhed0MI%2B1w8kGOqUBjr%2FB%2Fp%2FhFtHjfz39FlrD1X7JKFkW%2FYDEDrYva6o5rQRd%2FMbdBLZfFaqIkgOkNZTHc0%2B0VBcN5SBa7DlDlIBzl4%2FBniBW61pspZDJWSZzCdxy91mAZ4xItvpkmGC61ALiD4i54cuSfl%2BZHQMaHqzRCsO72RIKgKeoGb1VoJPjl4hEXuSKUNPJvQBWYxyBFW5Ji3hDBKgQeFBhZ%2FnI5pn%2Bc%2FAvVg9f&X-Amz-Signature=a60213f33cc460882c240cb374f74d1749d3ed7974e160c4c2d8cf95c10875e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

