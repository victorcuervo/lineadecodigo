---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JN5XSP5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBt2MUCUHYn6clxspp%2BXJYbe%2BxsmXAteHfpf5GVv0%2BMZAiEAkozDajkweyv15Uh7dqxmiiXwlOArJXMg5B0y062vorsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDM5iEo0K6rB2VMxJvircA9cmof6cJ0A5xN7ElG8vwrNAw1NI28mHS4%2BJsD0txV0KiHg25Re3FrRKNzcEvQJEEazjyKp7WjrYqA2ABLNiNKsKbluvvAHh%2BMDc2mvky8qiGtFqo3j0wYJcc7HESIC49iKuJK1Mh88LNVCZMdvtTNLtu%2BGW4kXMYTgkMSwDokUjIT9c%2Fu28IxxrSqyfingii5UHzkG%2BbUPPIdeiBXEXVDjYoCd%2FVbT9ZfB4CRzSMk3%2FAanQWYzDLJaIov7J3MtxksggFet3FjDSGN8hFH7I9JDl6VOdTdoXdd2J69SoyB3hJqE%2BRg%2FYwcwyuxtLBdf2WOZsFhmGW67E7ZRGZimXkz1cBL7qzOghRu61Q35R6EFRqMetZVrDDkjEAJShzah%2F9RauRAxaeIkkIPXWud1UhmJ1PiWSzgYY%2BHT770q5DsmWHrz%2B1sIyvWZXMjFX%2FH9mSQAbclSs4TS8jqqGoGzxD%2F9C5wgPOUGiYtRcjpYesS5lsEElFEHrNJn7Jm%2BEr5PpSUWWhRRs6RaZ%2F4wt5STAW8%2Bms5%2BCn7KC%2BvdteK5y0vCxAuTUvkCyO0OvhnU4nIOp2QE7CBR2Jx7eduXl3jaQqxNj4XV8jLT5AtOBAaXjNnFGF%2Fv2piN%2BryoRaAN0MNSDxskGOqUB9pAyDjh78Hhhvfgl8hlWRs4YRoHd752uId1Us4uwaNgwyEL2%2FQzT03leN%2FpEt4Dk9AKWqoJbrPn%2F1t9ZYqlVoOMTwzNaVEWlG3UjdDBJOHcvUrqQd8Z5MPNWvTYCZOfH9wZKvpRY7u0nFH76R9aQKP8aYmDhw0Cc0E%2FKqbNSx%2FPtc9cH1anOcdxNKjKcTm%2BA8ojWRYOGbmUECzlp0R%2FdHTiBTpFe&X-Amz-Signature=6e04d2884008eeea750f89d455bac5cc44b80db0a822051ef20cf0a0da4c362c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

