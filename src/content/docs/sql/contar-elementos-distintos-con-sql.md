---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDVLEZN6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBScNIgaDuy1HrMxSTENwuK7V7qGQq1CpiDijLHNQ%2F5kAiAvOz%2FQP1gGiUQni8yhr3WtVP%2FLrCBYCogvR3afGgRngSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWGIQeAQdv5twLokBKtwDCgHhFhe6%2BvBmSuTwJt1YDLSjbqAqzA48zSYq13smBLRRmBXinYR%2BqDY906jsu1zib6YFSPfZad%2Ftxyr0zDvnaxUgwkLLMiDXmhocsnsr881AsdEcA1o4DwkpGcIG9FJWw%2BdwVoKMO8I2tFTcViuJ0zeUq%2FQQ5%2FQbFawxHDccjoNr%2BQiatEnO%2F1ddBZ1UPwPuhcxXhmRWTOH8cgKt0DsOmjWHV4i6ITeBZ8nP9K8Iem5RL%2BPVjDigbGjqNDnUOXP12pdZU%2FOqvfYW1erosLaNitQgsGHyCMTrX1QYsJIcmR9byuTkSdt6Zws8wcz%2F%2FwcawSueFM23fqQovuyBhKGTUuGLrEN4UDjS%2Fc%2F%2BHJ2FEOb%2FIzJtzmgubhy1nEl77aVHK3oiALdzL0jf5c1kJ9pfWyS%2BBJipQSeFjT%2BQNjujz7O4dwwYwdPrhQp5UL%2BwwFc64fTP0J80%2FfooSfA8xDIAKFLdiL82JRwgd9cLJTrfxNy31oPJxf1aeXQzVp6tSHFTzWX6Js%2BuIIaGolEAWnWlAcpcP6SB1WAiJCeNwiSgzKcTo2KfGGKA%2BYqEPSE5NnTRD3JQAIuKG6lD1vdR6cw06PR%2FIQNbkhLcYLPsggVXoBFugU4TIMYhLLWb9C0w%2BMnFyQY6pgF1KJKsSEJEBzt7WvFxvr%2FpA0Jl%2Fl%2Bo7tKOAnOuRkEIgQtnPlu3ku8iXo3wkhMd4%2FEyiFG5k%2Bby64q5nQeoE5knbnBV%2BaCHOy%2FNYuvtdgLkOV51OYDRnZlRry%2B8OL6CdX8rPXeVD8o6ycV43nnAVVaUCORKqqinf3Elcm%2Fs6aaPYWXBMuQS01NsFLn54I%2BRa3u3VmL%2FEvpLJ6hiNJpa1HUtIRcXAcbc&X-Amz-Signature=a5260663301ce1ec803efca21a268a5fbf17f96c864bda23aafee9ef3ff0a5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

