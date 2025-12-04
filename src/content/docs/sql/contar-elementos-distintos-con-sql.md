---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFE3DHYI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCJcPP90N6Jcc%2Bz9%2FmGwIn7ycNeqg8lUOzVCk9vYV2ougIgdqBFP0qO0%2BVnwSGAXoeKOyw4rwPkNTbnm4PlAO1mMAsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNShAxU%2F81BmsVHr6CrcAw0h9XEVR52ZOxBJ8i3pRYZacKNp47%2FZ9VnhmRiN7W7AWTAI4zfzoohzpXgwP%2BkvAgq2cXnKI%2BgwLBAz%2BdS4tvMaQ7xTcForWhT%2FzHtjpj4cQL61DQbPTvRLJb%2FSoCVhQNtaucf7ROuFNcCOyFKdSq0iT%2ByqaP7HFLIludUZQq20fLvDpBYik7raKZFCLxiyE7cYjqZPK9tiaSndokGA6gEuis3oFIe8RshsZA1ClsB%2BBdGysnij%2BRPGMDbOO2hUKHpMgg%2BSrcH09q%2B6avfe4xBUcnCli4odNSaHUIXItjmY1%2FbURvEJLD30DySY7sZKawzRr5yxOFLdW1Uar0FbSjhyEPWCrN%2FimXkuSYIZeI6rmzigUP1qLXIIHBjSDSQtWdXw%2FrFlt4YiqyVFTSaehV%2FLLFWLwWY5xnkRMbHc5EoWTi047M0nJ%2BYez9mtS%2BkociCpnv3JOdFZBZ38M%2B%2Bnwi4Pdwc%2BEh%2FwRhP%2BnZLiEICNxpgdFU%2BKdyxr%2FNs21bWJgQJ01%2BN8tPnc8Za7t%2FMV4kkboIRf0sjBp95MxNY3agjLddqhJxujugKv3v3JOkfclrCFEKxaXUXX72gYaOXt5WTdCvynT3xWhCkenXh7T9280YmL%2BPZAq2FjbOR8MIGVw8kGOqUB6MTCa8KgNb7FmzqmrY5a0JdxWL8C1YFIkwf%2FChzhqcS05Kx%2BTXPo1MvDKyA3CcK5oY3FArBA02stVxnzlscTNYw2sv6%2FT%2Fl47nmGqXAZyc1NG6seb7bkLa6lR%2FfmiGPGUffTlBAd5%2BVpBlQuJe3MPaYENEe%2BmdkX9%2BOOKr7RJXXMtyvTRd57fXheTORo68WycVCm51vqCQgwoYrH6KQjrBn3kgcK&X-Amz-Signature=8d8aa08d6e5cfcbcae39d13d0c4a421d1c2548c3e00b3b3ce08202fc7f474f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

