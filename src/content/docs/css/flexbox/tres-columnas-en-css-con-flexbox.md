---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R342APT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdDIZ6ff60Fu6GT8ijreTvXbQmpUDSwwPtqIBCRHuPkwIgQD81fHi8jcYT8t7TUW7Lt4DnSHtNmniiV2oKAciYeB4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7vELDbRX5YTedXaSrcAwZA%2BUB2V%2FHyuCXVmgWX6Crxl76kQOYjXP7bsgSxV3Zk6pGsLVfgIrl0QwB7u2H%2BgJmU46v99OvCRLzIQjclwWYS57czqBqkzMVxhuQsyZUTEDgb5Sf9QbuMfpQQP%2FUyRX48gQbnhxbKQdsd%2FFtdBA7Oca8RUZHms7IxD7xNbCPWAfray2xi16CfZqVWqLnLPwr70aJQZDmRAnx5Q%2FZudcuKd%2BZQr1m5VoiAmwt3ZRuJmjmOZUlJin9b5rqGgMltB9JSejUf9fnftYIuwKUO6Nsi5yuZE5tnyv%2B%2BenUQAYoEf6n%2B2w%2BmYMoLXOYCYsJoyDmo54FXaAwJQIdZ3LI7NRSnE8opz%2BS5Gee2kRonESG86PmuDhrToXQbpJX4%2FojhxCO37GtfPsKA1TSbVFOLyOCjoyj3jLu7NQg7oUjoFhS5XwPOL4iAOPNkFfg4zzuvI05lxfjndiy0ttfG8QnRJImR0rerVeCja%2FFDP%2FiAGZXXddeaa2drr4QcxRZEdYtka3C2E1MhqOSRVxM4z3%2FO3u5rEoiTURLz76sGMDQiC2Watq5k2Hv%2BZaQvOPQKKRM7NVyiWgJx18Sg%2BuFZGLU0vjgmvmwtR4ScRh24DbPL4q1D8vCZOYAIVCuEUpG8ML790skGOqUBqsXTJ1JLMCB4KwQZSlHn7wYujsrMpDpjQKfUVNacfj86grKEZqYP%2B1o2pKDcf8hcz7Zl5EWH%2B29PpBeBIv7CTUmcw%2F7iN8gabMRlkWod5dRSlMT5pkAJXO4zoESjUj9XY6TGTGLP6xKe7wwm0Bz2hrMuBjXeI7fD5XsDegHyv848YXKVafgMdBpWo2mpHv%2B0bHP2y3Yt0xZF18p9TDeUjtu9piii&X-Amz-Signature=bdadee62beafaf96ccf8151548a60e08856e65ad7c64a5e2daa4840f285f1452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R342APT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdDIZ6ff60Fu6GT8ijreTvXbQmpUDSwwPtqIBCRHuPkwIgQD81fHi8jcYT8t7TUW7Lt4DnSHtNmniiV2oKAciYeB4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7vELDbRX5YTedXaSrcAwZA%2BUB2V%2FHyuCXVmgWX6Crxl76kQOYjXP7bsgSxV3Zk6pGsLVfgIrl0QwB7u2H%2BgJmU46v99OvCRLzIQjclwWYS57czqBqkzMVxhuQsyZUTEDgb5Sf9QbuMfpQQP%2FUyRX48gQbnhxbKQdsd%2FFtdBA7Oca8RUZHms7IxD7xNbCPWAfray2xi16CfZqVWqLnLPwr70aJQZDmRAnx5Q%2FZudcuKd%2BZQr1m5VoiAmwt3ZRuJmjmOZUlJin9b5rqGgMltB9JSejUf9fnftYIuwKUO6Nsi5yuZE5tnyv%2B%2BenUQAYoEf6n%2B2w%2BmYMoLXOYCYsJoyDmo54FXaAwJQIdZ3LI7NRSnE8opz%2BS5Gee2kRonESG86PmuDhrToXQbpJX4%2FojhxCO37GtfPsKA1TSbVFOLyOCjoyj3jLu7NQg7oUjoFhS5XwPOL4iAOPNkFfg4zzuvI05lxfjndiy0ttfG8QnRJImR0rerVeCja%2FFDP%2FiAGZXXddeaa2drr4QcxRZEdYtka3C2E1MhqOSRVxM4z3%2FO3u5rEoiTURLz76sGMDQiC2Watq5k2Hv%2BZaQvOPQKKRM7NVyiWgJx18Sg%2BuFZGLU0vjgmvmwtR4ScRh24DbPL4q1D8vCZOYAIVCuEUpG8ML790skGOqUBqsXTJ1JLMCB4KwQZSlHn7wYujsrMpDpjQKfUVNacfj86grKEZqYP%2B1o2pKDcf8hcz7Zl5EWH%2B29PpBeBIv7CTUmcw%2F7iN8gabMRlkWod5dRSlMT5pkAJXO4zoESjUj9XY6TGTGLP6xKe7wwm0Bz2hrMuBjXeI7fD5XsDegHyv848YXKVafgMdBpWo2mpHv%2B0bHP2y3Yt0xZF18p9TDeUjtu9piii&X-Amz-Signature=7d51afbe0d8b46d8441f2ec812fa4b94dff0a577278a05a7b98475e0ec65a343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

