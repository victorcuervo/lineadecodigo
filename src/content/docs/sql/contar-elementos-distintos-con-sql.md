---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGWT5UB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBCQb0Bfp0A4oVUu1SWQYcEJqqXAlow%2Ba2HS7BRiYCa5AiA2Kw%2BVpDDzNouRQ%2BtfEWazpk6xkaiLIoVxdIpW%2BwrHTir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMykbNfjyha9NUC852KtwDKy7f6xKabMffaGVJr%2FEsiyTSbXQGz4bWIIkbBXlbmtSimFnX%2FczmONz7cvfPc%2BDu7ilWWFQvmUO8fvp7VnmziotZBjrHsn6rzJvhTBHRZOPrr5TnnJeNteNgUDQIrQVEWGG2xGy4VccDwLdNdn32faTAYXsyr4ImgjEN%2FI54N64YxWVVrS246AP4vkwFhoT2V1u9ZAKuzbBHREK3uLafZxgQNfamyV28mgT9IzqTIa8lF44zMTLZpk8vEcLek3dzWj1j4X6FMxuCadTe6FJzf7rGCb7HiBlXoUdFNfY%2BGMIRCXmvxIpUtDfiDZ1kAxxX41gJTEvUMl3ev2Wmmyu%2F7SD7vrnfVU1HNzBMGsqyH6%2FVc0D3hhN44taGwxq9Lv%2FsYjuR8INtLLyQYG6NgCWqCGBS7AtHR8PSNV5mvQR%2BXX%2F2t9xC8%2F2wTle%2BUtRf7%2F8rl59RLsddr%2FbgXlgCPHnqFaFew%2Fd1GdKEjdtPSvGQcTmChi9ohk3XczdFcY3STkOEwMdynOnWskLeTLAcd3q%2Be1l3Y71EAbZY3xOqYEEYJJufgGwY%2BZ7YiAwCzL7eCtKQkxFy4O2SiUV4X00O9oYQpwpaFc3d7l80HPYjUc7qLlij9zqfTcclXIxop0MwoZHEyQY6pgE5hjc4gjOYCRLjpuXVVSw574Ex4bMPYBD9%2FLdS3CYQQewWbtkmL6dbhpuCWmq0cDv9IerAGwZW2cSVAy94EidZwq%2Bx%2FOxoCVS%2BbSNj7pcGJUUFXFjCx0vHyWEfVvczIK%2BzFPR2lecYcCi61zAp0ar5Tsl9HewjxgRiOxLJuBgrs5%2Bgaop3ODm6N0UgeRXhTNWl4%2BdWeQBsCweNQJhwHOeL9jvKD6Bo&X-Amz-Signature=dae63743b128e87157055f3bbdae5a3796e62144548c3015fd63a6a7738836ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

