---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFFYVZE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWstO7A3GhYDIOTDF%2B6x1yR1UJ%2Fi0oFG0Bg1UQgHiY%2BgIgLJCDPW4mPKIWOqruMnOa9h2ieK0RExxUKkfBaJq7%2BawqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FSIGgoKk6NxHBB%2ByrcAxiyM5b0W1FF9ZgzzSsWEGuwmhnj3XgQrklQPeiSFhx7vDs3UUuqtVGFskQTUz7LVIujGFeL29c2Xk4pdO%2BcC0R%2FIv9dnngLNDhZtLrcuix6j%2BPTs8UHas1KsBOCRssEneh%2F5nCUihmR2m4G8lDSYsBrpWZGbXamEsc7o9%2Fcop07qVbvIC7RSTwEB58%2BgGdG3cD7DZDGpexFDX%2B0qZ4OVGsMJJihnFUpXgbZtMZG9W2nlhSgHGQi90LYrOQumaWnOT7ZssHRTQj5HxLDajYRvxUuXFtkNMW5NCiEfdyeHmnfm%2BFZnq%2B32wuCX8HJlfPPeAfp9qwbfQm%2FpVVWbz9wwGSYIkTSJw0zR58feNcUQ9JDhCppSL0Nn%2F3StgI1%2FNEBgXHsDg0pBdYxOs0i%2BJYPPDIlEZi6BmiGSckaHLjJU3UtUfBQ1J3m6jKp9uonwkHMVmZkr2rn9BASZ2dmMKfVcrG2X%2B6XU%2BTu2Cc9IjQ1ThqCqvDiw%2BG120K7K3z3z5hcQlYLxCvwwgPk8vCuer8LBvm5emZDMr8PTA9wscRGaXg9fFPXRjCnxxBp9SCPeUoDF5zE5ss0ZoCFAw9jKIbco4pIQ1zdntlh3%2BXwSCPmlk6AAW2OIggTU3zyy1myMLLl3skGOqUB9iaKNJstib%2BSB5hWaPjLayapKjp31cu9LNnYOyKamcLjDSP%2FhEhAeJH5CJXZlGVWwFaeHBH%2B1KxIOtSnntK4Qhv8j87BFOOuuJ9IoZOAdwJjzQUoXTeoE%2FNDibtbhcj2Sv03FvCA2CQjjcYXifvD9bnQDPKAFdq%2Fw7D6r0sOQ4%2F9k8%2FEQXT3W7KXxKnFkQugnzXC61pdsFMD48XIS4EY7QV%2BtVq3&X-Amz-Signature=1ad71e44f0400b3672b6207b2c5a6b45dac29264ba14bea82ebdc660daae85e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFFYVZE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWstO7A3GhYDIOTDF%2B6x1yR1UJ%2Fi0oFG0Bg1UQgHiY%2BgIgLJCDPW4mPKIWOqruMnOa9h2ieK0RExxUKkfBaJq7%2BawqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FSIGgoKk6NxHBB%2ByrcAxiyM5b0W1FF9ZgzzSsWEGuwmhnj3XgQrklQPeiSFhx7vDs3UUuqtVGFskQTUz7LVIujGFeL29c2Xk4pdO%2BcC0R%2FIv9dnngLNDhZtLrcuix6j%2BPTs8UHas1KsBOCRssEneh%2F5nCUihmR2m4G8lDSYsBrpWZGbXamEsc7o9%2Fcop07qVbvIC7RSTwEB58%2BgGdG3cD7DZDGpexFDX%2B0qZ4OVGsMJJihnFUpXgbZtMZG9W2nlhSgHGQi90LYrOQumaWnOT7ZssHRTQj5HxLDajYRvxUuXFtkNMW5NCiEfdyeHmnfm%2BFZnq%2B32wuCX8HJlfPPeAfp9qwbfQm%2FpVVWbz9wwGSYIkTSJw0zR58feNcUQ9JDhCppSL0Nn%2F3StgI1%2FNEBgXHsDg0pBdYxOs0i%2BJYPPDIlEZi6BmiGSckaHLjJU3UtUfBQ1J3m6jKp9uonwkHMVmZkr2rn9BASZ2dmMKfVcrG2X%2B6XU%2BTu2Cc9IjQ1ThqCqvDiw%2BG120K7K3z3z5hcQlYLxCvwwgPk8vCuer8LBvm5emZDMr8PTA9wscRGaXg9fFPXRjCnxxBp9SCPeUoDF5zE5ss0ZoCFAw9jKIbco4pIQ1zdntlh3%2BXwSCPmlk6AAW2OIggTU3zyy1myMLLl3skGOqUB9iaKNJstib%2BSB5hWaPjLayapKjp31cu9LNnYOyKamcLjDSP%2FhEhAeJH5CJXZlGVWwFaeHBH%2B1KxIOtSnntK4Qhv8j87BFOOuuJ9IoZOAdwJjzQUoXTeoE%2FNDibtbhcj2Sv03FvCA2CQjjcYXifvD9bnQDPKAFdq%2Fw7D6r0sOQ4%2F9k8%2FEQXT3W7KXxKnFkQugnzXC61pdsFMD48XIS4EY7QV%2BtVq3&X-Amz-Signature=a6f4beacaa3a388585dc684b2cecceeb5a4c5e50ac004f573a501c7f43d9fbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

