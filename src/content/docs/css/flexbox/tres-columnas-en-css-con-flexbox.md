---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBR6FJTX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FTUrF23vLfs4V3Zp4zop%2Bx4gX%2BpgCMKEEDBRkeRGXwAiBCdpkIJsu7EOAoAwyV1U8dOss1qwHVqaF5RofZehQOviqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMOxKTGQmxI9B7i9EKtwDRqudkTFvsqMldEp9x40uCnzTS1ydR8xxXwfMs%2FGCHm6haffQ4nj2vTCdZMrMUa%2Fcf1o7MR1V3N3kKPaMSo2M6acbOrh%2BdFmvp%2BBd%2FRnrFlw0HvMOFYm9%2BLfoiBGsHrcXv76uaUQUQ48iH2NwGNF3YOs519U6F9WcRvUaEOmFcCmxQVGleoqs45XbTKPDGUr0jMfvISHHGdBXi6Owu8rJDktBI5x0lh3BqFcjiTMQaUtDVBAHZ6Tf6JPP7KnAxasmVNFR6bDOgAtFr%2BEW71kOsROV6%2BAuCXTXDhe2SxY4mwuyDOYsxqK4GUmeyZQSRZT9m%2FUdDJabbTGFzHwIcvfYiuO5Mq6%2BV04kR2qCObdIer%2FHysm3XqD3zyyU1gMLG7jCB7VMtVu6HUX5wrnSbBzlBnTodSWqlLLksZ2DY46jDHoXbZr1K43wwJHBojc2WRESf5MpF5%2Bn40U3OU5K1Uk%2BnyI6x4bzkNlV2ODkP%2Burd33OFz6bs9XTXTvLbJLQ%2BbNDK53ZmFE%2BYNsFU61zm8YbRa6QhUVP9gl6km8YHmMYSoT5Biq9op19PKLLjAgD0Rr1YLLOixRtSwbavPL6iMc3M%2BU2FOBj9btF6tCnW3bn35jCadFY3NxSUZBGIxYwvJrVyQY6pgF7ALz2SZ2i%2FYhwFdkgMj%2B4DZa%2Fcqs3nWamJwkx4LTNnmaMtRIUggJvE5wOhhjHiFXw%2B%2B2bnfiVlHoOGrC1xJkdnncUDoQ4bVpnvTCeGeF0zqONljlUTa%2F2Z5fw2xmgFd49l5Dk%2BCRzHp8r0g4A4kj7sf3NtgQ6%2FL1rW8ulrIDr9FF%2FkWCdcB0%2BoUe6I%2FYpt8fZuXwhwCCQ%2FBzGakKAWV3bigPmt9re&X-Amz-Signature=02696b12656b8f51fe59c7114ff05e8145f686b11af34ada5bd7e4049c2ada31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBR6FJTX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FTUrF23vLfs4V3Zp4zop%2Bx4gX%2BpgCMKEEDBRkeRGXwAiBCdpkIJsu7EOAoAwyV1U8dOss1qwHVqaF5RofZehQOviqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMOxKTGQmxI9B7i9EKtwDRqudkTFvsqMldEp9x40uCnzTS1ydR8xxXwfMs%2FGCHm6haffQ4nj2vTCdZMrMUa%2Fcf1o7MR1V3N3kKPaMSo2M6acbOrh%2BdFmvp%2BBd%2FRnrFlw0HvMOFYm9%2BLfoiBGsHrcXv76uaUQUQ48iH2NwGNF3YOs519U6F9WcRvUaEOmFcCmxQVGleoqs45XbTKPDGUr0jMfvISHHGdBXi6Owu8rJDktBI5x0lh3BqFcjiTMQaUtDVBAHZ6Tf6JPP7KnAxasmVNFR6bDOgAtFr%2BEW71kOsROV6%2BAuCXTXDhe2SxY4mwuyDOYsxqK4GUmeyZQSRZT9m%2FUdDJabbTGFzHwIcvfYiuO5Mq6%2BV04kR2qCObdIer%2FHysm3XqD3zyyU1gMLG7jCB7VMtVu6HUX5wrnSbBzlBnTodSWqlLLksZ2DY46jDHoXbZr1K43wwJHBojc2WRESf5MpF5%2Bn40U3OU5K1Uk%2BnyI6x4bzkNlV2ODkP%2Burd33OFz6bs9XTXTvLbJLQ%2BbNDK53ZmFE%2BYNsFU61zm8YbRa6QhUVP9gl6km8YHmMYSoT5Biq9op19PKLLjAgD0Rr1YLLOixRtSwbavPL6iMc3M%2BU2FOBj9btF6tCnW3bn35jCadFY3NxSUZBGIxYwvJrVyQY6pgF7ALz2SZ2i%2FYhwFdkgMj%2B4DZa%2Fcqs3nWamJwkx4LTNnmaMtRIUggJvE5wOhhjHiFXw%2B%2B2bnfiVlHoOGrC1xJkdnncUDoQ4bVpnvTCeGeF0zqONljlUTa%2F2Z5fw2xmgFd49l5Dk%2BCRzHp8r0g4A4kj7sf3NtgQ6%2FL1rW8ulrIDr9FF%2FkWCdcB0%2BoUe6I%2FYpt8fZuXwhwCCQ%2FBzGakKAWV3bigPmt9re&X-Amz-Signature=c6086732bb6c6b987a76a385c6f070fad44334bbdf67fad0c28cc488433922ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

