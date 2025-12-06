---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652S7MIF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQyLlmP9xYiWQXEimk%2F00AAuomV4RTSaBZhj5fb3jPYAiBuw5s%2FYhwP1PQnQTQfq%2FRxXRyY9fNASIhUiP42sJK8tir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM6iUykec5i3dqDNy0KtwDPm8698xXm3xthaT%2FW0AwxBfiAl60zJ4cVOsVO2PlQWuxi%2BxNT43O58A0g1xS7FlJ4bQIQscz4dsSN035bT6sL4eocxggOGtiXrrSRH3qkcVflRv%2FUWSQ4d8AxD4I%2F4hfYlW%2FAM5ENe4x3EvKy5ceBifgyK2k3qCcjJI3%2BXej8Sd5Q2MjFZ1%2FHOWD%2FMA4TIHnv5wpRvu%2F5eAY9bfgYRzBPB22eA7NqZPlhtaZREkq%2BHa7g%2BLlnoOQOfx3DMgOjHCbxZfUzbLI79vZWp0JSrlPslQ87AmY%2FmcCWFAi4OnzLoF9y%2BeZ23R%2BiZp%2BXzuqraGDNGMT%2FfjJVZxYCrdAHpD2YAtikte5A%2BraOIFfJGzs9GrpdMBlcnO0ohR%2FJlFDYMoEV92zsaZR6fj1Gyh6Py0VS59l5J6osguKM12S8up2ctPrqwkVHwHbdLBSXR09RV3tuHY5p1A1LCdkvd2ZdI%2FUTCS6JKXFhk5AyzcTN0UN7jWpqRQoCkXhVOL9EYm%2FcgQo17aNlbp%2ByugMpDp5tEg5gcmxoJ%2FYLip2uhXi8GNXrO6A085jKTTSyI9puQsm3iVvvy5i8LWeb3JSK51Xvi%2F%2BskcAmjyYGiXMzS23ktB8%2FW6yD6PqQF24MVe2j5cwtqjRyQY6pgFzSM13eJwVnD4yL2p7ZJ9BW1ze5KLkkpVGc%2Fy2l%2FPHUFWy3F1HZzY%2B1Yx3YowRjwJCJT4TLdXCsMfCbf%2FTyc%2B%2FbJtAMp71SQAeK29%2Bdl7JtTnxVOkP4Qhi4dx8CySzN3nk5MNAOnrHt7GHzznjIoxhPoX8Y89CWs0FkCU%2Fm%2FaSI0Lplcx%2BIG9NwQDk9gM75g4AnjMh6aLp7SzC0BQOnKRYPs3yE2Ew&X-Amz-Signature=b9aa30df7bd6a90f91aed67b9aa58de26f58fd9b005b4478890b5d2f17a237ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652S7MIF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQyLlmP9xYiWQXEimk%2F00AAuomV4RTSaBZhj5fb3jPYAiBuw5s%2FYhwP1PQnQTQfq%2FRxXRyY9fNASIhUiP42sJK8tir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM6iUykec5i3dqDNy0KtwDPm8698xXm3xthaT%2FW0AwxBfiAl60zJ4cVOsVO2PlQWuxi%2BxNT43O58A0g1xS7FlJ4bQIQscz4dsSN035bT6sL4eocxggOGtiXrrSRH3qkcVflRv%2FUWSQ4d8AxD4I%2F4hfYlW%2FAM5ENe4x3EvKy5ceBifgyK2k3qCcjJI3%2BXej8Sd5Q2MjFZ1%2FHOWD%2FMA4TIHnv5wpRvu%2F5eAY9bfgYRzBPB22eA7NqZPlhtaZREkq%2BHa7g%2BLlnoOQOfx3DMgOjHCbxZfUzbLI79vZWp0JSrlPslQ87AmY%2FmcCWFAi4OnzLoF9y%2BeZ23R%2BiZp%2BXzuqraGDNGMT%2FfjJVZxYCrdAHpD2YAtikte5A%2BraOIFfJGzs9GrpdMBlcnO0ohR%2FJlFDYMoEV92zsaZR6fj1Gyh6Py0VS59l5J6osguKM12S8up2ctPrqwkVHwHbdLBSXR09RV3tuHY5p1A1LCdkvd2ZdI%2FUTCS6JKXFhk5AyzcTN0UN7jWpqRQoCkXhVOL9EYm%2FcgQo17aNlbp%2ByugMpDp5tEg5gcmxoJ%2FYLip2uhXi8GNXrO6A085jKTTSyI9puQsm3iVvvy5i8LWeb3JSK51Xvi%2F%2BskcAmjyYGiXMzS23ktB8%2FW6yD6PqQF24MVe2j5cwtqjRyQY6pgFzSM13eJwVnD4yL2p7ZJ9BW1ze5KLkkpVGc%2Fy2l%2FPHUFWy3F1HZzY%2B1Yx3YowRjwJCJT4TLdXCsMfCbf%2FTyc%2B%2FbJtAMp71SQAeK29%2Bdl7JtTnxVOkP4Qhi4dx8CySzN3nk5MNAOnrHt7GHzznjIoxhPoX8Y89CWs0FkCU%2Fm%2FaSI0Lplcx%2BIG9NwQDk9gM75g4AnjMh6aLp7SzC0BQOnKRYPs3yE2Ew&X-Amz-Signature=6b04f628b090a5afea788a10a816b9623b715e87e1c034d532d69a6dd8561d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

