---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOUNC4Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCQ9tqyABgoLpHO%2FHzAHGMp3z3hc12f5vHdDG2u6LFb8QIhAOuvtVxD5CvUf3zDx0NRskvtKHx6pJr8JsqN80QNazkNKv8DCEEQABoMNjM3NDIzMTgzODA1Igy4fD56%2BxINV0kHyeAq3AMyK9mJzFob2MIpQpgpKiPEFw%2BPLjHXCJRH3zBDDesSGsCJigbFklUUPrthS4PGQ2RwEnyLATVHH%2FilVcd4jjmvnBVA0dW59LDls3c%2FelWF1qsW%2BxuHbH2t7NAfJ92wxDbciKDr0DfsynKOXCZa7pTo5XsreYCmscogK%2FXR8yrG%2BU0kUOI%2Fo%2FL6Kj3VDv0CZRREFS8%2BcMBG3FiIFeSYkHeMxPa9NEdh5IWOQQx9laXHuceZ3PzxOxYjMSBlTnF3gFB1bozeQzqSPuJqCGYVzAvioXB0cM1MsmiVKZcIq3E5gRzvignqyR5CnMDMkaXpwbsB%2FNaorIa0aQjCbQupGH1J%2BMdp3ov7IExzf92pBmx8aDNV4PZXfY9hA3x%2BGn4WLAEhm8dgbeauHa4zTpd1%2BEGbwmpo3eUCQHdMbVRS5DzUH4DRfaZdmLI%2BgA5a%2FwJwRjK%2BwwInwZaiUsA8nPABpBGhKijmbJn4vxWIEpZKX1OvtPI5ixKsi8aTivm4Amt5Au2uR%2FCdnwoaR1kJ%2FGixczNjUa2ebHSzpohP%2BlCdIFwlJf23wTUJNM6yDaDEMfZATiEL4aRxliToPAUYhKShtlipx6MEaodycivVWcBqcPAhJEebgTRt07YIe6uUujCQhsXJBjqkATYzaFTJwgzyO%2B%2BIZaSyatrR0adAex2XMRA9b%2BlUztkcAT2lGTw9jZTam%2BBQIrREz0qO%2F9DtZcH7QhvNpOMyUAK9pH1B2hF82QyKgfLyBZGXm7LTNjF1eifKNl6bqcHNWPm5SBdOGZM%2Fbw5byOb6ZZ89Leq0ifcAot3Lvocm5z2NebwnxTADw3ZVA%2F8v1IOX8AGGej7Fh1y0UYOnGcl6GuwszXuq&X-Amz-Signature=999f6d8300df9be0d2da120b5b78f1c39f0435fa349014dd6fda2474261c5100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOUNC4Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCQ9tqyABgoLpHO%2FHzAHGMp3z3hc12f5vHdDG2u6LFb8QIhAOuvtVxD5CvUf3zDx0NRskvtKHx6pJr8JsqN80QNazkNKv8DCEEQABoMNjM3NDIzMTgzODA1Igy4fD56%2BxINV0kHyeAq3AMyK9mJzFob2MIpQpgpKiPEFw%2BPLjHXCJRH3zBDDesSGsCJigbFklUUPrthS4PGQ2RwEnyLATVHH%2FilVcd4jjmvnBVA0dW59LDls3c%2FelWF1qsW%2BxuHbH2t7NAfJ92wxDbciKDr0DfsynKOXCZa7pTo5XsreYCmscogK%2FXR8yrG%2BU0kUOI%2Fo%2FL6Kj3VDv0CZRREFS8%2BcMBG3FiIFeSYkHeMxPa9NEdh5IWOQQx9laXHuceZ3PzxOxYjMSBlTnF3gFB1bozeQzqSPuJqCGYVzAvioXB0cM1MsmiVKZcIq3E5gRzvignqyR5CnMDMkaXpwbsB%2FNaorIa0aQjCbQupGH1J%2BMdp3ov7IExzf92pBmx8aDNV4PZXfY9hA3x%2BGn4WLAEhm8dgbeauHa4zTpd1%2BEGbwmpo3eUCQHdMbVRS5DzUH4DRfaZdmLI%2BgA5a%2FwJwRjK%2BwwInwZaiUsA8nPABpBGhKijmbJn4vxWIEpZKX1OvtPI5ixKsi8aTivm4Amt5Au2uR%2FCdnwoaR1kJ%2FGixczNjUa2ebHSzpohP%2BlCdIFwlJf23wTUJNM6yDaDEMfZATiEL4aRxliToPAUYhKShtlipx6MEaodycivVWcBqcPAhJEebgTRt07YIe6uUujCQhsXJBjqkATYzaFTJwgzyO%2B%2BIZaSyatrR0adAex2XMRA9b%2BlUztkcAT2lGTw9jZTam%2BBQIrREz0qO%2F9DtZcH7QhvNpOMyUAK9pH1B2hF82QyKgfLyBZGXm7LTNjF1eifKNl6bqcHNWPm5SBdOGZM%2Fbw5byOb6ZZ89Leq0ifcAot3Lvocm5z2NebwnxTADw3ZVA%2F8v1IOX8AGGej7Fh1y0UYOnGcl6GuwszXuq&X-Amz-Signature=ce7c3d462da210b5fc730feb91d32e2aaef573ca651a94e6ce652f308953d29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

