---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEHGOHS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv7%2FLDOr0Ag1KPmc7KT2KR9656ttbL9GnYuCXi0I4wwwIgK3F46rERaLEB8Ca3MphMEeJ70W5hO9TrQrnm25q859sqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAUFr6Z0TSEij%2BjpSrcA4W2%2BfwcrM%2FjiKkMcxVmOlA9nptIuAORj68ulY27bzNSwbaRJ0fusgggmEg0NITmKrm99nFtpTW%2FGzuAgauy7Rap7bONOs1n%2FohVPZFvAKH7AHrlaHk9g9lyQ3BK2FxkHSCxLTn%2FlwfGM%2FWlqvjtZrJEQzly8oPKcz1SHT3Ivayas7t40laZXu0x9%2BYWjabpuFDmykQHTgLK7cS%2BX6EKDlit8HhhymSJZFb8W7q5HlSqDT8hM2uqvlNKWRFnVyZvuKBVPZZbsxfouPD0HENTnVuMu%2FE2ar7hlZyuOtP34J0%2FYzrF8nWN8ICqEg7M%2F56TSVjO64R6FzOdJaagFMaPkxPdlfoSgMbzsHsy%2BhDq2xhArEpOigBw3W2lMHSgw82ll4g4IkxQXJHlwmVoBlOQHCOGmw7pM7FoHwkOYLFiWWlb1TIY1i4dzUQRArJUCPvfcqetuQ5V8p9LJde57nJffqH26OH%2FGNQo37HxdFj3PVkGHwROMyDvTC9dD%2BkzWjYdWZ2RSS8YVx0MQjgVQ%2BP80v5kzurHaS2MU6lm3WTltN5P8Zz3UmhfmvhwfcNK4pTN0UwgX38qUIuPo%2BjavBx54cAwrpUrTsi7nWJ40StuZzwq%2B%2F8ItR%2BhUJYd4EpiMKCa1ckGOqUBDBvaM91ljd%2BWlDEj59yS%2FhDx2OpvrTbI6wu1A%2F4fDGMnw%2BbihymReuTMg%2BUBUBFZNlrQWiKaawLca%2BBmOcbdR%2FG76AqtIM2bLz%2FOC115A%2F2WSNcq8jOLlfQlI2b9M5nKrEmtdvDd8wPB9GnbS0HmgxWR65NCUJGGiMq1DVTMjrbzRZAdIyYFk25HudbFrrV3BPO4ZmcojqU7YL9pHG%2BhMhQoJcro&X-Amz-Signature=9b85cdf79c4f92e3df43350a0cb21a5891357dcc75bd0a9a853d5179eb548570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEHGOHS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv7%2FLDOr0Ag1KPmc7KT2KR9656ttbL9GnYuCXi0I4wwwIgK3F46rERaLEB8Ca3MphMEeJ70W5hO9TrQrnm25q859sqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAUFr6Z0TSEij%2BjpSrcA4W2%2BfwcrM%2FjiKkMcxVmOlA9nptIuAORj68ulY27bzNSwbaRJ0fusgggmEg0NITmKrm99nFtpTW%2FGzuAgauy7Rap7bONOs1n%2FohVPZFvAKH7AHrlaHk9g9lyQ3BK2FxkHSCxLTn%2FlwfGM%2FWlqvjtZrJEQzly8oPKcz1SHT3Ivayas7t40laZXu0x9%2BYWjabpuFDmykQHTgLK7cS%2BX6EKDlit8HhhymSJZFb8W7q5HlSqDT8hM2uqvlNKWRFnVyZvuKBVPZZbsxfouPD0HENTnVuMu%2FE2ar7hlZyuOtP34J0%2FYzrF8nWN8ICqEg7M%2F56TSVjO64R6FzOdJaagFMaPkxPdlfoSgMbzsHsy%2BhDq2xhArEpOigBw3W2lMHSgw82ll4g4IkxQXJHlwmVoBlOQHCOGmw7pM7FoHwkOYLFiWWlb1TIY1i4dzUQRArJUCPvfcqetuQ5V8p9LJde57nJffqH26OH%2FGNQo37HxdFj3PVkGHwROMyDvTC9dD%2BkzWjYdWZ2RSS8YVx0MQjgVQ%2BP80v5kzurHaS2MU6lm3WTltN5P8Zz3UmhfmvhwfcNK4pTN0UwgX38qUIuPo%2BjavBx54cAwrpUrTsi7nWJ40StuZzwq%2B%2F8ItR%2BhUJYd4EpiMKCa1ckGOqUBDBvaM91ljd%2BWlDEj59yS%2FhDx2OpvrTbI6wu1A%2F4fDGMnw%2BbihymReuTMg%2BUBUBFZNlrQWiKaawLca%2BBmOcbdR%2FG76AqtIM2bLz%2FOC115A%2F2WSNcq8jOLlfQlI2b9M5nKrEmtdvDd8wPB9GnbS0HmgxWR65NCUJGGiMq1DVTMjrbzRZAdIyYFk25HudbFrrV3BPO4ZmcojqU7YL9pHG%2BhMhQoJcro&X-Amz-Signature=8223f8ae50422ff3e8d8cfc157e9d27d136efb1c5d07038f100eed7c346ed604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

