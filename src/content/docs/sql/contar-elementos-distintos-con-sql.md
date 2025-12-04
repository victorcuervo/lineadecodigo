---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBAFLHD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDpuM0%2BQta2AklTFaxVrgwkHCfPy0DSkcYLHKT8gOriQQIgOU7vLWKDj9tLFOii8kyptW2PE8f7G9oPJxqraZ4KZY4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAI5yK%2FahZExRz2zWCrcAyPIek2duN0fXFOGMvYg03qWkHY9QgHpPtEwvG%2FarEPqghz7VPPND9iZddppVe7XE9LvldWtjfHatxO9ZWtYcCDciIF%2FwGx5SLzweANR00LiSiaQBvn4B2hjPLW8TE8jv%2FJSJG91fE5oZjnNRQ6oIV%2FyqPS2lK8%2Fe0bjvWJOw6xm7OM4h%2FCzBYBvx6cy5CdjmX8Op%2BQ3tXLKSNMPJIQthOzpMU54Z7qmY6UeAST28VmLz5X%2BqaySqoujoYoVeea2X6q6r%2FHHVQbI5RvPQfM4hHuhrqcglMkqrwl0GR4Rl%2FSWenHnExY9APGuRmTjH2WWgds5sBF30%2BOcGLDgHZhUkWKtwYGWbzkoS%2FD44YZWsVIG8VZbVa06ouORQzHsz4GfANIPGWhIYL5nI%2FNuHGwBOVvQKIpEntJ3G8Gfqt8QUQmHz2NVdzEdvnYZxKaouAVXUuTPmU%2FRuKkPNDAaGGEjmvfTg6J5jDelC1Fc0dBqqGg5zy%2Bv0sL410KT3YKk3KdpjVhUtWcaL9K6rmIzsardEl%2FcSbPZpNZz5QK%2BkDA87KuXxWHR%2F2KbAi9%2FcOkJ%2FEb6W70B7dw%2F147wmzzuhNc5KhmX8xPQAw5%2FJKu5px8Dl6MO16%2BQX15btwzMWYJ9MLWGxckGOqUBSnr5%2B%2Fr7cgx1T9PDy6M2Hdt8gFvLW9RAN%2BV3lXj7C4Dz5nR64VCPR1bBRr17FYUx%2FCg9%2FChPMh%2FJVfAugysjrzPY1xmmyYqw8Y3ic7d9MZqEBGjkNChBIhNhwMzvQZPFz%2FfSiW3S%2B5COGMeDvopkXNuf%2Fv7bY%2FwRi1FDeC3w7rFYwjLCVexQkQP3Sv%2BpiwQNX8Gn9MxZ6nboUbcNbrek5%2BIihn2O&X-Amz-Signature=33e2844d55d61aa15345f2ec6531c60ee9ba915f4c7827fbab28db51565ba29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

