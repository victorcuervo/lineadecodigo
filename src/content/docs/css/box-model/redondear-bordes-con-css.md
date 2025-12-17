---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2KVBUJO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsXeouek7YCus7cvaoVcLdKt%2F9jANuh1HmJWNu6tVnTgIhAIlnGGKYqt5Q1voikJZm7HFLodZ9ecxh4V3HfxbaMuoXKv8DCHMQABoMNjM3NDIzMTgzODA1IgyohIPoYfS1yAD7k70q3AMGA4gB%2FiGYxS8bi8QRyXA1RNuYXHJ5ld54mPysqjZi%2FJJYGnKfQaDwf1LHHmfTGSSdFEQjLP%2F4uU27wDnLB9fGy1GoL%2B2WGHVMQBKCXhlU%2BpwxNwPTFoYegO9M7YjyDkoCQ0jo1yVwSSD8k%2BVam2hib28SsVMzmVg9VromMZLVp64azUfIRqSZi%2Bli8AArjIhURvArIqnOKIjA%2BhyNzBodaZBs2K3leH%2BQpT5UaccC4TcwXY1Tdoc0kfSQ5ASotaoABF28U57RXiamGqDOHNtAOPabRgRJGF12AI2cdL69Qu59QOKPlrmXL2m%2BdxKMrnFs6I0mpDRXxzuivmTvesgowhSHfkzrag4ioY%2BdIVG7Kbjg%2FFMpAYaGefsIHqSaufoAoECV9hmfkeiVqY95ktE2xzCt4a2F%2BMAn4EKddGm09loOQkxt6DFSmxEtUXkKsfQwHsVvPRzSxQRcc%2Fz9oN9T3730TEb1qVePDOSlcXE6RWaJX7TuoVLYs%2B3C4cyrNFFq6XFpM1Kql32NfCzGlQnRqJHZosGf%2By1sht6h0y7LnFO2CzImJj89xq6aYKmw8ITKbFWbc0BjgPXl3A8ENbGyf%2FhoE%2BMrU8VUZiNfXPdCV75aVnoiQA7Luy6ghTDVl4jKBjqkAW%2FHmNlGDN0OADljvVes%2FT8W1J4yf%2FNpw9JMoHEfyPrhJlWQ6SPmCbP%2FhzhsqnLmAA7EE6wBnE6o26mVPtK72PDq9JXqKIkkm2rA%2FWy0f2k3lF2o8fLyqTM03UaEZXvQ05quPg0Wd%2FSV3kgIYXyFzOkdSFadTsCeJ9AAJ1FBFk7Xzh3IL26vdQ5o1CxNCpO909Stmg5qmfSeaHI%2BdPgyXB%2FcsBrk&X-Amz-Signature=78e1664593575b1743ab6f46a013a822c68b7ffada6befe4a79aff935c457185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2KVBUJO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsXeouek7YCus7cvaoVcLdKt%2F9jANuh1HmJWNu6tVnTgIhAIlnGGKYqt5Q1voikJZm7HFLodZ9ecxh4V3HfxbaMuoXKv8DCHMQABoMNjM3NDIzMTgzODA1IgyohIPoYfS1yAD7k70q3AMGA4gB%2FiGYxS8bi8QRyXA1RNuYXHJ5ld54mPysqjZi%2FJJYGnKfQaDwf1LHHmfTGSSdFEQjLP%2F4uU27wDnLB9fGy1GoL%2B2WGHVMQBKCXhlU%2BpwxNwPTFoYegO9M7YjyDkoCQ0jo1yVwSSD8k%2BVam2hib28SsVMzmVg9VromMZLVp64azUfIRqSZi%2Bli8AArjIhURvArIqnOKIjA%2BhyNzBodaZBs2K3leH%2BQpT5UaccC4TcwXY1Tdoc0kfSQ5ASotaoABF28U57RXiamGqDOHNtAOPabRgRJGF12AI2cdL69Qu59QOKPlrmXL2m%2BdxKMrnFs6I0mpDRXxzuivmTvesgowhSHfkzrag4ioY%2BdIVG7Kbjg%2FFMpAYaGefsIHqSaufoAoECV9hmfkeiVqY95ktE2xzCt4a2F%2BMAn4EKddGm09loOQkxt6DFSmxEtUXkKsfQwHsVvPRzSxQRcc%2Fz9oN9T3730TEb1qVePDOSlcXE6RWaJX7TuoVLYs%2B3C4cyrNFFq6XFpM1Kql32NfCzGlQnRqJHZosGf%2By1sht6h0y7LnFO2CzImJj89xq6aYKmw8ITKbFWbc0BjgPXl3A8ENbGyf%2FhoE%2BMrU8VUZiNfXPdCV75aVnoiQA7Luy6ghTDVl4jKBjqkAW%2FHmNlGDN0OADljvVes%2FT8W1J4yf%2FNpw9JMoHEfyPrhJlWQ6SPmCbP%2FhzhsqnLmAA7EE6wBnE6o26mVPtK72PDq9JXqKIkkm2rA%2FWy0f2k3lF2o8fLyqTM03UaEZXvQ05quPg0Wd%2FSV3kgIYXyFzOkdSFadTsCeJ9AAJ1FBFk7Xzh3IL26vdQ5o1CxNCpO909Stmg5qmfSeaHI%2BdPgyXB%2FcsBrk&X-Amz-Signature=bbb33d7d3cd4cf7b8a3b5b04ba92b1872cd1363fd499528e566ede8968e2e00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
