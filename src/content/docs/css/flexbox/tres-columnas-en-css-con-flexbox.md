---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIEIIHW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC6XNop3XydnsNAn7w7%2FvPGzJurc%2Bln60ZTVBfLI25C1gIgZ1jtruR35DCFDkfKjuoxo%2Farz%2Flui1o86EJFYXwMYKkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCB9%2FLXTr0tC6MfAPCrcA54qZzVtmWlMP7yyRE5hpksE7HSvGpTrrO5pm0GFsEqQHYrqODWXmB5QvSWxhFKzmqgt8S4k7sJ5yBpErEyLy4JXVB%2FKdHo8NkGL5Mqi1A1qle4xrWNfXpY%2BGmU7LxP6crRw842zAhtRbMOq4%2BiyYchVHn8RdrX4kuz8truP0hRTLi51xO17Akzbi8MHqSAiLIPX0KIt3YEvDh6Uu9D0itBsN%2Fod0jHfL6pCAuk4glY7mFR5v5DktN4Cin4LUcsD6RuLmjfC4JesfVdjLeHUIWqYevEnbxDdsD1aTBH8e7NPXwochgVxtjfON6yyc7RFL6OCylOrXcL5hK8RDvd4cNlnqXUnVsmhioxWbTJAIT2z7TTXMUj4KMJXyDjvKosvUEVvP1CYx3BSweflWTZPz6vPB1EZ55Ehs1B8C65nkE9zeSzni%2FiMe0RT82evDzS7YMnoVGsG91DMbLz6z7T3BcQ1hbQTPdX8AjKU%2BAYdmOQvIl0fb%2FPUbibTS%2FKvv7xPEYvxSkQwPTTmA9z4ykzwlWpMxAlmsdPYyInZfdSCgI7o9rj83YC7UH6pUqVUTPLO4uQEczXby7pileJTHNyjx8c3FSHO%2FO7BCSBHVAAWvg3ph036NpuOUL8%2BQboiMLauxMkGOqUBgOfi54Ukf2CM9t7OnnilEuPPGEeZoUZ59T3Z%2F7Vp5uWc4BlanNycSISqZq794qjsG1hJ73Lh%2BNdjNS1LUaRo9%2BL%2BXXDctN%2F9ZO2glgoV7Pd5r65a5nPZ22kjaJvhLEJ9DuFPOaECxNOHcethdNskBajASpNmE0uqyoQ%2BZkZX%2FOpOsNq4WGYM9Ei0Ghc8yL44GY5N11tVYswuR1VTdtp84OzASG6r&X-Amz-Signature=96daba9061cc3b32878689718709e840a652dd3ed5f3182fe6d9a3836a3af6a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OIEIIHW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC6XNop3XydnsNAn7w7%2FvPGzJurc%2Bln60ZTVBfLI25C1gIgZ1jtruR35DCFDkfKjuoxo%2Farz%2Flui1o86EJFYXwMYKkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCB9%2FLXTr0tC6MfAPCrcA54qZzVtmWlMP7yyRE5hpksE7HSvGpTrrO5pm0GFsEqQHYrqODWXmB5QvSWxhFKzmqgt8S4k7sJ5yBpErEyLy4JXVB%2FKdHo8NkGL5Mqi1A1qle4xrWNfXpY%2BGmU7LxP6crRw842zAhtRbMOq4%2BiyYchVHn8RdrX4kuz8truP0hRTLi51xO17Akzbi8MHqSAiLIPX0KIt3YEvDh6Uu9D0itBsN%2Fod0jHfL6pCAuk4glY7mFR5v5DktN4Cin4LUcsD6RuLmjfC4JesfVdjLeHUIWqYevEnbxDdsD1aTBH8e7NPXwochgVxtjfON6yyc7RFL6OCylOrXcL5hK8RDvd4cNlnqXUnVsmhioxWbTJAIT2z7TTXMUj4KMJXyDjvKosvUEVvP1CYx3BSweflWTZPz6vPB1EZ55Ehs1B8C65nkE9zeSzni%2FiMe0RT82evDzS7YMnoVGsG91DMbLz6z7T3BcQ1hbQTPdX8AjKU%2BAYdmOQvIl0fb%2FPUbibTS%2FKvv7xPEYvxSkQwPTTmA9z4ykzwlWpMxAlmsdPYyInZfdSCgI7o9rj83YC7UH6pUqVUTPLO4uQEczXby7pileJTHNyjx8c3FSHO%2FO7BCSBHVAAWvg3ph036NpuOUL8%2BQboiMLauxMkGOqUBgOfi54Ukf2CM9t7OnnilEuPPGEeZoUZ59T3Z%2F7Vp5uWc4BlanNycSISqZq794qjsG1hJ73Lh%2BNdjNS1LUaRo9%2BL%2BXXDctN%2F9ZO2glgoV7Pd5r65a5nPZ22kjaJvhLEJ9DuFPOaECxNOHcethdNskBajASpNmE0uqyoQ%2BZkZX%2FOpOsNq4WGYM9Ei0Ghc8yL44GY5N11tVYswuR1VTdtp84OzASG6r&X-Amz-Signature=15cb8c7fc264ceffe4f2e1034d18b483a61662542d6708a42fb88e4fcede89e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

