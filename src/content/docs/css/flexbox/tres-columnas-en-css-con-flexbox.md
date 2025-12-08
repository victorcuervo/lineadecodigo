---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCMYNUV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFide5S6OyAlXS7RAHsENCNBg5n6wInDrJ3ULrnXtxAgAiEAmA2cAwOD7i5bGXnO4lcR23k59ZhECmGO7zKM%2FtM9hOAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHDzzxNHhsW95GXjircA%2FeX7GWLHZ5MYG2Elzb%2BHLg8swH1BL7cHaXeJHPmACyI6ewkBn9qGvg4WLH8DZSSI5e38d3bxQhPrh7zN%2BQ3TEpxkjUxNIp7B0%2BEFnMNvXJlBF8cJx45pSeK6XvtX8OcPD5FxO8WLxQkskRE6IiDrNBJmYC%2FRJa30TH4hGq5raUsdaUIXhZIyPSwl%2F9L7cMszj1%2FK36iLBkJ6JAFDiKjTEJGHzOzh3sacdMxrG9AsOHfOrqY%2BSuK9x3wkLeINEwRDkyuAbLgbH9KP2LFy2OHQ0ZgegFAOPjhQZb4zfVpvmECaTfs6Ea2PBtciR2O4sTtqaNnBBiSNplutriLwMSKRgr%2BbJ1ws1lAcd2SPo90sOYj4Z%2BjPtbg6sV9Fb76tv3Eu%2Fr0O8%2Fd4uFunJ7tnbwt1roqyWRMV%2B%2FqoaMuBM9sqbAt9F25qwunTbhV3%2BHn%2FbHk%2FATFkCz56I%2FmdI%2FSbPDc9zMGxfIzFuNniygGRdpdDo7F1xRWTTdpomcjjbdwfK%2FBXlq5to3ZzYzsxd7%2BJnI7CefAWdemJhaLM7qF1Kay6p5Cd1AzE94KBIUbbYlaDIO6KA%2Bsda0KxJ7zNDr2GFlgGxpS6ENhKo7QgbbpxmS9HI0bpjFrWI5C03vq%2BEfqMO3t2ckGOqUBzAlzHgsvMQKc0D40NNBoW1icFK%2FYhVcHNPw7t5VysoD3bmjs5HPpwqqdEdZAc1Usis0bJtBKoy6%2F%2BqhMx44oqJMcfRvv%2FZ35LdjbMrlbh%2FT9gB%2FDXG70EmVGH%2FmUZ1VIC%2Fp9RHPJtZpdP5NEig777428hrKiwbnck1cBoNtLLtHVmW8ZjT14n%2BC4yy8kY0hUXc3PMlky%2FKmUV19K1svmCuXLK5Vn&X-Amz-Signature=22fc09f93455b6e270714008306cf44edcce8791a504aff1d73eeb7ff60027eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCMYNUV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFide5S6OyAlXS7RAHsENCNBg5n6wInDrJ3ULrnXtxAgAiEAmA2cAwOD7i5bGXnO4lcR23k59ZhECmGO7zKM%2FtM9hOAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHDzzxNHhsW95GXjircA%2FeX7GWLHZ5MYG2Elzb%2BHLg8swH1BL7cHaXeJHPmACyI6ewkBn9qGvg4WLH8DZSSI5e38d3bxQhPrh7zN%2BQ3TEpxkjUxNIp7B0%2BEFnMNvXJlBF8cJx45pSeK6XvtX8OcPD5FxO8WLxQkskRE6IiDrNBJmYC%2FRJa30TH4hGq5raUsdaUIXhZIyPSwl%2F9L7cMszj1%2FK36iLBkJ6JAFDiKjTEJGHzOzh3sacdMxrG9AsOHfOrqY%2BSuK9x3wkLeINEwRDkyuAbLgbH9KP2LFy2OHQ0ZgegFAOPjhQZb4zfVpvmECaTfs6Ea2PBtciR2O4sTtqaNnBBiSNplutriLwMSKRgr%2BbJ1ws1lAcd2SPo90sOYj4Z%2BjPtbg6sV9Fb76tv3Eu%2Fr0O8%2Fd4uFunJ7tnbwt1roqyWRMV%2B%2FqoaMuBM9sqbAt9F25qwunTbhV3%2BHn%2FbHk%2FATFkCz56I%2FmdI%2FSbPDc9zMGxfIzFuNniygGRdpdDo7F1xRWTTdpomcjjbdwfK%2FBXlq5to3ZzYzsxd7%2BJnI7CefAWdemJhaLM7qF1Kay6p5Cd1AzE94KBIUbbYlaDIO6KA%2Bsda0KxJ7zNDr2GFlgGxpS6ENhKo7QgbbpxmS9HI0bpjFrWI5C03vq%2BEfqMO3t2ckGOqUBzAlzHgsvMQKc0D40NNBoW1icFK%2FYhVcHNPw7t5VysoD3bmjs5HPpwqqdEdZAc1Usis0bJtBKoy6%2F%2BqhMx44oqJMcfRvv%2FZ35LdjbMrlbh%2FT9gB%2FDXG70EmVGH%2FmUZ1VIC%2Fp9RHPJtZpdP5NEig777428hrKiwbnck1cBoNtLLtHVmW8ZjT14n%2BC4yy8kY0hUXc3PMlky%2FKmUV19K1svmCuXLK5Vn&X-Amz-Signature=4d9d1884be2704ff585230de622886a1f3aa42da0d98e2bb121607036f4e9876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

