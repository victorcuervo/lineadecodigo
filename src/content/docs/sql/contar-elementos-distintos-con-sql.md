---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBNNAD3Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDPwiTKnq6XtSEd53t0znIywh86rvbn%2Fc6xiSZ0f9V98QIhANdhlJH0TfDTPjU8rVcds6v59%2BcgGHsAZQ3vCcMy51ZjKv8DCEEQABoMNjM3NDIzMTgzODA1IgxRqQXOAvCT4vOx5O8q3AOYT9w9v5AmVmcFrB5CBfBk4mcibuscJwOhbbzs9FP8%2BFk4QnohVWS1Tap2RBub86wHwZ8uWX%2BpynlK%2BSwmVWZMjdyEyWh2YkDNObXE3YpwhgF%2Bb3VjTJP1iPJTPOYK8i8C871CupwRr5ZmqCNjh6tHiPwayESBijXAXCABniZXOucp0%2FttbZ9h8CTxDu5sSHMem4k8ReVGg2Lqar1bfUqnGyk5tsSJaIGUIWHKqigOvXRY3a8WCOf%2FuJr%2Fv22g9m4TD3dg9y4wPUUfTjhw%2Bj8BejRzynP3ENYP9LSqLlWzeorWpQwB6A8rtRyoJ65QzUtTmoYT8RxJXMorZkhh%2F1ywlq8rl8%2F4bGPSuIgs9KESGvdU%2Fl3JovkS%2Fk%2F7pwhZk0Mpdq7%2BlWK3azf6hERjLE5DxDYDRQg%2Ba%2Fn0d4pGqqIZNkJ634ExICLA9qIPN%2BUz3itXLdlinE3r0sj4upqrdbY9p9dmf9fDEuQxK0p%2FrFKpoBKSwBCRvv12fPobPZ%2BZDWFub2QymRD%2FgUP3c1uEc6wh8zhZBTu2IHYLgJIQAih%2F4iRx2ipF4kX0fXPqytNlyNXHdAEFLLDToTRhdsM4Ik2NDFRwaf8qURGeX%2BAShjtLRKDnWV4FQ0CvtyG%2FxjDgh8XJBjqkAX%2BQrE8gbdN%2Fe0fxtUKFRndt4xK%2BaPL9hYGhV3s9htordaGlWgZPatyYH14tHPkMClaFrb7Pa54TxmQctc7B%2BJ1y2rGzMmPUL6gYroaFY%2BghbsHMmEeTD8r47Ngkz%2B4QgbK7hp%2FDJadCGLg5likz2xZWiPlV0uLpLTSluBoTvxavEsYNafaOZ8n9YP3DJ88g4UJObxTLXL%2BL07MkucwX%2BP79a8MP&X-Amz-Signature=a5014e040cec8fcca3ebc7ed63ed91b28b6e67a1da379a01b8a9dcc019b05ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

