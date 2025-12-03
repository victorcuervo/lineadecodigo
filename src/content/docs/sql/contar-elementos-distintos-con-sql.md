---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSX4YXL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF00D25gW4XNZhlBAlsnhx6joYzXlmwwbvrPCMmESyabAiEAnWy2p1FMXEVdshKALgXDnRK1vb%2BlMwpYPUzzLRYyOC8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNbEf3z%2BlmJ2h4wdsCrcAxEzz4Ympc%2FPDSPw9FZmizbh6Qo4TOPy54RXylnViE5IyQvtRE8ThAuf9nQvWgQFCgfLUYIP4NtyKFlZdiImkQTdD1LZhXfvSpz5kWszxCogSjdkCXi5LazamOAmgsLUWYEomt8IukDk1m3MCBvoQMOG8lZGPOTOkDR5vBD8BsmDOL1ZA7%2FgVMJ0dRBBgX%2BsLpaFp7T%2BbmLgST2cMheINz%2FGp4gcM4IQ0sg0nm8nf3pvfMLGN5ReZH%2FR%2FQDV2ysM6wu3X20AGLUFtIlNqzuqK3u9R9dVcn0g6GFU6ZAUAZmhs12ABra%2BvfEHF8ghYnsmKMiJh5g0tZshSjLq4cTTI8fjYmaiJBj4rIOJzeRQMX%2Bzhh4f7Pvbcwa1qVcBig%2FlSYHOMaNgH%2FXAT7wSKVGUSHbShIqIqyCosu5wsBw4HoxTh4ARtWTJeRALzFVz%2Fk%2FW5%2FkNEhZS0iG5%2BJqbnj4lEiZW0dn6YsLxMHkenZYGT990QzQYIo081oTE5S%2FJk2cNnl8ScjXGjHJHCcVCcbLCEw2vle8ObpSWiw%2BuWYChnqr5ZCmzUiDFde%2B1S0DquNwyXVrO7akcxUrL%2B%2Bxq7d6CHN3N3Uw43PQ0BT0WEMcYoCUKJENUrrm9gq9nU%2F4EMOncwskGOqUBEPQStARw2ZJb7s2H9uuanRQHNDgmXRmdiLmGnOB2SjksYqRUJL3OD7GlqpWdvlN5SbBgoTOBRL8aTewY8435VwgJ%2F%2BU%2FFO51I3LZlqczdd6hqQ5ce29fEYjmWwgY%2Bvel1gt3KmM2BHv5fuVr42ZgKrnORexBs6OCRYQELtBfdipRWSXwW%2BYjncgpM5sIxs%2BGPAEQ8uhMTs8uii4zyFcDbys9oN3p&X-Amz-Signature=4e9a573a3d3d7372028cb27e00bb794c77feb7d6c269fe25066cc8fe7091778e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

