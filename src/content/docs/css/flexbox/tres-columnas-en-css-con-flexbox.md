---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGTGGSI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP5ytqs28ZEpaLZt5Rb8XiHv3ryoXFtLGhSubwaMuzWAiB4z0M7U8c7dEsexgiD4OfIesHWkc6%2BnwxtK0hb%2F3ewLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMa1xl0QwLcE9wOuM5KtwD%2FDLzBD%2B0KN1mN0QZ402nNWCIF34n9gn16EcF87u9nzltWxPQI6iPastr5OAinQKgGWga11UmlPh3wSyj%2B4LR8RhK1TeGUlWPK2pWy%2FjYG%2Fc2Kp6XSlQ1SQg%2B9D27Tdw%2BnQxPF9ggpNW7s7fx3bgLyJcQvYFdqmf6y8ng8PDaT2jy%2FmqwKIoilrrXEZvimUrXC6XgBpmXpbXF8eW275VW6%2FHmNTGPpLt5zb%2BYT%2Fy%2BNq%2Bj7bWs5IDdFYHBEiRYTIEoG%2BlAybCx5otA%2BuXmCMluyoCuNTQddzcWirV9r23u0msjMYm7dS23mw5IEsqNBflu6Uu%2BfTrvB3CFw1nDI5jwnxiXxw2tnCCeIjhq%2BXkSfQNT5%2BM4d8UHYdBYPcP14SAwzpk2Kwgc2ladBTsl9qSXLWZmx58nZQ0rc%2FlK8GYxmp8d6h2fA48XO%2FJZZHBriMC5HDFTCflZEZlO3G0EyejiwMe7RLNOaQSOxljpyPU3y23u0Iv1qq7wTQGK%2FCW%2ByEVjyhwqhPCdzV2n5Y157jy%2BK1kVm0nu9HkqGTOmGk9c%2FwnP3YSKibe2tOdcieIk%2FqiXkONuKtFs%2FySAELf9sw1L4v9%2FoUiln6NquQhqVjmWn4wxNUijYj7EgM3PfHAwkKfQyQY6pgEPWDpCeUnFpl7FDuzHLGCCMljCnW%2BJecbyLnaTRouvSSYtdbjwFxn8PbuoIHNHbiuOYQzOd91%2FU%2FqTgbZiGDQhaXUphxkj8CGjraLqAVHOx5DQqJ51NsI5WhCmtIngdH3Kb02%2FWhevvSyhkmwGHn2RVWOFqONKEyi4AvxVx5VLD9JmGWhwzTPj9PpHp5dnv%2Fjs5OwFNGL7lV4iAx%2FPeURCAOOi4%2F8%2B&X-Amz-Signature=7a988604023097046de0fb16bae2b675eb037bdb12c05864ced2beca8afc9366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGTGGSI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP5ytqs28ZEpaLZt5Rb8XiHv3ryoXFtLGhSubwaMuzWAiB4z0M7U8c7dEsexgiD4OfIesHWkc6%2BnwxtK0hb%2F3ewLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMa1xl0QwLcE9wOuM5KtwD%2FDLzBD%2B0KN1mN0QZ402nNWCIF34n9gn16EcF87u9nzltWxPQI6iPastr5OAinQKgGWga11UmlPh3wSyj%2B4LR8RhK1TeGUlWPK2pWy%2FjYG%2Fc2Kp6XSlQ1SQg%2B9D27Tdw%2BnQxPF9ggpNW7s7fx3bgLyJcQvYFdqmf6y8ng8PDaT2jy%2FmqwKIoilrrXEZvimUrXC6XgBpmXpbXF8eW275VW6%2FHmNTGPpLt5zb%2BYT%2Fy%2BNq%2Bj7bWs5IDdFYHBEiRYTIEoG%2BlAybCx5otA%2BuXmCMluyoCuNTQddzcWirV9r23u0msjMYm7dS23mw5IEsqNBflu6Uu%2BfTrvB3CFw1nDI5jwnxiXxw2tnCCeIjhq%2BXkSfQNT5%2BM4d8UHYdBYPcP14SAwzpk2Kwgc2ladBTsl9qSXLWZmx58nZQ0rc%2FlK8GYxmp8d6h2fA48XO%2FJZZHBriMC5HDFTCflZEZlO3G0EyejiwMe7RLNOaQSOxljpyPU3y23u0Iv1qq7wTQGK%2FCW%2ByEVjyhwqhPCdzV2n5Y157jy%2BK1kVm0nu9HkqGTOmGk9c%2FwnP3YSKibe2tOdcieIk%2FqiXkONuKtFs%2FySAELf9sw1L4v9%2FoUiln6NquQhqVjmWn4wxNUijYj7EgM3PfHAwkKfQyQY6pgEPWDpCeUnFpl7FDuzHLGCCMljCnW%2BJecbyLnaTRouvSSYtdbjwFxn8PbuoIHNHbiuOYQzOd91%2FU%2FqTgbZiGDQhaXUphxkj8CGjraLqAVHOx5DQqJ51NsI5WhCmtIngdH3Kb02%2FWhevvSyhkmwGHn2RVWOFqONKEyi4AvxVx5VLD9JmGWhwzTPj9PpHp5dnv%2Fjs5OwFNGL7lV4iAx%2FPeURCAOOi4%2F8%2B&X-Amz-Signature=f41bdcf401648f761753f551ccde946657ac3f93ece1741e803e5f55e16f9a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

