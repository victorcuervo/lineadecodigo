---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXN7YGH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnbgA5fs1G%2F8TeLgo7Ilr3dBtJIjkfEo33LqBt%2BzsZ1wIhAKEUtAslXuLhYnOEPOXlW2ltAemTvOjSVgcvBYuOsitEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1R8QP5IgfxjRgYvEq3AOwPyfenDM1eVQbyR3SS7JxHTChcLuvnb%2BePYg%2B5YriyIccvi2zp6kNIk9lBfzP0mowXr3k%2BkCc4gXL%2B35kml8EUHCPJahZ4l7peqUd3Wq7FviXVKwMI2aFD1suheLLjffvRm9z%2F3gJthpXC9KNzl0c1TFtnJVcWhAQ%2FJMUMYShjmCxxMhlayTUNi731siKyeZGj2mg7JzEmEx6oLjjGZpZCraMjyOBh3slkaDFSBLV0ZJ2JDHTig%2BE4SnGfdszZAGIyWsmBlpFKLPFTNrsKhlJ3V6SA7Wt1a%2FP7i5FvNcmKtDzwdkwudolXXJ02x0qym%2F0SK%2BZGXTFKYr4YuSNX674GVdVuBUrt02q7WTZx8hTE7ysNSEUpoLLU5c%2BcbUJlBxEsr%2BUr0%2FbvF7NNRSp5ituyMle51b13VTBeA0IVwTX0Zh3xs4ODpe8koaHsiLfQuArN7RJg6vLC0vzvR0WzhlrUDSG9tl9h0TPYCRJirTKQh1j4o4u98Ufu4l1UDeC9XrqH79O4D8GbFum5Pm1TSfeHlf39VpxoMxaOelmzpeRWvrACDcKDPOQ9gMAzT3%2BRYVmhjQ7GH3IUnUQkPbD0AUIfTNo3TGcD9j5RM0K4PFF5E00gSCHL3LsD23RnTComdXJBjqkAYHIp4ePG0vJfLKJeJ8UVpsbIZ%2B0PXweZUeehPvzsRUXVICh98Kf8z%2B%2B%2B535llz4FQIAO4bOKOSi24g9gc1zwywNOZ5CThyAxFYG%2Fm2vjuBOt5zROHa2LHmrHp72BOPbq1Od5jkVkOvmc6ci8W%2B0Mh0KH9XJOo16xna3Y4CaqMFW5nPAspDWwNa599NzzFcZlTOsGqsXOHMhTgg1olvMbG%2BWCBUE&X-Amz-Signature=90609c1942892ed487a6b2aadc43bd222e52a6443facb6bef000b5cfa8580ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXN7YGH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnbgA5fs1G%2F8TeLgo7Ilr3dBtJIjkfEo33LqBt%2BzsZ1wIhAKEUtAslXuLhYnOEPOXlW2ltAemTvOjSVgcvBYuOsitEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1R8QP5IgfxjRgYvEq3AOwPyfenDM1eVQbyR3SS7JxHTChcLuvnb%2BePYg%2B5YriyIccvi2zp6kNIk9lBfzP0mowXr3k%2BkCc4gXL%2B35kml8EUHCPJahZ4l7peqUd3Wq7FviXVKwMI2aFD1suheLLjffvRm9z%2F3gJthpXC9KNzl0c1TFtnJVcWhAQ%2FJMUMYShjmCxxMhlayTUNi731siKyeZGj2mg7JzEmEx6oLjjGZpZCraMjyOBh3slkaDFSBLV0ZJ2JDHTig%2BE4SnGfdszZAGIyWsmBlpFKLPFTNrsKhlJ3V6SA7Wt1a%2FP7i5FvNcmKtDzwdkwudolXXJ02x0qym%2F0SK%2BZGXTFKYr4YuSNX674GVdVuBUrt02q7WTZx8hTE7ysNSEUpoLLU5c%2BcbUJlBxEsr%2BUr0%2FbvF7NNRSp5ituyMle51b13VTBeA0IVwTX0Zh3xs4ODpe8koaHsiLfQuArN7RJg6vLC0vzvR0WzhlrUDSG9tl9h0TPYCRJirTKQh1j4o4u98Ufu4l1UDeC9XrqH79O4D8GbFum5Pm1TSfeHlf39VpxoMxaOelmzpeRWvrACDcKDPOQ9gMAzT3%2BRYVmhjQ7GH3IUnUQkPbD0AUIfTNo3TGcD9j5RM0K4PFF5E00gSCHL3LsD23RnTComdXJBjqkAYHIp4ePG0vJfLKJeJ8UVpsbIZ%2B0PXweZUeehPvzsRUXVICh98Kf8z%2B%2B%2B535llz4FQIAO4bOKOSi24g9gc1zwywNOZ5CThyAxFYG%2Fm2vjuBOt5zROHa2LHmrHp72BOPbq1Od5jkVkOvmc6ci8W%2B0Mh0KH9XJOo16xna3Y4CaqMFW5nPAspDWwNa599NzzFcZlTOsGqsXOHMhTgg1olvMbG%2BWCBUE&X-Amz-Signature=44f439c98e49eb1aa978ceb8dcebcd4ab5d8a55599dc063c65bf71d461196f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

