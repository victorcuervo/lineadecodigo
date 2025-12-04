---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LMRRDNA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqd8ALJgDRU3yS0rcQAf7SSsHV5aJdrVGy4bKkUpQASwIgDR4yB8COobCd6B7%2F4N8ZkwnJnbAkbjHuXfIiBUYMjRkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCKkmdmICyUcoRECJSrcA75qVNXXdJTPN0VjtEjuKWjWkHdN7wI6vP7sKdlGkIJ0ANUGFGrBtKnPdkY%2BalHtDOODbViwPybZBvfESPfFVfRzCMgq1LvlKNZLz6d3SLqQ8nlNnC4TJWXRA3slbZan5Wb%2FBTLB6cHmVamiafdLmde4lTjv130r0KhqSvV4TWgOOufDgJKRtcIXx4tvOqbj0M4unlJioVdrt%2FuYdo%2BqCBcnvMl6hJWkPWIiefBdqM9ilPU5%2FWLXmJua50yQQLX9oRcbehUS7mIiCtj%2FivSTGiiMI0jOJUhapIWkqn3ED6j55%2BE%2B8%2FWmpVE3Gc9121yFHderaPFN15Dtb0IN%2F0aQLqDbYlr1hecGR%2F2T%2B6MLF6w1hRbZV6HCkV5UT0Yj46dAENQZlye1A5DwNzAPPrkxJcgW8fF5oMUe%2F3U4hyrTPCqJ5fOdqKQpERnUuym4JthNT4LxaVpoR6HaRclXRdcdlR77ZTPlrLj5uiub5h5zU%2BzC2jZ7lOSOS6Wd%2BmgDDvE9xR%2BF42ljAWY8Q4WgsadRfbhxOoqXFq9iyEe5%2FUQBbozAEy%2FcycuIMdYlRxbEwAEzp9B2BrPj1wqIkUu%2BkNoQu%2BJbHcsTFqNuo2VOwbGG6Mh%2BdBFtcS%2BYHW8zW%2BgcMJHcxskGOqUBBZhRSICIyLKtE%2B%2FzlwxgX6IheJHIUbMRZQJpA%2BHohl%2Btge5X4XgpqWS6EKNxmFXXg%2FHHXJdOE1AnXDJmVouP9bzOjQMD8lPCHrw%2B031F6o9Qb2VtP%2BykIQkGIbbjJSbQlc9g3A7dveEMoe2vPl56JZVil2FN0t0aJG%2BYfUGj7QWLKzYGLGsYM3vco27yqryLVqd4246pZex4yF5qscPSDmZTrz99&X-Amz-Signature=b9a14b242a21628b6923d2bb7e050f972f2c2b1d1e1676719fb9ef420c5459ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LMRRDNA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqd8ALJgDRU3yS0rcQAf7SSsHV5aJdrVGy4bKkUpQASwIgDR4yB8COobCd6B7%2F4N8ZkwnJnbAkbjHuXfIiBUYMjRkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCKkmdmICyUcoRECJSrcA75qVNXXdJTPN0VjtEjuKWjWkHdN7wI6vP7sKdlGkIJ0ANUGFGrBtKnPdkY%2BalHtDOODbViwPybZBvfESPfFVfRzCMgq1LvlKNZLz6d3SLqQ8nlNnC4TJWXRA3slbZan5Wb%2FBTLB6cHmVamiafdLmde4lTjv130r0KhqSvV4TWgOOufDgJKRtcIXx4tvOqbj0M4unlJioVdrt%2FuYdo%2BqCBcnvMl6hJWkPWIiefBdqM9ilPU5%2FWLXmJua50yQQLX9oRcbehUS7mIiCtj%2FivSTGiiMI0jOJUhapIWkqn3ED6j55%2BE%2B8%2FWmpVE3Gc9121yFHderaPFN15Dtb0IN%2F0aQLqDbYlr1hecGR%2F2T%2B6MLF6w1hRbZV6HCkV5UT0Yj46dAENQZlye1A5DwNzAPPrkxJcgW8fF5oMUe%2F3U4hyrTPCqJ5fOdqKQpERnUuym4JthNT4LxaVpoR6HaRclXRdcdlR77ZTPlrLj5uiub5h5zU%2BzC2jZ7lOSOS6Wd%2BmgDDvE9xR%2BF42ljAWY8Q4WgsadRfbhxOoqXFq9iyEe5%2FUQBbozAEy%2FcycuIMdYlRxbEwAEzp9B2BrPj1wqIkUu%2BkNoQu%2BJbHcsTFqNuo2VOwbGG6Mh%2BdBFtcS%2BYHW8zW%2BgcMJHcxskGOqUBBZhRSICIyLKtE%2B%2FzlwxgX6IheJHIUbMRZQJpA%2BHohl%2Btge5X4XgpqWS6EKNxmFXXg%2FHHXJdOE1AnXDJmVouP9bzOjQMD8lPCHrw%2B031F6o9Qb2VtP%2BykIQkGIbbjJSbQlc9g3A7dveEMoe2vPl56JZVil2FN0t0aJG%2BYfUGj7QWLKzYGLGsYM3vco27yqryLVqd4246pZex4yF5qscPSDmZTrz99&X-Amz-Signature=5b458793fe09b80f3fb2b3317f30e29e47e7e91d0377bcfd30bcd7b5dff77a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

