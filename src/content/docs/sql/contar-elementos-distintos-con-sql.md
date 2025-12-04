---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MSONRG6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDpcPTJouyMb71B%2F4zKR0Oujh65IRrz%2Fv13nUaJs0r11AIhAIRfxtmyE2ERvcafaKAjF7j19rtN8kymEiB%2BwU792bvGKv8DCEAQABoMNjM3NDIzMTgzODA1IgwhW56o17q%2BpVqdm9wq3AOnTPjgueFfpuRyWejwHkOb7p74kZ4swzCpnZCgXXq%2FuPK6%2B7r11%2ByFmWMqV2ecGPPsq%2F%2BJmAneUASYDJoGCno1i22PJsZYTX5Ano6V6P00BNnyaAozdQN1HDbu0Sy0%2Bd1%2FgI6fO0nlpaRZP6kTchspz7352U9B33qtjKG6C4aZJmBbgnypPm%2FMGREOA%2BvwF0ZJlfyF7DSIausc00xlS8saNjjgg9%2Fbo7scBr80UL6%2Fl98yyfW04cq9alZ4y%2Flz4WxQxtsbvDkOGBkq9aGbfzKNXYumdj5RBZ5MObd2u7WtTkbTPk1tVASyDePhAb7bUG4cKl7qWdFQDlXcYfAu%2BIVhvEaxhmn87VKO9jj1z9lXX%2Fi%2BBdaVVg94i37W2gSk%2BJZAiJlWoasIrswyi1JUkDNu87dh7Mu0RwgZK2fPIj%2Fs%2By5CZ1YWX7tq3v4ZOQ4pMvRvaLIJT3Ocv2Wtm7W2UHVfrF7kLcdzWdLbivSYW5Mulau4AJ4w9%2F7Ne4AJffUQK1iJ6gdZXCLKd8bq1HRe7th9d24BPSs7j0Zf4IpaXuXU6EDqWyCGeJCwK69SypD0ue%2BQgETR9%2F9BAS9sH%2FnAU9Yu0oGzXKBivh9rxm93FPEslsvyKGvviM9pPhA9vDCm6MTJBjqkAac3Z%2BzWhF3B4283SyfFhqKiUrU7qHF5z16T01H02MUJwM7YuFmBbf6XDnEqL2FcMlhNYJENhGdV866e6eteON0LqrFDZFJqW67JaNDuOzDC4qrVL5lYUSljvLWLz2vyU5F5Byk5id6U%2BguHZ2gmreJjN%2B0BDz5FvbE7XuYtjMdsAURooRnkt3Jm7dPQ%2FkD6%2FijOMOnXUmfg%2F%2F6Xelq71kJEkqFT&X-Amz-Signature=f5dd19aab7228afd459d87aa07a80e64382504dd991a1120ecbe3350e4e24f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

