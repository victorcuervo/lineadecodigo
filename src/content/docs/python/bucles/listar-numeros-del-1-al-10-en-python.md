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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LWGYR7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDuqx4aYvgMvmXgz6YBlxDAYtv7Vs3UHtRsoaG3P7T8aAiAg9ZQJ5NqlMKhCBvWxSdQVejE2%2Fln4BSFnz7jGzMwg8Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM1uVeyEMdWSgpclB3KtwDqyVSrcdT1IEEuoyzC96g1Pr5bT4fV9zjdBdN8URtFd5LNJVh5E0lhEL1kJhXqXsT6yDdFixJ%2F40HJBVcWiRxG5h1Ow3BahI1E01zvAAty8twxrbx6wHfIFx%2F4VrfjxjbDsUzdI3j%2Fqj7RHsL86rUVcM%2BmsTKTfwycS1ACyT8qBeXSaje830PIsJ%2FnQjZ59qvZe3qzl2y2W5BiyHCIgnbwwlMM%2BL%2BtN%2BJfp2LfxvU1a2cVhS2CZd1AeVjpgSCCS10Zy651NCtzMUc1FL2JwlssrVvD9qZKjDdO9Ep%2BMstSe4RMCud%2Bv38WJA9EbxxfVSflFwyuvFTJoKX5icrlUOx4LAg6E2%2BJ7ZLDzez8AaQr3vCalFBr9CLGX757UZhJ54LE23kcHn%2F26DCsAQkW%2BPtUssw2Sb%2FpO3hiD1%2FS5w1rkcsZts4NGKY1TWmLxRj1TXFp976f6l%2BEkX9%2BSDQUnCvlvXlhpe3SnUpVA6C0ypkOFMcTG%2F0mi6Rocvz3uEymEFVpxEvBPj5ixRjMQ8fX5L4xjScWvsGa51ZnNnmUVrlPsrmHrCtKOf8LC%2BscVcaZusi643De8pAvaosdgIkYHYrVhnHXNiMqK%2FWkgorx0lyOpRungZh2cfCgtNP8JcwvZHCyQY6pgHwr5XoekiI5NnIuI6hc5yIzlnQ739sXUWBluGxOVRT4cdV9H5yZjDCX6BiEDopVbpn7LjXg7CC537oERayoiX49SYoWds0FfITwTJ3HJi04lQsJoi1EMzZvvNRKLj3RaOUpKgVmzlvoRNwAg1fEuMazAZ2lHGIUIpHYPMZZU155Z3xLdTIv4aWUYDJCNuWQf8SvKE9cplxZdOjv20RPnvuE6mCbtnh&X-Amz-Signature=adb80bc5bf4833a3008f693e77564b297c55d47372b2895a1fa55924060bccad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

