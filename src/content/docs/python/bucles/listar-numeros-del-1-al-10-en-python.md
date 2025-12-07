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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNULBVP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjmR6Qu1AUgz8sicpcf06N30xyWImBdUEYnZxG0Iy7oAiEA7X4WCS%2FG6zkoY1%2FABnNvzTqfd1Hx%2Fkmbe1TUWg%2BOomQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnFye9jKstduPrA2SrcA7S7SZvcrwXpQgK3F43uGDrKZcqE7Wm8Logfw%2FhPZx0iu%2F%2FsOVOhQ3lJ3EN2cSoGnFXdxz%2BcmOZAt0Azg%2BL4b3c%2FK1gQw9oxAbL1W8IrapJ%2FBZ9hS7BaW%2B4hd%2ByPP31YS2ifVuUmVdalkSTtL5oquO06Fa%2FqE74jDN%2F3p03LUa2I2LWwFiaTLXVomqnCPwttC02fQV%2FqzdRK%2B%2By6wnrwIUKDj3kT0cOzTHN1w%2Fg%2BYME6cgN%2FKpCQYkE%2FJuBm1n12ZYq8mTomWwNDfZj7zQ%2BTm0sf2iu29UI3DRtQ0OQf7W5HmiIJgNfxjiVs3gshpov2ca4cKeK0%2BcQlD6p0o9YfChI8%2FtfhP3gj5y6hKNRWEjC4QdcujocAdQlzMZrhPU9FI56ogtokUMiFK9yX1FI1Fzky1uIgs2mutPn1LzPX2Lag3cmkkS8UG2p6qwe5x4hPcjRkapMrxzGxtvPof%2FhZcgOlG6J%2FdcFgxc%2FMlZLwDHBQ1xOcqCyyl2yUIvcEJkZQuO9pY4ngcX0QUmkxGjrxstRLjEGX9bCDwVg33ywnKZXwcW1FLxqz0i5hxxrHs0pU6%2FIaZjp1f276iFurlpFa6S%2FyEwLsYommiicqrVwE7Aqtcgi1hNPiwHxy0o6eMPPH18kGOqUBXPKbB2zlmZIBK3KPEVev6C68ziiKdrJKeK4UCpBfZJIewbwL%2BSMtiyn17r1VdRhVIebYnUiGPN973Z%2BCx7anH92Vs%2B8EaafP24ugmi5X%2F9pjQ%2Fev6H8QgJf05ctma5VrjiUJsHtbY8U5zuLNsfV3ohIrgooIYSQWo%2BSu%2F7Ts9Z%2F2lBBqrJD%2BS8qwkURKqE1zYkhcCsnhBx8TJq6U6iIF0E5H%2FrJA&X-Amz-Signature=d8e609fca3decaf0f6eae1908c787541ab9c80b528bb2b7931ea018febcc711e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

