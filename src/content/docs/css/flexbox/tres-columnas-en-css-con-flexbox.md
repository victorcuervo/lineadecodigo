---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZNP4KL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2juIpXDE9c8eSxi7lx8GgG0NWminv0hJTKRZeyWmtzwIgbtfwX4WFYpLc46K48wJ8723etWuglcV5j3pUgVOOyTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdKcDJ5ORa4SQHWVircA%2Bc1ba6xQi5SndDNAr7BGCqPr5CA5LvobrBcq82NHK4nCMwGkMc5kj%2F2CuK9FkZsiLIXJQs%2Fwt%2BvLgSJYd1j9Vylwn36CPHzsoslPFmUSVQplZwEkhhuTmXkDaMTCpR4W6rYs5trElFsAqfPxd9LqjVtWFQJ5BCUu%2BDYQFTjdVOYuRDBWrOV4cVWdCx%2BUARr7bt0TuEZnT%2FPAO8mGgM5wc%2BGuMhFAbRTeIJkq88dFMKjqg2Nba5zC6FSLR1sMPqQ69bYscm1oUjXL6w4wGWGE21zYv2a5I7%2FltAa37mgxhzvvcq4HqtNDwXEXE%2FaxgtYGXlQqH0QtYJQop5g7kOdTKmSX2LnatfLnMSRe5LzGnrlFHv6dYxz3RiDQxi8WRE4WT2zh8pCqIlFztb3Vw5beSy6Rw1dCpW3q%2FWkMYkWOTaS0q43o0dj8TVAfAFOlyRayiwYGxzROhco4hcq%2BrnFhcHy6hNOWKAI%2Bl9y4iu241KiwiixmIy6GrsVet9Zokq7mlP5Mi9xO0qhvSjhJg3b4iUo1EVE1n5uUsDGWowuL0QTafc9CGBhUHpuDGrBbWGl%2F13o0%2BahDl5Mq%2B7DxwwC7yA5%2BlV00o1IyGIsCQ28tcqYZ2psCw%2BBLTerGoY1MP6a1ckGOqUBCJpTl7tLv1LVOfbizgSoMb3pkoPJA39Ny8Z2b0pXVeyNYAciFuAKcONGflDrRZxHSU9ovB68h30a23Er3tdnLAUYZDv48DV3j3DERsW9T90suYsM6z3jyedY1IKr%2B6kYhCXuZfMXsCp2QG4%2FfadOD%2FrktYFJZhsv5UIPt1ZHvwasCFego4atqJ2C%2BiFvVuajK7du5l6DI8x3pcvuqN%2BsRXbLFySr&X-Amz-Signature=92f85d7749a2b75e385129e687d68de3677011daa266012c9749c5544a70c9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZNP4KL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2juIpXDE9c8eSxi7lx8GgG0NWminv0hJTKRZeyWmtzwIgbtfwX4WFYpLc46K48wJ8723etWuglcV5j3pUgVOOyTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdKcDJ5ORa4SQHWVircA%2Bc1ba6xQi5SndDNAr7BGCqPr5CA5LvobrBcq82NHK4nCMwGkMc5kj%2F2CuK9FkZsiLIXJQs%2Fwt%2BvLgSJYd1j9Vylwn36CPHzsoslPFmUSVQplZwEkhhuTmXkDaMTCpR4W6rYs5trElFsAqfPxd9LqjVtWFQJ5BCUu%2BDYQFTjdVOYuRDBWrOV4cVWdCx%2BUARr7bt0TuEZnT%2FPAO8mGgM5wc%2BGuMhFAbRTeIJkq88dFMKjqg2Nba5zC6FSLR1sMPqQ69bYscm1oUjXL6w4wGWGE21zYv2a5I7%2FltAa37mgxhzvvcq4HqtNDwXEXE%2FaxgtYGXlQqH0QtYJQop5g7kOdTKmSX2LnatfLnMSRe5LzGnrlFHv6dYxz3RiDQxi8WRE4WT2zh8pCqIlFztb3Vw5beSy6Rw1dCpW3q%2FWkMYkWOTaS0q43o0dj8TVAfAFOlyRayiwYGxzROhco4hcq%2BrnFhcHy6hNOWKAI%2Bl9y4iu241KiwiixmIy6GrsVet9Zokq7mlP5Mi9xO0qhvSjhJg3b4iUo1EVE1n5uUsDGWowuL0QTafc9CGBhUHpuDGrBbWGl%2F13o0%2BahDl5Mq%2B7DxwwC7yA5%2BlV00o1IyGIsCQ28tcqYZ2psCw%2BBLTerGoY1MP6a1ckGOqUBCJpTl7tLv1LVOfbizgSoMb3pkoPJA39Ny8Z2b0pXVeyNYAciFuAKcONGflDrRZxHSU9ovB68h30a23Er3tdnLAUYZDv48DV3j3DERsW9T90suYsM6z3jyedY1IKr%2B6kYhCXuZfMXsCp2QG4%2FfadOD%2FrktYFJZhsv5UIPt1ZHvwasCFego4atqJ2C%2BiFvVuajK7du5l6DI8x3pcvuqN%2BsRXbLFySr&X-Amz-Signature=0f578219a3a93f23acd7ddedab1b77b0ecf061e4eae994cc8e29682f09bb4b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

