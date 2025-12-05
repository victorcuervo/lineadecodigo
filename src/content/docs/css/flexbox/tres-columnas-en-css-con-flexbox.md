---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674P6FQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPlLizVW3sMYxxVi4j%2FmwM7defFAJJ2UCvhjWX32f%2B5AIgffuxFU4JA1kiU37CTiSl6IO3Fm65tQSnDwIml0kcpugq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEHOMAKQeiey6OxlXSrcA69rdSQfX4YvXUs0J5LNlEOUnmZWIJnfAJCoAqIO44iQkLg7r%2FAUc3kyVgLKjdpLIPLabQw1hPuL%2F1HXUucToOrpfrwB8YoyIiWNrx6zzs%2Bga5ZtcRweeobMSTTqojkXHWNjUl36E5jhiBAJuCrJknVmPQHgW35ylYSejaXZJIppmDCuUYsqvYz%2F%2FFlkEr8kJRHvqP68ZTKEO97RuP81%2BhFVYcQWHtfoJLhq6XQl8TDsFTLKTJ1PYzwVXGoZoiRSj9X%2Fcibs2yYgr7IRmV5YO18N1vjSMZG5fe5rfV5Tb%2F%2FLX09bSx4Cz9LXxYqu9wWRuEklmKvhDstJ9SIrdtdqmeiVHNOKZeikAULMPu4xLeSzVY2xRp%2BHoo9GX6m2Fwh3khJhSRcCkkFE%2F7smUrLUBgJVO7tn3agZi7eJBm3%2BIEtHJ1YzmzzrOQInim0vvJbFa0u40CUAmjLLfDtGC2blK1e4RSaSw6j%2FWBeFCHjrwyrEI7H49D7jrSNtMx5ISOgghAPYz2ur6tLcPDwWItQrftHcgLKx4N%2BxFzwpnnQvPFKszjWcfAJOORflEozSV17RwNrCgbIzSaIhK7%2Fth9Dv%2BQAwvu%2BHG%2FMJtFqOVa%2FVHStQfiqxZ8XVInC5l475MMSHzckGOqUB7GSPwhya0eoTdYuTFvljIysZZvDWDtqwAqwXnvWZ1%2BMb%2FnWgm9gFI4eqIW7r9aqp%2B7dWM7m4wdLW6YD0Tcu2Q0sPl3HLv1UTbW7KcZf23K5WgLuseyX6DDCVWfTthTI1cLplfz6a8GKaVnHCUEyCC0c33YwtbrUkWMlA6fAlvKwtwc8j7rGudJxa8ZkOQSQK1x%2FRM4nU8kMykpgcBmMdFUh9c48e&X-Amz-Signature=bcbe64dc985e34e0c16b9af7f5f1101bffd3fdf9f516f5e704a5f1bedf28e961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674P6FQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPlLizVW3sMYxxVi4j%2FmwM7defFAJJ2UCvhjWX32f%2B5AIgffuxFU4JA1kiU37CTiSl6IO3Fm65tQSnDwIml0kcpugq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEHOMAKQeiey6OxlXSrcA69rdSQfX4YvXUs0J5LNlEOUnmZWIJnfAJCoAqIO44iQkLg7r%2FAUc3kyVgLKjdpLIPLabQw1hPuL%2F1HXUucToOrpfrwB8YoyIiWNrx6zzs%2Bga5ZtcRweeobMSTTqojkXHWNjUl36E5jhiBAJuCrJknVmPQHgW35ylYSejaXZJIppmDCuUYsqvYz%2F%2FFlkEr8kJRHvqP68ZTKEO97RuP81%2BhFVYcQWHtfoJLhq6XQl8TDsFTLKTJ1PYzwVXGoZoiRSj9X%2Fcibs2yYgr7IRmV5YO18N1vjSMZG5fe5rfV5Tb%2F%2FLX09bSx4Cz9LXxYqu9wWRuEklmKvhDstJ9SIrdtdqmeiVHNOKZeikAULMPu4xLeSzVY2xRp%2BHoo9GX6m2Fwh3khJhSRcCkkFE%2F7smUrLUBgJVO7tn3agZi7eJBm3%2BIEtHJ1YzmzzrOQInim0vvJbFa0u40CUAmjLLfDtGC2blK1e4RSaSw6j%2FWBeFCHjrwyrEI7H49D7jrSNtMx5ISOgghAPYz2ur6tLcPDwWItQrftHcgLKx4N%2BxFzwpnnQvPFKszjWcfAJOORflEozSV17RwNrCgbIzSaIhK7%2Fth9Dv%2BQAwvu%2BHG%2FMJtFqOVa%2FVHStQfiqxZ8XVInC5l475MMSHzckGOqUB7GSPwhya0eoTdYuTFvljIysZZvDWDtqwAqwXnvWZ1%2BMb%2FnWgm9gFI4eqIW7r9aqp%2B7dWM7m4wdLW6YD0Tcu2Q0sPl3HLv1UTbW7KcZf23K5WgLuseyX6DDCVWfTthTI1cLplfz6a8GKaVnHCUEyCC0c33YwtbrUkWMlA6fAlvKwtwc8j7rGudJxa8ZkOQSQK1x%2FRM4nU8kMykpgcBmMdFUh9c48e&X-Amz-Signature=df70240c732179ed95203226a88b2343cdfe72c8cb47c18655471e2594fe55b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

