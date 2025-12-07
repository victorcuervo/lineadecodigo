---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6GGCOC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUDt%2BTHR%2FtO1KBjj%2BmdD6mH0EMvQFo6%2FuMCGsH4um27AiAwxIiv%2FZsz85WSfIeJkEVuusB1yKzD7e4OaN6DyMuF7yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPNxBWoNJD9TKDAVxKtwDwt58AFWjfhreGR6YBglf19rSaDgVX%2F7lw86k0vypLPaZffMkzgDbEeGWrcoHPeJCsw%2BlGeRzlU8A4GF%2FIOT0LGALfw9k0uCl%2B9wRGZOnjD%2F%2B%2BdtRNu1oIm1ZLLi1g30MEVSw2j7B3fjZKwAZq6j4rXHktl411x1WScfPP8PqIhwketTq0VmXsFd0VojcZ6YBISHlsbpZm%2B0lRpVDP6YZ%2F92yJaY2Niz1UpXzyi1NhtAiF%2BHg87QW6otFUwlKhU5mPM4ZWGLiViqcFRCWWAl1ai6zlzuUcwttFsSBBVLE7zsrD%2FgNz1fWNwUlLfHbrdme6XUypBkVyNam%2F1LsdsAEYOA2U0PUWpF2BDok1Fm1tg5tzPV8zUv72Zv7P9t78Y0dW0H%2F6JuHrOED8R%2B4v57E5b1q8u%2BtxCk6JkfhYDzdp%2F0w6k6LWZDIxEOxm49eFK%2FiWuroQR8yncHJuTIj18vQHm36u%2BtT2ID0%2F5oRsbiLFuaVUP8ouSpR5MtbjBbveC8GTxlIYsLn7sAxC70H1CCPpKDT7UP2RLgxbTiZnrMtcKyFR5864tFOfd6CwIqQ5Jhp%2FnIvQC%2Fp4IrZLaq9BLLNUV9rYC%2B41HfxCF5HG%2BOeRv6k26McoNlXWetXt9Ew8b3WyQY6pgHb22YNQ5x44xldGL1rOgfs%2BC%2F2CvZRe2ifOI6EWHX7A2ez7lQJHg3PBaU0A%2FpWFYn6fZk9ighZUNdkTMyVf7BjeT5TWg%2BkRMhkrYH9xLcanpibR6QY4M100WHf5ic4yyKsSY6MwGCw17ehhfEHY5UjjdnbEJ%2FztHUARkg4Bs9A%2FuYAKzjGP1A13nf4YoRlN%2FOTbnXqY74jOvL21rjNGDYTxIcGwPV4&X-Amz-Signature=a310bc958c28ac9124b9db813989d4702e244d01156d15acfaafbeaa5f07532d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6GGCOC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUDt%2BTHR%2FtO1KBjj%2BmdD6mH0EMvQFo6%2FuMCGsH4um27AiAwxIiv%2FZsz85WSfIeJkEVuusB1yKzD7e4OaN6DyMuF7yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPNxBWoNJD9TKDAVxKtwDwt58AFWjfhreGR6YBglf19rSaDgVX%2F7lw86k0vypLPaZffMkzgDbEeGWrcoHPeJCsw%2BlGeRzlU8A4GF%2FIOT0LGALfw9k0uCl%2B9wRGZOnjD%2F%2B%2BdtRNu1oIm1ZLLi1g30MEVSw2j7B3fjZKwAZq6j4rXHktl411x1WScfPP8PqIhwketTq0VmXsFd0VojcZ6YBISHlsbpZm%2B0lRpVDP6YZ%2F92yJaY2Niz1UpXzyi1NhtAiF%2BHg87QW6otFUwlKhU5mPM4ZWGLiViqcFRCWWAl1ai6zlzuUcwttFsSBBVLE7zsrD%2FgNz1fWNwUlLfHbrdme6XUypBkVyNam%2F1LsdsAEYOA2U0PUWpF2BDok1Fm1tg5tzPV8zUv72Zv7P9t78Y0dW0H%2F6JuHrOED8R%2B4v57E5b1q8u%2BtxCk6JkfhYDzdp%2F0w6k6LWZDIxEOxm49eFK%2FiWuroQR8yncHJuTIj18vQHm36u%2BtT2ID0%2F5oRsbiLFuaVUP8ouSpR5MtbjBbveC8GTxlIYsLn7sAxC70H1CCPpKDT7UP2RLgxbTiZnrMtcKyFR5864tFOfd6CwIqQ5Jhp%2FnIvQC%2Fp4IrZLaq9BLLNUV9rYC%2B41HfxCF5HG%2BOeRv6k26McoNlXWetXt9Ew8b3WyQY6pgHb22YNQ5x44xldGL1rOgfs%2BC%2F2CvZRe2ifOI6EWHX7A2ez7lQJHg3PBaU0A%2FpWFYn6fZk9ighZUNdkTMyVf7BjeT5TWg%2BkRMhkrYH9xLcanpibR6QY4M100WHf5ic4yyKsSY6MwGCw17ehhfEHY5UjjdnbEJ%2FztHUARkg4Bs9A%2FuYAKzjGP1A13nf4YoRlN%2FOTbnXqY74jOvL21rjNGDYTxIcGwPV4&X-Amz-Signature=1c6240b2d789e02f2e7384144f36061f103f4606686c1cda66164f69659750b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

