---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYNHQV6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjmR0lz2rtfoRhAE46WM7tt90wuxMCjZ32AgZLz918HQIgM2cR43cP5y4bcKMZGW5EPXz%2FT%2FQFfjMnwvYYk0jmyZAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9fQtFW2gb%2FEl9S8ircA1SZGPTp1o1DbGsTqQrCjThuTDeObStrdu6xhoI3EQLcshcAqUPYudgIEYYzsPGq%2BXP%2BNTN%2BdICeSFvUnn7nreWOkJCqUA5KoSDOC073GHHJGuUht17I6nzYAdkHTZK9%2BJGJXsNF7SKJTITyH0GGq%2Fi2NCeTd%2FLc%2Bghvo5exqYKEvh%2BFdhkhaMHnkmWuuAbm4l7Mnt6HY7xiTsOn66H0NWNj4slUNVI9WmOXUXAbgW3l2LHnxf55IsqRbza7l%2BEVHYOlYFmUxYkqiUZp4hDaL9CtLjBMnUQK7xUGP1XU9zvQhpP9Q%2FDdx19OfFUr21g4moQDCfT5y4%2B%2BrgEQLSx2LcPoY7bAS0DUxS30PjEn8%2Fnq%2FZ2FaPsHUaJ0MSyhzAHamD%2BklVN2Rk58FZAHnBT7cHJjCFe%2FK7FUio8axoQDwcSOkJt3beWbQrOdGkuoaM0%2BKeF5yKLDepYpxveW3iYQyF0uSrE4KeGT%2BXM2xj6pvvEDcBGMY%2F9JDQXdRJsyW5b8XP0aZY%2FqVSrlqJqu7%2BaAM6n7r3thX4kJ9KwZrsSc4bDTGhBfmlXGXJcvHgaVNRLmAuAzlSM3NCU3gPxPQosxflD45FTjuBtVFVWE1PW2mqfEiGJDI8NYB%2Brv3g9%2FMImo18kGOqUBBrr%2Fu7eJu4v7uDAmEQSSeZ6VGdwowNKNweU09GOolEQUGjPXMHy%2FumN%2Fa%2FMFSarxZVSViBLd7nY0lwjVKL3%2Faw4dCmRGhSE0rWI4Jg%2FC27JHOaH%2FSOmYhbceyK5Tqm2ZJF6qDz%2FL4w7aDU2zby%2BSotK9sebsa%2BylLPjRYfhxxfxb0Eg%2BYW7TvhqLitLFeC0zs4im8WLjrqPr%2FRhZzSlk%2FE6fSSjn&X-Amz-Signature=3c6eab6c490f6cdc73bf10fe8729b1b0d739dedd07e3b03f691e2cf1af312169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYNHQV6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjmR0lz2rtfoRhAE46WM7tt90wuxMCjZ32AgZLz918HQIgM2cR43cP5y4bcKMZGW5EPXz%2FT%2FQFfjMnwvYYk0jmyZAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9fQtFW2gb%2FEl9S8ircA1SZGPTp1o1DbGsTqQrCjThuTDeObStrdu6xhoI3EQLcshcAqUPYudgIEYYzsPGq%2BXP%2BNTN%2BdICeSFvUnn7nreWOkJCqUA5KoSDOC073GHHJGuUht17I6nzYAdkHTZK9%2BJGJXsNF7SKJTITyH0GGq%2Fi2NCeTd%2FLc%2Bghvo5exqYKEvh%2BFdhkhaMHnkmWuuAbm4l7Mnt6HY7xiTsOn66H0NWNj4slUNVI9WmOXUXAbgW3l2LHnxf55IsqRbza7l%2BEVHYOlYFmUxYkqiUZp4hDaL9CtLjBMnUQK7xUGP1XU9zvQhpP9Q%2FDdx19OfFUr21g4moQDCfT5y4%2B%2BrgEQLSx2LcPoY7bAS0DUxS30PjEn8%2Fnq%2FZ2FaPsHUaJ0MSyhzAHamD%2BklVN2Rk58FZAHnBT7cHJjCFe%2FK7FUio8axoQDwcSOkJt3beWbQrOdGkuoaM0%2BKeF5yKLDepYpxveW3iYQyF0uSrE4KeGT%2BXM2xj6pvvEDcBGMY%2F9JDQXdRJsyW5b8XP0aZY%2FqVSrlqJqu7%2BaAM6n7r3thX4kJ9KwZrsSc4bDTGhBfmlXGXJcvHgaVNRLmAuAzlSM3NCU3gPxPQosxflD45FTjuBtVFVWE1PW2mqfEiGJDI8NYB%2Brv3g9%2FMImo18kGOqUBBrr%2Fu7eJu4v7uDAmEQSSeZ6VGdwowNKNweU09GOolEQUGjPXMHy%2FumN%2Fa%2FMFSarxZVSViBLd7nY0lwjVKL3%2Faw4dCmRGhSE0rWI4Jg%2FC27JHOaH%2FSOmYhbceyK5Tqm2ZJF6qDz%2FL4w7aDU2zby%2BSotK9sebsa%2BylLPjRYfhxxfxb0Eg%2BYW7TvhqLitLFeC0zs4im8WLjrqPr%2FRhZzSlk%2FE6fSSjn&X-Amz-Signature=d6fb2eace850e4cc66ce917f8e96ee1c8fdf474dbe94856dd385173aa494a6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

