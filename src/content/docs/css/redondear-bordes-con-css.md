---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYERSW34%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC66PmB91mjtifgahplF8tLzuj505%2FiipU8uqTHPYFNFQIgUZAMkMwRcZlaR%2B4lJ0FO9MHIqjruN73kHf1CJsT1HdYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhxFqPW0KoRxtQC8yrcA39KP7MHiBJdU7uMUA66fLwGNzwvIFlJKbpjxlpvwaom%2Bbq8Fk%2F7h%2BMUXeMYpi6Ih6lNJZnFR%2FrxeP9S1rhMhBtKpbzAUFLbjfxLvvxk%2FlkophukFXaAdT5VLzde1%2BhAWfSF8x%2BgwQ%2FAajGHBGbbIyK%2BGo5wKA6O79PzGmYBlcYV5Kayp8R7cgakLahC9XejywHzTTfqHwqWXHpiEWLH1m9AgBv8P0%2FQbypkLt6BRuBcZtYTqpoG19fhTxIYrEv9u9sZ5jBymf%2Bv48q53yfugW1xr1pv5gdt8jycQTxrg78zgjSrqt%2Bqs2buEPfXFjnVHyB5jl%2BaeIbAHHYit0wE0mk%2BxGElw6WylAqeDfvwcFpfEOEtBLFHvfq8yU%2FeUOrYJxhvFWkfZJHSh6CUDQfmyTpfq8AtKo0Rl1o3RFUL6%2FE7P4Ve8xOWG8%2BIPW6eDUGKVNa246Km2gVAEwayl72X7UVNUl6CGxKSNpd29jLHGiI84oHbMJivN2dGcXLAvEZGB5J9Y4UHORSXzudhTb%2FJ3rXZwBjwgTzWFWGyrx0NC3zXGPW8LtzAIgZ3VYP3NbA6ijOBJ%2FG2OxCHDPC%2Fjl1Np0t6O0rRaCnubnQaJC98bEKTcDL4oAeFaX1DTsGCMM%2B71skGOqUBQWvx5n0iMdkC9AhOlNXP1MqBSldSEqD%2BEoIPF6X7ntPhBm2XoQ%2F6yiKG23%2BoeN0q3W37HLM98WE7EpWeVTrvK2SF%2FoRZrWJ6E%2BosiFM6i7qajVjPsN4klx1PLbjmyeuXVINWhM%2B%2BxQp45ue%2BbLzPd%2FRgOX1%2Bvk56dL5P23vMkeodwKRay5QIklrffRT5xEbvEAAIKK2x%2BUrY36bFkjyoTNSShrgA&X-Amz-Signature=7c45564d84f226a28e7a6eeeed5c95f67f95c671b743881c6b6ff44ffbbdbb41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYERSW34%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC66PmB91mjtifgahplF8tLzuj505%2FiipU8uqTHPYFNFQIgUZAMkMwRcZlaR%2B4lJ0FO9MHIqjruN73kHf1CJsT1HdYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhxFqPW0KoRxtQC8yrcA39KP7MHiBJdU7uMUA66fLwGNzwvIFlJKbpjxlpvwaom%2Bbq8Fk%2F7h%2BMUXeMYpi6Ih6lNJZnFR%2FrxeP9S1rhMhBtKpbzAUFLbjfxLvvxk%2FlkophukFXaAdT5VLzde1%2BhAWfSF8x%2BgwQ%2FAajGHBGbbIyK%2BGo5wKA6O79PzGmYBlcYV5Kayp8R7cgakLahC9XejywHzTTfqHwqWXHpiEWLH1m9AgBv8P0%2FQbypkLt6BRuBcZtYTqpoG19fhTxIYrEv9u9sZ5jBymf%2Bv48q53yfugW1xr1pv5gdt8jycQTxrg78zgjSrqt%2Bqs2buEPfXFjnVHyB5jl%2BaeIbAHHYit0wE0mk%2BxGElw6WylAqeDfvwcFpfEOEtBLFHvfq8yU%2FeUOrYJxhvFWkfZJHSh6CUDQfmyTpfq8AtKo0Rl1o3RFUL6%2FE7P4Ve8xOWG8%2BIPW6eDUGKVNa246Km2gVAEwayl72X7UVNUl6CGxKSNpd29jLHGiI84oHbMJivN2dGcXLAvEZGB5J9Y4UHORSXzudhTb%2FJ3rXZwBjwgTzWFWGyrx0NC3zXGPW8LtzAIgZ3VYP3NbA6ijOBJ%2FG2OxCHDPC%2Fjl1Np0t6O0rRaCnubnQaJC98bEKTcDL4oAeFaX1DTsGCMM%2B71skGOqUBQWvx5n0iMdkC9AhOlNXP1MqBSldSEqD%2BEoIPF6X7ntPhBm2XoQ%2F6yiKG23%2BoeN0q3W37HLM98WE7EpWeVTrvK2SF%2FoRZrWJ6E%2BosiFM6i7qajVjPsN4klx1PLbjmyeuXVINWhM%2B%2BxQp45ue%2BbLzPd%2FRgOX1%2Bvk56dL5P23vMkeodwKRay5QIklrffRT5xEbvEAAIKK2x%2BUrY36bFkjyoTNSShrgA&X-Amz-Signature=99dfa4a426b42b47e698a831ed564ac9359bc33c9cd707d4fa1de658bcdae0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
