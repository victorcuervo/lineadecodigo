---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNAJKXS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEGtanJlbhgR5xZli%2BGkfgS1EkqTaNA9Rbl2eAKCg%2Fx7AiEAu8TkCxEtnyLRzM1cL0hQ516H8zm6rSB8XoxdKzyZRm0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOeE%2FkBmUe1T6U1IryrcA5nvkAjsziERMLaRyr%2BkibTBvLtsH41vnFANUT2Ge4VfHDm5vpBxPsv7Aw57J6JlDG0AAZRnm5DceGvlWA9hULOCB1Vrgl33q3rLYW%2F%2BlXYJ528%2BZW567yEW5pfvMA7ulLiuoWa7vxAu7Dze7N1g3hhbEKi1VY4IUUPWkzPF6295LZjrSSZFJCwtJeY%2Fkr9VIP8aLOtsUBFOmC2MLj3fS1Sml3IWVQ%2BMVmbUmvYyQvsdZhDWxgbdnMlW2xFoCKaqVxVWqHCiFWvQw7vfNWvrHv5GycW40cSNXuB5FXbcWvwSpAnSFKEDtfQ94ebBXkEjYwO20TNR17ZGEBlKgg4RM1gucl%2FUGQCIvNu0pDIFJqwXA4viaRgBV6KCKKZ%2FRJmDjOl%2FrJ2AtQCx1XaJPmcdNs6i3ODTlwHkgcU%2BeLDj4Qj2zhKVqnVAScYgGp%2FDBp3csAWPVp2eeb9cC13XD9vo0R%2BEQ4UCV3YwjV2Ph4%2B2LnSELxaIMaaZGpi65ZJZ4Z5S%2FfF4Lw0%2BcJctCMiLcyfu9Wnf1ytpHB8NGeRhE5EzNhNQoibkcfTo6ZvVciH2%2FlEhz5DVD9HRO5XSjMN0t662atf%2BV7Z8vyXl0jRnarWpIgphUDG%2BPnbWs9BmqjsiMPHcwskGOqUBh%2BT3AttrLdc9qS2New6YZHxO%2FAVGjYPJ%2B7YNYp6MhD8TGp57I69%2B%2BXZL2%2F52FoO3R7UU0GZuzt7r2ueeNKEon90S6MmRH6VmtsVzy3gvykQjlMyCrs2PMk4xIM8yDG08cPwuJQE%2BFmYDMHY7YPoABexOeMcMjaCxGVNYMxvw5h51%2FjYGmHca02VkxB3SZm8QyMLRJr%2F8ZKDElTd5DiHtFnGpH6yW&X-Amz-Signature=488107aa990a76672c907989ee959f4ba94d64ab0895d1b46a561a7e0ff041c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNAJKXS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEGtanJlbhgR5xZli%2BGkfgS1EkqTaNA9Rbl2eAKCg%2Fx7AiEAu8TkCxEtnyLRzM1cL0hQ516H8zm6rSB8XoxdKzyZRm0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOeE%2FkBmUe1T6U1IryrcA5nvkAjsziERMLaRyr%2BkibTBvLtsH41vnFANUT2Ge4VfHDm5vpBxPsv7Aw57J6JlDG0AAZRnm5DceGvlWA9hULOCB1Vrgl33q3rLYW%2F%2BlXYJ528%2BZW567yEW5pfvMA7ulLiuoWa7vxAu7Dze7N1g3hhbEKi1VY4IUUPWkzPF6295LZjrSSZFJCwtJeY%2Fkr9VIP8aLOtsUBFOmC2MLj3fS1Sml3IWVQ%2BMVmbUmvYyQvsdZhDWxgbdnMlW2xFoCKaqVxVWqHCiFWvQw7vfNWvrHv5GycW40cSNXuB5FXbcWvwSpAnSFKEDtfQ94ebBXkEjYwO20TNR17ZGEBlKgg4RM1gucl%2FUGQCIvNu0pDIFJqwXA4viaRgBV6KCKKZ%2FRJmDjOl%2FrJ2AtQCx1XaJPmcdNs6i3ODTlwHkgcU%2BeLDj4Qj2zhKVqnVAScYgGp%2FDBp3csAWPVp2eeb9cC13XD9vo0R%2BEQ4UCV3YwjV2Ph4%2B2LnSELxaIMaaZGpi65ZJZ4Z5S%2FfF4Lw0%2BcJctCMiLcyfu9Wnf1ytpHB8NGeRhE5EzNhNQoibkcfTo6ZvVciH2%2FlEhz5DVD9HRO5XSjMN0t662atf%2BV7Z8vyXl0jRnarWpIgphUDG%2BPnbWs9BmqjsiMPHcwskGOqUBh%2BT3AttrLdc9qS2New6YZHxO%2FAVGjYPJ%2B7YNYp6MhD8TGp57I69%2B%2BXZL2%2F52FoO3R7UU0GZuzt7r2ueeNKEon90S6MmRH6VmtsVzy3gvykQjlMyCrs2PMk4xIM8yDG08cPwuJQE%2BFmYDMHY7YPoABexOeMcMjaCxGVNYMxvw5h51%2FjYGmHca02VkxB3SZm8QyMLRJr%2F8ZKDElTd5DiHtFnGpH6yW&X-Amz-Signature=b060ea717134da237872cef5dfd86c9117809250902ac236fba6f244a0aa795c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

