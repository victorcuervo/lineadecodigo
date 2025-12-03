---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NOAVML7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAVmPUF%2BojjXVV1XrILtOM0hnY123kVNOK62KbGGQNkvAiEApXJ3dfWnuGESs5r61xjNmg40ZkIQJAxM%2BqZD1ABuEycq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNB7codwJV5iTHaDVyrcA0OIuSetGbgS9Gw6MSRmnabRJCB54cBRCV0ISi2mAa7FZHiypLrRqaZVxzxCiydaBOLUCkoqeMHtWCVuj0HYsEkJS4lGJKNZAT7g11gbeT6ZE%2BxHRG1IpXS%2BS2jIKdlAaWi5InIpHx%2FhWOPZYUm4WlWuDmbIZewCgBndNH13NpAY%2BJr%2FMKsKkV6%2BnKoDQJJsQCVQJ1KPJn7l5t%2B0nxzSHTNRMtmcOPngKj4c5xTZKikHdsstoJB58FXrpn%2FRxA9RMfAUhpRRMDzUWF1uK3kLlZCBTOBFM5mjSfzcSTmabhLoRawhZSt6pOHAhcsS0qXS2xGCzN6J8t47VdiaDSHtqKe8r7DCVKOPslvEGCGln4xOetVf82bZ7tzJ2GFveHhwvgT%2Fc93TMVBELEBykLzpEX7j4KlIPTXA26b3hpeIboPHvIl6KipQEuqHwaPma6Pll5onFfJ7ux87CydqdEMMAGf82SZBrdJqvOr8WBDOn4b8JWdonpesrntIkNbGRrKORY1N1P36N7zWIZ7AJ3jbl3bizqiYjYFwovRHIm4bOE0UK53SNCCrVIIy58IcEIBEtjP66IAOi40eRnEt45mpsFaSECdOgcPcT6h98FAxSOI27f%2BALqcuPVCw9eHcMPa9wskGOqUBWGISn8nhl1Pdwjo18P35mZz2b0ssFCAE4zYN1tvmioBZAjXV4uv7UU0wSiP4eTEs6JTlZLozqpWI5qGXmq6rO%2FuCFuiMmhaloRRwhSTVZz%2F4N5INFSHnTiVANIr3DoYqutmDW04zAhEPgDgrs8fqaEyUtCNA7KLIUgZst3c3ZB46vmbbfozDMSnbbuD2j7parGEuyZBXKRRoxzFHzgO5z5KGdp1B&X-Amz-Signature=d5a52699035757a71e42e53dab594c469f13c749cb8f08755f6c78c1681b07fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NOAVML7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAVmPUF%2BojjXVV1XrILtOM0hnY123kVNOK62KbGGQNkvAiEApXJ3dfWnuGESs5r61xjNmg40ZkIQJAxM%2BqZD1ABuEycq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNB7codwJV5iTHaDVyrcA0OIuSetGbgS9Gw6MSRmnabRJCB54cBRCV0ISi2mAa7FZHiypLrRqaZVxzxCiydaBOLUCkoqeMHtWCVuj0HYsEkJS4lGJKNZAT7g11gbeT6ZE%2BxHRG1IpXS%2BS2jIKdlAaWi5InIpHx%2FhWOPZYUm4WlWuDmbIZewCgBndNH13NpAY%2BJr%2FMKsKkV6%2BnKoDQJJsQCVQJ1KPJn7l5t%2B0nxzSHTNRMtmcOPngKj4c5xTZKikHdsstoJB58FXrpn%2FRxA9RMfAUhpRRMDzUWF1uK3kLlZCBTOBFM5mjSfzcSTmabhLoRawhZSt6pOHAhcsS0qXS2xGCzN6J8t47VdiaDSHtqKe8r7DCVKOPslvEGCGln4xOetVf82bZ7tzJ2GFveHhwvgT%2Fc93TMVBELEBykLzpEX7j4KlIPTXA26b3hpeIboPHvIl6KipQEuqHwaPma6Pll5onFfJ7ux87CydqdEMMAGf82SZBrdJqvOr8WBDOn4b8JWdonpesrntIkNbGRrKORY1N1P36N7zWIZ7AJ3jbl3bizqiYjYFwovRHIm4bOE0UK53SNCCrVIIy58IcEIBEtjP66IAOi40eRnEt45mpsFaSECdOgcPcT6h98FAxSOI27f%2BALqcuPVCw9eHcMPa9wskGOqUBWGISn8nhl1Pdwjo18P35mZz2b0ssFCAE4zYN1tvmioBZAjXV4uv7UU0wSiP4eTEs6JTlZLozqpWI5qGXmq6rO%2FuCFuiMmhaloRRwhSTVZz%2F4N5INFSHnTiVANIr3DoYqutmDW04zAhEPgDgrs8fqaEyUtCNA7KLIUgZst3c3ZB46vmbbfozDMSnbbuD2j7parGEuyZBXKRRoxzFHzgO5z5KGdp1B&X-Amz-Signature=2d48ffb12f57baeb1c4a3a5cdc8de66d79f74a96333a822da0aeac95437b1bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

