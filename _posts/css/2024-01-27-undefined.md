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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOPKHAT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHvFKO35BxVo4fNaZvFO9Fhd8stqgKh3w4p%2BXZKtasoqAiA6uMHOx5CpcvL7af4cwHCn6%2FMoEJpjzeP4IjdlRqsoNCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMRgQD5XtgQfduE84pKtwD77gnebPN%2FsGHR15QJRiTjWjCJ5IXd8f7YlvoSyWazEZEFMlsv9KUV6wEgT9E81H5JKJ%2FsYVriSGV6ABaj8HJ1kZrdaJpfELU0dQ4kgHWueoCKdbOOMB0I4liU3AikoZ9Nu1fdzQyD5e9zlD%2BQ8S4xM8vT7HNW%2BkGn0aJyxjnFMqxdkw051%2BioqX9UC%2FB05%2F4vsGF3hYbAU%2FHBWgxcVwRsT4E6tmu3PFS1bdr1uq5fct2tB2gU5qvgay93FraJxeif0DTXbzjYmRgEOn3gqv0KOndQ9QOfoM%2FlNO9rGoUWLXGW7ywa8LY7HApFCXuLmbX9jKHFSNYe1XQB3YYwkIlwga1e14838Hc7GzTqaCG3GZnJ04bAmoqdV29wYgmYT7xrqdf4MKlsd%2F454sPAwJwInkZgpkrbTSG1FseGpTRWl%2BpEIGMIHgEne5zMVEcOTbiLPQQDfgAujGh3p2TNy06zkjzi%2BppY4oijWa9Mrp9GhV3X0B%2Bl3MSNjP%2BoUWLRGXMBmOJq5pejhi2wMobLp%2FCI%2FMzq2TD%2Fr22NG34w2i1EDSz4DG3LpY4gVj1AIvqPJ3MRRqYRDGK3FKx%2F69yetdXOwl716ilaY2Tia5nkN3RliVCzknw151LrbQzT1YwsZS%2ByQY6pgHldxFS8pFhgxQJ3Z3jOZ0LHylfINKPD30cQ294sKvAfysW6PpzPZWjiy0CarixKxBtzXWpYXmOkJF9f63sWPaEca4oIrWMHn%2FFky%2Blt%2Bb9iOU%2FrHY%2FaAvI%2FfRX0H7%2F4TKk29iRfmQIoAaAE03iY6%2BTWBF8gYFhg1RDyNKUxlhNNBoGv6O6dPHs9XBLgMHR4tr0kG5jmLKJYmefhj57XSkUsB%2Fv9O8%2F&X-Amz-Signature=e3d7103527f1a17d9fbf97ca6f53e788a04c45361abdb57567868a5805b0fb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOPKHAT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHvFKO35BxVo4fNaZvFO9Fhd8stqgKh3w4p%2BXZKtasoqAiA6uMHOx5CpcvL7af4cwHCn6%2FMoEJpjzeP4IjdlRqsoNCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMRgQD5XtgQfduE84pKtwD77gnebPN%2FsGHR15QJRiTjWjCJ5IXd8f7YlvoSyWazEZEFMlsv9KUV6wEgT9E81H5JKJ%2FsYVriSGV6ABaj8HJ1kZrdaJpfELU0dQ4kgHWueoCKdbOOMB0I4liU3AikoZ9Nu1fdzQyD5e9zlD%2BQ8S4xM8vT7HNW%2BkGn0aJyxjnFMqxdkw051%2BioqX9UC%2FB05%2F4vsGF3hYbAU%2FHBWgxcVwRsT4E6tmu3PFS1bdr1uq5fct2tB2gU5qvgay93FraJxeif0DTXbzjYmRgEOn3gqv0KOndQ9QOfoM%2FlNO9rGoUWLXGW7ywa8LY7HApFCXuLmbX9jKHFSNYe1XQB3YYwkIlwga1e14838Hc7GzTqaCG3GZnJ04bAmoqdV29wYgmYT7xrqdf4MKlsd%2F454sPAwJwInkZgpkrbTSG1FseGpTRWl%2BpEIGMIHgEne5zMVEcOTbiLPQQDfgAujGh3p2TNy06zkjzi%2BppY4oijWa9Mrp9GhV3X0B%2Bl3MSNjP%2BoUWLRGXMBmOJq5pejhi2wMobLp%2FCI%2FMzq2TD%2Fr22NG34w2i1EDSz4DG3LpY4gVj1AIvqPJ3MRRqYRDGK3FKx%2F69yetdXOwl716ilaY2Tia5nkN3RliVCzknw151LrbQzT1YwsZS%2ByQY6pgHldxFS8pFhgxQJ3Z3jOZ0LHylfINKPD30cQ294sKvAfysW6PpzPZWjiy0CarixKxBtzXWpYXmOkJF9f63sWPaEca4oIrWMHn%2FFky%2Blt%2Bb9iOU%2FrHY%2FaAvI%2FfRX0H7%2F4TKk29iRfmQIoAaAE03iY6%2BTWBF8gYFhg1RDyNKUxlhNNBoGv6O6dPHs9XBLgMHR4tr0kG5jmLKJYmefhj57XSkUsB%2Fv9O8%2F&X-Amz-Signature=53d5a073e665ed053bf6fc90f860e672135394ac30b32d4882b2a271f2febf61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

