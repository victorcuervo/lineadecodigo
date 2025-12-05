---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L7WA367%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCezFpaK5lECdgKG2bcue19vu9u9ScNdUc5BqgXT3K4qAIgFkrnX8zPQZP%2FYPFb7aHD1Swvbf7rVEc0JEf15pUc92Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMq1zensyKNhTJUjjSrcA4s7ELl%2Bz529nE%2F5sDr%2B7b%2BerpIOOjPAcKd9mbh%2BvkGPGU60vwdFD3wj%2FUL6a94J0ovgA0bHcg%2BxPXDKe%2FV%2BiuYSHRxOvoKuZKERWY0YEHxPN9%2Fi6Pxdr9lZtxQel%2BQ4XjrgugaokWyq0xm9RR1vK%2FPg2ptnjiNTgpRUGb464nmvdxwoqIyVBi9U1HFFudOuQZVh5AAR5fS3gqeIT8H3bzA2v17aPlWaUNE0MLIsAc2P8VNE%2FjxdV8RSs%2BWh%2F8G9rppZVjqkni%2BiJxrbVXE8RPLVcLTDterK77jZIpMFb8GspgCCoTFLqbfbZc5p5KM%2F4bRxFdLr8HUtMUAXAsR1rtnugsTtvSKentO%2BnarhqB1omweQRZzsEpaLfhARDTFGyRyHk9QaZmk%2BOyIZ80i%2FjBNpqXeNETJ4AOpeaWjlEPO9ewECzt%2FRk1afA7qPVGkESNFoFkGsE1eSVY32uXEHLDP3Z4fBSRKMxdukzCd3Xei9yaY7LzuBlKW9SlmV5Zhk7zH0%2F9KwYirfJFFg6At4RfsN9S%2BW02DQ9PDoGJPeIMENSIJ3lIiN1GJtdVCHltFxyGadXGVitw5ELnwV%2BzLYlCx6HcWBDt1%2BH%2FnTplkVC7y0uNBioMtdcP8RTYwFMJf4y8kGOqUBQKPUolAiMGY5yrTdZlnJOUo2AnDe3kHSAb2BcCW7oCz57YhojJ6aI58uDOGWIuQITpzpJmJd8hwNvSjLo2yE1JXURvXDmT%2BQMBevucCgGGju0sw3II9yQJVk7FO9sLzvIwNQmS3KgvbJaXRr1S%2FVAG1ZKd89qdZKgL2q0v%2BklGmTt4kCQ7VhfvaVIa74x5CBNZYRVv2ztS%2FOcxs19cXS9qFeMwbb&X-Amz-Signature=2ff816612ac02b202a40ae8966101836512d54149d915e4132786a5bcefcadae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L7WA367%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCezFpaK5lECdgKG2bcue19vu9u9ScNdUc5BqgXT3K4qAIgFkrnX8zPQZP%2FYPFb7aHD1Swvbf7rVEc0JEf15pUc92Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMq1zensyKNhTJUjjSrcA4s7ELl%2Bz529nE%2F5sDr%2B7b%2BerpIOOjPAcKd9mbh%2BvkGPGU60vwdFD3wj%2FUL6a94J0ovgA0bHcg%2BxPXDKe%2FV%2BiuYSHRxOvoKuZKERWY0YEHxPN9%2Fi6Pxdr9lZtxQel%2BQ4XjrgugaokWyq0xm9RR1vK%2FPg2ptnjiNTgpRUGb464nmvdxwoqIyVBi9U1HFFudOuQZVh5AAR5fS3gqeIT8H3bzA2v17aPlWaUNE0MLIsAc2P8VNE%2FjxdV8RSs%2BWh%2F8G9rppZVjqkni%2BiJxrbVXE8RPLVcLTDterK77jZIpMFb8GspgCCoTFLqbfbZc5p5KM%2F4bRxFdLr8HUtMUAXAsR1rtnugsTtvSKentO%2BnarhqB1omweQRZzsEpaLfhARDTFGyRyHk9QaZmk%2BOyIZ80i%2FjBNpqXeNETJ4AOpeaWjlEPO9ewECzt%2FRk1afA7qPVGkESNFoFkGsE1eSVY32uXEHLDP3Z4fBSRKMxdukzCd3Xei9yaY7LzuBlKW9SlmV5Zhk7zH0%2F9KwYirfJFFg6At4RfsN9S%2BW02DQ9PDoGJPeIMENSIJ3lIiN1GJtdVCHltFxyGadXGVitw5ELnwV%2BzLYlCx6HcWBDt1%2BH%2FnTplkVC7y0uNBioMtdcP8RTYwFMJf4y8kGOqUBQKPUolAiMGY5yrTdZlnJOUo2AnDe3kHSAb2BcCW7oCz57YhojJ6aI58uDOGWIuQITpzpJmJd8hwNvSjLo2yE1JXURvXDmT%2BQMBevucCgGGju0sw3II9yQJVk7FO9sLzvIwNQmS3KgvbJaXRr1S%2FVAG1ZKd89qdZKgL2q0v%2BklGmTt4kCQ7VhfvaVIa74x5CBNZYRVv2ztS%2FOcxs19cXS9qFeMwbb&X-Amz-Signature=9282c7ebb01f2fd77de4a7365584249aa6f4a219b2ceb40b1b6b5fc11d3ff86a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

