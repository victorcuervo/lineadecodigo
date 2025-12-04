---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPLGCU5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCT7KzhmnkXmuizipQdfG9DqUxNMjtttfNSfr6QwzcWLgIhAL1SC0VkSnUzWyYclxxYxDTkcRia61VusIxyHZ3SnIWcKv8DCEUQABoMNjM3NDIzMTgzODA1IgwLggXVPVeMwXj9TXAq3AOsadb11LmFeb9Z%2BUumfMKZGsjedChtK5wprqGQJAKwQZJrQgObVai%2BLkrtdRIXGEDjcWTotXSLJNmCDeu%2BxqFKCwYxPH%2BYk79k2%2F2FZQe5l9mGmKYf%2F4jv7jtzw66kDXfttDP97WI4wmnkSVEZ6%2FjIJ96niCBigXFep6Ct4efLtTIyIGOzBOz%2F9f0JZkmGRU6WFPd0xMyKLI2WkZdMMMtu0mAunsPbS4gWagMBpvr3Fb5kM2XVmU1Zg36EzvvY%2Fk2XMwPl46%2BWB4NqDc0WBDRc5RkS%2FYcyzxIGaYkAygjvC1ts%2Fuxwx56CiklIPE6UmNuiySIqD%2FWZXh6Z7N%2B9ARDMK6wgG49wLyflrdxgSbVs%2FGsCxtUr9EfV6tuBfQYvS7lS1lqRinzSjNaz8YA%2BoZQ%2FKEfKPiNlKCM%2FMxgeve7dWBLes0bE4d1Sdf43GuJ7FOJKRt3OZVFN9JP8loHDTJMfTWfbfjgmHMyH%2By3Yjub%2Fh1LgsZlhS6ppn4sKP68kY0hQgkae07wfkDocfJG%2FB1lST9JwVwbZZoeAkISAtdlJd7zanfHkr9yJwdC8cla3E640keLibfBCi%2BR3Bth1dZ%2FAzWrSSebCqlxz0v%2FGw0Dz15FgMSzYAkkVWgKatzC55sXJBjqkAYwIFKneR%2F5iEkvm%2Bz%2Ftr1mIGIlnFtp3uW8u1uz1U%2BCL0iONzRQ05PVjCbW2lPKhigsciZ%2FCADtOTOAtk6x207g4DfEjaqPYCbnet4dEn3DKT6g%2FzgwCkg9zSEJ75ngM1Ecpa%2B5d4ygTXJukhh1UbJqyyL950u0HF9M%2FXqGlCx0gozRkNOyhJPiv7z7brnRQkRhDOu9%2FcFAVcloSi%2BT4ShnTfHas&X-Amz-Signature=1f92aab899eb783f6662f92b135ad9b5364bc22cd46b5f6b67decc82bf73ae31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

