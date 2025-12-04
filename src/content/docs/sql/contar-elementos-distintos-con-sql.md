---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMY7TJD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDOS124IW%2FpH8AFPxvfsDHT4iqBdQfcUlnZCVVfqM%2FAxgIhAP71w1j9haleOPPxT2kCxJ7D4FYVX7EGXwEZx6LtgHSLKv8DCDoQABoMNjM3NDIzMTgzODA1IgwcslmJj%2FtZUnlZeWkq3AMWqpo8InIRIPWmZzdi%2FP%2BrXIp8lxSSyxB%2BuoiqIKnsjIR2Dr9jdDrnITEzEtvCuvieWwvD8FwEpC8bTpOubB87Ruc3wZ%2Fcbx%2FaGW3pcXJATGwGalvKB3JvuiHQQBUhUob%2BGIVO3v1s%2F9rGumfhiYvILWzYGabU8u6DCu16eYXwbszjVdHJ1XxjgK0HRhpZKNN%2BS6%2BBFNATdAXrq4DevfkYeXGtDr1V3eRBzq0WrQ3WBikbQie1Dm4RtWW%2BBfa1gGExmMdBwwte5SgL%2FYAWpp%2B6fabLz3aJZvKrVQXq7s%2Bynfr3KpZJ1BYDpAeW0tVpvznVcoPb%2Fzhjo1uxLh8V2PcP%2Bvcvf08poh73BYlk2cK9VZIKxXL9aGTpFnbobyaUu%2FOClsBX2Ws%2FbrAMmUEvYAHSFcsWClxgyYnBtbod%2BbMKfd6q2p%2FCM%2BtBEbOsRxf7s1Ugzk1C9mcURi8bGhPLnKyYVidqcz9SDZg6zSgcSlG%2Foi9Eu2j2vZgC2cB9beX9NDyCxrc1ZoSOVX1Rt0xu5x39Vdwl4dHIS9GvZersVsLG3s09EPOXzN4TikAAaUiGLIRpB7P7TBKYX8jAZNKyl912%2BTxh30xWVpQt338bIHO7UKiEiJy0zahzCG7WtDDqvMPJBjqkAQhYueJvAsCZZYKgd%2B2r3e6FDPklRnht9NxqEAbMArHUxaK5NJNT2fluBUT0HfCjlgr3820Gok0Aq1pUnBHfcAG3hm27UDExjVGZp2cwFBroYRT99Sn%2FrmroEDPd291PN2znlI3AATmZjjPUeA%2Fo13f%2B9D5TAVUEYRqxR8ldwIqugYUpBPTNyFIgvzYru0tVW0RLHPKYXQyRN6CiqQg5DcaRhfud&X-Amz-Signature=66c2595296dec7620fc0dcc368a3378d68ee081746f176287620466f4eb91f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

