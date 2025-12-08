---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS2WRUX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwTkeXm5q23cgkTVHZdLe5WAyXpr2ZiEtlkZcEBv1JRAiEA3XtnLxhEye7j4mTknHJC8D1mXGq%2FA4jKozMgdRFjF8QqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID5RrxjBs8nBCGvhyrcA6DNfIwU5PfOAFf9Sje6%2Fi1GB4u3gTYZmOKzCCWzQrgfpSPKUROFc52sxqCHBzXYQV1YO%2F1%2Bwef5fjsR5bLorBrRZY1J4XzaSDTRO9nzUFGO3ubbUzQgvhCCJiMLjSsOw1GrifXFRJ41ogeMGKiLJzYxs%2F8iaM1rPw0u8dyIoDNm7lQ2mFwWxhlsjpY5NqyiuBluI6M6c%2F3Ops770FiG1Friy5uWt5KbbRCM7GFBvQyDq%2BClMNJl79jMeVLPuQdJqqIl3b1By9fGHWtlzR4ToveF2zoPJUptlSVexjw%2FBgfpdpeWCFLpBPw0ADCS0QpvnP6p5guPqwvflZz2lyhvvv5HLSTcfl%2BHj6nj%2BB%2F9lRTLepp4ac%2FNr8NHSzS9VFjbxlXVVLoXxMas8%2Fzfiz04Tvn0FMpcVLlQxqatcdEjzEopD6Hhr%2BoPSbo9ggpSS91Egwqr9KS00PNmm69iTt8iZnBY3odQ8UDzuyJiQfeMaQxMIMKqspY934hBhwYvv5JTrs3N%2B0nkiIwN0I4ttruEVbnWt2Q%2FrZ8XG2p8T%2Bc3QOSlliuVixC51IZoAMFEEje05mrlNoTbbNAnkVs%2B8gXVrMJGaoPJDQLAB%2BblcJncjCXH%2Bc%2BIXZo0TOOrfwrsMPjt2ckGOqUBdmhriPDOaW3eeT2%2BczB4YT0EyihOly3lsglJiZA9BkxoY8nWI21UHsuOiXrdjqLDsnAvx4uw4pf0S%2BI9FQOPcQ19XpcUvfHNsiZUn9wFP1eCJQhrV3nyAfGUFJ4LzxjC3Wv4bRnR6wlI3ROb6gjom903DmKHNPv3jqMEyFlfscrCNxAb2BBRhW6uAAaB1NNVnEMeVV45UBH50qqyCVIVx2ZKLpNM&X-Amz-Signature=ce0bacd091089903e406ce91b56b616e6b455586fb10a3b72a3ba155cfc4975c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS2WRUX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwTkeXm5q23cgkTVHZdLe5WAyXpr2ZiEtlkZcEBv1JRAiEA3XtnLxhEye7j4mTknHJC8D1mXGq%2FA4jKozMgdRFjF8QqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID5RrxjBs8nBCGvhyrcA6DNfIwU5PfOAFf9Sje6%2Fi1GB4u3gTYZmOKzCCWzQrgfpSPKUROFc52sxqCHBzXYQV1YO%2F1%2Bwef5fjsR5bLorBrRZY1J4XzaSDTRO9nzUFGO3ubbUzQgvhCCJiMLjSsOw1GrifXFRJ41ogeMGKiLJzYxs%2F8iaM1rPw0u8dyIoDNm7lQ2mFwWxhlsjpY5NqyiuBluI6M6c%2F3Ops770FiG1Friy5uWt5KbbRCM7GFBvQyDq%2BClMNJl79jMeVLPuQdJqqIl3b1By9fGHWtlzR4ToveF2zoPJUptlSVexjw%2FBgfpdpeWCFLpBPw0ADCS0QpvnP6p5guPqwvflZz2lyhvvv5HLSTcfl%2BHj6nj%2BB%2F9lRTLepp4ac%2FNr8NHSzS9VFjbxlXVVLoXxMas8%2Fzfiz04Tvn0FMpcVLlQxqatcdEjzEopD6Hhr%2BoPSbo9ggpSS91Egwqr9KS00PNmm69iTt8iZnBY3odQ8UDzuyJiQfeMaQxMIMKqspY934hBhwYvv5JTrs3N%2B0nkiIwN0I4ttruEVbnWt2Q%2FrZ8XG2p8T%2Bc3QOSlliuVixC51IZoAMFEEje05mrlNoTbbNAnkVs%2B8gXVrMJGaoPJDQLAB%2BblcJncjCXH%2Bc%2BIXZo0TOOrfwrsMPjt2ckGOqUBdmhriPDOaW3eeT2%2BczB4YT0EyihOly3lsglJiZA9BkxoY8nWI21UHsuOiXrdjqLDsnAvx4uw4pf0S%2BI9FQOPcQ19XpcUvfHNsiZUn9wFP1eCJQhrV3nyAfGUFJ4LzxjC3Wv4bRnR6wlI3ROb6gjom903DmKHNPv3jqMEyFlfscrCNxAb2BBRhW6uAAaB1NNVnEMeVV45UBH50qqyCVIVx2ZKLpNM&X-Amz-Signature=6255f6f71291487ba70c01d3fbe9af68abffcf0af778349e6e8fdb71be877f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

