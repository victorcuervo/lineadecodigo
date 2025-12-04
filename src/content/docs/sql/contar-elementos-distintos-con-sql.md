---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSHIZWX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCuUk8KiN8t5lp7%2FzlSPN6apJGZlpIGhiselXIOYZO8yAIhAMtsLNr899M0X03a0o6VNMICYVFU2WSYC94%2FCwrIW6DAKv8DCEAQABoMNjM3NDIzMTgzODA1IgwzR9uUzy5H%2BNKFLbAq3AOv%2F9WKA7pJFfXVTlbNok644tYupAPe9%2FmDDbEpNSVGiPueJDSbU93%2FDLYnU85Wt%2FiM5Sv3yz7eQ%2FRjKImTyA1FsQ3CHW%2FEDjVhVbj9zuGugZP6LfkfIwmiv2N%2BjVdNV1xhgXXebHmege%2BoUonaQ2v3eVvB%2FXhyQzPIYCK6orrLw3ZgSJamVHfudDMo7i8EDFu4Q0ugHPYA4ux66N12LD2m4TMtu%2FwnTa0N2pB%2BZmA3x0FpDBZVeoIX3ArGep%2ByZ7swzP0lA6aA0lWCBrHQuhgGjVkyha2O%2BbMeEfCxC%2B7HaZ84Xm%2F%2BLkOQQUucEgIYuuT4K%2FT4mt3QH1oVDGouDTJuFOT2A2JdoHdOVKrtrVCgGPi52hPKkVPrYS1uXcX9J4DlNDT1QNjdBDxvZApou2EAKBQ2fXU9NIAus2%2BUkNmwr8v0Mnx4VUu5keVvua%2BrBj%2FbAha8jhUUgZwnrNoSAIV9ZK2du8SSpPsCeHfhyR%2FhKlVIh0VlA7dZmNEuPrSeGhWjpAWzQNCEocKIy0Bkl834WgUvn8q47cezuHgI6zqhK2yJdVW8%2FgeoB5EmvHYGmaIs7M3v8xv%2FKQpZDnCHwLexsC7CrLs8RKtXjy5SSYVMJH5UfLFusQbinNaUPDDD6MTJBjqkAXoLFk7WaG1hFtJutoRLfVO%2Bg0gnHQeLy5ycqsp7N%2FJQhIFW6CswnMtMe3erQYqWDMUTutnIbOzAL7ozmZnTpflqamcuflerfZDpgRmgSeqKOFF%2FrAyTRxMqPYNJuQGgKKxsummc%2F3%2FaQ7m8TAs%2BJjO%2FMS%2B0qc21YOVuw%2FUobu6zqSw7sPpij4u%2Bs%2Bffs5n9NaPjsmCelbpfOdT%2FU0n8kYnnO6tg&X-Amz-Signature=12428426024276d658bea16e519fc8a757c5e8b5fd5736c3524dc12fa0eea301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

