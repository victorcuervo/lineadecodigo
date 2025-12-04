---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNAT2Y4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLytS1MZa0RURSyofFaaZ4BP7z9D4bBTpoqni8KrvHPQIgTvaXSITn6g6ad2SUXwoufzj78H2Qr%2BFkm1dRDKZrIPAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDExGoRuGUcKf%2FbhxQircAyjzCgvgpmZjbcHj33Sq1FU0ICrB%2FRf79rXo1t96mafFAUpThJWwSgK%2Fe%2Bht1t4WY2PO3LP0r2s9frHokvRbrqFY3oQOAJyY8ZrIdhOncpBN7BogQYARdU%2BQETip%2B5spmdOGY4ZWFKj8P00GwkCFJqyWyTFSSTOnqyJNi4mbwaZvBx6Qgihi4EbuWyFUIkZiw6DdZoJlfdpT17sy0oE5EmCZJunvTFUvh7IjSyfOc2C0V6lz1la8tFMbX4hcaQnknLOtF%2F333KnCyZpHaMcXXacjUs8Tqfj9OH2taOqDbWjJf9tRuKktsMCpYUMyKTa8vDZe6sldZoUZo7dZQ%2FLBtecKQ%2BmreHBg3U7R0XFdipVfEBZAR1u0kO%2BBmyJ%2BmDYvJFLcrYizIa%2BaHOavUo%2FBYmBpWqChBXxf00%2BwXx44ahDtfnfKRIyahFF5aIE70Zk%2Flx%2FnU0QHUq%2Fz0UKab0gtUXcq8LvaRMIxFA%2F5csuqxjSMK5sA%2BjnqCoy6i3WwmL8GAyg4c%2BTcDrir6%2FnVgFRtXdi3J6CImHEUYGJAWboBbxSnJABR9%2FreZBrkJRq4ziQ7h3AS9O3gza38XXdnkmpOW8WRyZypd1SZhwRsQ2MqKXPHCXDglFKoFRqK0K5PMNWUw8kGOqUBDmj7OqhCYvc3g9%2B5boAXOuEcs4oVbmA29X0ftMSRU7OqGQEza8WfHOKjmTFZBlxTCXYsecc98Y5hjX6JyJEbg0VgWKsknWZVpDqCGxlO%2F0l9enOiWT18V4M2g58ljFXzXq%2FrHqGQLeBrR1vcGPnGXWOM5fPZ%2F0YV8qRCu0Mj75L%2B%2B%2BQ%2BuXC5Am5o0Dos%2B6o6HYb5J15xsdQ3ik5b7ZpgHVOafLAL&X-Amz-Signature=aa38ddfe2272775c9351464005d7c38a26593eec3fc9d291eb096b5e8c5548c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNAT2Y4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLytS1MZa0RURSyofFaaZ4BP7z9D4bBTpoqni8KrvHPQIgTvaXSITn6g6ad2SUXwoufzj78H2Qr%2BFkm1dRDKZrIPAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDExGoRuGUcKf%2FbhxQircAyjzCgvgpmZjbcHj33Sq1FU0ICrB%2FRf79rXo1t96mafFAUpThJWwSgK%2Fe%2Bht1t4WY2PO3LP0r2s9frHokvRbrqFY3oQOAJyY8ZrIdhOncpBN7BogQYARdU%2BQETip%2B5spmdOGY4ZWFKj8P00GwkCFJqyWyTFSSTOnqyJNi4mbwaZvBx6Qgihi4EbuWyFUIkZiw6DdZoJlfdpT17sy0oE5EmCZJunvTFUvh7IjSyfOc2C0V6lz1la8tFMbX4hcaQnknLOtF%2F333KnCyZpHaMcXXacjUs8Tqfj9OH2taOqDbWjJf9tRuKktsMCpYUMyKTa8vDZe6sldZoUZo7dZQ%2FLBtecKQ%2BmreHBg3U7R0XFdipVfEBZAR1u0kO%2BBmyJ%2BmDYvJFLcrYizIa%2BaHOavUo%2FBYmBpWqChBXxf00%2BwXx44ahDtfnfKRIyahFF5aIE70Zk%2Flx%2FnU0QHUq%2Fz0UKab0gtUXcq8LvaRMIxFA%2F5csuqxjSMK5sA%2BjnqCoy6i3WwmL8GAyg4c%2BTcDrir6%2FnVgFRtXdi3J6CImHEUYGJAWboBbxSnJABR9%2FreZBrkJRq4ziQ7h3AS9O3gza38XXdnkmpOW8WRyZypd1SZhwRsQ2MqKXPHCXDglFKoFRqK0K5PMNWUw8kGOqUBDmj7OqhCYvc3g9%2B5boAXOuEcs4oVbmA29X0ftMSRU7OqGQEza8WfHOKjmTFZBlxTCXYsecc98Y5hjX6JyJEbg0VgWKsknWZVpDqCGxlO%2F0l9enOiWT18V4M2g58ljFXzXq%2FrHqGQLeBrR1vcGPnGXWOM5fPZ%2F0YV8qRCu0Mj75L%2B%2B%2BQ%2BuXC5Am5o0Dos%2B6o6HYb5J15xsdQ3ik5b7ZpgHVOafLAL&X-Amz-Signature=68f1fd42399b1933e08d012e79985fffc50177c1f8a2fae8c05e6a8b4c966eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

