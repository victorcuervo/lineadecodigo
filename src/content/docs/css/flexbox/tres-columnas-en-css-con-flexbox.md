---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623SJZPEI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN9CUbvs15yS%2BwzeSjUmoYbb9CGXB52%2F3aVKDQ%2FypLfQIhALKdGN4Ed9KrR%2FmTT%2B3Nr3Z%2BjGZcQC3%2BnjCjK%2BD5TKQiKv8DCHIQABoMNjM3NDIzMTgzODA1IgzS3W39v9hOHv%2F4ovMq3AMOOAOi4V9zIKwaRw1v7v6uCbCRItxhqW61IsEsiBK1crUjPSDlHOeC0J5I9Ej%2BuXFQjJcuRmDA1Qai8Fq9Jcb2i4fVtMypAx%2BlCP6x74fnqzhwsnoq2kjKvAniDxloNr3ZgAlxkApp0n134J0LUhM34NARq6eZPmTXVIgT04T0K26w3OkkLUfoHvyFp2hQphuSMHWqLMYK7CUW7ogGCE4tbYZcfSSaPBtaXGEGyZy%2F%2FMM9rZJkaCWvBkGj%2BEf7RjJfxojfZmTDAP1K%2BL5LiTM9M7EUf3z2ZrQePDaS0nzo6JoPQiqxczztofW3eXG2ZBT4IxPo0F3wxSOcIPPmhPOaCky%2F8%2FDroWZ9EiWR%2Fi%2BxWTo3KETJ%2FWQMB%2FckY6G%2Fs7dF2eP2eEPCy6f%2F%2B%2F8gqmu3PuQnR3SMeip7fVx%2F%2FnhvCEWzcEUY4j8Tu8E5eqcamEFrOIKOrk7%2FYf7CV9D1P122EZzdBr0R8f6Nce01FKKM03Xz7OIw4og4gOCexc6lSSlddBXe%2BnVSzRY36O9arLr3r%2BAK%2BN35zej53iL4F4Xb%2Fx5SvjN%2B5DYeblGsfWlFMN3iIbrrIj4AUmcCFjzSGDXwpiaibI2TAkhyhWqkUMmo%2FYjQJprXC2%2BLNsRxIjD16s%2FJBjqkAVE0Syep1SMjxFRDauaGKbcIpQ2dpafICfxUC6jyIJF5QfAZ9vD37acYelbDHGCa7f2SNKxp0BGjJVBTbzwcVEylnPIWs%2BNlbmc0TsekxKFMbLPjbM6bM%2B%2FKfsvgXORiHC8fvzYMFW1HNdXOLoYJFm1A6WwteqErKYCRa72brIfFs1%2FQ52NjFkq7nVBHAKWou6tdqSGftxrYGMnT5YcP5Ih4KPiy&X-Amz-Signature=cb41205344445c2a1bb64e8988135746241249d62595e67f5b0f8eb35e7d5bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623SJZPEI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN9CUbvs15yS%2BwzeSjUmoYbb9CGXB52%2F3aVKDQ%2FypLfQIhALKdGN4Ed9KrR%2FmTT%2B3Nr3Z%2BjGZcQC3%2BnjCjK%2BD5TKQiKv8DCHIQABoMNjM3NDIzMTgzODA1IgzS3W39v9hOHv%2F4ovMq3AMOOAOi4V9zIKwaRw1v7v6uCbCRItxhqW61IsEsiBK1crUjPSDlHOeC0J5I9Ej%2BuXFQjJcuRmDA1Qai8Fq9Jcb2i4fVtMypAx%2BlCP6x74fnqzhwsnoq2kjKvAniDxloNr3ZgAlxkApp0n134J0LUhM34NARq6eZPmTXVIgT04T0K26w3OkkLUfoHvyFp2hQphuSMHWqLMYK7CUW7ogGCE4tbYZcfSSaPBtaXGEGyZy%2F%2FMM9rZJkaCWvBkGj%2BEf7RjJfxojfZmTDAP1K%2BL5LiTM9M7EUf3z2ZrQePDaS0nzo6JoPQiqxczztofW3eXG2ZBT4IxPo0F3wxSOcIPPmhPOaCky%2F8%2FDroWZ9EiWR%2Fi%2BxWTo3KETJ%2FWQMB%2FckY6G%2Fs7dF2eP2eEPCy6f%2F%2B%2F8gqmu3PuQnR3SMeip7fVx%2F%2FnhvCEWzcEUY4j8Tu8E5eqcamEFrOIKOrk7%2FYf7CV9D1P122EZzdBr0R8f6Nce01FKKM03Xz7OIw4og4gOCexc6lSSlddBXe%2BnVSzRY36O9arLr3r%2BAK%2BN35zej53iL4F4Xb%2Fx5SvjN%2B5DYeblGsfWlFMN3iIbrrIj4AUmcCFjzSGDXwpiaibI2TAkhyhWqkUMmo%2FYjQJprXC2%2BLNsRxIjD16s%2FJBjqkAVE0Syep1SMjxFRDauaGKbcIpQ2dpafICfxUC6jyIJF5QfAZ9vD37acYelbDHGCa7f2SNKxp0BGjJVBTbzwcVEylnPIWs%2BNlbmc0TsekxKFMbLPjbM6bM%2B%2FKfsvgXORiHC8fvzYMFW1HNdXOLoYJFm1A6WwteqErKYCRa72brIfFs1%2FQ52NjFkq7nVBHAKWou6tdqSGftxrYGMnT5YcP5Ih4KPiy&X-Amz-Signature=ba76c9dda97c7a8fb05e5600b19eb8cb6450adf265727ecef689925356c4b4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

