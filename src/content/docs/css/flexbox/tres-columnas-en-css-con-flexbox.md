---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3QYJWL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNaqBdDIobpc5Ju8zBealFgL4w%2F7kZYJXFJjcE8d0YygIhALT4yNVhdXCnQ5%2BeJExgoODk9w9QxBPgPkoPCzbb5q6ZKv8DCGAQABoMNjM3NDIzMTgzODA1IgxricFrEC4Uht7Jnrgq3ANTfr8HFlu7aK8JeBCSmqbzUgR1atALAveXvgHfdCDbz7U7TGwZEGQ5yiV3p%2BHaQvI2swbo4etZKrDQCRpd4nYdG6uD88dvqaRP%2Bw7DMJSZ7QIPynu9G08UcFfQgqvmCaRhCoU7KYqJWW974HgGnbqMm37Y7Bb2%2BKlXTif79%2FSaMJnlZSIeupuKRDSs4vq3u5KqHAdn7yhT%2B%2FwIbjTzyzd%2BW1hffay5LZXxodyg2l%2BLUb4cYwzSnL8h6XjWGd5fCuvpKx6rcLl%2F5Iz%2FOlcx1fajPsclUoKbZYm640Z0GSoGCnVwBc72r4uMT%2FHpGMEDxwdZEJhBpiqsJaE8PVPc8p4IX%2FuRa4Ss25KX%2BH8tbvwpooLCSx%2BNkFZJqlLhU%2BuLjJ71OTUoTDjXNgz8wmp2kBpZ%2Fk6e9ipdggJpY9mdGExK6F9TvwMdmWBmX%2BA657UlUJD7vw6yFf3rfaWrlBON78J%2FbzfGplqEk4n47tBSlQjruQn1ydtK6NJFh8a82yasJydDiacuCQL%2F2deVxyWTuH4coQh3YixdIsvS47exOcZVb8bap7QsC%2B9EpHyykokRCB8CRQJJVVyLtPDYbmpAEjW6At5BoTVcrME3JThHKlr0CAz%2BjgxGvClM5yOFXDCO8cvJBjqkAXGh9tcA1NFxIhM91rz%2BWml6c%2FD0KGFNzrCiEUJM5oCCugRot8KIN4bGV8%2F4hwSRC6gHOGh3f7rysaGLfEib2OAu0ITATkujVtTMEU3ewRfGNUaBm%2B8YGjkW3tb7IxoWMSw9MYlYuaOWVqUPNwsU8gfGv2JrZCBk0Zz7WVnmcNOuVTMX8qIDkVB5RNvqD7DhiO9egAV%2BWnf3uc7Q3zvi6KVHmS%2Bp&X-Amz-Signature=96fc13cc74b403d1a7702ad29ca58af64caefc8c0acfa74038f97c5fa5939ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3QYJWL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNaqBdDIobpc5Ju8zBealFgL4w%2F7kZYJXFJjcE8d0YygIhALT4yNVhdXCnQ5%2BeJExgoODk9w9QxBPgPkoPCzbb5q6ZKv8DCGAQABoMNjM3NDIzMTgzODA1IgxricFrEC4Uht7Jnrgq3ANTfr8HFlu7aK8JeBCSmqbzUgR1atALAveXvgHfdCDbz7U7TGwZEGQ5yiV3p%2BHaQvI2swbo4etZKrDQCRpd4nYdG6uD88dvqaRP%2Bw7DMJSZ7QIPynu9G08UcFfQgqvmCaRhCoU7KYqJWW974HgGnbqMm37Y7Bb2%2BKlXTif79%2FSaMJnlZSIeupuKRDSs4vq3u5KqHAdn7yhT%2B%2FwIbjTzyzd%2BW1hffay5LZXxodyg2l%2BLUb4cYwzSnL8h6XjWGd5fCuvpKx6rcLl%2F5Iz%2FOlcx1fajPsclUoKbZYm640Z0GSoGCnVwBc72r4uMT%2FHpGMEDxwdZEJhBpiqsJaE8PVPc8p4IX%2FuRa4Ss25KX%2BH8tbvwpooLCSx%2BNkFZJqlLhU%2BuLjJ71OTUoTDjXNgz8wmp2kBpZ%2Fk6e9ipdggJpY9mdGExK6F9TvwMdmWBmX%2BA657UlUJD7vw6yFf3rfaWrlBON78J%2FbzfGplqEk4n47tBSlQjruQn1ydtK6NJFh8a82yasJydDiacuCQL%2F2deVxyWTuH4coQh3YixdIsvS47exOcZVb8bap7QsC%2B9EpHyykokRCB8CRQJJVVyLtPDYbmpAEjW6At5BoTVcrME3JThHKlr0CAz%2BjgxGvClM5yOFXDCO8cvJBjqkAXGh9tcA1NFxIhM91rz%2BWml6c%2FD0KGFNzrCiEUJM5oCCugRot8KIN4bGV8%2F4hwSRC6gHOGh3f7rysaGLfEib2OAu0ITATkujVtTMEU3ewRfGNUaBm%2B8YGjkW3tb7IxoWMSw9MYlYuaOWVqUPNwsU8gfGv2JrZCBk0Zz7WVnmcNOuVTMX8qIDkVB5RNvqD7DhiO9egAV%2BWnf3uc7Q3zvi6KVHmS%2Bp&X-Amz-Signature=52eac5f23de0ee83fc6a01e73fdb8d487528607cf72378dc0b094ebbb260033c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

