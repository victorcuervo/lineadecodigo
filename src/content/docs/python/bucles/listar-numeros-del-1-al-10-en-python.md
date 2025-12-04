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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z4W2ZHE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIB2MtsMEBD17huEBv%2BPBQhOhHhXbOIfpLTSb8mh2v3a6AiBFq8taDqFIPbBAYvRLDlKhALDYnGpgqi%2BP42HjfXgFsyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMDrW2Rmxa4HY1lBd1KtwD55YwbkIayipRiIKT8dGRJpOSSnSK0FOS0sW9%2FYdn51XHjEQN8Ny6JQfDIlODR%2FGrXhPkQe1TvWkmBEPfv9w0AduTaoVoiU4J2dcBLAm5WSs9mSGU9sTFycbfbgZW%2FlJNepG6zhIVlba4fLmTSiIIckJNadgP76MwGHbmNrm0yfKc4MfbHNhO9x3EuZaoSmDcZC2P4DVcsvAXgSXLSpSigFY3wkrNJZYJnjlljJb4KA9z3N4XHF6fKazkeZHMSxPcQkB9qEvpswo5ZMuD8t4f0tBCUy2OJixXbSe919Oa9rNd35kxaqr3IWjOpfIsZ4B28BdT%2FLuVTjfhXW%2Brd194ptsGTnLOMZZDewnBkXwnuxUM0onegGyg120Mq4HxRSbCEd8%2BIx%2B8FnaPvTOz%2BVQm%2B5ZXf2SviyHVTiXUsC8rNO6DaPf%2FTYOPubFBqtzurJGDVASevwtTAkRH6eXw9UL7Sl%2BiHnsbHi8ydyJcg9EGf3ocpEbYns7pCg9%2B2dfzwZsr6oi3jfkCn1VuAhra9tZb6irnc%2FeWCwaFRaOxFFQWjonxXqqA9OjAVgNYSBf3Hz%2FKa3wR51vjLJeH9hhogLI5A1DtDq2T4zYmY8BLk9dHs95%2FDttv1pfHDtfA32wwlIPGyQY6pgFBtouJgrhqQfVrR4Djs0YnWi%2BM8uNIVUPOr2C%2FUU3H6upvUEUBa4mPnqwgLIxNo0ehgYW6fOJTth8XM%2FFBwRTdXPFWP1Zot5BnQYtYnp%2F2%2FXWdg8nxyWXlhnxWE7A0AXUUj3z5rp2NzpeFFQbdXZTiwc1Tv%2BtK69U48%2FsnXLN4RnPNQfv7T%2BbxWohZq%2FzJQr1sxeCC2MQfcw3xK5D36vzDV6HsPI8I&X-Amz-Signature=da7a4ab931c69712f006d443f765b3318b74702b710871d768d5b70cc570990f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

