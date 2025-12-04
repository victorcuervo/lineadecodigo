---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX7F3ZJ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHUYGkw3xJtgLVNlhc6L86dLm10TmDAqHzkq9RXUb0PLAiEA8%2BeRvjY6Fw95vN707V%2B8w4nt3qhc5gE3EdEY%2BGL6n1oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDM6Evwr%2FoHet6M1fdSrcA372xnryS2U%2BhxejBZ%2FSiBAnRvQG%2BuDAegb6g6nauYKv9Gj3goW6S1fUQMCdKaahTDTyn28Dparbhc9p3YVJfNuo77XZwMLPG3EOe1XB00zi2tgqCrEvVt%2FxgCFV5uSm8aFAq6%2FZwQtQtu06Bk5CKympgHwA0TsH%2B9dkBoO7m4QdAfdTm%2FmAtDP8UbRmkyJmGETL03MVeqsZDS6G888CVPZdRWBouXw17pc2mThpJev8HZ6La88m%2Fb1vBwGnZ2WXGAGOw%2BAsWqtbPLhpJWPv361g3yN13jz91giojLcRC9z75Fveq4QjgJGjYILfyIi%2FAHYPCss0gxJzK5qm%2BQ9b8eSReFuEVbDr1lvDFfi6uxqcnTTdxV9MhhM9VsN5ANhoG41gWlOfeGoWb01C%2Ff6KJ7Oej215XxMx2MjI4Ly5I%2FlMUMnI1LTfJhN9hFVp8CGLBUhPG5UKcPBQCsfaek7qNQOmAUOW3L1ndw%2Fh3hKwcn%2BP7GjvUh%2FF6B93ZneFZwPk1euVkCddHZR0eT%2BcLziBvA4Yi59ybOaA9uf9cPJvSiOixRkkGYjxIiTL%2BWOORIue9hWEBZS5quJee3FwWp28ERgKsx5xUmovaoXcGmXL4c%2BZ1pRNqDerxHskpJVQMKCsxckGOqUB%2Fqh3f2QaW7va0INtzfQ%2B64KsQqUcxRj95CUJ%2BRQU68rbWXHOahKsfsSzTNvGeV2LP7QlNsDBWMhaSHXqnw1dBXdK5DVZZEK4LZXXt1MdY77h4LKFDWnIAgMCwWIIZjXVclLT%2BIWAIcYD779wYXZAih%2FtNhuXf0JepYwAPFp7aA4nwZ8%2Btv8yYBkwCq6rn9EucpvHv1ngcnSbyb%2FMiu6Wy30ufJv6&X-Amz-Signature=e3a3eb812f0b1a7ce38f3dc9383f698e2563a997d2a5690ee9741a58fa43e017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

