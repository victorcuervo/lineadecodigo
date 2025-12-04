---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPQ42YU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEEUYGnEYxB9sJAiMYp3PXPFYI1fxVVFWPmor%2B3%2BhuRBAiBs%2FiHTxB7zb2P0ugTgCINaB%2BPKm0%2FyHAbGWaHMbBgn1ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUvI7jChvKAwOsrcKKtwDoKW%2BiNSiEDszbGxxRF3tc66h9M%2BAVa8NBoagrQIYwzzOxy40Gx00FCiHZ%2BsxGrb9gpzv7A%2BQyIfR1iwU9DWmD4T1J6c%2BgCfYwk4%2Bnonurr1aYDZE0d8X8i3FF%2FzR8hLYWoK5bccum3lf%2B5MBDguKy9EYdnByM3rMrOGQgwleZ4B6PYRI01Po1UIpSZSwZa32bEGKk%2FVcvVGfDxQNTH53ghFkUvh8y1mu3WlNnQZcfo16jAZhcF%2FdwLoRjg9vkF7%2B4Jzf%2FzKSXtaqt0pYRCC70PjHE704PPU53R4skxxg7jS41v5QgQ8Lx0fkWTHVZkJaJF0So%2FqKx20h4ofdPbj9bIWcFwVelda4KPXgeHueQNlm1faBvYacXFja2m53YUw9euDk8Utz3p7F0kbbkzryaN0aHac93OXyDtNVE%2BDO2G%2BFnkK%2F%2Ft7N4semssQpLdykCmb9kZXBX%2BqJw56jxLksfwYrLAo6O1GzQD0vlyO8fp3BAmvy%2F9VO1E8Wi6fGgg6AsQAddV942tJrWyXi9uAnIaS%2BACSdNhwd2SToP3D3WpkmvQigm9mgilBKK7JMfsBn910D2703yic%2FP%2F8X5Due5QZzP9Gh07qPG1orVu8jplMN5Hppy9jl1%2FUnzx4w4oPGyQY6pgEVF%2B0AE7VksrWcttV3rDt34H09QjrQQp9w7iy6SEhLuXeVt1j%2BDucZQVKFeac%2FPkF8s%2BkrVBRJdO%2FSXfLELc4x2jvvmlKWKU4GHKyRikrA0IpE473%2BXm4S%2BE4Uin2ZsNtiFfF9VuLnCyBBz1C7oZuQ685ETPfr7gPnUQVYNdlg5r95UxCIlX42bpAWjZTHnzfNfR%2FhAzed%2FV9yNGrQ4e4mc2DW3eyG&X-Amz-Signature=4f43a1255f6e2c30f4599a3fa3de52c2139ae100a45b76e3cff421130dfa2136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPQ42YU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEEUYGnEYxB9sJAiMYp3PXPFYI1fxVVFWPmor%2B3%2BhuRBAiBs%2FiHTxB7zb2P0ugTgCINaB%2BPKm0%2FyHAbGWaHMbBgn1ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMUvI7jChvKAwOsrcKKtwDoKW%2BiNSiEDszbGxxRF3tc66h9M%2BAVa8NBoagrQIYwzzOxy40Gx00FCiHZ%2BsxGrb9gpzv7A%2BQyIfR1iwU9DWmD4T1J6c%2BgCfYwk4%2Bnonurr1aYDZE0d8X8i3FF%2FzR8hLYWoK5bccum3lf%2B5MBDguKy9EYdnByM3rMrOGQgwleZ4B6PYRI01Po1UIpSZSwZa32bEGKk%2FVcvVGfDxQNTH53ghFkUvh8y1mu3WlNnQZcfo16jAZhcF%2FdwLoRjg9vkF7%2B4Jzf%2FzKSXtaqt0pYRCC70PjHE704PPU53R4skxxg7jS41v5QgQ8Lx0fkWTHVZkJaJF0So%2FqKx20h4ofdPbj9bIWcFwVelda4KPXgeHueQNlm1faBvYacXFja2m53YUw9euDk8Utz3p7F0kbbkzryaN0aHac93OXyDtNVE%2BDO2G%2BFnkK%2F%2Ft7N4semssQpLdykCmb9kZXBX%2BqJw56jxLksfwYrLAo6O1GzQD0vlyO8fp3BAmvy%2F9VO1E8Wi6fGgg6AsQAddV942tJrWyXi9uAnIaS%2BACSdNhwd2SToP3D3WpkmvQigm9mgilBKK7JMfsBn910D2703yic%2FP%2F8X5Due5QZzP9Gh07qPG1orVu8jplMN5Hppy9jl1%2FUnzx4w4oPGyQY6pgEVF%2B0AE7VksrWcttV3rDt34H09QjrQQp9w7iy6SEhLuXeVt1j%2BDucZQVKFeac%2FPkF8s%2BkrVBRJdO%2FSXfLELc4x2jvvmlKWKU4GHKyRikrA0IpE473%2BXm4S%2BE4Uin2ZsNtiFfF9VuLnCyBBz1C7oZuQ685ETPfr7gPnUQVYNdlg5r95UxCIlX42bpAWjZTHnzfNfR%2FhAzed%2FV9yNGrQ4e4mc2DW3eyG&X-Amz-Signature=a70e3f414a9ca053967b67d369f5306f697dd22e17d232c4b03de3680b40f494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

