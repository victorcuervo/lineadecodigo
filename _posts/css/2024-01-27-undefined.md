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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRLJTVW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEaUzqm8hyflVDCliNykaQ3KRc%2FCzONhOwVRMIENxJnnAiEAxD5mLXwupHnNKdjv4NzMoQeiQmH%2FaMDf%2FM7O7dCzzJoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCncQ0ayYIe55zD9bCrcA4bByt7PMTOroo2PLRkGWYtMX%2BpzJvcDyYUqp96QzfN%2BI4PiVS7vtaqfEjENYiYYjbPUAU9afWKT8qsP2QuqgjUmZ%2FNVBRbGzRmVgXoVFeoOE4AG0j3LWyt2kqZL2pteZyanyI5Sw8ZrZEpkQO%2BvHGVJ6BdEUqEXHvdaT%2F6459cUgq2gJlwlInQerZfQb6h0RelKzZzhQET7bhaz1F%2F3KvzFgcGrQqbTYsUnpyqicrb5h1HL%2BHcQiNYEaXXEpFSP8Aced%2BvB9EY2FGgagFsPQDbI91l6FJnDh0Dmlk0OJlOq1KKWrddET6mNGFmOWPe6kQk0mj1X1kqGeXE0XlWEz5EOLAKwcA9AMFY7Aoe9JqC01KhxOhfY4fhhMtfkQGwtxc3AQJvopYJzu0uUxlryLWP9Cn1bZtPOm3jYWBh05hZ1HC83yzkzYGStXw4HiGwqB9ig5bQKDQLtK4F80I2kX2YqseJbKQmRvV0t3skBWFl11G7WgK61%2B6GunjWiHUnFxZDxVh76xybUNAJr8S6hJZ2AR8kqWukYoVPCHoKyIQjuV2Ks1CYe0BKvE9UAxaPS0%2F%2Bi2iPLWqLISjqk0VJkshOfAdDUF2nz%2BS7dRusR3hmV018gY0On%2BlkCCBOaMOaVvskGOqUB2nCiQLnZFJnnt1fkpQBZr6Arp5wNNlLXUGfpaOU6kRWNsAjmdIp2yIfzXu%2B0TAWD3bvzNLIPSEDx%2Bz3tRrQej8Ym3W8WFCFgLBFLpmJT%2BlL6%2BHFDizgOmijJEE330CT7ySVTQNnopcXnEe%2BC0U2taTyvRS5YOzbWPwOmDya6T6j0%2BjikbiyZ8Q7FyXWEpu0%2BuQd%2F8oqPy2U%2FZICGVReBSWyLuzZ%2B&X-Amz-Signature=0bfd5b88e77b4730837983b19bb4cd16c83209f03f20597eaac26d2f272b978a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRLJTVW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEaUzqm8hyflVDCliNykaQ3KRc%2FCzONhOwVRMIENxJnnAiEAxD5mLXwupHnNKdjv4NzMoQeiQmH%2FaMDf%2FM7O7dCzzJoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCncQ0ayYIe55zD9bCrcA4bByt7PMTOroo2PLRkGWYtMX%2BpzJvcDyYUqp96QzfN%2BI4PiVS7vtaqfEjENYiYYjbPUAU9afWKT8qsP2QuqgjUmZ%2FNVBRbGzRmVgXoVFeoOE4AG0j3LWyt2kqZL2pteZyanyI5Sw8ZrZEpkQO%2BvHGVJ6BdEUqEXHvdaT%2F6459cUgq2gJlwlInQerZfQb6h0RelKzZzhQET7bhaz1F%2F3KvzFgcGrQqbTYsUnpyqicrb5h1HL%2BHcQiNYEaXXEpFSP8Aced%2BvB9EY2FGgagFsPQDbI91l6FJnDh0Dmlk0OJlOq1KKWrddET6mNGFmOWPe6kQk0mj1X1kqGeXE0XlWEz5EOLAKwcA9AMFY7Aoe9JqC01KhxOhfY4fhhMtfkQGwtxc3AQJvopYJzu0uUxlryLWP9Cn1bZtPOm3jYWBh05hZ1HC83yzkzYGStXw4HiGwqB9ig5bQKDQLtK4F80I2kX2YqseJbKQmRvV0t3skBWFl11G7WgK61%2B6GunjWiHUnFxZDxVh76xybUNAJr8S6hJZ2AR8kqWukYoVPCHoKyIQjuV2Ks1CYe0BKvE9UAxaPS0%2F%2Bi2iPLWqLISjqk0VJkshOfAdDUF2nz%2BS7dRusR3hmV018gY0On%2BlkCCBOaMOaVvskGOqUB2nCiQLnZFJnnt1fkpQBZr6Arp5wNNlLXUGfpaOU6kRWNsAjmdIp2yIfzXu%2B0TAWD3bvzNLIPSEDx%2Bz3tRrQej8Ym3W8WFCFgLBFLpmJT%2BlL6%2BHFDizgOmijJEE330CT7ySVTQNnopcXnEe%2BC0U2taTyvRS5YOzbWPwOmDya6T6j0%2BjikbiyZ8Q7FyXWEpu0%2BuQd%2F8oqPy2U%2FZICGVReBSWyLuzZ%2B&X-Amz-Signature=88f329bcd15015668ba9e8ac1ba9e9121bfe2e73029583599534a327eebda592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

