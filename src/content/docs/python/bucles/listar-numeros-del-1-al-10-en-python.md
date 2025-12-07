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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K5GMZ64%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqxktxUL%2Bf7I1zvXeiqkE7N0XTdbCYRH19zfc7hyGfWAiBlzOKqRC%2FbwA3q0t9Ve%2FE%2FTNi06wC2PhmgJmZkDEjybCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj3LO2aEN8TrPIAvdKtwDB%2BEO39bpUNhkKfwR9XvZBiDvzy4ZKFuLyV5eDVsTEn81%2B8kEEfEV17W7SA0XmJ5zjuDzVRzItTYKD1qt42sQ9JO5k1DlVqBggCXWTupsyAZCh14NzJ%2BU7g2o9OvsxPLmWOtyvKTIwocU5qF04ld8E66Y0lVdFNPdSV95p1euJpE1qrbFZfRSJV9ekyTFzp9rsmlKMW%2FyPQLPR1w9jlsUGfINc6hoKN%2FfF%2FkrWiiKLqLnl7qAJgS%2B27tVgrKKQl6KRZM08XfvvZWO90lgPou7tMC9j76CIlcpn0ykB2MbdjcPWEsw0y6nHQWunYgiOElcg5S8a7kXNYZngMTeD0t0tjGXexWN%2FlG1YFYr1VpBu%2Fw0b1TSXVpAnD5J2k1bYoTCi9klgDYfC1Vt1mfvGYqIBYh6BlvWwEA2v5nVdGM%2Bo2fdPn%2BCqXwTLMPd6IyOmmekPnbmp%2FjEJfiQV2MSK9Tz%2BUDyrMQG1jLeXsy2OI8h6Ytzec%2FBHSwKTYcgHkVJs%2BN9y9jvkhtID3Y1sX6KqN34KUrLyHcej9QYgrpGiwciaI4EX0U0VXdL9feRMksox2BJeZgQPEXmS0jC4xGwOJ0S%2Bm2HxuaUa0YfphZw%2FONqz8iHTfPa6L8z5J23LEcw%2B7rWyQY6pgEyscASCnsbxC2oc%2Bi4fFm10NNR9HibgdPmBnuRyzEkg3ph83v1%2FDwysbDOpIwCB%2Fn0SYF29vMx67txq%2F2v7%2F0sS2n86dHz%2FS0SxLMDbQuHIWsyMMEPpwl8H3tiI82ytu%2Bx6cFBzlrJW%2FY9yWqPyZOakSs%2FrTHjL04PP%2B8PNZqVU6k6HKfcwCoKx1%2BYo5OoYbe1uQzDCfPfQuFn%2FxGKPQysjO7TSm1G&X-Amz-Signature=981863a4096d417ba2266cec1b33fd8d091fb56ca327413790ab5786e8c8d693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

