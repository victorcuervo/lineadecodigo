---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHTFQR2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH5%2B0j24vSn3WtBYjXq4znNrlKpbFEAfBR5bll5IUW3tAiEA6yvJg9c%2FEpADixOOKNzlJWL4wChEm3411MNjz3JCqN4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCsmnXuqC7eQsNldHircA%2FXRKJvJ%2Fx1CjJCM4GcLfE3GEBQE7DeyFaOW7PGFiuqJ9gWmS4%2B%2F%2B%2FcvXa%2BhLX51e6efOdvVeEjPXl%2F6jnPwLnpXpdJMqbGNtzwFcHow9HaVq4GIdIL%2Bpi8H3YbsEpsvkrIjtpf0mzZWebPIGyKWdLDOkaR8tnln48WTM8HhjviE%2BABDVHDlZSuLenAn3bGsNKcj71RxJE2uIS7ShRJAKYqYH5wmC8bdwT%2FtYO3Lw5UzXdWJ8E6j8TSkl3N4JewO8fAQvOajIgxGaaua3%2BIxrTLAyJjw1E52OH85G91HCam2rvVOss4eros9HaYn%2BsUifmLZ0FHvKtzjRRVQ8Qq%2BatOrBJLBmkJXqbdDfu0Y2oR0hXLPjQhugT%2ByrLPAD4GJ9Jf3JEg%2BkDUkcMOXjjJ%2BvF92FYdEpgmnXHy3UAHqNCorbNzanwvPTHe37Qnq%2FDHBXUAx%2FKv%2BK%2BsGVNyIBM5ynhQRaz1KH%2BYOoCzJZcjPLUFw1PDfWXaJFNK3YBlmDp%2F2LqLyC9slWRs9y87eG7%2BD%2BBBXpJMnWXpGfZCtiK7Rb1Z6DoxQnSHGTdHXqOaSE4tkxgkIoQAedx2ll6CUIY8zdZE3jkxwB0mhk1%2F%2FlSnotuUufWh9o6SuvIgLZ83yMIvLxMkGOqUBsdb0wIHMw3dNChnsn1ora3Svv6RXNM6hHcKfsYP7hbD75Z57wKXBuS078p5i9ndou8va%2Ff3D4NPlx4dqOVWQ0922CFsM42H9oVVGanQ7OogY3aJkWgdTbUD%2FyFdbLy6i%2BFeFsBcogmiZmE5MN9KrxaIYp8WZwW7BBC%2BGCAumX75vzToIrpDYV9EwtxZ20Havl7O5gllAV%2BCu6SkBMJNpo0xVIMkp&X-Amz-Signature=f73f3cae3631d9b5c70d52d3d10240ff9846fd27bbf007a38ce71da45996f0d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

