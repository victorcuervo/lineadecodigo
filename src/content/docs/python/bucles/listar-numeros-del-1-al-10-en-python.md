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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FRUMQB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD8ywJzA8WCJlEPosF4z3GohNW7WNLtB3qk9YXgZotSAAIhAKQmXyBFSHaqe3Vhpk3r%2BJbfz7HBKzLmVG6HFR5kGmcXKv8DCDoQABoMNjM3NDIzMTgzODA1IgxTO8KJI3%2FSh5UC2FYq3AO1g5Pia6zfVRrdcretqLg9ARpjys3hD49Ux2db93T9dD0eAsxV3C5BlkqOWU74uHJLOoB0iGDUPyXFZ3EaC71mEivwmUkgvNxFpuohfYuk%2FZ1Gwcl9EKhFJkoYuCsy9TSJtSOUIbyoMZfXKH2KL7AIc%2F7NGBTESMHvseUhU6nd7RqsotvE1KZPFjz0QL1VKvJ4o2ib%2Fv6YR7t4YeVMCdBSbWBK%2FvqUPPigjzZKV%2FOqroSKMs5Wte9EjX%2Fa%2ByAH4tT%2F5a2sKMClHkbCUAuSb%2BOO4r4uj1oSllZicNssYL6ITIjYz5UCoV5XdasTIPTGNRB7MeKYknO9VyaGKR1FAASgyYoduVFWHh5BzNG7wIXnwkDLvwD6LSTN2xRSd%2BGXWyfHyMG2reskWpM3EbtB2Cytxz36bHR8yf4E1yfmn0D92hZpN2xvmoMi2S%2FzzVSdN9LKL4pclPGGFW7pe1qOZDuANGzt%2BMmiVNfShlCo%2F7kknmp6bB9Gm7VI9gI2IgonVMa0x2d6QNxEfEPSJByc7Y0341FCjalA4gwZNSmvOUvt35tEknxiB0EHOQoOVvayuCzBMS4G0GcSXCsSzvjKAyIWK5BWpr8SR67F7U3D0eUTnRb6PFDFxrF%2BFMFlUzCitcPJBjqkAffX4hBPu7yEpcXkIiqnObY3vofRW9IUmLDZogYhYMau0I4wav%2BV032MLj538dBaQLt5SUYxJKbSacEIwp2QQgUQdJd2Ah7C8WRoCsHS%2BYHeZ3Y%2FhMuHf%2F7UCv5NiKWNxP5VfTn1cs9cyibMkQj3Dx4DDGKspw9GINXtMPy%2FsxjVIeftLf9jwAFcy17YDbSVsw3vcYpfmw6Qt%2B6V3G%2BS8bvTnh7e&X-Amz-Signature=c6f0e851f3a53460619dcb7ea0ba7b8aadf1d5a5907f5e81e0046fe497688caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

