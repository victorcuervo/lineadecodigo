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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJL2S7PQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFwo03PQUoiToMxm2MGDoQqLZ0HjW8xy85x89OeaH0BAiEAkFkPqs5QvNpoGgbsOvuU2bW1bM8KscfsojftTAB4GHIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIdQVRt8iR5N3GWpSyrcA2Rm9bosQsHQPtgT0fm6r3GCaZYoI5VcSkgqfykSM55bb0n4GEUOHggAF%2BZpe2sBaromQIDea0U9Xdgm2CNr6CWmGmz012cFL6LPq4mdhv%2BjCp9IaamAQ4CvGlToXOfNdf0Bnpc57wvwQUy5c2n0iXnhw7Qx9sg3Lt3FEkXRli1Icxc4T5va4bqmMDVzULZbXn%2FMjOPeWAfffFbq%2B5eLHd%2FfHgXCnQQhG8JWdv6EN13hs7UXb4vP2EULAKE%2F8WLO2fW%2BCcRJYNYXOAiMXAPpNfe3JbB460pFvtIqE0yR%2FQb%2F3CHG94ouaLfTVUUHz%2BF2jwOXUqhEA1BVsO%2F9fwlQomnRIx3BsEl6EDWvUOAUOqZ7iTKbVg4nVXpBSU1gqfxZWZuY4o6k2M%2Bfo1f%2Bj5JrtlYfRAhpscMC9JpQ2UiHLrLZuOtwHE7MzSugrJMvLpIEzjG5YPW9zfUoKTNQ4zrU8akkKWMi87nh%2FwUYKoxHyT%2BloZZbLDE0ubD7v4Ykhxzseuot04gZ86oXAesAc7krlraL8zCuLS0ih3reRnNexeD6xgOvnRQDY25rBjFcMcfG1SXP2CfTO9m9%2F%2FPL3wBhkg205BCDlNn1B8ftoXHnmkqKJL3qAO7s6kdk%2F8BNMKnU0skGOqUBCB%2FqxaKoTkWqJLwHt9Y85PBaW4Wl3NcIN%2FNENZ9Hr6zS2AdaahkibROL2sdvDpYunn%2FN8uQJq3gSIPPQZ2xFaff%2B2TqxvDZNavgwLaPSqdrBPBwm%2FxaoH55PbIu2eeT39PgrUCiIPEqOZt3M4I8ihr2GnqAIJaSRIFWYy2FhJI54h%2FYu4oK9boGCHfc0h9S3zKcrf3THFsoiUlBP2RFN%2BOj%2BW28e&X-Amz-Signature=7a523dc999904ef37e56ba125aeefc061e181384ba476fb36a3c54fb07d52d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

