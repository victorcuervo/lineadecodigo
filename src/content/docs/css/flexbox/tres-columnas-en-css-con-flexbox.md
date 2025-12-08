---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5NF63P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZMYX1zSAQWkJxMOFwy0qFgjysZCW%2Bt9UgPI3y4rljuAiEAnyrU%2BKTQyrcwgpmtuOFgSTtpSRRwl66geoUUrX4HdGkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFDt2DmCZq4HEAGjZSrcA03s30ymaL773hUWCZ384S%2BcIoxBrVSZbdQKR0B%2BE9Ug6XLU51LrNLJwq3K2UEO39idkPwJbSTjTH3EZLfAhA%2FLap6k6UolbtQH0sIeEtORS8fVMsn1NHWPkBEpic4UwsOJtnx0qbVPMyVK1nXWDQWThwXIL6ySt%2Bjtix6RA%2FiHm2X0qef5gXTS4oDNeYPxhHZHFRNehirEXdQFVikZYz1GpF1ubQEXka5PioFxlWZX3WlcvdH5gLLJsQYdrFOOUsAdMJ3uN1YsjkBVUqYcubvPai1x9T5RTnnM%2B%2BccHl%2BfgHSXVfIBhLtXvuzBGaQnsWU9MeF2uO1nLNrjqlsiKzJ9B6eIbyYwjLIxChdBlOXT77MyjlR6BPtYeDkV%2F9lRLlzJhilquF0PabNDfWktMI%2F9w6DTL7YpspoycubpQQzZs%2BS60CMB7rkmDK4AMvBVXBwiaddR%2FyUA4gpZ3sXobG8NbdUwmqnOXyN7pcpyhy%2FbgTgDXUeU763rQQG7HROe8B2MOYc%2Be2MLqMT2%2Fjq%2FMFX0rOvoK%2BBl7ifH0tyTHBgqVWoOARlTZwkzm%2BT11AzTj%2FxF0TPoyouL9%2BPvF8%2B7vY7g27D2nvT39EBYjPfYpAixBZHwr2TyNbKD5weCaMM3B28kGOqUBcZYYC%2BLonQb4zlLXZEJUmmMzGJqbK8DS4ij38p9a4WPvA1BIt5kVM4xC3EUE4n%2FjwtHblCr%2BG%2B%2FlA5bg2kgMa%2FDURJ1H4rhHR4Kz%2FI9h5qzamN37QnJlEXGpeFzmt%2FvOp6EwSrn5LR7wm9TcP7L6h0TMyjUzkkZ%2BM9YedWnzCkUC0E26I%2Fsvu89DvIiWBJfVZyZtFi9Gj07VSpS%2F7c9t43awY441&X-Amz-Signature=ccd22b2990cf268e5feedd67790226a48b3f55efe47ecdeaea7cd431fbed0760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5NF63P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZMYX1zSAQWkJxMOFwy0qFgjysZCW%2Bt9UgPI3y4rljuAiEAnyrU%2BKTQyrcwgpmtuOFgSTtpSRRwl66geoUUrX4HdGkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFDt2DmCZq4HEAGjZSrcA03s30ymaL773hUWCZ384S%2BcIoxBrVSZbdQKR0B%2BE9Ug6XLU51LrNLJwq3K2UEO39idkPwJbSTjTH3EZLfAhA%2FLap6k6UolbtQH0sIeEtORS8fVMsn1NHWPkBEpic4UwsOJtnx0qbVPMyVK1nXWDQWThwXIL6ySt%2Bjtix6RA%2FiHm2X0qef5gXTS4oDNeYPxhHZHFRNehirEXdQFVikZYz1GpF1ubQEXka5PioFxlWZX3WlcvdH5gLLJsQYdrFOOUsAdMJ3uN1YsjkBVUqYcubvPai1x9T5RTnnM%2B%2BccHl%2BfgHSXVfIBhLtXvuzBGaQnsWU9MeF2uO1nLNrjqlsiKzJ9B6eIbyYwjLIxChdBlOXT77MyjlR6BPtYeDkV%2F9lRLlzJhilquF0PabNDfWktMI%2F9w6DTL7YpspoycubpQQzZs%2BS60CMB7rkmDK4AMvBVXBwiaddR%2FyUA4gpZ3sXobG8NbdUwmqnOXyN7pcpyhy%2FbgTgDXUeU763rQQG7HROe8B2MOYc%2Be2MLqMT2%2Fjq%2FMFX0rOvoK%2BBl7ifH0tyTHBgqVWoOARlTZwkzm%2BT11AzTj%2FxF0TPoyouL9%2BPvF8%2B7vY7g27D2nvT39EBYjPfYpAixBZHwr2TyNbKD5weCaMM3B28kGOqUBcZYYC%2BLonQb4zlLXZEJUmmMzGJqbK8DS4ij38p9a4WPvA1BIt5kVM4xC3EUE4n%2FjwtHblCr%2BG%2B%2FlA5bg2kgMa%2FDURJ1H4rhHR4Kz%2FI9h5qzamN37QnJlEXGpeFzmt%2FvOp6EwSrn5LR7wm9TcP7L6h0TMyjUzkkZ%2BM9YedWnzCkUC0E26I%2Fsvu89DvIiWBJfVZyZtFi9Gj07VSpS%2F7c9t43awY441&X-Amz-Signature=68d8f46aa540c2f37dbab94c8be3201a600a0c1cb6aa819f3060dd7002cbe9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

