---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZ5PJL4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBKOo%2Fux958m7aVpLo4Ukf6T64k34lCdUxxFWPA9FAv4AiEA%2BC9mzmLnPX5c0S%2BR9ft%2FsrtHQEk%2BronO%2BykgWITQmjAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDP7miho%2F%2FO%2FIB6fX2CrcA2VkvVV9xqgltnxCMV4WtnSNRisii24cHns417kOc7A6D%2F4JoKnZZGu0s5BCN7tdT4BA6dNyFlS7%2BJdm%2FJq8PV5BRO6ylQWOkGmuJtA%2Bkw0JHOxVHYw9a%2F03zaF79hwy6AouZ5crF1LbbIX1XfMU6nxxQD6XdYpTQz8v8x0VepRGu4vvoiu%2Bbbp0Gv7ch6N%2BCfb7iS6ZPl1rydD3ve6MlWcZdw7P2J1wJikgxUsh3JXQGif57msSaKNw%2B8xY%2FDpD3ZzSdF9JS2FqHBM1ZFu%2B%2FQywdfcM%2Fax7qWFpwKlrzeSk4VvXl2w5v26cdZSIOYornbwsigYKEq1IbsRAT9tjt2TuTZA9QLMP99MAQq2acvnd%2FQp%2BPKYKn26doPNxIR4kdmvOHzHy%2BdwNsd%2FtaW7%2BTDYSkTvvJ%2BrFiYN%2F%2Ba1xr9E4jEYqdUixVe42VnqnOkRyjyWVE%2Bf8g911H0fNLVLCvDgKpN5XbkH1ccg99ATAtO84eqo35q%2F%2BgaOVPMMExelM9kfZZoY50AtaPp15R%2BtzRzVSZWwC5AoLwyxVmgU07FoRTgnAuaDsP9fyWv2Hz%2BKspXKBskXHFmRkj7l%2F%2FBsGoEl0HLb3vnZ4vb6wmUh1PlTx%2F%2FLxyDKCJnditOU4MOmDxskGOqUBkxqldjJ%2BBn8m%2FSW%2FjgvQrqTud2yXT0wuad%2F%2BIYebqwYFm4jgSxj7OVRzXsXJ%2B1X3tvnsRdolHPC57WpeU6YbOpR2DyBTY0QP6tOHQOYKFHc10Ac4h9mitADuDRN2NNMHGT3%2FvEpW4l4toUhx4jMOLOahBW6osgnhu5iTX0xJAy638TPA%2BMnGvHPl7bUiyKDZJdxrMCniQu0nGrO0nb9%2FrCOUWQxx&X-Amz-Signature=3d3324306506a9eefd8bfaa2095b01cdd029e7d83b732a14031f02006e71bf86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

