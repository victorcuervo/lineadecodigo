---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YG5YMLY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGitHv8Ay5rA8VmmerAdkOZ1r118%2BVeQS4%2Fobm9heIBmAiEAgAHqi76ngdzzgHsj8wMmJnjRnle5XAuw4MP2Tbg80B4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN4ic7ngt9HcGSYBgCrcA8iQ2WHZ3jfLzFI8whRAOrVK4UGDyu9b2ixygw3hIMqFokJexfnjPof2Xok2g88%2BY%2B5dhBukYABf3dm7iqboQwXezwmnpVjcXygwCn5lvPh4b4w1ZRHR4QV34kph1guomFdlYLqPMI5U5MOzXih0WVt7ocWCYN6TkEDQevk2RgStvetjejcDPojUQLT%2BuYQn%2FR%2FVMVW82baka4iNVbpRkTokEvLKsbRCe78vlE2khnoR1V2WSRKztVs2tI5X695ZbmCpC3TYn%2FonXosKhtbOlf6NLQfnWA1Y1nr%2F89agOSzQ94CXMF8naD%2FFgP3%2FTAFOXWOSEtpjKbOLroRM2lLkFX4VPNQhwana2JPNlTLCXWSNvgAreCqYAkfSPXNZGHZIa9VqxZZguZAbmG6pn3sVEraqqlRiBdX1zy97qpQMD15e5d9brlgATWyHcnZiHYC3ZVm8uraPxVtsLgpJJCFZxf15E5et0itlAN126RkD93Ut5tTvWvmxdkD1NQpuw9MbXeJQih1N6bJHBZui5iT6J29MkMak47ga5yBBM32fXKV2JuuhtVDJysKRE2AiUdTW2cWlraT42nA9HFWhsYSbHSEhODP7UiW99jZ2ESDYIqKfZKz6xytPpsk9hGT4MKjUyskGOqUB77HhN2XeyT8iah3YvvbAtb5kkLSCRsjO9f6s%2FursT6u37zi6rmjIW1j%2Bw9PdltslhWkNRAxY%2BnavRTejOVFD2krYlahfiVR8MUbrTgqogroeu7kGogNt%2BTOC4vOn%2FSUnA6FZ7PP0ql%2FfIkYSI1%2B6jT4OY84oVhbd5Ay3GufQ3WHeyr2HAH7r7yn8PR5FMtNHMovi9ITGhTYoUvfzA0%2BOPD4p0nFS&X-Amz-Signature=503459ad66a3d8a3ff2f2e0f511ab701f95a631e1d21c6562b7141b4a41b2975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YG5YMLY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGitHv8Ay5rA8VmmerAdkOZ1r118%2BVeQS4%2Fobm9heIBmAiEAgAHqi76ngdzzgHsj8wMmJnjRnle5XAuw4MP2Tbg80B4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN4ic7ngt9HcGSYBgCrcA8iQ2WHZ3jfLzFI8whRAOrVK4UGDyu9b2ixygw3hIMqFokJexfnjPof2Xok2g88%2BY%2B5dhBukYABf3dm7iqboQwXezwmnpVjcXygwCn5lvPh4b4w1ZRHR4QV34kph1guomFdlYLqPMI5U5MOzXih0WVt7ocWCYN6TkEDQevk2RgStvetjejcDPojUQLT%2BuYQn%2FR%2FVMVW82baka4iNVbpRkTokEvLKsbRCe78vlE2khnoR1V2WSRKztVs2tI5X695ZbmCpC3TYn%2FonXosKhtbOlf6NLQfnWA1Y1nr%2F89agOSzQ94CXMF8naD%2FFgP3%2FTAFOXWOSEtpjKbOLroRM2lLkFX4VPNQhwana2JPNlTLCXWSNvgAreCqYAkfSPXNZGHZIa9VqxZZguZAbmG6pn3sVEraqqlRiBdX1zy97qpQMD15e5d9brlgATWyHcnZiHYC3ZVm8uraPxVtsLgpJJCFZxf15E5et0itlAN126RkD93Ut5tTvWvmxdkD1NQpuw9MbXeJQih1N6bJHBZui5iT6J29MkMak47ga5yBBM32fXKV2JuuhtVDJysKRE2AiUdTW2cWlraT42nA9HFWhsYSbHSEhODP7UiW99jZ2ESDYIqKfZKz6xytPpsk9hGT4MKjUyskGOqUB77HhN2XeyT8iah3YvvbAtb5kkLSCRsjO9f6s%2FursT6u37zi6rmjIW1j%2Bw9PdltslhWkNRAxY%2BnavRTejOVFD2krYlahfiVR8MUbrTgqogroeu7kGogNt%2BTOC4vOn%2FSUnA6FZ7PP0ql%2FfIkYSI1%2B6jT4OY84oVhbd5Ay3GufQ3WHeyr2HAH7r7yn8PR5FMtNHMovi9ITGhTYoUvfzA0%2BOPD4p0nFS&X-Amz-Signature=3c0ba43a600e6ca1179b8054fd235bc2b45507e48c63ab6467dbc23a2cc4eba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

