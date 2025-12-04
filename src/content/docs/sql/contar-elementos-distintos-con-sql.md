---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQXH3NR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICZa8aCa46loV4z3man%2ByXvnG6hxXSIOW6KUcqK%2BziVZAiEAhMCoUuU5CD4HCanaYSW4lKGHjJsfSj5KX9%2FmAnKnyV4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDyezOkFjBkabbF2VSrcA9B%2F2brqDxGYgDvVLWyjD2hMqveUUUy8scfW1AEqEaruvdws94dvveCyFuOqGm3bLvoqWVmCUuytmn2TciGWEWwUhvlNFaVRu752qi7%2BnQX0Jb2D1R5LbB3ef6IVs3YzON1tHwCrhkOh%2B9RVcoJa%2FYBOyza2QpCZFD31YBUtrBt6RSSo9oF%2B23hHfZsuAety0KmL852CU7RmI5L%2B3QZNL10sqn7vR51VzeeutvalW%2BGIjUOd5ysc76bFOuMlvUSvfJItk5jNakbHUuU7hhSTaGzCwNEdtDBk28adlpsZbE5EJMWDYZdZmrUAE6LtB99WWTmB5Iyjl%2Fy5fwBd2870UlEJoDkf9dYy6jDaldbIH7Jrfxtb8IyAN2G7j%2FzVhbIUwQJb03vO9COkxJXnEREQmAeVuq%2FM7ZZHhBqI5owqTvoCdGL%2BVjtCfZb6e%2BLAZlbosOORLanpMYmZt0ZHbTI4muaUX%2FLHkW%2FNyC%2FigWQ%2FRR022anE1NTM7e5llF3sGB062OJpM0Y4YJ9Ywu7LmWYBZTx0hmw5DnmRtiraS19VEtgviPAZeBmVo1EnKf0lyuaKtn47TMYXNP2mZ1C7LjACBW73RLqmPJBHp1UIdCeZAmWpf%2FWJiHqGOp6YjprsML2hxskGOqUBZgurktm%2BCA7nsQ1SEKoBR4JML849FMuOBu8s0QJZ1B4kjfjGXWQy0GSqjJ3reFAK%2FF0v%2FoiIuKgibIcev2JeTlhKo%2Bnbi54NVzrL7mclgp8HSJqOZ%2FbpjZGb85Bq3CjKr5jAAzIFwd2JEZOJTrymMSw%2BQBXL9aPgbus6h243gERCmtDeWnpogONBwNSnHS2QiF2%2Fglh3CK%2FYX%2BAhE8laS3LwzEMN&X-Amz-Signature=b5521855c7a4587092a3d1e267dca358a4da782faac4d402954047aa046b596a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

