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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAZ4OSE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFCEigcZXgxQ0XgBYYSa2fYBPG2FKSAooAwjOflmQ0BVAiEA176%2F2tQLazQJcfRkLbPJluhDSpQW5ZyO%2FVsvzcblijMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLC5xiSkPFyFYKYNoircAzedsCdveD9l8KiSvXiACC8jvwtyOdMJA0KzJWgVHTNai8GaPBOWfjF%2FA1Fmp0nzZiP1eZokDw0jE%2BjzI%2BMD4kuS8FE5ZuNk6HMA9ZLIQryqyEVG4STUvbkI73onmiUsfhhwxy3L9RXex6xeY8zxCmLYBqWFtfblIB9wkmqHJUzKZS2EtNQt9lHIw5l3JrclCM%2BgdvDHuFWS7aMc6n0gt2j3hhWwLmS0I%2BuCAhRQx8p0wsE01ad46TKXb0zxIi2My5L4sXFDmQunsMhJLDSsYi8gWqTUUmU1j8SMRdL0s2EWXHwSF6ZxZfxo0phvzzd3DiypiBF89Dl1me0X3nD7jkhc6vwDgIyJ8uNR6DgKy%2BpQLleV4fc8iWNpS5YhzOElc3LniRWcO5SGQSsYLb5IHs%2Bc6%2BSwyd%2BobRmm%2BEBxr%2BJqvM%2FEz40%2F1gs6busb%2FoiP3ryEJzOpAYty9KM2zneowVxebHVnUuTGveWeOC6m%2BPUW89V%2FXBUppJF3LGop6gi3SYS42fN8gYdjObh%2BFTm6ea9H4hsuAILN%2Bkxb52EGwaoQ9CfGh79gs6oOlBzUXMUAgPh8djxUeIBjeo9%2FxX%2FTiNDFKpv3Tx8zxidYemmZENEpjcBdpyRfxcKOQMyJMN6HwckGOqUBVpZ4gOx2SFC6oJIJqEWtaMsc%2FIed3r3ry3%2FJFteNw5BgpUkyFPRO%2FEI98vdg0xhM0BWJBiGkb5xVdzQ%2FvIJqxhVGVOsnYc85dTsAcLSkndhPHYaJFdZLASD4Gzd5bOsGwLgMoCK1YfeDu68kfgvYffTJ8IiLogC%2BlB9WhMSAvbGSJ7SczDw%2BXFoSK75pLTeisHcnQs0tjddb4iar8b9kZcFBibyt&X-Amz-Signature=920dbd3732e265bd88e3105bcb8c1d4cb2a349423a5282814280f061ad66dd42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAZ4OSE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFCEigcZXgxQ0XgBYYSa2fYBPG2FKSAooAwjOflmQ0BVAiEA176%2F2tQLazQJcfRkLbPJluhDSpQW5ZyO%2FVsvzcblijMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLC5xiSkPFyFYKYNoircAzedsCdveD9l8KiSvXiACC8jvwtyOdMJA0KzJWgVHTNai8GaPBOWfjF%2FA1Fmp0nzZiP1eZokDw0jE%2BjzI%2BMD4kuS8FE5ZuNk6HMA9ZLIQryqyEVG4STUvbkI73onmiUsfhhwxy3L9RXex6xeY8zxCmLYBqWFtfblIB9wkmqHJUzKZS2EtNQt9lHIw5l3JrclCM%2BgdvDHuFWS7aMc6n0gt2j3hhWwLmS0I%2BuCAhRQx8p0wsE01ad46TKXb0zxIi2My5L4sXFDmQunsMhJLDSsYi8gWqTUUmU1j8SMRdL0s2EWXHwSF6ZxZfxo0phvzzd3DiypiBF89Dl1me0X3nD7jkhc6vwDgIyJ8uNR6DgKy%2BpQLleV4fc8iWNpS5YhzOElc3LniRWcO5SGQSsYLb5IHs%2Bc6%2BSwyd%2BobRmm%2BEBxr%2BJqvM%2FEz40%2F1gs6busb%2FoiP3ryEJzOpAYty9KM2zneowVxebHVnUuTGveWeOC6m%2BPUW89V%2FXBUppJF3LGop6gi3SYS42fN8gYdjObh%2BFTm6ea9H4hsuAILN%2Bkxb52EGwaoQ9CfGh79gs6oOlBzUXMUAgPh8djxUeIBjeo9%2FxX%2FTiNDFKpv3Tx8zxidYemmZENEpjcBdpyRfxcKOQMyJMN6HwckGOqUBVpZ4gOx2SFC6oJIJqEWtaMsc%2FIed3r3ry3%2FJFteNw5BgpUkyFPRO%2FEI98vdg0xhM0BWJBiGkb5xVdzQ%2FvIJqxhVGVOsnYc85dTsAcLSkndhPHYaJFdZLASD4Gzd5bOsGwLgMoCK1YfeDu68kfgvYffTJ8IiLogC%2BlB9WhMSAvbGSJ7SczDw%2BXFoSK75pLTeisHcnQs0tjddb4iar8b9kZcFBibyt&X-Amz-Signature=e9ce5eee2f08005be18a1bbc0fb4fe6277fac4d3a1e72423af49abe21a0cbebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

