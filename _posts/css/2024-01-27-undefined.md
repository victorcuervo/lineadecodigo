---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OC7U5JA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDuO5uyJei5dvoNFG%2Fyk42ldZ%2FmQ0zIovOWZJLY1W1Z8wIgVOn%2FseVJ4PVeTS%2BW37FGSnXOiCNXn1FykWIisl75EHwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDI3XNyT5k72UB%2BR2fCrcA0p3kAACgF4WaAMvm32bCBKTnu468gVq7CEcxntTCEAaljvUp1CzWu7poeqoM7ogWm0CTSuSaXzvEz3As%2B%2FuU9VphkWDKGzwcekcJMFFxxF2dqoSXPYMfyJR8J%2FbULFpqEaALX0yaWTkFBHuz3gVCY%2BH6Db0LXiAia4U1p8zSFz9W%2FQLAbhOdwDLeGn5Ocz85Ah75RzIFIu4ztLzigIj4R%2FLwzb2B6hcZg7neEWPhATu%2B%2Fb9rNkFyVlWWq0n1Ae3OYwGcKIiw6cj0UFXGXTUEqWVBGst1fivqmH%2BcQ0na2bamjG0Dch4hEo9z65mDWXJlFcgmjtXui4zaCBMeo2tvD3ounE%2BZk3L5TWmUnKRve3uQUzKg6sxWFPWzU8IOKJF29sf7P7Ic7aO7Evqph1nEeuHAeyZkwQ55CRrywW6GPOVy9E7tkii%2BCoC%2FSgesWgC1MV1p3%2F6WrDka7EPsOhJMLCSwnHQ4Tu%2B2ZAaA5DQm8wm%2FKfzE9k2O4RE2Zr4cuMow5ROPoZN%2BpFsqeCYJEMvbb6tfOXlasDmBYrS0WA9J43sRAysIN3f0ZCPoPu1iorIAzsFOahZCOdcf3UtwnX%2BYQ0B3U0uNAMy9zI3r0lusqfBTVL%2BS1WSXbieMbVhMJ3bwckGOqUBqqN0Da0ve%2B9uHEcnI%2FwATVTtXuFOzoWdUkIlrqFDXQVLtMhbnx1dQK2MvxbMYX%2BXso1tHbnHA2Efu%2FdOlUwmIK%2Bz0D1Rt%2BSLnIQmhtD2U0Eet%2FJjSxlQmJfEGf%2FLHDYD7RfPuOJDt%2BohyzooQTKfZE1IGfjava%2FKruz%2BEI8dnrr%2BKIt%2BTPYPT2nLUJ57QO3e3DQT4CU4ieJs46LbWVuj79ngpzbe&X-Amz-Signature=01d9c07cddb1dfcb972a3c7ec561f2914c8703fdfedca8ecadc77b69c12b7a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OC7U5JA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDuO5uyJei5dvoNFG%2Fyk42ldZ%2FmQ0zIovOWZJLY1W1Z8wIgVOn%2FseVJ4PVeTS%2BW37FGSnXOiCNXn1FykWIisl75EHwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDI3XNyT5k72UB%2BR2fCrcA0p3kAACgF4WaAMvm32bCBKTnu468gVq7CEcxntTCEAaljvUp1CzWu7poeqoM7ogWm0CTSuSaXzvEz3As%2B%2FuU9VphkWDKGzwcekcJMFFxxF2dqoSXPYMfyJR8J%2FbULFpqEaALX0yaWTkFBHuz3gVCY%2BH6Db0LXiAia4U1p8zSFz9W%2FQLAbhOdwDLeGn5Ocz85Ah75RzIFIu4ztLzigIj4R%2FLwzb2B6hcZg7neEWPhATu%2B%2Fb9rNkFyVlWWq0n1Ae3OYwGcKIiw6cj0UFXGXTUEqWVBGst1fivqmH%2BcQ0na2bamjG0Dch4hEo9z65mDWXJlFcgmjtXui4zaCBMeo2tvD3ounE%2BZk3L5TWmUnKRve3uQUzKg6sxWFPWzU8IOKJF29sf7P7Ic7aO7Evqph1nEeuHAeyZkwQ55CRrywW6GPOVy9E7tkii%2BCoC%2FSgesWgC1MV1p3%2F6WrDka7EPsOhJMLCSwnHQ4Tu%2B2ZAaA5DQm8wm%2FKfzE9k2O4RE2Zr4cuMow5ROPoZN%2BpFsqeCYJEMvbb6tfOXlasDmBYrS0WA9J43sRAysIN3f0ZCPoPu1iorIAzsFOahZCOdcf3UtwnX%2BYQ0B3U0uNAMy9zI3r0lusqfBTVL%2BS1WSXbieMbVhMJ3bwckGOqUBqqN0Da0ve%2B9uHEcnI%2FwATVTtXuFOzoWdUkIlrqFDXQVLtMhbnx1dQK2MvxbMYX%2BXso1tHbnHA2Efu%2FdOlUwmIK%2Bz0D1Rt%2BSLnIQmhtD2U0Eet%2FJjSxlQmJfEGf%2FLHDYD7RfPuOJDt%2BohyzooQTKfZE1IGfjava%2FKruz%2BEI8dnrr%2BKIt%2BTPYPT2nLUJ57QO3e3DQT4CU4ieJs46LbWVuj79ngpzbe&X-Amz-Signature=c4c7506437270b7fefd1f44ac510c1c6c06efbba5eb0ef0405cba35cc9d77eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

