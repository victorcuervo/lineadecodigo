---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4OMIG7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDc1PorPGf19vJvO%2BGdaAWhWXavFNzYjmFeh1wUjVAKSwIgFbtmjshkZiNlUJkHgEhNoMzAD%2FHVpUHbGWoA34EUemUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDHOamx5xTYR4AsemtSrcA8sD2KiC73NyY2JtbhivoSMmYvpCI7whAsoEMcfHJ2PegSvR3ckps%2FXSieG0zvruNNZ7vDjPJSoyyrpr9%2FpSb3Jx4c5idM5J76%2FDyPN83ZzgQUuD5t4AvsbEJXZ3nO6PUZC6TdmjfY5oMe6vblhykV2e1Si%2B7xTkztIR2TIOV5dJhgrwWjPnagm2EW%2BYL11Gjwlo%2B5%2FO3R8qDHpdOmOVKuYqRMwaW6PfQFsqymZcakE%2BgjTKk4V1rlztuWRtKxULTnGl0aocBAJ5Sq8EUZaEhAadPu%2FiN5VfjQf2WS%2Bcf2LWlgVHEPHUckg9BvVIKptODdfRM%2Fu3h3kCfQr%2BxmJ64uqc9zvKhc0zehvfF01RaQWFtgkFFemgRQ3zy0WKJcogspIprtoJxY18Gb4ODpBZRM1WLvDRyUzeM8GYJ7nW8X2%2FALeFjSAzFtRuYM08o60hf7fPdafA%2FD5anB4pzdDCmL828EqJE1B%2B%2FUcCgXixSLovpp5FZTzh%2FTzGMmYeqGJBV41XZd7Fgk2AQ73OLnYlvpiiV%2FQAWgZirovkmfq%2BkclM7m1riioHELtSg3guHJZZLehXL95gXy92Kl%2B9r9hbz0kbAxNME4PjHamQefzrna3hT%2F4H8xFNPR3JvNKDMP3zw8kGOqUBrr50P8cKDjt807KrT6zIHvlfy73yJRNcI5FSI60MHJTtSeq9KPr5Z0fTUjj126ATs%2B%2FTnTirjfRjk4UKN6%2BvyoYhD8pD7ZwLorz6smimLAlfbTFZOaBaPSch4qrO92jC%2F%2Bq%2BMCeRyMqGM6IGLX0z%2F96pVYAXiVaMpaWD0m%2BX36iGnoJqvhNdhjrc%2F03XfAVSsMMsCM%2BfOUVmuX1yiLpSLOlrxBg4&X-Amz-Signature=6a334ad8cf3869b507f589967b83141cf997ba84e8fb1eaaf123db023adce0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4OMIG7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDc1PorPGf19vJvO%2BGdaAWhWXavFNzYjmFeh1wUjVAKSwIgFbtmjshkZiNlUJkHgEhNoMzAD%2FHVpUHbGWoA34EUemUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDHOamx5xTYR4AsemtSrcA8sD2KiC73NyY2JtbhivoSMmYvpCI7whAsoEMcfHJ2PegSvR3ckps%2FXSieG0zvruNNZ7vDjPJSoyyrpr9%2FpSb3Jx4c5idM5J76%2FDyPN83ZzgQUuD5t4AvsbEJXZ3nO6PUZC6TdmjfY5oMe6vblhykV2e1Si%2B7xTkztIR2TIOV5dJhgrwWjPnagm2EW%2BYL11Gjwlo%2B5%2FO3R8qDHpdOmOVKuYqRMwaW6PfQFsqymZcakE%2BgjTKk4V1rlztuWRtKxULTnGl0aocBAJ5Sq8EUZaEhAadPu%2FiN5VfjQf2WS%2Bcf2LWlgVHEPHUckg9BvVIKptODdfRM%2Fu3h3kCfQr%2BxmJ64uqc9zvKhc0zehvfF01RaQWFtgkFFemgRQ3zy0WKJcogspIprtoJxY18Gb4ODpBZRM1WLvDRyUzeM8GYJ7nW8X2%2FALeFjSAzFtRuYM08o60hf7fPdafA%2FD5anB4pzdDCmL828EqJE1B%2B%2FUcCgXixSLovpp5FZTzh%2FTzGMmYeqGJBV41XZd7Fgk2AQ73OLnYlvpiiV%2FQAWgZirovkmfq%2BkclM7m1riioHELtSg3guHJZZLehXL95gXy92Kl%2B9r9hbz0kbAxNME4PjHamQefzrna3hT%2F4H8xFNPR3JvNKDMP3zw8kGOqUBrr50P8cKDjt807KrT6zIHvlfy73yJRNcI5FSI60MHJTtSeq9KPr5Z0fTUjj126ATs%2B%2FTnTirjfRjk4UKN6%2BvyoYhD8pD7ZwLorz6smimLAlfbTFZOaBaPSch4qrO92jC%2F%2Bq%2BMCeRyMqGM6IGLX0z%2F96pVYAXiVaMpaWD0m%2BX36iGnoJqvhNdhjrc%2F03XfAVSsMMsCM%2BfOUVmuX1yiLpSLOlrxBg4&X-Amz-Signature=561633234646bad678d8e44a8e2d754cb7334617e892df12ec4e52609e79609c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

