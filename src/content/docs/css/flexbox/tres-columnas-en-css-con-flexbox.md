---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFYCJIK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFfHVl3dKKN2FbsWpJ%2BlXDqM%2B4Rt32p%2FlVVil8DqNaTAiABqNU%2FmS84B7PD0xphlGO1joJ%2Bc5P8s1TwIu2CoqEAJyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMlB3k0m3Qo4TcZ5CLKtwDNosbvW%2FDPkDZulLpqp9DriKLf7Eo%2FDZOYuPgazS8CUJUZpM6OVeJBC44EGL9TK%2Fv58EKedQxKzeGc2zJC28rHPlJAJhZZjcE0I%2Fp%2B3w5kPexktUpGcuOaZ2jSkQFvwd9Uc0OQ5EEc%2FUU13TAac%2FOVH64UuzLADf0mCUwa40s%2BrkB9WoXgNQvomDHiJ7eu7geVvjxlwBjv2zk4TLsGrhCzj%2FpJkCXgkiU8hZTikbtYs4BUcAMyJshuRNIBe1X82WSfZEtNN%2BVcnOyUXPDDEVNSdfEqfJAH1FSbkO6NGoLk2CL6qTNusxqI%2BrTuADcck9f5LHkc3o0TBRpz02DJvjBLnGO1Orm5VfrbGt1nWKH0czw9urGFzU06XdKeRR%2ByfcqdyUnYNPVdRhiylfyivyE3L5epGRo1JMpsbV1TbiyDGNhmAiZaCBrzyX9eskFtOAdklF15QUfNw9ssK9v7kxEmtx50Om83ipnQ3ax9rgH2RenOV1PP%2F6fa%2FA%2BGTm0h1TTVv7xtdsnVEtFTqYjFMl7GXvg%2BG2Od%2B9VvChVlgzo6Zwtmw5CNympPbn8nU5CIc45w%2BbZaJ%2FABXAmTey6kIJrFEg53jzy16eudE%2FKSv2qbsD7NpSL0cuvPQfLxsowjafQyQY6pgEJJS%2FLtp46amBv%2Bakh842fr10Gg1E0ML2qWKDKvlM%2BMWDmjiDLYr8UP55SpITTzoRZAl%2Bb%2BhvgNC0HSqhlAUShmhalDPMeL0QBaQJ3QHV7TbhKF9pb7wrGzvIid2iL41Or75KnSKlX2vXcwwl8CrP6i%2FBtpC2U0K55U35MY6aJUC%2BxrKD73qwR4Kuv5KG2auGWYyq%2B%2BeTnkHm6ynJ8XqhWRHjM3D6Z&X-Amz-Signature=6d7268bab04bc7f0cf9333c871c619baac9c87129efd0434e27df5acc79c9dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFYCJIK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFfHVl3dKKN2FbsWpJ%2BlXDqM%2B4Rt32p%2FlVVil8DqNaTAiABqNU%2FmS84B7PD0xphlGO1joJ%2Bc5P8s1TwIu2CoqEAJyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMlB3k0m3Qo4TcZ5CLKtwDNosbvW%2FDPkDZulLpqp9DriKLf7Eo%2FDZOYuPgazS8CUJUZpM6OVeJBC44EGL9TK%2Fv58EKedQxKzeGc2zJC28rHPlJAJhZZjcE0I%2Fp%2B3w5kPexktUpGcuOaZ2jSkQFvwd9Uc0OQ5EEc%2FUU13TAac%2FOVH64UuzLADf0mCUwa40s%2BrkB9WoXgNQvomDHiJ7eu7geVvjxlwBjv2zk4TLsGrhCzj%2FpJkCXgkiU8hZTikbtYs4BUcAMyJshuRNIBe1X82WSfZEtNN%2BVcnOyUXPDDEVNSdfEqfJAH1FSbkO6NGoLk2CL6qTNusxqI%2BrTuADcck9f5LHkc3o0TBRpz02DJvjBLnGO1Orm5VfrbGt1nWKH0czw9urGFzU06XdKeRR%2ByfcqdyUnYNPVdRhiylfyivyE3L5epGRo1JMpsbV1TbiyDGNhmAiZaCBrzyX9eskFtOAdklF15QUfNw9ssK9v7kxEmtx50Om83ipnQ3ax9rgH2RenOV1PP%2F6fa%2FA%2BGTm0h1TTVv7xtdsnVEtFTqYjFMl7GXvg%2BG2Od%2B9VvChVlgzo6Zwtmw5CNympPbn8nU5CIc45w%2BbZaJ%2FABXAmTey6kIJrFEg53jzy16eudE%2FKSv2qbsD7NpSL0cuvPQfLxsowjafQyQY6pgEJJS%2FLtp46amBv%2Bakh842fr10Gg1E0ML2qWKDKvlM%2BMWDmjiDLYr8UP55SpITTzoRZAl%2Bb%2BhvgNC0HSqhlAUShmhalDPMeL0QBaQJ3QHV7TbhKF9pb7wrGzvIid2iL41Or75KnSKlX2vXcwwl8CrP6i%2FBtpC2U0K55U35MY6aJUC%2BxrKD73qwR4Kuv5KG2auGWYyq%2B%2BeTnkHm6ynJ8XqhWRHjM3D6Z&X-Amz-Signature=82efa74a3f7f56bce930d3381e4aaad5f499a63dbe8fa72953d4e5c4233d69c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

