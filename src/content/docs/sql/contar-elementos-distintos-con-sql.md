---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623DXJLHQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECMRPmzq2ntKaaTnsWuNTr8uzouX7WCbTlmvHdAgoB%2BAiEA6UJDb8Xy4Cbdk3D6jq6VtnQ7CwCiqYlYRrt%2BfAe3Spwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBXoYgeZflmaeblfqSrcA3gZVfAf%2Bjao%2BMbTlK5ok38ToVibBUtwj9E%2FzevSc8nWyRqJrtr6iWFdLy7M53ePPV3O59kb116diK3a59PXrIrSUwM2kHONS65unvmfFeiZfvk%2FbGvMvUpDzrQUb7C7J6o1MgSFfezM5S%2FDrFWfd7aYyAgWkxgEkxayPJohan%2BQB6KuZZjy7IePERlyN7MJlA0OH0ALk0nmP565e5EoKM%2Fy86XaAZx%2Fl%2BwihMDZMg5U%2FUcY6UC5rZPszAnfRLYNjT84R5ucWuWjXrsBRJK0U67iXg27bBkx6Bcr2xS4FRCr8zpAMdsa4jaR%2BLxfrPAzmi1IKU2jhuahBjGOfT3phpgVll%2Buk3WPRIDBU7Rzgd3jGDZJHCI8RHoz4sa4yQOymfSG4BvgqcXDknpY9HBP2hV5o7Ix9FfCAekYx0FQO%2FLg6KUrqCqs%2BMS3%2FseVIOk2ShYlRy02gq6wbfm2mtgGPqBUQPSWIu9M2CMtLkKZQTdpobCZWA12iHts%2FmdlOxthbi9scJ2tPcbVpHkWqwZ%2BCmnUGIsG9J0UW4fXwxvo%2FkRx12cN8V7TOHbJF5PpUCKXC8KoO95VqbYvY7Wgw10gFumzqnoYVcnabDAuJwgUMb41oZ9UiMTOE9esp1MwMN76xskGOqUB8AC08FS9je7AkqqtH7lPMk4yC5a2pNKDaPd1Owo86XkAcqZrV%2Bb0LeyEDCSKn1MUHvpXc%2BUqAwmpH%2FLk69vRq%2B3va5Z8Zz0dQcdfjx75xDsGCfvhLQ22NzK9zVvy63aLt%2BhsWZ0DlC5IgwzRkxFkzFLBv8XaS%2BdBJtM50ui15VUquY3xSz6k19Ihe8qjpgjaE2jeTJs4y1PP9wSk2aZAYtAr6UMr&X-Amz-Signature=6b89e215cf7d4493897e15c24ec8af100465d60342182018c14aeb7b375f13ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

