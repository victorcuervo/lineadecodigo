---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA77OFJ4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIE8DHb99iuef%2FzDtGOwfKSVVMcIaWkCBMsvqHDKkJKXIAiAgOHHFAurRltsilp%2BaItmzj2kvrBS%2BCMdVm%2Fs1%2B8zouir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMp0grl5qtxLxDR3AfKtwDnJrna00whIH5jBp0xmM24MW5fo4uNLNBWNwqgm4LMLyAA837vkks2J8vnXfzb7amd82pH2MEHMVoRHBkTIX%2BH67Cc1M0TU%2Fm%2BuHqmZ40j5ZC7xjcvKQU2ZetqT3pw1fXST1aIEAoZW5XVtNpxRI1A0cWlLV%2FHR0YhjwCSFNWSb0COWyWn5BCRxpFT3px1qGTESsD5JW5ojQprU1AQnDXyM4NeV03sLPUmou4XMqljo7k2erTiLZEvDnplxX2Vsxo9bAgRvzof%2BxeA%2FxcfuGhEwQDygSZIMI7ZIXqC8qEllm0AJlp0TSEAGGxnHAPungEB2FfJ6ej44J5TGn5ckrVYmvvM2aYJrf8uLq41n1%2BB1DX9zFy%2FMe3kpTObCwn2GoJcsghq2tqNOdWA97vkGNU0tbvKlbZDcw1pbvT7bdWKesP%2FGQPcmSyww2HmQxuaa9xKYxkHuWLJe7TdtVlDItC%2BXFUfjfDGdHRKiGvR7Hh10VgSof1TIhw%2BKmAGUR4hJdE%2Bm4wRNMuNZcgMfuByTWEo7i5Js%2FC%2BWrtB7lNKg9jWQJogpyrIK4X%2FoJv9YT98L669o4JfHJ0q7fYGKVxFiBIWACVffV8zxTVCZyyzzP6o242KAjcoC3bIaxIHAIwmPPDyQY6pgHg%2FXdmPcH0Z5qTV9rWwD9Ke%2FQY1VOvPbyd%2Fm1fKHymHObcz9s5HPvL1Y8nC84%2FVr8mOykhaBG7V6iy9ah5GlYaAGnynpqochgISrn5cubgBUaLIfPOhvtvBud6XO2hWBNJmV65TVqa7FJEkAAcMA8V6Mz%2FMG9J4NvuaHcQT950tAewbxuo1te7gHwTRM2MTZpW3qFEYWRMQCZsya4Pneeg0DbH5a3Q&X-Amz-Signature=edfc06baf49b464a4668e0efe03e459acd868c7df52681584511fd556927709d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

