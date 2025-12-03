---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6PG6AIJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCrl%2FHnooZCbENWAD3WC0UxqnYobVrM9rxorw19nsx%2BPwIhAPXGKEZjpU4RzmXYQTvx8XRv4tKDVr%2Bwv5Q%2FWvlr9lj0Kv8DCDYQABoMNjM3NDIzMTgzODA1IgxTWHt4awR1q6Yv1CQq3ANjTG%2FUEny%2BLAJTd71iQkhghXPyv77Ri6D6RFtsQXOA8n8uVmBtJhY%2By7JTPMXudJMRnzSkoBhsQ21%2FHVnJBDRpR%2BPPWc7nZlNUujA1rYwCwRn20Yul6OGgdGT8c0Zg8vt83fkndjd4mlMgYWQSr1o7uJ6plBc9joG3IfZic69o7haFi7rybiDWFXtyO6orgAsjoJyy7cdSOnIx928zgLmTV9wzTsfqHEywkfx4TihwpTLeip8w6w2JYJjs1tYY86fGCQ1YlYAwWX4V5rsT9j8HSNdFx7yKa%2B5gUUp9VOTqotP5ShsZBMxf6wlHqcy%2BNHC9MZBXGvACtNVMB%2BwvZkdGVFCSHtKA%2BcTkphgkY4RogciDC7uRs3RDK5PtMx7YhBziFP%2BN916k4IcduBwokqwNmn2I4jDnFg9JemImZhXkTR46iOppL3ef5ByA8SVf96WJP7YDXW8jzyBGhdX7emBdDKrKej0KL496WOxSfNXdlPHRlQFD36Y%2F1y3QQb9T%2Bp02gkrJiu9jjynKJiO9XMTjhILDI00xIg3MSY7lFYa5ZcrFs8v8O6Sc2QkfZ8THvqjrtk5veuyZajRFC5nu6o%2FLQ1%2BPQ1xfhvo7UxlE5SnM5TjoIS%2BGQJ%2B6oPDodDCnvcLJBjqkAXVik6b7whSjWe10OZZQDQPwVYFP0CIIZAFQ2NZ4TmMxUEPNVGKRicR2UbWm5jcaE%2B2vOGhyfW3x0maREaf4wAUvrt7P2F3HjkkY9nBaCSvgBzkH2Ld4lRSCBc2%2BcgV5weS64yt8zJxmBPSYSziwziDcJXQXQ2SD2DXyafNMKNYFLJXDuhb8rVz%2BcxnqNRZ9NiMcd6H5tan8H8UfD5zRCxvVt%2BHH&X-Amz-Signature=4c1ea1012d6fca34cde82c5877e06f7b0014184fc6fa8b14605097cbe9bc8c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6PG6AIJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCrl%2FHnooZCbENWAD3WC0UxqnYobVrM9rxorw19nsx%2BPwIhAPXGKEZjpU4RzmXYQTvx8XRv4tKDVr%2Bwv5Q%2FWvlr9lj0Kv8DCDYQABoMNjM3NDIzMTgzODA1IgxTWHt4awR1q6Yv1CQq3ANjTG%2FUEny%2BLAJTd71iQkhghXPyv77Ri6D6RFtsQXOA8n8uVmBtJhY%2By7JTPMXudJMRnzSkoBhsQ21%2FHVnJBDRpR%2BPPWc7nZlNUujA1rYwCwRn20Yul6OGgdGT8c0Zg8vt83fkndjd4mlMgYWQSr1o7uJ6plBc9joG3IfZic69o7haFi7rybiDWFXtyO6orgAsjoJyy7cdSOnIx928zgLmTV9wzTsfqHEywkfx4TihwpTLeip8w6w2JYJjs1tYY86fGCQ1YlYAwWX4V5rsT9j8HSNdFx7yKa%2B5gUUp9VOTqotP5ShsZBMxf6wlHqcy%2BNHC9MZBXGvACtNVMB%2BwvZkdGVFCSHtKA%2BcTkphgkY4RogciDC7uRs3RDK5PtMx7YhBziFP%2BN916k4IcduBwokqwNmn2I4jDnFg9JemImZhXkTR46iOppL3ef5ByA8SVf96WJP7YDXW8jzyBGhdX7emBdDKrKej0KL496WOxSfNXdlPHRlQFD36Y%2F1y3QQb9T%2Bp02gkrJiu9jjynKJiO9XMTjhILDI00xIg3MSY7lFYa5ZcrFs8v8O6Sc2QkfZ8THvqjrtk5veuyZajRFC5nu6o%2FLQ1%2BPQ1xfhvo7UxlE5SnM5TjoIS%2BGQJ%2B6oPDodDCnvcLJBjqkAXVik6b7whSjWe10OZZQDQPwVYFP0CIIZAFQ2NZ4TmMxUEPNVGKRicR2UbWm5jcaE%2B2vOGhyfW3x0maREaf4wAUvrt7P2F3HjkkY9nBaCSvgBzkH2Ld4lRSCBc2%2BcgV5weS64yt8zJxmBPSYSziwziDcJXQXQ2SD2DXyafNMKNYFLJXDuhb8rVz%2BcxnqNRZ9NiMcd6H5tan8H8UfD5zRCxvVt%2BHH&X-Amz-Signature=c8fc8dee383c1d2134c1bce6d03ecfe384d5fba8f2cddf72f004ca39a821973d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

