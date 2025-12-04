---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JY6WJXQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQChX%2Bt%2BuhOdZDfLPCVoRN1q%2BLGmVOqAAGR%2FkDI5CqUrxAIgRZJHOEzLQ%2BAz%2BkPvJzrvjnm5J%2BYkclvL%2BU%2Bc2jJA2iQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOOSrm4THv%2FMRruz5CrcA8ErRkF2Jr3d3OlGw617j%2BZ0hUX%2F6PdQqYGXeP1BqA3pktf3ctmZVml7Xm3e2TIX75wCzolhKSKFstVxUHL%2FBXd3ZKsHfWOTu2icFX%2BDT59KKgQS%2BZpYAja%2BBtn8o6eBSFOH5PZBMx9RsCzUWyTgGbZLkIDdPtsyFanHApdzVhuwpKIgrWBqpfy0VrVRraYBJAhnQXmW43SDc5OKBICW37P3EhCTyjeEa4E4x2tTZR9dB9TBjUmVB0aKohWpzqRJ7Ont84J4ZfwgnvymnhvXnZYvvdzeu8jUMuKFmmU0Sb98RrnWBf%2FhZx5IKUjVdxUVE9OfCCtvApN16J06pO6weDlV5E%2FVdSHvENNAxxTLwm8arNErsXzy2LI83RtVU0FxCL3BGjbwHLVz8gwOZXQMXujBJM%2BWs2qHzzdLsFcfAiDqBd3243jnSFLBQFzsCSKQjI916MTYLtmp%2FOp2gsZuIitntDsy1jY%2BPEzPFWJgidztlKEYvcR21Y1VwMJSEDQ3H8TZn6YVGjdJOCuiYGje26WTBn0pImltrqLKxjpcCq4rDNQd4mFKkRA%2F6P%2Bter7B0vM0vdKzzevYrgorDfF99NqRf%2FuR1qqCu4egxAyZVX1RztEk5J%2FRp5goeyIjMP3mxckGOqUBbnXxZM9g8NfP2CEr9hYzazLkocbBjRM2LSpCdsoFGWGGcKJkHUWqxInkafEtWrLPu2dUzmSAItO%2B6HoGzO487nEy21xTyo0UYUB5xmTzknsfDwzibg5aKPh3zRDHgVLmK8Hhd4PyIMHjGgV%2BO3gbON7aeJAIjFmXpGRkqYR20%2F2P9lF1hx%2BQjDIB3cpcy3hqMeqvymJfxFqhev8alwidA3zPrFmP&X-Amz-Signature=f50f07dd27e4591effc367ccc169622e3b3e2f8868a21da1fe6cc6d4c788df8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

