---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDP6LCZ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTylLXlz9SmbUE%2FDM%2B9ucAThDWW3RTaRP17f%2BMrwgDwIhAKsYE73WRirwe6yyeYZLypNjYqLFJQMFCg4ej%2BxE0HRGKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0tkHel2fsxcUcsf8q3AMM9wz8ezciVcEfkA1zGFUfIPg1mbZrja65FLmG0WNcTpFZNj64c2sjCemUBlQ0vSmTRbA1SUADAXE1r4kzocW3rrBhz3my8uro6KRSR84BcoxYxNZ9A6kZiQyClH2E%2BvGhwtDb6KsiNOIB1ejBqeVaxFll1bldudaJNoUizMUEKkDFaX%2BzViItaqxBr62LmTjeZdwz9ND%2F2tP3Vt7LU5w8PCp9rreslCn6Mf7CUZvdaSHtUbBarZvk2%2Bw8ua7mjnoSgtYyebZpjpC3PADAbnfejdMw6gjoLfL%2BDDVhxxAFg%2FjHxAJap4tDr143u2yT7sS5qnRXJfg%2By5NsY3vds3CAES81rvx1C%2FXtkALI3jeioZmceMAwmGDsTpW1cbQLI9lCGrEvv8s9NLO3j9XJBI%2BxgiyDDB%2BSOnR3GJEN1oYuodYdfVK32X1izK8bVYK9y%2F8RzCuf4vLGmW4oI3OBLSO1p6BccJz6aD6gYOu3BHfLMvY3XqhaFbwFtKSrfXhK0hkGauGadoa8uNJkolTVdNOU0eM7LDQHPeUX35mTUdfV9aUJ9Fv011MeuGHWcS9waIdz0d79aDtrlwvkfCy7tzm3PTvLcR%2F2hi3VYZ4uw7sR6KtDD30EOcZmv%2FKn%2BDCb9NrJBjqkATNFG46jdBOcCRxGPtFjh2yfKoXp1Y%2Bark3XRJ8EPk46AUH1TwmhPobef9vNwm5bOFnXPhhTalRnOMBuih995yXVSbfsaJ%2FSZ%2B%2B2ad0qJXsVKBrZGtklxzzdfysE%2BzBl3CkkpSgZrynvWYxl6fP3FonowizVByur7wJ%2BSLjwMSRiloi%2BHtLmepDSIsF%2F43Eg7DQA5Pp1e5IBKIwPD84vRcZSScRN&X-Amz-Signature=7d960936ebf08b690bc957c193913c7479a1063fe10b0c165a62d00d833655e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDP6LCZ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTylLXlz9SmbUE%2FDM%2B9ucAThDWW3RTaRP17f%2BMrwgDwIhAKsYE73WRirwe6yyeYZLypNjYqLFJQMFCg4ej%2BxE0HRGKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0tkHel2fsxcUcsf8q3AMM9wz8ezciVcEfkA1zGFUfIPg1mbZrja65FLmG0WNcTpFZNj64c2sjCemUBlQ0vSmTRbA1SUADAXE1r4kzocW3rrBhz3my8uro6KRSR84BcoxYxNZ9A6kZiQyClH2E%2BvGhwtDb6KsiNOIB1ejBqeVaxFll1bldudaJNoUizMUEKkDFaX%2BzViItaqxBr62LmTjeZdwz9ND%2F2tP3Vt7LU5w8PCp9rreslCn6Mf7CUZvdaSHtUbBarZvk2%2Bw8ua7mjnoSgtYyebZpjpC3PADAbnfejdMw6gjoLfL%2BDDVhxxAFg%2FjHxAJap4tDr143u2yT7sS5qnRXJfg%2By5NsY3vds3CAES81rvx1C%2FXtkALI3jeioZmceMAwmGDsTpW1cbQLI9lCGrEvv8s9NLO3j9XJBI%2BxgiyDDB%2BSOnR3GJEN1oYuodYdfVK32X1izK8bVYK9y%2F8RzCuf4vLGmW4oI3OBLSO1p6BccJz6aD6gYOu3BHfLMvY3XqhaFbwFtKSrfXhK0hkGauGadoa8uNJkolTVdNOU0eM7LDQHPeUX35mTUdfV9aUJ9Fv011MeuGHWcS9waIdz0d79aDtrlwvkfCy7tzm3PTvLcR%2F2hi3VYZ4uw7sR6KtDD30EOcZmv%2FKn%2BDCb9NrJBjqkATNFG46jdBOcCRxGPtFjh2yfKoXp1Y%2Bark3XRJ8EPk46AUH1TwmhPobef9vNwm5bOFnXPhhTalRnOMBuih995yXVSbfsaJ%2FSZ%2B%2B2ad0qJXsVKBrZGtklxzzdfysE%2BzBl3CkkpSgZrynvWYxl6fP3FonowizVByur7wJ%2BSLjwMSRiloi%2BHtLmepDSIsF%2F43Eg7DQA5Pp1e5IBKIwPD84vRcZSScRN&X-Amz-Signature=411fd53f597fe82b9ed251ed3f3d2148753ba326af97c832950d815e9fe46b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

