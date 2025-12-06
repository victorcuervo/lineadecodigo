---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BX3EFIF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeO%2BIYAniYpuy%2BR5xNgJcSXUk%2B4DTEo30taM38z%2BGeSwIgXlGNghcaZ0fWWfBNQ2NlFBEAm68NEJJLTqktw5%2FB3nUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDL0UPM5lPryiOYGfvyrcA%2FJrdffCQsMPj0ZOz4UefM%2BYXn1rAu8VUfdofJJkQhQRNPQIwlM28EjtlHqRfNJXRObFK3TgUQThcTVINraObosz2FjnvH05ZYhEoH6CPjX8usc8zwST5amopoTbOaSjsNc5KmqLlZY5XWAFKw1vZG1AG99miTLasqAv2%2FubNHhIi1Rc6Sqvr23zsexME3XF8G1pL8ZwqL7N4ldFjfTrJ1tcSgqZV3%2FGUoTTc1z3Tr9JnOm7v%2F5O%2Bl1atF7x6nTbXfCqK1YYGIb6fZ4555SMNF88pWVC4tb03ru%2Bugr6OJtjSf5Hrwdv4ysXVGo4twwdT1rN6ZXJwTeXhZPQ702RxxWdkbmtOhheg7qEOukyYa4O8ZfEsLQbDaWUV%2FUeWRtfql4jB%2BLM%2Bb45w6OSVDATFpqnCxAr4g4qgCvVO%2FzBifM39iJ3vB4DJ5TMeveQ2spUjDbWsuuD095biZlKlzYwKPwWBGcqMitD%2FZUUgp%2BKvg4boObVfRanM9K6C2IXyLK%2BenD8xn6O1DPrcdvtooHFjfxfnDPCst5pApWm1xClMEXJQLlUqldrzYFUtfQTB4Z9tDQ3IMhAzdwuJ8XgOHD4Wn7dq4CddcyqIYqgkHgUw68TShr3SRtRTe5e87UzMIvezskGOqUB4%2Ffst%2FUrzdNDAgYIRS44oWYs9FZBOYGd32pz4pJWyyt8wbFVXSTbqHiBEu%2F9Vs6nKHcT9Ppuwk7uJTjPT942FOINIG0kzd6%2BQ9WO73IE0r6XKqyUWsHZU8jFU4m%2BzEcEAj1ldAtn%2BMK5OshKp2Zkc1S6Tyh3bbj3rtfRKFqhABcaGtUK9j03ItnrmJDZ99uERYE%2FdhNocINOSNO3Cq76bG4hxxAN&X-Amz-Signature=9a4b190893c9c1153af80e64c2f31b31947732fbf176a4230a5d1b67a62ceff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BX3EFIF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeO%2BIYAniYpuy%2BR5xNgJcSXUk%2B4DTEo30taM38z%2BGeSwIgXlGNghcaZ0fWWfBNQ2NlFBEAm68NEJJLTqktw5%2FB3nUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDL0UPM5lPryiOYGfvyrcA%2FJrdffCQsMPj0ZOz4UefM%2BYXn1rAu8VUfdofJJkQhQRNPQIwlM28EjtlHqRfNJXRObFK3TgUQThcTVINraObosz2FjnvH05ZYhEoH6CPjX8usc8zwST5amopoTbOaSjsNc5KmqLlZY5XWAFKw1vZG1AG99miTLasqAv2%2FubNHhIi1Rc6Sqvr23zsexME3XF8G1pL8ZwqL7N4ldFjfTrJ1tcSgqZV3%2FGUoTTc1z3Tr9JnOm7v%2F5O%2Bl1atF7x6nTbXfCqK1YYGIb6fZ4555SMNF88pWVC4tb03ru%2Bugr6OJtjSf5Hrwdv4ysXVGo4twwdT1rN6ZXJwTeXhZPQ702RxxWdkbmtOhheg7qEOukyYa4O8ZfEsLQbDaWUV%2FUeWRtfql4jB%2BLM%2Bb45w6OSVDATFpqnCxAr4g4qgCvVO%2FzBifM39iJ3vB4DJ5TMeveQ2spUjDbWsuuD095biZlKlzYwKPwWBGcqMitD%2FZUUgp%2BKvg4boObVfRanM9K6C2IXyLK%2BenD8xn6O1DPrcdvtooHFjfxfnDPCst5pApWm1xClMEXJQLlUqldrzYFUtfQTB4Z9tDQ3IMhAzdwuJ8XgOHD4Wn7dq4CddcyqIYqgkHgUw68TShr3SRtRTe5e87UzMIvezskGOqUB4%2Ffst%2FUrzdNDAgYIRS44oWYs9FZBOYGd32pz4pJWyyt8wbFVXSTbqHiBEu%2F9Vs6nKHcT9Ppuwk7uJTjPT942FOINIG0kzd6%2BQ9WO73IE0r6XKqyUWsHZU8jFU4m%2BzEcEAj1ldAtn%2BMK5OshKp2Zkc1S6Tyh3bbj3rtfRKFqhABcaGtUK9j03ItnrmJDZ99uERYE%2FdhNocINOSNO3Cq76bG4hxxAN&X-Amz-Signature=b89cbaa7fa1181aec6de25dba80721741da4343752ee8fb27c7e5957e57a478a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

