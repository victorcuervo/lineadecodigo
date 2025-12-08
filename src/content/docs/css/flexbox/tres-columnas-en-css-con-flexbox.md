---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S4TTIXZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BN%2FVP%2Bq6u3zXAdN1gCjefyUF%2FXUD%2FNUva%2F1ML4MRsHwIhAL8At%2FNWJYrEbOHR4WAYarm1wMLdZAZVtVJXQleXmcMjKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKz9uRISV1nis1vBUq3AOOhN6XFHIDZkSfh4WynShkckshiH7%2B0b8pfBVxssQ9%2BoHC%2Bw72i5ROW97WXk5RUO70coyGATGOlhPr1FDgRJBv1B2vfeLoVb09CDdo%2ByzU4eNdJPiQxv9KF1Y9hXI2K2aZCQKy1bBNhRx3r2UODMFVkFDy2IGT%2FgSsyx%2Fu%2FUPRFVqznQbTO1LhS6IZIg06PQcR9xMg2XD05WI91BHspHDleUFtDiBeQjXttoWgpf2hd81Xg%2Ba9ho042SvFGiqKQdpzohpO4CuwY%2Fu0br7u9JSfxzhbWAACcVn%2BjSwMbdYEWXDB3GcKIcewC%2FjCNG2NdDhWIpNDG63QLTJccOm%2BuU63bfmFVKqbBTc%2BRvNqV69N2CAuNqDJFKE%2BeG4LkDwPSLRruYzwwJ32j8byh%2B42dlUFcMUD9TDmkgZtoJEWNis6hnmiab9RyrkYkfgGlMjCDrek7LWJHQfZV9tUW0pskmimtiu3Zzs7o22CdnXarAGRP9sFne0lmM%2FXA8U0h83s%2BFTvsDGg3zFp%2FtXnpM%2BYV1URFKNU%2BcAQP%2B5M1hf7ETcwcG8s07ZHG7wSiCY%2FFjIxI8SkEv7D1fvoHZNQ2%2B1e1RaOpx4ashCx5u84%2BRuA%2F5tI9sWoD06L22ZXifF6QjD8s9zJBjqkAUfBMQptxGpPMdZNdguIipabt%2FVjlLV%2ButQ75Sg9aSF3eh%2BF9gftHss91P24HRnEmzLqw8m8Ky%2Fi265ryAnkJr50DvvE0wjwcJDhh91ln1GyhwWRB5PTaavqbUV0At83H2fpfy3hXE9TG9u0XXLQDHAM3occFdgaTnC1DIL9ePKpPOqUzaJPtfC7Wmhg6IqPss9zOGJpvT0qxVbYMQHxwnz5CTCY&X-Amz-Signature=ebef2de6a9ef6370800272752dd56f5a70435c0b335208bfb6aa6942704cfd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S4TTIXZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BN%2FVP%2Bq6u3zXAdN1gCjefyUF%2FXUD%2FNUva%2F1ML4MRsHwIhAL8At%2FNWJYrEbOHR4WAYarm1wMLdZAZVtVJXQleXmcMjKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKz9uRISV1nis1vBUq3AOOhN6XFHIDZkSfh4WynShkckshiH7%2B0b8pfBVxssQ9%2BoHC%2Bw72i5ROW97WXk5RUO70coyGATGOlhPr1FDgRJBv1B2vfeLoVb09CDdo%2ByzU4eNdJPiQxv9KF1Y9hXI2K2aZCQKy1bBNhRx3r2UODMFVkFDy2IGT%2FgSsyx%2Fu%2FUPRFVqznQbTO1LhS6IZIg06PQcR9xMg2XD05WI91BHspHDleUFtDiBeQjXttoWgpf2hd81Xg%2Ba9ho042SvFGiqKQdpzohpO4CuwY%2Fu0br7u9JSfxzhbWAACcVn%2BjSwMbdYEWXDB3GcKIcewC%2FjCNG2NdDhWIpNDG63QLTJccOm%2BuU63bfmFVKqbBTc%2BRvNqV69N2CAuNqDJFKE%2BeG4LkDwPSLRruYzwwJ32j8byh%2B42dlUFcMUD9TDmkgZtoJEWNis6hnmiab9RyrkYkfgGlMjCDrek7LWJHQfZV9tUW0pskmimtiu3Zzs7o22CdnXarAGRP9sFne0lmM%2FXA8U0h83s%2BFTvsDGg3zFp%2FtXnpM%2BYV1URFKNU%2BcAQP%2B5M1hf7ETcwcG8s07ZHG7wSiCY%2FFjIxI8SkEv7D1fvoHZNQ2%2B1e1RaOpx4ashCx5u84%2BRuA%2F5tI9sWoD06L22ZXifF6QjD8s9zJBjqkAUfBMQptxGpPMdZNdguIipabt%2FVjlLV%2ButQ75Sg9aSF3eh%2BF9gftHss91P24HRnEmzLqw8m8Ky%2Fi265ryAnkJr50DvvE0wjwcJDhh91ln1GyhwWRB5PTaavqbUV0At83H2fpfy3hXE9TG9u0XXLQDHAM3occFdgaTnC1DIL9ePKpPOqUzaJPtfC7Wmhg6IqPss9zOGJpvT0qxVbYMQHxwnz5CTCY&X-Amz-Signature=3f9363cdd4cb37c3148c3c5c3e9817284269a6dd751b506e567119f8ac11c8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

