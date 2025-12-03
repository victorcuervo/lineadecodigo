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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV6S6Q45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGNVqpnarapjhy%2BdXqDjfabfqQhu6pt4MFIw51IR8TcrAiB3a%2B%2FSD%2F0srAlFiL5KyXekfe7NR%2BlrTbV2F7TjcdlF6Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbdXimch%2FG%2FC12CDMKtwD2xyIE0z%2FU85H6wgUAsqf2wWDZrYA%2F%2FzgST7Z%2BZWkaKDwYPCkArylifDP4IRp48eS6%2B642PeAW3Z57c2DwMoATkV1O16W2zB%2BPob1C%2FuWMbfg0kNwl4dyK%2BBcHeM%2F5fbxpkQXm6Uuiw7%2FiVF0ApvS2PXFoTZJpd1gm2tHg0ZVvcsk8nOSnjqGJs9AGae2gy13xOV%2FnZIE%2F8V938AgTkGNBIARUWjaYyyyfkm7uzSxQY6oeKalHz4UmsZndU31pLn1AYu5U0LwYmuUK%2BILJJ1iVbwKGaXpf1JvNPIMVHvVyg%2BeCDuYChHLk6VueVCbiic6yFAhPctJciBDfIqalP7%2B6md%2BsQyPXUjEmE5rCWwg7jZw39e2LNAqYn%2BFum3rWHs5gxJPPv3m3CzY%2FzJSGwoA7Bw4%2Biz76tqMxr6Mee%2FokBc8hpg%2FuW%2B7FFrw79rV%2Bokga6LEH6zMwiNt%2BoLY0RCNAK8e1UZNsDZhkq%2B1fV6QDUXwxsW8lUFIA%2BVPu6QpZ%2BrhcXgittfslo2Eni00eQ2X78bfwu9QX70udSH4USoQXk0upkKPgJKuoibUTG6Wah4fOrtDOvRWMmlT%2BdkrwAJldR%2FSEmE0pPOOvLliHE%2FXkmaXN3eDE6vMmozbCbIw2%2Fa%2FyQY6pgHBAbXcHRgq7cEcGmTIbh3NWQ9OOm0M9gn%2BRqNQpni5cKFsIBfpuK%2BMvAjLf%2FRdZHLz2nwGOYMImmlOjbbX6lHP6oPFFv0vjGvPV4eLoO7S3rTj8MVKMJwG%2FjpivHxbp8VhHarac4Eapbg3S4oRDUkzB9jjo8SDBr4CBSvPZzVLU9MRMZ3MiEXF29YOi4awdS3U9e7CYtpwTwbXbTknNeW2gTSAmvGU&X-Amz-Signature=ad622321d4994556101a146107fa98140370aac89ad28514c972fcbbde70a02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV6S6Q45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGNVqpnarapjhy%2BdXqDjfabfqQhu6pt4MFIw51IR8TcrAiB3a%2B%2FSD%2F0srAlFiL5KyXekfe7NR%2BlrTbV2F7TjcdlF6Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbdXimch%2FG%2FC12CDMKtwD2xyIE0z%2FU85H6wgUAsqf2wWDZrYA%2F%2FzgST7Z%2BZWkaKDwYPCkArylifDP4IRp48eS6%2B642PeAW3Z57c2DwMoATkV1O16W2zB%2BPob1C%2FuWMbfg0kNwl4dyK%2BBcHeM%2F5fbxpkQXm6Uuiw7%2FiVF0ApvS2PXFoTZJpd1gm2tHg0ZVvcsk8nOSnjqGJs9AGae2gy13xOV%2FnZIE%2F8V938AgTkGNBIARUWjaYyyyfkm7uzSxQY6oeKalHz4UmsZndU31pLn1AYu5U0LwYmuUK%2BILJJ1iVbwKGaXpf1JvNPIMVHvVyg%2BeCDuYChHLk6VueVCbiic6yFAhPctJciBDfIqalP7%2B6md%2BsQyPXUjEmE5rCWwg7jZw39e2LNAqYn%2BFum3rWHs5gxJPPv3m3CzY%2FzJSGwoA7Bw4%2Biz76tqMxr6Mee%2FokBc8hpg%2FuW%2B7FFrw79rV%2Bokga6LEH6zMwiNt%2BoLY0RCNAK8e1UZNsDZhkq%2B1fV6QDUXwxsW8lUFIA%2BVPu6QpZ%2BrhcXgittfslo2Eni00eQ2X78bfwu9QX70udSH4USoQXk0upkKPgJKuoibUTG6Wah4fOrtDOvRWMmlT%2BdkrwAJldR%2FSEmE0pPOOvLliHE%2FXkmaXN3eDE6vMmozbCbIw2%2Fa%2FyQY6pgHBAbXcHRgq7cEcGmTIbh3NWQ9OOm0M9gn%2BRqNQpni5cKFsIBfpuK%2BMvAjLf%2FRdZHLz2nwGOYMImmlOjbbX6lHP6oPFFv0vjGvPV4eLoO7S3rTj8MVKMJwG%2FjpivHxbp8VhHarac4Eapbg3S4oRDUkzB9jjo8SDBr4CBSvPZzVLU9MRMZ3MiEXF29YOi4awdS3U9e7CYtpwTwbXbTknNeW2gTSAmvGU&X-Amz-Signature=341f34a6c1ad5ca7ae683805b2846cdde05227eda82aa0cc696e2a3d49e1860f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

