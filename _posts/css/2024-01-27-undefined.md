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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELESVEN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBjVAD%2FIwdElQ7ZY4vfHRm0geN4ZzsQljXxBVTTbGl9QAiEAlrT5dmheyD%2FmxjNVXivfVU0OSdGElTkMNh83rUdaJtkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDP6gNFQM2mPJ0WFqbSrcA0jvca8jhLUqlTZjztMsw7wY0q7YkzmSmgkMbGaLoyoRlSQ7WIqzHMHyrsGCMr6MGDhgg7k2lcOSbyok5fTtjWlKco%2F2cEgQ1W9%2FdeWRYSrKHfFhCaePQotHqiQpYrRheSac7tY0wJEx47GqBqY7BaZnBU%2BohBC4lwi%2F%2FmKwmHycCMkG8fYIoqxOEdZd%2BXMfEgJfcc9P%2FkObB1vuRuWBinwp%2FMZ4Qr%2FGWIlQccPyNz9z3LW8hTukOkWOe5%2FEc2aDfL5H%2BMD0Q5CARphHie%2FqD4081PH210%2BLsgBpp9vUS%2FGxRnrOh318eJEs0XwWn%2FoZw2bQmH3b6%2B7oaA%2BERESvbX8UOSQL9ZwvVX9xZG5RCSKXsgy08hYYcyNJeRxBu947DZPsAcxHVFiHYA2rFbWfuDCj9vIouHYChC02UHxF0PxrtQZQf%2FhXAiFq8KWVI1FX3MVhzZi0X1thR0p3%2F0P%2FAPMzmLBo6BffaeUk6BpyGDjDpyJ9ueR7fyAaEasZJ%2FNENGrV0uejU2c%2Bn1Ttjqq%2Brxz%2FSW04Zmk6boVD3Av5F1pjjKJPiqu5ODLVPJGIk1TCISnJiZvOFZh6vYw30iDu13fYFvu74OAmC72bEqYidtVJJBmt%2FAuEa3R2gU%2B2MMXNwMkGOqUBnleieDU4WWAMcGvNI7pBu3ogTRPyHSZt2godZq99I%2BrA1dsBTp3d1bl7h%2BkcNCqG5zkQdQ%2BUxjaBhx4AfcV6jLGuX%2FyHu0zcBmsGamF%2B1KNiMlH7iRtUycrulxfl8B6xiGJp%2FagwGLh0qiy35wsw%2BJNB7KcBWvK1HTDHd9il%2BbJ%2BHR2hOzjNZzIlsgBi2KEQeHDcEPz4QOLDWtKDzhvQNZaCLSHj&X-Amz-Signature=4ac174ccc4a46e9d384aaa23e4805135a6f47d116a9b40b593574b2f2ad34361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELESVEN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBjVAD%2FIwdElQ7ZY4vfHRm0geN4ZzsQljXxBVTTbGl9QAiEAlrT5dmheyD%2FmxjNVXivfVU0OSdGElTkMNh83rUdaJtkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDP6gNFQM2mPJ0WFqbSrcA0jvca8jhLUqlTZjztMsw7wY0q7YkzmSmgkMbGaLoyoRlSQ7WIqzHMHyrsGCMr6MGDhgg7k2lcOSbyok5fTtjWlKco%2F2cEgQ1W9%2FdeWRYSrKHfFhCaePQotHqiQpYrRheSac7tY0wJEx47GqBqY7BaZnBU%2BohBC4lwi%2F%2FmKwmHycCMkG8fYIoqxOEdZd%2BXMfEgJfcc9P%2FkObB1vuRuWBinwp%2FMZ4Qr%2FGWIlQccPyNz9z3LW8hTukOkWOe5%2FEc2aDfL5H%2BMD0Q5CARphHie%2FqD4081PH210%2BLsgBpp9vUS%2FGxRnrOh318eJEs0XwWn%2FoZw2bQmH3b6%2B7oaA%2BERESvbX8UOSQL9ZwvVX9xZG5RCSKXsgy08hYYcyNJeRxBu947DZPsAcxHVFiHYA2rFbWfuDCj9vIouHYChC02UHxF0PxrtQZQf%2FhXAiFq8KWVI1FX3MVhzZi0X1thR0p3%2F0P%2FAPMzmLBo6BffaeUk6BpyGDjDpyJ9ueR7fyAaEasZJ%2FNENGrV0uejU2c%2Bn1Ttjqq%2Brxz%2FSW04Zmk6boVD3Av5F1pjjKJPiqu5ODLVPJGIk1TCISnJiZvOFZh6vYw30iDu13fYFvu74OAmC72bEqYidtVJJBmt%2FAuEa3R2gU%2B2MMXNwMkGOqUBnleieDU4WWAMcGvNI7pBu3ogTRPyHSZt2godZq99I%2BrA1dsBTp3d1bl7h%2BkcNCqG5zkQdQ%2BUxjaBhx4AfcV6jLGuX%2FyHu0zcBmsGamF%2B1KNiMlH7iRtUycrulxfl8B6xiGJp%2FagwGLh0qiy35wsw%2BJNB7KcBWvK1HTDHd9il%2BbJ%2BHR2hOzjNZzIlsgBi2KEQeHDcEPz4QOLDWtKDzhvQNZaCLSHj&X-Amz-Signature=8f4c6033ed5a802923ae60ebb90b8c5690905399062d26a59d89246e7446e228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

