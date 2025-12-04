---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYPDWNCK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFEiMv1HBoZlD00WFSxALLHS4tIDzsHz5vIcdweCtNVyAiEArv0izEYkdxXExkLWIIN2opDMrUSSKRU9xBJjOAf%2BYIoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIjTtWMVLwLHibk0XyrcAyV%2BsuVlRbCXifk4l53FlL3V03g4MZgDwcCvEiTPZewBlc2LYsC0Nc%2BTT1aoYPyovuCK2ia3Xs%2F0JQBuZvVh3iQ4%2B4TiVEFcL1EotLIlU4c2nh6yHSJb4Pg9YHjIZKyqSF0i7GZTeVXyIM6cvWABko9%2BUCJEnu0E23V4hfhLeAhP30sM8CTitK6jk9ZVJB7DCOXvIWWGug9pNjChFUs5chTB9j4452mQrevfuEJyURJfVvGzhH1QYnWaE0LKJfLOg6QqLe4dPsfwIJc9ibMkSqpTLbdUTdi99721vmALPk1k5B9JV5hcCzSK8FS8ywAcOVMoFS1NMau6CinwxCQsqICHcNsm%2FfATQR9Y%2FlStqWICvK2Ce8YWt03JoVNU%2Fi0sYlgRgdY%2BWSHalmvbmdsdbFxMa6CC0FxuGpBHUC8Sq46tmvz1aMt9US%2BwlSwMN4nVcKni%2FC%2BnEsNZEDY9N0R%2BpJtlWM3AptigfnurnPYwRSUE5f%2FoZxYVGoE%2Fo%2FjLaI07W7uGbxmTArsNb4dj6i54Cuz6GS1jT3NOSDTYFcs1Aex6R73J5XLIQefB7ruH1%2FSL%2BMnyv34UJH1%2BsxD3ox6mXagoW8XzBJjXPxTAgSsJAPxd6syp6tgFvIV2rKOAMJfnxckGOqUBVe6KljLde6%2FB0LxbWsouFnD9SoEHpKS68ofn1AQ%2BEBqbuSO%2BCHrV9WMWOSy9QR9tp7V9rpyMDKCSKb1cVKiMqIhZp4TCEfQaFoHo23YdviYox5z8pFu5%2Fp0e%2FOf0nuhpVZyipk7o6%2FazLPveAphCZRxv9DejbBpzJ9dlJ%2B3frRgrlo%2Bpr2qHId%2BN%2BjdEG4jXHOgVNkPMm5KCJEYaLiJ8cF3a%2BBWW&X-Amz-Signature=0e4175b3711e2594817f8ef3a0a8118cab1440ca90a931cc9583eae37985d388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

