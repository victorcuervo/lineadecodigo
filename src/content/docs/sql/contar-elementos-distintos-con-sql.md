---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YWODWX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDte%2FsiDVoBCsH%2Bp%2Fi5XpVD4kr3OmoNM%2B4HW%2BYO5XynegIgZwzp%2FZkBzyfo5ATa48ZzuTuixRyXebCMSipsTkYM6Y4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAaYrBYwuveBi%2BzucSrcA01X4qjkhDtrloEvAqkkvVl2vBL6URPuceVzQAfBWcMHTo8opP84vgRkR6Qiu6L5kOc9eX92l661YyvlO5gbTYHtRoaATWzhWhxy8WJPZU%2FHEf5nNQnNc8vrTLXWD1izK78dEtC4N4kv%2Fdk5K3CxXa0Co3HofJKjbnOLHAISNGvfr8tp9PwFO1QIuuJfz4hlbSx4wuyR%2Br4hwWl%2FoJQVCJpWLciAlBx%2BW79DpTTFrM6A6qhxNxq2RMuH8aa5iuDARFJvsxuZz5jMq%2BofDNZ65t3nBukR7%2Fk0JdzOLNnxnFBDpmMWtdbEb6nghv6HCAvYPP2PtvNGLkqMjFbWXXU2%2B0LIzqGSrdgvxa8fTrFwz7n7zDbs%2Fox%2BPQgnjJeYcQXmQJaztSyPtdGCrlfyvVDlcoF9t26EzzEjdi8I131zJrUsAlTyLirPyX7nYNEVntG9TAruWxVr7yrASjudpmaKp%2FIpBpDx%2B2as3UaeqHLLV2TdDVaVLXYh9E%2FLLTkxMkziShxnWX9m9YQ6nIM4lJv7GLs1rL%2FCQg931AcmO4VYkEZoeTB%2FrQn4E2keYj%2Fxehuy1WC%2FhGVje6zcxfclAOQ6wmJLqI81g0g0%2BYBT6nefai5R11ob%2Fxfmo8f4iOkVMMyuxMkGOqUBs4XgXzE7y%2F54alE0hQ%2F9knmLVFpZv4eQBzXchMt%2FA8y%2FCd%2By%2Bvc8yrpTWetm0hJ%2FHZ7eoLI1AUQGWYKYkntxjr3BSXcL6PUWxrjIPnG6IDKcv8WPQxJ%2Fql5zVTU9i8Y3HFGxZFzPjZPCLDyexeQAiRF6ip%2F2Gxq5xmER9i%2F5%2F3c%2BF5G5Bfdc4GVdR8RN7AepY9mvAg60L8%2FmgJXmVVmBnlXFIisY&X-Amz-Signature=d33e8586969aab968ea273df6bac08af82259129f05bd2a01cc2cd46112e31c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

