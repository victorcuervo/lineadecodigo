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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFUOJ2TK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHtxKALSPHw4eKynnOm2L3KX4Ke3EPPP96ronRTXf%2FBcAiEArwTSAhEYXCz0VzDELx905LlWH86a8pO2vV53dNCtAoYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLLTa%2FI%2BoybiGqdCPircAwfcgM9enDaA%2FjrZJztnKTn7YVGEmSBSqN%2BHdnEb0QDoTV3k8g1h3gk2RqLnuP9zfCaB9N%2FgbPip8zIHlsEEeP%2B34yfeyJQrJ%2B0CUTheu%2Faquro4oOohboRFSrXSI1tvYgtFXhJJW5%2ByWvW%2BTCx8ZTpaDd69gYBhLuSvUDtrq4QrulsH87PdRI4qDTEMfNx8sWD9JxXnE3%2BxfR4%2F%2FYgaYCOewi3XMhYGbXFQ4jCgsvDzpQV1DnGAst3On1p2mxEdXbSV%2FmKqpJ6OQBgIIzTQalSc2yUqKcQ%2FcekaueXC79bXYVil61uaoUFDZ8qKYlS0J6iJs%2FhnokV48VOX1%2FrqarxcvhOdHUc4z1kTNSYowIOTtPfnk1fS86hsa5Kx1QFjPR0JjSjDs%2FRd4oA3ZqGTeJHcem9zEpDrXvvopTl33%2FddA%2FXAiBitPBDfE2uLQqDmTXMzwdmZQWi4bwQLZuRNUvRBLNcLjNCsTPByCkKQoWGsvIoG2Oc4H73JP4gWQD03%2BGVvK5yvrXuKy4xvGsKwbiJB59cIMpmuxfN54oAPclRr7DqlYUkbY1REeRrAAwGmyJvBSRjWNj7VSqQYioXyf6qJ4YOGBbKh14ygeSE4SNc2uid01%2FS6D9eOumi5MIuRxMkGOqUB5b2fJYG1wOusfBTzhIU2wCIJNpai76vkjArAcIbBHJIQMVSDrUbN3iNbi%2FaCtHCj1n1bZ1qiyYzhrYau9yRgPLAeLsQe5h%2FilEZPf9YOIvWxmncdabaVeTeVFo7pz5yRuztokgwmy8vbIf1OP1FlRbu0jLsF5SjPCdZjjw8elOyJUijx6I%2FXMsy0TBQWisjoW5FkNoEcMwqGpgJqi4nBTgdewOlB&X-Amz-Signature=fff345e3f38b2e5607e2871721025763a942f265c66e02a39de59a3298779b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFUOJ2TK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHtxKALSPHw4eKynnOm2L3KX4Ke3EPPP96ronRTXf%2FBcAiEArwTSAhEYXCz0VzDELx905LlWH86a8pO2vV53dNCtAoYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLLTa%2FI%2BoybiGqdCPircAwfcgM9enDaA%2FjrZJztnKTn7YVGEmSBSqN%2BHdnEb0QDoTV3k8g1h3gk2RqLnuP9zfCaB9N%2FgbPip8zIHlsEEeP%2B34yfeyJQrJ%2B0CUTheu%2Faquro4oOohboRFSrXSI1tvYgtFXhJJW5%2ByWvW%2BTCx8ZTpaDd69gYBhLuSvUDtrq4QrulsH87PdRI4qDTEMfNx8sWD9JxXnE3%2BxfR4%2F%2FYgaYCOewi3XMhYGbXFQ4jCgsvDzpQV1DnGAst3On1p2mxEdXbSV%2FmKqpJ6OQBgIIzTQalSc2yUqKcQ%2FcekaueXC79bXYVil61uaoUFDZ8qKYlS0J6iJs%2FhnokV48VOX1%2FrqarxcvhOdHUc4z1kTNSYowIOTtPfnk1fS86hsa5Kx1QFjPR0JjSjDs%2FRd4oA3ZqGTeJHcem9zEpDrXvvopTl33%2FddA%2FXAiBitPBDfE2uLQqDmTXMzwdmZQWi4bwQLZuRNUvRBLNcLjNCsTPByCkKQoWGsvIoG2Oc4H73JP4gWQD03%2BGVvK5yvrXuKy4xvGsKwbiJB59cIMpmuxfN54oAPclRr7DqlYUkbY1REeRrAAwGmyJvBSRjWNj7VSqQYioXyf6qJ4YOGBbKh14ygeSE4SNc2uid01%2FS6D9eOumi5MIuRxMkGOqUB5b2fJYG1wOusfBTzhIU2wCIJNpai76vkjArAcIbBHJIQMVSDrUbN3iNbi%2FaCtHCj1n1bZ1qiyYzhrYau9yRgPLAeLsQe5h%2FilEZPf9YOIvWxmncdabaVeTeVFo7pz5yRuztokgwmy8vbIf1OP1FlRbu0jLsF5SjPCdZjjw8elOyJUijx6I%2FXMsy0TBQWisjoW5FkNoEcMwqGpgJqi4nBTgdewOlB&X-Amz-Signature=e3e7db4490af27f060c7dd00a6839859f861083dab45bd6e09aef8025f20d7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
