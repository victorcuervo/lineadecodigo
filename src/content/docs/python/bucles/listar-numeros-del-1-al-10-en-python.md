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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHJ5UM2U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Ix4hfMclevOk6v9Qftgf1qdFYZIGsUK%2BOOjp2gcZxgIhAO45BM81ewtn4lHQzLn7POPX%2BD1Kb7ldnAvOQ7WUsmErKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygr88%2Fe8neVF%2FaK6kq3AMRrtT%2BHDBOapYNaTA4q3b4e5WTs6EkCBSn37Ht%2BBhrj8KtqQdDkwnzbB75h2CPTmkiLEWieGhneGCQSf44O8HS7LPz1iY0sja8ni9%2FJWHlLgTUJXN9pJlvNvPK4VS4oCrsEXFktrzSW2uv3Ds6YhY0YReA1egM2HHH4nK0I2hvbwey88uh%2FNm5X8ThFYz3ZkImgVoetPGTzyMy%2FJIuTf2pkXa%2F3miLv16DELu7MbuSnpPNzyRO6B%2BWHsxHyUVr1nu4ic3xz94reXE0OBkwOaUEGB0TFL41X0Z%2BbV68J4gV%2FUgqoQzMS63VeQyEuNCtaeV5vkOnhYx2fKDpfHrd%2FoWxLLUT9%2BwYmiG2X8rzlNY6D85Ij27iI%2Fo18iSvEEjEw%2FiVzRqDMOFXv8g7ReCxJBU%2FUTuj8VJrE4ZIB4Mlh7EtDPrtbGxetiAORey307oA3zFLQDiOvIvYZwLbyY8cjdTtSVTLPlXvoqOT4tppfAN2bCz9TxKXDZI10RrkFe56cBFosynaRjf7HXCd06A1U%2Fow6JKJrW7FN1xEgr%2B8q9GRRcA9%2FJ8V4regNJ6w4UjCcrKmfi4iVXW12AvtiAeTJ13rPU1H09gMclbnt%2BoU%2BnRiVpLp7fEVry7a49ju7jC%2BvtbJBjqkAYUHbqpzwb9UXgx8DTXdx16XRGpEBBzjzPBIxkhQXjvv%2FpY4d8k1UJYAUYI4F%2Fdw3zS1W6XZ0ZFRpYwnSx%2B%2FneKRHC2H%2BbaKo8rPnEo2CzqEFxr36lH819UR5T%2B1Sa92WT%2FGzAX%2FYdp05KGphkZsWUjcZdbfYWQODfB0ynxJgRMUg00scccH7wr2xBIG%2BQCM5W6FykwB%2Bwb1frierI%2BLieqR7Al1&X-Amz-Signature=b503a7537281a7c749792fb0bcef19db608b2e5d6580c238477e7f82bdf259a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

