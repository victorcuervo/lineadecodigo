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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBSV5WZ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDT7aLmVQfmDnOIOOcJQLaQ6JjCZh7ZbkhERw2%2Be8iO0QIhAOZ0C7Tj09zEHCFFaf%2FIv90FYNCtm7%2FH7JLo0XW2q68%2FKv8DCCoQABoMNjM3NDIzMTgzODA1Igy6Ep%2BMgQCeesUOK%2FIq3AM2TUgzTz0DxxjGY%2BXFU3mVO22ncWdK5CEmaGgSqRozBhsN40rgHrf5yHaYc8eHV%2B%2ByLhovE1af9ZlJJWOWPC5KXWNrH3844jR1leKPVrIpUOYwpjS%2Bz5p5UsuYMsAttQqxEXyl66yYiCnf9x0ffFBNlYB03lUw%2FjrPyk87s%2B3wQ%2FypqJ9ytRQY2l%2B3hwX6f5NhtuYtGmje6aY3j31ui9cCm6vKrXdueAq9A2Dnnf60jBpVs0vtcF1zkCPxqVrO5Ci5WTw%2BY%2Fbi2mha3VmXbGhy3Rfz18gBtk3wdg6skLUzB%2BpkZ2G%2Bply99ji9j%2B7RgfHPuBPbtne1ZCzRhwSU3LzaVVZK7wnCcFrR32SK4eR%2FMZ3ryFY2dUSN7mqATaNcSAf37jP2aPeL6UQeFGwbYlHsBLT1ZXam8eMzgm6uadgKIKyvfrM2%2B40NLrYl7T%2BctufkAlQVd05dSG%2BSy%2FK60u2co8IlSkybGx0rGPQq9e2yomPYWMHtSVwrpm8e5XNlgwP08nLQuZW7XjsJiiLAkjsqDluWJVC8i2TCHhiz2qfSNabqW9FhqDrnYK2C1UFE%2FXwZ4Xlp0%2B7bIEEh2f%2FvB91Dfff2dmJQ6lvQGi7WdCOxntiIEORDpn5xr90NVDDK9b%2FJBjqkAd%2F8jPITXcwzHiIWZNEu99TM2qz5nw7bBjSBU4EmB9hs0Z1zauOo9lOxqrDT9tMapcvBm2EaKgYSt9jUiJj3j1IExxKbIkjnEcGAG7X%2FykgpHHdfHkvpzXraDP%2Fkxft67XePfoVaJQ%2BsBfjnphaPib0pEbuvbTQ%2FUb8mMAiqAbiN5mnH6%2BYFy%2B5iVjLpVGQLRfKOF5uCA7TQsLjd1Z7hXECcYBu8&X-Amz-Signature=a38729a23dd1db943c5a852b38b202ffe062e09f6837647b57d969c9a1192efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBSV5WZ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDT7aLmVQfmDnOIOOcJQLaQ6JjCZh7ZbkhERw2%2Be8iO0QIhAOZ0C7Tj09zEHCFFaf%2FIv90FYNCtm7%2FH7JLo0XW2q68%2FKv8DCCoQABoMNjM3NDIzMTgzODA1Igy6Ep%2BMgQCeesUOK%2FIq3AM2TUgzTz0DxxjGY%2BXFU3mVO22ncWdK5CEmaGgSqRozBhsN40rgHrf5yHaYc8eHV%2B%2ByLhovE1af9ZlJJWOWPC5KXWNrH3844jR1leKPVrIpUOYwpjS%2Bz5p5UsuYMsAttQqxEXyl66yYiCnf9x0ffFBNlYB03lUw%2FjrPyk87s%2B3wQ%2FypqJ9ytRQY2l%2B3hwX6f5NhtuYtGmje6aY3j31ui9cCm6vKrXdueAq9A2Dnnf60jBpVs0vtcF1zkCPxqVrO5Ci5WTw%2BY%2Fbi2mha3VmXbGhy3Rfz18gBtk3wdg6skLUzB%2BpkZ2G%2Bply99ji9j%2B7RgfHPuBPbtne1ZCzRhwSU3LzaVVZK7wnCcFrR32SK4eR%2FMZ3ryFY2dUSN7mqATaNcSAf37jP2aPeL6UQeFGwbYlHsBLT1ZXam8eMzgm6uadgKIKyvfrM2%2B40NLrYl7T%2BctufkAlQVd05dSG%2BSy%2FK60u2co8IlSkybGx0rGPQq9e2yomPYWMHtSVwrpm8e5XNlgwP08nLQuZW7XjsJiiLAkjsqDluWJVC8i2TCHhiz2qfSNabqW9FhqDrnYK2C1UFE%2FXwZ4Xlp0%2B7bIEEh2f%2FvB91Dfff2dmJQ6lvQGi7WdCOxntiIEORDpn5xr90NVDDK9b%2FJBjqkAd%2F8jPITXcwzHiIWZNEu99TM2qz5nw7bBjSBU4EmB9hs0Z1zauOo9lOxqrDT9tMapcvBm2EaKgYSt9jUiJj3j1IExxKbIkjnEcGAG7X%2FykgpHHdfHkvpzXraDP%2Fkxft67XePfoVaJQ%2BsBfjnphaPib0pEbuvbTQ%2FUb8mMAiqAbiN5mnH6%2BYFy%2B5iVjLpVGQLRfKOF5uCA7TQsLjd1Z7hXECcYBu8&X-Amz-Signature=1da19ba28dfc5880f377f5cf1321794566ede29159e8f3ed9fc322c62643ca3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

