---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTIBXAOO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBio%2FnBHALTXhQNyPVoN4eeQaA8tahbQ520PzLTNu%2FxAiAOgrsNIZgVx5eo62zqigAd1I7crOMPiIzn%2FR4JJqmhESr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM1EmYYC4L12XrJRY3KtwDakfAC48QcHB7G%2BvklYev6QqaS0lMv%2BwQeWOw4gOvui2GtPpIcEceowVPH2XYdvpvWR7i0SvvUrytzmH4FknUYUaB26cZpzYSEH0oXj8syKHlht7jDS5zQy3M1GiBtXE4Bz%2BAFxkZG8sdiVUZ4JFNFQ47QzqRZ0s0RPJ8Z3kS9xDXBDm1rRehJowRye1P0JrmgGIQHeNg5TQSqNb7quuE51k3Q6p0c50ffex6ELLxWXU9%2BMlAiJJN%2BRPxbYFW%2B74vnUWRQEuev0j9oQ8tnhSrQKMwsOEHHoc%2BjTM%2BioeUHlNrCegPTKFx6LBWUGD91D2lyd0cVGufsrjhEEenp5NHs5R8eHSASJnbM5FNEq8ZyEb9wBkZw2ZdnhOISffDvjSXJyFnArSptb5X8D8bxsBCrS10DgLUAi3J56jbSNv7P9q%2B56DiqQyz14M6Q7N5Dh2TU2P16f5Dwyec5VNrtWm7odklQMDXfXmIQfB8X4M9bOVaNP6l6VaWg4YsvWOioxz9Iq%2FPt8pvpoqafi4jDmWxTlseuoBzMD%2BXWU2rQofa3ALyv8GD0AaF8QQ5OurBGQnT5TMyBOl8%2B3mxLwLZLEOX2b%2BLkhpnr7ypCbFTHblGFZ%2FA%2F2qesTquElDt7L8w%2BdzGyQY6pgEpFaAN3JU%2BgN9O%2B5kZP4UL9VGdCRsLA8%2Fpf%2FhLI4U%2FcHdGDjGE9QUmn6D2BseiVLtL2dQbTWpSlUoQTQTJzylPTkq8aSy0lUbR%2FzCyCEmtX4egRWoZtBHI2hs67oQ1Myt6wfNmETEBw%2F2b4BJW%2FflCFvgI34FTC1nn40g9Fil0BFjc5nzJVT3cEJsFvLs%2BwdmO%2BxTe4g3vdCuxRWDBUsYmd14osTIe&X-Amz-Signature=81ea56944615746145a0abf4e02bf788bb7bb6406b2b7403193c1c96057c2def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTIBXAOO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBio%2FnBHALTXhQNyPVoN4eeQaA8tahbQ520PzLTNu%2FxAiAOgrsNIZgVx5eo62zqigAd1I7crOMPiIzn%2FR4JJqmhESr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM1EmYYC4L12XrJRY3KtwDakfAC48QcHB7G%2BvklYev6QqaS0lMv%2BwQeWOw4gOvui2GtPpIcEceowVPH2XYdvpvWR7i0SvvUrytzmH4FknUYUaB26cZpzYSEH0oXj8syKHlht7jDS5zQy3M1GiBtXE4Bz%2BAFxkZG8sdiVUZ4JFNFQ47QzqRZ0s0RPJ8Z3kS9xDXBDm1rRehJowRye1P0JrmgGIQHeNg5TQSqNb7quuE51k3Q6p0c50ffex6ELLxWXU9%2BMlAiJJN%2BRPxbYFW%2B74vnUWRQEuev0j9oQ8tnhSrQKMwsOEHHoc%2BjTM%2BioeUHlNrCegPTKFx6LBWUGD91D2lyd0cVGufsrjhEEenp5NHs5R8eHSASJnbM5FNEq8ZyEb9wBkZw2ZdnhOISffDvjSXJyFnArSptb5X8D8bxsBCrS10DgLUAi3J56jbSNv7P9q%2B56DiqQyz14M6Q7N5Dh2TU2P16f5Dwyec5VNrtWm7odklQMDXfXmIQfB8X4M9bOVaNP6l6VaWg4YsvWOioxz9Iq%2FPt8pvpoqafi4jDmWxTlseuoBzMD%2BXWU2rQofa3ALyv8GD0AaF8QQ5OurBGQnT5TMyBOl8%2B3mxLwLZLEOX2b%2BLkhpnr7ypCbFTHblGFZ%2FA%2F2qesTquElDt7L8w%2BdzGyQY6pgEpFaAN3JU%2BgN9O%2B5kZP4UL9VGdCRsLA8%2Fpf%2FhLI4U%2FcHdGDjGE9QUmn6D2BseiVLtL2dQbTWpSlUoQTQTJzylPTkq8aSy0lUbR%2FzCyCEmtX4egRWoZtBHI2hs67oQ1Myt6wfNmETEBw%2F2b4BJW%2FflCFvgI34FTC1nn40g9Fil0BFjc5nzJVT3cEJsFvLs%2BwdmO%2BxTe4g3vdCuxRWDBUsYmd14osTIe&X-Amz-Signature=5ba02e69c3dd7676061ed21622816d6f626bfb35902a974cb7d0cc67955012a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

