---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6TDVSN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC0yuJqaHE3Auj2w4YlFrkKwqCOYmXLVkFyIOoU53iXYwIgaZrwNBDI6gd%2FyR%2B%2FSn7vokgssnxSllI0xPe8SZnIP%2B0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJNXOjxd1tv1Kf%2BleyrcAxV%2Fj9cdMi650O%2FEwL5SDPYrRPNhdKEYcbT28S0zGIaWRgVrqgay%2BytukBsSvsVEDjPCubpPGaxbGnCw%2B%2F5q0BDnXqIQ7E%2FOwTH76%2FioGdeIJzj4KZJXrNt6gvWHUujHDW%2BaliCz477Z7KVHdgPywDD%2FFsYA1l8o3f%2B%2FedRnglePettBSlmYUXIwY2EFmT7SpA%2Fo0HPJwv23uXcxVJGYt9yV2vUc6%2B5TNW1Fg4oqWPisIimU2y7U0BeoNjgMrgc1YMSb%2BpbMqzdluk%2FpvJMw7xvui%2FKMeln%2FHSDs3GjLeIj2zsBJ4ObhgeHWxpDYJ36no3z3ZoQkm6Scv3rS%2B6v4WBHduFcRkzDdHCX%2F1qt0JqJYsYiNqpvRu2SrqmbvG3q%2BvXhIiHLvSgw1ewLn4lJLPgx6tvKwdo3mB5eB4IOcLnnQU85krJK2aYTkcPabVrZ0AjVa1XS0tQGpaQ0tREvSQfpa3F%2BXlFinEENHFe%2FzrlSKE%2BQ7%2BgPu90bP06kVKVDrmOZ%2BXp7LPSy1JyDBooPRe%2Bpdb4sJPRpUKf1TprTfmq5GrhUFGLyoPGF%2FrWBOBtOVD%2BgrKYPtuaUtOioSlUCgloWbvneBXe7Xy01xIRI3U7qDW4TGGbOQ14LfU1x%2BMOTIxckGOqUBQdz%2F9oQw3ocww4ZxykOqDXdVcWvxK88izqz4CvBTVrhP4aUPa49zKBMJiT6r4%2FXprjiXwmcEASz87%2FiP03LxAf4hn3xNkjyA%2FHrJGnQOe%2FHl213ReS9oS1jsc%2BxTlJy3D9KzoczQg1dukj6fTvJRoo7KIiGeKbh7abkJbHSzJE7IoXoB05oKmppGoDtOtYoCSDEdr%2Fcd69%2Fqmp1RE6jbKWKQms9Y&X-Amz-Signature=c94d9988c21afaf39ec070640f28d461308c372df93ab0396dce3feebe3da8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

