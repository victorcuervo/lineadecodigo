---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZEQVG3T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChRuKbfVAU04pDqglCWam6bACtySe452IOcNuPhwk54AiEA41fv4TWFJr7ROoFK8RQVFA6ACm31wODZ9R937yOTIFwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLF6vPDGbkSHd68byrcA5nN784B7pKQ7IWXdQr8MD68ei6V7JkeQz9F640Sb3nl1Gti%2FYn7NVmi8P3OE0GdqkHXrOPqjq%2BC1IC6DRh9TSVpaaiZVLE5L%2B4o74v0%2FT8h%2FjKuxyc%2BMEpnKIGkzWjfBroLgxcxC2yPZxjyI7q1lD4A%2F8cX%2Fb8UK1v7vwVQ6BvXkHB4EhA1ooB%2F90YSvwUZb5POH51l6hvX1cQim00iJiy4iieQbWMseB6AtrtXVMI5qNcWhvpPha6vREtTOsNh73%2BqbYNWx%2F0pcuKFPMMLST%2FdAwngX59B8TY4Gn%2BtFCozfEsnIWYiqKTTQX9D2b9x4UISktDGtg%2BmQ5Vub2keGC9iLGx2shStB9COmE3AnEcTI2V12W%2BHFcPG%2BBVjofzjF7BWtXja38aHWzct%2BZrdqDY5MoBZuI5JfbVgHXFcPLZrlKF5xyOjytctfaU4cQ6bY4CAD5oRN4LQM9rGhgYHJeCmLsedY6Z3c9UyICrHzT7oZIrag%2FrX2e5OSeqHM6L8DBwqfh8asxRW%2BbESgARLXpARb6mC67qeRjfTgvJUdhjU1ps6uBqIQXEzR3bFW6shfyfctbl7oHY52GixZ2ER7xhO3nN6tC4AwpfDGf%2FtSRJklEEvd7hncrCoxpBTMJWH3MkGOqUB7jdHfi3zW8ZNAMWVfzjueLk3fgfUs5FpLaiqCIh%2BlW68opa26aTVW1%2BnIbE%2Fcoyotiu2Qvg%2BhrlZK29asyyNTjUtovLFbGb5jhq%2BQdQND5H8cXHONNzhXOrS%2Beh5Y4l6DrmZSezFNQO0vozhq%2Bldtwv4lyvrHGw4Ss2Skt2fZVdh4oCGYPpvV2KcMarhh6TgKgEhjzo6J%2BVWCKBXcD9frY5AvoW0&X-Amz-Signature=c7959cf2f4fdb5f920f7076c5229188c1a4fb629fa5506aa41c9345f1dc8bdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZEQVG3T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChRuKbfVAU04pDqglCWam6bACtySe452IOcNuPhwk54AiEA41fv4TWFJr7ROoFK8RQVFA6ACm31wODZ9R937yOTIFwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLF6vPDGbkSHd68byrcA5nN784B7pKQ7IWXdQr8MD68ei6V7JkeQz9F640Sb3nl1Gti%2FYn7NVmi8P3OE0GdqkHXrOPqjq%2BC1IC6DRh9TSVpaaiZVLE5L%2B4o74v0%2FT8h%2FjKuxyc%2BMEpnKIGkzWjfBroLgxcxC2yPZxjyI7q1lD4A%2F8cX%2Fb8UK1v7vwVQ6BvXkHB4EhA1ooB%2F90YSvwUZb5POH51l6hvX1cQim00iJiy4iieQbWMseB6AtrtXVMI5qNcWhvpPha6vREtTOsNh73%2BqbYNWx%2F0pcuKFPMMLST%2FdAwngX59B8TY4Gn%2BtFCozfEsnIWYiqKTTQX9D2b9x4UISktDGtg%2BmQ5Vub2keGC9iLGx2shStB9COmE3AnEcTI2V12W%2BHFcPG%2BBVjofzjF7BWtXja38aHWzct%2BZrdqDY5MoBZuI5JfbVgHXFcPLZrlKF5xyOjytctfaU4cQ6bY4CAD5oRN4LQM9rGhgYHJeCmLsedY6Z3c9UyICrHzT7oZIrag%2FrX2e5OSeqHM6L8DBwqfh8asxRW%2BbESgARLXpARb6mC67qeRjfTgvJUdhjU1ps6uBqIQXEzR3bFW6shfyfctbl7oHY52GixZ2ER7xhO3nN6tC4AwpfDGf%2FtSRJklEEvd7hncrCoxpBTMJWH3MkGOqUB7jdHfi3zW8ZNAMWVfzjueLk3fgfUs5FpLaiqCIh%2BlW68opa26aTVW1%2BnIbE%2Fcoyotiu2Qvg%2BhrlZK29asyyNTjUtovLFbGb5jhq%2BQdQND5H8cXHONNzhXOrS%2Beh5Y4l6DrmZSezFNQO0vozhq%2Bldtwv4lyvrHGw4Ss2Skt2fZVdh4oCGYPpvV2KcMarhh6TgKgEhjzo6J%2BVWCKBXcD9frY5AvoW0&X-Amz-Signature=4bcafd7ed7234e1f9dda49fab71292a3364ce40e6b3a9b676e1ee0168116faf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

