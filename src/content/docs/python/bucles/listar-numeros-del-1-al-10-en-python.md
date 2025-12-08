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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCGV6DK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXnvumtqewVxWhreicEphMCRIxD36ScwlAMFn0Gw%2FNbgIgJERKQH4ezKgEXwn1VRlxA9OpPfi7iZoC%2FU7W%2BnsolWYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE87wFo2H5Gket27KSrcA9wlcsU0RnKWoQpBRRxrcNupoIflez6e0eKwbwsSzQiYziVy7GkThRPcqbUNOXXXgYQMgWHVpE3Uxu3DBVZzhTJt2nbZNM4%2BksbtTbnt4Um%2BQoGUsx63PH3UB94jn035wUoEfGq3dHqnR3V85tJFek7%2BNSu%2FOoIsqmvjuNKL1%2BVyO8bIKN5qpSG8YabNhyk20%2FTfbnzdlBUWzvLKMmgM9MIjJPd1SdwWGWzbCUrLySJFOLnZP%2FaG2rEmyo%2Bfc35yDnpZVroc0SEf0z2P5etJYOXLUb7kOPpXWwci3ujHfhw93IiwXHv%2FjcVn0yWoMMTKHd2FV6%2Fv5crDBtm94yvQWMDho9Y7s10wyZcIPVc5I5Vg9PjtwBvQtIZZe67CNuiQb3pxH%2B72OdG7CwldRPaiDEI3rr1w%2FcePsSoLb%2FmZQvEb2uRzbNRTztc2CW5AQH%2FKX7BOsNAJ5d9bAysykP4WLUUk5LylFV1QTsmunGBEjDcXD5tYNRlpO2%2FWAFHYOHB6yz4oItuCIHqUXfGwD4fzdftuGM7KJPUaBCaw9LMhlh%2BAZ%2Beq94PaDaCpf3GrkzHg3uOfmsR1Ro6ML5oBsvsq97Z%2BFL4carN780%2FR1s4NUDafQfHlrZD6Zqb2axqUMKLv2MkGOqUBbHQNaQZlnyzqMF3B%2BvpuM7UzrDT0vr1qtRlhQzIRYKvew5RzoCgdbCqfTNClL4cW8TZbfjceGURQ8m9ts5rLOP3iCNbIUTMJmLRYFIuUZ0%2BBLzGFRFMF1tYLVsmDeOGARCQxW33uOvkzEE6dUwiH4JAbZ4UJ1UlKwh9IC%2FEqXKe3Reme7r9pJm26VbNT7yW39MnPypFumZPUGWmIgrn0A0qpAuCf&X-Amz-Signature=922e3b57786cfcf3dcecb8489653ce209f4019a073c323132b22d84027d30a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

