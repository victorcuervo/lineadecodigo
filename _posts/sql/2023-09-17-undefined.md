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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3SF4AS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDPDdSusWPExyR%2FMDHTZHwQs10jDHc%2B3pItmhdyRTqHdwIgY1BAlRpTSvDQr3OyhhsF1L%2BbNKRL598DEuvarSpC27wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDP9c%2BdkcQ2S7ghGZ2ircAxLxIb%2BOXIOHCQCGvUDhkOxTTTXo36U4RrsozocMkkHGHb6iR5Z2NOrzbVjRvrcMik2t%2FlnKIyxLp%2BNRR7HFvVGsV%2FDIkBuysAkMw6TuwmsagiI8tRcHu7BecioWoXfQ%2FXAOT8zYRT5bvojCnfkFAX2AXkSSPOoMxYLne8qa7pwelUJCi6dLRenZHD4HumBeYjOI2D4CAMRXY9JKYmvujpmTUKedAc6G6kZh3G4Ivcpt3Gn4ZPBDTBAEacBWT1Ha72zVYS%2BZm9mUc9niIRDG0gppp2HUOqDMafqiiPeD3teZwZyV72JbzKpDPRXFZ0pBckx8CH6tBklX7PZ%2BGokQAcOnekNP7t9hUxSbP8Kmv0tNFS%2BNTyxi3ZtEvUAkFqB2G4Xb5KDR42%2FF9WzjKMAI4UHOWNPV4rlJoruwUUmyXZjO8vDtHg9FxTeg1HYXauEVgQx1DyUVhRPa2XgXzLVSc2irZo296cKq4BEsuD%2BpmGotrWX89kFpl%2BA1VtqGCKLAGVOWrPzKJBW%2FZjMjY%2B8wGiR9qRoJbTda%2B%2Bp9unMosHAMYC19vV0Ebq7mtvV9%2Baqf4pId%2FZ%2BIFVQnkc8mbYD8O89mfE4Kh3p9L53FmJdFZtRcCl0Ljq1GeRgHDcsHMMqVvskGOqUB72M%2BFXIGo1p8V%2FeO6mQJdhj745h5Bh2dBBsPIY8Emy2%2F%2FtGkhOoAFToFU8DMRZdpfMYMfbFpZ01Eg1YLToa3hFww%2B6BKUDCHirqhbBMXxQ%2F%2Faiae3QKFAQ5zJ27RRzz6NAXjvGJSQvDOTpTdOoRqW4eKOmiyrRilFq%2BumPJGPrv4YfAbIcfPBbXtvTj%2FzPrsjt7mSwCrj3L9hWJti710lTNFJYJg&X-Amz-Signature=59336287e636b6a3bd8589d70a82be9d8ce56bd9f1844b26635e5122afd23c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

