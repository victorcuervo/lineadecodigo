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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVXRMOH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6d7gJZ8a34goMMW7piDdUcllfTS0c76Cst0%2BBtKgFLAiBcyLQrEDhzQb%2FUQhrFJQtZ1uGg1BCtaWCLpMKQN4cfYSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMfiePWLi3CCbtjUSCKtwDxX%2Bi1REBBxVrod%2BWyQ3HO%2FzIvbLRws8Lz0AUUQbsql64QzKwLlv7jVRRD33BgdmcZBabUDV6oj28qjnyoBwCPGxuXb5ZKySClS3FSPgWzAassLd4HiZ3xetvSAzlxH1Psb39c5zngkV2R5Sd%2FDnEX7XD7s%2BjeTHfLUFCbOk4q1m6RS1iKpAVD8qwn5CLTU5BYWfMhVrsVxVUkMLyA7c%2FeSSg9p3x4c%2FXc4q9cH%2FziHIBZVv2MyEytsV072WP3j%2FmN5GVFiIMg%2FTESoS2WUU2Dl86M%2BH%2FaPtKdqpNNKNLaFE%2BFQSTBUNLRtjyFzowk%2F7KP%2FKbmW8u8Gg6%2FplXid89ymo%2BsTOWOT6H9CmdoKHluzOclDpRr1FJN5idxCPWqhwiiNW7LLpmDMHxgTl0QU5Hpmb7qXB%2Ba%2BofgmiEYJQV4QALr0i%2Fkk9snJ6kWmTor06ZdcJyrvix19L%2F2faiZoFCHu4NBDPOWyk92UX7x2mEVvwu849SrxwWvtSDulbGS3NekdgyXOjoO8gfg0u4Qwv6nsIXBRqTHU2IIXVKUhKfYCGR5VpnHCIWsu7yR%2FN6%2Fn7nINb3a%2FjfKSvpAYmdE0h%2FNdadz%2FfO2cYfok3yBI4rP0GgQI82NK%2Fy3op8TVgwtK7JyQY6pgER2i5MSaY5h7i124VkPFrSZklfxpGeIt6lzE4lBiyXK5U2Buu%2BCeavB0D8Gy75kLzsIo10KcxPT0NrtYrSADRaT1hUnwsz5G6YNUmdWjLrhYpuIAV3Hyb7mQwqErM3%2Fj8ho7LS7DhRsAk7xAUQ%2BcQZ26PTv%2BwE8eD0Kzk57TFmfH4MB8tIPlSFIjYZwisScIoy7dt2XqeoDU%2F5IF4Vd5%2FmOgyRECek&X-Amz-Signature=56d3fba52b9baef284bbe1e5a00e9910f5b9ba65e32a23bbe0bff803a4a0e790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

