---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG6XLCNU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKGbwkw1YLPTNqr8YR2HN9DPB4b5ryYmBhWEe%2F1xqE5AIhAPS4xO1jGvJlib1eOwT0bc1ZYn54IX06q3KKmFkjcQK0Kv8DCGcQABoMNjM3NDIzMTgzODA1Igx84Kb9zc6MGugfpS4q3AMjiN5ISFtJUDm7%2Fwrg7VFNVgMTktRVOv3jAWj1VdccEq%2Fi83J7w%2FSrso83hKjb%2F2Gt4cVjh99v%2F49NyIRkSSUlPu%2BAhJMDSVB9tJbem6ftRvvbUkJ47%2FMFH7KLWPhfhnU%2B7qa6B1gZ9ZI15lNo9gZtJdX5EeTw7DJAph6gp0aVw3yqXyVE4s2Q8t%2FXJEHxoB9s%2FKChAWgbHcyntWoWeIlQDUkJDJWK0TT%2FDNFtS4tzCqEN1JWm%2F85YamV8cpYg%2BMgb4ccQqofiWtBD2vBK3xpT02yWxc1uGjPTUcPGj6RjBHXt4pHnXsI%2BvFZMmUszIjxsXmVjYbOO4YZL5O6dQyb5IpknU0L9E0qMYY0O6KB1AeqCUXzFDPVJvLf%2FtY2%2FqO%2F0VbbFboKRhJf340FmALMauxUXiH%2BKSVPiE%2BAsuEtlQDPm9KcNhhNmSm%2BgqIW%2FqrIhZpsImbnJc2ppIYPZnIBo1Mslx%2BD286HyFCmULqEqbgBpcPabrl8BHuYAg%2BhtJ5CGdJxEAiKZEQ6xDrRbwx9ptBJlNro3KNxttkgtPAtG24rq8vKqOoWH1TLwXetlZ554ZiPPXsul24nAvWAdYPz0NmWPsUlco26E7abfgSzNSSJ5zJ7m1TAxSWhrmzCPms3JBjqkAUFNvaJbvEPqUd5%2BmTTNYQRrqrZrdluTBGlejHOvzhgfbt%2F8A3486enZ4kFHj8TUvmaoBXVkEmIJEIDbGJyWeAjtZiAcZ2OmSt%2FAuz9Hfn%2F3YmnrdpNxxPldX8lflQ%2BArHZ2s5oPRjp8oEgcd%2B%2FEiamFL4Y1HT4aULzm2ueKMSbtfFHKmbhiQzWiXl5c%2BC%2F5Y1M%2BMZtCtbITadJjCjOelEXpBme%2F&X-Amz-Signature=2f99d0370efc46c22d60a48ea1006d34acff1aeb5196e4e76e1b3ac4bde48d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG6XLCNU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKGbwkw1YLPTNqr8YR2HN9DPB4b5ryYmBhWEe%2F1xqE5AIhAPS4xO1jGvJlib1eOwT0bc1ZYn54IX06q3KKmFkjcQK0Kv8DCGcQABoMNjM3NDIzMTgzODA1Igx84Kb9zc6MGugfpS4q3AMjiN5ISFtJUDm7%2Fwrg7VFNVgMTktRVOv3jAWj1VdccEq%2Fi83J7w%2FSrso83hKjb%2F2Gt4cVjh99v%2F49NyIRkSSUlPu%2BAhJMDSVB9tJbem6ftRvvbUkJ47%2FMFH7KLWPhfhnU%2B7qa6B1gZ9ZI15lNo9gZtJdX5EeTw7DJAph6gp0aVw3yqXyVE4s2Q8t%2FXJEHxoB9s%2FKChAWgbHcyntWoWeIlQDUkJDJWK0TT%2FDNFtS4tzCqEN1JWm%2F85YamV8cpYg%2BMgb4ccQqofiWtBD2vBK3xpT02yWxc1uGjPTUcPGj6RjBHXt4pHnXsI%2BvFZMmUszIjxsXmVjYbOO4YZL5O6dQyb5IpknU0L9E0qMYY0O6KB1AeqCUXzFDPVJvLf%2FtY2%2FqO%2F0VbbFboKRhJf340FmALMauxUXiH%2BKSVPiE%2BAsuEtlQDPm9KcNhhNmSm%2BgqIW%2FqrIhZpsImbnJc2ppIYPZnIBo1Mslx%2BD286HyFCmULqEqbgBpcPabrl8BHuYAg%2BhtJ5CGdJxEAiKZEQ6xDrRbwx9ptBJlNro3KNxttkgtPAtG24rq8vKqOoWH1TLwXetlZ554ZiPPXsul24nAvWAdYPz0NmWPsUlco26E7abfgSzNSSJ5zJ7m1TAxSWhrmzCPms3JBjqkAUFNvaJbvEPqUd5%2BmTTNYQRrqrZrdluTBGlejHOvzhgfbt%2F8A3486enZ4kFHj8TUvmaoBXVkEmIJEIDbGJyWeAjtZiAcZ2OmSt%2FAuz9Hfn%2F3YmnrdpNxxPldX8lflQ%2BArHZ2s5oPRjp8oEgcd%2B%2FEiamFL4Y1HT4aULzm2ueKMSbtfFHKmbhiQzWiXl5c%2BC%2F5Y1M%2BMZtCtbITadJjCjOelEXpBme%2F&X-Amz-Signature=03beb52c61b77ad423ed4c28623269cdcf7382e71d1968b1466e7b343d0321f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

