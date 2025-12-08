---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH2YCF6C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV8bg%2B0h7jKIXDL6g3v1veE3PwQjh%2FxhbzZ%2BEvlnzetQIgHYv%2BaE1aWw0nBBfOG9A4gnbGpjoV7WOmlotyVRvfYsAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtbGSn9GmE4gLe3hCrcAx37Cbcgp%2B4rA%2FMVsRDNgVHtAWxKO9mSOckQu%2FHPnub9%2BN0tM2ZOKg8vCGAHRWUWbITpkU%2F%2FuJ8JFtjtgjqbOKBjhVEKqSUTOiqZZN5iQUHDIOUn26qt1UNUQDCyysKknv%2Fc9uThUCBO3UViEghPz7wbobc%2F52yOCesW8iooIntT1SR%2F02n15jSR2KMPdLTEg9r8dens%2Bw%2B6f0dQJhhjjmgIbvf1IVNk3Eujrhm0bOvgPYrJH6FvGR7f2S5O31%2FKJgiAtsFRSw1q1y3oTgVEDSf9m%2FcM0obnDcX7yIbkQ%2FeS4CQGwSUJeTMuYkFhrEslK7MTMqfFtsPWMNhqSPsWATVkibTI1gcokhDRASUrA%2FecFO7lpAIf2w6yKkCFK11Y5CpW2VZmQKye1DHT3LiURUZ0JkOBNkm%2B5LhLT9Z7UVxpgkoWEDbBQiMiruAjWYf1rPxpHHSaZ9JM3M6HKsknCqv9q5vC4xvBRq5gJljMutH%2FoC9neyGCcztz2dMkoK74mykzsw9gK5xp%2B3%2Be%2FjNw6o8CLDOlq0lqK%2F8t92F91yMligO9ZTM%2FsEGUbqQs4anb%2FxoQOh5qCbFYyBSorlHco2xSMxq0RcRtLsp%2BOxqwvMCVV0d4INniyTGinVoRMN%2BP28kGOqUBM3OP3WR%2FjDoFxC7wWRNmsdHif18K100cp73oJjEI5DxS4thBiQD6c6lEq6b2HyvQl5RNmaivIzsW%2BCl09bN%2FZmMZ788%2BeJjrgoSYJx0oIT6Fd5THIRJQHsw1TN0r%2FdkYlXr4EihRzoAWpqOxqdOx31lS3Sw9%2B9Ksj2%2B1u6oRNRPH5t8uXssgOeh2KDtpBWjdIewzrJ%2FRA2YmJsLv39rwD76AOav0&X-Amz-Signature=036acdd3a3706485d15ff5e4427dbcc2942a8196bd010b3714320ec139ed3ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH2YCF6C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV8bg%2B0h7jKIXDL6g3v1veE3PwQjh%2FxhbzZ%2BEvlnzetQIgHYv%2BaE1aWw0nBBfOG9A4gnbGpjoV7WOmlotyVRvfYsAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtbGSn9GmE4gLe3hCrcAx37Cbcgp%2B4rA%2FMVsRDNgVHtAWxKO9mSOckQu%2FHPnub9%2BN0tM2ZOKg8vCGAHRWUWbITpkU%2F%2FuJ8JFtjtgjqbOKBjhVEKqSUTOiqZZN5iQUHDIOUn26qt1UNUQDCyysKknv%2Fc9uThUCBO3UViEghPz7wbobc%2F52yOCesW8iooIntT1SR%2F02n15jSR2KMPdLTEg9r8dens%2Bw%2B6f0dQJhhjjmgIbvf1IVNk3Eujrhm0bOvgPYrJH6FvGR7f2S5O31%2FKJgiAtsFRSw1q1y3oTgVEDSf9m%2FcM0obnDcX7yIbkQ%2FeS4CQGwSUJeTMuYkFhrEslK7MTMqfFtsPWMNhqSPsWATVkibTI1gcokhDRASUrA%2FecFO7lpAIf2w6yKkCFK11Y5CpW2VZmQKye1DHT3LiURUZ0JkOBNkm%2B5LhLT9Z7UVxpgkoWEDbBQiMiruAjWYf1rPxpHHSaZ9JM3M6HKsknCqv9q5vC4xvBRq5gJljMutH%2FoC9neyGCcztz2dMkoK74mykzsw9gK5xp%2B3%2Be%2FjNw6o8CLDOlq0lqK%2F8t92F91yMligO9ZTM%2FsEGUbqQs4anb%2FxoQOh5qCbFYyBSorlHco2xSMxq0RcRtLsp%2BOxqwvMCVV0d4INniyTGinVoRMN%2BP28kGOqUBM3OP3WR%2FjDoFxC7wWRNmsdHif18K100cp73oJjEI5DxS4thBiQD6c6lEq6b2HyvQl5RNmaivIzsW%2BCl09bN%2FZmMZ788%2BeJjrgoSYJx0oIT6Fd5THIRJQHsw1TN0r%2FdkYlXr4EihRzoAWpqOxqdOx31lS3Sw9%2B9Ksj2%2B1u6oRNRPH5t8uXssgOeh2KDtpBWjdIewzrJ%2FRA2YmJsLv39rwD76AOav0&X-Amz-Signature=ae432f44fc836913c4c61353e3c04c777f064dfcc4fca9dd3b96d191bada2614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

