---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5TIA6L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8fr%2BUz31%2BHb4%2BdigBqspuKMmCveb0cWM4rpgp1o7g4wIgFzAS%2BNplcDj38I5iLqwg8fbtFp0lWCX0EuOVhnbGlWYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSZ09rbgZJKZAJEqircA5SNdl4H9WFKvDPCAK1xxqqs%2BlA0ZeKBqAs7%2BYsW80%2FKJLaIr0hkm58cat%2B83NZ1M8mkykHIDdBsqhHmoPS%2Bus8yexplbG6TkB3fB%2Fjp0Vc%2Bljy1LReSDJ2D8gf85fC%2F6QKrNCOiWWJ7EAR%2F4SCheC%2F5wNM1jUn72Jp5Oro9UqMsyfnm3gNf9tGpoGZCblOmVQz%2BNy3loKRT%2BOuOrLl3hqWrURE39EIpWXOtI9nlUmERUJcQ7CjEbVD3xHUoVD7Tt5Ovj3912QJmIHvewTqDN5c1HdA6OTrYICQlB903mg2643izH186prHwqxbQiddFgwk983Kbz88GuZAt66PlSFzyFKQ790hzzhnMWfQsG4u%2BiajzraKC%2F1PpiXCQPxr3fzEVKh3hODv%2BBVRsxxzV%2BEcHgUzVDgDVrJtup1WZY3muSZYB%2F7HVwnomy8XAhiSIQohyM72WwrDxAoaxtRARWoA9erZknMEB8wNsAuTLKWe5Wir4CzAOumHHIqJ36twK1uLnddAGkaoNq78RkmM3kKwTSiUOxhUdZKvYoEJXGefM2q7hKfKLWsCOL%2BsnR5C%2BZXGA65arQ4K%2BqgNuxbH4aLHUrjDapjrEdBKd902SDddCCUU49zNuPn7b6JtkMLnt2ckGOqUBjZnpb69bMrTOti7G8ENZ9LPNpMlaEEMq3piDGQ3ykwjO3wh29dTwgQxAODIjNjKQ9I%2Fw%2FTr32rUBnZ3aCO8gHOyZXMfMy%2FAfwRDbCxWy6Bv79LKhrUITFPPVFoTpgxHTfXq66ANtiA2gIMYrBAvc6mVoX%2BLEZs5am%2BUq8Ymuf26yshil1yc2%2BTRI%2Bep7EG%2Fo4fgSQWvkGZ4gr2tbNUSF61JbZl5p&X-Amz-Signature=a220e675c4e1f16f5959d41a870af2e3e538c0632cf49bd5dc5677fe36b25139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5TIA6L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8fr%2BUz31%2BHb4%2BdigBqspuKMmCveb0cWM4rpgp1o7g4wIgFzAS%2BNplcDj38I5iLqwg8fbtFp0lWCX0EuOVhnbGlWYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSZ09rbgZJKZAJEqircA5SNdl4H9WFKvDPCAK1xxqqs%2BlA0ZeKBqAs7%2BYsW80%2FKJLaIr0hkm58cat%2B83NZ1M8mkykHIDdBsqhHmoPS%2Bus8yexplbG6TkB3fB%2Fjp0Vc%2Bljy1LReSDJ2D8gf85fC%2F6QKrNCOiWWJ7EAR%2F4SCheC%2F5wNM1jUn72Jp5Oro9UqMsyfnm3gNf9tGpoGZCblOmVQz%2BNy3loKRT%2BOuOrLl3hqWrURE39EIpWXOtI9nlUmERUJcQ7CjEbVD3xHUoVD7Tt5Ovj3912QJmIHvewTqDN5c1HdA6OTrYICQlB903mg2643izH186prHwqxbQiddFgwk983Kbz88GuZAt66PlSFzyFKQ790hzzhnMWfQsG4u%2BiajzraKC%2F1PpiXCQPxr3fzEVKh3hODv%2BBVRsxxzV%2BEcHgUzVDgDVrJtup1WZY3muSZYB%2F7HVwnomy8XAhiSIQohyM72WwrDxAoaxtRARWoA9erZknMEB8wNsAuTLKWe5Wir4CzAOumHHIqJ36twK1uLnddAGkaoNq78RkmM3kKwTSiUOxhUdZKvYoEJXGefM2q7hKfKLWsCOL%2BsnR5C%2BZXGA65arQ4K%2BqgNuxbH4aLHUrjDapjrEdBKd902SDddCCUU49zNuPn7b6JtkMLnt2ckGOqUBjZnpb69bMrTOti7G8ENZ9LPNpMlaEEMq3piDGQ3ykwjO3wh29dTwgQxAODIjNjKQ9I%2Fw%2FTr32rUBnZ3aCO8gHOyZXMfMy%2FAfwRDbCxWy6Bv79LKhrUITFPPVFoTpgxHTfXq66ANtiA2gIMYrBAvc6mVoX%2BLEZs5am%2BUq8Ymuf26yshil1yc2%2BTRI%2Bep7EG%2Fo4fgSQWvkGZ4gr2tbNUSF61JbZl5p&X-Amz-Signature=61134a3da514454e428dc2f023639d63445250d5fe99fd5c348cbe09d3c9b8b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

