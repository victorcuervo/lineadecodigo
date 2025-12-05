---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5U65GT7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5NZPhMUsph72AVswodEHIA%2BdeB2sl7FKIQLZWcTBx8QIgYIrlpIPm5SDk%2BWuIXfkD5cLa8ia09ePYglrbkt2D2tgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDK49JhqLjj2QqNpUcyrcA5NdpTfd2hR88mi7%2BUsRyd6qrdzc7S5qnnje8evmpodGKQG%2BDIMrTcS84i8J2O350T7qKEOzN28m6lJnuuEy6hbHz6teTSb%2FvjMohe5zGP5UoiDh3jXXYHb354HaYVq%2BLvAG9ZzZpdDGj%2Fvl%2B0nSIdrTQKOX7DeNmrWF26vPt%2BLyTlL7qnfsrPHSpkI0EaxFnYwOuiLuLoZoFYtRubs2dUKSvy7QmcYqRTGXKRQ%2BqdgDEb0E1YMf8DDWg%2F5RvFf4V21XXvI61t89icaW6dmkrDs8B%2FZo4h2OdQGzL%2FAQw9f8DiVegoclUfvoqCKFdVt3RUPUVPt6KiSdiz2H0c0Ji0hwYev4ks9PnV%2BP823iCM1FZ72qcrxlieC1ep29qXn0LEk%2FeLPWQebXwm5zyd0FaiEKO0aWPC7NJWJroosnibkODKtLmQnFDwaJW3P5dNRIresloRyp6wyMz1GiPAWk4QKS02UIcsqVcJTa726ZHRrBwMRCgT%2FHx8VF4hCEUXshaieNlQVQ91cX%2Fn5ARwVq%2BMMXjTN4tJFlcO8Ac1Ig10CxjGXflPqp1xqSnIEcKRq1K4d6rZ385bj3JxL869%2Fdthv5Vnylc2CtNqW68ug6IJcvyGkn9ylRogBNRwOMMPn0y8kGOqUB8wFUb%2BKGpi6bXyJGxbo8qj8BamdgWFL71tEv6f7UqIODuAFwqS71cK0FbY0hhEfpBq80L45FSH5B9UmQ8sSO6Q%2BOsKR%2BHytlGQJeDUBNJZuF0XKT5OnI3ku%2Bc73FhfIyAIx7LIE2xrMs6WZOk1fMiLnhxgl7425LwZHoezp1a%2F%2BS5lgxyyHZIxrn9HHq3jvBioCMvjlF3FCnL4pGj7h%2Fk%2B%2BVU0sH&X-Amz-Signature=03c322eebae84833e7360ebea0b8ffa46e0c3525e2a141f0a211fdbd9b23c76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5U65GT7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5NZPhMUsph72AVswodEHIA%2BdeB2sl7FKIQLZWcTBx8QIgYIrlpIPm5SDk%2BWuIXfkD5cLa8ia09ePYglrbkt2D2tgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDK49JhqLjj2QqNpUcyrcA5NdpTfd2hR88mi7%2BUsRyd6qrdzc7S5qnnje8evmpodGKQG%2BDIMrTcS84i8J2O350T7qKEOzN28m6lJnuuEy6hbHz6teTSb%2FvjMohe5zGP5UoiDh3jXXYHb354HaYVq%2BLvAG9ZzZpdDGj%2Fvl%2B0nSIdrTQKOX7DeNmrWF26vPt%2BLyTlL7qnfsrPHSpkI0EaxFnYwOuiLuLoZoFYtRubs2dUKSvy7QmcYqRTGXKRQ%2BqdgDEb0E1YMf8DDWg%2F5RvFf4V21XXvI61t89icaW6dmkrDs8B%2FZo4h2OdQGzL%2FAQw9f8DiVegoclUfvoqCKFdVt3RUPUVPt6KiSdiz2H0c0Ji0hwYev4ks9PnV%2BP823iCM1FZ72qcrxlieC1ep29qXn0LEk%2FeLPWQebXwm5zyd0FaiEKO0aWPC7NJWJroosnibkODKtLmQnFDwaJW3P5dNRIresloRyp6wyMz1GiPAWk4QKS02UIcsqVcJTa726ZHRrBwMRCgT%2FHx8VF4hCEUXshaieNlQVQ91cX%2Fn5ARwVq%2BMMXjTN4tJFlcO8Ac1Ig10CxjGXflPqp1xqSnIEcKRq1K4d6rZ385bj3JxL869%2Fdthv5Vnylc2CtNqW68ug6IJcvyGkn9ylRogBNRwOMMPn0y8kGOqUB8wFUb%2BKGpi6bXyJGxbo8qj8BamdgWFL71tEv6f7UqIODuAFwqS71cK0FbY0hhEfpBq80L45FSH5B9UmQ8sSO6Q%2BOsKR%2BHytlGQJeDUBNJZuF0XKT5OnI3ku%2Bc73FhfIyAIx7LIE2xrMs6WZOk1fMiLnhxgl7425LwZHoezp1a%2F%2BS5lgxyyHZIxrn9HHq3jvBioCMvjlF3FCnL4pGj7h%2Fk%2B%2BVU0sH&X-Amz-Signature=76fa6afb9f145ec3702879bb64bd4165f5c02cf1b144d5cb9701c02c129cbb72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

