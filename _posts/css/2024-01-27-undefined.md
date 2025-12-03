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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24VHDTX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDs55Zycx1AE1KeFEv5q2uPB8cBnCGrtPqMwcdtiu5OQgIgRBzwnUaeQRQGUmaahWYVEteYhG4%2F%2Bhw8hZhHVFR%2B%2Bv8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDE0%2FxfumKi6ufHH0LyrcA8n33k%2B4AI25SlRgV7KEDlIT5lhom%2BaLjTtqEAYARYcuWolTGoACQUyewtMBgQzapkUY8Yx1UYlL%2BZw5Op69Sm5P%2FAum%2FnAAQV06%2BbgnmqMCV%2BI3aY9jdwbto7cM2ZsFvvaoMVB4aORSN0acNAJo%2B5jUYR7ovLbZy%2F6ylOFIdWi1MSajrl6%2FrF6Vgcngvqtq6aWIU7j4miLVaWQbDbNok6tpkHNdjsWJJPlpkXs9EJdPoZ%2Bon4SzuFZazaw7PwYE6nX00yH1YaLRAz%2FS%2FmOSzf1fV9e8hlyTVC3NTC4JOqUP78XTQuzi%2FkTvsoH7peF2Udo5efvm3Wt9sAiktLwtZWVnbKO6pq666G0Vmn%2B18NlGrdHuTlLmt4Vw%2FFWHOxQ3IHPlF5LxlyZqZu8TZdHVi313coEmPnWI6tySaXbKTjwTh%2FmFzslp7oCuwYaHKEyK0DjKWL0SX4jWo56NJlWTue4Hd%2Bjxbq3b%2B7QA5Dd6WkS%2FaY33AFHRrVOzjs0MzvLNC4F74EZQVZB9V4WCky9X9Qhnq8sKQ4Zryhe1yxOIvrrF9D6TXXgBUc0f6IV%2BKM4pMqZ%2FIzD2oI8KUz%2F0InAV4o4fvG%2BaqwToN9LN5FfsWgpBJeQul0DObUtaiQI6MJWXvskGOqUB8kg68sxeKyFKqxVDlMh5RJjZKn0AglR0iNS51E%2Fdl3ZRF6OHcL%2BIlunaPHFvR9CcArvt81m1E%2F09%2FtsAZGHXrazzg0l%2BTJ%2BG6eZlKm2zI6NlIdpW7gnyMc9s3EOic6amW8QB9yafGBuv8JqQLUFfzyUrX6kVdBvv%2BPxCGToY7lV2QsM2ZoXGs3fnZzXwZPy4ypE2NYKBD63umP%2F%2B2YRMSyzcmF7H&X-Amz-Signature=a6404d8a4f5ebc9c38666b985695d231262bdca1eb6f759f60226b06bc0bfcfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24VHDTX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDs55Zycx1AE1KeFEv5q2uPB8cBnCGrtPqMwcdtiu5OQgIgRBzwnUaeQRQGUmaahWYVEteYhG4%2F%2Bhw8hZhHVFR%2B%2Bv8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDE0%2FxfumKi6ufHH0LyrcA8n33k%2B4AI25SlRgV7KEDlIT5lhom%2BaLjTtqEAYARYcuWolTGoACQUyewtMBgQzapkUY8Yx1UYlL%2BZw5Op69Sm5P%2FAum%2FnAAQV06%2BbgnmqMCV%2BI3aY9jdwbto7cM2ZsFvvaoMVB4aORSN0acNAJo%2B5jUYR7ovLbZy%2F6ylOFIdWi1MSajrl6%2FrF6Vgcngvqtq6aWIU7j4miLVaWQbDbNok6tpkHNdjsWJJPlpkXs9EJdPoZ%2Bon4SzuFZazaw7PwYE6nX00yH1YaLRAz%2FS%2FmOSzf1fV9e8hlyTVC3NTC4JOqUP78XTQuzi%2FkTvsoH7peF2Udo5efvm3Wt9sAiktLwtZWVnbKO6pq666G0Vmn%2B18NlGrdHuTlLmt4Vw%2FFWHOxQ3IHPlF5LxlyZqZu8TZdHVi313coEmPnWI6tySaXbKTjwTh%2FmFzslp7oCuwYaHKEyK0DjKWL0SX4jWo56NJlWTue4Hd%2Bjxbq3b%2B7QA5Dd6WkS%2FaY33AFHRrVOzjs0MzvLNC4F74EZQVZB9V4WCky9X9Qhnq8sKQ4Zryhe1yxOIvrrF9D6TXXgBUc0f6IV%2BKM4pMqZ%2FIzD2oI8KUz%2F0InAV4o4fvG%2BaqwToN9LN5FfsWgpBJeQul0DObUtaiQI6MJWXvskGOqUB8kg68sxeKyFKqxVDlMh5RJjZKn0AglR0iNS51E%2Fdl3ZRF6OHcL%2BIlunaPHFvR9CcArvt81m1E%2F09%2FtsAZGHXrazzg0l%2BTJ%2BG6eZlKm2zI6NlIdpW7gnyMc9s3EOic6amW8QB9yafGBuv8JqQLUFfzyUrX6kVdBvv%2BPxCGToY7lV2QsM2ZoXGs3fnZzXwZPy4ypE2NYKBD63umP%2F%2B2YRMSyzcmF7H&X-Amz-Signature=725ae1560a9c291daa83aea300da37565071928cd743dd826b5fd4f3a240a0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

