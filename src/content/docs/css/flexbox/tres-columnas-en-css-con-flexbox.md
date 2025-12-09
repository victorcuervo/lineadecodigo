---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGROUEO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiNs0kcP9WfvVZv8UTxLHikResW2pw9JaAiT2tEFDZwAIgahVdQGVK2gDz6oElII9vZJMPpIR8E1OW3A9F2IifKG8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqsdwFitl%2BwFAqHJSrcAzY4C5eNkxN9cUPNAoNVrrA3jSdgjNMnHTeqwe%2FY7VQpURIeaWFr5VMXiK2bP4mzn0SahV2CRfokQbnyqXBt70Gs%2B9dn60hEVowqbX08L3NhIJZLoBWvlfh12jxagUsDrH84BqUq76kAbfGx2DmVbO3hy4AAUe%2FdGYUZmRZM9RcusGU%2FSchrnI6keFtRld8qNjmeyi8RRUylS16dz%2Fj3jSNZ7Kor6QJZbgVSDYI9K8SF2NZpFKsPA%2B6Tl%2FpsKboGDPYZMTHOwH8OLzQWkEW5XIXgkaAPxq6IHdF72VNwh9fzJDL6k%2B9K0PVx2bJOyKL3xDOtI2tivXaTu8qQYaEyEY5g2x3UbTcY%2FkcFgXx%2B%2Fpd3JE9qPaJRGhews0Cjr3PBzdmgx2gfpJjOrO81LLPZIGImaXIPenwFhvyizNkGR%2BjnDG3%2BYCHS55dW4J0pjtaS0No04hQjvr2i0I0dPg%2FcCIsBjwNsJPMBG8R0kj%2BMADnFjLUfHFMsEBSyGkivMCURJ%2BVw6uaEpMP6F9uBfJhZ9E4UovYgOEL2nMlQjs7bzwLUaPNYJeq%2FtbmvAHEKqSXbrCzH3hAYtLai55igB75rJ5dliaWPVa36SoQohmT9u0ItzsfQdxO6EYGXJck9MM%2BN3skGOqUBBPEvgbxVJnSHh%2BkfWE7W9%2BeS4LoPyIR5%2Bv6xYz8LizOwmigBEN6vTqRHH00fBtKcTWwLVMQM%2FEK9anUbUPI4UeMyiypAyCxx3xYg3nFi6G6YOtTRORuizcCLj7ZQeoBCPv90B4lN3iMa7rd9fCVoKHxeUYPzpZ86LDp6EzU8CVbk5UruCQeQrXTqDSCVBG%2FNm5VTSRLjeABO3XbtQGUWS50GwZ2m&X-Amz-Signature=e1f0f7dd76ba221dd5d63801275cb7e2bda9f44b484be5c4c78c79b0ddc52b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGROUEO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiNs0kcP9WfvVZv8UTxLHikResW2pw9JaAiT2tEFDZwAIgahVdQGVK2gDz6oElII9vZJMPpIR8E1OW3A9F2IifKG8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqsdwFitl%2BwFAqHJSrcAzY4C5eNkxN9cUPNAoNVrrA3jSdgjNMnHTeqwe%2FY7VQpURIeaWFr5VMXiK2bP4mzn0SahV2CRfokQbnyqXBt70Gs%2B9dn60hEVowqbX08L3NhIJZLoBWvlfh12jxagUsDrH84BqUq76kAbfGx2DmVbO3hy4AAUe%2FdGYUZmRZM9RcusGU%2FSchrnI6keFtRld8qNjmeyi8RRUylS16dz%2Fj3jSNZ7Kor6QJZbgVSDYI9K8SF2NZpFKsPA%2B6Tl%2FpsKboGDPYZMTHOwH8OLzQWkEW5XIXgkaAPxq6IHdF72VNwh9fzJDL6k%2B9K0PVx2bJOyKL3xDOtI2tivXaTu8qQYaEyEY5g2x3UbTcY%2FkcFgXx%2B%2Fpd3JE9qPaJRGhews0Cjr3PBzdmgx2gfpJjOrO81LLPZIGImaXIPenwFhvyizNkGR%2BjnDG3%2BYCHS55dW4J0pjtaS0No04hQjvr2i0I0dPg%2FcCIsBjwNsJPMBG8R0kj%2BMADnFjLUfHFMsEBSyGkivMCURJ%2BVw6uaEpMP6F9uBfJhZ9E4UovYgOEL2nMlQjs7bzwLUaPNYJeq%2FtbmvAHEKqSXbrCzH3hAYtLai55igB75rJ5dliaWPVa36SoQohmT9u0ItzsfQdxO6EYGXJck9MM%2BN3skGOqUBBPEvgbxVJnSHh%2BkfWE7W9%2BeS4LoPyIR5%2Bv6xYz8LizOwmigBEN6vTqRHH00fBtKcTWwLVMQM%2FEK9anUbUPI4UeMyiypAyCxx3xYg3nFi6G6YOtTRORuizcCLj7ZQeoBCPv90B4lN3iMa7rd9fCVoKHxeUYPzpZ86LDp6EzU8CVbk5UruCQeQrXTqDSCVBG%2FNm5VTSRLjeABO3XbtQGUWS50GwZ2m&X-Amz-Signature=d3d52cd73720703aed46869c390fe3fdd9bcdb75c9c0af264e356c2f44d43d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

