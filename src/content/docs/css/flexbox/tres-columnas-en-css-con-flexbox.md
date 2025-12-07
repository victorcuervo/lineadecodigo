---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNADRB4E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN98fhVNjbrDhnikT%2BQyl7O0BvriovkOKp2U5riU%2FPgQIgbUb02UW5ZagjsO2GGKJsHqE0hGrzM59sdxjoq7hnVLYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPSEdSEz%2BMEkMfTTSrcAzNn0i%2F%2BsXQDluIwFSE2xqJP0a7qpJ8%2F7DaTI%2FvkeW80zUFyjDyfPbupNlgktQQYBKUzFiVpbV18rEQohkoGtRZzsHv%2BC5%2Ff6BIaG89QW%2FYc%2B0CG%2BSGNtF6hJcWmFv2L7JdongYErc0q9%2F%2Bbmfe5QLZk3zK6ERb5sJHvjmxNmTcJMxH3V2Tp5DmETi6sFsehk6LgqHrjgJQUCSEyOLzo6XEH2xqusawr01pkDgmqjuevOSSsta6bvKw6wXoRhrgXmx07H0UeFripNPqfeMLcrxjojATi%2BHQvSqYkpg2%2FovRIVWe0%2BVi6I%2Frg7Yi1pIxs9u%2BNhtZ%2Fuvw8Ajr2AXOzPkzW%2F4GieiubXKNwAUsrF8Vb5x3lpxs8e2E0nU1bSyRrunNBPtmDeNEaXsu28gr6asyhVM5UKwsB4G6yNWLU41KOpxfSfzjGY9zh8SntvLMR8TObE9NLQ%2FiwNjhjnd0NE3JhL%2BNg852sTc6TCbD0R%2BZod7HvCKome0RC0Yx%2FzLbIdHIhtZwWsUi%2FvRp1ENxBNOLlMoM5b9FBcn6pjomou0aalCHuBKbGPIxjaqDqiZnU1YHeKseDmCf53AQ5fB4Q7C9RE7L%2B9W1jflVMPJ1Z66JR4Sr1nBIRWxq%2FHfgrMNz90skGOqUBPLytIi792pZunWaCWSiNrZwFAvk%2FGdjLyh6oUALIK1GFsx1I%2FxpTOHKIEl3TQEwkqbxqfG5P8lCxgAwLAjyWdNgU%2BZUoEZFtEHiTOigcUUyf9vcu9h8%2FCPUVsOJCF9HQ4x8%2FBWvcX2pHLrT6ooy56OM5XpvLXTbGncBJvNAwjvkqSkX%2BWMiwwwBFdg9T1tza9cJH4My%2BkA4VfHEwgiK%2B%2BwqezRxN&X-Amz-Signature=35b0aa32aa450b1596dd2d93f49b0ddf2f4b75c78eee5ffbf29305d70e5aacd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNADRB4E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN98fhVNjbrDhnikT%2BQyl7O0BvriovkOKp2U5riU%2FPgQIgbUb02UW5ZagjsO2GGKJsHqE0hGrzM59sdxjoq7hnVLYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPSEdSEz%2BMEkMfTTSrcAzNn0i%2F%2BsXQDluIwFSE2xqJP0a7qpJ8%2F7DaTI%2FvkeW80zUFyjDyfPbupNlgktQQYBKUzFiVpbV18rEQohkoGtRZzsHv%2BC5%2Ff6BIaG89QW%2FYc%2B0CG%2BSGNtF6hJcWmFv2L7JdongYErc0q9%2F%2Bbmfe5QLZk3zK6ERb5sJHvjmxNmTcJMxH3V2Tp5DmETi6sFsehk6LgqHrjgJQUCSEyOLzo6XEH2xqusawr01pkDgmqjuevOSSsta6bvKw6wXoRhrgXmx07H0UeFripNPqfeMLcrxjojATi%2BHQvSqYkpg2%2FovRIVWe0%2BVi6I%2Frg7Yi1pIxs9u%2BNhtZ%2Fuvw8Ajr2AXOzPkzW%2F4GieiubXKNwAUsrF8Vb5x3lpxs8e2E0nU1bSyRrunNBPtmDeNEaXsu28gr6asyhVM5UKwsB4G6yNWLU41KOpxfSfzjGY9zh8SntvLMR8TObE9NLQ%2FiwNjhjnd0NE3JhL%2BNg852sTc6TCbD0R%2BZod7HvCKome0RC0Yx%2FzLbIdHIhtZwWsUi%2FvRp1ENxBNOLlMoM5b9FBcn6pjomou0aalCHuBKbGPIxjaqDqiZnU1YHeKseDmCf53AQ5fB4Q7C9RE7L%2B9W1jflVMPJ1Z66JR4Sr1nBIRWxq%2FHfgrMNz90skGOqUBPLytIi792pZunWaCWSiNrZwFAvk%2FGdjLyh6oUALIK1GFsx1I%2FxpTOHKIEl3TQEwkqbxqfG5P8lCxgAwLAjyWdNgU%2BZUoEZFtEHiTOigcUUyf9vcu9h8%2FCPUVsOJCF9HQ4x8%2FBWvcX2pHLrT6ooy56OM5XpvLXTbGncBJvNAwjvkqSkX%2BWMiwwwBFdg9T1tza9cJH4My%2BkA4VfHEwgiK%2B%2BwqezRxN&X-Amz-Signature=2756220825a4d73d44402b2b3a9641dad75f2d87bedb5227c5829c51f07df3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

