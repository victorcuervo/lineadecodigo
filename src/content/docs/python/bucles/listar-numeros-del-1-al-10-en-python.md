---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EDYRL3L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwB5ONlvNla4jwiL3wyju%2FhfI3kUVpuacX%2BZjSwRADgQIhAN8pxwT34nmZ93txHzT48p3eRM0NwyU4ay2XIo5827R5Kv8DCGEQABoMNjM3NDIzMTgzODA1IgwgJ%2Bs2NaWooF3i3ycq3APh%2BFlhLcjMqEKta4xhqbQzPCrmt%2BbwoEgn%2FAhGsCOGeC9rA6iSLBJBL9GiXeLZnFQkZ0HLuFspIbLzCdf4TbrYqciwu35rvz6ZEb%2Fj1edIkDdTGLKCtXaEiabtvQUg%2Blm6ZPnePlJk9FUHHyqd7jWcidSYdH1Z5BK7ASiZn8nyuFjGkSc20mr6M5cHw%2Fx3ccU%2FenfE0wLaRjcjZRVwx51fkkqsQTNEkSZ5IeQueOMJlDr0ksQmt2E8NIWhR5vBtRfzPjHf84Nu1b4xGJZ2yaab%2FXug5xew4eauMiUn4WwU3S5j97H32T51BTkFsIG7Bpd1yl34OO%2Bq500qtAHOG4zrjJ9%2BMAQW%2FKYN%2F1devjuhaiIVloiwCXhEZdzDKaXQMqznyjzgKDR4oU%2BRpOXVOvmY9EWPnyDCKlkuTPhiIsIUB%2BTyC%2FdpertaanN%2Ba4fh348xWPROQNw%2FiKp7AS%2FBGYkNbBYeIfmxFMAJwqdbgctWodOc9fzflUhq5gDMQrDSQRZvrj64UJ5tz1yo3bEHoSOyDLQW4zeBc5eZow7fCNrnqADV9fQKynz%2B%2BJtsI%2BgEFq5bcJZNRWy317dkJnj2DwMqgYYHE0ndKGfOY9jxZrvAnLh%2FKvACYcgJc54xkzDv%2FMvJBjqkAWK%2FKyN3yvBnnFVlwXti%2BA5n2NjLGo1aJgIwTkCTbFOMegIfvEoPU8t0SRHYZA%2BxBC5ftwhCdms7gc69AazGQqQBFV%2BAj7NaJLKRcoVaBINucSLEy2Tftv6wufoUzg6S%2BlKrt1Lt6gTHB2gL%2FtKhe7m08qx32Cv2dFtsc8KheKIOHq771hq2Rwr3y%2BjzUmZdHkl3BgewT1%2FY8iTY8YU%2BFAE7hm7A&X-Amz-Signature=20cab0ddf2c4c9056a3f40c230f783f0f592a9161eb48c5280869843dbd9d34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

