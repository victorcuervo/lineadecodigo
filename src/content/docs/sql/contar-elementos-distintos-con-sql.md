---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEC7T7G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICJTH%2F%2BO7nDFa6na%2FJtqEFEWWXYhYMLcMa6Q8en7yzQKAiAsj33e%2BTDNYMYTtTQUMvrEDMhK8EDJzxsNY3J9EPu1MCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMdCFe8V9hD45dsPCeKtwDRl%2BdGjKjCm0sxOcxlCoHfsoc9lXzUIxIvJ5E3NOwaLhOumFwWI9l%2FU2GlD6cENavzNtpmp4IFU9%2Fw0rXsybYkGrRtvaMhlz4tdSgXFZuaXrh8lPo%2B0b6Ej19d102ZSHQW1o655POSCthF6GpF4tm07u71Bcgh8bjhppjOyzgbjaU7eLuEUtdnGm5NU%2FW9sJKdRxOsx%2BR2AGGmv8YatMS0%2FjUbhV5tkNHC76bGXdxB0NxmTb3i5jfWGJwCULI4Ka8YQDRCoFXvvx7rUBP4QZqXWePdmG1skfeWJ1FmKN3bGx1Yj%2FA0Klwn%2BirBsafy8uh3doI05RUrH7AxISxnYB1lUqup2ahIIhSPquJz2W0MSs%2FyY0nowH0kzv3BNb%2FbSGAn%2BJOB2YNs3LM8hELCUTx6rIOIusZZQTAX1UruYPHriPY%2FxMJZbZoPs9QINNfNHc37NdARcyjKOAe8lFZ%2FeA8S%2FgcU2OCpgvIXPxTkQAjgTt%2FHQzni8kkUNEtCVPv09Tcn3%2Fgq0CyZ5Q7%2BC4%2BTdGdtDQfNk1i1BF6IRyjwOhZAhAluuJ6pW4yCkb3kmc%2BHGknhL7KQxQvycLYn3oc2Yp1POPugE7ovtKmBU09lHQfMIlH%2F%2BlBrqYo5wUUEYswk8DGyQY6pgF7eFq1Gl4EHPojdviJ2wuwICAEmRyo9HAXBMnMO6tCEAhOgQnWjp6ht13a5LixEB8LkWSHD5Mnzh8jzEWl5JMllu%2Bzl%2BsJfphM%2FLJzNtKPiA1re10UeF9Lvp5ZomMj7G6XVMDaaFKhvJ3PAPj1GTouqv0V9KatKcPizOPQsDwhfMulFeStv77X3QV6kLWdwFYTfJ5LfPeqxc87GZ98OSMjHvvP9rIt&X-Amz-Signature=e37f85b9badcb0451b911f7fa5dc74a70ad061d9c50028f72ffec2d9564b3224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

