---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGNKLMT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCw1y1kt0%2BPSJTWCub7Glxeji%2Bur9eB4wosE8Uw1k4t6wIhAOMyMyS8aS87Hc3DaA7CujseQL2wVLJ8X%2F4fUUOu9XhoKv8DCDsQABoMNjM3NDIzMTgzODA1IgxDrxwm8Sw4NGPUvWIq3AOigo1fZJSOQji%2Fc0D9vKtE4Dy8Du4e%2BjBmXWpV%2FOt7thrNxXZWWUsHTHZuXeh48mhq6N6hlpfdYnKv46sZz1P2zqv2l7zOUmqWFkuqDgQVomhhIU1%2BSekaReCo2B5VD8DLXYEukSmZem0WfrQAHBkMtKlGE%2F52Q%2BlR7Bev2J4QJLkKzoScKuMpCtVB6k6HVqGmE%2B6yZOcUWmpLEIBWSRwPaQNgEX5hO2dgiBYnl8tXkd%2FJrN2sPcboSfc8JJyxjRZwGv%2BUsRrYWMzsOG8RQxsB%2B7LQ92aulHbhZeguxFIRODs6JrDAwJBjwnXbWZudGRZzLxGgPJyK5PZrlCBhK8xZvEPRqGP%2FUa8eaUzKIMDCF%2FZQC0I6cCV2MUfC2VnR7IFPaTilxp3QU8AZnHzX0zU3L2SoUUR0IEXeaeFqsMEUZnPaQDSYwTIGZH9syovgkaLoST%2BgXloA9eVwPkxv7ysCrSSJVFyQ4fNdj1Jc1vQn5OOkQX8gzYis%2F4P9eKYsz%2BsHGsn3gWW1n03BTtA90DmN9mIQPOBEuG9zD39OTvX3oH6AY2WGLcR4NYuRp0TEFuTVRjll%2B9ZWWpJykbHUNT15V52W0VvUyz6d9Fy6m57TQrgjX9OJUbuFl1rnYjC31MPJBjqkASqLA4A6DCoWzV0PN9w%2F5eQtZMB7xiwhofTnpcLmD7JRqcqyHVk7Kj7y1giOzs%2FfM31%2BUNfPondzNSz0f1S%2FCBeAIluCbjskDV9m7xCahQsEWJhOrCEm5ZT7fN13Vtn%2Bw2gtg9DomBUC1L39%2BcPxz%2ByFMTAZzMBVizQTT4nKQHCUI8DI3JlyM9CNq2quvhVxTgSZZqoPyvpJgFN7RNFKgx6Encmf&X-Amz-Signature=1c0e38d81adf02778db7ee7e84aeaf534020c53bb4825d201d62d2476a7ad5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

