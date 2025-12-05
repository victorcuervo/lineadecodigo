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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R24GVKA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmwCbDMu2Mq6orgo0yBwkijXbZPF5c0jW6f%2Ba99SSSqAiEAtsocDH9yhOiUvwAruMFiPwWhQ3UY3a2coXI1YiQXl3gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDN0Ft0f20afrCLLvsCrcAy6h76wkp0R8Rlw7jO4H%2BulDWaSDszyCcpmIlCQ3BFTV6k6tn65GsG8Mda7iEBPHEWPbi4mncIswUDwTI1mvtCT7Af62k54mDinB1qbOG%2BhuxcINs7ykN2JdhMJnf424Ad%2BcTk31pZ1k4Px9tJECL2wcFzPNOb%2FmJzu2X3Uvf2eBVtGbtxz3DYnzBe1AgNn524ll4IWS4OZNb4VYH4vybDRWrD00j1AK3JlRLrKgAjrN8HiROZEH1tn3lYd13ZJ75FcPc9%2BHD9qHK%2BSM2Qvwgi2O0UJIW9hwAv0%2FdDP0DPGL8t4RdLjWe0ZLRHhQqYoMLdLETr3uft8xiJDQ8yvnFBR%2BOsN33fe4y%2BT2663JmnXxBH%2FZnR6l7g2sfs0ED%2BiDb%2BCTdyM0ihfGCRyVy1b5g76VjKtobHrFKE05dIzkPCPNYKwSD56AAAuGpLEGdpaDM7y%2FtYE3l4fVwIQTMebKbm4EJasEhOXdzfTQTD5AZSVNudveSLmi6J%2Fwq%2BANZRydMOFPAoDWF8Wx%2B7t4KEri4R3OOKiHtpROQ%2BG7%2BlrthzfNFhuzEVJBagmBYFc2GOjJGwlnrr1zK9o3T%2BdP8ko%2FbSMKWw%2ByO02FuJot9jusJIC0tgIY2ch%2F%2BOxpC69DMM%2BryckGOqUBtXYqTNUbAGneK8FQ2SebN1aQZXh%2BqeZIRV8w6t5z3btl71ZYvkkKLyqeS%2BH0twR7RXtB1uK1Docu6DJIfetanInsr96qKUsmNJZPq3MqtQ94ymui52bAtW%2ByCOlukM7YDoJ7v95FPoXcvzymoL0RNwGBuVDC5B%2FTMPyEq8W0UmxIocwm3pfErf%2Fq9AjM56gnHXfOPNrw03%2FmVV%2BCPA99J8k3fkvs&X-Amz-Signature=41450cfcfb7f562476ddfaff6f37c5cbef4b7a290803734f7ff83b86880bb614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

