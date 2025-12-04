---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLOHIHEW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCQYsHFA3S9phu9MDuzWtl%2FBd5fugmwqyfJzjNCKFIgLwIhAPWusL0dT2MNMU0AIbQvAksmOIhNb858i4GwV0t3EhrtKv8DCDwQABoMNjM3NDIzMTgzODA1Igz8UWRoCw7GgFWwUXMq3APCQvdqSVgz%2BvIu1so2BHcuM345JFHGCLMoAr3YkOOBivEkflDns2wt8M%2FtP7H84VnOUNn5UA3wUKDnM%2BD%2FwHK0YMPWnSHECSBWoySGq8KJivXhPiuM8MkgRZfHhl4QJ0LPeQzM%2FHPIpMkm9kgrA7nhOoujqU5jWjQLl7NVhG2XNp%2FnCdypBMkbGjlcSKBF%2FVrgbhzotHsp4%2BvnWv5G16V%2Fgpsx1v2Ej1I3Sez8KrbbVejsBHyDepDMmsseOBwJD0L6e7vAfHm5y5KTXrwQu71xTxa17Gv07T6ViDx7BASsJU1GPrPIWScMr%2B78VSxa1yVHbb0dcVS2TZxE2TQMV8NAtkh9t6sgeRlZ%2Fm0w9Md1dpADzGQRBM6KZzJCd8QRYWf6e2er8gXK2c6hM1beON5dcc4psKkfKJX7qWGzyyo5YKMAm7p0UpyY1kXaqU1yTmiqiVzKPG1lFVcQLtWBEmopGBWe7f%2FT07o0UD76QwsOQeou%2BDlz%2FHrgwU83g8HLTQ0%2B7L8CLrTue97zZwnqW8jdS%2FB4y17yNWjNBPtOJ5YloEOf8cz4oZPuZAfTPNYCuJiboUCszbbP0CcgQF0j66eO8gQ2VCN%2BexlAnl%2BemFwx6HFvfFRQGchuuQ9tBTCe88PJBjqkAfXpASvF5MO6UUE0wh%2BOS%2BaXOkCSiuB8JnqLvQTk6%2FhPuJKiVNauMWLkiIFQ0S8HvQiIp2hEMV5zQliIkV7UQRQ4MQhS6nahpI74HAD%2FUmN3O0LRk4sbPzwTSssfq8gKtQNXNT08kR7x6n0ZdtvjK8IMwFed3%2FDKg3PWQqliEpFRJImfqtZv%2Fs%2FqN7%2BLuDZi4YmxGOxfCL18%2BsAfVTOi%2BvMHyCAY&X-Amz-Signature=eb8f1921546cbd80015b5f008392475260eeac195db644b2dac33b97b5c16f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

