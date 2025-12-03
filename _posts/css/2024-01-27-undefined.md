---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQKEYN5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGuFHugGbEzpeAez7s175CDYIliRrelprp%2B5afX3KsJyAiBxa%2F3qigyDI6uzQFYvzSr%2BckSU6aKZJ%2BoWUOkcRYl4dyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMq37LUnroFSbLpL7cKtwDvNfdD9SsRaRsgx11yHKmMngPNigLV6uv0Vd%2Bx58OL6RtB4hWod%2BEzXbvWyQWrjswuPRQ3clDpBFYdD3I9ppsBugOewaAgWzC5qBkWkQLarG%2Br7I%2FEwfD0nxsVjOc%2BEfAY0ZjdtGDbfmDVFhSXZAHNG%2F1Lqy3VurtaEXUUW7Z5ICN2qCfvfzOs3oSNHsqQoMMM0O7wHXhQWFZKZbXRf7X%2BragGF9AB3HtY8tIpgyUQdhopmWFKOYpCsq87NOpDfgNlxCXXH%2BL1lBTL5Bg0dL70LpwXM2lPBDftaW%2BleqiLcNzv7IRzqFp4AMtFEO%2FEPZbaxC0O%2FeszP57ypxCtI3Jo%2FvgU5F0FLtU%2FY2lxje6Tnfr0dtl63yMD0b9Pj0x6ey3GucrrTaJA%2Figi26VNNR1A5GXvGnBG92S3OLZXDqZPXnaEhi%2Bfp1A0KnjqXepHGEqFi0xCpNgxKHey9Qur0abfTWY2HO0uFH0GZJZ7RgfH3Srw2uxJvzB6rVpxm9e5k7AZjslkyn%2FFUamZIcO4S8BMoDlbx34cC7PlJsYpulKyKrpY75uHlJr%2FQaegYP3IyyEAO9gALgBflG6WaJ6r7aiPBJaqDdtDoco0ZnL5r6Div%2F5HuBYPD7EfzFXCFEwxJS%2ByQY6pgGecIaJptpyr%2BsFrZsuSv8ODPkFuBtXcrib3vM1zq21CWpisHXeGI539oeTv3OU9AYQNmqhO8hin2ruOZhFzR%2BOwkN71FuYYKwuvKzFgeu4C9pNEyYckswdHCBxxQcY9qfFpsU0F9jZQzexLDtwoLqk5lR%2B6ec8CNGl5gQJWX6omCPNzA6VFi3UB0FFiUaIDcAWz6tonz6Vbh7Tj145jqZiZ9%2BiB%2Boc&X-Amz-Signature=aaf990498a89ab53ad6ebfb9c4ab2d5757b477ced05344ec908583febf541fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQKEYN5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGuFHugGbEzpeAez7s175CDYIliRrelprp%2B5afX3KsJyAiBxa%2F3qigyDI6uzQFYvzSr%2BckSU6aKZJ%2BoWUOkcRYl4dyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMq37LUnroFSbLpL7cKtwDvNfdD9SsRaRsgx11yHKmMngPNigLV6uv0Vd%2Bx58OL6RtB4hWod%2BEzXbvWyQWrjswuPRQ3clDpBFYdD3I9ppsBugOewaAgWzC5qBkWkQLarG%2Br7I%2FEwfD0nxsVjOc%2BEfAY0ZjdtGDbfmDVFhSXZAHNG%2F1Lqy3VurtaEXUUW7Z5ICN2qCfvfzOs3oSNHsqQoMMM0O7wHXhQWFZKZbXRf7X%2BragGF9AB3HtY8tIpgyUQdhopmWFKOYpCsq87NOpDfgNlxCXXH%2BL1lBTL5Bg0dL70LpwXM2lPBDftaW%2BleqiLcNzv7IRzqFp4AMtFEO%2FEPZbaxC0O%2FeszP57ypxCtI3Jo%2FvgU5F0FLtU%2FY2lxje6Tnfr0dtl63yMD0b9Pj0x6ey3GucrrTaJA%2Figi26VNNR1A5GXvGnBG92S3OLZXDqZPXnaEhi%2Bfp1A0KnjqXepHGEqFi0xCpNgxKHey9Qur0abfTWY2HO0uFH0GZJZ7RgfH3Srw2uxJvzB6rVpxm9e5k7AZjslkyn%2FFUamZIcO4S8BMoDlbx34cC7PlJsYpulKyKrpY75uHlJr%2FQaegYP3IyyEAO9gALgBflG6WaJ6r7aiPBJaqDdtDoco0ZnL5r6Div%2F5HuBYPD7EfzFXCFEwxJS%2ByQY6pgGecIaJptpyr%2BsFrZsuSv8ODPkFuBtXcrib3vM1zq21CWpisHXeGI539oeTv3OU9AYQNmqhO8hin2ruOZhFzR%2BOwkN71FuYYKwuvKzFgeu4C9pNEyYckswdHCBxxQcY9qfFpsU0F9jZQzexLDtwoLqk5lR%2B6ec8CNGl5gQJWX6omCPNzA6VFi3UB0FFiUaIDcAWz6tonz6Vbh7Tj145jqZiZ9%2BiB%2Boc&X-Amz-Signature=cccfc95d6b82bfc0ad1b1a01de8b50c74042ca8865c16ddb5cdad9748d8d09d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

