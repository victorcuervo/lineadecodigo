---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOY7QKX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCdhoqG9dByTIoJTUIQickbTWZBchx7qLOEx%2F6qipEsRwIhALJEBUdk3KdlbRX2RjbOzfgsAxemAD6lUbJDm4DtoDrtKv8DCEYQABoMNjM3NDIzMTgzODA1IgxASY9M326zQxIov%2Bkq3AP4fBdD51Tow9u5cz4cIk3q2xgVUBjrzuUcGloiWbpopxaFTjshcZDrOXrse5iM%2BxBqJ3ZQUReq8failjzyQm0%2BDBbgiUXF3nzzVGXjNaP1m2%2BsFzCCjz4CfNFBGKgotJ8s49fkYZY1xxvWTRHO6UxbIerHvTPpGeRJ3gBGiyfd2XZhjq8oulc6%2FDHZWT19o2lMm1HkvQCyjloQLM0UWihfLfzV5qTu7l422YwaNLnXWCmTBeyeod5rYwSRIuLHAzrbRQWHpRStL854%2B2hRAw%2B1HUQ44Xt%2FLMFEb%2B%2FnFqTrZJuz%2FJSZsGgOwhNSWTcdEVQx%2BCXxn4Tor8khIadT6%2FBENfAa%2F9sFpezVwGNNQw5AACp5y4uX%2FDhOCmk0lJpIQ8WnLPPtwVUbYNY%2FRM2qN4SstYYpRw146%2F4CzEyRsrFWKtMZVksOzTJ0AdJ0i9KKc7U2E3GWahwfCfg59TDwIpwmSAUh7H8Vo%2FbCjCeCwuLIhhNCy98dqiYi7kuuaw2w4LDX80TM6vtjFp%2FzqkOdUNDLznmBS6Ct8qSpuSAGxExjRryWTkhB2wFHidtNjuLOADA8g0cuhYzbLXqVsWeM2GwEo51WrI0rlyx1dN1bPVxdsVCN%2BUCHN2nhSqu1DjCUhMbJBjqkAR62lZVwVjPUTQX5lzEXIrdovhq%2BiS2ablMn9c1X1AzcayUuI6Nd3BVGz1PZvghBSROOgypKCPSVUHhLMDcMzcf53xa56QzHz%2B0JyR9m5Kp3R4eGRF9BkdLu74hKr4Fj7K5fpO%2F%2FDEzKdiJnMrhYzK0prNi7dxjAVgIF0Gmzvy%2F7vKt9xtyUeZ8PsWyUKznvdhWC%2BAL4qvJXW9euQLB2JN7ycVcM&X-Amz-Signature=ac01cd2d9708993beaa9bf710f3014d79e6e115a260ec65893e7597ca63e6041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

