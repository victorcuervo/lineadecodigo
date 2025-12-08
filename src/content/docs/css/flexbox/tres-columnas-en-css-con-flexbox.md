---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X646IFG6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAbjDBi6Jb%2FltpJN1mceUL3MH8ZdA%2Bef%2BbDeufNPtw6AiBo3YpQ4H4uL747zRgQN4SPb0KUeDhqxpR0R8iO6UWwQyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfprSELyAWLjnEhQ0KtwDN3usPmWL8Nn7O8Ba9DrSMO53ih5IQEDbJIA77xB4%2BCt06DaNdOZn0mrh1kSgSzxCbsX69J1Oosegc2qjIlnnrg3NaPtrOG%2BfeeTQ4iu5A%2FiglvB1rLpJ8iblXzh5GinfVI741aRGapNFXu6Nw91gCdFqD%2BPzAac%2FihIKFUP5uRqvsds6Te0Hpmfvuk9mACTOHJqHxiubVEsHsbA09KgCgxbyyJr7%2FL730d1Xyl2haUxJTnNvgUQxMO4LW8Jv06Y1pzR7l3jwvF1W752akJIwkBCn9ElQqSr7I8gvxg%2BAc3qC0odi3bKvMjWdJhC%2BXej%2FU7TC8oD1e3Q%2Fh76r7PgC5S2jFFYGQhWvfVCusUANqaZJhp3paI2bOdFtadFTX6O%2FDv%2F1tEqeUduJWxRLaAL8F4v3bNeHz%2B6cYYT0PzMFA%2FbYhnuq1k8CCpLL9KAudDBmSyez7H8VzqAriu9Qat%2BDbqAsgU6003CSGLq2nG3P%2F8senWDvnkhyN8X7TH2%2FzxHDbsNUhr48R92B1J8TIHCQhISvfIh7Qa8TkUeFHt%2FfU%2BmbKkV9VrfbD86nSO3BmhPE01MYzHUM4K3NXOKiSSfh3%2F2o0gmOpJ9vtrLKm4koYAoJjw1E0O2X4wFQvn4wj%2BXbyQY6pgGhwN4xoGHNFl7WOtTy5lzGi%2BuIQeCcsR6c%2F%2B2pTT2i54CzDVESlfH1tUDrIAT2E2RAlYSLlTRv5vu10ZSM8jawCblgSMhPJvqR%2FOGcwQutmKxz0OuFDmWe1%2BE8QzF9c5LWUAMIkSnBLXoCHkbyg7AY3wjk5kP1a9PqS2fOf2BtoRd73By7D5wei4SUjZ0A1Mjvc0t6dXQuQzKLWYZgicf79R9RtJHq&X-Amz-Signature=0b7e50ed582c237bff459ab6b8c8d9c2fb1629d0be54031123b48903165592e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X646IFG6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAbjDBi6Jb%2FltpJN1mceUL3MH8ZdA%2Bef%2BbDeufNPtw6AiBo3YpQ4H4uL747zRgQN4SPb0KUeDhqxpR0R8iO6UWwQyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfprSELyAWLjnEhQ0KtwDN3usPmWL8Nn7O8Ba9DrSMO53ih5IQEDbJIA77xB4%2BCt06DaNdOZn0mrh1kSgSzxCbsX69J1Oosegc2qjIlnnrg3NaPtrOG%2BfeeTQ4iu5A%2FiglvB1rLpJ8iblXzh5GinfVI741aRGapNFXu6Nw91gCdFqD%2BPzAac%2FihIKFUP5uRqvsds6Te0Hpmfvuk9mACTOHJqHxiubVEsHsbA09KgCgxbyyJr7%2FL730d1Xyl2haUxJTnNvgUQxMO4LW8Jv06Y1pzR7l3jwvF1W752akJIwkBCn9ElQqSr7I8gvxg%2BAc3qC0odi3bKvMjWdJhC%2BXej%2FU7TC8oD1e3Q%2Fh76r7PgC5S2jFFYGQhWvfVCusUANqaZJhp3paI2bOdFtadFTX6O%2FDv%2F1tEqeUduJWxRLaAL8F4v3bNeHz%2B6cYYT0PzMFA%2FbYhnuq1k8CCpLL9KAudDBmSyez7H8VzqAriu9Qat%2BDbqAsgU6003CSGLq2nG3P%2F8senWDvnkhyN8X7TH2%2FzxHDbsNUhr48R92B1J8TIHCQhISvfIh7Qa8TkUeFHt%2FfU%2BmbKkV9VrfbD86nSO3BmhPE01MYzHUM4K3NXOKiSSfh3%2F2o0gmOpJ9vtrLKm4koYAoJjw1E0O2X4wFQvn4wj%2BXbyQY6pgGhwN4xoGHNFl7WOtTy5lzGi%2BuIQeCcsR6c%2F%2B2pTT2i54CzDVESlfH1tUDrIAT2E2RAlYSLlTRv5vu10ZSM8jawCblgSMhPJvqR%2FOGcwQutmKxz0OuFDmWe1%2BE8QzF9c5LWUAMIkSnBLXoCHkbyg7AY3wjk5kP1a9PqS2fOf2BtoRd73By7D5wei4SUjZ0A1Mjvc0t6dXQuQzKLWYZgicf79R9RtJHq&X-Amz-Signature=364a86b715e380509593b0e8c9ede5b9e2948b07bbb3fc21cbe548eafc4424d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

