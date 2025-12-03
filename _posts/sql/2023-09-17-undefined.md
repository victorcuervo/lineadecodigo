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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNFBVEDZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDTRCNbKr5gu2yLlg7CBnYkM28wtzFuMzETpgnzkBQjlwIgEI74hXG9jhzI0zX2gW9WXwmGreqE5b9iBd4B4LvKvekq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDExhCEwvW%2BUBlqpFVCrcAxkEUe2e4VsRWxoHAj2Gfxm2YPvGMT5ybbiNIDu4NhJ5XYo%2BJgzW3Po8%2FbpU80dhZp6Uecrar8I0K89O4ijbhwWJWBRajud7jVTbwGaU396ef%2FSpcyqaAaqM35FL%2FlKcpAUF%2Fyt8CI2sgeTIlWn8XmV93AOeBC3AKoGjWgk7x3PUlRRHqA5ZJn5gjQce4L0C5STMFwV8TJgLUTXoV4RmtA3jfkBJ6%2FT%2BXdp7xcoAiULj7gKvmuWrnSf88KnMyH%2Bi9jIVvwMCnDy0AXd4uhUqX3V4WSf9qr8Gbs205Ig3084XYeTf%2BUr%2BuY0F0J6hk72u1VOsD%2B5dGdLB2GpWiJwqSY1cays55%2BjyVtz%2F4fU6qeGa2oNWLpopscRaY1DWkfogfUnEcTT%2Fp%2Be9QWbMCSXVUdhpe4n7A2dDNe7pxZP7QSbMH5OBuld7dplejmgSKfGJV%2BpK%2B4ClhGAuPdvHj%2Bkwj5xWzHtg6KbublNsKpfncXXm6rS8gpCYaK8HcTirubLxmSlE1%2BPWbgi89Tg%2FrIY2WmyT48mrZGOAi4yIyLKxm5ZW8QpX4BUeTO%2FVN71n9Xz1nWxaXVvdgX5XgtpstfvpC8TJHWnaglTtIVrTfnKLz3fHl3gDEwHG%2F9JSlyYQMOnBwckGOqUBSJ1ga2mZ1RGIINA58%2Bws4ET%2F8BBE24WiAiDEXxbHaHdvjeB%2F0XwMovKaAcRWpSlQcDFyh%2BHpvoHbQkYQj0XChddp7w1ABT%2BERYeQIZw2QWokwcX5Sl3W0gzG2MONHiIqSinZk9ErnUOP1BDyyO9Xm%2Byl0qYOFPV6H7j4YvR0ejJUXD6U7J28Cr7oQ%2BcrnHAX20S800iK8OJknw4U4CVMakeu2UtS&X-Amz-Signature=f3fff133ee6793a2172eae84a59f7980d7ba8caf584dc67f47f594800734fd60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

