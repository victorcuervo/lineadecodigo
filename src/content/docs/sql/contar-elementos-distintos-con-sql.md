---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TYFSGHT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIExqzrZkWp38qlFB2EI70PhIKXArNGIKJ9ri1WcEK4%2BlAiABBpCiiGslaVjfsziL%2FiAXSzu520KXLcK9kNMrMagH7Cr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMS1E7nZh%2F8dPWOa3UKtwD5DVgq7qije5y42a5DRzcSbw9rTJzM6UNGrIpTarOzYNRGVmoeyr7XjfVESW6n5JZOD%2BpztRBZyZWFWcST3jyveGcH5c2KNy8FdntLKG8TQHvebUVTPYDxtIPDJzxMaTI%2B1gdhgSBJ%2B2jht1ZtIFBkSGk6RMkexvaV78Tkbl%2Bg93p9%2FBSxMUvy1wUwmgLHPGS7rpJvhpufENxFQkU11yxHd8JKQ3gb%2BjOAxnCb1%2FW9GO%2BdJbE6RAEzjHsmHUhkVFulyj%2FIO1Jqny5gezwIGBktpiTLV3zeQRqZylXRIVzW2eq%2BiHvux4yt%2FVONpYBEPhtUSQWFppIrUrZjfiiQYiJImA3211mSV6LVOom6F01I%2FAWPA92HOUBjkH0c4NPgwXA5u2umVaePLbN4B9EDyuphHZYexzDnU7bJq3nrczCf%2Fv3uefr6Bcn7GKXdrGmN8S8vFdi889Mo0EARQrCU3owARW2CSBSBsO4CzaTwrsaKE3Ts9wuJ8UTlpPxO0%2F5NWXaAesqoPmT3y3kVcUHiZVitStUEYFOOBE5xqe4OAl%2B7k%2BR%2Fs9WvkaysPnQfN1HFg%2FOTPSBjE67c0daCaI9wnT7iVSp01a7m2ZP678pk0bOMx4o6Wn3yZIIexLhVwowg8vEyQY6pgGmEAHDBJc%2B%2FFGJGO4C6k7V2vJdWaUpW%2BodWnaP8wFBTLEm6wADaHMSN23yWghN62pcYku8w90cZFb37PsRMEBrklCRqe1kUTTmQe5PAHRb5EXxKdTDQnagOSehXLtE%2BfYO5R8pXB1AuJDyax1kJX3RNF2%2FrL%2BpRAz6n25WUFT3OH%2FgnkSe%2FROkfnJP1I9F7rRrKE9l1UDLjX1My%2FZq6wNYI5ZUvGxz&X-Amz-Signature=9e74ee7d597d830f89dc8b0a113d9d2468ca7ea04508451503d6dcedc2a82b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

