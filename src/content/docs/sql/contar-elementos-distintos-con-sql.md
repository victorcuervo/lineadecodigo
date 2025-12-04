---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI5U6KGS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDrOBGBPVf6Rqj7%2BTGsrFHHGwSu6W1WLArI3zTzpCnf3gIgOmwxw3HGcTrnJZxzpUQX59AXN7bcbdQO30nxNgPhHK8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJl6B59ebwWBi2wkhircA0594uVEHcyLlQROWDS1gQSHw7SBRHjh%2FSd4TkK7xBgJCQfubH5XT40vSwpjT%2FZAOtZLgKkr8Nx69kkZi58FcsrxhZWbCMtC1OjBtrpCvmusdTLgJw%2FyvrDAIzrPDLyrUuqGt7Zb0E%2BJNf6koXnfmRHeq1RlfqEw2SZ%2BnwRkwXVpiN5dr468MC9WVNmHwIpXp7XkbjZen46%2BABEuFt2WDg1sj2r0gePRYg8N3%2Bl1GhFB2kwkHD2FAGc6rny2wkIBhB1gdF82OusYgPCD3GibAkyWvarux8%2BFCcAUKDfCyerac7GSmTxNIr9sOEeEAzFDANx3rwIDIqkkzniU4cX%2B9D%2FpbTamPsBqO%2BUP8lAvgMcoE86Yh53MkTRMIvgALgRUF5SXqC87XVz9Vu0R0u5izoqg9ZPOv3xNhf3fmah9Soz6lntTc04m54TUJp5Mmm8EVFHWiFiDnfu4wZBHYGtEkXdzg24085yUlY37hKLKMWWZyzcJyZKCToM2MVTrlok6%2F12kNc4U1h4%2BttjS%2F71od9%2FPXX1px5bJCL0h7ULBW%2BpjsZdfhaymb1LTtH4FIhVs9drvVKAAzwZjpXIG4O5CEjrzgcB7%2FlNXQLsIbtdEDXvodxedeqKZwksW04NFMMmtxMkGOqUBrvrLgaHsemlSKxJ%2BnXuY9tPTSqBIMMu61kA4474%2FX3GMT4rKLEdeNJKW%2FCSnqqCRhBoJTznMDT%2Bd2ZjjatsTRSRvrH2u9goPdjfhFIbmycP9AL5tn54aXMK3eST6KhiIL%2BJ6aAnenQWZcEDjDPmHPzA%2FanfKWnjq35ycKxeRRx4yRwXSFta8v4ISOBXei58fwGDKAHq0Vn0f3JjCpTk06EyPpBji&X-Amz-Signature=1a879a52351b50e2b628dbb91d75b128a83be850f28d91d482dd67340ef6658f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

