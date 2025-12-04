---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWQCNXZ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC45vQwhcMR8gkMrWB4xQNvjw62Fb4JWDrYrIZZPWOangIgE93EgyDDPAM6qNeIrAVx2emmjCgPIbV6WQeYIhLe83wq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDL7NTjVsSwf3xk2xHCrcA4Av00K73cBLxgQH8LyTBj3%2F9EKlMiITKc4V%2F1bWYLRby75nIIuay385zonFhrBm0vEQR1luJKTaHJwU2T0%2ByuwqSJhkMoU4IC8h5xEp65wtysJ3l2083jscb%2FMVPyOdlWiW6J%2BIhCEBychJi6vt6efZ8ZeKBe7mVjdQ%2BJyfgHFq9Q9co1wVqGwMxrGF8MO%2BYuuZKZaUu28IHv0W8n2aj2WbuuuQNcUxnYYbqY2AIbD1omwCEfMmoHHAAK%2Ft5wB61Gamf%2FPLG0rMgXD2MXyUwGaEBklVzjoOmddeufLOHPBmlnj2MsZ0rG%2BfBK5SxHrhgsESyijwjMOnUlgyNVVi2%2Btx1u%2FaqqrEGijzZ30j%2FTDYti%2Bwm3yF0i8BLE3PBaEhJEGrIK9ViHzJ2E6KoEJs3ZTFew1YsjWOAjVQOSqVW9dF9dESGgAw10%2BX7%2F3JlmLWR67LL4YXi%2FHWvVR40L%2FaAc0%2B9JB9l6kRkMayrDCM34Vxp5tq8%2BDlNb8zlcK7cb35to59HPKCdTH2mlT%2BOTwF6nYLLMvLGpZ0OaPdcPjZ3dHJQdH%2FpGaB4KEjjMS6cjqnjfxhDBWjKNzfSUb5yNnOIb6b0mkOwZbxmJ9vEAQCI8EJiTCUiNyB%2F6O50fdqML%2FcxskGOqUBAV9WPau%2BXonYEGkgyilVFyV3z1LuZvPZj%2FrsFIjcMxZYXwdhfOuOy9tkMSgRDVAxCF8XsK%2B98O6RrMIu6WxoIoIc6x7X6vtWa5LbMXzmm6%2FN5ItGEn4px0ClQDYdQeHCymoooXZjO%2B7XHXHqcw%2FRgOtGdQRpvPjSuCIy5FpF%2Bw%2FnDwVNOZ8TvFtjaSusUebOMM7IMHIVhNHCXO9ZjyWhJvDOcEbC&X-Amz-Signature=94cf15137dddedf3fcfa2bd81bb5ec371cc75fba2ac4420b94d60b2b756c0707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

