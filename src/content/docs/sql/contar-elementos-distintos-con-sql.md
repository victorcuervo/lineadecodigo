---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV4Q5PCL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCID355rgEXPW3TOL5owHOkZgwHJljdshHL%2FLGl1Pc9KqnAiBSPz5%2FZcQiWF9jgiNuFY6WTnjKlkP%2BwlgMpg9pYA6Beyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEASWc1yqQaHhkbOxKtwDTaYg%2FEBblLqBnlRdSETj5TFK9DBcEfb2LeWvHb%2FWvcLUghla%2BhXnvZfU6vf%2FL6zH%2B8NCjqOdIGg7Z08dgh0NCYITGEUv9eXUDXMhvlRGpMkDy9nP5tZnVXMc97p%2BkpoQox0mI9I820Axxn1gBWu1HscQ1R8q6ZIrrVd%2FTyxfhsZWmzIgxAvZtDK15eK%2FZr%2FdazTJ3psNICqmg6nNhfGGmVVlR%2FNyMypmY78UNS80vZMza0eSZzaWOhJJtTXRMIYtNIpGC6BAuuOu0yaUDUnUZcDZroNnpLuWpT3ddNYChtQ8yNbBmkzQ1cQ3J9PZB1sYsXhz4wsgQNySwJ44pqnSAC4zltkcc%2BFrLPMs4pwi0ATbvxNxpVxJCySql6pljRKpp6hlq05elSoHfeYuGKLICn4nueVVmGOUKx6vdaM7lnCpA8mPhH67DVJvtNZDrfF2e1ymaRWGaT9KsUpsZ5eYOHpSM%2FgdFj9kj2FOW6x%2BDFYG2bUepnxLT7VBa%2B5E%2B%2Bn%2BlhAtpRv8kYE4DjMqADZN1RsYzqD%2F7Ic1l2Uz2C2vsACJagEBYP6zISXqIrbnmhOEryJ%2FGLcqYY88SMQv0ykMQAfbnvTuTHJKEvedejbUE5k%2BQyArcCLUqNhJWaIw9MrEyQY6pgGgfSec%2B%2FDHQe1y9uMLfs00QcrAulN3yii4iSYFH1zbrOE7hryZmQWiTp2FFwlG15VkDebRO273HuriLc3b1Sfc9radMEX3f9izAhPUQoQGf5G9v%2Bj%2FmPPWASKJcBAFkzI1QcghQ1oQeQTDSKT%2B2s%2F1jpzvwlWJbUZ4CR7G806f1mqvBGko28VhckG89qIdyBT2bSmg12IuBvA5Gs4pCSd%2BVY7vbRs8&X-Amz-Signature=f7940ea1fbb36da723885ff7986ac40771e234a41b078851870040461c7e4a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

