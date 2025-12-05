---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DIKH2JG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD64lco5j57VQ2nFh%2FJvmmPC4O2jD2YIzPv5uMtSoycMQIgb%2F06wvFawNi%2BXKG3hM4sszgVbD96yJHSiDdOq0N1X4Iq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJZXMStAWm%2BpSel%2F5ircA7YYLFRkho6Ik9QSW0dawAdu9JW%2BcUWI7fV2%2Bb3lcjTEpgQaAEKCrSD%2B5dIXmKd2gwCsVc16M%2FcVvwekhI%2FaqUP5BwoHauW%2BnAmYthZp69PWcCEl0TjvKUthYDxCAiIbQgaLtdSV9MeuEqHBHvxzP278KD%2FKuit9m2nXOzIxBXTd6OZSkd3qUWtVfMJscen%2B7ysVGzbpNuzP6tdC8gvNovPIOdelRW%2BemN9PfJ6qwkLR%2B72XK1DRt2c%2BlWUFt27oGDqQjQh4tYVXDgW0JAWi0UMCXmcfP7%2BbHnjDsbVPE1qWhFfXXI3XTqNbkjfIVcxSflalhS0xSBhajDdVSPzTLsuzF88mmryl854cSOKapO9wTiqN9PnUbZ%2B1SV7DpZRRPFQJpqjDtlSGhR2uXjz9oGnULW%2FzM2wy5b3h8ulq0Y4hdrl7bItM2buTUu8a7r6XBwMQHAshpRqoMkH3Pvk5LMXGM4pQUIJZcud3jH2NTeuJeWM6DXWiJniMwmpu3ZXXK575UKD9vrgUJYvgqcgM5xLHcpVjAH%2FivZnkeAQn1EO2yK0S8RMNT55vcefVz%2FBMSVbJtajv2igJCqgxXLtSvsk2gWc%2FVDfxThDdaM0q%2BddyfiuAbeUWKQrEksrTMLKsyckGOqUBc47Xs7ruBYd822Te9uDeQMSfYx2n9bP3hr03aWxPkX8n7S6p0IuXRmhgqCghw%2FJualFGhKY71E3aGXpOICjTjgEoLG4pDeuoHi6f0wVfQicy86UQwtP1lbuhvlw28hF4RPM64zTC%2FOVe7pvs%2FFgMzBssLVEQEFCpe0jAevO9fFR%2BexcYPX6iu685XPg0aYJEpql4rP9mXPxwPybDhZtoROtjB0LU&X-Amz-Signature=5d0f93966c5cc5c1bd17437c9ddbe6fe9545a51b7a9c0f55b5c5321f29bebf69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DIKH2JG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD64lco5j57VQ2nFh%2FJvmmPC4O2jD2YIzPv5uMtSoycMQIgb%2F06wvFawNi%2BXKG3hM4sszgVbD96yJHSiDdOq0N1X4Iq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJZXMStAWm%2BpSel%2F5ircA7YYLFRkho6Ik9QSW0dawAdu9JW%2BcUWI7fV2%2Bb3lcjTEpgQaAEKCrSD%2B5dIXmKd2gwCsVc16M%2FcVvwekhI%2FaqUP5BwoHauW%2BnAmYthZp69PWcCEl0TjvKUthYDxCAiIbQgaLtdSV9MeuEqHBHvxzP278KD%2FKuit9m2nXOzIxBXTd6OZSkd3qUWtVfMJscen%2B7ysVGzbpNuzP6tdC8gvNovPIOdelRW%2BemN9PfJ6qwkLR%2B72XK1DRt2c%2BlWUFt27oGDqQjQh4tYVXDgW0JAWi0UMCXmcfP7%2BbHnjDsbVPE1qWhFfXXI3XTqNbkjfIVcxSflalhS0xSBhajDdVSPzTLsuzF88mmryl854cSOKapO9wTiqN9PnUbZ%2B1SV7DpZRRPFQJpqjDtlSGhR2uXjz9oGnULW%2FzM2wy5b3h8ulq0Y4hdrl7bItM2buTUu8a7r6XBwMQHAshpRqoMkH3Pvk5LMXGM4pQUIJZcud3jH2NTeuJeWM6DXWiJniMwmpu3ZXXK575UKD9vrgUJYvgqcgM5xLHcpVjAH%2FivZnkeAQn1EO2yK0S8RMNT55vcefVz%2FBMSVbJtajv2igJCqgxXLtSvsk2gWc%2FVDfxThDdaM0q%2BddyfiuAbeUWKQrEksrTMLKsyckGOqUBc47Xs7ruBYd822Te9uDeQMSfYx2n9bP3hr03aWxPkX8n7S6p0IuXRmhgqCghw%2FJualFGhKY71E3aGXpOICjTjgEoLG4pDeuoHi6f0wVfQicy86UQwtP1lbuhvlw28hF4RPM64zTC%2FOVe7pvs%2FFgMzBssLVEQEFCpe0jAevO9fFR%2BexcYPX6iu685XPg0aYJEpql4rP9mXPxwPybDhZtoROtjB0LU&X-Amz-Signature=b1ae521f439185c5f4c9f423cb7cc641bc249080419c95c39b9a29cad771fef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

