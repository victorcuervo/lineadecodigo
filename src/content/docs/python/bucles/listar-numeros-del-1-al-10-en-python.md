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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XKXRER5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIE3X%2BI5AJC2llEk6Ix2XvAb0bqyiNowPjLDvCCpdr5BaAiEA9Tl59%2B7%2FNE0LXeUX0NSoMW%2Bv6w9wCOCfNQmRlELzZ5gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDO%2Bwn8gXUG3SPg%2FtESrcA7mEKJoSRSZeB6cThOMe6C340bG9RFZUZu7Vt5QPWpwfgPPtHk%2Flec%2FAetRNceyMci8jdfUPmE2Jr9L8RfcLC1EFbuInRKCajqNZTfyO0WjaFX58kIfvVPP2c8aPdsziXVKnaWBVQhCL9fBdP%2BQxtkRWFUAuiizHRGEP%2BiNhLc%2BavkixU2Cz64bJsXBtTB7mbUj9yslsjU1zhOPPq%2FSCp5Kwat%2FNmqWAN%2Forol%2F0S2lk%2FLctzTrEe4fAuRV%2FtydyJgc5QUN2UvBk6yDeq5ANGZzqrOlfk8zB2UeE5KB%2FgGoUBhPTdpITcCSx4BaFN7SA84nhG12lllZXRh3n1tXuqadi1Di0ioMvf5EtFqi24vuU8%2FEKYKPs94Jvr9HyEqHn4Ha6p46Ntyy%2FQN8vK6d9cPAs52Kyp3c9r%2B5AAz319S1AZIZwCwHWCzpadJzYKf5hzg5tEABwW7PYfuwKmmSXhN9kqN2wkersvwCgJbkSsedGPr8MHlNHZ4Sl0wgjdwd3kggeir4o9OPqhXNb7pAIWkbNmAEh2nSGkXndUpUByGHJ%2F0%2FUYxaId9lZFP6BVfIMXuV2nYegzbAhQ1%2FmzszZJfI4iPWVJga050%2BY4oVTq1QEjZ0qaMgs%2BnzImIIKMKPnxckGOqUBK1ftyEnT%2Bbs%2B7JUh4KiKKCbUlEtdjUVKSQKklEMv12ETXkN1LCRQ5X3IZ3nxXkd%2BeDC7%2BmmCy2uOduU60TSTBVLR3JsDTI%2BOoKkpWtdlUMPkj8DWtWD77SxslOipf9TOUMRgP0I5ZWZFpn6fvkoRtkIJlIV2v0FvJyk8s9iNlUWKd4QGlXejKiapBoLiORsgpbqhu0EESwBOyVCypHoCOaA%2FKZfo&X-Amz-Signature=9b7cad0f9ab5fe581d5a4235b969443d63406d94186c6d34ec0083c6f9196541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

