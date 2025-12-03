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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YNP7IR5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIF5lHgJfP%2B54Y1b1sLh6L6EeROtswAE9kBrLYYhEcGPeAiEAwpMhkEHKvPB92iTKAkF4hF35TgfhLJsyAlaL2BjJiCUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHNoT3LcYpJF8q3IWSrcA8VpYYpwiRJvc6AGWErRHIKsGN1L68q%2Fgry8ghpdJhrzIX8HUWi0cD1CjO21%2F02md1qrpk8QC8VIcu7%2BNdz9RxyHHev%2BTEDKJyLlAotERRk6qSYPKFQu5eU0GX8vCUPUBeRinsbx%2FZPfRGEz2QdGye1AEE3ObIbYiRFhf2%2F00Z1uNcQteIeIhDu7nwfmrGhD%2BnW2z2Xr3eQKCWIO8AX8h%2Bb7Zh5cGyHuyvZxyB94MVligsbPjLgMtgpNRxp%2Fls%2FG%2Bay9kFpZddJ%2Bmr6R9dYt8Mpdue0O439%2BtPhSWC0nQfOhmBSTL%2BJ%2F3NKczJoNVIONl8OJ5uSGYcAnZqqn8wDE2P5K3%2BnatfV8ZnKU%2F3O95gxwXaL7vdOJt68L%2FKb6pg5k6X3XYYvueu2PMmwD2P%2F9Amva2nnvM8LSEpClIwEmxHmdqTDcThTNtJ3eHHj6zRJGFrisoTNUqHg48Kg%2FqGk6r5qETWICCrlJzFrjHz15z6%2Bcn4Im18CrCA%2B6fsqeAPrFvpEyiv4el4M5oQyB6Q8vpsMiR7XN061HEQHwstYMzrfg4xg%2FlohleeErDEhPbgz8kaYk2l6YuqeEZlfGB63EEM78gsG7xBhQw%2F98vMiGwPjkzs6nSnchWYlF8kiRMMzVv8kGOqUBwB%2BHz6TdFQCDwpfaiNJxlm3tqzxs%2BZaM373jWCLmm0tE2LwN6GDvdreypGH6H0uxS0dN%2BJg05xFIZR4cVrzeMiriXjN1eZjVpLQwZzsa5Go6DwtwY4SJroMPveKbMB%2F1X07Vs0TXBedGMmSvuetP1v3b8%2Bb9LfDYg3oeFPDiSkJrLz9ezPC5VPMt5S0Ra8ChnzAAvYHR1VQYPMyzb9EKuZqQX8UQ&X-Amz-Signature=ad7b703c7e81f1f61df4577b63ea0b676c35ff4547891dfebbcf89ccce27c14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

