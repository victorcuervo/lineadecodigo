---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622LR5XDC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFlmZbAukbWiP500vEk6wSx%2BCNEMFtuXq1Y%2FU%2Bl%2Bkq%2F7AiEAkn3GKcJ%2FNUzYKgPyjZAIZyd5EKU0l%2Fbce9HrPN8FQ%2F0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCJSZmKM%2F3ibYPb%2FCCrcAwOJwx81RItRr98Rr3pn%2BXFH56xjxOSoxfxtaWjy9ucihvmqu%2FJwW2xZVAXw0GFNLNw0mxsXaMRY8ia8wPfl0gv1L6je6Aevwm7WNHKYoDzBAAmeE28nIP7ud2wbH1SI7RpO%2Fx3LmTbvn%2B9hWEIpD2Fw6KsKDcZZ%2BbAG8dJ2I1WKZo2Cdc%2BAonNntMGvJhngBbkBQyqVOeI9w3ZWOJCj2waAyVIFFERGYsJGK3nlCnPNcVajtp3SQr3XI4SVPdldygBmmphR4%2FTs0p12mYEo5B7UeEA1p1nYtsfarCyjPWczCjuGKWPqQfQWmr%2BgOMAxjJLvfBjqdIUREkGaLN7%2FasS8aXWlTPa3UhbrIHkMu1dN66kTkvBgNCrUz04bDrpOSF6MFaHo4oBCxjYr1Y39Gf1K7jt8bYc8ZcOwpDRu1OsUyyyoEvcrBM5u348IWdb8Wezk0L0s81L38Fq%2FdIHHUmspZmLk9w0siibtdOl3ZwnWBQYWPihylPHK%2Byzxrl5HDtTPqclADqJR3tTnK7y9SX2bS%2BIKjhEFFBMKkpocctnfdNRfGkYlMrT7DkF%2F7VeCvVd9dw26qyM%2BGBo80BQlsVBIFezHDvyyJ8Qxy66Qs8U5zVjDNT6IRfJhck2PMNnnxckGOqUBoyqoSSqR6LWyIpojT7JqunxGRlJ0%2FMhfbUHn2EG4OVQ4VZCikwT%2F2Bt%2Bq6%2BfD4fxRMYnKwFVxH5781H8u9spl5RARQSY3IGAZV0pYc7a%2B2FBPSwR3%2Fa%2FRpz8Qq60Fa8gU1U2SjZmMJc%2BcRd4EBvCnCz8Tvmgx%2Fs8vHAVNjW3oRZNANDja7wEhaFphSCzes4SJ4dLSSp4Vs%2BZDcHtmC4oqOzgo9yg&X-Amz-Signature=4b805bb6838f6602de153e5a8f320008b4973c7b36e341eb03428eb84adda15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622LR5XDC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFlmZbAukbWiP500vEk6wSx%2BCNEMFtuXq1Y%2FU%2Bl%2Bkq%2F7AiEAkn3GKcJ%2FNUzYKgPyjZAIZyd5EKU0l%2Fbce9HrPN8FQ%2F0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCJSZmKM%2F3ibYPb%2FCCrcAwOJwx81RItRr98Rr3pn%2BXFH56xjxOSoxfxtaWjy9ucihvmqu%2FJwW2xZVAXw0GFNLNw0mxsXaMRY8ia8wPfl0gv1L6je6Aevwm7WNHKYoDzBAAmeE28nIP7ud2wbH1SI7RpO%2Fx3LmTbvn%2B9hWEIpD2Fw6KsKDcZZ%2BbAG8dJ2I1WKZo2Cdc%2BAonNntMGvJhngBbkBQyqVOeI9w3ZWOJCj2waAyVIFFERGYsJGK3nlCnPNcVajtp3SQr3XI4SVPdldygBmmphR4%2FTs0p12mYEo5B7UeEA1p1nYtsfarCyjPWczCjuGKWPqQfQWmr%2BgOMAxjJLvfBjqdIUREkGaLN7%2FasS8aXWlTPa3UhbrIHkMu1dN66kTkvBgNCrUz04bDrpOSF6MFaHo4oBCxjYr1Y39Gf1K7jt8bYc8ZcOwpDRu1OsUyyyoEvcrBM5u348IWdb8Wezk0L0s81L38Fq%2FdIHHUmspZmLk9w0siibtdOl3ZwnWBQYWPihylPHK%2Byzxrl5HDtTPqclADqJR3tTnK7y9SX2bS%2BIKjhEFFBMKkpocctnfdNRfGkYlMrT7DkF%2F7VeCvVd9dw26qyM%2BGBo80BQlsVBIFezHDvyyJ8Qxy66Qs8U5zVjDNT6IRfJhck2PMNnnxckGOqUBoyqoSSqR6LWyIpojT7JqunxGRlJ0%2FMhfbUHn2EG4OVQ4VZCikwT%2F2Bt%2Bq6%2BfD4fxRMYnKwFVxH5781H8u9spl5RARQSY3IGAZV0pYc7a%2B2FBPSwR3%2Fa%2FRpz8Qq60Fa8gU1U2SjZmMJc%2BcRd4EBvCnCz8Tvmgx%2Fs8vHAVNjW3oRZNANDja7wEhaFphSCzes4SJ4dLSSp4Vs%2BZDcHtmC4oqOzgo9yg&X-Amz-Signature=64069d2ea867a491c39e6fa0f31793a2145c39157de7d0b3e3c55f22440f97bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

