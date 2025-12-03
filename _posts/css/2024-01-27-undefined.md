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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4K4DFDD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCqrhwP3uABIN9J3Wmbv8HcG9x6KFrm43Fda0vQV28WcQIgLopQhMcORudh2nrN2f1nB8RSdS9M7CtalotKqPrfT7kq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMYuCk7JB1e2Os4ywyrcA2Q9wyaUaNkTCmPy8dldyfNNzN4IazrZKZxSLnE7Y6%2B57MnvBs5c5db8RvlrxtDs%2F9yEBVbW9PjpO1xflJSPOHcBTblNnII3QMyWhkzrfumB4I7o2jG8eM7pXb6z3J1FDiycxXfLc236eL1LIkFztjLFChCGr5kvgWXf4kUerzWhXelJOHkiuhxRTdYzabu52jSsx9OT%2BSWdeLwoAE3HfeISt0FqwWZ92GybI0AzMGtGyFYSKQeLngkP5Wmc5lkgMmsB0Atd9LzIRO%2BStl1RgLHbD%2F5%2FgE0uUheHdv19DspS8gfbRirzmJgFvxKdNZTC1z2V9IjdPFhTVv6LYS35%2FXl88FTjX6Ge%2FmsAuO%2BiNUxI5hPmFDhfTLWxZOgk%2FYGFXcNg8nUetcZLg1cW2vRTBhl4VNCp%2Fk2rVsqn9lQw2zrPmh3Zuh0JCGXDZcLcKYTGCLujFsQQfyk23Ed2WOgBgBrDRavMhVx1nTQepaSEsLlpxGNfeEriqHfxldbZg9rgcPbe4VI9wjm220kK8RUgMwHGIosvDq8Pj%2FiuVK8Eh26%2FQ%2FnFKhB0UZy8p7xtYSoFp3kzKyPXIvT59SqzVUepUzW2UwPb4OUWRwyhFbkt7cwX7iBQQB1FuesAVuxHMJqHwckGOqUBtvS6EzaShuajYFfZZ4TFMyCstxUZeE5WU97VxgPmmYOiWZOU9ORbGSzAx2h9u6VuPdAue3iJ%2F62EfFn10c72yxef2gq6oc517HCkfxiX0gRvxyitL0BcNPL39GVmD9fHR3qtHKyX8hF6C8LK4YbNkxEY55hdZWE%2Bt8Zvm6JoVoXcngDNIHvJmRWzzFK%2FK2WJRqX1Kh02VANkFHLTT5B6vLIAQlse&X-Amz-Signature=9ca843aaa9c8e2f4ec0d492988b72aee3e379dd3e5e9e26b629237b06d9a7927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4K4DFDD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCqrhwP3uABIN9J3Wmbv8HcG9x6KFrm43Fda0vQV28WcQIgLopQhMcORudh2nrN2f1nB8RSdS9M7CtalotKqPrfT7kq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMYuCk7JB1e2Os4ywyrcA2Q9wyaUaNkTCmPy8dldyfNNzN4IazrZKZxSLnE7Y6%2B57MnvBs5c5db8RvlrxtDs%2F9yEBVbW9PjpO1xflJSPOHcBTblNnII3QMyWhkzrfumB4I7o2jG8eM7pXb6z3J1FDiycxXfLc236eL1LIkFztjLFChCGr5kvgWXf4kUerzWhXelJOHkiuhxRTdYzabu52jSsx9OT%2BSWdeLwoAE3HfeISt0FqwWZ92GybI0AzMGtGyFYSKQeLngkP5Wmc5lkgMmsB0Atd9LzIRO%2BStl1RgLHbD%2F5%2FgE0uUheHdv19DspS8gfbRirzmJgFvxKdNZTC1z2V9IjdPFhTVv6LYS35%2FXl88FTjX6Ge%2FmsAuO%2BiNUxI5hPmFDhfTLWxZOgk%2FYGFXcNg8nUetcZLg1cW2vRTBhl4VNCp%2Fk2rVsqn9lQw2zrPmh3Zuh0JCGXDZcLcKYTGCLujFsQQfyk23Ed2WOgBgBrDRavMhVx1nTQepaSEsLlpxGNfeEriqHfxldbZg9rgcPbe4VI9wjm220kK8RUgMwHGIosvDq8Pj%2FiuVK8Eh26%2FQ%2FnFKhB0UZy8p7xtYSoFp3kzKyPXIvT59SqzVUepUzW2UwPb4OUWRwyhFbkt7cwX7iBQQB1FuesAVuxHMJqHwckGOqUBtvS6EzaShuajYFfZZ4TFMyCstxUZeE5WU97VxgPmmYOiWZOU9ORbGSzAx2h9u6VuPdAue3iJ%2F62EfFn10c72yxef2gq6oc517HCkfxiX0gRvxyitL0BcNPL39GVmD9fHR3qtHKyX8hF6C8LK4YbNkxEY55hdZWE%2Bt8Zvm6JoVoXcngDNIHvJmRWzzFK%2FK2WJRqX1Kh02VANkFHLTT5B6vLIAQlse&X-Amz-Signature=192dbb8201cfab1f9b15d147f81d75787ba3ed773f9e8cf2657b27fa135328b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

