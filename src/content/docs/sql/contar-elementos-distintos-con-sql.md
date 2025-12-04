---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PHKNPT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAEwlKebHZauCQoruy6d0LQr7kecKC4TYIOKZLDDRsdxAiEA%2BtQmo5qH3iKcusrB6dmk6k9yA%2BQ1eGxaPpHnJ682w5kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNX2hAAKCp78AGCrfyrcA3dx8SSheuKN2rF81KhMSgGo3a7e4P9qzLojmtPYiK0oXfDERdbNf%2BcNnBicAhLQzoHFrDJGpK8%2F9OcrO4k2OQvG8wNQBQeVO8Lr2LXOMTNQXUktJzPNoliCyYdasQSfJJZkm%2BQLqRC%2FjfOo8Wx3sRgJUVsBLnczUMnM9Pnn1B9XcZR%2Fe1hX%2FiFWyw9voM412SQe%2FRK5uI99DxiFH9KkOIJEPZDnC5WgkHKd8cp6CubVv8SKam9RGeFw7T9cdQ6RQ%2BSl8G4FgzRqfFooxkVGDUHIbE0RONvNdp4A6WdtCTLmgWWAMDefgMubppUpnQaKnlOi2HI2M8CVJqV0B5VIWwXyvrp%2F7WMcEGnDIXDw73AooGv2Fy531raTY2rpC8gvL%2BqzCaJKQZa8bU67%2BgU%2FiDdOuxXKPxMMcppcCsQ9qjqiU3MJFO0bYdoXMrmP%2BmJTXLpEDo%2FluSKkFSS0K11epCfmK%2F0aY24lPdKF7S4%2FGEuGrMXQlpwMw4%2FuzGSH6y7XJmnIlv7mU7%2BZPx%2BxBrYYl6tKYUJ3%2BYEn6ky7m7Q3Y6tux8Xztc7kKdz28Nn88IfgVpSvv9bkejJvtYRlBXtRFPWsEAp3JBSTHNenBaOnnbqPP2874bdt%2BTkzotiHMISqxckGOqUB8zowO1WiGbtGpRNAWPinbFASTgKFw9G4A%2FfcZCjyICBi8E9xHhKg0ASZeieGG417N%2BR8US72gAmhAzlSTi1A6dmZ%2Fo6bpDR1LoIq18v2b4%2Bu87QiBmmQi6JEEuRrIrq6zTRi6ZMaPs6GkUOake2DIZSwTeQeu7VaPqVJeTytnu7r81a6rEaOfjkLHAkS%2B78SBoU%2BDdFxelys7Q%2FnlzETCvbIv9sz&X-Amz-Signature=178bedf7c9a0f054846e2ff26ec77304cd3852d1f539287e923e3438cf48dde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

