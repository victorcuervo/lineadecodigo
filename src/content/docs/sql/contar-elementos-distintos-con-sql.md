---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBTHLUU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDLv0dSmP0%2B6BXZK%2Bbu7HTYvgmKRJJIQOxcu0mvuIC5ugIgLOhYKR1IU%2BuwnMNMXWmVRqTJ6olEN7RpBs6pRWqd%2Fv8q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDP4QVNxC3sk0ZwkxPSrcA2IrWhpLTuEaPjfUlzoXrYT1OeenPi1Urm78hB%2Bjk2MZmcS5s%2FykLySBpmT8%2B5knsiLFo%2BUOWDWD%2BFdB4u%2BNn%2FCYKw5s9ZRjR4SDbhyjRKIKR4EpYOoWDpeHy2UnLTefXpZc82jq3OJ7hLcZO6J%2FGPlSqUwBcMgZs4CNlzCF0JmCiDXDFFSQHiJOYm897FvaedWTEc%2BjuWmaH%2FTy03S3gwJajRAtHsvoO2oCmKuDsP9mQBHjuHsDtT%2Bcq9BlXcIy94MSgsuyEUxns9wAIWcJIBPQXSSie6Hgd9GDJym3txopqdbl1tsxnsDNxbB4FMVEjlST0q7B50yyuCeweshMFHY4wyeH2dHEozQm55AKOU9LtPwR07UDfzzuPcPR%2FnshfXhj9t%2Fe6aE2cGx%2B6%2Br6JpRH5r%2B9MeMKzzDupB7ET5zxbDOfjujYUFaEytB9DcLgKOgDb8Dq1anr1alVAQX2Sw%2FbtGwS2kfLqUlssNHXjDZpCBfWVqj6zGjnd2I2dbAq4IrzBAL8hdnqCVLzX9BjXGdtQQ6vtU87TAAlUYHTQshfj5wihVGbszbB8kXZxP2Z4p8mTy8SGKYgd9AdXfZI5T%2FNEmz14BFvRmNUASlgUqSA97oI8MV8yA18KdhNMMXzw8kGOqUBTv2BwIZT8rzkfhcgfQjVAVdLsWcM%2BkerFKw5UPKgAXZraRPkEkGVGh8NetqdpZKAqYZqyC5UmfT69NQDiBSrZwfFV2uwsCDH26uRTAS%2Bfgp6c%2F4GWU5hMsLMZHWjP3g4jotVIpKVYBdh5bfH4mQkqt6E1Z1bB4qhQ1nqUHEmjaiGemY6xTG4WmlumnkD33Vlp2%2F70f40FsjE7WW7I5FWHOYah019&X-Amz-Signature=31d6068fdd84a5958970dc03dac1b1d0ca67d583fd5f2e3d22fa33665671fa22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

