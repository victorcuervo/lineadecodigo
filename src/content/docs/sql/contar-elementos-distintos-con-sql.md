---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2J2D43%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIE%2BpAm1P2gmhW%2Fqdb3usHmKvpvUx0o3j4DWrxoDcuwqxAiEA%2FW735Wg96kwHd8O5CSzCG%2BhX4b2QXkdoV%2BYx9QkY%2BXwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCYT7U3iPzlMwi7C%2BSrcA6fHebqZoPQkzwA11S6vRL09iSHtz9wOChCAjtGVjOMjY2OUf9UvfnMM392wGODDApkMagMrouChgnMxUCV%2B3k9jM%2Fg%2BiXq%2F8bFRWyqdIAlXzKVuPKcdU5sNofYnTjNSOcrMXIx2vPiKWOgWRBART%2BaKHbe5eeB8h5jTnxZ6qxOBVtUcnWMxymuwe7dWlCZzhkBRqM7lt6zgxqICofaY4XWmkAjePQShhikC0ml85O%2FPapG0T3wYryvFz1PBE%2BsdWRvd%2F%2FdYb5XVCKSggm0rzxrsDV6txfbaM86i9Uetoj6zhVrAxLq7wqOF5Cqu0x56tTroirWYySbIpFEik46c7uJWfPrIfMq5RgGR22FFHT53%2BFnELuEPl3TReEv2Mub3FTdeLoNgktnXvPyw1W2G8PpBJkgXYfml1HT%2F1CfqGqUCKHeGKVK%2FG9dMeagibJHgIKSIQo%2FYozLFsbnCvPvWUgX2jrn7h5JYpfkUqdra92KX2TZSPk4Ie29FxgY7%2FIhKve7L93hoNZXhCsBfDxjenOVo5egAd3OTiun33qtXIZO6%2BvoBWx0lyEtOMug9SOrX%2FRBGhdOR2O6roTsLjNhO344b6L7OZuS%2FeWw%2Bnam4ORstOz4W1Nc6%2FTUpq%2BfAMMiUw8kGOqUBLfniqJVmZBj010hgRuaFbF%2BDTHrORa7Mu4MVYYu7An37gQo7Ww1ZpE26W%2BS2M%2BsPKNVUfPF1oRTD9nsmSacCm0d1TqpeSn4lve0ptP%2BawISILSXlSY5du1V%2BLhBXIteNhrTG%2BEb3Dcn7O%2BlBVrW%2FHUXV3DIK3bmynQZ2FvHVUhHHOmLKBs1W0ztUFk91jc7s69eJxeztd%2B2NOSNpbpUoA98VSbYV&X-Amz-Signature=522d5cea29e39bf6b5970440d4db3266baffbc39813d22eb34d24219e0a9f0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

