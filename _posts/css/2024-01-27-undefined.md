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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQII67KX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDY0cV%2FdwtmbUjoxGt5ZbJBx9Ml9ov0DQy2GXLnJqYvOAIhAKXwrBa9UTIz%2Fs6EU2J62gGDj%2BFT8LZYEpFHDds9mXILKv8DCCsQABoMNjM3NDIzMTgzODA1Igxl1n%2FtjEw24SoFCMQq3AOkJ7OrrrDhPAjeLAo8EO8awcJeSH3RpllQW7FnVwRFssl%2BzA%2BNZLcoXsHWk%2FdggUictH1QMaTFaN%2B6wIKCpEqQKFkUfuPWtCBNu1%2FVMTT2eW2dhB%2BK4FXvkehVZ%2FPzYFDkM32gqKjU6ax8xWbSWr2MPYj%2Fcz82Y%2BjF8FWv2RsYb8b8gqtiAG3IhxZ8CJVHRSersfWPx4jA%2Fba3xGiop53NtHugOV5J7xANDXElQeKhfkpqMoey%2FiO4jwQA7bLyNct3h2benOPryGaI6cnyO49fA2D27zNYZXhfR5Y%2F%2F2bXoZGA26hx9aHS%2F7hNcpjXcXmKehIu2VvtOvFCYo8tjA7uPBeUzMQRbNlsLLKmyiVQeet3HdReeHT%2FRAZE4V%2FQs9T3gJ177criYuolCR8cTUOWwfMQwQJxV9ttY8Ghrw3tA31Bb0k8ZTH4tSvTZEzcbuYEwm%2F2f89mv9AssTqxJRIP72W9%2FeYmAlqTaiRcuD6JfoiNy7a6JOaK3xcYKd4aS7nvEf%2BFHs9n8auc3%2BZ06%2F%2FfKUvvgpy1H6KeyU4Slfnys77F%2FuXwJ77%2FLnRVGJ8%2FPOE7tFqW7Z7E3qDevGXV8y1uVAtGe1sNX%2BosoDEFqW%2F%2Ba9FXSxX7%2FFQ994ma6DDpk8DJBjqkAfucP6jWLaM6PBb88kC8FCwHn%2F%2BzSzsGLk7tAcrcm1Ja4O6ueM4nnD2TS1u0LTQo%2FeBQQVWdnMVOILA5cR9M%2FD3iDvI133JNiADdkwroodQLHaigFXRldN8zHVt4hFAyZadtenI0yYoIYNSpwpEgSlo2BVMN95U6uUO12%2Fxp%2F9wI17TGlMMceiYJJR7YV1s8%2FYycfook3I%2BD9ZBcaeH%2B8wor9MJP&X-Amz-Signature=47e9f1b5aeba7f0919d8de28c1fcc2a3eda0a67521201255d950c0ec94fe1905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQII67KX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDY0cV%2FdwtmbUjoxGt5ZbJBx9Ml9ov0DQy2GXLnJqYvOAIhAKXwrBa9UTIz%2Fs6EU2J62gGDj%2BFT8LZYEpFHDds9mXILKv8DCCsQABoMNjM3NDIzMTgzODA1Igxl1n%2FtjEw24SoFCMQq3AOkJ7OrrrDhPAjeLAo8EO8awcJeSH3RpllQW7FnVwRFssl%2BzA%2BNZLcoXsHWk%2FdggUictH1QMaTFaN%2B6wIKCpEqQKFkUfuPWtCBNu1%2FVMTT2eW2dhB%2BK4FXvkehVZ%2FPzYFDkM32gqKjU6ax8xWbSWr2MPYj%2Fcz82Y%2BjF8FWv2RsYb8b8gqtiAG3IhxZ8CJVHRSersfWPx4jA%2Fba3xGiop53NtHugOV5J7xANDXElQeKhfkpqMoey%2FiO4jwQA7bLyNct3h2benOPryGaI6cnyO49fA2D27zNYZXhfR5Y%2F%2F2bXoZGA26hx9aHS%2F7hNcpjXcXmKehIu2VvtOvFCYo8tjA7uPBeUzMQRbNlsLLKmyiVQeet3HdReeHT%2FRAZE4V%2FQs9T3gJ177criYuolCR8cTUOWwfMQwQJxV9ttY8Ghrw3tA31Bb0k8ZTH4tSvTZEzcbuYEwm%2F2f89mv9AssTqxJRIP72W9%2FeYmAlqTaiRcuD6JfoiNy7a6JOaK3xcYKd4aS7nvEf%2BFHs9n8auc3%2BZ06%2F%2FfKUvvgpy1H6KeyU4Slfnys77F%2FuXwJ77%2FLnRVGJ8%2FPOE7tFqW7Z7E3qDevGXV8y1uVAtGe1sNX%2BosoDEFqW%2F%2Ba9FXSxX7%2FFQ994ma6DDpk8DJBjqkAfucP6jWLaM6PBb88kC8FCwHn%2F%2BzSzsGLk7tAcrcm1Ja4O6ueM4nnD2TS1u0LTQo%2FeBQQVWdnMVOILA5cR9M%2FD3iDvI133JNiADdkwroodQLHaigFXRldN8zHVt4hFAyZadtenI0yYoIYNSpwpEgSlo2BVMN95U6uUO12%2Fxp%2F9wI17TGlMMceiYJJR7YV1s8%2FYycfook3I%2BD9ZBcaeH%2B8wor9MJP&X-Amz-Signature=7dda0ee941eb6cd4e1c855c1bcad8509efc45c606c28f4cfcfc94ebc44910085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

