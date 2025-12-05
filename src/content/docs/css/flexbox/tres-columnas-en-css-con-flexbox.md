---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7J63G4N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwpsZ4aSYFa8w%2FrNz7erbI0b1Bq35lJWgzLslxzSj7YAiB6B2e4u4aUdaZuz2ySy1fhIXG%2FQ84xd1y3glAPd328zSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMdfZ9SlmpQjhR9x3MKtwDeP%2B6U4UBNHlHR9xPOnUnA3GbvAhXFDr6QSUZr0AnUhs%2B3ffV8mPtzSiwolnFc3HWD7P8PzC18vE8ZXAhj2ixiduuNCFKnFeqpsAep6xNilT0fANheH6Qf9pqFjwbKqFqjnvx0dbjIi%2FcBERnbnWowINYQw45150bc%2Fq6%2F8oVUFizgM%2ByWFg%2BuGHpgAxwwI4hbTEJqqp1fgmH%2BLGWaM6KFzW5eCDZcwws9CEEBqntAuc%2FhBjD749wPGDsxWvV1KaE6PfHIuGP7IOyUDgua4ycLeGjhJZURB2zyTL5F3iOr2%2BYxBZjh%2B5G4eH3ZggjHopV39SkGlL3z1WM07sEvvHDuVt04hnLdLpzzeZ5FHvq6TYX9AerRbpWDRDRZHms4MUdDKyEVcvryFDHlGJMz1GweTSFqYH6SEdd4%2B4VxRUjlQwpF86Me9WHBJAJKUTMQKLkSjysmDzyZ9TQHyp9jaYQpE3yo%2Bo5iCIcTmgcamXcmtNndbwJXU5LdsXoiJXuW3coJxudDqDjaXij%2BWfK3SozRymS9ApEDhgSCULeQ%2FpyhyMc7%2F2OBfhUQcfUdtvpn7i4hH%2BVY6kBr2FtxAJKNnz3H86oDlawrHDA%2FkHIIiHtQulwNyOmezQCdEg0Md4wg4zIyQY6pgEjUxRd5dnU7jiqm5n4hVzt3Q1AMMPY80oj%2FMGqt8q%2F3f0iPhvqurx6yDTExSoez3jKdnbSTq6Mq6Mwv5w0ZiGrOvjBTqJ1%2BdguHxMl1xnk4Sx9kygRlrU1wG3OlQgKVBNqtoB12eb%2BQxxkAUG26My9ygwxJCxh%2Bur7L1FDd%2FQLowfKAYLO2iIZk3FWKJHzPqSKBc2kSTvTxDRsCWyuEAUl%2FkAOzUrx&X-Amz-Signature=0fb90bae40058f4e2d52544ed2f319f20bc3c15f5ec684ab60fa1659c75cc8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7J63G4N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwpsZ4aSYFa8w%2FrNz7erbI0b1Bq35lJWgzLslxzSj7YAiB6B2e4u4aUdaZuz2ySy1fhIXG%2FQ84xd1y3glAPd328zSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMdfZ9SlmpQjhR9x3MKtwDeP%2B6U4UBNHlHR9xPOnUnA3GbvAhXFDr6QSUZr0AnUhs%2B3ffV8mPtzSiwolnFc3HWD7P8PzC18vE8ZXAhj2ixiduuNCFKnFeqpsAep6xNilT0fANheH6Qf9pqFjwbKqFqjnvx0dbjIi%2FcBERnbnWowINYQw45150bc%2Fq6%2F8oVUFizgM%2ByWFg%2BuGHpgAxwwI4hbTEJqqp1fgmH%2BLGWaM6KFzW5eCDZcwws9CEEBqntAuc%2FhBjD749wPGDsxWvV1KaE6PfHIuGP7IOyUDgua4ycLeGjhJZURB2zyTL5F3iOr2%2BYxBZjh%2B5G4eH3ZggjHopV39SkGlL3z1WM07sEvvHDuVt04hnLdLpzzeZ5FHvq6TYX9AerRbpWDRDRZHms4MUdDKyEVcvryFDHlGJMz1GweTSFqYH6SEdd4%2B4VxRUjlQwpF86Me9WHBJAJKUTMQKLkSjysmDzyZ9TQHyp9jaYQpE3yo%2Bo5iCIcTmgcamXcmtNndbwJXU5LdsXoiJXuW3coJxudDqDjaXij%2BWfK3SozRymS9ApEDhgSCULeQ%2FpyhyMc7%2F2OBfhUQcfUdtvpn7i4hH%2BVY6kBr2FtxAJKNnz3H86oDlawrHDA%2FkHIIiHtQulwNyOmezQCdEg0Md4wg4zIyQY6pgEjUxRd5dnU7jiqm5n4hVzt3Q1AMMPY80oj%2FMGqt8q%2F3f0iPhvqurx6yDTExSoez3jKdnbSTq6Mq6Mwv5w0ZiGrOvjBTqJ1%2BdguHxMl1xnk4Sx9kygRlrU1wG3OlQgKVBNqtoB12eb%2BQxxkAUG26My9ygwxJCxh%2Bur7L1FDd%2FQLowfKAYLO2iIZk3FWKJHzPqSKBc2kSTvTxDRsCWyuEAUl%2FkAOzUrx&X-Amz-Signature=a57826a91cc20f150fd0a1bb56f119518090d8d7175a47696e6b69380075ea14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

