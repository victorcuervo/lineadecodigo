---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVLDWTSW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERESu4sDhvIb%2FOD%2Bpqyulm2xaFPPmrEdZ5IESdg2oh6AiEA1dQZ6Ag%2F5t04UptZTVTRzod9fkK9NITFhgAg1%2F18oBAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIQ2xsf%2BuGmxuC1srSrcA0ET2EMq8EC%2FX%2B18%2FTHuKbDUHOm5JMma1Q4%2BNM3lPCRLWbqQOs99nvrsbxHXHfFiUedvbt4ZX7LteK3hRq6J6Hy6eeYIY1TZgTGRe3R6WTOXh2JRwWzkW227UpG1cvnvDpACBO5vV6Uvy5TLa6IIbEgKtyYzW%2BpTSrfz%2FLbIRBOvxoLQZYY2eYMjboJvv6i0%2B0LsUx4F64YjLJNmLY3QoWtCS1TyQ15xSxjJ5JasmleBpTEQoYgcoT6k8Qg87tjn25iqEb0BiB33jABd20Wy59weoFKMek35MRFo1W%2BMrHeFbUh%2ByTqwYj7BftSVqlUjVbiDPj70ib%2FxpGFbpOkPi8wu4yUSz%2B%2BgxY4Pkwv8bWYRsRafdiVZJpvEEbGF1o2zIGn2yg65MNAnkyA2G%2Fbpkakp5sEltroYKFK707n9uPpaUAK5EsVclWX%2FYQWks9cPGehS21JaubW%2FnRSXy%2FgABJselyL9CcCUiRijVfvRYaAIhlfKkIyzNGO57PTA6Z4BEOVwYu8lOPvfcRd81u41L3q%2FALYBC6cb1%2F52fduRmneIueGe5L9cMumELv2G4R6zqqP%2Fvea4l8SgxMW4GntfwGPejStn7Q1oCD4uZbRT5jJe5MhBhiBI3rZ38S%2FTMLKm0MkGOqUBNbbc857N%2FpKDA6w54nNHClFJfKYJCs5D%2FFMDrUHfuqJCJqErF%2BVUZXo8NdM1JJteLp52ys57KxklDiY6DPYq7PBr8z5brlgoS6Sq2t1yHyoPOEWYwVm%2BvW83n2me4V%2BKyjGVV9%2ByF2Ogqc8XaRTgclh3GN71F0Lrr9ftfc5EaDuTAuLJFb9%2Fdi4hDDWPjKPQpim%2F%2BbbSgxOxoLSix5rWsvpgpZCI&X-Amz-Signature=47e90d5f2f26ab26404f428126e67cab0841356c756e35a461ee04d71c388450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVLDWTSW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERESu4sDhvIb%2FOD%2Bpqyulm2xaFPPmrEdZ5IESdg2oh6AiEA1dQZ6Ag%2F5t04UptZTVTRzod9fkK9NITFhgAg1%2F18oBAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIQ2xsf%2BuGmxuC1srSrcA0ET2EMq8EC%2FX%2B18%2FTHuKbDUHOm5JMma1Q4%2BNM3lPCRLWbqQOs99nvrsbxHXHfFiUedvbt4ZX7LteK3hRq6J6Hy6eeYIY1TZgTGRe3R6WTOXh2JRwWzkW227UpG1cvnvDpACBO5vV6Uvy5TLa6IIbEgKtyYzW%2BpTSrfz%2FLbIRBOvxoLQZYY2eYMjboJvv6i0%2B0LsUx4F64YjLJNmLY3QoWtCS1TyQ15xSxjJ5JasmleBpTEQoYgcoT6k8Qg87tjn25iqEb0BiB33jABd20Wy59weoFKMek35MRFo1W%2BMrHeFbUh%2ByTqwYj7BftSVqlUjVbiDPj70ib%2FxpGFbpOkPi8wu4yUSz%2B%2BgxY4Pkwv8bWYRsRafdiVZJpvEEbGF1o2zIGn2yg65MNAnkyA2G%2Fbpkakp5sEltroYKFK707n9uPpaUAK5EsVclWX%2FYQWks9cPGehS21JaubW%2FnRSXy%2FgABJselyL9CcCUiRijVfvRYaAIhlfKkIyzNGO57PTA6Z4BEOVwYu8lOPvfcRd81u41L3q%2FALYBC6cb1%2F52fduRmneIueGe5L9cMumELv2G4R6zqqP%2Fvea4l8SgxMW4GntfwGPejStn7Q1oCD4uZbRT5jJe5MhBhiBI3rZ38S%2FTMLKm0MkGOqUBNbbc857N%2FpKDA6w54nNHClFJfKYJCs5D%2FFMDrUHfuqJCJqErF%2BVUZXo8NdM1JJteLp52ys57KxklDiY6DPYq7PBr8z5brlgoS6Sq2t1yHyoPOEWYwVm%2BvW83n2me4V%2BKyjGVV9%2ByF2Ogqc8XaRTgclh3GN71F0Lrr9ftfc5EaDuTAuLJFb9%2Fdi4hDDWPjKPQpim%2F%2BbbSgxOxoLSix5rWsvpgpZCI&X-Amz-Signature=11d7d0bd4a99b7e4dd00d7ba6a6c08f086f34a21e171eb73b8ec70603659676f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

