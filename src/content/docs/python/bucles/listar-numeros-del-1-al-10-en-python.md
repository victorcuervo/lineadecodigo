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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYAYZQB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdXODFFsnfS2ETI9Nmc3j7UPWhJuK%2FZxliXUecNHiN9AIgSlSCfIlsGNYr%2Fxb%2B6qwcbqSzBC%2FW8zTSgoZYfR%2BGSacqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ5t8cUvr0sV%2BBVaCrcAwhOOvN4yvC3fG%2FiLxZJl6El2r%2FXfEcryBAqs6yIYOTkTASQebnYfgp%2Bx6Lgc3pRo25Z110xJPuHQBl%2FPPVvV89MSOA0kvTVyRCwtDvy62k7I%2FjW6Pp1AW1WZrd9sexa4qveZJTUtiqlbe7bV5r7V56hv%2FLSxhq5UZEFvtFn%2FZqVPyzZo5IEsrkiPxiioJizfg54us9Wdc8hMMgie9m0G1zu8ZuJ6I8FfE4WozE9RUZHfoi46OyK1wIcvYwTzJObpUC4iGP6wWyna%2FAI%2B69%2B5AbkiJBEXTeryfPRdwcGIfg68A108qWIe2gvV8j1X5P1SDDqT%2B6L%2Fj1uYs5zpM4bGo3sZc1bY1E4iT%2Bak4nWuudCvXGg0GH1AaBuscpmFQtQkDaUulfSuz4yN79%2BHczKr%2BOIFB7%2F4k%2FqcDAsIvZj29r2Ah%2BehrbYmBzGLiDgsQt7ksYNVV0JSUjzJay15QrkoFotPjauD5GnxgvtFP9%2Fyl3dMfFWZKHTwGQ2G4wBBnE5qVOh2047hIet7bzF6X3DVHNp9tvfKgsy6hM7aVDdta2mlAPYgs0lw5Xf7EkIjfjQIITmRJ0MNk8jSrEeY2%2BOZBCPO%2F5yWHxfxTYLrg%2BIIi%2F6luMDWPCs%2BpEGFW%2B3MLe51skGOqUBd22NaVE7UkAJsdL1YZF1oXF25%2BgdjtrUL4oLE%2F8l3jLRjxfCeAaMVzO4hkon%2B3wmflMdQt7KtLtZ3RJ6%2F4i%2FeJnwhVqlTh3%2B8wT5IOUu%2BT9xOOcajnz%2BAH425Ocpmq8joFmwB4Ssurw9nAuOd0DyUFO7t9eg2UqepabkVdnrUE%2FbodwsNwLGeYBTstoHtbLqo5XwLumha0riwD4cYoOBwsXUFvlS&X-Amz-Signature=eb21db01771b745559b43639e166707e4e4c3de7ee9172d184c68d7a2ba2880c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

