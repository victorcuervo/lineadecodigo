---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMZK7P5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC8oYma6V%2BwIdkoT8BjgKCcpV6BhX9SXKGDBl4hXExjCwIhANtXKatx5ZlOc9vs38BKcDcrWXKjgaHxpXgHc4ksFyVWKv8DCD8QABoMNjM3NDIzMTgzODA1Igy0VtYatT4MrDZPpa4q3ANnjJvRF1PbLdufr9vNp%2F22HRRi%2BIf%2BWt6BS2XvefulU%2BaU5tg7bAvNHVXmP5TZ8tHsZghoF7Hd3bos5lRXQYVlswNFRSCXYlGQgsR9nRqchyTe58UMePaThL5WUHbefUejT%2BsRy0GTVXt6IECgfLb%2Fh8tBCo4qIH58FWooYMeS8%2F6XJlUdEhRp9ZT8z2zGmYz5eP1w5uIBiPHllMQS%2BP4UHuf9pxRIuKzp45NxAvyumDvmFUK04Gd843tOH9H5HIjCch51J3kI%2FPOBgaa7klNj4%2FzuwBFO4nQXV6QfjBj4xM3IAdw9UkxKVfy5UxrcN14DYp4uiKFZ4STXRjAkO%2FU1U8otSH%2BkSoTY206FguRrsl66ZsedvB9wvSH9EH%2BFCCFXy8yBGVxDxSzJSEhHMKoWGw7WJllAiqhG8Tt3c3ewBExJOyROWCaHyou5cJd7ehxiEmdqSeEStrz6EthtFIiFHiFyPcvuYW9E4AgPUEP4Y8eM%2FTmvu44Zqp26VQu3dbHb2qjKjgxQ1iA1YdO5FnxIByT2fPScs1TewhHMHNZ11kLbAiYdlKfrHRL6KWWFtibwxG%2FbQFVQo3E2Gs9sAPuf3qXPgiND2qpPXZEnxnLqXsTp1NNgSSA1iO4X0TCuy8TJBjqkAZYES3fve1%2F1x6fgYGaUV1NPe0YsG%2BvzoUcKSQD%2BpMo1hYbGxhcw502MBGks2LBx2SavHqjttY4uYOoEdUMVHfcKGFzv4RxzKJIESG80%2F4CVvplmN7L6MJguyX0qDCsESxoX4jRkuIyN3o3ceSGAKoOCd6qYWc7%2FcLAGrPzxsXsfllu240TssnNTvJAjp1OJAMlhU4xXhpL%2BQBIE%2FqNvvuSVCRkQ&X-Amz-Signature=e6e1c5cf6233ce98a50b1dba2161b98b519b8846f39db6bb3c09026e3de06003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

