---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNUOQP2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCRP%2BcBHquaAKZ%2BIfGXH4EkAH7jxeuNSXWhi37e%2FGdmmgIhAPfgz8PsGUw6jGKXMkCRnyrqeREkCwhw%2FxDNpCOfDOCmKv8DCEUQABoMNjM3NDIzMTgzODA1IgyeojDBsRRpFtQnIkMq3ANhQVr011wFwaDOnMzwFFoJZuV0nK5tOgCcHoggQ3C4Nxsm77CJ6ZG4u60VxImrfYFi1%2FiA1raPGoBAsBJCuU449B7CH1oQ7AOmt5DRy6gbVDYuAlVxZkbRPG5X2OEabquLdl54Dk2VhcrhJcNWnKNYARN5FAbLhuUfmidDlOpG1Hv1s3wuL3guZi2fujRGYrLiopSx%2BejEbW54NB3pxBAFe03ngzwjHCg0OxgD%2BUZLbe8pvusozFdcf7HCiACozd3ApyC3MQzvR7w61Nmqg0945M94T0PzuzW7hMQ5zefAw5x97g19YW9OZFaeGX2x8LLgXUpzKAVGMGZWzdyJ0GsQHSL9ppCM2PSOZb9SU4Zag5JX9ZWeNe%2BvAUpsyaa5tY2NwcrGB8zhgAiUPHoG4mFiE5NbIjUNWUR%2F1bL0PwzjWfgcOdUfYSgiWnnKUHzDmHe9PBiAH6aUeAxsW1cKAuUYlSEw5CzZRFCkesRMQ%2FkDc1ElJR4w%2BhgjVA2IqzQousEGfeh9FZs24Lr1%2F6MEdZTAobwX3qa32jbXJ6PnhjjALLNqMYp5IxsJwwhTkR4ukppnU%2BhDyBH1Y2MI6CDr%2BNJgEdieEIxqrCGs43%2BvQ4zk%2BARv4cdmhC2gNFuOhDDL5sXJBjqkAZ65cIlO6XaLsxyhaCAA%2BynYkUC2rFB0mCtV6%2B14eZU2a1ya0w2nmkqzrHCrp6otAgxXOpA2w7qrk5sYTO9o1qBkelpBxsD4WFATOzAgEi0fCc1XeGzhY9KEhX9WygfosN6BMBz6Lli6qq8f0QKzUSi1j%2Bj8iC9F0xjMMNKFOuDDd4QPCEip%2Fblf9G996zFlpVFYl8KSgnYWddhnnWfdA0wj%2BxC%2B&X-Amz-Signature=113d64f1ace423c3ff8267b95fbfc02fa220cc47e5f296c4a3442e639f2632d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

