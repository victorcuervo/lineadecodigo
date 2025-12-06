---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINR3FGH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFx1b94RtqTxFr9EkQzj6M9Gpe3CL43WccCq0fnu60mAiADE6NbdP3z203DWWMME7IV3Jk4k2KTDT1xqt80OE61cir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDZYG9u8O8Jc9S6WaKtwDQUvlVYK3GALeNwd2PFTGsTO%2B6zI7xUw2bdS5PY2eOlvmessiYcIfreFwniGZFoLfLPcbAXl4vQ%2F3X8DtNLhqNtkHCaMrYhS1DsDIfd6Thu2JkujEcXX%2FCvo7cgDjZQPpK7FHDMJEKf6ZVgBV%2FUIAxDnCG8%2BF7DY3RWw6kzfbNJh2SG3Zg4c3lsP0XXqkViQtJcxBTI1CBmyY5q9WsiMIqZSJqHJ0jBoMfXF7FV9e3ihllq%2F4lCO2et5OG7A%2Bv9obWL76vBC6sPaz59bJzmfvc5i0L4rhURW11h2F%2FKdXcUL3BQzuoDTQD6Y7SqdEJTBkxhATXnl1GueCFZ%2FmM1Hen9B7XRtnOYvB8P9h9gTr%2Fc8%2FBcGhOO5HfKduFagh8hqvhy9YOf2pBuMY%2B%2BHd4%2FCaUMCE%2FeOGL%2FuAL1glhKKDJ%2Fmn1r2NGIG6Wpcp%2FXvBxNvQCRJ1tEO8tMx0WcBai5yD%2F8%2FdJy122bupL3EDAft0RDmnBPa3HAxshvcGHNjgSl5SApsNquoXAa8xKEzJG%2FMhcTQMsPtmadUmul8Ql2VnTnPguLiY%2FkmolNAAl%2FTuus4e16GqTA%2FLxiiWAEPSC4XJbY6wIJxqqa09EnMWTohewhnRNt16wqMNjfaPixEw357PyQY6pgEgzZugv1EeQGnOS%2F%2BhAchlus9b1wPUuiL5hoPqdG5gtXFNYX3UZmOglbDRzrKZf9eJJRn6W0prPJqFNymN%2BgK9XpKYLRUVOoSxlEwVau16QB96zzXzLvbgXBSjAQWJ6d7CRHr%2F6L9MG6g2QDtaCfruY44lp6ZwWcprBCRr6Gldm5NKctoMeBNx7kqPorjReVTmElNhq6vhNkHf5pCRDu7U35xZs0Gg&X-Amz-Signature=9e39154e644fdbe3878bcb26f87776921612dcfae085eeb661338a13730f83f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINR3FGH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFx1b94RtqTxFr9EkQzj6M9Gpe3CL43WccCq0fnu60mAiADE6NbdP3z203DWWMME7IV3Jk4k2KTDT1xqt80OE61cir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDZYG9u8O8Jc9S6WaKtwDQUvlVYK3GALeNwd2PFTGsTO%2B6zI7xUw2bdS5PY2eOlvmessiYcIfreFwniGZFoLfLPcbAXl4vQ%2F3X8DtNLhqNtkHCaMrYhS1DsDIfd6Thu2JkujEcXX%2FCvo7cgDjZQPpK7FHDMJEKf6ZVgBV%2FUIAxDnCG8%2BF7DY3RWw6kzfbNJh2SG3Zg4c3lsP0XXqkViQtJcxBTI1CBmyY5q9WsiMIqZSJqHJ0jBoMfXF7FV9e3ihllq%2F4lCO2et5OG7A%2Bv9obWL76vBC6sPaz59bJzmfvc5i0L4rhURW11h2F%2FKdXcUL3BQzuoDTQD6Y7SqdEJTBkxhATXnl1GueCFZ%2FmM1Hen9B7XRtnOYvB8P9h9gTr%2Fc8%2FBcGhOO5HfKduFagh8hqvhy9YOf2pBuMY%2B%2BHd4%2FCaUMCE%2FeOGL%2FuAL1glhKKDJ%2Fmn1r2NGIG6Wpcp%2FXvBxNvQCRJ1tEO8tMx0WcBai5yD%2F8%2FdJy122bupL3EDAft0RDmnBPa3HAxshvcGHNjgSl5SApsNquoXAa8xKEzJG%2FMhcTQMsPtmadUmul8Ql2VnTnPguLiY%2FkmolNAAl%2FTuus4e16GqTA%2FLxiiWAEPSC4XJbY6wIJxqqa09EnMWTohewhnRNt16wqMNjfaPixEw357PyQY6pgEgzZugv1EeQGnOS%2F%2BhAchlus9b1wPUuiL5hoPqdG5gtXFNYX3UZmOglbDRzrKZf9eJJRn6W0prPJqFNymN%2BgK9XpKYLRUVOoSxlEwVau16QB96zzXzLvbgXBSjAQWJ6d7CRHr%2F6L9MG6g2QDtaCfruY44lp6ZwWcprBCRr6Gldm5NKctoMeBNx7kqPorjReVTmElNhq6vhNkHf5pCRDu7U35xZs0Gg&X-Amz-Signature=778c50b8bee6f15bba99afefd46cfb49ca765ae3168088f396976c3546576576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

