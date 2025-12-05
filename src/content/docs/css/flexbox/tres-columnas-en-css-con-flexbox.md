---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJYILW2P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbqQxyfzhb88ge5cMpOANvlUcVnuFlUsxM9EaWsCz33AiBahuXV840cqlGQbgsF%2BTnFvY%2BR0MtMOy6ADKWyywFM9Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMFF0ksg7IUKBiXHYPKtwDqEti9PLYPMsvxz49Ph9bB6syBOKSw5h356PxY8n%2FnOz0pkn8IyHZng1bhi2YAmzasJQ5BPd%2B0x%2BoU9VQAMZYXopGX6VoyyFAp7raHYuK%2BCaQ6UiQlJu7e0mGmJGiaSt15ePwuSmLuidsG1w63CvlObxmXn8pr6LLbYvnZOON06SXzNgHKRyZjjnMRSiR6KwSOEYMfNVqAbp7j4MXz%2FxjmpLMaTL3q5pTYh7KxOEAI3GnpIIJBVFNDG15aUECRIOrQ4WQ2%2ByV%2FwQ29u0Ic0XlqC7H1YckgjhTHA2D98W9aBn80G3pikLJaUeDj3xGVuz9yhXl96HM11FX%2Bgt2Mn4%2BGjRX6GtB9HQ5jElwWRFSmg7W2qXsY50fXpdMGTB66C2iWyjR55s8HCQaj616Npq%2BRZdVyawz2BkQB%2BNRtkggyeWEffDrG8a6Oey9xUt%2BLyV9tbcYYeioY34q2xNcJE%2B0JkUzlSCFmI70CJaQDeh859o3rVsKT4nwgfJjUBdpQprGCIkfLU25bSh%2BI%2F%2BGB%2Fc82DKlPkQWD%2BTdpjBsZW3i85T13%2BTj2UaGmlRv6fLAmcGzGIRLQfKDpHsWFPwhZhNZBbTLLj9UqTPGf%2BnTwhCp%2BbwJ9uC%2Bloe3WhS2zFowlozIyQY6pgHEQhsnncRHFDJV%2F5fDwscE2qmMjc4qBMRM1cq1mvctlxUhs%2Fl2Q%2BXa14LBkyqOd2bhRCkL%2F1hqVvDGStfI4L4839Zf5NmJwvDPoIMSQkpmquN51N7RyrEM5rEnu03WwKfdF4cZAbtpxWgE4WF%2B9EhNpSkgf2ejhBOEOAK63lwOEQV0FJtNAJ42W7imqeglT9Qt1LwBjUMqKeyb2Gn6DSugqtxS3s3D&X-Amz-Signature=f5a582c7554485fbd3b33f6f1eb4acb60c4b7d51e6a50b34b78f843237f642bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJYILW2P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbqQxyfzhb88ge5cMpOANvlUcVnuFlUsxM9EaWsCz33AiBahuXV840cqlGQbgsF%2BTnFvY%2BR0MtMOy6ADKWyywFM9Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMFF0ksg7IUKBiXHYPKtwDqEti9PLYPMsvxz49Ph9bB6syBOKSw5h356PxY8n%2FnOz0pkn8IyHZng1bhi2YAmzasJQ5BPd%2B0x%2BoU9VQAMZYXopGX6VoyyFAp7raHYuK%2BCaQ6UiQlJu7e0mGmJGiaSt15ePwuSmLuidsG1w63CvlObxmXn8pr6LLbYvnZOON06SXzNgHKRyZjjnMRSiR6KwSOEYMfNVqAbp7j4MXz%2FxjmpLMaTL3q5pTYh7KxOEAI3GnpIIJBVFNDG15aUECRIOrQ4WQ2%2ByV%2FwQ29u0Ic0XlqC7H1YckgjhTHA2D98W9aBn80G3pikLJaUeDj3xGVuz9yhXl96HM11FX%2Bgt2Mn4%2BGjRX6GtB9HQ5jElwWRFSmg7W2qXsY50fXpdMGTB66C2iWyjR55s8HCQaj616Npq%2BRZdVyawz2BkQB%2BNRtkggyeWEffDrG8a6Oey9xUt%2BLyV9tbcYYeioY34q2xNcJE%2B0JkUzlSCFmI70CJaQDeh859o3rVsKT4nwgfJjUBdpQprGCIkfLU25bSh%2BI%2F%2BGB%2Fc82DKlPkQWD%2BTdpjBsZW3i85T13%2BTj2UaGmlRv6fLAmcGzGIRLQfKDpHsWFPwhZhNZBbTLLj9UqTPGf%2BnTwhCp%2BbwJ9uC%2Bloe3WhS2zFowlozIyQY6pgHEQhsnncRHFDJV%2F5fDwscE2qmMjc4qBMRM1cq1mvctlxUhs%2Fl2Q%2BXa14LBkyqOd2bhRCkL%2F1hqVvDGStfI4L4839Zf5NmJwvDPoIMSQkpmquN51N7RyrEM5rEnu03WwKfdF4cZAbtpxWgE4WF%2B9EhNpSkgf2ejhBOEOAK63lwOEQV0FJtNAJ42W7imqeglT9Qt1LwBjUMqKeyb2Gn6DSugqtxS3s3D&X-Amz-Signature=33b6c3de7f361cd36b8aa78a00b32d6572b834b86628891320aa153dce521b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

