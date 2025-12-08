---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDVJJHT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqosyJAjatJHLCRCFJIs67eAxcf6RHi2dOXFW8gsY%2BLAIhANtib2nkFscOjs2xClqclN9%2FjSPGSK946QWAqY9GCVJKKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR3T3w0rHxvcWohTUq3AMZahmOAdUAAXW2fvv4Wlhm5mInSaZrC3rdjxz2aMo2EYd75H52x6E9J6NNBPH3Pup2nw9QFQmgoyVYemb2g7oELl6TzuZnJhDF8no4V02woNcO6qTL5wvSV6Dzi71hsemQcd%2FCLmKUlEceYgK7BCLj%2F9KqtkjkMYnEyrRZeQuW6K6dusJECqQUTB5H1IIviH%2FFUbZPulSwLcaAg8ZGkXbenhAcizndSkOy7yqquOE0QGJuo3uGFtcwGefoHi4%2FAn0E0RbNllVv%2FZAvvvkRyJp2XzSuMJ%2BKpQHGvwP3ojuQX9mKNXu2c89ZUJoDtUZvysr%2FBrjkpBJIZiqDAexk5H2xgLnBywxZXwIw8Z64dCnvZI4d5bKskePMIrJPAQTQT2HPhUtlEevs8HL%2BIfbuKumyRD0Z2Czfy4LBYJXFjJJ51zQYaqcCm8%2BcloS0FQNJlNDh%2F%2BOIa7s4qXNqm%2Fsjr54LCaucDx00SO8zUvpDWhEHvhSdFIy6%2FfT%2FucJ9obPpoz2MupUxykiSl4mYdsOmZBDlipttvRbpijYmzNNBrYSOxzMWNi0tEPs6ypOFtA20rMQiVexMefOv7vPNS84PfocrUXWufWQ0KuWRB%2BG1gbuwhC1dyP6L%2B09htvY48DCsot3JBjqkAYdWFGzC7BGhW%2Firno%2Fmppj6WgJ%2FAJy2YyRK0HcJqq2revcFVnWCc%2FM8tkd6OiSAQZYAmKvhrCtKBfP2R2cDIbMXO9lwD%2BWwrr%2FIlnSxaOjQ7h0HyqLa0gUVHUeBPSk%2FiquiNB5po5cw4lSF6%2Bg7SnyluDBwAmMQWoyiEGQ2bGdlcgoV%2Fqur%2BB%2FE3IWuhmVHDxKur3wHOkyqzj5ha3h9h9be4W8g&X-Amz-Signature=09d66db8da1cfe631cf3c03b2604cd6abbbf2e9c72b9c4ccf2eb1c368465ddd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDVJJHT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqosyJAjatJHLCRCFJIs67eAxcf6RHi2dOXFW8gsY%2BLAIhANtib2nkFscOjs2xClqclN9%2FjSPGSK946QWAqY9GCVJKKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR3T3w0rHxvcWohTUq3AMZahmOAdUAAXW2fvv4Wlhm5mInSaZrC3rdjxz2aMo2EYd75H52x6E9J6NNBPH3Pup2nw9QFQmgoyVYemb2g7oELl6TzuZnJhDF8no4V02woNcO6qTL5wvSV6Dzi71hsemQcd%2FCLmKUlEceYgK7BCLj%2F9KqtkjkMYnEyrRZeQuW6K6dusJECqQUTB5H1IIviH%2FFUbZPulSwLcaAg8ZGkXbenhAcizndSkOy7yqquOE0QGJuo3uGFtcwGefoHi4%2FAn0E0RbNllVv%2FZAvvvkRyJp2XzSuMJ%2BKpQHGvwP3ojuQX9mKNXu2c89ZUJoDtUZvysr%2FBrjkpBJIZiqDAexk5H2xgLnBywxZXwIw8Z64dCnvZI4d5bKskePMIrJPAQTQT2HPhUtlEevs8HL%2BIfbuKumyRD0Z2Czfy4LBYJXFjJJ51zQYaqcCm8%2BcloS0FQNJlNDh%2F%2BOIa7s4qXNqm%2Fsjr54LCaucDx00SO8zUvpDWhEHvhSdFIy6%2FfT%2FucJ9obPpoz2MupUxykiSl4mYdsOmZBDlipttvRbpijYmzNNBrYSOxzMWNi0tEPs6ypOFtA20rMQiVexMefOv7vPNS84PfocrUXWufWQ0KuWRB%2BG1gbuwhC1dyP6L%2B09htvY48DCsot3JBjqkAYdWFGzC7BGhW%2Firno%2Fmppj6WgJ%2FAJy2YyRK0HcJqq2revcFVnWCc%2FM8tkd6OiSAQZYAmKvhrCtKBfP2R2cDIbMXO9lwD%2BWwrr%2FIlnSxaOjQ7h0HyqLa0gUVHUeBPSk%2FiquiNB5po5cw4lSF6%2Bg7SnyluDBwAmMQWoyiEGQ2bGdlcgoV%2Fqur%2BB%2FE3IWuhmVHDxKur3wHOkyqzj5ha3h9h9be4W8g&X-Amz-Signature=33287247e0ace47596981d7a87b8afa375d6f119fb097bf9cd86da6907fbd61f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

