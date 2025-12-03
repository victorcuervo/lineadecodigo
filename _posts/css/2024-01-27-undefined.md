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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEIA6QR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDaPkMzLKOvutXAcAwPx2yfpf%2BH4brrJr6hM1scuQDTdgIhALBNk5Smy%2BqnRn89gSrFFuxe27uHcTUwX3xUMPRKQt2FKv8DCCIQABoMNjM3NDIzMTgzODA1Igyj3ay89GJZqBua%2BCYq3AMHeosBYkr6zreuA2EFPS55HGelwYn0WD410IvpD3lLZpuWCeWM4HJx6a%2BwLdWtNwKQ%2Bely03BzbgZKEiJZGgC%2BIa3dtLTV4gmlus5D9YjKF6JIgsqgHXFjXY51yu3FzY76tBYq%2B0vdXfnTGCB0PP%2Fa8fzZgc9BGfYwa%2F69DwvhE4w4dnNwaKhrvFeHRdWNr3MLS1UWc3bwGNCN%2FWH%2FDjmYAjYSBJWPkSP9QlWmBgO%2FOOiYklECYL06fZzL6FVIXwSGY9V5Q%2BCFvLpRkP4RRuzf3D3frHbQnsQoTT5oKhD3eZMw2DBDHK%2FOtkwjD59gRd0K763rCfSxetccI%2FWZfSD%2FCLUmtCvtAWpoB2vMPdipKUNRTFcWdak%2Fvbb5Qr4PnPxSyfHuKzsxlSQsYe%2BQA%2FTGZNHP%2F0PRFfWSn96k%2FiU7KLfoAZrRkMXc5v5RdvpD1Bg10uQ4cWABLC8gBPSH9urTauOpIdAT2%2FpZbT9grKh4yXcaSIfu9r4xsB3JVKDp0kzhUaz%2Fq5sHGuHbXQ4s1LFBe98x7GshFYNmhFbjmGL4L8HY6eH8spPhV9SlnEcXS4x1bCKpmehNVep1P9Oldfb8k253J7jyg70WvAUZsHbpSaGSfhCOPOUD5YhCyzCkob7JBjqkAd05znRpr0r%2F%2Fvk%2BIEzZkwiFi2TseAaSPzCRIuM9y1r%2BOauaw4JObfUHup7mR2zSobYN4fmhfQn2gMIzdHetBCIeOSTwMdzLHlFkSx2PCY%2FQeCi%2FZZxUjThyEywK1ugW%2BkK5I2jAECRr%2BQO0d%2BmX1MvUwxbcof%2F%2FkDoFfrbnLJ21ak%2BS9xeN6Qsb4TOdFuwhfscKjpI6p4RWnbizUB3Lq%2F6T2lN%2F&X-Amz-Signature=f25531107cd0ac070bc80258e04468964ed7033eb67174d6ce2a2c25cf5eef25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEIA6QR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDaPkMzLKOvutXAcAwPx2yfpf%2BH4brrJr6hM1scuQDTdgIhALBNk5Smy%2BqnRn89gSrFFuxe27uHcTUwX3xUMPRKQt2FKv8DCCIQABoMNjM3NDIzMTgzODA1Igyj3ay89GJZqBua%2BCYq3AMHeosBYkr6zreuA2EFPS55HGelwYn0WD410IvpD3lLZpuWCeWM4HJx6a%2BwLdWtNwKQ%2Bely03BzbgZKEiJZGgC%2BIa3dtLTV4gmlus5D9YjKF6JIgsqgHXFjXY51yu3FzY76tBYq%2B0vdXfnTGCB0PP%2Fa8fzZgc9BGfYwa%2F69DwvhE4w4dnNwaKhrvFeHRdWNr3MLS1UWc3bwGNCN%2FWH%2FDjmYAjYSBJWPkSP9QlWmBgO%2FOOiYklECYL06fZzL6FVIXwSGY9V5Q%2BCFvLpRkP4RRuzf3D3frHbQnsQoTT5oKhD3eZMw2DBDHK%2FOtkwjD59gRd0K763rCfSxetccI%2FWZfSD%2FCLUmtCvtAWpoB2vMPdipKUNRTFcWdak%2Fvbb5Qr4PnPxSyfHuKzsxlSQsYe%2BQA%2FTGZNHP%2F0PRFfWSn96k%2FiU7KLfoAZrRkMXc5v5RdvpD1Bg10uQ4cWABLC8gBPSH9urTauOpIdAT2%2FpZbT9grKh4yXcaSIfu9r4xsB3JVKDp0kzhUaz%2Fq5sHGuHbXQ4s1LFBe98x7GshFYNmhFbjmGL4L8HY6eH8spPhV9SlnEcXS4x1bCKpmehNVep1P9Oldfb8k253J7jyg70WvAUZsHbpSaGSfhCOPOUD5YhCyzCkob7JBjqkAd05znRpr0r%2F%2Fvk%2BIEzZkwiFi2TseAaSPzCRIuM9y1r%2BOauaw4JObfUHup7mR2zSobYN4fmhfQn2gMIzdHetBCIeOSTwMdzLHlFkSx2PCY%2FQeCi%2FZZxUjThyEywK1ugW%2BkK5I2jAECRr%2BQO0d%2BmX1MvUwxbcof%2F%2FkDoFfrbnLJ21ak%2BS9xeN6Qsb4TOdFuwhfscKjpI6p4RWnbizUB3Lq%2F6T2lN%2F&X-Amz-Signature=754ba02b54a86ae563192b254b54bada9d978319f388d4ae208951cac166aa46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

