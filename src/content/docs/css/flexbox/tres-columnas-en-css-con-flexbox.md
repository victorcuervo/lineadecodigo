---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676HISUKT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXjVWlrzjT6hzfddV9rHEysg88qxiHiCA9Z3EUiA5htAIhAPqIu5dY3nuf2VOqWFAWYV6wr3RbmRL5WHO7OhZm8s5LKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLMSUSJSaRpZiV%2B0kq3ANk%2F0VsCU8yFvQP0bfkxRzwbVg%2BCnRx9bonOatRvQ4I1%2F5hvfXphy8XfZvrWwbBV9unJlELqQIIY1HZsP9sDhZWrGjoOjuNUcMOK1qBK5PDka%2FGaC%2B%2FT7las2HJKLsN3ZlIzeNyn8kEw%2FrJstyVWes%2BCuP6qWqNgpYC8bzC43OzPpfgkCMi%2Fc%2F6VEaoUquAFBeA9UBVRyJk29FxHQZhJsPWapHKoqqyvwKJRMaZEg4aZ%2FYAFFZb3c3fDmkPY1ispvRKzbt2FMr3Nw04Dwo0375qxnlBusnoAqjrP95VkB4zotk3aKuHvZzxdtF22AjPvVNBXF%2FyimNu3ZRX58DzUBkMhFxQ4vCU%2F5%2Bbpu3z0seWEmO3p1r8Yby12Fbxcv3KGtYVNuORIgiKbIyohi0%2Ffgf2jgKtADhVUurw3GdRes1lLRHPbgf0Q7jV8YiNyCRG5A7KWnuPDq89UaqtFjSEI%2BAHwvuOvXx8RjxfjKm1M4%2B1JCV44V3k6rRHnVkDSgSIVsb3N3E1%2FvGkCpFNp0yVs2zlxpYhdY%2BT7Q5MTAYMZx1WF0shGCcIN1%2F5whJZHvEGbMeHa0df3RX8J5oCsfshukptBHhLu%2FoiS1mL%2FC%2FrBS%2F%2FwI7ngPXg8Zx8MkTbhjC0wt3JBjqkAR1cquZgXYE0eAHjoiHK%2Febantzt3kdYyEQRrcaFW87ytPOaLvCM74rHOjTAXeB1nGHdW1yeZK721tV1kctN8wfhkZ3GTBXFalCCmfKW5qM4DNGr1OhD68XnPYBPfPh11DPj694VSiMtSc6dbCuImcJg7AkSy8smxm35gDkBjNPpK1hHr9BG%2FuFJcdGu46wj2FPeVArBO%2FKrZvn%2B4rhVN2RvIS2M&X-Amz-Signature=f13376174aa4fbc3005e7ceebe6dfe63cccc558cee2a0d6c3133cf376397e3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676HISUKT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXjVWlrzjT6hzfddV9rHEysg88qxiHiCA9Z3EUiA5htAIhAPqIu5dY3nuf2VOqWFAWYV6wr3RbmRL5WHO7OhZm8s5LKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLMSUSJSaRpZiV%2B0kq3ANk%2F0VsCU8yFvQP0bfkxRzwbVg%2BCnRx9bonOatRvQ4I1%2F5hvfXphy8XfZvrWwbBV9unJlELqQIIY1HZsP9sDhZWrGjoOjuNUcMOK1qBK5PDka%2FGaC%2B%2FT7las2HJKLsN3ZlIzeNyn8kEw%2FrJstyVWes%2BCuP6qWqNgpYC8bzC43OzPpfgkCMi%2Fc%2F6VEaoUquAFBeA9UBVRyJk29FxHQZhJsPWapHKoqqyvwKJRMaZEg4aZ%2FYAFFZb3c3fDmkPY1ispvRKzbt2FMr3Nw04Dwo0375qxnlBusnoAqjrP95VkB4zotk3aKuHvZzxdtF22AjPvVNBXF%2FyimNu3ZRX58DzUBkMhFxQ4vCU%2F5%2Bbpu3z0seWEmO3p1r8Yby12Fbxcv3KGtYVNuORIgiKbIyohi0%2Ffgf2jgKtADhVUurw3GdRes1lLRHPbgf0Q7jV8YiNyCRG5A7KWnuPDq89UaqtFjSEI%2BAHwvuOvXx8RjxfjKm1M4%2B1JCV44V3k6rRHnVkDSgSIVsb3N3E1%2FvGkCpFNp0yVs2zlxpYhdY%2BT7Q5MTAYMZx1WF0shGCcIN1%2F5whJZHvEGbMeHa0df3RX8J5oCsfshukptBHhLu%2FoiS1mL%2FC%2FrBS%2F%2FwI7ngPXg8Zx8MkTbhjC0wt3JBjqkAR1cquZgXYE0eAHjoiHK%2Febantzt3kdYyEQRrcaFW87ytPOaLvCM74rHOjTAXeB1nGHdW1yeZK721tV1kctN8wfhkZ3GTBXFalCCmfKW5qM4DNGr1OhD68XnPYBPfPh11DPj694VSiMtSc6dbCuImcJg7AkSy8smxm35gDkBjNPpK1hHr9BG%2FuFJcdGu46wj2FPeVArBO%2FKrZvn%2B4rhVN2RvIS2M&X-Amz-Signature=c069b1c2f8389a119dcb8d91f68f442147c454153918db6e4a46a2c8b2340104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

