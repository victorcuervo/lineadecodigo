---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TD4B6ST%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBd%2B26PFnM3TMnW0ErzYZxUZfEpfF9RkQNq5Mh6ww1HZAiEAm9pWykejTwbOPG%2FBdxO9Ae21XUys4essKFLNXZJVYSwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFUaPwpL%2BbW5H68McSrcA5gve3PObbMzasCHUOtwYBTiaWojYJliZ7SEMUWqX%2F7UXGLMSTS2n7OIKN4BnRKnB7zWaT1VXOCF3mjw84w%2FJdnAr3hoTOYOZe%2Bb6ydqMWEgqLyUPUO%2Bhx9O1ZU75P6o41UWv2pAI7GMSa8cfyEoYBSnT1rZkp4DQ1QW8k6XNX%2F4YlzW0cSnCf0heXhHYbtrjI%2FVkUPXv4a7MR9kXLF%2BLe%2BeHz%2FA9mJXBGrIjOLLaAOJSlCyXrwcFx41u1MqABCwJkIExhaxevg2aO75BUbJadm2ssntwCpmiTdh%2Fu3rYb4Lx%2FaFIswMKGjRebIqidS8q75VJzljp44p1SIuGk3aifBbK8CuAlYAqkbA46v0OiOf7s2VMV56CbE5Jn6HKBSa1pNgmQYfPO1i2iQsAZnq%2FZoZX7V830uIJLwvVqPMe8PdFhfMXK96qoZkhScsbfCkErMoSZLjYKaZxGCcRP1j296Io2VhfbFai%2FFYI6u4%2BwmmWnJRR7DlSUqWT1AvtVl5s%2Fx7tk7G0PzPFsU5nRpE7s4y1wI7X%2FNZP0RucjV2IAUf%2FJqN7IN%2FX2PdkzDzsJOG02EmlnE%2B5ZzWmtEibURkR0a4n%2B5TdHBjXqtSPF2tVf0R73xS4kNeV%2BfNB59GMP6VvskGOqUBl%2FTSUyUDcnF47MQqUIkrpBKyYZ4pXug2g7yN6thMy60iobY4xIAPn2lEdu9NbOlkjTWNgN3XBPZtE2qfDxmOUWTTBDL6877tL3MqIxywo6%2FZJXv7InPhIn%2F0orkOwkz%2BcwHRTos1MFqSCSkTQs2SeGthMzURkLUcVLbWDHPS6m7LGUCXaadrxrQhILHA8YtWwZtFJEBUN9UIBz5wWMrxfn4Sc8ip&X-Amz-Signature=f1b9dce6f209dad8278dd412c1ab1d493f57df24c22463616b008f4abc41b379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

