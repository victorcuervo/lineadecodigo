---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCVYDCH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpsdI1Aj8%2Fl36tg2m%2BHVHzYB%2B26oqT4N8y96BqxxYFAiBK1zvB9%2F9JRWnYqTlz%2Bh4%2BJs8HFWhGqFTkS%2BXsk0oNPir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMm4Qq%2F7z1nQfpOf5UKtwDsWZKVYGl4ABB99%2F2DD92chJ0Hi8c8U7vWSxC8JBFgYLbTv7D4tlnovI1cLQKnml5DQRgJMK7I4aoTEeBykH%2F3rtHA%2BBC%2B3XMqiVbMJU3%2BxQOmQH8WNco9l5lkhjM2ls9F9MBaL9mhx%2BRL0xf1ygpxlqnp714479X0esQ44vs2iC%2BQLqIy7bEBUhq1aVVXwEq8jqSsdiXeAWhR%2Fp%2F9nT4XnCaJmnha%2BTRglV24YDNyiEwH%2BuHi9k9CQfR%2BV%2BEW%2B09iqyls3kjxENVb9YSxC4y3h3YcGyzWVrewnHHFz0H1Yn2gdbl2xyhwwzlmdFsvs5kpc3EYth1zvZxu5R%2F1aAh6RJLAfQBYHwYn7IIOEabzYj7Bm3paasTioH7FCQFgK8uTSO26gQMAzQLfiG3dlweKik5w6xyK1DNpOxP%2BRGiBwuxqufOMV7mLaKjqYSRDd49pNa6PrvZe9J6r7rKHKEZOjCGXXE1DLWW%2FFlZBnCbvGJG9bnj9uXnn9a0dPG0lSD7KPKbPIUFmSyW9hdFP%2FOuhGQ30wlWzsCIFtlwECt0IZ9E1bxRvUy51ErrAIGacmW23w%2BJ5ix07W07rMKh88y0rmL6AZ1YLimdY2zVnEZKnh%2FQ7XqB5Fdf9gYiBqEw0%2BvPyQY6pgH6ASvSEqViFqJEwsqxSoAAdaeZdzaHhe06f4kmiGngMyA5NiLOFZPoSfT3PwNzC6daHVDUuhlX%2FMUMsEPUiLaEWGmuz7YsjRdTn5BxisPSRScm6RltfRA4Icuy0eAZ7T2rZM6IEH%2FEA9RUoHuJSPfuuOZAj%2FpzAGgLe7ThAQ9tbBOWuQUdqFigZ5t9j5Y467MwaEcywh2ijhBkG%2FAClkgfSzfoDngP&X-Amz-Signature=3b330ea7204e54a947bd29b7f701dc15039fb41527c4e900a5e29b4de856855c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCVYDCH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhpsdI1Aj8%2Fl36tg2m%2BHVHzYB%2B26oqT4N8y96BqxxYFAiBK1zvB9%2F9JRWnYqTlz%2Bh4%2BJs8HFWhGqFTkS%2BXsk0oNPir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMm4Qq%2F7z1nQfpOf5UKtwDsWZKVYGl4ABB99%2F2DD92chJ0Hi8c8U7vWSxC8JBFgYLbTv7D4tlnovI1cLQKnml5DQRgJMK7I4aoTEeBykH%2F3rtHA%2BBC%2B3XMqiVbMJU3%2BxQOmQH8WNco9l5lkhjM2ls9F9MBaL9mhx%2BRL0xf1ygpxlqnp714479X0esQ44vs2iC%2BQLqIy7bEBUhq1aVVXwEq8jqSsdiXeAWhR%2Fp%2F9nT4XnCaJmnha%2BTRglV24YDNyiEwH%2BuHi9k9CQfR%2BV%2BEW%2B09iqyls3kjxENVb9YSxC4y3h3YcGyzWVrewnHHFz0H1Yn2gdbl2xyhwwzlmdFsvs5kpc3EYth1zvZxu5R%2F1aAh6RJLAfQBYHwYn7IIOEabzYj7Bm3paasTioH7FCQFgK8uTSO26gQMAzQLfiG3dlweKik5w6xyK1DNpOxP%2BRGiBwuxqufOMV7mLaKjqYSRDd49pNa6PrvZe9J6r7rKHKEZOjCGXXE1DLWW%2FFlZBnCbvGJG9bnj9uXnn9a0dPG0lSD7KPKbPIUFmSyW9hdFP%2FOuhGQ30wlWzsCIFtlwECt0IZ9E1bxRvUy51ErrAIGacmW23w%2BJ5ix07W07rMKh88y0rmL6AZ1YLimdY2zVnEZKnh%2FQ7XqB5Fdf9gYiBqEw0%2BvPyQY6pgH6ASvSEqViFqJEwsqxSoAAdaeZdzaHhe06f4kmiGngMyA5NiLOFZPoSfT3PwNzC6daHVDUuhlX%2FMUMsEPUiLaEWGmuz7YsjRdTn5BxisPSRScm6RltfRA4Icuy0eAZ7T2rZM6IEH%2FEA9RUoHuJSPfuuOZAj%2FpzAGgLe7ThAQ9tbBOWuQUdqFigZ5t9j5Y467MwaEcywh2ijhBkG%2FAClkgfSzfoDngP&X-Amz-Signature=55bdf149aa4adb6df94208b2b55c532e8f778789df60dd21325abb9b14021941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

