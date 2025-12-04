---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZUHGRPL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCqxeoTdST4XqytxCjhMRex7Y%2B%2FlhWjW%2Bo68YdB4dioEAIhANWWWsWB6mP4aH0%2FfUcPQHKc5M%2Fwbw8eehW8HE1B4PmaKv8DCEgQABoMNjM3NDIzMTgzODA1Igwjf0Fks63X2am1VMgq3APASSeddyrPtMPjWCk7kW0VoPCuFo6RDNwW%2F4INJC05xKX5TTVkCEOx1uMUskNSiasu2gmTFIcKFU723L7UtaEgatx1rKWYhrhqf0QZK%2Bpe3VXQBX8l8IGOqMVuel7yYWBKWI4pVfvUqYOA%2FFag%2BF%2FcH1t1FxkT5p3hjzluxYW3is2fkaWvmXuBx7SctWvtbsayneRK6Yp8WHq%2FzCvqbeCDP%2F8lE0Nj5A96FHUFuNkz%2FI5m5Eyod6vuXriCgCLOkiAHeR0OSaPy0UZOSStBoC88Sr6RwH2pqUzmuTlCmuqKHhrj4dDG9Vwqs56dod%2BPTei3z%2BHN8MAY9tN%2F9G8Ck7fvlJhqaivvaeA%2F4ya%2BslGDdvSNa8sT04johxqrdqVlryepbq7yMfqnvjAHY%2BLXfLbKi1FItd5Xp6LjUcXr5BVhyU9OyfKGUaF5ecA31FNltZJFC6W%2BNTbBRGXHYmSRz%2FyhnPufJteHn65MxUbpgUqfVc2gQHd%2F14NoMufeBjRI4FHFbBomExx6jgeTNtaKo%2BiNev4iTfd8m9flV3UqC4p%2FABZ8gpsSzXMEL3kgIWeKu2iqvktm7HksIvUXxUisjCZQKGf573rvKTdvsta5gE62sugPKVVKXFysPAdVqzCovsbJBjqkATA3r181WKe2AsHefCKGVmSw3zqQrVa%2FL2xImQc0dNbA5gGc%2FWSjqeEfvt0%2BnD%2BEbyHoacIeb8IYqIQaLy9BRlu9sQ222Anmg1wgnxXb448QZipe%2Bzw%2FYsKKIz2DMCROMZlWaThpkj2w5gisvqvzUMrdAT68flVATVkKvnDa1bcCorxGA0kjDGyupabOB9DvzOvd9UMU8yhd9lTlE6Ojmevtv1gh&X-Amz-Signature=50404ba87db2e69acc2654a1b114f25c82480695f77cef473faa281265e7c349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZUHGRPL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCqxeoTdST4XqytxCjhMRex7Y%2B%2FlhWjW%2Bo68YdB4dioEAIhANWWWsWB6mP4aH0%2FfUcPQHKc5M%2Fwbw8eehW8HE1B4PmaKv8DCEgQABoMNjM3NDIzMTgzODA1Igwjf0Fks63X2am1VMgq3APASSeddyrPtMPjWCk7kW0VoPCuFo6RDNwW%2F4INJC05xKX5TTVkCEOx1uMUskNSiasu2gmTFIcKFU723L7UtaEgatx1rKWYhrhqf0QZK%2Bpe3VXQBX8l8IGOqMVuel7yYWBKWI4pVfvUqYOA%2FFag%2BF%2FcH1t1FxkT5p3hjzluxYW3is2fkaWvmXuBx7SctWvtbsayneRK6Yp8WHq%2FzCvqbeCDP%2F8lE0Nj5A96FHUFuNkz%2FI5m5Eyod6vuXriCgCLOkiAHeR0OSaPy0UZOSStBoC88Sr6RwH2pqUzmuTlCmuqKHhrj4dDG9Vwqs56dod%2BPTei3z%2BHN8MAY9tN%2F9G8Ck7fvlJhqaivvaeA%2F4ya%2BslGDdvSNa8sT04johxqrdqVlryepbq7yMfqnvjAHY%2BLXfLbKi1FItd5Xp6LjUcXr5BVhyU9OyfKGUaF5ecA31FNltZJFC6W%2BNTbBRGXHYmSRz%2FyhnPufJteHn65MxUbpgUqfVc2gQHd%2F14NoMufeBjRI4FHFbBomExx6jgeTNtaKo%2BiNev4iTfd8m9flV3UqC4p%2FABZ8gpsSzXMEL3kgIWeKu2iqvktm7HksIvUXxUisjCZQKGf573rvKTdvsta5gE62sugPKVVKXFysPAdVqzCovsbJBjqkATA3r181WKe2AsHefCKGVmSw3zqQrVa%2FL2xImQc0dNbA5gGc%2FWSjqeEfvt0%2BnD%2BEbyHoacIeb8IYqIQaLy9BRlu9sQ222Anmg1wgnxXb448QZipe%2Bzw%2FYsKKIz2DMCROMZlWaThpkj2w5gisvqvzUMrdAT68flVATVkKvnDa1bcCorxGA0kjDGyupabOB9DvzOvd9UMU8yhd9lTlE6Ojmevtv1gh&X-Amz-Signature=2d3374dbf72f003718c8ab736673c8f9423737f4969fdf9dfb3607c0712f4e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

