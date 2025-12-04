---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YODPNBWF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCSZ9RPR7bWRa5%2BiRh5OA9k9%2FWfiYlYRKF3o51wBKKCCwIgI%2BhvZrsue%2BZULybiYFfqUINj7nphwsLzzgG4vZ97Ru0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJt4JFe7i18f6nnjzCrcA9OvP4F3Fb8w6qgTKvF0Qk1Tpok%2BRmJ5tP9wLFZbWy7Pkntwn3VtqRAFXnTENFX86dJU2VvTO4l%2BJnp8KLmoTS3fI73Lqx3Kak1D%2FQvu6YgQuKgsQwdrcf1ksc37%2FzfYBk1jOlPZrPKo%2BB8oU9XqFOXlBWfgw0k%2F1WTC5fpI5bEgcMqIav%2FDALvaomSCGnxc8d%2FxhceJMaR07lPOO8HrqAQssheUdZ6ofjR0N1%2F4FsUitLhcrRSlyL86bb0MbWhTyvvCz%2BkzOjdKIt2ETf856xmQHXJaQT%2B539g4lmkSX8ANZgLv4aj1rlYzdjd5epHnCBIZ2uDU1HZmJrYFB3kbK3WB9C8vUHuADvPf5bS9T57r0t%2BBo0tdCFCKpXJGxpBlouyd%2BJqJB%2F8wwk5JMb2wZz7l615oZenZRaGVSczGL1Xg8QpKUuc1xz%2FrCxXb75kZ0C1m%2FGWN4VJz1U0wm8K3A7ZDVkss3xTZHL4Z2a6RdDokDa7mOS7cBde58a1QwjmV7k4NGd2HNeeHQ2LcfWG6%2F2UMuQNG5cCjv76ozkyOH15oUXnm0zHxg09JcxvpaPb9wHC30QrL0CgEHJJFUmad80SeM6wWy8iNcG3%2FwIR82Mi%2Fv7wuTNJpaRyGBABnMMCuxMkGOqUBNVd6nKCAqO2cryymZqQuqH0BieBCNjwjJc7hUW6%2Fp2FkXoKf2v8TWaobH328hehKJXZ2Bri1TeX0QVJ3UZpAbX3RBOMU%2BO3afdCTKEPW0p0RxTRbKI6BS%2F6dE3ssgo2zuhWC4poCZ6KCnUFcpxrceuWEuYwZqkpPCRa8%2Br%2BZXuKil%2BfWANvK%2FHcKOznD4gLvV%2FvHx8pZ5Av76CMP4b3YhII6I2Ua&X-Amz-Signature=940baedfe4e92dbe9bd048d700543dd4a0eb09ee413ea191fedf761a58136a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

