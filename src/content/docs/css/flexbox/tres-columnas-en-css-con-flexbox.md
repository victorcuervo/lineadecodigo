---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAYRINS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlFqQe6Eg3gST%2FlJktz0ZSoYjDpp4VMSA7PBjLrBqVPAiEA1zY5yOrC1cADfKtztmXtEDUPvQUoFBR5hhHpqbQjevsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC%2FQ2yAGAzQRzwHRLyrcA%2FLNcmOVrLF2tzD9vat9Qiws0W1FMbZAPUp2qrQ4%2B3gdlP9JAUnW892zeDzuD79OyDpmSpLwT1HhW0t1PtNPBDaMUzy511hng5e8KE2YDEk6PwLnwTb%2Fh2vErDbK3qWNLkQOb7dExZZP8NW7BoYZ9C9T4NiyC7P7WwchX%2BbaVlMab6yY9DAgOykAYa8SlzwCxxhgF%2BUNLs7TJZ%2B1W7213ZW8lC4nm1oDmQMRGPFwAJxJlV3tuZTSmYu4Q2giqweshklGgPhvSel%2FAwFl7GrMI6ETyvhKOl%2B%2FZBZwauxXtcOYI6vwjkNHfNieHGmUcw9oM7EhizpQLk0I7cLLQco3izlaP4B1uAnIe8%2FmzzLqczTWbkWutenJpyy5S%2BNpsjuvm1KiuTSMcljkNDCkcBnMPkysICymbLubEu78C9MiWdGbeTGpqe2uVnaxNw6El2VXg6CyGJMaIlTccEvmlQ%2BAI6VYnuPaXxWZv8ApRwRGWY8QFizJF8jFDpaZntoLi48%2FUtXcOxmuXzL9vTez9L2rIGgnHUdsi8Af3k1TGZYQu7MmO0WJW%2B0NCgs2luq2cURbcXO3zgFJJGhgTcGHetShoEppGxrHpYoyV14mcrKY8Cx%2BqOKsk0TDh%2FBu79qtMOSm0MkGOqUB6gMfQt6Zke19Uqar56x1WDm4RfAPx8G4SbQKfOhM%2Bp75L2eWj8zFWfpbaK2ynZXXmxwLOnNvC9BS1kaxmieZ9LMjhzHtXdWMXkELRhP0e%2Bt9lRHIcIE55f9EmGC8gxHM%2F3yFFlUqM%2BmHmQ6qipbrbOMmwsW9fRAtVTA904EiUoCfqXSTCZg3zjTnaAADatH7a0jAAeYFRSGFgRbijewI991zUdO5&X-Amz-Signature=f0ff09d7339027862326bda1350348ed9195e6d5076aebdb770cf2f7a1440712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAYRINS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlFqQe6Eg3gST%2FlJktz0ZSoYjDpp4VMSA7PBjLrBqVPAiEA1zY5yOrC1cADfKtztmXtEDUPvQUoFBR5hhHpqbQjevsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC%2FQ2yAGAzQRzwHRLyrcA%2FLNcmOVrLF2tzD9vat9Qiws0W1FMbZAPUp2qrQ4%2B3gdlP9JAUnW892zeDzuD79OyDpmSpLwT1HhW0t1PtNPBDaMUzy511hng5e8KE2YDEk6PwLnwTb%2Fh2vErDbK3qWNLkQOb7dExZZP8NW7BoYZ9C9T4NiyC7P7WwchX%2BbaVlMab6yY9DAgOykAYa8SlzwCxxhgF%2BUNLs7TJZ%2B1W7213ZW8lC4nm1oDmQMRGPFwAJxJlV3tuZTSmYu4Q2giqweshklGgPhvSel%2FAwFl7GrMI6ETyvhKOl%2B%2FZBZwauxXtcOYI6vwjkNHfNieHGmUcw9oM7EhizpQLk0I7cLLQco3izlaP4B1uAnIe8%2FmzzLqczTWbkWutenJpyy5S%2BNpsjuvm1KiuTSMcljkNDCkcBnMPkysICymbLubEu78C9MiWdGbeTGpqe2uVnaxNw6El2VXg6CyGJMaIlTccEvmlQ%2BAI6VYnuPaXxWZv8ApRwRGWY8QFizJF8jFDpaZntoLi48%2FUtXcOxmuXzL9vTez9L2rIGgnHUdsi8Af3k1TGZYQu7MmO0WJW%2B0NCgs2luq2cURbcXO3zgFJJGhgTcGHetShoEppGxrHpYoyV14mcrKY8Cx%2BqOKsk0TDh%2FBu79qtMOSm0MkGOqUB6gMfQt6Zke19Uqar56x1WDm4RfAPx8G4SbQKfOhM%2Bp75L2eWj8zFWfpbaK2ynZXXmxwLOnNvC9BS1kaxmieZ9LMjhzHtXdWMXkELRhP0e%2Bt9lRHIcIE55f9EmGC8gxHM%2F3yFFlUqM%2BmHmQ6qipbrbOMmwsW9fRAtVTA904EiUoCfqXSTCZg3zjTnaAADatH7a0jAAeYFRSGFgRbijewI991zUdO5&X-Amz-Signature=03e7d754ab32e6077ab76ff0114fca0762055b3f6c33ad32444301ea98d31349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

