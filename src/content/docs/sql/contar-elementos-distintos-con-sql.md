---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKYAKQC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBY6KwsL50cvczQhBDLZMfJ2cbkyC4D2PWVNXWcDhtNAIgS1FqA7ZW%2B3qJCH6sqfLZD4JrM6NV969mgmxAnPFWOUsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFGwPUeBTsDY3ezWcCrcA2l5PloE%2FLVPGRfKhkCNpEioJ7I1wO5yk0nzsS46iZpSpHNkueNgFEkcNzO%2FzpQp2%2BLRDh6zkWrsFJ8P2buO72tQtaS1plZWBzsAxz%2FusAZejCwWgjEYZbdeqHtlwQoaaXQcPNdqCneQaR9XF1s3AcRcIAY0vcXf3OyYHcCnvB%2BFS9SuS7TVr3%2BfC7MqeVZ6KOv%2B5vSgB7EswVwi7xUHBFRijd9HRxLHrZb57MgJvbnMv0VHJ%2Fucd7iQjBzHtNTFwXCyvo1ii2hoPeFqxH5IpcQdyfSHFC%2FGX%2BbmA8CaK0U1lw7UlA9Y9wa%2Bqfx43%2Fu%2FztZISjNN%2FUaRaB8TtEXYi4ZMPrQVTLdK3VQ%2BvvOi5ioT87TY8K9Rp34Ol7ooOFBSODHAp%2FjkbdpI6tvyeALr0DLBgEFwZwZavwgUF%2F0QVdQEZT4g07v9xFD3Kokdpb3ADdL0eyPqR4ciRWDRJqJhY9cv%2F2qGlESBHEs5%2BEAYONemJFOeFEn3TGedwCxrD4kfBwZJZuVnZSqpxYTIzqo4SCi5jnWYkGKGPw6Lw%2FwYAWEqO1Zzjdco%2FSLJ3RNCSnD%2B0z9%2FdKoH82x%2Fb7ZmAr14NO0UubDQZ4W8RvyIK09pVBwgWT%2FWz5KqC3hBcTqoMNH6xskGOqUBajA6%2FlNJUE%2FMoKHxMOc%2FAjnVzs8pZewPH7mOHUnCjXN2Q8q2CW7AVoXKAzzzcFxpwoVXfyBC145bdEMXkvB0r11Z%2FbYzamo3LJmmTq36LcHRt5RZ71ofD3bAbVOchIemUVPFGpA%2FoUnqlRnEy1CQ6Nli4uEyKtg4pEekRma3p04pmBIknBHQXIRHah6BpQWhsmA%2F496mQ%2FfqAx8lsXjT%2FgegTBVD&X-Amz-Signature=48ed200ef26e8ccee1d09bbc0a614a8ec580794ac9a20991af0bac8ca8e2f77e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

