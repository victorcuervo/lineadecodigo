---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R673OWCX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCftddZQAD0tYVByhVWgRBL5tShM%2FciJ445YMRK6fC9pwIhAMvIZnRnnIW6zOkmaa79QVeTe%2BlN0Ps8PZS2vySB%2FlRRKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSTF422tzdvRCY5Owq3AMpU133vAqkNJwJIW9YRJEohF%2FWoBv1WedZQzYdyWPjCU3rAOg5Q8wJ3b4Vbhqoi8ZoVwrpf2JFDpu36L3jR0XXJ%2BL1rVRmn2uUZer%2F1hcAwbHEvGCt%2Fchh2UqsiT%2B00sxGH2SU8AK%2BjbiDbQPOwWQKQChmEOnOLaBcM1DXiqDFCgl48WYlLGvoQ7dorwC7bkN%2FJNNmZGBQt1uTnSfpIGtYMBrK3yBln8SVG%2FyhzFiLz1LKkF2k8Cyuic3AxIZY9WU06nxDZgtyf%2Bt0rlRYbCAm9T3No2rpyMNlzf7zaw00EjernxokwaXss4o5oOm5r2aqVwxrl%2BO7MykqB75zo1Lg8PCYv7%2FF2QtdlgiNz4wKDYNnZvp7R2x6G9WVqtwk6tGGxXfnrmwYBY6z0Ri0ieAAJyGyWNj7XgoSkzvtP7swLwSZNmNF8vtEehARNojwg4HDnbaL6dEjkgHKZAp9fX%2BaqGsEYc9%2FTJI8AKtxtnUMslD3Fp0iYRihS4yU%2FC0M23JQX26DdLXfycPhIGDun1ijA6EDdDQwSQ0yK1RUiRP6v6Zoz3dotM4nufe0XFBr0cBmsFU0jZh3qGfRfNsRD6MMd3dG68ELZgI2XyIoj9O%2B4NeTpvfad4ZyCMAubTDq%2F9zJBjqkAe2SiLwURANGk%2Fon%2B0hXmhtJDeugiEI4ki4LGdH%2BdJInGO980uI2Ozsej%2FUkeRTYQ0q92Dmg6Bd9mdrmarnvPPnJ4al64lxg2v2EnvQ%2By5tNoI44HkFUpEZ%2B6gF2kwkHVm5t9YlNMYdJApDa6Qph%2FWNTW2LwnLEl4J4tnoC6qJpeKT75Aa8a5sV9HCXhH4gmt0b%2FBc%2FHwo0wyEpi4Zla1nvinDGC&X-Amz-Signature=56b3c61388177f7cf6a9aea33e1376648b54f851bf9cd59a55651cefc7bb00af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R673OWCX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCftddZQAD0tYVByhVWgRBL5tShM%2FciJ445YMRK6fC9pwIhAMvIZnRnnIW6zOkmaa79QVeTe%2BlN0Ps8PZS2vySB%2FlRRKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSTF422tzdvRCY5Owq3AMpU133vAqkNJwJIW9YRJEohF%2FWoBv1WedZQzYdyWPjCU3rAOg5Q8wJ3b4Vbhqoi8ZoVwrpf2JFDpu36L3jR0XXJ%2BL1rVRmn2uUZer%2F1hcAwbHEvGCt%2Fchh2UqsiT%2B00sxGH2SU8AK%2BjbiDbQPOwWQKQChmEOnOLaBcM1DXiqDFCgl48WYlLGvoQ7dorwC7bkN%2FJNNmZGBQt1uTnSfpIGtYMBrK3yBln8SVG%2FyhzFiLz1LKkF2k8Cyuic3AxIZY9WU06nxDZgtyf%2Bt0rlRYbCAm9T3No2rpyMNlzf7zaw00EjernxokwaXss4o5oOm5r2aqVwxrl%2BO7MykqB75zo1Lg8PCYv7%2FF2QtdlgiNz4wKDYNnZvp7R2x6G9WVqtwk6tGGxXfnrmwYBY6z0Ri0ieAAJyGyWNj7XgoSkzvtP7swLwSZNmNF8vtEehARNojwg4HDnbaL6dEjkgHKZAp9fX%2BaqGsEYc9%2FTJI8AKtxtnUMslD3Fp0iYRihS4yU%2FC0M23JQX26DdLXfycPhIGDun1ijA6EDdDQwSQ0yK1RUiRP6v6Zoz3dotM4nufe0XFBr0cBmsFU0jZh3qGfRfNsRD6MMd3dG68ELZgI2XyIoj9O%2B4NeTpvfad4ZyCMAubTDq%2F9zJBjqkAe2SiLwURANGk%2Fon%2B0hXmhtJDeugiEI4ki4LGdH%2BdJInGO980uI2Ozsej%2FUkeRTYQ0q92Dmg6Bd9mdrmarnvPPnJ4al64lxg2v2EnvQ%2By5tNoI44HkFUpEZ%2B6gF2kwkHVm5t9YlNMYdJApDa6Qph%2FWNTW2LwnLEl4J4tnoC6qJpeKT75Aa8a5sV9HCXhH4gmt0b%2FBc%2FHwo0wyEpi4Zla1nvinDGC&X-Amz-Signature=44901c48e3fc49cfe9fab76d770c4449694bc04543c4cc4c77b4a17471af6bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

