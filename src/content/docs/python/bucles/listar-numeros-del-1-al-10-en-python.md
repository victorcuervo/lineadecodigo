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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JAR2HPQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHxVkNEsBOMxJXFRg4sp6YDQ0aLbG5TSgzobHAjxI2G0AiBtgrZe7W5yxGxxKV1T58Tz72a%2BDrMNWBcn7Sj1s48jdir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMBqnL0NYOKmSknE41KtwDuOvRJq0vu%2FeCJ6nFFLQ4kkASXsQaJxR8R24hmQUHWvpSToADLsiysTVqzGuNmyNnAPV3FFThOiCVcWU6tSMnCaQXWS3PYClIBUQ1dgbWVoKaJonLqawnOvpSSK9YhoewTT6X3t4jCqG1l7lt7TdNpT2hmOeqlY5j6Crp8mRfaEWK7Sqq1%2BEigLCC6M2jW%2B4uVoQlBnTBtA1cAuoCmkSFfwUZmBpxkR4U1G2V%2F292LySxQ%2BaPwRqxsNl%2BGJ2r7%2FLnF022DvC3MACNI0lFTN1AUeU73%2FXxrXfMTX%2FoNUQs4XP85XwvS8IIWXOoXFQp9FHQ24IDkYNCLP7gXDh%2FotG8oF7TSNR%2FnJ0BSFyVk4zsxEXMqrffnq65b3lrAvbN8PTpjG%2BZcPLxCu6ZMWspxR%2FiXto9qwMq98PDDpeNlEm9kj1neTOPu1l%2BdxA%2F7Q%2FRxvdvBm3QTWXoNXvym3bvpLMV3n8xs1vo15Bb4zvzcWDIv%2FrHpsaNfyEq6Vy9ugqc4FfOXDmavf2b2bNmEUGdnSOb0gTZgRpvF98IJ4RmXbtdnqXbKd2bSQWzolIYY0stYvjt39vPNkki9uIOTvZMDOXUmhlEV%2Fk7%2BR5ikLGQ5ReG9g%2B1JWiEVB9rbJXCtKwwtL7GyQY6pgGlqq%2F7hFm4pyf0dfX0ps%2BZCakCDidk1U5Lw1xiV9ckBuxsMMYeZQprbhKjJ%2FWlbgn%2FELRPusnv8sbq9enLamiLLXAncVSIErNLGKsO%2F%2Bi0Q4ieeiqWVhecoRa79dv%2F6X1A8%2B1VhaQlLidZM44GBvXkCvYLuKEeaALa%2FODS3fnwrQUMLocgpXPXU7q1I3%2FyU9C2GF6KzmvjYrRORrY%2B75sddZrqKX%2Fd&X-Amz-Signature=86cb48488d0cff332ea6f55952c23fa609f0722afd5133735976910e62e1253f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

