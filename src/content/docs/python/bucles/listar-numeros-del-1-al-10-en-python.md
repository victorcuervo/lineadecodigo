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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKRY2FU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCz4cRRPp%2FWROIJu08X45ZVzrrBV9zK9trPvQyBEr5cEgIgfatcudrexSCOchL0V%2BQp1UqsWhCUhVJj%2FkIOVl1rfBAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOo53SXVa3HPxFjjQSrcA7%2F3SlOEUmTB5cigF228oIbcbds737n8yH9parNeDDd1hdAmzaEemypEeegh1kHGPF1HoSrUMcs94l8omzZ4JBnbEZWbRhaGKXqaGw9Xq%2BAE8LyPpQU0XGXgSWDjrAlRf6oeGzGZkYe6n6FwP6HVxQSS2FOwz0ZglddQIBneYUH18JGOOgxiyo%2BkD9lECql%2FG%2BlwsKKBg8%2BKIHEGK5X2WRYFtQhskuDXuCJV%2F7PrS3joceRWijMjviCMPo%2BO%2FMmS%2BJ1sX%2F055vHTSGYydmC9rxEBg0myheYjw3G3chrPb8jIlt2456f2nsqJ588Cb56VxFi%2BpT%2F6oLUjQvS6uWBihqjJ5qEm3LXljEBMwWm%2BwPrg%2BcEnv3Xro%2BL%2FHS2JJeGSl7JEFo6y%2BRbByjU6ov9it%2BkXewmS4pp2EbV1Aye2tTGHLCAOt8qn8r8deTLF%2BX49x4tlTS5lTjTNnePv2gWHMCgPLA5oy8zILvaWiQ5%2Fz9ODCt%2BTmtgLwgQm6pLsv4SlKZs71TPENvtEqH6yNENV%2B9G2vJz53rS6zmzSKtPdDv3sp53Q8HBdokMnaZhI040Z9B0L9h6s0pW%2Fx4O%2FwlLZflLuo%2F1Ja1uDmcOOOBtpiMwjdTJMghmM8SOHCWh0MK6DxskGOqUBR3LBQbYwAJl1lqp1c4wJ4SjNQLO%2Bw9u3DwFqrQh6ArqZTLO5C0RUzJBgMCYiZZzXxyKbpfMby8ltHGxQReDnyYqFytXaLc2XparzlxtxoMajvDNQ24Z5iolIsYx39LyMFJKM62%2FGIUv6SSPBvloz0LM%2By0REZxL86lVEXYnvpFU3QkP5MzAnuZH8VoW%2BdPq0SYXwBTSTi1Frjfx6650xtLMM795w&X-Amz-Signature=5cc82de60b63ec2ba420377d0020f7e6c2eaaba6c1e6d045e4ed778ef6835f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

