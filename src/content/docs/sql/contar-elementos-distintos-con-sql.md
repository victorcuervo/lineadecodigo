---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GN5AKD2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGzuoz1JBpISM4xDRk7BOG3XiSWCAfTf9Ik%2Ban52sFqPAiB%2B0GcGsf3s9TUAx%2BOyIe9aFl0sj2yiMenrt0KLbug2yir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMPozwgZ8XANiB2SVuKtwDi34bo8GapJsR6vNbEqKqKlVfsUuZUfkXOhvIBAkgYLfiISrLTJMG1bTMuI%2FfO0nAAmYCJfdpZlY6DbPhQ%2BlDm0SR%2FbWNJ1w%2FCD2eVSKP5FY4kb8jtHfLD2tOEbMdl3yXCz3JJdBarCGS8KhjE2cd4Bo6DkizNnuVvFdcw9%2Bf%2FXwcCUjApD21pcxBYYz7lpXnyyC0QJi2%2BzKUVD2aAQKe46p5V7cun69bJsgTQ1dX%2F0nb4SWEwbVjcPSjLFJhOhzzJvaWlhbkSQc4fSDjFwu9PtwPU9Ymo45aCgS4pTg1bWoDJEnoMdjb8KEeqPyw1Bb3dxQISvTtAZTr5vMrtdBNX0m2X6CPOq3CMIV2ovKvf0ZlYAS9NqxeT5zncUsLWv1NnTVHuPXVMCBh4DM%2FoI3ExxYZqwwBBdo40U0SbFZqCIKq2rIAgNlhRWjNBREg5Q7MFFv7V%2BTorbS5yyQHbhHXQqneTr%2FBP1IDki0lSX6IjsE5RMfLrjYiy4slfAY9jA1jLBT4rKxuuRoHPVApTzZ9UOMIjpZdWgPTUvJsK9Jn%2BkrHRSt4qZnf5K3F29S66QuIfa%2Fo1AwnU6nDq7XIj7hzx1jMh9d%2BjHbBBTq6rIOp7Hiez9S0JzmacjvI5IYwkfjCyQY6pgG7qiU1fuQ0mqmcbP757yfyLOvz3QyN7WquNFDY6CGfg0AlQuWTXvviK%2FB%2FBJDYecjMemdyOjzOmkeHJL9KdUo6lcnAQReY398ft217YIjRZ%2BPsVmGt7KMZqWfsCT65q5r09bTcQjxm%2Fp6jrbuHsUqjCpK5WwPF4kEbP%2FMGQ%2FjyoAI%2BacN6xYuu73I0XbmiNv8QHyj7hdxJLFWL6qb8Y8xweWfzPNR8&X-Amz-Signature=5c0a987ac7583686009cbc1fecae206cc36402991b13ab6913276faea688994d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

