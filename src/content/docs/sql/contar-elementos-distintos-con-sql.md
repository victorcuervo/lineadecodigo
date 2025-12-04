---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LQ5M45%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCftMHadP%2B2byQSKQcLNDqZ1yiaGuSbfNL52fN7Gyh%2BTwIhAJFlRAoLG%2BOWEPQYDNhwM47cTn4JiK7AmP3XzothRDE0Kv8DCEEQABoMNjM3NDIzMTgzODA1IgzMloox8HrR4t%2F%2B%2BGYq3AN6xEe1Jgh52fvcbO%2BSwmUsU9196b6k9exm%2FsuntdMVHWDpS5RE2c2PFnwY1p%2BKu6vynNZ1%2Bi2y%2FMoc0tKbq77bzbkfVEfcpdJEJed0FJcLNn7a%2FVvowzuY%2BikNSsVP1TR34bPLaayKKi29WfphblEzW%2F7kDC%2FQFMBkZTsUpys8BvqOyUJiTMSPxIuZBHmq9rC5nUAXHwhxZQnI%2B%2BFvEggTaDphqAStp%2B3mTD5jXZkiZePwQjtL7EuOZTVsOF0nWu4YB0hby%2BeIqBa1PPnXo%2ByOswDjeocxS4j%2Bkl0KQ0KDHeWtK3odfC2lvdD%2F9e1xbBfj4blXusKebma5WvJaKyKbOeiHJZT22fKYW7j5hJdXgvbv%2Bbjb3JaHPn5amicglfaExQoYpa26Uy6CiOB8%2FWmIqd1v2x9uNQ99uEN3n2qnQW7Zob8VIM0MICWx%2FzaIq%2F%2FgywEqDNDPVh5LY99Ut2lQG2MAJ2syh1ugkYe%2BoyqiOh83fpXmo97Gs4K0IV9mW8WOXeSFUsyj3d46pZX%2BUSwB%2FWy8ZlNXu5gH3BUdLTVEDcllH1AajG9M%2B%2BaK6bLbBHLekaMRVAofQzHCyp2IE5CCjNNH6YWTgF1lRSim2xyeqNLF1iTA9kDivtv0sDDMhsXJBjqkAaoO4w%2FTj8A7Yp5nXJcUmgOkmHapZ7avAvcoAPxYCGFoXMI29c5FDbtjabNB0W9CJWT5D44rybsbPuK%2FzT264af%2FRNqBe7QLeI1xW2km%2BCI%2BttrshWtZxszbefjqBLLx7v2tFdc93pt7laTBQAdhq3x5KlR7R3cCbr4jWmXnfP99kU937vyy2FmuQSEksyduSCRzcGmOZBHAKtmuYLDbni5LHjLW&X-Amz-Signature=cb27030266b4dc67fc061ed5cd8d622cfa641272a6871f797a082dfd7c801b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

