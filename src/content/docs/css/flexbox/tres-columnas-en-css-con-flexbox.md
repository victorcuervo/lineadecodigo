---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MSFLZOQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaQLQQGaYBXOm1DnCUL%2FT5%2FO1HSueA1ISQjiGhQaLxRQIhALZlAqc0qUzacwgOrJWz2hqXfjy2oI7IY5gorLchNw%2FQKv8DCGwQABoMNjM3NDIzMTgzODA1IgydFZjaMSMRdiRi8wAq3AONU%2B%2FnDLgwBUrEMg8WlpJ92cjQjUSAPstCz5UzIOrvp2wL8rcivwFnE11pq8BR6gw%2F7GY8sGLkJUrPBgN74hvhOIq9QEmfVaDwOSj3FoVEzWQY%2FbCarCUiMulV1UuTYFyF1nluZs2ZKXQTWw%2FiIVj3F4Py3VszunWCrWLV1Y5fIKX6LTCs44D7JJjfrkMN0sVWAllhkxFOoOi%2BGNc%2FrCewdKuW8DW%2F77LFx%2FbRz7OSE6qVr2UDM4ef%2Bsu8KPg6qTYKh8zA7xsrIX7QZsIuOkPEvGcbSF4AELqLc0tTWQ6ECvENKSqSpmwXUDKe%2B1WbY8QdGD4Jwvxub2nAiHMUGkBEGm61CnhSSp0AMUWkjLWd4pRU8HNIu81VxtXgJqeK8yfO%2BldM%2Bksioh3Aj94bZP%2BFTK%2F3%2FL9fWGO5BWBN1wmpRCLvCW%2F9wWe2qdWGwuL3uK42L1WgxYLvmSO982yCU2MMesoXMipln1a7hw2Oi2q7tvDvD2fW6cytqYFoOnMFqYxkMofjEiPU%2Fy9ELVdsMeHqV1U%2FDl485ZqgYRpPiV1Lkgqel6SVra1X9Wc6%2FOyQ3zo2UJTejSwtHKA7N0XkZYapdSeX7IyaL0qA3BvsyrgKDmv1O%2Beg9FKr9DPpljDKws7JBjqkATDVRqcIT3zdt4%2FBjWDwkF0W2uZ7lootdbLnqUuqKnDe9J9%2Fyb0%2FlIUpCbB0DWCoPp%2BTPmz5Vvm%2B4JJHAt7LS%2B%2BP78wEH8nN%2B%2BpBroR2xrCbfG0%2FPUpTKhDGnrmHErJmeJWAxVArBO0PVaKuUgcw3jmba9ecWtkvPiBGCz8MUnMtqLvNgs7x2qLZv5glVLSckyXklkOLg3qST2pjET1cEKo8emh%2B&X-Amz-Signature=cbd3b01752524b4ac279dba9aa55d6a61de0f4f146ea56c2e9ec7f2a1fc29ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MSFLZOQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaQLQQGaYBXOm1DnCUL%2FT5%2FO1HSueA1ISQjiGhQaLxRQIhALZlAqc0qUzacwgOrJWz2hqXfjy2oI7IY5gorLchNw%2FQKv8DCGwQABoMNjM3NDIzMTgzODA1IgydFZjaMSMRdiRi8wAq3AONU%2B%2FnDLgwBUrEMg8WlpJ92cjQjUSAPstCz5UzIOrvp2wL8rcivwFnE11pq8BR6gw%2F7GY8sGLkJUrPBgN74hvhOIq9QEmfVaDwOSj3FoVEzWQY%2FbCarCUiMulV1UuTYFyF1nluZs2ZKXQTWw%2FiIVj3F4Py3VszunWCrWLV1Y5fIKX6LTCs44D7JJjfrkMN0sVWAllhkxFOoOi%2BGNc%2FrCewdKuW8DW%2F77LFx%2FbRz7OSE6qVr2UDM4ef%2Bsu8KPg6qTYKh8zA7xsrIX7QZsIuOkPEvGcbSF4AELqLc0tTWQ6ECvENKSqSpmwXUDKe%2B1WbY8QdGD4Jwvxub2nAiHMUGkBEGm61CnhSSp0AMUWkjLWd4pRU8HNIu81VxtXgJqeK8yfO%2BldM%2Bksioh3Aj94bZP%2BFTK%2F3%2FL9fWGO5BWBN1wmpRCLvCW%2F9wWe2qdWGwuL3uK42L1WgxYLvmSO982yCU2MMesoXMipln1a7hw2Oi2q7tvDvD2fW6cytqYFoOnMFqYxkMofjEiPU%2Fy9ELVdsMeHqV1U%2FDl485ZqgYRpPiV1Lkgqel6SVra1X9Wc6%2FOyQ3zo2UJTejSwtHKA7N0XkZYapdSeX7IyaL0qA3BvsyrgKDmv1O%2Beg9FKr9DPpljDKws7JBjqkATDVRqcIT3zdt4%2FBjWDwkF0W2uZ7lootdbLnqUuqKnDe9J9%2Fyb0%2FlIUpCbB0DWCoPp%2BTPmz5Vvm%2B4JJHAt7LS%2B%2BP78wEH8nN%2B%2BpBroR2xrCbfG0%2FPUpTKhDGnrmHErJmeJWAxVArBO0PVaKuUgcw3jmba9ecWtkvPiBGCz8MUnMtqLvNgs7x2qLZv5glVLSckyXklkOLg3qST2pjET1cEKo8emh%2B&X-Amz-Signature=5e63d72cd0f86a2c5a30876cef8e9659e5bab04efd781a3619caca0b75b69e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

