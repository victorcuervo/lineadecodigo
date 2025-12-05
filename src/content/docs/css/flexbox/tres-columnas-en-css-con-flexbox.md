---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EIKC7GN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbNivhCxGvZl3q%2FQ0GrzIvNBrKPJovfFdbGXNj7lBmDAiA76E2yQbyArTS0ZqKHUZ5ZuCrAexM4MHHAK6sSxSDcyCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMcxQWFrywPPUSlSnNKtwDEIg3ouTX13Z7%2BGpgnOI4c%2FcTz7VuBGs7kZRwqJkdO0ieWxg0%2FGwS9VfIX6m3HY4GLjhDUgZjE7ybPh1mZ%2F6PtrfYsQ%2BEmjZU0qFP6UVmWn2qu8WztpqnRy%2FVQhwDq2lsNPWDPpoBkreCO3%2ForvK1vq6rzr8DvhkymITQHwnkVTYZpBISOzkOed9Z%2B4OOvFDrXGsDIiArYB2hVd9DRAv7dxa0OqDOrb7IjxrloE7oImzZch5PjMYhYVwr5IsViMma5wLwsJptbXCkXBvo5acfDMIqLWwrP8CLM%2FPjSsOMS7th7tgqiCd8rjx7BQ18bQ%2FNWJOydUbHPe89ky4M8fqaczXWYaI4vB%2Bt30UeYu9jLvJlulCwrKxmiUaHBSDNlfzQ%2FwIFMLvcCfCfwJkmmFO971xflgtaKpHTZKmnNrXJy9LmzD6q%2BVmfNi1wepQbW%2FYT7rp1xDP1sh9VWz0jKmpSBQvetn%2Fa8MHXV9DBhiWc8LDLFQeQP2ABQOXU%2FeNmlOnx931t7bV7BZbOuOcnzn%2BmR9FmA3lZrGiMrUFWMSYcqLFWPC8RMiWb6GTcph9uzr9%2BH6ui3mM2YbeVQahT2u6hJhYWgfImgy4rQ9IbWx3NLrTLyuLknon4UQaDBsgw8ozIyQY6pgGLkOoOzvHYVel1r1Cdz9bTmSnvi%2BJo3W2fZoJWV4uTMj128fFp%2BeMDU4uyRHvvjP4%2BN0Qn7QbKzH6u7wXLWp78HwQxzvLEHEqu26u6LYQ6ZF8jTdaWqr8w7Tvllp9pFFUILEpVR2eBUsWNspkiFbIWSy%2FBaFgp%2BjIQ3RXmZFdvrWji4oMOVD%2B7CFmDXOnDuJFjM30qw%2F%2F2ePKPoTzMngS7OMsXy8Ry&X-Amz-Signature=2c77be5eba93adf950547937dae2412271aed76202fca9bbb3881a7c4b66aa7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EIKC7GN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbNivhCxGvZl3q%2FQ0GrzIvNBrKPJovfFdbGXNj7lBmDAiA76E2yQbyArTS0ZqKHUZ5ZuCrAexM4MHHAK6sSxSDcyCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMcxQWFrywPPUSlSnNKtwDEIg3ouTX13Z7%2BGpgnOI4c%2FcTz7VuBGs7kZRwqJkdO0ieWxg0%2FGwS9VfIX6m3HY4GLjhDUgZjE7ybPh1mZ%2F6PtrfYsQ%2BEmjZU0qFP6UVmWn2qu8WztpqnRy%2FVQhwDq2lsNPWDPpoBkreCO3%2ForvK1vq6rzr8DvhkymITQHwnkVTYZpBISOzkOed9Z%2B4OOvFDrXGsDIiArYB2hVd9DRAv7dxa0OqDOrb7IjxrloE7oImzZch5PjMYhYVwr5IsViMma5wLwsJptbXCkXBvo5acfDMIqLWwrP8CLM%2FPjSsOMS7th7tgqiCd8rjx7BQ18bQ%2FNWJOydUbHPe89ky4M8fqaczXWYaI4vB%2Bt30UeYu9jLvJlulCwrKxmiUaHBSDNlfzQ%2FwIFMLvcCfCfwJkmmFO971xflgtaKpHTZKmnNrXJy9LmzD6q%2BVmfNi1wepQbW%2FYT7rp1xDP1sh9VWz0jKmpSBQvetn%2Fa8MHXV9DBhiWc8LDLFQeQP2ABQOXU%2FeNmlOnx931t7bV7BZbOuOcnzn%2BmR9FmA3lZrGiMrUFWMSYcqLFWPC8RMiWb6GTcph9uzr9%2BH6ui3mM2YbeVQahT2u6hJhYWgfImgy4rQ9IbWx3NLrTLyuLknon4UQaDBsgw8ozIyQY6pgGLkOoOzvHYVel1r1Cdz9bTmSnvi%2BJo3W2fZoJWV4uTMj128fFp%2BeMDU4uyRHvvjP4%2BN0Qn7QbKzH6u7wXLWp78HwQxzvLEHEqu26u6LYQ6ZF8jTdaWqr8w7Tvllp9pFFUILEpVR2eBUsWNspkiFbIWSy%2FBaFgp%2BjIQ3RXmZFdvrWji4oMOVD%2B7CFmDXOnDuJFjM30qw%2F%2F2ePKPoTzMngS7OMsXy8Ry&X-Amz-Signature=785aca940163a93c706c97bddee50a9278ad026559397f2bc1490aac083a9709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

