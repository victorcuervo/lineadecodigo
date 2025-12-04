---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627XZPMUL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDkFEr3oxiwQBzR1yIltaDHzX283de5MZ4Nxg5uwH44sgIgcxOX98cVTqr5qo0QDSuGzm61Htb%2Bb3dWl2wqq%2FI6VZ4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNsXJ0Hz5kgn6d84iircA%2FJBSCAad2RGXnhFtPE6lgRiaqkqXFH0sHN4z%2Fdk8rk9p3xPsWCsy8OFfryjxNpuUONavVxs6WDHqSDW8QxGKX5ER446LjMOzdakK220h6Qn%2FFRdU6bW8oOzbaj4c2FRV1EfQrFR8FaRAkPSEJr9CC8sxTymEuadA%2FhE1btq4ppe3Hcfrh7cgfswzAEBO6BR19nU21sSF30b%2BIwViMeZk1iB2kwmjfkwOLpBkrKEJnUmpJqnxc4swR%2BXhpM%2Fm4%2BYDDqEPK%2FcHMu7c7eQL6gAgSM0Wlx3RkLDT0BUz78%2B6Fko9UoImssdri0IdJufFb%2FHns58U6Rlvt8a%2FHcOQQL6CTMS%2BXGuPh7MxCnbeK8iSce0D3eRxD3waABrf5oDMNJUedvKzwYk2ayzD3INYxdpSy7HfXR1B%2B0%2BEXM5meIE1koc59kjBwGCRmLt8UaxAyhvdq4XMmmvdASUaU2lx%2BRd9W3w2QMEvhHNvf8EghKuq4xf%2B3QLueGCpDrirxAP%2BLq0MXwNkG9rhoGrEl8eN0JfF9mqIkv98P3YsV4j1ucPECJdbXH9x6zPZbnNmR4rsY0rp1ZybBfoUnixmYDZ1U9aioZJWk8ZLZ7W5v6KZxmpP7gm8mq6L6mxo%2FOAOE1DMLeDxskGOqUBdLEgV9IF6h0AYSTZTyL1V74Dkw159Fgt8JY1MdlPZXk4aDIMo4vtigCYPoeqmlrqb6RXw1M9zABx0JRqmC%2Fff0PfLJT9SXveICsH7vhYdYb3ys38aoSghtr4ISDlo%2FrfnTlI9h68jW7YhCqV5nRkCHurNwWQ9GjW%2FFHcNsBO5nIOMJqcpjBq5SyJ9YHqcMnc5yWVA%2BdD%2B%2BL1eGEZOlx5fWl8JIrW&X-Amz-Signature=1e93c61b78ace7f152b55c9a1148e372a04a76bbf0925c2be0508c5a7a0c823c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

