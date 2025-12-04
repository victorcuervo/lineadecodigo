---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTORJKRU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGMKQmZWKhKh20KkPjU3%2BHKt0qGd5NxoU6bj3Eu2dsxfAiApnxbaoCmc1fdHWnjIFY8OiVxxfU%2B0FZnkB%2Ft7%2Bdpj7Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMUgzYeJEPpRffzR7NKtwD1oA3h7n4pmAjh6jD5p%2FUx9RTD9uU%2FMH4Bl9OJ9fjnfkgQeH0K2hOMHEPzRNGoNP2SZuR6kn301kVLKfrh8XsDtp9Y6eeN9e2QN7Yrl%2F4%2ByZ1D07VR%2F5gx4RhOxd6ksbPoq2mE5%2Bx3ZhoGXfmlMiwGXZ6u2KQelfOS7v5PJ%2F9X3sRla3MrZt1ihRXU8n6PbXb0Jfmo5R8qvNi9PhDd8EEth3bBdkpjQFAa0N%2FAMsIyfIbibnU2jtduHZl%2FhsUANZx2f3LIoGcZ0FiWuKplHeFolraAht0Gjs1HVXd5pnOAuf0vflB1OVXC4jh2Ua%2BL2NhEkJc3TNNAPGUvSkidUuWYZ1XkYNJEbTGNOaPsSgFU0lfzR%2Froh2Xz%2B3MDVgpxum%2FOaGi9TNrpqkPH7LVeuDmprw1d5Q2SMhUEgD6s%2BZBGoD4T1JyJe28i8pBDZLdZf%2FIF7LtkSScSjqUwgMA%2BZ2Zbl36fMEEJkDRqG5pDbtJSGIQM7j0Pcm96n3J%2F%2Fnj%2B27F6zpg1S8vQdwBHSURR%2BQHLlWf2pZsJBXE6o0kNN2fVBpO5Y47Zv2wSadjXoFWUlLCwKV1DpTVhr9%2Bfy8ZJq2%2B8gt2BYqychch97kvgETpSpWKt6ia%2FRkYvHKhmTUw9aHGyQY6pgGrpoGBQC7J2loFMx3HniYt3uk8kpEhhdEETMz7%2BqteQodQVskWb%2B63fX7We%2B1iqN0XEJNasKt884HTJc46epqx2t4tgtBiNmPmlwXwKssp%2FHjtXUKBQYGYarn3z7HQEOG2Q%2F5KBnt2OGPbFTLTtkzdMFSDdTe%2Fa9vgDzGupQoIqAvb86ODukXU%2FMX3U19Mu6u%2B2UGLtaebQs%2ByAtjg7oB9XpGiWJcf&X-Amz-Signature=f53e2be8a8060242c39badfc986ca107cf7d8478502b8f4d163e1b65ae57c997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

