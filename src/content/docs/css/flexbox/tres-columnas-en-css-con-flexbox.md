---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5LYKNQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLVDrwXWILfEawJy%2FAZXHvnjPXoYQ3DWG6rMgNMvVHaQIgTwmW5Af%2BpTE3Mszn5hOroAvm5ncLC5LP3C30snQ8Cy0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6CQFHf0Lji6ON1BircAy4pkzT3f%2BhLhR0HQcKdE63qepc2El5I6Ydr5IyRZrioVSIaV41mfVS5UX8KKjEJqCSD5BL1kfIxx5W6yuhK1LCRNv3K9sam%2BAaURTVzH5I9jEaSs%2BMFiOkZFQ3tnSIT8A2Hl99kgo2xxLxek5OyMdTujdradyqm%2BYdmdiIvdHLJhtIrTS9QyP8eZW8tEL%2BIDxtmAIPsBE8ilOdkfgbIyXgeF2uBpjnkiCI4os0DFBMV9PDTakyJSVMZOsazedvcHtNOeKt4Sb7Jf5JyPItaVqTHky4iNFhN8T0Hnlbj8Qh9U2KCshd34%2F70lN2ggp3fF47WmwmdnUHnbFWKdm%2Bx32%2B3P6eNB58zzWltvM7CcEaHu47bVmeMxJBMoE%2BQ3flhMdcbqIZ%2Bm4pBDGeAeZYfKTP6crNNXISdMLLBdjJhtzIi7FyyqxYUjz2jUphXlBY8%2F6vTgKOzSQDuYJ7kT0eU5%2BU4dNdWDo9%2BIlPoyvlRs4aPNGUdYIWHwc449J0YvDTSuamMZh8iCIzUg1Jsfh5FFCh1uUP18%2FN0DO4YY4wCbw%2FzwsNUKxH7aAJt3YF8mNMxdID2KWCZnnV4225DkMUVQaKNwrDOxDNtjuC0RAeKXudzDxqT1F3ymXkpDT4eMLyQ28kGOqUBK30xIJek9vswSjGzn9eKJB1tZlXhrkyUutbdxt2%2BKRjjvZJRBiFH9YNUJOvbztjEpZteK0MMe%2B8O%2FQ80kA9coJec4q74EVHSk0qajSarr1rCwRw3nUlNgL8eI03K06ZHHKAJIrcKMgMu0dcrgbwiXgSAZBtBeiv3zhHVXdmTjT8Q3UlS0UFkIOQ3NgWmtInHTfpXnW54MFWDPIMqktLzrKB05Fuf&X-Amz-Signature=0150f869466ff714d25e7ffb9da267a2f49d0e05ee62f7a7fdd0d5528be508fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5LYKNQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLVDrwXWILfEawJy%2FAZXHvnjPXoYQ3DWG6rMgNMvVHaQIgTwmW5Af%2BpTE3Mszn5hOroAvm5ncLC5LP3C30snQ8Cy0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6CQFHf0Lji6ON1BircAy4pkzT3f%2BhLhR0HQcKdE63qepc2El5I6Ydr5IyRZrioVSIaV41mfVS5UX8KKjEJqCSD5BL1kfIxx5W6yuhK1LCRNv3K9sam%2BAaURTVzH5I9jEaSs%2BMFiOkZFQ3tnSIT8A2Hl99kgo2xxLxek5OyMdTujdradyqm%2BYdmdiIvdHLJhtIrTS9QyP8eZW8tEL%2BIDxtmAIPsBE8ilOdkfgbIyXgeF2uBpjnkiCI4os0DFBMV9PDTakyJSVMZOsazedvcHtNOeKt4Sb7Jf5JyPItaVqTHky4iNFhN8T0Hnlbj8Qh9U2KCshd34%2F70lN2ggp3fF47WmwmdnUHnbFWKdm%2Bx32%2B3P6eNB58zzWltvM7CcEaHu47bVmeMxJBMoE%2BQ3flhMdcbqIZ%2Bm4pBDGeAeZYfKTP6crNNXISdMLLBdjJhtzIi7FyyqxYUjz2jUphXlBY8%2F6vTgKOzSQDuYJ7kT0eU5%2BU4dNdWDo9%2BIlPoyvlRs4aPNGUdYIWHwc449J0YvDTSuamMZh8iCIzUg1Jsfh5FFCh1uUP18%2FN0DO4YY4wCbw%2FzwsNUKxH7aAJt3YF8mNMxdID2KWCZnnV4225DkMUVQaKNwrDOxDNtjuC0RAeKXudzDxqT1F3ymXkpDT4eMLyQ28kGOqUBK30xIJek9vswSjGzn9eKJB1tZlXhrkyUutbdxt2%2BKRjjvZJRBiFH9YNUJOvbztjEpZteK0MMe%2B8O%2FQ80kA9coJec4q74EVHSk0qajSarr1rCwRw3nUlNgL8eI03K06ZHHKAJIrcKMgMu0dcrgbwiXgSAZBtBeiv3zhHVXdmTjT8Q3UlS0UFkIOQ3NgWmtInHTfpXnW54MFWDPIMqktLzrKB05Fuf&X-Amz-Signature=47da396f2d1c8d1555a272f784b9cff080fd41c3c5fab4897512b527fc405bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

