---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642L34UEQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ECOkYXvNZZR%2BN3gtLXxiDbUi1cMlEBFBFD23bVP0MwIhAL9BJ8udCxg7ZmnRzC92O10vCW1sm8mbrp8m3rHdH1o2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMbbwaqa4SLlkvxt0q3ANxfx4IEDRFNbZ80zKbnWKlOaLPaGW1zYyqn79V8JBJ0q2r32%2FSdXD9VolppwxssDzlWlw1MeQTkus0bLkfKhtdfLuRPdXEhcMKSmpRoX9HxgGIoZJav6t5DSIu5r1W6TnXMAo4OKVnZruRysktbUzbmt7QhGjTidN%2Bcw8vZmCtGzX3PJR7V1wrP5CC7E7N2m51oQpBvZ5arLRzkHgbT5tWpY1%2FK7EwKK2j4nfvegzchQhm0qkvcNxohEdhU%2BcR8o%2BP5DEFhkX5c%2B%2Fiqg8kqCkODQYpdiaLEMCcXFJ9dJyFVkLOaD2qMSDE7Zk56ur73f%2BqmyOT03B27kenhCa0jFHgmkYF8XAnm%2F0%2BDd8%2F6XscoZy73GdLwCW%2FjGYjxee8Hh%2F0%2BOaAxh8xuG5X%2FYVQjcWk2LXDkTKPypynsj%2BUSIgC%2FCZ2Snzmugx0Lh84Oj8k31A5WMpZMHk8QE4ATh4SVyv5d9CH6wtVE4M9ya1fFDIeugRTsFscAsOAVx%2BE8DZKkZpGx5LRIPn1wStFK2IAZbCRm3qba9g%2B4sz5g%2BtZ3%2BmODvDXZEt7jsuC%2BHO%2B8aa58ASkQnMnC6zCM1Gxac2TfUveNl64bD%2FQKCcj4eXF11lvHocEt2QHJoL346SwGDDL%2FdLJBjqkAUOH7ph1d1eyBf30M6LCTLCHXXQeL2tK5RpYn%2BBPDUi9WLbz%2BqBtL5gWQ7%2BALx7JvLjCQxEyu0ZCaPta8SM6aS%2Bf2APn8lW%2Fo6HMdjAclJGBCyThFYOn8era%2Fx7YGXg5qr7W8Nh9RMCuDoSjkhiXkMxGqu7qM8usDS8rCsgepl0toDP5kA%2B5koffV6mxeAM%2BJ7TgnynSR6q7F6Cx3u06idoLB9n1&X-Amz-Signature=45e212d829e4a9abe8ea09cbd8a2fa09e39a2b1dca937aef82b1bd2cb6859162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642L34UEQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ECOkYXvNZZR%2BN3gtLXxiDbUi1cMlEBFBFD23bVP0MwIhAL9BJ8udCxg7ZmnRzC92O10vCW1sm8mbrp8m3rHdH1o2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMbbwaqa4SLlkvxt0q3ANxfx4IEDRFNbZ80zKbnWKlOaLPaGW1zYyqn79V8JBJ0q2r32%2FSdXD9VolppwxssDzlWlw1MeQTkus0bLkfKhtdfLuRPdXEhcMKSmpRoX9HxgGIoZJav6t5DSIu5r1W6TnXMAo4OKVnZruRysktbUzbmt7QhGjTidN%2Bcw8vZmCtGzX3PJR7V1wrP5CC7E7N2m51oQpBvZ5arLRzkHgbT5tWpY1%2FK7EwKK2j4nfvegzchQhm0qkvcNxohEdhU%2BcR8o%2BP5DEFhkX5c%2B%2Fiqg8kqCkODQYpdiaLEMCcXFJ9dJyFVkLOaD2qMSDE7Zk56ur73f%2BqmyOT03B27kenhCa0jFHgmkYF8XAnm%2F0%2BDd8%2F6XscoZy73GdLwCW%2FjGYjxee8Hh%2F0%2BOaAxh8xuG5X%2FYVQjcWk2LXDkTKPypynsj%2BUSIgC%2FCZ2Snzmugx0Lh84Oj8k31A5WMpZMHk8QE4ATh4SVyv5d9CH6wtVE4M9ya1fFDIeugRTsFscAsOAVx%2BE8DZKkZpGx5LRIPn1wStFK2IAZbCRm3qba9g%2B4sz5g%2BtZ3%2BmODvDXZEt7jsuC%2BHO%2B8aa58ASkQnMnC6zCM1Gxac2TfUveNl64bD%2FQKCcj4eXF11lvHocEt2QHJoL346SwGDDL%2FdLJBjqkAUOH7ph1d1eyBf30M6LCTLCHXXQeL2tK5RpYn%2BBPDUi9WLbz%2BqBtL5gWQ7%2BALx7JvLjCQxEyu0ZCaPta8SM6aS%2Bf2APn8lW%2Fo6HMdjAclJGBCyThFYOn8era%2Fx7YGXg5qr7W8Nh9RMCuDoSjkhiXkMxGqu7qM8usDS8rCsgepl0toDP5kA%2B5koffV6mxeAM%2BJ7TgnynSR6q7F6Cx3u06idoLB9n1&X-Amz-Signature=ee2515421c423d5d6df1950961254d215fe172de1d3bf22719d91b715d3eaf4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

