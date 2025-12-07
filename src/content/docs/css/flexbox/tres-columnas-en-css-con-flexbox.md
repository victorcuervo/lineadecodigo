---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMR2JSP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcH0qpsZzPSOQc8qyQm45sG%2B323ahJZaekuWy1STJlEQIhAPm0pBOQJxFKhF3OqFU298G7225ebOfMOugd1YaqKDVMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrknbk5%2FYY6kPxRn4q3AM9xQp6vqTCcAqJ571jGa3fdghoo8pfeRsj8UODfbKOgC%2By5RO4wqeU3Pk7ekJe%2BstzkYuMBaE1P3hFacQ09l46LVRCvyV3pt05IDV4rfCOXLKelblUQ3I92CDG%2F%2F5xgyH3p7SoBvZ9rzCekPa3t2VZLRWfOXEkLhYPwy4zs5qWt9FjORlkFOd9aybv%2F2B9n6D0FK%2BPKeqmvIywCQaddH448SuTY83DNEGEiFURdTATPBDOqPDhCZ2NRdhXVuUjuT6f5%2FPeuXlzw20I%2F%2Biso7g5XWpGa9vTW3vWcJKKRjfrjHVRJ3ewNyXAtj7pBef7oAapGsR2zuq6d7pLTh165IidqdfozBscdw01CBPU2jbYPBYIcQF1MYSKdkhQKIx8KSxKHQJMh8dROM05F0%2F7yPPdIKQDXyn%2Fuzkbm0P9y2x7O0MnMXf%2FW9vXH28SisGI24p%2Fj8SmXl3n%2FQjDjy6xbB7l4zYOcDYD0ogqZobNgbwtmNUpwyxwSi9QGUeU5CR6wvVHcILYQ7SMev8t9YPi1XKHQZXdDNVqDD9RRq5b%2BYSlubJX2lqLvJ8YjUn6kCiz3MqHkBAdturAEClRyp3y0QICRobWEnnPiDCzEcyfk777XskdrnuUzCIb%2Bj7ZvjCImtXJBjqkARmdWQJfuiNjngbo7TonPI5vnKiQWXKWmCdswTAljAxinYxgNOBOa%2FFtq%2FLSVQldkTDzs4u418Hf5OhWbXqGjYQui%2By7%2BXP%2BTnPQqOJW9REGrNQKAHzUP1kHOrsKPHlvYIFXkarEgdbkT2Tfqfp2GlCbW30L9z3jGwYkKLVo1uvHX5sb7ySLuija4xHo6EwNwv%2FPMILjC5uOY2i%2Be%2B4ovCW3%2BU5w&X-Amz-Signature=98db52c0b52489876e129571d914cec1024f3498aa94444f742374ebce58d86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMR2JSP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcH0qpsZzPSOQc8qyQm45sG%2B323ahJZaekuWy1STJlEQIhAPm0pBOQJxFKhF3OqFU298G7225ebOfMOugd1YaqKDVMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrknbk5%2FYY6kPxRn4q3AM9xQp6vqTCcAqJ571jGa3fdghoo8pfeRsj8UODfbKOgC%2By5RO4wqeU3Pk7ekJe%2BstzkYuMBaE1P3hFacQ09l46LVRCvyV3pt05IDV4rfCOXLKelblUQ3I92CDG%2F%2F5xgyH3p7SoBvZ9rzCekPa3t2VZLRWfOXEkLhYPwy4zs5qWt9FjORlkFOd9aybv%2F2B9n6D0FK%2BPKeqmvIywCQaddH448SuTY83DNEGEiFURdTATPBDOqPDhCZ2NRdhXVuUjuT6f5%2FPeuXlzw20I%2F%2Biso7g5XWpGa9vTW3vWcJKKRjfrjHVRJ3ewNyXAtj7pBef7oAapGsR2zuq6d7pLTh165IidqdfozBscdw01CBPU2jbYPBYIcQF1MYSKdkhQKIx8KSxKHQJMh8dROM05F0%2F7yPPdIKQDXyn%2Fuzkbm0P9y2x7O0MnMXf%2FW9vXH28SisGI24p%2Fj8SmXl3n%2FQjDjy6xbB7l4zYOcDYD0ogqZobNgbwtmNUpwyxwSi9QGUeU5CR6wvVHcILYQ7SMev8t9YPi1XKHQZXdDNVqDD9RRq5b%2BYSlubJX2lqLvJ8YjUn6kCiz3MqHkBAdturAEClRyp3y0QICRobWEnnPiDCzEcyfk777XskdrnuUzCIb%2Bj7ZvjCImtXJBjqkARmdWQJfuiNjngbo7TonPI5vnKiQWXKWmCdswTAljAxinYxgNOBOa%2FFtq%2FLSVQldkTDzs4u418Hf5OhWbXqGjYQui%2By7%2BXP%2BTnPQqOJW9REGrNQKAHzUP1kHOrsKPHlvYIFXkarEgdbkT2Tfqfp2GlCbW30L9z3jGwYkKLVo1uvHX5sb7ySLuija4xHo6EwNwv%2FPMILjC5uOY2i%2Be%2B4ovCW3%2BU5w&X-Amz-Signature=a93ee297b962da5ee421c0192ba389f0d69c76211910fbce371ea5fe52194ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

