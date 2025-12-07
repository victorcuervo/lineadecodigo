---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5W7RAWM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJE76mscYMl5K4%2FvyuWSGRPbEOnX%2Fz4AGI7%2BNUCluNGAiEAhMS%2FxgdJr%2B%2FvZmsuedCa0fgPL9x9Qo88agZvgt6pvpUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI81eAEM6jGOae9QDSrcA0%2FHZ8MMVnu1eBxuluMP559ZdFzdgloIoI4zzZ9qdSWnk5pk%2BDPozr1C0GN94EsM1VaDmk2kEetxW3%2BM7vRiQG9g3cAOvBfeuzpVdisfuZS23p4lsNQc%2Fy9odetVlWZHCGV1abpRHiqiXvGMSZQYJyY7jJlNUszHZ6QtCxo2UBi2TppTwdD3yvczuc0uII3MHDvJySRTPc79Wn2YPVagmq7QxgScEebnazLEEz9%2B2aBp3H1ePB8iScBivCpbUj4ps2WotTLeo5lxf2I5YYxQ1HInP%2FE%2FeMyCL9u8R7gJprwERjxMmbGEmaTzXvJf4%2FnonQMYT%2F6%2BCyO9nFMwSSUFVK4hJyOd1qy20GzOBithp2yoOEo8rwF9lUvLBsmdBvuzav4RL9%2BJKrW635j4o3FtMog5bhjVlsMp9BGF9ZhYfGiynTV%2FHLqqcm1Y%2FkEyOFl9y1JURMuD7BZpA8QIV4XILnCyz8qH7VZqJf1lh%2Be58ceXZFLv5HFYKIeWKXjSdRmFvvqjzyZR%2BNNhsf8hX8nuBj24lzXDvO5boxKSThQRkLLl06FGsSLjVAvic5sKJnDXzs9aqYTVC%2F1XhILnrZ1wLEGuQr4Aj4KKC5OIZEMUb7gy2W%2BJdVyf8jL%2FV7f5MP2F2MkGOqUBnGSopRvQNrFczPiLcmwBaiU%2Bj5HTH2NLsXtcWKexORxyCkHjH%2BZ5ALp2UFihOqgZOIKzEP6WYZDnDpJy%2F9Cb8mabltORDuKgw6JvDAagpoAtya6jrd8po1bbhpnDRqY0QclGFlT5AQL0W2eqQdhtkUSxKDC6%2FI3ODsOcgE8Zhsv5gt0bpJRtoRfOgpbISOj44%2BzzLKQW1XeK3vwg988YqIXC1O1O&X-Amz-Signature=1b72eef9cad7c36b643213abaa99f85d43092b9972544b47f746bcdd5cb53e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5W7RAWM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJE76mscYMl5K4%2FvyuWSGRPbEOnX%2Fz4AGI7%2BNUCluNGAiEAhMS%2FxgdJr%2B%2FvZmsuedCa0fgPL9x9Qo88agZvgt6pvpUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI81eAEM6jGOae9QDSrcA0%2FHZ8MMVnu1eBxuluMP559ZdFzdgloIoI4zzZ9qdSWnk5pk%2BDPozr1C0GN94EsM1VaDmk2kEetxW3%2BM7vRiQG9g3cAOvBfeuzpVdisfuZS23p4lsNQc%2Fy9odetVlWZHCGV1abpRHiqiXvGMSZQYJyY7jJlNUszHZ6QtCxo2UBi2TppTwdD3yvczuc0uII3MHDvJySRTPc79Wn2YPVagmq7QxgScEebnazLEEz9%2B2aBp3H1ePB8iScBivCpbUj4ps2WotTLeo5lxf2I5YYxQ1HInP%2FE%2FeMyCL9u8R7gJprwERjxMmbGEmaTzXvJf4%2FnonQMYT%2F6%2BCyO9nFMwSSUFVK4hJyOd1qy20GzOBithp2yoOEo8rwF9lUvLBsmdBvuzav4RL9%2BJKrW635j4o3FtMog5bhjVlsMp9BGF9ZhYfGiynTV%2FHLqqcm1Y%2FkEyOFl9y1JURMuD7BZpA8QIV4XILnCyz8qH7VZqJf1lh%2Be58ceXZFLv5HFYKIeWKXjSdRmFvvqjzyZR%2BNNhsf8hX8nuBj24lzXDvO5boxKSThQRkLLl06FGsSLjVAvic5sKJnDXzs9aqYTVC%2F1XhILnrZ1wLEGuQr4Aj4KKC5OIZEMUb7gy2W%2BJdVyf8jL%2FV7f5MP2F2MkGOqUBnGSopRvQNrFczPiLcmwBaiU%2Bj5HTH2NLsXtcWKexORxyCkHjH%2BZ5ALp2UFihOqgZOIKzEP6WYZDnDpJy%2F9Cb8mabltORDuKgw6JvDAagpoAtya6jrd8po1bbhpnDRqY0QclGFlT5AQL0W2eqQdhtkUSxKDC6%2FI3ODsOcgE8Zhsv5gt0bpJRtoRfOgpbISOj44%2BzzLKQW1XeK3vwg988YqIXC1O1O&X-Amz-Signature=5463061c79641ee9aa1a438e4e6a20e81bb1366da14e003010dcbea6cd84162d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

