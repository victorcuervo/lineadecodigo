---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644SUK2PI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCVX5dkxgPY%2FOQ80HHVHVUxqPg7jDVOxKFc1iLyP6A8tAIhAP3TBRmBl4BGmxUXITk3J4OmxKAmge7tuYglHSnTQ4g7Kv8DCEgQABoMNjM3NDIzMTgzODA1IgzC1%2Fm5NpK8w89ss%2FYq3AP3SfWjeVOrf7%2BkKvTOeFwAyHL2klMGE7yvR1mh75VNSq0o%2B7ktuPYK7ftvrCCHf3KgVGQERyWvPkBsojUbVIoSTSIX0Y9OseKancDdB8vLPLCY1DfLUf2Ei3c85w7wjxfZh%2F%2BLViGbcGNooOI6wGabSSv0%2FfJsntRdAojq00%2FTCt0FoDcJUre9i5esPW2ByB4mo4HEICXP0UwaqN7lWwSomUsxS6Eylbl71fk5unvcFtSuJZHU6wz9RBWSWusz6xtFoLOAWOychISYDm9zOpi1srCaI%2FRC494Co3FycFp%2BDrqx1uZTcxFM1dfIlSc1zSzc9sZ0Wxz5rbqCV%2BCbthzWPFLk%2FzzfFCKdmo4miEfwLkovbgLY%2BM%2FkG0kPPt%2FZJiPpcSBfKyPTUR%2BA1nTTvKgEJjqnj53bZ%2FaTdoqqEHndB4xcR8xnr19JGUhFMXG84SFyBqD1KbwXUWmszdHwBK5QgVeCuNCZxgZMRlMxJ2%2B0DNMjV2%2F4Tb2QvyNPOgInHhxKIc7hl%2BNB%2FgUYJaAvlQQ%2BEFe9CWUSvnN5kF9ZFDbaAM5xRoosOPrDLYcjNRR6%2ByTi0h98fPjNfrj3NuOXKzHKC7TLEC3XRwIaDHsfzl88J4UttD0CVS8uHeQE0zCqv8bJBjqkAZojVrUPbBvd3pJyQ9BfXdOTR%2B7lryUJC8GwQQdFTZnAhOn5rBEJtZSNe1xISX1%2F6xFUAhkvfRhXC5ft84RpmnJwigbLXBJmovZwZeDFxcRidWDWDLJsNPWgYt0F1jZOZmxulhuyN4UohVW1ldvNTSt7UrqdFWRUlgmWs5jB9OXy%2BF0oU8T1676fLamI%2Fl5uMU9ZJnXFcr0p3oIlZCBWzuxNMbCA&X-Amz-Signature=7c06d35764c355d0a0b74aca87fe09e498909c0d33b3a476a54dc48035049bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

