---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQX6ARSJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBTmujnt4kMeNYntN%2F1RAk9fTfCae2F9fTLl7cA21WCAiEAi9Tjubz2QQKtysYy3VGPPlaGnv%2FXp%2FcdQEo%2FOyfpfNwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCE8ad%2Bl4Mo4nf6urircA3tHopssl5C8mTUJqFnOJy6c6pL83BGx2%2FOwdB1AuJkn94k1qsH6JvhY23v44jniHGhWnBgnn6Yksy34EUq%2B%2FWeyoTSY15h0mWQe7jGaYr97QGeOzPReaV8uMgtfgGF5Vpjf8U8AASLb3CRkQGotLgV7MctACPhNo23E%2FwEfu9mtDU%2FJ4TzyUbfooXhsmvsuxY2bnNfViXCVWxV9VeGWeqUQzIdYdHP%2FIdae1ZvSyVtPD4hKYryyP4iNJFOs0CQk8mFGwNt5JDhwq5r8hU%2BARsVBdVrNGP8ohaOhk8EqSyB63sNKNEtd2y%2F%2FFmFLH3BPOA9rU2NytdGL4tMQ7IwOaPdm5Lj8QDE0mVlMFrxaP8fxwZ7eW9%2BTjCstpzfIitKmlFw97TfY5UE%2BPkzN3YG%2FF7BYaw6hl3jSfElGLusFWx9tKDeXmi1aFLxls2Rna629E%2FLYYCtW9BLzIXFTNMk2YyMq2hFbO176I03TqvyuygvxgceiRXWjv02xVfBYmGbi1VS2DG2M63UbwA89zFfIbxxzwcA%2BHzInD5oYR2gBQAODY9WmPJoVNv7HBZWVH00jVTLAOkbnzudWbGdFByaEbxRXtN32nxm%2FxllULgRAyLg%2FGDbwwRFhVUpBBKwZMNP6xskGOqUBgOHpEU4g5kYjb7UfFX7I5YmL1n5inUCt8KF1%2BtfRAroVg7gsGJgJedYtDlkuboObUDgUokZYVJWTGx2963ZHDyrdoOxPwvUuW576vB6Baa11sRx9abVj1cQLPny2LVxhKF4y2BHeLLV0NJQ%2FEKIHTushCgsY8TpKO8qX2boFMdZHTiYaLiq8ghhP4Id8aST6pzS4wP7Pnm3YnvFeXxag1a%2FpyDBm&X-Amz-Signature=715ee3bc02027348b046beb8ccdcd091f7e5b87e95a904d830d64c0a798b8333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

