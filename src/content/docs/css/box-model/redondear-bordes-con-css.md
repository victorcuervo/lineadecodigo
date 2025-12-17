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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3AYZQD2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYkz%2BXnqbYTpIKhwQZtktb8NdArC3dtF%2B9veM%2BdQIHWgIgDsfZSxtHFpIVRMhx7O8IsUPNNekCEmNAonhkwFUTmUQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN69VWH4iwX3lkv3ircA0wroLNI%2BK3TQCmGO8vbAkxVs6fd%2F3SPrdamOkNoA8UDJW3VlBDEj3vFWMh9agZ6g00VaWxtv2H%2FuTZ1pcWYr5sDtykLAtpkoL9xFH2pDhzXXWq3tonHuTximQKuciLeVeNmyhmZ6U0JqzBk7D1gwo1NE92h2iFXU9yAaw1tYSBT2%2BCaww4PtPfTh68mVLvX9kLuGxCaZ5b5ZOALIqwRt02Q3xoPW7ZvoT4cgqDjKdDSBf5ITg9tqVBakJrR8n1nFIPF3SA%2BpoA0iGft2xwEqlFXznzBtN1iVoVuPY2PGnxUvQVdGezvJkP237Ea2wkLhnUTjqREKEYE%2BceRR7W%2BuC2vcr3v67HnLm2pTk33YK9D9OcW1s5NfYE0hRrYi9TzlpzgkuMECAYaOW3dInz45vgaHU7gF0OvGa5iWPnbOB%2Fh5341uwGem1baNo4fDcQShFGrpGxmxFtKpnhaL7wTbXvxE5SBq6d0KPhJ0IF6H1z%2FVWv9Fc9X01KuMYSGxTfL6ljnil5vhyd3ppjA27K0Bz%2B7pFIcHa6MY4xZE8hEGlk%2B7uer4ILfA%2BDEsymI0YMkYPclc7rXssGfMzoRaSMS%2BrpW5Hzk6hi2vPMFsbp6iUS9gawcAZVBfj5FVC6GMPL%2FisoGOqUBdEZ7Vst2JI4yqcT8OOJ36glv13kwrkM13VczUro9RtduEXw%2Fgi%2FvZq56%2BeizHFwqzQrHrx65X60VxjRGwX7kCAoCHVmPioOwplZBo6qJni1fK%2B2RDz3noVQhvMXbeadoBj7TbfO3P8cNmN%2BNgIl%2BRxyDUxzC2ggwYJTi0PLTTRUDJOrEMfxzLEppW7nwi16cVMk5IN0QxxhZntEiygAZ4sDr%2BmoN&X-Amz-Signature=f5d5cc8ad3ac021f5cae83406e8c42eafa27b4eb1f5da3f62ebf12c60aa7eed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3AYZQD2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYkz%2BXnqbYTpIKhwQZtktb8NdArC3dtF%2B9veM%2BdQIHWgIgDsfZSxtHFpIVRMhx7O8IsUPNNekCEmNAonhkwFUTmUQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN69VWH4iwX3lkv3ircA0wroLNI%2BK3TQCmGO8vbAkxVs6fd%2F3SPrdamOkNoA8UDJW3VlBDEj3vFWMh9agZ6g00VaWxtv2H%2FuTZ1pcWYr5sDtykLAtpkoL9xFH2pDhzXXWq3tonHuTximQKuciLeVeNmyhmZ6U0JqzBk7D1gwo1NE92h2iFXU9yAaw1tYSBT2%2BCaww4PtPfTh68mVLvX9kLuGxCaZ5b5ZOALIqwRt02Q3xoPW7ZvoT4cgqDjKdDSBf5ITg9tqVBakJrR8n1nFIPF3SA%2BpoA0iGft2xwEqlFXznzBtN1iVoVuPY2PGnxUvQVdGezvJkP237Ea2wkLhnUTjqREKEYE%2BceRR7W%2BuC2vcr3v67HnLm2pTk33YK9D9OcW1s5NfYE0hRrYi9TzlpzgkuMECAYaOW3dInz45vgaHU7gF0OvGa5iWPnbOB%2Fh5341uwGem1baNo4fDcQShFGrpGxmxFtKpnhaL7wTbXvxE5SBq6d0KPhJ0IF6H1z%2FVWv9Fc9X01KuMYSGxTfL6ljnil5vhyd3ppjA27K0Bz%2B7pFIcHa6MY4xZE8hEGlk%2B7uer4ILfA%2BDEsymI0YMkYPclc7rXssGfMzoRaSMS%2BrpW5Hzk6hi2vPMFsbp6iUS9gawcAZVBfj5FVC6GMPL%2FisoGOqUBdEZ7Vst2JI4yqcT8OOJ36glv13kwrkM13VczUro9RtduEXw%2Fgi%2FvZq56%2BeizHFwqzQrHrx65X60VxjRGwX7kCAoCHVmPioOwplZBo6qJni1fK%2B2RDz3noVQhvMXbeadoBj7TbfO3P8cNmN%2BNgIl%2BRxyDUxzC2ggwYJTi0PLTTRUDJOrEMfxzLEppW7nwi16cVMk5IN0QxxhZntEiygAZ4sDr%2BmoN&X-Amz-Signature=d6345b806702a68ff85389a11535f3792e65833245bb7e0e71ef75dddd61222e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
