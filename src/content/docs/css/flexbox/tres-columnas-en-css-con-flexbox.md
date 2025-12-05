---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L465NWL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq5bH8rapCKlUnXgss2mnVJa7ioVmq083Z63WHfw7VTgIgWc8IE4TiSYKQKW2UZqz2lwQ9%2BgaV%2FSy648Zo3OILOEkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDKf2f1nWvwOcjkNzSrcA8nUt73VrKsjIcRTbn9DtA%2FoVgXYZ%2BJNqC4G0fPoGziBLz9pRpMRe%2Bn0U25gb%2FXqdy7VriGrl%2BZ8VIPPwmfojUNPRsXpryVjKHIuUUYO6bLghyVIWkjmred5s4f%2FwdVodATYE%2FGCG%2BIvk4LGTuvS1zz%2BDwmijCWsBMhlqFMU7OQ6IQkeEekkIXgi%2Fw1nYG9Kg5bKhoRHv9kYwLGRdy2FsxedRdCr9ECsIkzIaf8hInXhscMb%2B4BW5lgbFOQijuJy%2F9L3Q4JGUL2CGk58tTfSl2mtCmnZekvDy7C9dAlGFq6BxsBSiaYorfaoEgPYWBWPgNreeHUZUAfYoMIjUYdQSMjaoDmt1Fo1%2BkxGcIqKMQUQn1SEEBv7d5d54L9St%2FIvnshQXk%2B11HSya8kVxBu%2BRIcHHCm4ALoRIKTWNOuvk9mHaBHddgxl1r9A1f23EVdkZzNjJb8TWzSo8tD%2F%2FFQ5vtT22NTCi49fn37d9nIeyNEcKngazIkSYfW1tFMbDu%2BVwhurwZWf2WZpSG6Qb2XAkcQmlt%2FQNP9LbTpWwUTPq8wJgTugf%2BzsAZUA%2FzppF%2FD1qIicvob3bmrwYqlcaXVSm369JAO0I7TaLARQbtcFNt8FnuE621RFRLzHHfpxMP3FzckGOqUB64KGtJNbepH7lc1TtYFvO7%2Ft8aOgrzoe9wloY5L4c3YjbsxNnfbd6w%2Fq3ru2qDPrCplZBanm9ohKpJ56kvUXOvk2rTxvhpjCiiM%2Fg%2FRmSi26PpoZ2ZmkFhoOLaMoJiyQo9C4VDtfYyhd5J0g8MxlX7ZPXgJfUQ45mKX268XY1zk%2B8VU1qsAgc3kkfO375YqEenZskkVtkVbIxHIB%2B0yNFlsBQQ52&X-Amz-Signature=5029a19146928287a047e0130f9f3e58bca51df67cf725c23a3bd9f09806efad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L465NWL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq5bH8rapCKlUnXgss2mnVJa7ioVmq083Z63WHfw7VTgIgWc8IE4TiSYKQKW2UZqz2lwQ9%2BgaV%2FSy648Zo3OILOEkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDKf2f1nWvwOcjkNzSrcA8nUt73VrKsjIcRTbn9DtA%2FoVgXYZ%2BJNqC4G0fPoGziBLz9pRpMRe%2Bn0U25gb%2FXqdy7VriGrl%2BZ8VIPPwmfojUNPRsXpryVjKHIuUUYO6bLghyVIWkjmred5s4f%2FwdVodATYE%2FGCG%2BIvk4LGTuvS1zz%2BDwmijCWsBMhlqFMU7OQ6IQkeEekkIXgi%2Fw1nYG9Kg5bKhoRHv9kYwLGRdy2FsxedRdCr9ECsIkzIaf8hInXhscMb%2B4BW5lgbFOQijuJy%2F9L3Q4JGUL2CGk58tTfSl2mtCmnZekvDy7C9dAlGFq6BxsBSiaYorfaoEgPYWBWPgNreeHUZUAfYoMIjUYdQSMjaoDmt1Fo1%2BkxGcIqKMQUQn1SEEBv7d5d54L9St%2FIvnshQXk%2B11HSya8kVxBu%2BRIcHHCm4ALoRIKTWNOuvk9mHaBHddgxl1r9A1f23EVdkZzNjJb8TWzSo8tD%2F%2FFQ5vtT22NTCi49fn37d9nIeyNEcKngazIkSYfW1tFMbDu%2BVwhurwZWf2WZpSG6Qb2XAkcQmlt%2FQNP9LbTpWwUTPq8wJgTugf%2BzsAZUA%2FzppF%2FD1qIicvob3bmrwYqlcaXVSm369JAO0I7TaLARQbtcFNt8FnuE621RFRLzHHfpxMP3FzckGOqUB64KGtJNbepH7lc1TtYFvO7%2Ft8aOgrzoe9wloY5L4c3YjbsxNnfbd6w%2Fq3ru2qDPrCplZBanm9ohKpJ56kvUXOvk2rTxvhpjCiiM%2Fg%2FRmSi26PpoZ2ZmkFhoOLaMoJiyQo9C4VDtfYyhd5J0g8MxlX7ZPXgJfUQ45mKX268XY1zk%2B8VU1qsAgc3kkfO375YqEenZskkVtkVbIxHIB%2B0yNFlsBQQ52&X-Amz-Signature=f590a9d0bc7dc3eeb61c97d9da9924a6f113e3eafb4b04a3fe27404e9bd2be4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

