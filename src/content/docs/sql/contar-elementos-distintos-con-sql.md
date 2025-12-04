---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV53IR6V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCTQjmKv90UvumWkJ9RVGOGoJnX24EWrSMfcTQlTR%2ByMgIgHcwZ0QZ8V3WHeJpbICMElBXMXtucod3m5gPmXLH1K9kq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBtX0mcBBdLDQZSY%2BircA4W6DEF3krQY0ElgQNkmGrksmJ8q19BUcVBNMgKypVgrxoqgPlTL9EEwhCjdG1pGTH4k8CrgRR6WaxA9MdZmwGRtOzjrzbYlyHgSwFsGqY8jn79WQXc62LPrQf%2BDDEhhJCTKUJjhaSjDc9SFxURfQjKTSwcYBYBfAL26LN%2BHMSnqAs71AhdMIzkuXBIrf216B7Utqwce%2B3fkSkA%2FHZ0CgupqahrQD6FDS9IQ%2BVWsc6d8wbm5yVgs70R%2FfaoEnKhyZZHlztbm0hHNGFVdGlVcKTRtk15kUY7%2BvHBM9zbK7voDvmsfi3VTihBP7tR9pojob1gBqbQ5CYArn%2BxyrIItWw1lNilevz4bZ5mjxlGCHZRJkDekn8go5q%2F3T3fOG1%2Bsptj4NFi6yRIchh%2FEKrperjlWT6JyZ8BBLXMdwQHEIyeTm4zzOPgieDGdGZBffz2SVZl7vI3cL6vxHnQMwbXMQ9E7lw04S0vhFdeCK5PmNpwkSmwwGo3gGDWkzemu9ZPg%2F9Dwtggp1JdwYiZMunck4nlLOvegvKWVmSq7SkCLhQjW26%2FmN4b544GHLxp0m6Wf0gneaj%2BIc%2B9ug7peOnjxIrIDk8GfYqulrVe%2Fa50sZGwug%2B6RLxx%2FFEYcxDNIMPCQxMkGOqUBFQVADb%2FmJCTAzQcrvBRlb4C2c9o1ESwwO%2BGIUCN4CstKegBhk%2FUFzWeaJGYcmY9mJAU2lwXqRDmDBF5DRuxqFrV%2FNk1V1%2BUrrGyjAcoDchiOxec3lYKQ7hyCWMqoA%2B5BsMiT777L4z9rUeY6IrJB4H8J0Yelk54XpilB0d44j6rhlf47bUccD%2FAXC3sjuZdsdqjUL1AJnNnMsWsUcR9KBSdd%2FioV&X-Amz-Signature=04ab75d378d681efde5bfd932af6754e7dd0f4d2a0776d48207d251444cc5589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

