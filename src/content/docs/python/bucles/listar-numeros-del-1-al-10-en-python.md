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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBS5TJ4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBrglLWifv1%2Fy3Dc%2BdiEk96Qs8mw17tjtDxfdhIWO9u0AiBLk4aw52qKaDrdnf6usxHXbmxFebagQK7uMzlFqd8HTir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMSn7muntzjHDC4revKtwDQyIky0yHqVVAdyZiDa4Pqrgv86KoufkhJrYV5oJo2VNp4Dj1jOu3B99ZAE5nEXtN4%2BtCsIat%2BM%2F1TM4ZvtDJ4mfeCeFSwVTl7rB%2B6lHKSA%2Fe%2Fstz1MxEdK59Nnl%2FzeusZG3X3z0SFCObF42qqs%2FEJkYXWzh6p1OO%2BDZVZ0y4ccXh1u2wWExX6VXLk%2FOIh1m6kk2BD%2BfI7bIfSmtaITWcPFa4GvFDKTIaoObSNmpBeEshYYix329RXYc22eHWzCMzfoVeydyXAWMRNMYgnCXDsZzzmyZfWvrkowDtWq91v5yNoLRP7KWASbHkhDiQdIN3LtLvi42sIQB5r2YlJrEK9OjNIhxnLFLKsJGQnUbs2%2B8X8Gw%2Bl0kdPkpNm3McNs3remNUcRBvzA9VvKOxJGpoeN20XVsylUOAXM29xTToPVXs5CnHXA25fA%2BXW59OzVQTFZA008ZnGTT5rtxbTPHAzQDyRj4okqA3lDsVQkk8Y2Si%2FI4AZ2GUAJYFOFIGGEK2v3t3jAd6giCPb%2F57cF6T5ugZTACvDVMh8vOD1%2F7h2ZeavCVccAxfE6oIRcPO%2B2PlyR%2Ft1Oyp8GuB2dEfaePdKHA8h%2B0fajzdeKk2BIFVjVOuRFHs4FvyMneL5SAwtYPGyQY6pgGDZIe42S9j7FucX19kL9u5eGhDBo1yOLXHKrK0%2FHtmJlmErz7N6D%2BpJ5Emkcb9lDzdRkSHT5f6eZqv6HNVrxBVitj0e28c5MUMh6DC%2Bywgq4awIuEEp2ru3MP4V223K7iX3D5cN30NUOMqWZQt0wh9JZtk71zDHAmQ033SJpfh0PykFeHkzXVxdl6g38EKcxDwCj3ule8SIAl7kpjFFKlImSUzHSjO&X-Amz-Signature=b23e5892502d2e869c88cca2dfd7600272907f171027b33c347fef09f4316e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

