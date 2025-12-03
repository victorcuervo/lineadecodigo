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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQQORL4I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEj982YsF7xRQh2Ooj5Wh0hUG5jljKa%2B043nhUxRsa%2BrAiBpVQxOZtyKnhmL9kssiZGAB99Wddrzk%2FfRL4ojzJbV9Cr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMhQsoRSbFWwoeW262KtwD3olxS1DnQOikAa%2FVgslWwo1egzC7i5uJxYbmfei8e6KZHDe2FCggy7ZLN93GiQGXpdkquRocyg7%2FJo6R0J9rFC5KQaXROciQ5efbvaq5PN8ptO8x7otfjKmPBRhkjA0dCiXTfOiiJWEmVehOBPLUkqvyKIOMLFiqY9hrH411R%2BhxHy1IpEbzUo%2FPmcXaDLm35GTxdTkQW%2FsGWWzn0rMMq4uQurZcUBzGde6s%2FZwq9ZTsW1IZgaq%2BnGkrACrZSDK6rbAC31zRtfMUfMKgED3N9L%2FRaAlUM9pwwGmsTVhtuNl5tlEN%2Ffg62TiiNmYsBq0xXgpru6HepPGmDOYNQ1iw9fFaXNmmnVncaAkKuU46CoA5EH7PIzRDtR0u3vQ3vNDD8757imxW27xKsXP26OsQwNadKqA2EZyWoGFyyGMVzlXgSP2ac18wPLU9VBWX4cHXBvj0NJcRtzwz9ftJQrm7PdDshA4pYBi8aG9un2xQSjkk7YQxivq8Llem0Du9LL1lt7RwXRbuVXGku7FkYUQbu82zIQatzVmawN8kBzFN985YY0pth912eD0l4MM8u2BRXYrwX1VJ83qE5PvjrFbq%2FG%2F1YVV%2BnkT%2FrfrMBMp5huO%2FlGW1jJlHP10Bxp8wq6bByQY6pgHXSyC1gyghYnPtRmxj1Gvnyzg6RtPyrR6gg8%2F6EKK1%2F13UXTI6o4tDJPOoQCSoHTXPwyMwac0eiqotSZuAKz1wI8mdNmz1luMhOBoxeKuiy9ANKc0s%2FDDKYOPO1V3YfrMT6V3NtKuvHG6B%2BVdtVuBZDE9AZbdd0X8kGuhnxARLulCIDiic3C1gXYIVVqqLvpwlv7wtYVcebFHdUG92QPhh%2BHyhlt0u&X-Amz-Signature=2e75b221e331e4ace0260f143ce9ec571c31eb75fb7ee7430f33cf7d2025edd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQQORL4I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEj982YsF7xRQh2Ooj5Wh0hUG5jljKa%2B043nhUxRsa%2BrAiBpVQxOZtyKnhmL9kssiZGAB99Wddrzk%2FfRL4ojzJbV9Cr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMhQsoRSbFWwoeW262KtwD3olxS1DnQOikAa%2FVgslWwo1egzC7i5uJxYbmfei8e6KZHDe2FCggy7ZLN93GiQGXpdkquRocyg7%2FJo6R0J9rFC5KQaXROciQ5efbvaq5PN8ptO8x7otfjKmPBRhkjA0dCiXTfOiiJWEmVehOBPLUkqvyKIOMLFiqY9hrH411R%2BhxHy1IpEbzUo%2FPmcXaDLm35GTxdTkQW%2FsGWWzn0rMMq4uQurZcUBzGde6s%2FZwq9ZTsW1IZgaq%2BnGkrACrZSDK6rbAC31zRtfMUfMKgED3N9L%2FRaAlUM9pwwGmsTVhtuNl5tlEN%2Ffg62TiiNmYsBq0xXgpru6HepPGmDOYNQ1iw9fFaXNmmnVncaAkKuU46CoA5EH7PIzRDtR0u3vQ3vNDD8757imxW27xKsXP26OsQwNadKqA2EZyWoGFyyGMVzlXgSP2ac18wPLU9VBWX4cHXBvj0NJcRtzwz9ftJQrm7PdDshA4pYBi8aG9un2xQSjkk7YQxivq8Llem0Du9LL1lt7RwXRbuVXGku7FkYUQbu82zIQatzVmawN8kBzFN985YY0pth912eD0l4MM8u2BRXYrwX1VJ83qE5PvjrFbq%2FG%2F1YVV%2BnkT%2FrfrMBMp5huO%2FlGW1jJlHP10Bxp8wq6bByQY6pgHXSyC1gyghYnPtRmxj1Gvnyzg6RtPyrR6gg8%2F6EKK1%2F13UXTI6o4tDJPOoQCSoHTXPwyMwac0eiqotSZuAKz1wI8mdNmz1luMhOBoxeKuiy9ANKc0s%2FDDKYOPO1V3YfrMT6V3NtKuvHG6B%2BVdtVuBZDE9AZbdd0X8kGuhnxARLulCIDiic3C1gXYIVVqqLvpwlv7wtYVcebFHdUG92QPhh%2BHyhlt0u&X-Amz-Signature=d69a1275054bf323345e84d5bbcbb62e157a79d3223f47cd8bce38d5db491b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

