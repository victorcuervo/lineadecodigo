---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SX2MZZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCUAfrrs%2Ff75tNgIDjbhOtBR4%2BQvGp5LRcThroLhyDTMQIgPVgnTbtx6L%2FMoC3B2LZXuL%2BDk8%2BE9D8IzLeJYDZQjKcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIvDC32QN02SDUi2PircAz9V%2Bl0xmwJgxTiWr9s2ZH7J4xXCOOxy1V1SYVmfVZNmnfZcEgpsyFf4LhotFpgWV3d91tAIUwh7%2B2DLnyu%2Fpq93lOLXo6hZN31ICz2MVLfxLZzL%2FUh1sVARh%2BfC937yez33PWM3%2FaHCMgRsjjWO%2Fz2VhSa61r%2FBnamPGsIHvQCAvS9WkL6jpg%2BHJD%2BphZSCJ7mPk4AoEN7PyKFyoUv8cOghlAG6YZmsAotoDOJqY9IzMv%2Bs7VotvjU407CREZzzgGgrcItPRLNdYPZ8h%2Fajv9p08ltqeFUSXjyEHzDm4qk%2BjU0g4j1JMy5hdasZA7XTldoPZRqclhEAuMEhIJopSUJz7CUjV14ltaQWq%2BQzxWZCX796p6rUObprE1BFf55P5pbmH%2BN0n5KGgyXXbJ6McG2p%2FOyJmsBZDF0vR9fea7BIRvcioa4HN8w%2FwzP2K7OEsSC7D3c2AL3YA%2B1ziccrKNHNX%2B3%2FtotcHNatoWJ8ekIC%2BdhiCy6lJkiP1pkrj1WII9RLfeGZNt3YTopoaZrNVDnO7nG7whhKn2ZtGNQhK18t2EWoTPbUvEZPpKW2X6Z2hMuRWPRJjAlgt3Son2UtX3J4QcpOzSSIJoX0UqSugmeBOkiTyG4vBKJluU3xMPqzw8kGOqUBMoGyt13CeP5KWyEih5uLfmdy0dLMDC5TKycAcMt7IaARncsxndNQXD9uIG7dQl830JC%2BbI0AOV1UBEmnOmJ%2FbA0eqDqDXRH2vZc%2FfNWn3v4K3bWE%2BY3zUZPtXHQFuVgdCyTLUS0JdC%2BwxuRXj1WXXInDpufOvPQi4%2B0DnPTcy5%2FFWu7ah1L1T9WNhSN%2FdUWeMbdZu9ipWl9eerQ%2F2L4wecjocnIh&X-Amz-Signature=a992feb3ecd5409b047fe5c109bb67db65fde6f8ec72b650a43751850b662f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

