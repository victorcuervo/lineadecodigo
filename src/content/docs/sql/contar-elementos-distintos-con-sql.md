---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623VS4AL2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCtUzCQXPUN9dzpXro81lnJ4WFgGK0%2BxfvdlncQcY9BTgIhANHS5nzjuhuEbZp4dreTifa4ElgTnaj1VtKmgulMEKOFKv8DCDkQABoMNjM3NDIzMTgzODA1IgwlVdS1ctzNphBvxz0q3APiYjBY35scUmAfPZj4IyNKl9E%2B9mW%2F65E8GJPQlBxkKLQP0NCLSi7siSDCqxtaCDUQLejyiuEMdXCTg48awXowzZysDcmlz2XkQuIANv0nuXrLhSpfcx3Rm98wYiS68o9TJsveI0BMZCslpQpKxOGzyRMnHQ%2FwgTDMbSGxFTkXVbR7ecZSkzD9tqGcf1E1nqHWzdwHt%2FUh8kCkSCLCIp%2Bekg7z5QunQ%2F44D7JR79205t0Ccq0pY17iZgmV6BcButNhSjeVw8vXmHAjjujWiY1ZgBetdaWybxrdaLn03NtbPg58PXWTCwSR%2BwQNODFPJKXAayRh6ze8lW6XeC%2BwY1IlsDcb5WaqQi2NLEDwcExNCASLyELix%2BL9nZ%2Fdtl3q43kB%2Fn6b2mVGsDxBUN3s8nMWAV6J41Icm%2FSpYAgpfXvW7%2Fpmc1HAXGLFh0QOJkjMsfPB4vSmp1wgiShiRn5gbdsXHiZnoPTTVctDZxpdBw2hAenYftcVRWOMg%2F44fsJ%2BRR1W4KC5vLTq5jGjsEllhff2PA8JsFcKWNScJdFDa4RcVmU102goEzv00jxLMFVaxhH2s%2FfWq1tGYcBj3WbM2%2FnE%2FjSRmJeULa1YP3izuYfyL64KDs9Rz%2Br%2BmSCpsDDBlcPJBjqkAdIQc1AFsTuFyyx9OIEw8Kdtd6lY%2FXTG4fVJ7QNKeCyC6LWQZwFn8F%2FIdkF%2FzHPWX0sfdTBATPSRrbA7dcMemHE3xTuV9EmwgNbHGcGWHWNxGkBKT%2BCQ87W0EgXY753adKs9PGGN%2Fcq8pmROKap5%2FJzToOMawmRF2nXPGQCciKAh2YfSIj5j8PQbj1zF6jfhfXvK7VdKtdWUvTIERwg1FiV3qqKP&X-Amz-Signature=8019198a4512c5d241e7a6b4b09fee1d033e863e35ba7cdbfd1d00ce28978ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

