---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7XUCEF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCO50GZS%2BSlm%2BPLch57q%2Fu2GjRI8tq467xGRp9ifcQqwQIgJukwhB1K2gfDlNfeMEkjDMnwWYOwu4a3VjFigcDOWToq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDF7Bh1RveAeTDE9%2BFyrcAzf%2BmxhMH8h%2FRs8NL7HMYdhiuxzUAXSHetLngKYpB%2F36ojJMFt1FFmvCrN2aFcGGsDjU0os7T1Uy3yif5NbXTpfEiGIkVJoSAexEBVyHt2hX8oju80mRcfvqxaefI2uF8Y8ds6BNdZQnoUV%2F%2Bz8Sn%2BjfcTJbMYeAIhoFcHNbLssWXzLy%2BPpdKHqF2XrzOith%2FzFgb1zdS0PM5Oo9LhTFolhBluPYCE0puCRbHg%2BP%2FtVkSzJhlfmVxCOR0k%2F7YoD6nG2VxjahgCC6zcpIQc17anxdC8Sk1xetSlKBNkq6nniv86qCfKOa9Ml%2FVxDrigiitB0of1Sl2jWqoca3DEi0luZr4UGzk5wRnZDerBQ6%2BkWuofrs89IQBdbXXm9VjhiEz1yvPoS5U7iCr5Gyjv5Q6lx5s8Dcw39F45YS1IN%2FSiJEr5RnzLr6gHwPj3Fk7MonwujYM9T64ExNs9vl0%2FkHPQoCOkkAJ7z5uEBgNR3UXKfspr2rY9BRcyBwhBPsX%2B82etxP2ndyVpi3MrHrZERcsZpwW23vXQoK4dy7rmU8yvPV6Rmwz96bkHmaIMzEP1xwnQ8bFIm9YSvWND0zwHkKVtAx9sstDkYNrGQzQqk1bQ%2FAfO7HUSlyDR1P6F%2BdMIXLxMkGOqUBgao1HVjbz4GL1MQc2U0EaE2kGyfF6skoiXDh6Zct0MXpbjjLEZ%2FS9fUa32aOe7DTUX%2FaxPMWW8G1hO6ExnpP5aoXsy9qaFAaUrKztLPJJycJRazXnFG7b8yHPZ1Z6b9xQGK%2B7oJ5E%2FFMgM7n7YfWrW9t3cKhb6%2FHP6HmkPPdT%2F3puPQqgpqZCq0Ms7QjtKyyjsMi3azQ2mbFIMTPehPlKQaxdcFu&X-Amz-Signature=a2205c810b5dda08c59dda926694c05a81e62aec7a118c269eec7d9ee0fa86c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

