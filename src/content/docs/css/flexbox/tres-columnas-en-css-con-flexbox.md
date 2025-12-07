---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NSZOFM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZWxidM9CW%2BSNpcZLnS0lZQjEZxnXC1REAJoVeww5rzAiEA3cPXA6wpq7nP72jvf0eh7fte82XPp2bztE6Wd2kb3moqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCqC8O%2FDOIXtNDnsCrcA7yIFAqQSn0eR4eQ1JvKxUl4Q%2BTXRRZT7dPQTJVpS1tVD1yseJQUKX%2FpCrmYg%2BqFmsLr7TPtmgL5Sed1SO6X3cwvubI7%2BQLfFU1rdVGp7AoMy0z%2F0lTBoRgJxYSuj2GA3L7Jm0Xgf1d0ca%2F%2BdEKoI7OYRUMl%2F1MM35YENTMq9qQKEZ75UIDZRfL7RHVtpE3vsugCpsHX9XPF7%2FRoMi1HBb%2F4zuuIWvmMarM9nMjIhOioiLGcgOqn71RxMXgzTl%2FxlM%2BD0vrDchGKmLZKRkLkGYJ4WIlxLaLnVavOCPS1hi5t2A3%2FPatNjZKNxn2tJl3N8LGxmNvzKyb6%2FPs3WttHENH85Agbl1HXW2RospUNW7BUBPXQ%2F0KFFd7csm1yVwe%2F6u8J%2FomNSKmwwENiDRUUTINxTZva4iVbFeWzI5S6OdiLsi%2BUnukAGKoogD8mNXlvnN5yfWQ3draMkhmXCL0Ca3%2BBTbnDx8vxkZZjezi9pBO7jnA89mG%2FEiWQxldJpnkCyX8VB6OhPvWgI%2BjYGOMrMS0mSgajxUNmU%2Be2WawDedJQh3G4rVq9GTpnupUlM4V91g3YbeEWobnoOfCgaT3uVi8yKDpfsNB3VRwqSJyoY%2FuMpHBXzcD6LUcXFgMjMIXH18kGOqUB%2BPps1049fInq%2B2ADjfBWvlNMfjYnfMlB%2Bu0Kb7toLc82d8pBy%2FTMcxVED7Ey9ldowkD2RnZ8vNXeN8oFwPhnB6FYZg44XB6MEwJKM9NeUnutsxirv3fHDxd%2FRU17lbXP9Qh4CtOdYcXfs9snpr4yn31VKeTkrWuCusJtc2dcrj%2B3pRzDFzHGstq9dYADcfiPJygLYLOWmSIYlKExnjIQqjWVeuVo&X-Amz-Signature=fa43c9e61305cc73c1e97ec1b8735a1035e033b31b52bc5c4d1208a7a75d5292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NSZOFM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZWxidM9CW%2BSNpcZLnS0lZQjEZxnXC1REAJoVeww5rzAiEA3cPXA6wpq7nP72jvf0eh7fte82XPp2bztE6Wd2kb3moqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCqC8O%2FDOIXtNDnsCrcA7yIFAqQSn0eR4eQ1JvKxUl4Q%2BTXRRZT7dPQTJVpS1tVD1yseJQUKX%2FpCrmYg%2BqFmsLr7TPtmgL5Sed1SO6X3cwvubI7%2BQLfFU1rdVGp7AoMy0z%2F0lTBoRgJxYSuj2GA3L7Jm0Xgf1d0ca%2F%2BdEKoI7OYRUMl%2F1MM35YENTMq9qQKEZ75UIDZRfL7RHVtpE3vsugCpsHX9XPF7%2FRoMi1HBb%2F4zuuIWvmMarM9nMjIhOioiLGcgOqn71RxMXgzTl%2FxlM%2BD0vrDchGKmLZKRkLkGYJ4WIlxLaLnVavOCPS1hi5t2A3%2FPatNjZKNxn2tJl3N8LGxmNvzKyb6%2FPs3WttHENH85Agbl1HXW2RospUNW7BUBPXQ%2F0KFFd7csm1yVwe%2F6u8J%2FomNSKmwwENiDRUUTINxTZva4iVbFeWzI5S6OdiLsi%2BUnukAGKoogD8mNXlvnN5yfWQ3draMkhmXCL0Ca3%2BBTbnDx8vxkZZjezi9pBO7jnA89mG%2FEiWQxldJpnkCyX8VB6OhPvWgI%2BjYGOMrMS0mSgajxUNmU%2Be2WawDedJQh3G4rVq9GTpnupUlM4V91g3YbeEWobnoOfCgaT3uVi8yKDpfsNB3VRwqSJyoY%2FuMpHBXzcD6LUcXFgMjMIXH18kGOqUB%2BPps1049fInq%2B2ADjfBWvlNMfjYnfMlB%2Bu0Kb7toLc82d8pBy%2FTMcxVED7Ey9ldowkD2RnZ8vNXeN8oFwPhnB6FYZg44XB6MEwJKM9NeUnutsxirv3fHDxd%2FRU17lbXP9Qh4CtOdYcXfs9snpr4yn31VKeTkrWuCusJtc2dcrj%2B3pRzDFzHGstq9dYADcfiPJygLYLOWmSIYlKExnjIQqjWVeuVo&X-Amz-Signature=9536db979c44f7525e3bf7fda453586f3574009d35365a95bf4788592d8121a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

