---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYSCH6Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQa7NPtSf4FLgI9UtQjC72s9xuKY0eX1yx8Wna8NEcrAiEAiKZy7cTP9le%2FQ6NCbnM5kL%2FbDB2p%2Ff0qJbNWKsSCm6Aq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLLTMkUkgKPqHr8BjSrcA9BQ4XA62JOaaSbUwh89eGP7ucDft8D6TuHcSiyPkBqF4RTou2o64Ug8nJDleZ88pGE%2FbtjiBzzrWcV6Zp8tstkwGd9QVbYzFpe%2BY8XX7Ze%2By1L3feZ29WM9o0FHOrJkTtc%2FSIekco2QSpNUUHd4MPd0El8VEria7kgqn3DW5B55%2Fto5QuyBRhyehkSXr9iIpFRW49Puo8sTQLCqaYdDv2tyyM%2B8XoJIka15hI1I%2BkM44aia1ezL6pFhZ215vDkYYzNDCok1QbSb0kkAhFYEscoRe6IyXYx922ZrKmM6pBENZiaYUXfh4YoLUIHfmOVHN6cfTSH7bXHWLNe5BRlrJSLQ%2BssXCStEUk1wnocRTcBQjzE1v%2BroTan%2FDH2hmkFC7uDkXPNsxPNh1q8iA2RqFDquX9BQjsSA9eqCii6YVn698KNKtXKHq6IJP2mepKuOyVwYfLvc9uOswnRFtipbWtRDQYsXrxndKPC3EQJV6GYJYqP%2FcFn1yGtUa9iZOG13XYGeYBMZufOf6791VQlRHJWV4eUz6p4bRoQi%2BR4BWvVwpwEhPHSe8x5qBW4Msxyd%2FVkDmiVz7PXRT0b9LdFMxSxOOL2r2ge6wgTKypw0yomxLv2rAsN2RPZWB%2BffMJT4y8kGOqUBQpdiV6%2FPhKwSYXWfxnPW9fU7WGe5bSaVSWkYahKBGy0%2FF6e1MdLf6ZIw0FbhZqcUrhYMn24ou2TFz8KUUV4BmqMoV58kZx1P8L85XcwQMuzXMu6etc%2BMRGxwfWR8SiBbW%2FEnnYSTosq3lkcndK3dcWXmJw7MO8tYYGCROz8rVL0NymBIzg%2Bt5EmEhcwgjFVfoejF2tlC7XX%2FZh3WPVZrvTF6H4nL&X-Amz-Signature=638a74f69d826c0f8dedc6c3be307b7d107d23fa003dceee28630e8c08807378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYSCH6Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQa7NPtSf4FLgI9UtQjC72s9xuKY0eX1yx8Wna8NEcrAiEAiKZy7cTP9le%2FQ6NCbnM5kL%2FbDB2p%2Ff0qJbNWKsSCm6Aq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLLTMkUkgKPqHr8BjSrcA9BQ4XA62JOaaSbUwh89eGP7ucDft8D6TuHcSiyPkBqF4RTou2o64Ug8nJDleZ88pGE%2FbtjiBzzrWcV6Zp8tstkwGd9QVbYzFpe%2BY8XX7Ze%2By1L3feZ29WM9o0FHOrJkTtc%2FSIekco2QSpNUUHd4MPd0El8VEria7kgqn3DW5B55%2Fto5QuyBRhyehkSXr9iIpFRW49Puo8sTQLCqaYdDv2tyyM%2B8XoJIka15hI1I%2BkM44aia1ezL6pFhZ215vDkYYzNDCok1QbSb0kkAhFYEscoRe6IyXYx922ZrKmM6pBENZiaYUXfh4YoLUIHfmOVHN6cfTSH7bXHWLNe5BRlrJSLQ%2BssXCStEUk1wnocRTcBQjzE1v%2BroTan%2FDH2hmkFC7uDkXPNsxPNh1q8iA2RqFDquX9BQjsSA9eqCii6YVn698KNKtXKHq6IJP2mepKuOyVwYfLvc9uOswnRFtipbWtRDQYsXrxndKPC3EQJV6GYJYqP%2FcFn1yGtUa9iZOG13XYGeYBMZufOf6791VQlRHJWV4eUz6p4bRoQi%2BR4BWvVwpwEhPHSe8x5qBW4Msxyd%2FVkDmiVz7PXRT0b9LdFMxSxOOL2r2ge6wgTKypw0yomxLv2rAsN2RPZWB%2BffMJT4y8kGOqUBQpdiV6%2FPhKwSYXWfxnPW9fU7WGe5bSaVSWkYahKBGy0%2FF6e1MdLf6ZIw0FbhZqcUrhYMn24ou2TFz8KUUV4BmqMoV58kZx1P8L85XcwQMuzXMu6etc%2BMRGxwfWR8SiBbW%2FEnnYSTosq3lkcndK3dcWXmJw7MO8tYYGCROz8rVL0NymBIzg%2Bt5EmEhcwgjFVfoejF2tlC7XX%2FZh3WPVZrvTF6H4nL&X-Amz-Signature=91d6a69c53f0b0118e4c40cd2f9dfbe296e7de3a5f912ce779eee5784961c8ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

