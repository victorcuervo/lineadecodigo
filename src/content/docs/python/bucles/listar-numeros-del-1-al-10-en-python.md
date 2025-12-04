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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FMRCK7L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBwEAArEpPEQv8DIfOEbAmmtlYufe%2BPegt%2FpSkd398WrAiEAjlcdFUmFtyPKYzjpHWrWPKYsz3axsxA1W8JaPJUJhsMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDM%2FrR63B39f4ZfGQXSrcAyywfudkBhUqaUXoHJdlqbGJl3wQ4lCSjjVyqKrafUsOet1brFJ6pDl7x3GfHAbpXvagdWeie0De0EhhergrW081cTus58hWjcyKPMM4vwpD8ceQKFWP1A%2FbMGIjx4BraSPFwXEX9qPbamIbHZazzrfUTGA5s%2F5dsw1JCyrsLseFd1POaLx%2Fx3TzexFIckYN75By2LN8sx%2FxQYft57kuGU9NbFXpklJXYvP3jxn7HPG%2B4JhI0sthgwi0T1rTIAlXZ86TEiGAN5bUGSXfN8YyD6VMaSQKwHYh7C8Gc8JepigaM0pMX%2BL6VzUWYZm%2FtvKQRTrRFBZARssCRNij2d49Ou6EXnn%2B%2FbXD%2BPfmqv9mfa%2BD%2FTTnhXDUdzpBymTilep0htZTO4FXyQ9pll1a9sWj28hR1sezj4DkIzRjs4Tliv0pORvW221ReEI976h29PY4OJmiuYQwc3XRLs6mGLgZc3SUJy4OyHvNg81oCqCaI6DRF5%2BI9S8xQiAc5jGGf%2BW4I5r9JWFkVTI1JilddcKEORpIIKhsQvqIbjM39e%2FcaF73AkMk0otnblbmRVBUaLooyAYfoF%2FzHsTSl5qkdgclH25nm6SbrRg4%2FsIbpz8UcQWefU6XtlGQWTSnOoKUMKeQxMkGOqUBODDUlgg%2BOPr7%2FA0YtDqiPsnu7BZD5LuPZ9nAopPRoXH7vWgat%2BpavCvsBRDDUomY2k8c78MKFNc%2FuWock4XtMMKTNObj5Np5FR%2Fy9qiB7JEBoAQtB2fsmGXbSUcSJ1p0RPfssFIGAZxYLUMzYdki0M41ZvOMxYRcYssluvmLwGTxvjmX7p%2Fm8F%2FB%2B8Bahgbsf98ElCopZ4WGQHD5VBk%2FzV8PAV8A&X-Amz-Signature=65bfb5275dd3ffe355bd75ddd94ffdfbf983b7e4be174ab7a75b3d86cc20191d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

