---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
slug: /python/10-primeros-numeros-impares-en-python/
author: victor_cuervo
---

En nuestros [ejemplos básicos para aprender a programar en Python](https://lineadecodigo.com/categoria/python/) hemos visto ya cómo utilizar bucles para poder listar los números del 1 al 10, en este caso vamos a ver cómo podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


### Uso de bucles para listar números


Lo primero para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) es conocer el manejo de los bucles en Python. En concreto vamos a ver cómo se maneja el bucle `for`. El bucle en `for` en [Python](https://www.manualweb.net/python/) tiene la siguiente estructura:


```python
for variable in secuencia:
    # Código a ejecutar
```


Para conseguir la secuencia nos apoyamos en la clase [`range()`](https://www.w3api.com/Python/range/range/) de [Python](https://www.manualweb.net/python/) que nos permite generar una secuencia de números.


Así, revisando la sintaxis de la clase [`range()`](https://www.w3api.com/Python/range/range/) vemos que nos permite listar los números.


```python
class range(stop)
class range(start, stop[, step])
```


Por lo que podemos sacar todos los números con una secuencia generada por [`range()`](https://www.w3api.com/Python/range/range/) de la siguiente forma:


```python
for numero in range(1,11):
  print (numero)
```


En concreto hemos sacado 10 números ya que la clase [`range()`](https://www.w3api.com/Python/range/range/) genera la secuencia desde el número de el valor de `start` hasta el valor del número de `stop`-1.


Pero, esto, nos genera una lista de números consecutivos, es decir, nos muestra tanto los pares como los impares.


Así que si queremos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) tendremos que comprobar que el número, antes de imprimirlo por consola mediante [`print()`](https://www.w3api.com/Python/print/), sea un número impar. Para poder comprobar que el número es impar deberemos de validar que el resto de la división por 2 es diferente a 0. El resto se puede calcular mediante el operador `%`.


Por lo tanto el código de uso del bucle `for`, mas la clase [`range()`](https://www.w3api.com/Python/range/range/) y la validación del resto mediante el operador `%` quedará de la siguiente forma:


```python
for numero in range(1,21):
  if numero % 2 != 0:
    print(numero)
```


### Clase range con step


Además del código calculando el número impar mediante el resto de una operación de división por dos, vamos a ver que podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) utilizando solo la clase [`range()`](https://www.w3api.com/Python/range/range/).


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45BPSBH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuy3HjNqDB7KAt%2F%2BdNBzn4RJXOq1IUIafZXOMl3ZDDzAiEAseGA8cVBCLMQeRxd%2FdUGjoQYmUsnywINjCjQGk5Kx9Uq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDE%2FMYKd%2Fs%2BF31PGkfyrcA9lqZ6rAoJUtg6AWnFMmEcv8LlN1KCzdFP2Q4DMcVPYU%2FuZIiv17JNG6PX6ZwI2RvAfjJeY9GGHkcrm7jlL6Wv8XjsGiCw4uQgq3SNy%2BlzAhNxADhjj0%2FmUI1zHSM3PfhZ0NEdRhNcQju24SyHdH%2Bzs6J9CjwieXe%2BKqC6U%2Fu3ANSDuff4%2FmpQC36f%2FXpum5uhSK3OHUQPWaU3qMC14Dc%2Ft%2FcBmb43kmAKw%2BNAOm1qIqH4x2KD1OVVOr%2BRUNFY3q1%2FxtIOqzX3mTRc7QNMzhuFgeTDxt23tbPH%2BBSoljcbNSEPJ%2BGZls0%2FDZzjwtcoB5f1eJnv2bIWDmkee0A4Aq6WJNBVpVI1hbcHQoYUoOexubtMgYB7Xvxv3388ge9Jg8DlORccJWUiv6TarX5m7%2BtFNFUVYDqTBhOorx5mbBLE3YeQ963lF90FC5I7NieCdHx2A%2BpSakzNe0rwAzK%2BdukXc1lwvp3PeuhLvySR5YsiCGz9NNkPfE4I%2BMsMJFT3QaRRwpxkpvSABF6FXgZQOnF8ixMPFVOkaBRux%2BlS%2F5YUyZ4HYBDq72v9bm7slynKl5kWcT6IA2lWhCqzgVKt%2B80rNvbuYjls4tvWjME3IVuv%2F3J%2BPOQOFm5Rveaud%2BMOqoyskGOqUB8bHLqgidkK9fE7zgwlrly8y4KAWb6Uh8BDWgeysS2K9Xq4nx3ZitzzK6vZfbiM0cGS3DQEBb1BgLvId4pDNoMroZG2Tl11B30%2BymRrlDyU2rtaQtkEjc9Rq%2BL%2FJ3ojcKMJics9vb0%2FepBlos%2FAsL6y4b2cLLAo%2FXdiOThh7GK6PvIGbQII23Ywqnf5mPy7tFK2UrfwZYV8I%2B%2F%2BH%2FvwPhTLH71lUp&X-Amz-Signature=2d285c8bb0c36502d9f5d3ac8bcea04ed7c6280ee70f99e9c1a4f28dc9a90551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Mirando un poco más en detalle los parámetros de la sintaxis de [`range()`](https://www.w3api.com/Python/range/range/) vemos que hay uno que es `step`. Este parámetro nos permite el generar una lista de números con valores de separación entre ellos.


```python
class range(stop)
class range(start, stop[, step])
```


Es decir, que si generamos un rango de números del 1 al 11, con un salto de 2, tal y como conseguiríamos con este código:


```python
range(1,11,2)
```


Veremos que nos genera los números en saltos de dos en 2.


```python
# 1, 3, 5, 7, 9
```


Si cambiamos el parámetro `step` y ponemos un valor de 3.


```python
range(1,11,2)
```


Veremos que los números están separados de 3 en 3.


```python
# 1, 4, 7, 10
```


### Código para listar los 10 primeros números impares en Python


Así que podemos utilizar la clase [`range()`](https://www.w3api.com/Python/range/range/) con el parámetro `step` para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


Para ello, como queremos sacar los 10 primeros números tendremos que utilizar un rango de 1 al 20 y como solo necesitamos los números impares, le añadimos el salto de 2 en 2.


```python
range(1,21,2)
```


Por lo tanto el código definitivo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) será el siguiente:


```python
for numero in range(1,21,2):
  print(numero)
```


Lo que nos mostrará por consola la siguiente secuencia:


```python
#1, 3, 5, 7, 9, 11, 13, 15, 17, 19
```


Y ya tendremos por completo nuestro ejemplo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/). ¿Qué otros casos de uso se te ocurren en los que tengas que utilizar el parámetro `step` de la clase [`range()`](https://www.w3api.com/Python/range/range/)?

