---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLTG7MX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIB6%2B2z4SYIJl2x4xPTa4vgX6MNikwBErhhavjU%2BQuLrUAiEAz%2BqjO9ADzNV8p8iQko6CyMbKylpkro%2BfyT5d0v9aXD4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJ9HoK37Lqi%2FM1vCeyrcA%2BrBhbNu8ajL80hB631PbDda2n9Lg%2BQxO99NbqSYydluy7I52PIQ3hNQR6%2BGYqV13FNsJTZA4yILmcEGhrlqZIZQZvWoZKwEdCvMLdSfJ1B8Wck2DaifbCb8IH%2FX1UYrEBglyNCS6BJX7%2BbMRlHcChWsTXYg5JbX3h3gqb5iIXJN5VS6oYygtxhnkGjlc3nGXZFQwPRbgbNB5GFteOGGqtZ9gjKq5golnMsYsuIAFhs8SOn0xydZduBLpCh%2F23e5Sljxee%2FD3eURH%2BzOFEF6oLrHAjx7MJFyCleMY2Bn%2FWFhp0oAVSwT4evDvk5rCVkUCo0k3phs2HFXAmPNGtj692ZDloiIiBNHGwx8cGmgmRXmCNw%2BTI2XM6YB7xUsxFXEwySW%2Fk4KC02Tv4WGOKp%2F%2FFkJ1PnNNyJ%2BsYGFHbsG%2FlUDF8z9Fhk37hUZSzQZTk9eEKBR4CYHj3LTVgx6xbzQr%2F85Quf7ZQtjNUzTo%2BgJTSkwRbRmulTStnTPMfZ1In5LXLQyiiECqfDGdW%2FdPyUqsUDnyFPSSEnjqN%2F%2Fu0k6SckLgUBwLZMTdwvwP97fpZmA7p3I5soiEndtsRRQp68plixRQ5iZz0TJDEzfKlCRq14h5TvmxCUO6VSF4%2FizMOe9wskGOqUB7Echj8VEtsZL8BmiTDFOx%2FUXkVj%2BnphQ4lFcazWzXAVYXvKr5rVSnQQE%2BQ6H4tZkl2%2FMcK7k3hZ0Glua7MCNP8Hxc0jK%2Fvxh628fcquniXlm85VzwwAWMdKgGK72bhObcAFKcPjUyUkzxFyjnm9aR4EFnJqznXS3IBEhhfQJhmfJ%2FfgWb9HsVNese93zJs8tc4I2DsUFo9FmZVhk8LltpceC7Dt0&X-Amz-Signature=80deab4b347c7611826873310b88f0e8628f909f8ad02cdba18e2407c8539c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

