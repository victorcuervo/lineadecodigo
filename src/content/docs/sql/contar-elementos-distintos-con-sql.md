---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMAJR3V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD0gSBDuLP%2Fy%2FoVYHleM6rcvruNP9FAOGh2POS3cTkQ4QIhALGAjVk0%2FmYjPNvB1MrpAKaw7hrH3HO2SiVhS1I81lvLKv8DCDwQABoMNjM3NDIzMTgzODA1IgyDyWmBS9AGKrHnLXIq3ANvVI7FO5Cd788AfjXP0LNxWCde4Lb4HIJI5LbvfdPUW%2FzjhAOekh5me7aLWEt1rQm0Fa27t05srnaiulPPcp8Ibd6TXXa4TFxOhnBpbFNMavrm%2FydOvw8VQwlDQf4ozMdUN50wfQ5%2Fk4XrBkBUSko3tCL5wDsFFBC9qqusyrbE9dPeT9TLRWB6hLnHs8YiOHkvounWxok%2FZx39%2Br20Ov6kZFA35x1C4vlAJsppTTxPCgfsQmTVc7Ssuh4JY39LQvCE%2BM2comDDoBAF0fH2XP3FQlaaRBlV9ciF7KVm2PV%2B8EV4ud6aaaUGSpFoSTkDHmTd8GO%2FMbv%2Be2QGzGsCKTuWRGpgRdbgPUwhTGah8h7uFNfyiKQX5HRXtz2OouYexroH03vd2UdGrHmCvG49DKm27P2wzotGjvJ7DXk7Rq5oWbw1yAxYuAu2f5lz3k1bYSV6YmrVAZs4xTZFXlxqdFpQA%2Bd%2BlDMxhFUlnfF3%2BSON63Rf6KfFT%2B5IoxxcIbpsU10HQAAb4XvTe0Ok6Akeu8wU25mxfzqZ%2FCwO0bUkxKuCFefDzUVLu02pzv7yaeOWmq2KWzPQb0d0FL%2BypYdY%2F%2Fv42rJ3los7BD07Mb5aMpexGeVcJPIEqmXTxkUmIzCh88PJBjqkAdPM0mEEEKDtLL75GE4kCjmS9MVd9pCZVICuSGy8rumjTKMMrlfBeiW3V5auok%2BZlQiGTVtOCKFwussHHTqSCxmmQQNfxvptfD0XAdumNJAqNeV1kjskE6gKqx8ffLm%2Bh%2FCzNZ4Nd4xCkCiuW6STucb4ufS2d0YAiyuqO8mSSuvdydCoVLsVS2iMc65yXgl5bHdRwChsxOL3uXAG7Mm3IQlDq4yn&X-Amz-Signature=b118314daad13b67d417faff7e92c5f4b6421e050a03c8ef35671a5bda560250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

