---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E2MADHS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDCAbWTFu5jfdrXqKqNFlxixfnMlwfoGipcmU2PcFEdPgIgHEoRlCBiR9O7iuLfVV8NIWS0w0%2F9sBjuphWWJEgE4Jwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCIaBaO3TeUGkoezzSrcA4KEGUxJAxMOQb3tlL%2FvN9Wsagt3ntvLjEvCJ5CDjDU%2BaONowqZ1x2nxcRW1%2B10pZXf2NxfGaVhMKVpTteC%2FJ%2BLCcDPMDAiRw2RSqMUHxfjLYTQRQttdrSkJp7HVJCkj4KSs%2BBGwC%2B%2Fs%2F9XRr5N8A1k3nEfCG5xfc%2FZd12NUIHcsTa%2FjtTWun%2Fcc9Gn1fJnJsmTGX3pHrXjcqeTcTIPBy9EErgnzX0FtfsExsbQEi5mGHN1aJ6nZQ%2F6tuiSPpH1Hu7geZGuYSW86k9NQX%2BMO7WErRgWGKytSlzem0cBQ6Nm2g8BYMpb%2FQaY4XWanADVYqKCGLX%2FXG9Quaj0qvVarFLAAxSCjXfAsNwCCW3MKKIS8dTTAxi2YxaPWHNIfijVbyjKbCOpWh3Jdzs%2Fz6GFIF4R%2BkN5UfuFGZ6M0TyT%2FrTC6Z4fhV4eV4CzePUdn%2BM9ihzCl%2BccDtnfCY%2BNqKTsxVGrYq3P7fyOaoL%2BGnAbxNkBrt36qTphK2%2FgEAcjfVInhL9P46UBZ8cypiHbsGrqzglraS5jToIZD0zfm6dP3MSHzf96W%2FXj4JVHHOkNGVE4xQhRXFFTJCBvcIm5wsw%2BLU2DCuprJ8mZZDd9ApxkKIBxvGdcfmAZ9bEJ%2Bt0kOMJvdwskGOqUB%2FbJVKvur6tm3tEUpvzQ9DFxze72LoS5QaltQVWqh5lfU0Z4dk5sZjlAdsEgm364A7czCQ1gnMhPgxExnyk20piWoGUSlLDMbCjcS044zPpr6MrMaDhVyuCRW%2BMixuXf4TVnJKsZtDlLg049uq8oQaQiOMA92VgDULAVpT9YwKLVyBeoao2xM1eL31uX%2FdDkDqEYrwuo1oSvQMEOdVtu71V54NIgI&X-Amz-Signature=f87fb0a653e7375b127253cfe553b6505ed057612dc6ab2814305a334103f696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

