---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VVI6HNC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIG9uq3LZHSckpCz%2FoloP60%2Bi0F7MYOm0sMNmBeYEJAhnAiA84oebctRYZgdxSyRCR388asc%2B1RvISuRZbOny%2B5CchSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQZtSCC8x5HC1zGMAKtwDixIggp2AYtT49cmEsjUjG410kI7AqoeUnXTYQbuRVPesRVv3RlNXDihuzrKBK%2B2X3YNDl7HMjhk1%2FemYBDYO9iI825Fl4IdfYh6anrZVG%2Bhr1o1xVwGqNlWkMT%2FIYWftUPxSulFOpprlw5skGs9Vb6Z1UFBQOYcYy6CFPuuy3HuIGA%2FpkPSqp%2BNG5srPcb8DOFB4O%2FqEKrb9jeZ9WHWgpaE4PvE3RBocnM7PsY%2BEUE5v3c%2BCVItSCtVFDqHNwB88qQOKIsI67qdbEC%2FDljphtY%2BHlvd8hGhbqnGlyXtxwLmPIxaD9OVGkQu9%2FsNelnrk6eM%2FtzcpoAC67dMD6%2FksO6Bq4pdgcPqWndrp1c0i6py9nWop7iJoCPJUWAOSbqlJex4filUCbiWSnETFFtmZaFUWpLhIIOr38o3iuiwDbcee0qTtcto1thVu2iYm5kt%2FyD6%2FrY%2FAB6NcYsZ0KkuJg5WQ%2F5u%2FdEYqy50gMN5Ekz2Bd8P4frdKmIn%2Be3VGMThEqyfHcqe6sEElgo4fdU%2BhQNGJWqNV0yqPjGuwRA7RamPGqoTqRsOhHfwTo90klFEns2yJ%2FHlP09RZ12OBXiW%2FGoLNOrP6ZaZ0xbE5oX%2F9GcNtN9yaun0WT90YV88wwsvEyQY6pgFpZmv0YTSz9zasX7LBpvFquIsZNBzqGr8wBiVICoZxTERRR%2BWcu%2FtzyOr8iHWr9r%2FjeKyOzuIqRtBZpQkMRsLwE5XVdW%2Bytyd7b7loEKmhHUZNDpX%2B7fYX65qayq46k4wi584EMGK3Q%2FdRpzP76bzAXkVC9apNfR4Pkl3mg9nBsdNK3rtG9gOwp0mCLqJdMBMJvNIUakmu6ItXbJkngOYGPwnZ5rHl&X-Amz-Signature=fefe61b7074b4b29a83022b581b884dd83a6beeed660430bfaa60c16d3910317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

