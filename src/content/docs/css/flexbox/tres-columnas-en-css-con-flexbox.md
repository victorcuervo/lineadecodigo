---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT55IPN7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4ioWBKSsQHa1JiSq%2Bvo3ud83SS0MA75nOf3uAW4gNiAiBaBQ1TORgkyXBRce9hA93jpukLobOoJMSvYxx1fGZ%2FySqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhRnsEyN7O%2BdIlrBBKtwDSUMZSHglzQg8u7Ytx9xQzZGtn2%2F2PWmTqyj%2FiQgJDfWUYl%2FK5OMPQMGIhTRC%2BJv27XzLGL0kF6OeFMcfknRlzyrsaVFKIybUSWXLxgCiwoS5OE5VDc7MOTIagHjAIEb5E8tXn5Mgcq9TGgOg14V9gbcEKfex6uZXQBAw2Kx3evDALqRmR1BZvtJb1acTXg2v%2FuPie3M1auUSaFiKmEufczcUSwlNaeaARdDJKoQVwRB%2Fo%2FJMVeNZBCgqS%2FCBHDeZeC38B5QUsuL5cEqRpalsitkuYqsodf6HRzVvCjNQDUVKExd1n6IRE6R%2Fs2GDQSnskRQ6cGo%2FdbXxJiIDE5dI6rF2fKTVSI2lKO%2Bw79U8pd0HrVQFGn5icYdbslldD1W6XqZw%2FP%2BiMYnZZOdE2t8NsREOoJ6bpr5C6AWLElE0w9t0CLVxqModiDaM4Lh6Z3QmqVhyafCBD4JdmpSOD97MvYw7ACvT8XxZ%2Fol%2BQK0%2Byok%2FrQ8DJQEmiJOJ3cgXFL4afph5EwUkFBynTlzsD%2FgjDt09y%2FM8PggFjHCQh5HJY1HpJVsivshHOuGoRcrBscvMxEJMkbqFHddQm9hUEA255Hc0EZqBPNzBmPf%2FdvEa2Z4Sboxb3ZlFiVVVQnkwoMTfyQY6pgFfnwOFwFF%2FpN%2BwC4p7mKptkh9idsXdu%2FRp0LXBwAKokfq4S3RsScc5AnpAIhHVpDR%2FOqY0JxezKg04jq31O3NQLhWwYZmPIAWpwu2wSvblDfAuXIIaE8PNaitSJA1Ru8xOB7bLnomRu%2FDkF1ZiMwQJJvbefWGcPf0FSEI%2FXPB8Qql6vgp%2FqdNR6rdqbrx%2FMRCE1u6e21uaR7%2FDMpekvMIKrJ4dXtgP&X-Amz-Signature=dc4ef6f6fc434c725879fed61154ceb1700f6d012e009bc9f95e8eee1f3c385b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT55IPN7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4ioWBKSsQHa1JiSq%2Bvo3ud83SS0MA75nOf3uAW4gNiAiBaBQ1TORgkyXBRce9hA93jpukLobOoJMSvYxx1fGZ%2FySqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhRnsEyN7O%2BdIlrBBKtwDSUMZSHglzQg8u7Ytx9xQzZGtn2%2F2PWmTqyj%2FiQgJDfWUYl%2FK5OMPQMGIhTRC%2BJv27XzLGL0kF6OeFMcfknRlzyrsaVFKIybUSWXLxgCiwoS5OE5VDc7MOTIagHjAIEb5E8tXn5Mgcq9TGgOg14V9gbcEKfex6uZXQBAw2Kx3evDALqRmR1BZvtJb1acTXg2v%2FuPie3M1auUSaFiKmEufczcUSwlNaeaARdDJKoQVwRB%2Fo%2FJMVeNZBCgqS%2FCBHDeZeC38B5QUsuL5cEqRpalsitkuYqsodf6HRzVvCjNQDUVKExd1n6IRE6R%2Fs2GDQSnskRQ6cGo%2FdbXxJiIDE5dI6rF2fKTVSI2lKO%2Bw79U8pd0HrVQFGn5icYdbslldD1W6XqZw%2FP%2BiMYnZZOdE2t8NsREOoJ6bpr5C6AWLElE0w9t0CLVxqModiDaM4Lh6Z3QmqVhyafCBD4JdmpSOD97MvYw7ACvT8XxZ%2Fol%2BQK0%2Byok%2FrQ8DJQEmiJOJ3cgXFL4afph5EwUkFBynTlzsD%2FgjDt09y%2FM8PggFjHCQh5HJY1HpJVsivshHOuGoRcrBscvMxEJMkbqFHddQm9hUEA255Hc0EZqBPNzBmPf%2FdvEa2Z4Sboxb3ZlFiVVVQnkwoMTfyQY6pgFfnwOFwFF%2FpN%2BwC4p7mKptkh9idsXdu%2FRp0LXBwAKokfq4S3RsScc5AnpAIhHVpDR%2FOqY0JxezKg04jq31O3NQLhWwYZmPIAWpwu2wSvblDfAuXIIaE8PNaitSJA1Ru8xOB7bLnomRu%2FDkF1ZiMwQJJvbefWGcPf0FSEI%2FXPB8Qql6vgp%2FqdNR6rdqbrx%2FMRCE1u6e21uaR7%2FDMpekvMIKrJ4dXtgP&X-Amz-Signature=863f42a8102676c297de8f29a34a64d7279143ba45523b775b29bd361b3dd213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

