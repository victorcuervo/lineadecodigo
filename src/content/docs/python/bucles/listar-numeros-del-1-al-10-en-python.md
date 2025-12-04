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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R423VG2I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjksmcXTor5sU3eVlUc2WNn%2FwhH%2B2fsHwDfdTWQly0nAiEA2uqGIjxpWpNMKxZjpdyj9HdBIx1RA0fvuxZll%2FzolHEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDB0bjpEXcew4cRfT4yrcA1yejpIVct0dDMrAkiBaRJBibqDHa6GqH57Z5nL3a0rBDyFevj2f2iey%2FZYtBfLxBjD5BuQORg%2FAlKgjf56YikFJM6iaMpn2yc1IvEciIQhJoNaz84kC1%2BNLgxk2js%2BDHiYbpLLMxeLfROsjclSQE59GvRb77wm%2BZ33N6dCdF4uvxUUCrYV6bAcBWCAsOhT0nCHbI1Wgq6ESgI01QL%2BJeGWxUTc1mlRmO05J%2F9g6GCvmtuO20ucvPo2eIUtjkfn%2FPSzWlDlsk5i77nTJokwA3dY1HHl1d9nhIsLgk8FVb0lUcq3WJdOXdOm92vqodvCsZr9v26WVEAv4BThl9JZKQ5eQfnbXjI4i2Giw1zmLuh81WtnvB4wu%2B%2FE6pdbOq3Bk%2FJySeiKyBIy258XV%2Bts8JoZYyQXDnqT%2Fg0NuJtxg59aTQPMfGt31oZc4hq35GPP6x1HY%2BZ%2Fj%2BjiGAriiwvz2WL2cXHAaabfxfPb8tUEllvhXtFOkg7qbT3pMXEPV9eiWih%2FVLmhw6iFMQrftGxS%2BqIG2SclU74b5NtF4Fw5xhenslFncrvTdK9m77FLkSnyGpMMq5K6tt2K89XnTp9lz99kRCnEy3YCL%2Bvj4o89dpdEt%2BuslwnK5Mda%2FjbTQML6MyMkGOqUBp30COXbnibzwb3kTJO%2FYkDGAr0x5Jy2vbeSBXBaPadHsgZM3sGNSLXnsibe1kBz4erkDnGpZxRM%2BuHbLzgswt2rKi7W%2FEGsrnBlcUIGOAhbd2el1zkGwiIbCFMOvBp6fYAcu%2B7HI5Q54pssUMbNr%2FXC5sumQvk12AOZ2M%2F7t4K0tlayv82lZxZKRqESXmumBoSLK6%2BZoEU2jVKgEPl0A9eQSwa9V&X-Amz-Signature=1af825017ee3993009e1b878125734364aecf6c0bb34e72d69070dd718f39ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

