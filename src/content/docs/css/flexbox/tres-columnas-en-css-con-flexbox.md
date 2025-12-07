---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIE4AYG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcifHCEy0wwlEsqOqn%2BhgsvZXNY1EJlpA%2FKyRI8ZguwgIhAKusgFKoD%2FoZUHOz9RSzES2wxAFH%2BG2Edaq1OBvWKHqFKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKZAwp545AH%2FnwOQAq3APbXZ2526if6xD7ZVkQOOYJRmaVO6RyVZjQZecnPNU6fLUEXAJQdwBmmF3%2B1HRH5RpaLKo9gaSCVC8YPi2BVgBhr1E8C5pgsOA2mXXH3pm2evuUjwDCRCjoMbX2bssOeb7ZdDTzs694ncsHZFWrZlnmtafH0rNFzWpDueKnUUJy1nZchy8xfXUfXvDk0ZusDMthHaD9iA7mAae09AFGk7OWZl8S3GK7cQCuk%2Fj%2FzzxkoxhTwMdK7MoQ%2FegRX05qbZZuH9daR%2BCCZBWAJewQIYsmHTGXkzMG1%2F0Z4O2weKQp%2F%2F4tX6dsGiOiMtbKOeHxvYfbN%2FlB98W%2F1TD3INxQR9iom3CjizMMi1ghxKrH8IXLOvM6vAXlicS6yWJL3OSOHg0tqXw7sWMN%2BwLevVjlRyr%2Fhomew7by4zQ%2BTP23Z4lwLFlGqF%2FznwjEbFlVeWewlJx8VEn4PkgB9hepq%2FJAFNbl8SDt%2B%2BVB03NgEGWu8Exq0Ea50Q8rPrrEZi%2FRZPeIZkdzYtf6ti3hk7%2B3nF0dkVWJ6uQSw4ShI9aOiVIJaOS9MicvH2xXR9GQW5jZ9IHwXECGWqIyFCKgEQgLMS8bFoztECeIGjqkMvf8xbiceIcQrv2SXeB73dGrONrTlTC3mtXJBjqkAdPjkHYIeFJ157ITxQaCcmhpYI6%2BYY5MjVAtudFfshlu47dJED2Yt8zn7h7j6GhUGMmdp3aDobltiqkN%2FMQT5dnG9zXe%2B7NkBdSA4sYjrbMT%2F99dpXUHXoYWY43alqXFhO8sz%2FpRCF%2BDNwb8buh1%2FzJ%2BuFHASMM0cvDmZF2OefusNgS8EkQPSAcphRlv03%2BsEPNbezFuR8FHnHaKsZ4MQawIzawR&X-Amz-Signature=a549fb58d30844abdce2586aeed76a0c63b0f624e4351a0f5d5b8906776fd871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIE4AYG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcifHCEy0wwlEsqOqn%2BhgsvZXNY1EJlpA%2FKyRI8ZguwgIhAKusgFKoD%2FoZUHOz9RSzES2wxAFH%2BG2Edaq1OBvWKHqFKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKZAwp545AH%2FnwOQAq3APbXZ2526if6xD7ZVkQOOYJRmaVO6RyVZjQZecnPNU6fLUEXAJQdwBmmF3%2B1HRH5RpaLKo9gaSCVC8YPi2BVgBhr1E8C5pgsOA2mXXH3pm2evuUjwDCRCjoMbX2bssOeb7ZdDTzs694ncsHZFWrZlnmtafH0rNFzWpDueKnUUJy1nZchy8xfXUfXvDk0ZusDMthHaD9iA7mAae09AFGk7OWZl8S3GK7cQCuk%2Fj%2FzzxkoxhTwMdK7MoQ%2FegRX05qbZZuH9daR%2BCCZBWAJewQIYsmHTGXkzMG1%2F0Z4O2weKQp%2F%2F4tX6dsGiOiMtbKOeHxvYfbN%2FlB98W%2F1TD3INxQR9iom3CjizMMi1ghxKrH8IXLOvM6vAXlicS6yWJL3OSOHg0tqXw7sWMN%2BwLevVjlRyr%2Fhomew7by4zQ%2BTP23Z4lwLFlGqF%2FznwjEbFlVeWewlJx8VEn4PkgB9hepq%2FJAFNbl8SDt%2B%2BVB03NgEGWu8Exq0Ea50Q8rPrrEZi%2FRZPeIZkdzYtf6ti3hk7%2B3nF0dkVWJ6uQSw4ShI9aOiVIJaOS9MicvH2xXR9GQW5jZ9IHwXECGWqIyFCKgEQgLMS8bFoztECeIGjqkMvf8xbiceIcQrv2SXeB73dGrONrTlTC3mtXJBjqkAdPjkHYIeFJ157ITxQaCcmhpYI6%2BYY5MjVAtudFfshlu47dJED2Yt8zn7h7j6GhUGMmdp3aDobltiqkN%2FMQT5dnG9zXe%2B7NkBdSA4sYjrbMT%2F99dpXUHXoYWY43alqXFhO8sz%2FpRCF%2BDNwb8buh1%2FzJ%2BuFHASMM0cvDmZF2OefusNgS8EkQPSAcphRlv03%2BsEPNbezFuR8FHnHaKsZ4MQawIzawR&X-Amz-Signature=ecf2983d7e119af43eb9c1f194a6214213e4d6f6c8d0680261d952c1a4f0d5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

