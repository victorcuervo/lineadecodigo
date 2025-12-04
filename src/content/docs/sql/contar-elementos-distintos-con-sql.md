---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUSHTJY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD3c3ZzTwFK8WYqPXicCidFtQNe5bP7gciROICL36RIrwIgKDcx8cCVB7YjWU3DDvf81ZhWv0WqCfl9seqYeGywblAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAqWzdVQYNTAyZpjGCrcAyNe%2FYBBHG2Wv2tOkmm46TOfQQrOMlyjdNoGdondxKBSTPBOwHMQeWqR4SZNij%2Bc2IgDrOFf%2BrgVQ98RQkg7Wc3RZnxXdyS3OE9gbykrckTCDP8ADB%2BQOohfdfEDw9wxRAQVXghC8Vb5NPjoZbqn5rzHMJZOatxdPCZZ%2BY%2Fc94Hm2LosKOuHBK%2BwOky3jnW22LoXV46uYRl5DcZE8nBSkw5V19bjq0%2BQxYLnNJuItq8zv5FWspibwOzVBYao4wP4NTYSgjTwQYT8RB29kWNCj8dDvn8afVoOEaRA3KDvy%2BmLRnNXaZNMHhqEb%2BBZiT%2BARyZmMn9%2BuTVv0U66zOygQg8sGLef7olmXR0eikBUeuRQEeoEqMzA63H8BrPCofvKTTbsPOi1Kbjevlx3lpg%2B97L1%2Fj5IB5DNBMR2dd0lqiz5sNu3kyWrC2KVh8eji0Gxks5MXrc7iuJkrdRzkTdAlhL3DEfZcbtixHLwKL%2Fc3IH%2Fp%2FC8IuckmZaa7MaPcdfWybxaxA6cDtUZdgtEELBfKmjpY9wJ90WUhzYmQBG5dmB28RX3GDZ7VIUBVEsHwOVAFVQo513q2cXORU3R6DUY0wRriwUiKtGZunQFHiuQfHksr4cSY3LdzsXC7xcrMMTmxckGOqUBzdfHi2pQYOITYHWTqquxosp2Ab7341toVugcHZO6s3stY0Prg89Mgtir5ulv7Lle4x05jYtymwL%2FZ3KEuX5ky%2FZ3uAMdZfSZGfrYZ%2B5PUMa%2BPpC22Uw7qh0f24Obes1s2SvaWlK5Donpcg%2B4hXZxmxB%2B2mRGFNSODGmeRnV3t46mvSNx4tCUj4BBB6Qim7SvwzJCRBiDQz%2BhyEOzvPzHfmRLZFfx&X-Amz-Signature=f118c8d0f9075b2f5a733c0f3fe305d16e61c1d672e00f0b8f84ad4c73e6c577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

