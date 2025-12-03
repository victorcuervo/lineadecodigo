---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM524DQC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICIC78ZiJtGmd6B53fkJjGxa76NR0cIArEGmjmuuVFLdAiAWifaeR6Ax5VCiRGtZMUi4MWkNMsrDfHQC2WUiqO%2Fg%2Fir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMnKc659cqMcy8%2FFF1KtwDr8OVU0JSktD0DYuuwIZSPUGrnFu4qRXoX%2Bn%2FGVWnUTIJ9LhAc%2B%2FaQHrhFCSWJ5fGTTwZ%2B8ADn8AaGgavMtO1%2BYM5irH4kPsJOTm4X7NyFJ%2BGlSzogwABjEIeLOUoRY7PP%2FKucu5L1UVnSC4W%2B5PvRYWVAoc5qf0hD95peLhWxLNkRzGznU2pv8zErvUSNFSJre5XgjaesNP06I95nCV27o26OTlySC4g3vbwc3Sc9VcCuQOx6Z6CNCwm5wDKqCyQQfLr70weS3k6it6LFrEPLrniBDVzh8pXDRJj9%2Bms6y%2FWvxkcgC3gF5i2wZTdmqoKLqfS3PW86vzlSP6n0EKPEHnQcLL%2FF4yr8tKA7TQbfZ31nWuXxcw0xige%2BhGGAOFXJcheaFiIkerU58o1nhwtXTKer7PQMpUrzmCAZtRW4cerHEKJcnPz03QywGBNmxgTMpMwPpZ0h96Wq7dOeFpteiUMkLg8O73q7F29jbAOwPWNbTjRcqc6eE9clAmGpPsUJrL3N1bkBxRAOxVmnre8msA60HGD2ayHOC%2Bc2O3z6F1vBI08gqt3dNeXWzSVi9iIUHiNaCxXME%2FLJ2V3%2Fq9MnkSBGWnO1giEI38nPVQgqHiq308GrEVHKsGNiscwxb7CyQY6pgE%2FcLysXBgVntegkHs9AOMekFSrftdEAsqhU1FiI6Nz9Ry1v0tcjko71S0lxy%2FsKD3FljH0pnI2prXE870jDvAUXOaaCutysvzZtFwrXIQqMjv%2BPdZkX4Wna13Uocoihpc%2FDifv%2FjtdqioIVsexJ3dYPDmegK0y1hOOxmv%2FKHJKtDBbe9OzIZpOYkxIoUkg1XzfFcAG%2FF0AV6P6YqZm3sw6NiJUgpFx&X-Amz-Signature=119f6e5dfaf44a228ad0be667a0048d3881f4bafcd62c936bc29344708f2ba61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

