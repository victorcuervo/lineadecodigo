---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFI7XAW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDKhnt1V0CcASvEVKdg%2FZoDGz9qpnRxt25S4n7BFI%2FYFgIgPhRDlb0CcuCXsskgt1zZ4IPGlbdSNe8Uqhv5tYSPUBgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEHtyjX%2Bc1kHeTdxrSrcA4%2F7OqoYJ1ijdZFpzYcni3%2F7jMk5mtD%2FBNqBFD%2FT4bh8yd7rkID66f1tWPkatG5zX39TwPOUFqMIpC6JeVjK2Ct9gAYvih1kJflG%2BZD%2FKfL6YHnnaDdNDe4WwnFVuu8tlOyjMYdLoOJKtuKc%2BK4yVye9FM5SAfojX8hsBKrnf4ZdUHxFwiEX0nuRlP5IpdlVO0kTwDzurWsPWlHduvJ39kKeHv1tUeu9alERR0XTdFkiJJHKf9%2BF1pJ2FPuej1HNUmK3ymcWiDfJeSapiSzFquyNoH0DPoOUPYO0DvgfkwvjVlAStq2%2FdYgJB%2Fe1RHUY0jdeYGsOuyQxGwF8hJ19ZicHx2yMFaHw7R%2BuhZNiVmApyn4ksVIjo3WMKJk3OJlZbE7rygvVFe216IndxDIad6UWmXALkEfPXy2hZUlF%2BFmE7JuSTE2FSfxa%2FUfbT9JDgRb6%2FOm%2FTcZyjy%2B%2BvM7rtbwddiep2Z8L389n5UjLwwzkEncJiOC1y6m%2Fg8qnjw3WNbg5ChNfVuJKdyR76tFrsQ6ILRXYpE3KfJROhUYCwWORaEGZKn%2BfAATF2ihTmlcHiDngthyXEUbKEXxBVqzZvF%2FAotCe%2F10L2cNMjvC44FRzG6%2FWEbdC9BRYSiEwMJ%2FKxckGOqUBqT1QPptYqbSw76iyFuypHzY7%2FfO%2BH9%2FvFGGt%2BuseRRx7Pcz17SuEus%2F4%2BMerrGbbDUzbIB81ln5InhS61bvMHUXyjibgqdCFatmWaYi%2FJD6oa1l%2F65qjvSeQGn0hMwe12yvaGUIPSzanJ6kWocMTdLHEhUDYeI6O6vbjIYXZl3NAfT0TV0B646ndlMPhfwnjnpFuVErXkoH%2FtryPn6FcDDH7gneR&X-Amz-Signature=ee6fc44aacc758012a7492985f6d9e594fdc74ba368481cb9d6bfc83afe4311f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFI7XAW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDKhnt1V0CcASvEVKdg%2FZoDGz9qpnRxt25S4n7BFI%2FYFgIgPhRDlb0CcuCXsskgt1zZ4IPGlbdSNe8Uqhv5tYSPUBgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEHtyjX%2Bc1kHeTdxrSrcA4%2F7OqoYJ1ijdZFpzYcni3%2F7jMk5mtD%2FBNqBFD%2FT4bh8yd7rkID66f1tWPkatG5zX39TwPOUFqMIpC6JeVjK2Ct9gAYvih1kJflG%2BZD%2FKfL6YHnnaDdNDe4WwnFVuu8tlOyjMYdLoOJKtuKc%2BK4yVye9FM5SAfojX8hsBKrnf4ZdUHxFwiEX0nuRlP5IpdlVO0kTwDzurWsPWlHduvJ39kKeHv1tUeu9alERR0XTdFkiJJHKf9%2BF1pJ2FPuej1HNUmK3ymcWiDfJeSapiSzFquyNoH0DPoOUPYO0DvgfkwvjVlAStq2%2FdYgJB%2Fe1RHUY0jdeYGsOuyQxGwF8hJ19ZicHx2yMFaHw7R%2BuhZNiVmApyn4ksVIjo3WMKJk3OJlZbE7rygvVFe216IndxDIad6UWmXALkEfPXy2hZUlF%2BFmE7JuSTE2FSfxa%2FUfbT9JDgRb6%2FOm%2FTcZyjy%2B%2BvM7rtbwddiep2Z8L389n5UjLwwzkEncJiOC1y6m%2Fg8qnjw3WNbg5ChNfVuJKdyR76tFrsQ6ILRXYpE3KfJROhUYCwWORaEGZKn%2BfAATF2ihTmlcHiDngthyXEUbKEXxBVqzZvF%2FAotCe%2F10L2cNMjvC44FRzG6%2FWEbdC9BRYSiEwMJ%2FKxckGOqUBqT1QPptYqbSw76iyFuypHzY7%2FfO%2BH9%2FvFGGt%2BuseRRx7Pcz17SuEus%2F4%2BMerrGbbDUzbIB81ln5InhS61bvMHUXyjibgqdCFatmWaYi%2FJD6oa1l%2F65qjvSeQGn0hMwe12yvaGUIPSzanJ6kWocMTdLHEhUDYeI6O6vbjIYXZl3NAfT0TV0B646ndlMPhfwnjnpFuVErXkoH%2FtryPn6FcDDH7gneR&X-Amz-Signature=beb1a19b80b68e0e08f3915f22577094c8ad78c457d97bdcee02ccec3ca1635c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

