---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAY62FKY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEYyzMh1tcINfMp2WqIgScF7i4%2FP9frWPoSAHdin1Q%2BoAiEAyTwgSPSoiGVRqk1SfNxiGNwmRP0FZTegOV6hjQalbqcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGUKMxKL03m5CR3TQSrcA%2F%2FvRM4%2BMpKRDhEBM3JfmgVBjMrAAp8HTBZW1QoVpLzNmqqv0VTh08JnUakgszPDmG2eZXKPSlU4z1KlUhrjk%2BQMA9A0r4xipNEkmakU1YwnpnpD%2B8BJT%2Fo4hr%2B45Leyr%2BrR9Vb8c%2F3pU5LJZT1PdeFcvwz7iTDY3yRUQ8Ke9KhBJOf3pHeYnhOgzH6af4YaMEKpxIZvkAc5ucQJswFrE7yFxQIEqtFS%2BfC6H%2BD1GCDHdQ%2FWzWbROQVDHFi8Tyi7UGdT%2BoC4b3eyPVflABRM%2FIr%2BxIERwUt6A6hetaXpW6NMY6c5zAxsb7fnCuBG2bW4ZGrB6cvMW1VvkY0gLbxe2jkBuqcykVy8KOHOIZ7yGSg2RpMqHKJP%2B1PgOsuEUUjGfgFK1JmnyUD8B2btSRByjOg%2FNn5YtsYrrl2fJZzMiamytpYcj5OZ5jK1%2BP0%2FBh0rBJo5L%2FOtTcFzFBIXKYvvlsk6AjKLiMWcWHwUYHwM0lRvzH9lsGbV%2Fr2G7pWAJ5EQBKFk9MKdP4DTFGRL%2FwislqvAFCrlQTIohlSRhQaky7CgSoGSmwstUdh4Hv%2B5mu%2BHIZQEAPp20eqimUtelupMKqnZAMDYb2vbz38pw%2B%2BJsGGRHdSc8ptwluXO7NLxMMXTw8kGOqUB2uAI8xHl%2FbF4S0vM8cWh7fNjFjMNJjM0fq1to%2BAuROJsdfbOngcHU9AmDwNQr7pWBY7RqbYhwKSCW672Cj%2F0Ebljx1CHYjDM5IXMsAZvt5NP8io4E%2FDpWnqhpji43SkxCz3JX473mWqHurFSxcEKhUX0SaXa5%2BnOx0XmuJiu0q%2BVto%2Bm6C4bLtJ4ck33nN%2BWxnktknUzQOLI2S9fyqQRlj69%2FWVA&X-Amz-Signature=15378ee50c69211c75ad0bd4b0d5c4ff13bbe1dc6dd46115bcc310b18013c59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAY62FKY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEYyzMh1tcINfMp2WqIgScF7i4%2FP9frWPoSAHdin1Q%2BoAiEAyTwgSPSoiGVRqk1SfNxiGNwmRP0FZTegOV6hjQalbqcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGUKMxKL03m5CR3TQSrcA%2F%2FvRM4%2BMpKRDhEBM3JfmgVBjMrAAp8HTBZW1QoVpLzNmqqv0VTh08JnUakgszPDmG2eZXKPSlU4z1KlUhrjk%2BQMA9A0r4xipNEkmakU1YwnpnpD%2B8BJT%2Fo4hr%2B45Leyr%2BrR9Vb8c%2F3pU5LJZT1PdeFcvwz7iTDY3yRUQ8Ke9KhBJOf3pHeYnhOgzH6af4YaMEKpxIZvkAc5ucQJswFrE7yFxQIEqtFS%2BfC6H%2BD1GCDHdQ%2FWzWbROQVDHFi8Tyi7UGdT%2BoC4b3eyPVflABRM%2FIr%2BxIERwUt6A6hetaXpW6NMY6c5zAxsb7fnCuBG2bW4ZGrB6cvMW1VvkY0gLbxe2jkBuqcykVy8KOHOIZ7yGSg2RpMqHKJP%2B1PgOsuEUUjGfgFK1JmnyUD8B2btSRByjOg%2FNn5YtsYrrl2fJZzMiamytpYcj5OZ5jK1%2BP0%2FBh0rBJo5L%2FOtTcFzFBIXKYvvlsk6AjKLiMWcWHwUYHwM0lRvzH9lsGbV%2Fr2G7pWAJ5EQBKFk9MKdP4DTFGRL%2FwislqvAFCrlQTIohlSRhQaky7CgSoGSmwstUdh4Hv%2B5mu%2BHIZQEAPp20eqimUtelupMKqnZAMDYb2vbz38pw%2B%2BJsGGRHdSc8ptwluXO7NLxMMXTw8kGOqUB2uAI8xHl%2FbF4S0vM8cWh7fNjFjMNJjM0fq1to%2BAuROJsdfbOngcHU9AmDwNQr7pWBY7RqbYhwKSCW672Cj%2F0Ebljx1CHYjDM5IXMsAZvt5NP8io4E%2FDpWnqhpji43SkxCz3JX473mWqHurFSxcEKhUX0SaXa5%2BnOx0XmuJiu0q%2BVto%2Bm6C4bLtJ4ck33nN%2BWxnktknUzQOLI2S9fyqQRlj69%2FWVA&X-Amz-Signature=f9ca799e2bc97bdd9166999ff27a12141301361fd5b6ea5709e7b7bfd9876f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
