---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVDHMFA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQClQLJuaODWzn9XeO4DgDHs0yWvKK4hiweLuD2dSkl6ZAIhALm1qMNgAJ3Qu7gn5ieV7RUZL8SqhHI%2FNt2qCWuR4I6EKv8DCD4QABoMNjM3NDIzMTgzODA1IgyF9EabBGay%2Fv1gnyMq3AMKFN7ZgIJbA%2FXnCQhWDqUuXd7qVjw%2Bs%2F8axal7PQeTIWhpW13dbDHj6f%2B1D1paLYFfz9gaDN8Z3Py3fIsIs4yoFV89BKtRzdYPMjOw%2FXB3cSwxNoa71wbwF0Zoge4HTzwojPq1EardwPa%2FQ9N8qPZgKdh30gcDllNytPOPHg8N6WVSllemft12a28xKSAf%2BhYJTij3JoSD24aEcHuC3%2BTwLbP%2BtP0k1PcSdzEa7PHyiYTCZ2ZumBLpqbszgsuRMJ9pQMRpELtzSN4edL13EEjz3LvJpHXvc%2BTiAYi%2BOYAWDlLUZbERpEC89VEl5gk9dQsp2KYSOltpFd3nadElQJOrGwSE9hyYSVv%2FLP2TZVwoEq66IDiSwrcsajpMq%2FOPGLyWqqOq1uP9bGCMUpG86gOvbYWGZMZxIv6vzTnKscupK2iuFjMe6ElvohDB9pKt1RZBpo3zvOrZNNN5R%2FAIKVwBLZ0Q9cWy1KfvAAHlzwhOp4xfFAHh18EMZkXMcKhPkjP6Kxm1AfnAsbMtPB0Gjz3Dnbb2gGIH0GMZprpozZSLRzF2ARa%2FuUDfUz4xYw1iiSRDSXiQo2w9Sds3r5EfJz%2BoERH5eR0C%2BvxFYMp1Pi7KjNeyFLYEjwzdfJWV5DDUrsTJBjqkAdQIwOFvlJDoP%2BlscRohE5MiBIOiT79PsJSK7ZBEQ5JZBHegWZxc5cSpTYbQVLjz%2FuQPdE2nBrfCKvFOAVfn%2FTMto8ktIRPI5uCtgFEE7HIbPJCKkXieMzxdGGge1Gy4QVcDzK%2BJrNXaHJjcdKqowCNWENL8zHn3rKiBPuPHt5FiW1UvJbi1QjocqnIDVma0WqwbMtlAI1GdidB4lkjkDdRFYbxm&X-Amz-Signature=e3048192e13ea74eccf7c3e585dee2dcad53533b3e83b869bf876bd631b0c8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

