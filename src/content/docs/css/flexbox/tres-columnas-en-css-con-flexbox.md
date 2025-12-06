---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLA3LZV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcX%2BIEVQCVWrms4RNbjaKusw2%2FLSh1a3asd1lG7ojGnwIgfH8tRGuKfXUIeHCEzo0OTLfi7USa%2B8wRbGq7AKh6gAIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIHd2T8IJNVTGLOTzCrcAw1NElt0GkV2DFJvOPmXQZMNSKS3RxVgIDU5foheGDgORMsIazNMwKR3ZComk%2B6ZRJBoFNF7QW1hs4xfadadIeDYRJ0AahpL%2BrXaONEpDmRTFhxmTC%2B04Scp4FMhR37EPTe%2B7cSaulg8fDySuk957E6QVNbFpDFw8dMLMs%2FdQlyq%2F8gOIYeONN78G1CoiJV50%2FuP6CxPmylTNbeabOjem55qhl1bBx3xSHLwz5ZAeFxLvM%2FufdFyPa5QcBmj%2BV9w2NY9ph1XrqGb1zHD85BId8OOb%2FE4vRwOhEn6y6o6%2BFDkW4pG1NR5PoAaMNFVk%2F591kSrnTS1%2FSWu%2FJZmFAamsCVQI4wRj6O6TytN3wKfAdWA%2BHQeG1xGdLACwKfvJYxRe5vBt17rgaRyY%2Fh6aqlofNz9JEKL1odv177VRPmua65hhpQd%2BBY%2FlgbhUAeAW%2FtcPsMV14CKzqehtGRpEM2Nq5b%2FoHXn97cfk6ePbCY5LBoX%2FnS51zREqWxbIZwVjTrwSgzI1mX8pSp0c8g29JmISSpKABDypwdM8bkCATSAf%2FMu7b3Qwm5szYaon2q8WYNknNCqE5st1grSfvMMSpaLsMA%2FRE8efLipVM3StO%2BCRtyn2a7rNTMd8W9kXchZMIGozskGOqUBiJrn%2BQTvfZg1XL3x4QCjt3ke0tQHHDzmEG%2Fp4MfRmGUgyyUOFO%2BvJOIpnB1iifhUklbxIMgVOu1ZeG37JEkK9nzCkuinBo9iKohkP0hxuH0Y7XOI7pK8HFFLi9lj2ZdZfY779v5leEG0EiNGuz5yQLMYeKZnYHBr%2BU7bw3Q4S%2BvOW7mO7DScsHCi6aHZxa9Cp22pBqfOhQoNdhgkJ5s%2B6Y1wPAgA&X-Amz-Signature=b092007c403de18cbd61323ae83423995e01ef4bbef188e63fd4176c4a77b593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLA3LZV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcX%2BIEVQCVWrms4RNbjaKusw2%2FLSh1a3asd1lG7ojGnwIgfH8tRGuKfXUIeHCEzo0OTLfi7USa%2B8wRbGq7AKh6gAIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIHd2T8IJNVTGLOTzCrcAw1NElt0GkV2DFJvOPmXQZMNSKS3RxVgIDU5foheGDgORMsIazNMwKR3ZComk%2B6ZRJBoFNF7QW1hs4xfadadIeDYRJ0AahpL%2BrXaONEpDmRTFhxmTC%2B04Scp4FMhR37EPTe%2B7cSaulg8fDySuk957E6QVNbFpDFw8dMLMs%2FdQlyq%2F8gOIYeONN78G1CoiJV50%2FuP6CxPmylTNbeabOjem55qhl1bBx3xSHLwz5ZAeFxLvM%2FufdFyPa5QcBmj%2BV9w2NY9ph1XrqGb1zHD85BId8OOb%2FE4vRwOhEn6y6o6%2BFDkW4pG1NR5PoAaMNFVk%2F591kSrnTS1%2FSWu%2FJZmFAamsCVQI4wRj6O6TytN3wKfAdWA%2BHQeG1xGdLACwKfvJYxRe5vBt17rgaRyY%2Fh6aqlofNz9JEKL1odv177VRPmua65hhpQd%2BBY%2FlgbhUAeAW%2FtcPsMV14CKzqehtGRpEM2Nq5b%2FoHXn97cfk6ePbCY5LBoX%2FnS51zREqWxbIZwVjTrwSgzI1mX8pSp0c8g29JmISSpKABDypwdM8bkCATSAf%2FMu7b3Qwm5szYaon2q8WYNknNCqE5st1grSfvMMSpaLsMA%2FRE8efLipVM3StO%2BCRtyn2a7rNTMd8W9kXchZMIGozskGOqUBiJrn%2BQTvfZg1XL3x4QCjt3ke0tQHHDzmEG%2Fp4MfRmGUgyyUOFO%2BvJOIpnB1iifhUklbxIMgVOu1ZeG37JEkK9nzCkuinBo9iKohkP0hxuH0Y7XOI7pK8HFFLi9lj2ZdZfY779v5leEG0EiNGuz5yQLMYeKZnYHBr%2BU7bw3Q4S%2BvOW7mO7DScsHCi6aHZxa9Cp22pBqfOhQoNdhgkJ5s%2B6Y1wPAgA&X-Amz-Signature=ef6b5837daa4a91ba8f23748e1a84b483cca1e6911465a32c79f11f309f8f32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

