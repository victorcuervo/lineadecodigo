---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFRPVEX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCSvqDyB9yX1Vh8bbiPi42hDch%2F5xyzlR%2FcXIIKbMycNwIhAKUe%2FtCdvTUvutOlqSErxKZ79I%2BriawZiRIIeUHDmFVBKv8DCEgQABoMNjM3NDIzMTgzODA1Igx1qijEUnRk3HJU2cUq3APBzMFfLHeP1a9c8BASG85vDcwzW5W5laNeAIGGbI3%2FpOytuhZUjKCBa%2F%2Bgdexh4ZU%2FxE8JLDgaI7Hybiwh3CehluFTJSvrRCG%2B1r9wvJfTrMBVTjg8FpS5m37rUx2jA8QjtgZV2W0ND1RRg4kMymeoM9SwiBnTW%2FOVOw1a0Ikvv8YwrtXreEPMP%2FO1LN8vwYOiViQ%2Fa3MIzn%2FQOMFZZIPTfIO8P5JdakXH5IKityQz%2BMezLcrkVgwPaqdPnD8f50q%2F3WzYm17z0EhQcPrvw3Y8%2B2spTyxPEBQxVT4V9H95jkNzJp6rZtMJBX%2Bok9bFHEOvF5LOntfjsffLUVlaG96pVk98Tc4xxYlixlwMG4VO3%2FGs5mvrxXQp43dM9q5Upisqx9i3h8ZVOzcFLORq5NqRQGI9FsdKIRX6H42m1SkJ8BPkwaLiwQRRFmI5jEdRBpUHIVKg%2B4X%2F0W6svzDXHcAr%2BvDFVbkUdnqpaG3VdY5QsKhU3Xyj0xgP8x4hJ8xJHjSCBid%2BJCDcWA%2Bp4%2BZmi%2BDAp4I%2FwGHBDPV2s4QVdWopP6VLHS8DT0w0m2lKb19nrEpR8KdNkD1BiFeWIufoJaqbhzGGrfetDsbcxhKKOQbtCzn2wo2r9MhpT7I%2B0DDovsbJBjqkATCiq6SWmIp4BfWgSdNCqLAuniZnbQEuY2jD1ObvDD6lJnTmkqgef14NCMW8%2Feo4Gqy0Icfla4tR%2B2P8xnu%2BFKY4ytxvhAHbA3GwmrWcMxvYYMGfFTaS%2B7mrytdILdbTqgROsmfCR1KyhiEXejmOcSFO21IBe5dyFx%2BqbwPv1Pe4XPuFJR9BFarSysBYLFpUQqdbMSBiDAwppzS9awdqaeWs%2BiVK&X-Amz-Signature=89e033eb414599a683b8a8d8d7d564b7f113423359cb062905b49ffcb5bbd15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFRPVEX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCSvqDyB9yX1Vh8bbiPi42hDch%2F5xyzlR%2FcXIIKbMycNwIhAKUe%2FtCdvTUvutOlqSErxKZ79I%2BriawZiRIIeUHDmFVBKv8DCEgQABoMNjM3NDIzMTgzODA1Igx1qijEUnRk3HJU2cUq3APBzMFfLHeP1a9c8BASG85vDcwzW5W5laNeAIGGbI3%2FpOytuhZUjKCBa%2F%2Bgdexh4ZU%2FxE8JLDgaI7Hybiwh3CehluFTJSvrRCG%2B1r9wvJfTrMBVTjg8FpS5m37rUx2jA8QjtgZV2W0ND1RRg4kMymeoM9SwiBnTW%2FOVOw1a0Ikvv8YwrtXreEPMP%2FO1LN8vwYOiViQ%2Fa3MIzn%2FQOMFZZIPTfIO8P5JdakXH5IKityQz%2BMezLcrkVgwPaqdPnD8f50q%2F3WzYm17z0EhQcPrvw3Y8%2B2spTyxPEBQxVT4V9H95jkNzJp6rZtMJBX%2Bok9bFHEOvF5LOntfjsffLUVlaG96pVk98Tc4xxYlixlwMG4VO3%2FGs5mvrxXQp43dM9q5Upisqx9i3h8ZVOzcFLORq5NqRQGI9FsdKIRX6H42m1SkJ8BPkwaLiwQRRFmI5jEdRBpUHIVKg%2B4X%2F0W6svzDXHcAr%2BvDFVbkUdnqpaG3VdY5QsKhU3Xyj0xgP8x4hJ8xJHjSCBid%2BJCDcWA%2Bp4%2BZmi%2BDAp4I%2FwGHBDPV2s4QVdWopP6VLHS8DT0w0m2lKb19nrEpR8KdNkD1BiFeWIufoJaqbhzGGrfetDsbcxhKKOQbtCzn2wo2r9MhpT7I%2B0DDovsbJBjqkATCiq6SWmIp4BfWgSdNCqLAuniZnbQEuY2jD1ObvDD6lJnTmkqgef14NCMW8%2Feo4Gqy0Icfla4tR%2B2P8xnu%2BFKY4ytxvhAHbA3GwmrWcMxvYYMGfFTaS%2B7mrytdILdbTqgROsmfCR1KyhiEXejmOcSFO21IBe5dyFx%2BqbwPv1Pe4XPuFJR9BFarSysBYLFpUQqdbMSBiDAwppzS9awdqaeWs%2BiVK&X-Amz-Signature=0da5356ea265db4d4ec4d85847d40e60e0fd1d0abc05946ec89bf2a3f808ea47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

