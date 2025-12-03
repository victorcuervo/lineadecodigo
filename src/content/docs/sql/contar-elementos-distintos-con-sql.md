---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBZ3BEN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIETkMA0k5nnWp3vKbVksfj3g4iEU%2BavjuGmTJcBxFYDKAiEAyrObtJ7uHkNIGTIVGFp8n62%2BsMluqSmo8t2AWgsTTewq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPs7ene9a6tPEJOmcCrcAzJjMffrIWHPeKRt%2BJhgbg2CbPVMS%2BUwaABZSgdT3J1mTEJjeiKOzwi19FuPooYT2Jv4EqnA0tvEfekfqy9khKbfA3kwyFz34BzBygc7VZboet%2FnzG9ktMNQdtKMG0%2F1Pz73KhPqQ9gDvZrMOu9LbEBlpYWpl2ucsArvV2NLcqX1zEgog9eg8H%2BPNOOk%2F2Uk2PQzYVi%2BV6do%2FcMTBu2cykx%2FRDfbgj0tLC0CixL1qigKj02e7dAAF4Rmmbv7rxx6aC8mhIoU53NiZAnx8iHi%2Fm5V0e2c6CUltk%2FcjWcy3bWIl5X2itf6imptLPd8Iah1mf5nt1PdGSnIkehr61uRZdra0CF7W7tyKZQhjTSv1Js%2B47SOK7rmG13QktkwtsO%2FwAMrow2OfnJRh7YGzx2YF8Kaoa0Xkx%2FFgONsFM68kwdatHhA0eP%2FsEScZ5TfrKvz7BreBY99ShRk3sbL%2Fr3uCJNip6bGDcTzSIkorqquWSwLezGT6R8R6qbSOOihkAz%2BhRti8tuDTTLIpgDMxYeMgtYBAXYxZHuvjVpdX9y3s3K9Qw3Vn%2FiRxPlT06N1xBRoUIm9qZdUjoewIeWriPGsv1kfrFOnaSjbi2UpypFxSDk88Z3CWjd8s5tfNuwmML%2B9wskGOqUBku60BcvaYNqx43vudFHCQCYCwYshKiOt9P11gWvEWybMGX6pPGEH6C13wr8cFuogQ%2FAK42qACtl7hTR6rvfZPLfKxJHVKbhm3hlwd4tPM9YOXIFfBldn%2B5LywIlTmYxE1zKh%2BsNGPl6%2FloskfLxbWkgZNLHw8en808MDKT8Jutb9Ep5iRV0NBWJoX8WistP2mjB3luhHB1hnlH92SkbPllaH1n8F&X-Amz-Signature=b91432181768e84be1caf2602d94d31d00f11904cc16ec1144a299b2c7a90304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

