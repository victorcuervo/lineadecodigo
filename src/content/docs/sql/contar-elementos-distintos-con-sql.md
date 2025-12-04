---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RHT5SF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDvRMiUjJu9OSlDcaf%2B4DMlXYIkImQXbvuRe56fp5noEAIgO8c03S2MTbSfKhgMFlbPZWqso4ZRHrWL5cX3dxfEk4Uq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLDeqgYx52NcqUFWBircAxWIpSgp%2BDvBdyjI2JmCjH9QcaK7Dhbloa0htSv%2FkG1Ijis18ZPGcEVLTPpuC5t293dievHxoc34F56U1%2BD%2FnK5ZWs0eWAnNltfFbgYwbDLwxfgvGLjlgvNxArhmBzSh6fEhaKkYlIKAH6XDWGvsXcpGHbWGFJCkYP6e6OVb%2BD4GmtASU7Mi96SHXNxHXZWiWYWx2rNs21MQxs8D4kXk2C%2BFBCQ3wpE27avA9fVnnFTAdlFD9hCkbA%2BBIPAUjWMijiipyNxGWgw8TkPrCPEj%2BIFWPC%2F3H%2BMl5mSpfd5LDxbpuFgpNjO5meW%2F6Zmwel%2FGjr3%2BHd2fyeoaAhKfUCAs4k6jtBrWocEtkI4SeHxbZWc%2Bzyuomqa0rhF2hrUxEtNdMYLE%2Bt7j%2B3M9bsOBI%2FUkAHB72mO2UIbDlkfxa%2BTuD%2BBQ9Gbpe7dTo9UuonhdQa%2BY%2F3s%2BgaKbbCjntjLPd6XvvlNcZcCZ1lky9h%2BfuSmitVYbyyoPbnbCVK%2FedIIss67JrkiRpOlxRPpQhvtX4hXXzyOWu76akF0seZaCfiDKrbXo%2FJq0F4zqxqDKr9Z2g5OGm5Q%2BLEjkh88saQRaGCQvpGldwtmtRKnd%2FnbO4UA2j2pzlw2Ax38qNyuoIZlVMJHnxckGOqUB7Rvc1lXOJUBr5uV%2FzXBheMrqw1GX3GpY71s%2BZO%2FFqam4NQVxSTP06wYj6hWCeiEi9aZylRg%2BpM1ZX9EqVQ%2FwuJC5%2Bhvqgvhdn7L010hxapkoCTUN2KKZt%2BjNtKrnD84tMy3XLFVLnJOy9KTbLl9GHRDVaAHaWigV%2ByN%2F1nNeCtHxvAhQ9hXBPtlVp6vSxZsTyDuQZNM2JWMl1HwkUDye8Yo2PLBZ&X-Amz-Signature=e1f0ae4a4a86fe9e0b0f3322f9e3d4558c45b66dd0ebc27dd945e3eae81a27b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

