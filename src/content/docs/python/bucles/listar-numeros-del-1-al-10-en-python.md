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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJGIKQM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV02WDQWC8TNplqjdW9eGvQ9Of5HzhmaBTovAKPbgouAiEApdnY6IrJld6P2U%2B10eJFCP46N%2FQkfzSilVF%2BEQ%2F9Kjsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMWdOAuA7tIT0uLVlircA6oZ0fS9pcLmtDhMAsEMY4fA4ndh1rbO5PvG2Y2zW0zgZ7Rm%2BBoqLgY1dZYr63EgQfsWh7cBKUPqRBBg555%2FKCgfZm%2FLlIl2nDcjo4%2B6Mt8B0C%2BmgDljV4%2FUk6tl3tCdzCwPspLMf5xx%2B%2FoDw5SrDr3yTruHflrlcrr5GshPMG7eNEkUbLN6xPhGD85e8y4YcytY6Jto4W9%2BsrO9bSnESIWxAsaX4XkV80udpm%2FX2q%2BNUPzfnF1be%2Bizg%2B59UH1wOkdIfzNdLm36K%2BUBtATJMtTwN0PHI0WztskrADvzM61VRCnfg%2BGnbnzT52XYd%2B%2FghHsjQ3kA73yCndcOCNrvXyXgyhMBFa1RKEcn%2F%2FyS1%2BO5Hjo6RW5Ajc%2FJgcEb42Os1nsYBgE7Q%2Bv21Ugc9gySb1zpmt94NGeQ%2BsYE8lV0F7NvLMyBBhPlDHkpnv%2Fsf6QKisqGJYRAuebkTfW7VK52vjgX3P9tN%2Fmcc%2FnNlrQC3sVmJVuovOzU6VxRXL%2BOrT9TWkMhtWd4Mo8OsK1bW7nQFx7911zpp7xBvXDoZ2ebLWuOOeCcx%2BBqyiDO3cbBAPApH4qfSbDAfkjSko3%2FHtcOTDVgi28Pu2l1bzzvg40EtvGX6CnG8ov%2FsNr57rkPMJa9z8kGOqUBQLJDsZGXeKQTobaDau3tgC%2BoLyoyhrTlHwcJcyd4XqFSjqR5NU2PDU5fGnkUUOLB9puLq0K4Hr8BYiiNmvK8USvulI03tfpWnpuJeVHG9weOs6FzuCJlYVr3a%2BYMQRrPbFqCV09nbi1GlgfS7oAU7B3kYakIVEelOcr32%2FWFXlH9ku03FTM%2FFF1q1QuNt3%2Bz8YInyjpoYarXe%2FKnp4YBf40aqiJ8&X-Amz-Signature=f66ba12476709d2472c43ca0140a8a1f3de4970d089b86d731591a95cb75ab9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

