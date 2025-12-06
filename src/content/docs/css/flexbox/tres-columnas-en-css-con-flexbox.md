---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCUPBIT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNk4Pf%2B%2FsvajmRrcZbtmP8NzFKv8gf2VexdQpBV5A6uAIhAKAIz3CLy2HHHJVFHPerA6PTxFiNgc6IRdUssUrlY%2BWWKv8DCH8QABoMNjM3NDIzMTgzODA1Igy0ckLU2payMiq4UoQq3AOVg8LpDrhPOQtVkM0QydY9agd0GN6GnEE%2BsaF9dQD%2B489AaieQDeQfakG4xzCYGcymFdAOwMkspaH0uNNIL8Z5IlH%2B1K03jfC2E%2FDdBnk2kBQGhB4qYQU9CWuCTyJD12bh9QfLnZSwDde8YA6oQ4zlcbPMSb3YpWT2SZ%2BnwYyAoAvcnhK2TWtDMME%2FS4iC9yOcyW32PiPqq7Ybn59Spxwjm8sA4f9kjcCBn%2Bp5rJAN5JUQ38R7YRfKwV%2Bn9PEuBhtemdozQ%2Fv0R0%2FqIHOQX8aXtqdpXij7iI%2F3ADBqGiitk%2BH5uU1JCNVCFjpfOyV0dvCXmpqpRanhBvMxhmLdzWysGUy%2BXYb26z20YDH1df%2BWGrHZlho8K534aKW8jGYUFZgg%2FzCB5Gc1RtJVkWxCCTEtgks9O7NL8CltWac4bgl9WRln0s%2FmxwO99fGuk6BRypMMg7wQd4jqDOSZG1nIgf24zUeeiRs7uBRZhDVHYqNsXFQXvXUUir6iWDT7vS8%2B%2FrDbq0oKYibMGDt5uyKsUlIZrnDEiyXKwNXuK0BQ9k2H5Nkj7EBSrD%2BZT2MeeierD82C9sTQz7Rt0lZroamQbtSGS6M568OAOJ4OcndQMeO2EPUOaW2E%2Bl%2B4%2FH7BBTCs1NLJBjqkAUeszYnSoWcpefeI4C%2BdNka46SxXmkGfeY4wvNb9JmKtpNetvgQxpIGR%2FB63JqmmSxO9J%2FrpQ%2FqeUh5fDbVQ31FcONRljx0%2FaCvUGX%2Bto4QqcRgQVhpcRfhMhuITUXT1kG6eeX6Y2HCEn%2Fr0oFa7zkYD%2FoZ7UJpWWW%2BHvE13jIcsrwTVniKL0ONhO%2BC59ULyM1vHbogRrBXDs73Lm66e%2FCKtYhqT&X-Amz-Signature=97c84657404abed9dbfee2152627d48c97c83b95da12f2042e56e48a8528d721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCUPBIT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNk4Pf%2B%2FsvajmRrcZbtmP8NzFKv8gf2VexdQpBV5A6uAIhAKAIz3CLy2HHHJVFHPerA6PTxFiNgc6IRdUssUrlY%2BWWKv8DCH8QABoMNjM3NDIzMTgzODA1Igy0ckLU2payMiq4UoQq3AOVg8LpDrhPOQtVkM0QydY9agd0GN6GnEE%2BsaF9dQD%2B489AaieQDeQfakG4xzCYGcymFdAOwMkspaH0uNNIL8Z5IlH%2B1K03jfC2E%2FDdBnk2kBQGhB4qYQU9CWuCTyJD12bh9QfLnZSwDde8YA6oQ4zlcbPMSb3YpWT2SZ%2BnwYyAoAvcnhK2TWtDMME%2FS4iC9yOcyW32PiPqq7Ybn59Spxwjm8sA4f9kjcCBn%2Bp5rJAN5JUQ38R7YRfKwV%2Bn9PEuBhtemdozQ%2Fv0R0%2FqIHOQX8aXtqdpXij7iI%2F3ADBqGiitk%2BH5uU1JCNVCFjpfOyV0dvCXmpqpRanhBvMxhmLdzWysGUy%2BXYb26z20YDH1df%2BWGrHZlho8K534aKW8jGYUFZgg%2FzCB5Gc1RtJVkWxCCTEtgks9O7NL8CltWac4bgl9WRln0s%2FmxwO99fGuk6BRypMMg7wQd4jqDOSZG1nIgf24zUeeiRs7uBRZhDVHYqNsXFQXvXUUir6iWDT7vS8%2B%2FrDbq0oKYibMGDt5uyKsUlIZrnDEiyXKwNXuK0BQ9k2H5Nkj7EBSrD%2BZT2MeeierD82C9sTQz7Rt0lZroamQbtSGS6M568OAOJ4OcndQMeO2EPUOaW2E%2Bl%2B4%2FH7BBTCs1NLJBjqkAUeszYnSoWcpefeI4C%2BdNka46SxXmkGfeY4wvNb9JmKtpNetvgQxpIGR%2FB63JqmmSxO9J%2FrpQ%2FqeUh5fDbVQ31FcONRljx0%2FaCvUGX%2Bto4QqcRgQVhpcRfhMhuITUXT1kG6eeX6Y2HCEn%2Fr0oFa7zkYD%2FoZ7UJpWWW%2BHvE13jIcsrwTVniKL0ONhO%2BC59ULyM1vHbogRrBXDs73Lm66e%2FCKtYhqT&X-Amz-Signature=22fc30b6eb2e56db6ba4a718ee191e59cf0dcc37478ad3671fad9c329c6f8fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

