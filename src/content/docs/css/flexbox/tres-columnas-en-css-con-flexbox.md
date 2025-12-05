---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFGJMOT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BYpe%2FJbzQkzNRWA2vIIpuZzL9E0x8htLuS1FIAd%2FjfAiEAnYOAsxLdEN5mJnnqqcYd1ibliJ2u5K1UwWbxlQjmcoAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCo7YS2nWufxEIp4kCrcA7fJiAIrs3nAfZoAXv5diu%2Bof80B36Uuq6tAgE5vjWPL2tEyXcsu0lKC8JAL%2BCVJf5XbLZKE3zikrq0Kf8ibtzTdNvHaf9CUltcu9XJ1nD68SEyyDFSVaUhn0lZMbarZ72AUSoPyaX5DSJhJXaiNd0%2B%2F9RB02LZb5JT3cctj2sbBzmDo293PFryZRtQnuwXgl9WdjgBEmKPz67Xw71t7wxewgWYc%2BOwrsAVDRK2PGK%2FaEqwWxfy4IRa0D%2FSBD%2BvyaTm0gXjWmMpg%2BgFOJY4EnzrrDPG4XO3wAm7WrpyUZAG4lfaZMmOd0unht80hVvDJ7EATFUUugmBIFeKy2Lt4VHvyNcbrO%2FsnM5E0DAEcptXr3vmr%2B73ikgeValK4Iyl0QqnHgpaxpbEbY3c7nrRBhZ%2BglrpXvuBcirBrJN3ERUmdD4wS6xR30XgjyANppwrG4gmHTSVuRQFq6tdAzcRfcqCtvlnwSyTNnnEnGCkxSnnK7HjBDvUqvViON4sE72c0H0F93WphEUmNcxoydM03nlfxwKFCMb%2FmM4hyy%2Bik0qxzfnfj2fxIj4EA%2FXQ9zJGq35Pj7xRR5JJhG%2BdbbO3pi1%2FLJmMlgPczii9cYyFYN5ErJhGzJ4frvO7h%2BUTxMO2PzckGOqUBq4HHGqY6G3eIQZ33k6UYUeN1st3t7vJWfkQyvSkKKRw6jjc7ViuO%2FP9mnzPHTzE6ypEVuSOS84em0ENcoE%2BCamiQ4R7MNN0xsGyCrUWcv1uMTpDT%2BqeFBuLDBScFhBp3IL5ziVdOrfYmxb%2FaFsmKB0mAcalvTqEWYBL4bv40az7p9RB72e9ut%2Bj1dsbnWGzRHM44QllF2TzksM7UnOGFLrnZsYds&X-Amz-Signature=2a28449dc922784888db903d4e4e827629b45259461cfc091456004f38789345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFGJMOT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BYpe%2FJbzQkzNRWA2vIIpuZzL9E0x8htLuS1FIAd%2FjfAiEAnYOAsxLdEN5mJnnqqcYd1ibliJ2u5K1UwWbxlQjmcoAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCo7YS2nWufxEIp4kCrcA7fJiAIrs3nAfZoAXv5diu%2Bof80B36Uuq6tAgE5vjWPL2tEyXcsu0lKC8JAL%2BCVJf5XbLZKE3zikrq0Kf8ibtzTdNvHaf9CUltcu9XJ1nD68SEyyDFSVaUhn0lZMbarZ72AUSoPyaX5DSJhJXaiNd0%2B%2F9RB02LZb5JT3cctj2sbBzmDo293PFryZRtQnuwXgl9WdjgBEmKPz67Xw71t7wxewgWYc%2BOwrsAVDRK2PGK%2FaEqwWxfy4IRa0D%2FSBD%2BvyaTm0gXjWmMpg%2BgFOJY4EnzrrDPG4XO3wAm7WrpyUZAG4lfaZMmOd0unht80hVvDJ7EATFUUugmBIFeKy2Lt4VHvyNcbrO%2FsnM5E0DAEcptXr3vmr%2B73ikgeValK4Iyl0QqnHgpaxpbEbY3c7nrRBhZ%2BglrpXvuBcirBrJN3ERUmdD4wS6xR30XgjyANppwrG4gmHTSVuRQFq6tdAzcRfcqCtvlnwSyTNnnEnGCkxSnnK7HjBDvUqvViON4sE72c0H0F93WphEUmNcxoydM03nlfxwKFCMb%2FmM4hyy%2Bik0qxzfnfj2fxIj4EA%2FXQ9zJGq35Pj7xRR5JJhG%2BdbbO3pi1%2FLJmMlgPczii9cYyFYN5ErJhGzJ4frvO7h%2BUTxMO2PzckGOqUBq4HHGqY6G3eIQZ33k6UYUeN1st3t7vJWfkQyvSkKKRw6jjc7ViuO%2FP9mnzPHTzE6ypEVuSOS84em0ENcoE%2BCamiQ4R7MNN0xsGyCrUWcv1uMTpDT%2BqeFBuLDBScFhBp3IL5ziVdOrfYmxb%2FaFsmKB0mAcalvTqEWYBL4bv40az7p9RB72e9ut%2Bj1dsbnWGzRHM44QllF2TzksM7UnOGFLrnZsYds&X-Amz-Signature=8f5239214d834e707a4a13e97e8a53e4f36f73f70e6f516b83f2d746a68edbef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

