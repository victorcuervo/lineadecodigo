---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGLX42P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfvrWTCOPXRKll5nYXmQWAqs2dHw%2FW%2FIMaRVG38oI85gIgBSoQu%2BMicIfKgo5OHvtrpcP0T5OcUZpp319tI25xvsQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIVNKtcdeVGi%2B6TprSrcA78SpUXuQHGcK8OEGeLpwyVFkPzK3mXJENSTCWgoATm3VPiXvqTXR6HWrojd%2FN4JmXfQ5by8PD%2FMUkHN%2BPBWsEDrxzzwgCqsizWtBn9w0td9gDDOAAp%2BxtzrHtkqdjWcLfWRnm8ekqbeM5rewR7GzdFCkZ19dwHO8OkEzDOOaz4Ue1WOKG%2Ftp57WdcdN%2BpcAPSLseCfwXrFOFxXfZIsdWeEVMmPTTgqH9fZb2hEitl5wI%2F6o%2FOH35osVL%2Bx3vQRW%2F%2Biit94KuISRlaL4UIaQQ4owyAV5s8CmDR%2BV8VHrN24zXhnV4g1EByZ%2F0YtZzp1Llmpo3Rq5ox8BGySEJMSIAjd0BsYlqNHe6P4KU4KXxL4JLBrrD51kLDntPVAkMAqIBt%2FybvuUjwI3KyYl0AbUFX%2BsUmKvzfb2BbGDgNfhCQVXV6xgaZ2fOGP92FsAqYmsKk2I4DJZssSTO8Xtkv7k%2FxpkmgIRt4fJXqBbIcmqGsmHGmAbwg90YkOp3%2FSyt9xmFhf9qjSK9K%2F1Z1z9zTaN%2FEwfJbrzr9c8c4ctAJa9pDp3lZ%2FlIFnAofQ9zXmUEOx5FuQQY5G4Ix1NUNL%2BBOcfmBnONgofEwshb%2BEai2LbbDhYt2Ktkioxk7vshYRKMM%2BMyMkGOqUBRk0K1%2BeNLawJlHg3ZSgnu%2F01od6nNI5o%2B8TcgBwI5IQSM7AZCpn1PeCvAT%2BUlzXPAVNbF1HQ1BpAeh2etM1FNwoeXzvA2k951XoP8FNcAyUC1DNAFTGt4iWQ1zymOtorWAxH8fOL5GY1yAow2cjbSCaghmwOyovHwzJ2mg1Ic8CGfwbXeyyKVzNr3nst3bUHVonwgMbjKJSrdpBiqgazTch7Lbik&X-Amz-Signature=ff4bc0d36f203e4bc3a33b229424ab2f71bf58b03ac6a35afc1453691ba105e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGLX42P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfvrWTCOPXRKll5nYXmQWAqs2dHw%2FW%2FIMaRVG38oI85gIgBSoQu%2BMicIfKgo5OHvtrpcP0T5OcUZpp319tI25xvsQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIVNKtcdeVGi%2B6TprSrcA78SpUXuQHGcK8OEGeLpwyVFkPzK3mXJENSTCWgoATm3VPiXvqTXR6HWrojd%2FN4JmXfQ5by8PD%2FMUkHN%2BPBWsEDrxzzwgCqsizWtBn9w0td9gDDOAAp%2BxtzrHtkqdjWcLfWRnm8ekqbeM5rewR7GzdFCkZ19dwHO8OkEzDOOaz4Ue1WOKG%2Ftp57WdcdN%2BpcAPSLseCfwXrFOFxXfZIsdWeEVMmPTTgqH9fZb2hEitl5wI%2F6o%2FOH35osVL%2Bx3vQRW%2F%2Biit94KuISRlaL4UIaQQ4owyAV5s8CmDR%2BV8VHrN24zXhnV4g1EByZ%2F0YtZzp1Llmpo3Rq5ox8BGySEJMSIAjd0BsYlqNHe6P4KU4KXxL4JLBrrD51kLDntPVAkMAqIBt%2FybvuUjwI3KyYl0AbUFX%2BsUmKvzfb2BbGDgNfhCQVXV6xgaZ2fOGP92FsAqYmsKk2I4DJZssSTO8Xtkv7k%2FxpkmgIRt4fJXqBbIcmqGsmHGmAbwg90YkOp3%2FSyt9xmFhf9qjSK9K%2F1Z1z9zTaN%2FEwfJbrzr9c8c4ctAJa9pDp3lZ%2FlIFnAofQ9zXmUEOx5FuQQY5G4Ix1NUNL%2BBOcfmBnONgofEwshb%2BEai2LbbDhYt2Ktkioxk7vshYRKMM%2BMyMkGOqUBRk0K1%2BeNLawJlHg3ZSgnu%2F01od6nNI5o%2B8TcgBwI5IQSM7AZCpn1PeCvAT%2BUlzXPAVNbF1HQ1BpAeh2etM1FNwoeXzvA2k951XoP8FNcAyUC1DNAFTGt4iWQ1zymOtorWAxH8fOL5GY1yAow2cjbSCaghmwOyovHwzJ2mg1Ic8CGfwbXeyyKVzNr3nst3bUHVonwgMbjKJSrdpBiqgazTch7Lbik&X-Amz-Signature=7b6abd641e244b22c572f45c1ea2f4c892741f959d04e7777e5dbb29270bad46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

