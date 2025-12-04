---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZC6E5E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCFPV1wZip%2FeGDOilf%2Bz%2FOx3q029sAE4BG9zxc0lCauAgIgI7W6IIxDIHkERVvJs0jDAa1FjKkGGM5zDgUBJWrBiHQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLjDC%2FAyl25MN5U7YCrcAyhErwxYsu0gX3kyyLgXzeUG9wVmUldsPsKcsmuvJDe4veXMV%2BqzyuADz4iG6IseahlW%2Bn169%2FmFOaLAXV9wnU%2FB4SXAlrpYkeWX4E2%2BymLQWbTvwkBO%2BA918Enf9xHZcj%2BM847AJq9r7G%2FW9xX1rm8B66rTB2QCVfc7qYa2djPo0XkXW3yiKmM8mO6FJCZEkitAoJjg02GGqdp8orecYQ4qBOEHJCZ%2BOvJ1dDSkYPYcStREReu35I5FomH%2FgNNGbOfPTEy1Of3TVbh4XLr41YuPLiaVNuuv%2BPlKD1ljpD6o%2BsnjkPYQg%2BfEyH%2BaNIl1fVP2RxCtnNRriEHYovgc1sg5YomXjL1T8kCGgPwJfbc%2FhMTBg5q10JmqYxXw%2FrEkf%2BOS1WdyQUIEGLww4WEzoIr1wZ8ZGKiNicatvomCxoNy1k60j5PC%2FU0ncQ03I9x%2BR4T0hL0Onl5GbkB4PnWuqUeep%2Ffohral86Msb5XOHwR6huPxBtctitegTpu6L7hiqqNipi9lvTk%2FPLew15E84G%2BOknRg2HYNOMDARPV0UM2qV9FEbx0ZN0du0KMtkeCUJahbFPaVUjO27i%2B1m0iH0ICAdSlq3vYaXtWt1Zl0MqOGcGvFS0RKsgjTbyCjMLHnxMkGOqUBuxnnZVdgbMDLGd7EKcFxd9LfzC3VPKepXKCeA9Rgw2r%2FPjb0T8OaTMJDAA3WaE2AVNWJXqqK8ILvzDeXOH8%2FTbeHDx9lkuXQE2gNFIXhR%2BMFoGuInBiHDJj67V1Y460k8w1rtDmDi1rtlLGW0QjQyVFqrOoB5yn6ylXUgJMiRzh84B5CeA3cc4Jr0bUJMTVz4rm2ZKj%2BF6ZGm2BQoM1j0MmgJcxO&X-Amz-Signature=c4aaa01b6c721f2dc1f9a373396b3e10079206059c778a249dc011a879c6e9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

