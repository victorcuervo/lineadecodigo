---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZCZKWE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCqc1B9RNJgXk4DtHxzdm63GmI3jI5lB0nO51dj83Vj%2BgIgHgLZOUav6qMacKaJEDugpByVTGmlCu2CGm6hS9Yye5Mq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG0jd2NBcBQ0%2FPHpfyrcAzcn%2F%2BHJkrylXavY3KXB7rcq26cWNHtySzfdsIGLMLlfd5OW2oOoGrNscbHO9LALbrFPdNCEn4ILXpudtsLFx9uVsOc%2Br09pxNVOzGEB1aIP0KsKRmPFz%2Bmm27wAbL5i88Rk%2BiK6vNACZ9Stxm0A4jc2Mh9Q8lUdYgSZLC1BeIeKUUMo523MVu80NwmCdTS0C2tem6wZYBQfGNOW7C7GAGU1J2m1U8WKfOe5K%2Ft0RhC24g0l0rdB%2BkUlNf4tQlCOM8efFRWevR1IiBoL7qvAzWRITlt6GlmHWl%2BAhw2UGksQm8RIRUoJqN0y5P7VAfeXRgPXS3AO8EBPNO3BvC%2FJ1Xi6FHv1boyyeSzbpqKLg9I9aaLHoan6PQD4m2QjOkBdE%2Bm%2BK4pvo5McETr2omE6WP1fjKVDft2yeFDkJ%2FP5gWvPn033L6soLMEsj5yn6Ny4Kp0qC6ZUpzGaRfjT8r%2B4HbwFoxmMFEDyt25roakeelXexUHZ8XzRHMljR7MnGbx6xGCmlJLLWguz6l1%2FKD%2B7%2Ff64NFX0Wca81sWZlf7RoG9i9V%2FRnETNtsuXklU2%2FXSzUa%2BNeehrNGzzoZfLM1AWY8aI%2Be6gNttTV%2FkOocLRXykGGmGGitryddRACQ2UMI%2B0w8kGOqUBwgN7zn36n8ZJQnFJvEWW6Te3X7BFi0qMg%2F1WoVpcsS%2B19HcRwj2OF9QQG8lTFV7VbxUKBvpp13DiCvo6VlBUsIreIk9EDO5PEATlWpw6bCY3pOOtnkqQaMkeN4fJb73h8NJ2LV9bHEKVOR8jGx0Hzff44aDeDlNozW%2BH%2FY0MCTHGwv2RrZxqft%2BdGMOgtmE9vAItF3vS75%2BsOgxMnq1fhb%2BuUBBR&X-Amz-Signature=91ffb33a2feaf85cc2958f12e561186368b9810989f223b36bf534233d9f2f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

