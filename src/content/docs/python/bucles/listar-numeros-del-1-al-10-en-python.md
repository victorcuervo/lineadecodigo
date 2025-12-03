---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QJZBDI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIH5mpKFmG5MfvAJOn3GE81PsQutfiDToac8X3C4RnxEmAiEAuxHo4U1UdR8ac9MtA%2FoW2Qm2QyzQi07JiOdvW3X%2FoZkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLzw4d%2BU6td9PVzVDSrcA6jxB62R4sMIj6UC9CMduOWToRWDmmkattRlrsbkytdSvxH8ox8c7XRA1wG3qQMUucm7zuCHkV2IsZ60onu7%2FIkbJvwvKVzEXORzWxABlBrSEr0WS3mxyAqipqlvl5RkxpyinXBD8k9FDJHukGu71FfxEhqmUnYj4%2FLXjMN%2BPSsUNrg%2BqynEbJA58i5mHhfDCvxfwB3u59z0tIsaZB1ii5JRlgF%2FZIJFyQ7ODiSWy8jFPb7gn%2ByeMVOhitbAuVFwX6xt7HGBCENC4HzIEQRX2TpnwH0m%2F62gz3f3J1cEAQZWZH01MAGnw%2F9XHWahe0Qp2gnXz%2FWxnKbjMu8gWo5Vc3kVoRaE6q1EY2%2FPcJq35M3tGbIzsBFqoi%2B%2FtVRb1XyJJKU0rPeS3t4%2Bfa50t8bS3iTrllDWZRUF31G3kHjf8F11uRzsLzQVD0bQywW7FBWrpOv6sczt9S5H4H6bh03f0C8ciT8CBDyqt71JG3GF2tzUopq54CJOlBL%2FjiQnKozb6CFO5NI0vl8UyOhCV9FxF9badKotv23O1R%2FYvZrnrGbEPwG5R5VIpsUo5u2w7aGB6s5Nt%2BJ8XWDI4zhoJZJWmSFyi77TDM2IQBc8yFRAYJZmFnWr87zPaetsW8J%2FMK3cwskGOqUB1CAcMXlOYS2yBRTzQTw5f%2Bys%2FYJny2lhyZyxm8BP47V1Zf%2BQWlTrK2E8LeO44%2BhuOs%2FRUE89ijGQNjpScczWuJFCk1wVv%2BX1UP9ikrBkjMSGs4Hv5yZAoNrI0UAwfRBJVF%2FDiG9gM8Mnan%2FLtAGpBN%2F8n3AvOaWRIfMgpFAjtLyb0qQ51j3EhV8moMFr6H1hsh6ZI8arzv5G2RzwhvXAihoD98nU&X-Amz-Signature=33279b99e781b391f57a1580c9b9caa1a9cde66022049b90847c76defba906eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

