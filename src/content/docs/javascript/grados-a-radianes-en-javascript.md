---
title: Grados a Radianes en Javascript
description: "Uso de la clase Math para poder crear una función que nos permita realizar la conversión de grados a radianes en Javascript."
lastupdates: 2023-03-17
author: victor_cuervo
---

Convertir grados a radianes en [Javascript](https://manualweb.net/javascript/) es de mucha utilidad cuando estamos utilizando [operaciones trigonométricas](https://manualweb.net/javascript/operaciones-trigonometricas-e-hiperbolicas/). Y es que muchas de estas operaciones esperan recibir la información del ángulo en radianes y, ciertamente, la mejor forma de verlo para uno mismo es verlo en grados.


Por ejemplo, si queremos saber el seno de un ángulo utilizaremos la función [`Math.sin()`](https://www.w3api.com/Javascript/Math/sin)`.` Esta función nos permite calcular el seno pasándole el ángulo como parámetro en un valor de radianes.


En este sentido si queremos calcular el seno de un ángulo de 0 grados será sencillo al ser el mismo valor en radiantes.


```javascript
console.log(Math.sin(0));
```


Pero cómo hacemos para saber cuál es el seno de un ángulo de 90 grados. En este caso es cuando saber cómo convertir grados a radianes en [Javascript](https://manualweb.net/javascript/) nos será de mucha utilidad.


En este sentido lo que tenemos que conocer es la formula de conversión de grados a radianes. La cual podemos expresar de la siguiente forma. El valor del grado multiplicado por el número π y dividido entre 180 nos da su valor en radianes.


```javascript
radian = (grado * π)/180
```


Si transformamos esto a código [Javascript](https://manualweb.net/javascript/) solo tenemos que saber que el número π se define mediante la constante [`Math.PI`](https://www.w3api.com/Javascript/Math/PI/) y de esta forma podemos hacer la conversión de grados a radianes de la siguiente manera:


```javascript
radian = (grado * Math.PI)/180;
```


Lo podemos reutilizar metiendo en una función en el caso de que vayamos a utilizarlo muchas veces:


```javascript
function deg2Rad(deg){
    return deg * (Math.PI/180.0);
}
```


De esta manera, si queremos saber el seno de un ángulo de 90 grados lo podremos hacer sencillamente de la siguiente forma:


```javascript
console.log(deg2Rad(90));
```


Lo mismo para otros valores de ángulos en grados:


```javascript
console.log(deg2Rad(0));
console.log(deg2Rad(90));
console.log(deg2Rad(180));
console.log(deg2Rad(270));
console.log(deg2Rad(360));
```


De esta manera tan sencilla y útil a la vez podemos crear nuestro código para poder convertir grados a radianes en [Javascript](https://manualweb.net/javascript/).

