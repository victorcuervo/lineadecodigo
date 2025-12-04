---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODDVFW5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC5Lrz1wySmUx3d3miGrLv%2FrkKcLfnjH4NE%2B0GT1NtIoAIhAPTs2xsxBpg9%2FkWSYkpCvoGxWO%2B1xsXq6dQPXfaDT%2Bv5Kv8DCDkQABoMNjM3NDIzMTgzODA1Igyhpe8HhbjqfD%2BqEUgq3ANCuYdjuSGFZTgcHKQDk3I8IYiqjS9NqG2%2F0%2F91sska0IlsRGHqU7jqq9G71Nc8ToTpBWWbETuYqKBrk4wq00K1Mrdp3ju7UXUmfrsUmLmHXRknpE%2FiL7jGHtE4f9dtMNE7NJqnbDd86BpXm%2FTLWTQP4uFKEP8qRNHVBjkX9uMG7Vye4gulIU4TE4u%2FZA6BSfOLE8DuSzdxn%2B9dFx74L%2F7nNG4utC6UKFO%2B709V4LNEHfYrrvKn9VuWA4OmZ586%2Fayc7CvBfusioUv3NyIoMH%2BHJk%2FJcQ8ORMan3lmgQb4%2Bxp2gFxDLK59CxIMSo7QzyclFDQ5y76MoBYm59Fxp7tefnwfv%2BADNtKmrvroourxCIkAmKP%2F%2F%2FSsFPD%2FPpHXkv7WBOsREu5fmYUeZYwprHEXiT7ehnrCKCFPamAz5Z6da4SiAXr9B9aI9KQvN11TXlShkhkBEq0jLvuw6TvHceeZH2eQNKN9omsZVF1fCnFKuOUD7cE%2FbkQrFSiHagrzm2%2B%2BEwM%2FznhqhFOnV5F1F%2Fxny1hf3CBWiSrP2eFsVDel0XGjWO9jYZLJnDxse9nLbgkbvZtKw5sGa1Mx1e8Qv8bRUnQ%2B46J4OYUXUs%2Bqc4SnywoL9HZLx%2BCDj%2BR3U1TD1lMPJBjqkATbF62sg2v18jgmBiz8UKLSFSSyC95PVzUwX0c9Tvp7ajKu1mAOu5XER0GUOHhpxq1e8P8tNqXZSh9mJuJ1ZW8C4RfgA2cL9MGYcwESLIbeu8ddPmsf2lUwWpVPJU9MhCG182pv4EvIqkxllQNqjyipZ2CJMTxE4mIj2Cnl0dsLBmIF9MQobkGh3MFHilTSNQYAnqH7%2FDLXkXSHCfK%2F4FrOWtHhz&X-Amz-Signature=a9bdec031c284446e217be2aa3de03791ba626c8b1c87432121d6ecad71de688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

