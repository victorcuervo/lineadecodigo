---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2NRJIGJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAbV0aWPHhzPHUksuJIp%2FiOqoPKrtvft2pQ371h%2BDPTqAiEAx8pkOsgZG1YmD3Uk5RolOx%2FTKeqs3bwEtnmX65hWs7kq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNIr%2FO5zSZXnBIgA4SrcAzL6I0TcMAn0oH%2BUyGlgZVezMXWz76XmUZce%2FjvdZw6B%2FXVtx9296Umn5NuOdaPYP%2FLB8GfCGibzWntF99hysnqrI5wyd7UbzW%2BHWrAP%2FdCXh2I3Xuzhg2fJtTAoN8G7pXalQCXKxe%2FrqGc0h4aGvHXofWv1ojgCvIVAUoXdva874Crzc9VWI32pDDAIwO9%2BxLvI2DqymeqNMWTVhlQwbVzuCwWWU1RBhicveLx4KjgQfCMKshihnUaCZJ4SnCqJoxcmK2Lhd617xZxWojYoWbShwGz%2BzVYesB07Lo6HBovfGfg8AgAy7%2BVLMl7%2FKlSeYAMFNF0QWINDlZD6NJztaBclkeD7wqG9dU5jyeJo%2Fy4dIepjOlp2NZi%2Bo43pQVPxmPr95gHEV4%2By6AdGjvU6nCWQBpUgDSrOz4Zj7raHfV44BX0B21ZUmxjqLcG4v2h3dKG1DG0r7ihnR8EsKnrbCVA23s%2FRqaz3y74csrOxlienh8BmmCA1D%2BqsagG3mrbuvkcGqiuKdC%2FPh4gXIijNI%2F1r9lJFdZY4vPLKoqQF%2BPwrS8anV3lhKT8afgJLAFnDJpbP%2FceyPaifOaR7H3IA0x3dTaB0Un8zwcH0IGH3X60y1oV2luvwzH%2B38CdFMO2hxskGOqUBtk686o48t55PbASYDj0RmfGJAWkRYs%2FCm7HXI2xYfl%2F6tVAiB96Wtip9UQAoJGBYJKRDUjm4M%2FtYUrfFXkn7P8i1BjPeRndOZDZ0MXO49%2F1heHN%2FpEBdCVQLG4a5z2%2BLacjPD9Lmu4%2FIXTey334Q4ucTfKodZdVHmiXUsS3kU7NH34pEwW0RFaSPqYpq2PsXkkYbSgpQtNvuXEtMV3Bt27z%2Bh9sE&X-Amz-Signature=9c7253826c2ef6dfd0cea73fccf6de41d60e8630fcfb4c2663fb080cfe8f2023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

