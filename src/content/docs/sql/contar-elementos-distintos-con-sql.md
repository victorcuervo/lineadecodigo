---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGADNUI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCPS%2B%2FSPuv9TtayIeuLMRRtIgEu%2BjCGc4vWcxfi%2B%2FeiQAIhAOY1Dzr0%2Fn9akHcPUC1Qnq0I%2B67cpYNN3W6HjJoVYfdxKv8DCD4QABoMNjM3NDIzMTgzODA1IgyzEN7%2FmcJLgI9ms%2B0q3AML5VbIV2enAoqhApTFopms38sEN5fv%2FhHKksGNXyu1OmcDWrz30izPPInzQdqMAC7NvMg7ORkL7oYzMW%2F7yePI%2BmT%2F2jZRK3HVXA2ZqyggEDxLfCfNaw6In%2Ftuz4tHBzFScVU%2F3lWnYBiwWKdkv9vuR6w86UYsaHvroUUHSgMIhVLTSvSGenb9vPCJxm1yZp3u5xf6Qy9%2BfDctfv4vO2nKa3wcSTYjtEe%2BYdSqURaMuQw7kVdy5qpg%2Fw6OCcwHa2b%2BdPmig6VL9KFiYI7ZJPi%2Fz2kpoNr76QlmWm0g3pyI%2FGp04p8wVpJgJS2RKN4bmrOD%2F4AiNBVR73gsvO%2F5bHsr3tcbZy%2BT%2Fuce%2F4K5HRIJk7V5qAWlSC23iRbiusF5EwfNNLtTpyCa43l56pzGK1g8YQjNcs1gVUVFe9LEJ%2F%2BhskoO9U%2BxwJTS4utfxLG%2FqAcSguvaXwOAE0fY1JFUgPIVW0Ki1gVSSb8KCve5WgxoireP%2BKwDTngM6eLAH0ermSHqzOA2SxaCJqt5V%2BpkvGWjhlSEb3hPsPwYyloQ9voMG7LL3pFrFckjfDXBtWMIOriPbUwH9NY8%2FR63yc8HP1J%2BrD%2B9PqudQ1yV%2BHRf9YNmcaNdfLdLkorX5WaieTDmrsTJBjqkAQ2vLDAcX%2FJmNzZZQoDBPfoZwJ%2FeGoOuYqCa4O9crRaM3%2FiUQLDmJ0sGiOz2afZzLUIWyHvi6TcjNDFHOo0QqVBCv8VoXnrHh03c7upn6bBFSD6jFkhpOieAvs1xrKVeygIJqXFYrpu8whgDy98J%2BosH%2FDFHVMVwPGY%2F0%2FA6PE8gS%2BZ6sMv0HHDpr3ctZlG7yqu6Sr9ege%2B1uZ2NYW3s8vho4Ums&X-Amz-Signature=90fbb93238d67131fcfe9015f8152aaa5e0b3946745c9ec634c6947f5b5e0684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

