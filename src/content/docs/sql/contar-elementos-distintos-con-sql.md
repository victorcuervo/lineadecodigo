---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QYVNYQV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHq1CE1fJu7yrEU2gEc6K4eD1lfGP6QbGh%2BReQdtj85lAiAmFFAPFa86ZydpZECIZTX2Fzkr5vjfud4wEaGkP4VJCCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMTC2bKfswxlxeKv6rKtwDrV8zxXdnGCUzflmXCefwODmeV0FwGYH%2FceRpXFvugqTDwT4AiauWbHWHclQ2uXTMC2%2FjQHIay1nqxcVp65EI74YA45URUxc%2F5%2BXLZeWWjSWG66op2FBZW%2BDVZpAQnzXWNZr4YM9w5tEdWR6UO2JNcznj%2BEsmq1b193%2FzRE8SWJQ1RFy7yrz7pv1Mx81dJVbTVT7W7QzvX%2Bw1suPuiMQaSpIplFef0aGnL0sNkr5OYKY3Fhkc8SfCU%2F7NYb0fvsclLSKFSoChaY3F9Fs5ApwpNErAs5C%2BT3LLZT%2FjqGGp1Y34bus8eVTjNKcj614drMGDgZKb4tlESQpVNbJEy%2FOqFj%2BjVuoVamPI3GCa6EPqsAqO4%2FxvQUsoZWAWiuMCf1Wv5Y1Ij4wYAKB2DIreGbyiX4mEiqvQ1x9vyTVAVsSg26N2zao5LaxLcx%2BsKHKeMu%2BVEaeaBp%2BhUmeD83Wx%2BSWKQVKDtjIHTmp%2BqXtlvlTzhMXFXHwb%2BqDbxTV3yj9WpWNL3CCC5Cyc5uPC1p51fDwfo6LHOrIKc4YUuUhUQoFlM4vV5dNLSL9P%2BuzBaEbsfPY3A5HGSGKuammaIOZbz%2FV3%2BT1zMiTJStmzd4fEfTvHdzbW%2B2Uufk%2B3gdqMgQUw5b3CyQY6pgFLwrwLlYqFGKiUMpF%2BqIQ7TCBRP2Qm20YRFmbrsbFndzXOOGZ158kKLUUXsf1VpmYY5G77z7pO0FnxtA0Iz9tLdUeXTEf3gw0amJn%2FGSMBYeq48LLhyJp%2BUsUMayaaXe7%2B%2BPBAafkzcPm5Znr9FWa2YkHrNyDwURsp3b2oBYLSyJH6HiBc69OVGQoZ5Sl3mLydtsZF86lDaEleYRKiRiqW23KaUCLm&X-Amz-Signature=c2c81903562d3f9de9f328fcb368eb6c500a068467d9241d48f8f286ddff25bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

