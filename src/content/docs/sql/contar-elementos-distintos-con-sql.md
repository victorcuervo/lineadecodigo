---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCU7WVRP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIA3l9u9pfq0y%2BdhDRO4QeHPFBwJSuMKjZV78ZpAIScV1AiAv33QinpP4smn92q1xb3qC%2BMuxH4FnAyPnXwh7eIxwdyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM12puxhlZ3DthbPapKtwDZd1CZ6qfD8kDoP2kI0MdvfNEI9PwWBKpf3hiRLpcyERXFf%2F3yL17qKpzTzdnhp93BBl5U4j8C9QSbfM2UIeekWXfceLpk35dDoEEV34iZT4gx%2FzI%2FMPbnySP2oKs32KN%2BUXQ5gxj4Acox8mBM9uxwm9qJ%2BmSB8NeB48QUYFwDD1CjPpQvlm8tmkekAebQUMuxr6bfN3th9RRA5GaU%2BgabobWCE6do5eOgIphBjAyHzAIO%2B1%2B%2Fe6AAVwST04vLVn3ZF%2BRSjM28CTdLAGl8XdG9UNWBWmz5vGvih01Wd6zL7n%2BNGrxs5XArBcLCNPZUa7rLFBt0crCf2pRqZOyIWccAVNDgUTV%2FNuK8oR%2F0Ivf5anrUgfq96wvIW%2Fy0LfASYZhGNTlWxO0PkK1JBNGJn8frxACgNYxmiaBSLP9wk8Sl%2BPtRE0jtf2HgPfaAq9Ac%2FV1krQZIH1q0Eq3zRkFzvn2wt1NbDIjhDYHGe8oi37lpPpbGnQM5MtMw1uGTXme3IZVbn8iqbZLphsRcT1rsp%2BRLkcdbtHU6k4YdYE8GbFE6omILK5ptiEs87DP5n2xxCsunqnP%2F9%2FWGQwFWnaiJOS%2BNgHEqh3ypajY4B%2FXJ1T%2F1ZrEKSCbEwqsaMzxfCgworXDyQY6pgEMB4hTlAJVKxgWU8uLerxNrVDqhYOafONvM1qgwThTgot5w5%2FewuWEKBYPhoiY%2FMJPwQpaD1ahFZfHyRY5tVVxiLkT%2FLQwlCXFI%2Fu3IGRHMM%2FxnrDeKH3UcLS%2FoX8Ccnnswd5%2BrYmaHccOdqxAUxXanGnyYvVFaYHq82kvtsw3L%2FhhgfIz%2BbK6daVDI6hfa6UPR8RG4DnFNY8GVUUM6LUzeP5dlNWn&X-Amz-Signature=853b37b01ba5a3876f1d8a39cce6c47fa7fb363b40152ff3789cea1985a5a5f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

