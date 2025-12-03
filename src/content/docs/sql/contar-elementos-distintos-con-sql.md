---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBJGK5C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCnuhp1wJYwx%2BjUjUojMuA40qrT9bEQbyTE93kjCDEG%2FwIhAOex0qO%2BtPelzxbHBYpn6C15GbRFKp3wkydqhiPTgoF2Kv8DCDgQABoMNjM3NDIzMTgzODA1IgwHy4eMxnNvTkLe3L0q3AMRQNsonGdhz3p3rdFKCnn07VPi610bsGxRR1GH8H93d0QW7fbyRNYXWuwkBoZqapE92qIFQQ4TsID0G4szo0f0xA1cZpt7WKom3CJZe6WP9i6DGkLNQCfszIrrQldGhMajb5I9gxEXsKrWFY%2BdegsmAfOpEVtSKkANBhEdWEY0BBM%2FbiHwYLaTxw9xgiZlS7EwTaPjHn%2BpKYmlQh3Llr2tTHpnixk7P41pu8mtRcmQRbe0Ds6WAwylSBxmRwlZLH8slFKcoHX%2FSd3ewY5AKNAiN%2B%2FdCyL9HXq6YFLOyu6oMAd%2BjJz0B9ovZnrDduEobfw33ddPBYwGgs8XQz%2ByH20oo1wKR5gac4eju70XURo3liV%2F4mpUJSoNGQZW9R4ZfZ1H6OhFsweN2JSkbkov25rdMlnDw0LHVrLG4txb4CwyN9JaQg7NzKsgVXM9nN1nOxRygcB3dHxgO4qzvUSYsp3oLh0xnzf500BuciPr9OysLYFJcOobsu7Jos9lIIlWI7IssTuJbMGvfUdyEuD0oQESHwMWkOKtlklkPr2iamEGrfRALMW4bour89MbpgV2OqtTcItVxK3E5k9OHDRd723mEDjewf9gaJK6SzU3eEYszNjwo8DAO7JwPBdwKjDl98LJBjqkAclXV0M9cneSxX%2Bn0wQ2PUkkSoB%2B3cyoRuAoHXeUr2LvlF%2F96nlg%2Fb%2Bw0i9rRlIlorW%2FIy7nVkJWl%2FDy2eZKieCCG3DSB1TSphOwVm9Mjj7t%2BB3EDP1sIvJ0t5%2FKLj9koFvUof2usTuunD0mQ8KX6p%2Bdmngb50EqZ7HpYWYXGaEJ1sNbO%2Bgur04x%2BjP38t7fopkHw5%2FQr%2BPQtdMKPtT3mTh%2FUTMK&X-Amz-Signature=f9cd7771c38f4686a99e58431e02711c7753fd0053aeaeede8600efbc7040f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

