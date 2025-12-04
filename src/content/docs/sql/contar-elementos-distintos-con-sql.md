---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCZSCUQR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDAwh6b5xRlh4SfeZHh4KyZ1ZAaM19T3JofIVrz4kP7BAiAvHuEMCWdF1aDZWS4b%2FwqbBoGMrM%2F7F57CAXCrj4e4iCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMxH%2BkJbqiUpVKrFQqKtwD7xiIpyXWx2F0ojNec%2FEioWajSpASfJ1LsT5YsnyqCDeX23kXoTbrKu7yjQSb8wzDCWgaUQ816Kv7aXmzk8bpnrUag41%2Fz3V4ezbrbwfhpjdg8fqz2iGMhhV3qZwdDLcySw%2FHxDu1xHhK%2F9AALOuwf7ZbZGrqR2%2Fb3JyeFf8pUEwKtsVwGAY7fDEZWPyPc%2FiXm7DY5oi0%2FNlgAVIKoZtqgVAvzIpaS5q2IAlOalJXLCugPFB8GS8U3T0dWtJsPEVcKB%2FFCj7JGV6sXtuNMiVdQuihXthYYjGLQdgSaRyikzR8hX5jCLOdCgp7UK9qlYx6imajIDV6FCMMap%2Bt%2FyoCQu5bmdTyrO6PRHgDXx13f0hRVJXCwWWlDcfaXJz6D%2FvBHfoFQRuGB9dQ1n%2FuTZYUb4nJyR8Iq2uOwftGFJTh3D1fo3LXCKi8TP37GG2TfBE0rh6UtUWX91zFaFMAXUhf%2B8BnuiCA2r%2BbBCcW3f5ZuKjV5Qg%2FWFGT0NuwPSlPHAH2nTG%2Bauv0Fp5BmhpXl2xfg4hfZfcwgZwce%2FffVDb7lMXjlYrY%2BDoIcqluEhr8LJMeSGLmnlj9VDtXBb1AyDXSLI22%2FmKjhUm0XVdTrBYH6%2F%2F5CzxoXRYZsln91%2Bsw34PGyQY6pgF1b2X0ACxGsX58IJ3A9Kf2QANTS%2FmPtUcZPZQD5H4XWWb4R%2BIdccAGP8fD%2F9zotwlHfsmU3dhrMWEWMcY6wUQzkVBieOgPPJ4n5ITtVVj5F37I1eYDM1utJBCJiCemO9Lrnu9MQie3YOPcn38Z2e8MCQ3QrxiHkUPwxVTCIAmepZlTqKLYQeDi4VdN6wu1Q0exJq9f6E%2BpBr7wXyAGsFzZqblieJBW&X-Amz-Signature=364dce9ec328ab75db325d19df42b16e5c6cac7472b1ba3fcea91de32f752fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

