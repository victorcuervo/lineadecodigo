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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJSJG7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvg52prAu4LwaqLgYeYt4ABYouHOawQI%2F4Ka%2FR0Y0ZagIhAMYdWetF85tun6VKPBrWrTF90aR6ABCc3k2UThGp8SfTKv8DCH0QABoMNjM3NDIzMTgzODA1Igx7nvbubXdbo3NdsoAq3AMUbkU8PVp1akzQi7cEOgmHVF5nD%2BOO2zwdbwXjAvmUxFX%2F0zJShKD%2B5UklMd8oObleOp9V3lTU%2Fs1RmlffJ%2F7apa0JG85rw2e4TAj8OH9Y%2BAU4QWjOE3BwmtDH43NFYCTSbofDU02p2BmmUX2oNK4I03aB%2FmOX2qL7uFC7vTjXJ9VnRp21BlCb%2FtEpeUEEqpHWVHGj%2BcjxQMk4ec2az6UhV2Lak1nC7H7h2SKv45NkA8WiyHz9uCsuoMv0yJOx5XlnV%2BJ277f8F347uaSKBRCk1ga6zawnclC65X1kvLhi1U%2FsuEVKDDJTrL%2BRd4ckDxvI7NQ1C9jhg4LiBtk7i0uDAGiXiMQV9%2FkH5AokdY0svDls4tBVlOvkJqXWifCt709D%2BVFzxiHTMa9YpC%2B8BVwlG1Z62Fyr1cNzqupJFKDSOq73egt%2Ffj6x8wsJ%2FEsQGiTjSHz40QzPMWDs5EHmxFe51ehZkSJYouuqqm3M1kmBJHboTq35nH6qZ9ummJpWMPuT2zweBNr4XH46ovW%2BU06cYuOghFET80kqFTJKadi2VxPkPR2hIoefDdSF6TGG2x1Fo13AHPyy7Duxnygdab7%2F0vGHDHcBgeVWWxd%2FeHfP%2BTPtAodYuzfCUkStOTCdqorKBjqkAR68bODTWOIMmlFo63rAiwViXGVAx6a2dLn7Zqd6jM85JKAs7tDHkhwsQRJXgRoXdGAyu4tzVz%2F1Wi2jnvhN5L%2F3XKfBBNjhxY8OqkrYdgPbRnQqe%2Fk7B48%2BcEGPnv8APbuoBnF3ocxUPHwQH9CnzZ7N8zwYLTXBNSysxFcjMp1f2leZE5%2B79nlu5kOttU4gEWJq7tYRnO70dqyuCI5UEENF5pqI&X-Amz-Signature=cd2de5bf28e3310aa8123d66b3ae4376b85181363aee8d951d9f6b57f2d0e97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJSJG7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvg52prAu4LwaqLgYeYt4ABYouHOawQI%2F4Ka%2FR0Y0ZagIhAMYdWetF85tun6VKPBrWrTF90aR6ABCc3k2UThGp8SfTKv8DCH0QABoMNjM3NDIzMTgzODA1Igx7nvbubXdbo3NdsoAq3AMUbkU8PVp1akzQi7cEOgmHVF5nD%2BOO2zwdbwXjAvmUxFX%2F0zJShKD%2B5UklMd8oObleOp9V3lTU%2Fs1RmlffJ%2F7apa0JG85rw2e4TAj8OH9Y%2BAU4QWjOE3BwmtDH43NFYCTSbofDU02p2BmmUX2oNK4I03aB%2FmOX2qL7uFC7vTjXJ9VnRp21BlCb%2FtEpeUEEqpHWVHGj%2BcjxQMk4ec2az6UhV2Lak1nC7H7h2SKv45NkA8WiyHz9uCsuoMv0yJOx5XlnV%2BJ277f8F347uaSKBRCk1ga6zawnclC65X1kvLhi1U%2FsuEVKDDJTrL%2BRd4ckDxvI7NQ1C9jhg4LiBtk7i0uDAGiXiMQV9%2FkH5AokdY0svDls4tBVlOvkJqXWifCt709D%2BVFzxiHTMa9YpC%2B8BVwlG1Z62Fyr1cNzqupJFKDSOq73egt%2Ffj6x8wsJ%2FEsQGiTjSHz40QzPMWDs5EHmxFe51ehZkSJYouuqqm3M1kmBJHboTq35nH6qZ9ummJpWMPuT2zweBNr4XH46ovW%2BU06cYuOghFET80kqFTJKadi2VxPkPR2hIoefDdSF6TGG2x1Fo13AHPyy7Duxnygdab7%2F0vGHDHcBgeVWWxd%2FeHfP%2BTPtAodYuzfCUkStOTCdqorKBjqkAR68bODTWOIMmlFo63rAiwViXGVAx6a2dLn7Zqd6jM85JKAs7tDHkhwsQRJXgRoXdGAyu4tzVz%2F1Wi2jnvhN5L%2F3XKfBBNjhxY8OqkrYdgPbRnQqe%2Fk7B48%2BcEGPnv8APbuoBnF3ocxUPHwQH9CnzZ7N8zwYLTXBNSysxFcjMp1f2leZE5%2B79nlu5kOttU4gEWJq7tYRnO70dqyuCI5UEENF5pqI&X-Amz-Signature=c2d47f759706f0e79e9a92a3de7fa900e0cd8b4f9e1ef015f340253ef8a619ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
