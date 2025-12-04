---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2ZLZIH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFC9UxHArO86eb1J%2BtBJogN5webFrpSMXooG7f3vEnP0AiBXoWgkXkAa7YsH2YgDHNnNpsXIlL0kVm8l0sYjpiIMyyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMiUBiEwm9zMzCh%2B4wKtwDJ7lPjE%2F7zYpYHjo2biMe0etM2z0Aal%2BJme%2FTDforTfLJPBLM73RL4kwRi7aGPXPQhfOd8b6ocjtRhZJrqCNr0X%2Be%2B1i2MMvX4efnmj5jXrP%2F%2FAU5l3A7OXQa7EHLNgWcM6ZK1boHFRZTRi35%2FUtSOr4kYeW77FNuHmofbnWPD8C0p8Eot0b2OFZ4QDK9eTJ%2Bj6aAImdIrtB9IY%2B7Pu6XmdMzhJtZHZ0pBRl%2B8P8URrBjxvd7ofpgfMlMxbXEG%2FgNl2bJSH6ZEqKLDqWqF62zLnADuxTKFIRaoCJU3qFkJnvkq3YFbVS7mZPN%2B25Cu9a4n07NfDYizLjorncVVvBLqXNjB%2B9STBRTYdMuKQS175PhCOwDVq0C2q9j13igCruaZsEFdVMMz0Bf4TOv%2F2G8M4iXBiGI4dlMXK7mTeOhZixUbuLQg1mcGZcI%2FAV3DSxy7iENZxo%2F9GGtmJIoGqX5SQpjf0CcW0YfhZ7DgVeBeqncDvFHVwFzMCvSfxl1QWwBX1seWvJi%2BMCrDF3ac%2FxFKzPTBQQ7kQpWSTk7zXUVUxy05PzuuuucmX%2FIecrrG%2FIWw0BeAdzSxpJFO0nyCk7q5HmmR3jUjl%2BPgjyVwcwST9Nb9f3bCZEhDBwF%2Ff8wxLDEyQY6pgHpiPIn8DPty6HVSO8R2UHnC6%2BAakutJFUxSCUEvct%2FhxMHzVFdZUvBxZ0KtAelFpy9QujRF0pIpP9SRLoFDvlbeqbnmN9Xad8irv8Sl8K%2FL2S8sDPBAaMHlEpMyrJeYd3boVU0qHLK7yRlvKhLtdoDBUeuUiI9NRyfZnok1Sr4lX47FyiPb%2FFdqFFHqsB8TVeze4Ko6JLRDGZiTAlXQSxmGiYA6RrB&X-Amz-Signature=5abe11da1a1258ca51fd5cac6473550bac3791e07cdf5a2996b0b2e7203cb200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

