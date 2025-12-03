---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLBL7XQV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDFbxPyje8Czgn%2F3Hps0i9V0HX1CUAVZYdtaMEncbkQdgIgS6P5u2ulu5rX5nKktjUEJXe4iPW4LnUYUAVADpeL9nEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDH4rbYBYgIXO7ZhpOSrcA3ZbVblprYBefkyb5Nc%2Bh8MrTcsvuiMesfwPGP2oD1AbpdpGinqAjt5jAW6YxSdSecSUw3SutjKfc6PaDFnnUfOXsBTbE6OnPF5eFGjcKnHPviQWogr80A83xRB7wdYkKdR72UkkUNaW23L1WWsID7yp3fXuHD4mhocFwlrwBU4AfRsHrlK7DAcjBvm5g4Km6%2ByYR6Dpb6Cyzq7CWFQtrwkNfA%2Bci8tWMrnbVHuEckjsUUqMohyoIlJ6dxeR3OrzzOjJKnQnzDHxaq3ebY6qOshwduE0HB2AgaSLWfwgWBCrzZjJQzhS0tOWq4MBeA5Roo7kUQrMAq5k2%2FPsRGoxGFqeryBt2OTRBs2qlEKUvk1vt%2Bk7fidtULF%2FVdeBjKGvc%2Fqhg8jWjNIB8GdDNUzRMTPbFpfb59e8edcIULhKpIt3Pzgv6b6eIGwkuliYAw6bBhMFiLq%2BOhvoAQ14bkCIC%2FzBg3Nmepm3pkbEQri%2ByEh%2BAz2WEvZPuBhzouzIfTQ6lM9H3Aenen05slXCtepO6bVPLpG%2FwfInwR9mDImQz1zDcbpxuqwGDgQZiv8CHRevgI2Faf0xzkNvibbWA5x9e0UJwgqTZbbEgvZPpOPo41lOkI3QEsf5GQkbrXMHMJr4wskGOqUBM4FkClh2ejF5drWnh4wLKhJTOQfk6iid8Em73zceAVk34NTln9Ku%2BYwDNDv2%2F%2BO3RQUT%2BLIWn5TAr71sIMvT4xv3YHuO3Wb8phLZ1bRm%2FgOGe7hrcCMGw8H%2FnKhWqiH7lDZVzAsgHk6CQA%2B5lhNWXyiYXYVQ95KpwWrtj%2BYiqMwKAwz0DRgdGRYrHJvn%2FUJ15%2BfZKhBfGmgZ0%2BX1bhde3vlZHJOt&X-Amz-Signature=799dfc1d4da41414074131e7088ed563eeca8109b429f0d03bc5882eceaf5fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

