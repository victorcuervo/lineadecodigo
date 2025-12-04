---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HUCVST%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGIIzgrry5M%2FaYd3NtaqamOysF%2FxlxPoXaieaD5U%2B0JYAiEA3SsyJVo0%2Bk10Zt93ncubF0W%2FnZfE6Pyt%2BAnS5x148C0q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLMXFLr50ZB2tksfTircA9IHS6JAf7QhR1NIP1iI3GEoSwDYpnUhF3lQT5ZCs8p0f2S%2FF2PfBvs%2Fe1mn%2B3V4rjj60nbyCNClDHP5%2FJ8AwfvH5pxoB0eqIqK1VNOIbS0DUmyzoLQrIQE9QDKaMDMDuRP%2B8SLK%2FvXb1BxAxl4ukVdyTWOf7H1elweWmltV1xAjd1coiFRk%2BmidrcZb5n9ObetueNmGnfLhbB%2FT2mq3kmKWPcjhsdlE2N4%2BGRCj8X97jiDVMaMtYnlf1gTldF%2FlXIq8WFPNmV6HknxPsoHVRJCIU5EAQ7hrLFZMB1BM8MP3QizDcp5e%2Bzcyu%2BxMOc4Fl%2BjleiK45QLqxwYPjq93jkuk8WljQGzIK2oO5fEPlfTUifwgqsL%2BpFNhYFb48F1GtQbuj8hvziUv4341L21uPY%2BdwrHs%2FpuejkJDjqIF1QtmlgB2mzaruiMEzNnYUkySrQPIv5XS0c5gkWkhcT3djHOlthbpx0Ydr7MUM7iyXV0v034f3Kc0SVc3t184va7vt6w3cvRAt9vMjRqctgVRMqdu2XmdDfbO6rdrjGoS%2BGlWrd3WpZfOYLzHbNzHHx7hZl8AlXO%2F8fMG8lGQNn7L%2FaIzAw%2BmByfy7TMJOpjqclWODY%2BtxS0WLY8IKor7MPDyw8kGOqUB79%2B2eN5BAx%2FAFowYqfpiAxyFmDdSkxbn2GL6v8Fh7HyLFzZ2hVbSXhI1GkJ102dtU86BuqGzF%2Bf%2BjrQradyQ%2FVPOv1Dwb2FMs9MLwHJ56Vb74bqd%2BpfrAHYZuiVYJ140dzeK%2F2z5iyzPD%2Fo%2F6twvXpEzYOU00PrpDJoZqiAgKuAIl%2FZpM9qRZtqP4T%2B5iUVi9j4N6EBZ25lfvm9KX%2FuejIGju617&X-Amz-Signature=0368b6411cdc4fa2da16ebfaba7d70df90cc48a7bececc911eb025625fb9d35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

