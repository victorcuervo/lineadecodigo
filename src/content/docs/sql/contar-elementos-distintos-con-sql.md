---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR22DUKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCZlR6jOnSJjrwJNL2ODnGSlbCVLb%2BkCZSjf7%2BB1hSoBwIhAO1n41bgu5mfoIufcFc26Bn6GqV8%2BWKOlDZwygA5eMJyKv8DCEgQABoMNjM3NDIzMTgzODA1IgxGul4p30nP%2BRFXEOgq3AMabRPPqQ33TOivBZlET5r7V3knDhoJm4K0GgxRCjJPWbMAM8Gh4lcpWp792F%2BkY02l%2F4T5%2F6sma2w3YJ0dplQEyIsBLyNbOi6cZCqWBmk9KJwYqZak8EJJHrvy9rx9y9dO3FzggyH6hHdQ3V6Rv%2Bv5Faqhh94zQeLXZ3GlxnUIPiAJW%2BYA1xLw3KTHJVO2XUOiDmM7yNHTvy8GCp1veR2x2Wj9NMOzi%2BIyrlCbbQLz8eQ%2Bw%2F1F8X%2FdlAz1YP6UHWokJyBnJxAbpTyIH43btZN%2FCJjNavOZCl%2F0n9akITte4b8zxfwEjYQRJENAjZcPfAspKUyTp%2Fvjm%2B1X7P7LRhgecOHnYU8spn2bBej5X3JuhynVT1gA%2Fa8GAJbwshZg0hfyfy3Sxngs6nAcB6j4bEG%2BYZgVc3lWn6DhNRbnLrHGk0TZG9t9ZrqHz%2BMckanS%2Bjb3BKh5c0zLbvp1ipykhGNmqSZ8DNmZJjAop%2Fukb1rz9iu%2F3e4bekVqx0PPug%2F4M0WEpXFiGx%2FQUFedXT222Fv41DkUhts5MHQ0b%2BGVnVfH8NYe0ClFcYXo2z1rImIqqv0%2FTu0lKfsSUXJn9m6EBCXeQLtXCd%2BmHr7uHY84H9z%2BOa0whb3ZCU%2BPy89iVjC5v8bJBjqkAQpX%2FWGwIzsCsVVXAGt39hBAZEB6Za8bypwA8c4ZIvWbX0AgxR3OD%2BukIZOeVqOw7i%2B1EqQqUK5K5vYGe4BK55ek5R%2BxLMSn1YaAsj1o5eOL9VQWwfJogdjgisAeyKa6BAtBk61fD0UluL4uFrEgo3OW2%2BBMP9jpjlnlmxr1bp9EVTJuqHNiW3JD0vtrkARUv3tWWCMUj1PmBycPmyRyOpX9XJv9&X-Amz-Signature=f1f4e2f2d5d0d530b57d4d9cb22961de1b07ee3b711b32ea41bf2c9cb0e27c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

