---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN2ZC5M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDnHGPCglHI2gFun4KjnYWoliFE1eP5CNaqU1MSQdA87gIgSDhnQsCwVKlJXKKHU1d%2FltnDIp3xNbCEfPxlTfsLgq4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDI2%2FvRe4lyOvXpoq0yrcA%2FKYcKEk7j%2Flm%2FOUwnEY5FZnZLnyFjvO5BuDMVKF9gwBlRsN6gIWSi1ZJv8%2B0oYVsr6eNZPJdT0RQaVbLbRgr37MgoC72VpEdOikIEfHcL1CNSnCne73%2FNTxUxhulE%2FGPhfZOxiKWPbw1scMHoIxcRAwzBeMkIntZ26FvowEelyUhmw7jDgBb1nYMpI7KQIvTTfV3%2FjlMdF83HkzTPKO9QOAWqQpRWNjuYFWy7uNJy97hEdBd2%2BvErxTP6F7pmIv8Okv0BWsPgplAEmDitAImwL6nazhwREeqYdb1IQytsvOT64J6hbLDPx4Ew%2FGTwe%2BpFJaL7WRV7958j5cxSllRchlQzdphQtF%2FwsJmB8r%2B1gLpITKBsXTdohyz1LwOjbNwdDP5n9gtS0uf55oin9bg2KD1%2Btm6wfUVca8OSvX%2Be%2BuD%2Bnz5k1Xt7BG8cIQ7XoHIHTeSpssZgV55vlzvJKk0lgrGagJAAZNjcYOS5fpClJA%2FwXAC%2BBX0sxFaUFHrKP7SNwuCgMHCNXuw4kkTJMnyKCjDbPnTZWo7PNsUdnLcdDw5u2RdRhBoI0jdZHCGoFLNMVf%2BJV1ieNF2JTIYHkJu6EzBK%2Bgic%2BDn3Qbxdu7kTXt7kbDK7XNJLCckTSvMJ60w8kGOqUBE2layZ2g2h5ujvtuEpzwxP%2F0oEweziLEDKAJCsApkhazhPK5X2VimRCIj%2FOtfykB4pKdQMYApFqNViQ0mL%2ByjvTaecqjsV1lJHeb%2BI1f1NfuMq1uTjHHq%2B%2Baw4NDi%2Bwy7EImF9AY8lAj6f96tZuRLdmZ5fu0QQuC7ij9OpXfbzeBGn5%2B55ap39dqfjUaspUTVjxp1JB2By2%2FiCNZ%2BR8Zj0SV8Bn7&X-Amz-Signature=604be16892d952ecd777bca0649295e81ed1178b14cb50f894da253c5569fb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN2ZC5M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDnHGPCglHI2gFun4KjnYWoliFE1eP5CNaqU1MSQdA87gIgSDhnQsCwVKlJXKKHU1d%2FltnDIp3xNbCEfPxlTfsLgq4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDI2%2FvRe4lyOvXpoq0yrcA%2FKYcKEk7j%2Flm%2FOUwnEY5FZnZLnyFjvO5BuDMVKF9gwBlRsN6gIWSi1ZJv8%2B0oYVsr6eNZPJdT0RQaVbLbRgr37MgoC72VpEdOikIEfHcL1CNSnCne73%2FNTxUxhulE%2FGPhfZOxiKWPbw1scMHoIxcRAwzBeMkIntZ26FvowEelyUhmw7jDgBb1nYMpI7KQIvTTfV3%2FjlMdF83HkzTPKO9QOAWqQpRWNjuYFWy7uNJy97hEdBd2%2BvErxTP6F7pmIv8Okv0BWsPgplAEmDitAImwL6nazhwREeqYdb1IQytsvOT64J6hbLDPx4Ew%2FGTwe%2BpFJaL7WRV7958j5cxSllRchlQzdphQtF%2FwsJmB8r%2B1gLpITKBsXTdohyz1LwOjbNwdDP5n9gtS0uf55oin9bg2KD1%2Btm6wfUVca8OSvX%2Be%2BuD%2Bnz5k1Xt7BG8cIQ7XoHIHTeSpssZgV55vlzvJKk0lgrGagJAAZNjcYOS5fpClJA%2FwXAC%2BBX0sxFaUFHrKP7SNwuCgMHCNXuw4kkTJMnyKCjDbPnTZWo7PNsUdnLcdDw5u2RdRhBoI0jdZHCGoFLNMVf%2BJV1ieNF2JTIYHkJu6EzBK%2Bgic%2BDn3Qbxdu7kTXt7kbDK7XNJLCckTSvMJ60w8kGOqUBE2layZ2g2h5ujvtuEpzwxP%2F0oEweziLEDKAJCsApkhazhPK5X2VimRCIj%2FOtfykB4pKdQMYApFqNViQ0mL%2ByjvTaecqjsV1lJHeb%2BI1f1NfuMq1uTjHHq%2B%2Baw4NDi%2Bwy7EImF9AY8lAj6f96tZuRLdmZ5fu0QQuC7ij9OpXfbzeBGn5%2B55ap39dqfjUaspUTVjxp1JB2By2%2FiCNZ%2BR8Zj0SV8Bn7&X-Amz-Signature=4af9e8d6d501616c9985ad9e6a48b451aa04a5efbdd4488d6cc867ce120c74f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

