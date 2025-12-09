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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKTLLD5I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHzq9pLfm8TV6Kkco0lVTwosPMjXdjFKHIoZYb%2BrGFQAiEAvDIwmsIXCvoT5GqlfP7mKm%2FClMAbgbdM1apc7kz0G%2BIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApbM3oZGaEm%2F%2BoEXSrcA%2Fbf30KQTezn%2BkzVOMiG0xWmV%2Fcc2PYR3%2Bt9o4G50xyawYX8Vge56Jc5kp20EjV4Jr9s0U8v6Ftm2kC%2Bo1EkMYG75A5pT%2BLGfgM%2F1KhOILNU1bCFY7r6t6Fic%2F4RPBSqLUAX34oPah4YlmueZFhBJEGi2t5L64dUpgz5aRkUxLjoyrc7fJ%2BVO8gDYdt4p6f%2F9RXr%2ByQwprv8ZKANsgbCIczzbmnbETTv5QoTf%2Bu8HS77M253foKXEm0iZ%2BOxeCoZ88Ptbp%2FmI%2FIfY72ivtfSsJ%2FP22ZWDr2TNmuU8qPmgcF2IIirx%2BFBRLeSWx6c8z3IvY5W8ep7%2FOKefJW3aEbkggEt%2FBZC3NoCLlUP%2BjTLZNKllEs%2F5H8g7SVOFSNABLmmoPp4cLQ8%2FtOOe%2B0XpBV05gEaT0sSAmH%2BjtAzhBrQdQETgegljbeSANmCz3%2F5H4gGhgejF9DmEtY9i2xY5yBGvynNjixIRhdut2c%2Fa33m5Dfy2k%2BNmbQA5CDxL12H%2BNfly8PorVmW8eDNIWQ2LHW%2B9DLSelSlijgfpykt49kF21AmIrWvtJno3u8ymhgOcVaqnNWND2wjATslxifpeJw5e6UcZGRX7Q9yUxjdjNln41gyqUVps1ocX7%2B0p6kWMPiH38kGOqUBDzM3tTYHPENxaIUB48qrZi9wrmVRXsJmG4YaQTNRQJHdReJm9qUS6y7bpTIm2Kj6Kb5ZHRNh5K3bJ%2BVj2mYzaE%2BR2Q1Jzrb7X%2F9iUd4vJx3obnfwnI6iJVdt4xfeenc3wxG6XmAFuwGk99pPMsY%2Fbi%2BBRTKpuQGsi82mrERWgFYICqIrANrmjT5mZc8MOzMmSHl0SUKAUTBLRRi3gMCTptuEitVS&X-Amz-Signature=fa23e61fee3fc872aa636deaf271771f87001310e7d5eb9c2e8cb60e01be1ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

