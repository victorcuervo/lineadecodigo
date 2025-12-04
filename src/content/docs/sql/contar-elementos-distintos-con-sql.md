---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVJEVRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOQPxoJ209NGHYoSWDmeJfCeSUjVso4t%2B1ajoFVv4sFgIgbOMoYmmWN27xoez9QvqMQfkhqdph6Sw1ejQuBsA2i7cq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMZsk5b3kAr3%2BUU%2F5yrcA%2BZVAG3exNo8go6EiYCEjqJ4ZPcBw%2FlNqlfqdMMv3fTwu5x6YnXyDPlKtMMtS2t%2FoXgnObkzoG3%2Fh%2F7xqPYXvyorXVBUV7KguaXNLRlw%2FYkzJ%2BYCoMDGGZwBUiVNc%2BpLcjwclCeAPA2nHtJZsu6%2F10P9xHO5C4pTAa4trcTRUqgkVNpiVSeFjUP1YldAyjwuWsy6Tkg%2FZJmAJh5MDkHep5IyEu9nyCDCyZEDrejUmgn8rxcX3ZesU7dqGU0rxh%2BWR2WcvxZQE2o5Kz8788SL%2BZFHlibEtNFHZVs33crB%2FVmTOB5e%2FqI%2FpRmHKd5aEH%2BRZ2CIzGLHdRAsHMxhDKyfTBK8egLrt48ENGBOOPQiQl95uGwewgxheJsYfuIUtUvjM2C6UPRoAdYIKgaeYh46J5Do2qe9VZ7ltspw17VXi1eBiD%2B8BXukLlNF7Qy3grPelCy6lqTaVccGthkOGsfJy6Q20rfjwxbjpnyQj8GXNcpMboy7R%2Bd%2FzF8iC4aSYjE%2FcrI6Kvk8wY0hNcVNsOuOu%2Bt8PaJ3zrOpNGgnp3FocC47mHa5iJm%2FU%2BVw9GqtWADVuc7tbSvZ%2FIfpQ5TFyOzlKn6OW%2F73gZCjmwSFksjrawtRh%2FZobqJkPgrmc8ZAMLeuxMkGOqUBIhYNUJyZVqqQbOfnaGvmPjsx3DS%2B6M6SvM0wzZLK35QUn3JWyepZIC9YhW22%2Fxy1OzWd1kO5ZnbyiGB7sB0iajDg%2BiADVcthmuD9VFYdCT9cl7DLlGKbAkty4cJi6c8Ak919QA3nOOPpcbGYNE4%2FmmcbBY5E8JDwUHgA6x7ZE5yO19W73UiIm0TiTPjmrcd5F2bcvgYmKsOq%2BuTE1h9RxPOaGJTM&X-Amz-Signature=4ba782e60ff0030fd806b56ae52204c291c715e6454e3645d3e46377982507c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

