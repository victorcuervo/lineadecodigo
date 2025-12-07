---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNNTSG5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhIbdm0hv7wn80PF5n6rP4wg%2F%2FPZ8epXWuamEwh35VdAiBetUDDVNTZK9NT%2Bjg2Iqc2s6k5CDvOx3AzBwkb6nb%2FLSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtA%2Bs1JQfQzHfeflPKtwDyU1FCcN8QV33hBE9KLaTCuo1Q2LhtxpevX16beWGvTVu2K4dc8bzkSqjHCHI28rnymw6ZlSsovCs4OlK1PKp0qu0oB%2B5Dux4OpsApJiffVmQVKtdifwrXOuliDf9khadfxjUTEQ8vJ9fys5N2801FeMsNM%2F8PMJhRtE%2FeRp1w4dPpJKMRNOIjMyf0JyjmgWH1fHDqd09O%2FxP5euv3oWs1y2DeZ%2FG50M0zYalR73BDiRKwJ3lGhxMQ%2BnCcHktei3ZZPTSEsKuNGFwhvkbit3OkG3CbEARlbOb6NZXdTNKBcwft24oB4r5ffznH%2FWDkSjkefwA1WOA2%2FQkTZSqMQsHfgxJ2DJz0JtY5S%2F5AtURI%2ByasnhAYOsZop%2BzV7qYfz4umCS%2FGk1vSiDYMmJx5R7Dm8LHhwiLmLUmSa1q1V8lRUpxEDkgCQgAjD3908Y14o9j4J0%2FDE%2BHkppiYbUabcPY43GnmBdOHdoywFRntjyO2mFLqScOH%2BdCWfkYjnPGDu0GgbAy3x8ebE3nSfjB4T4aVVAy5Npvm2uqRnV4MXsi8eK8HRvd8yJlz%2BwtwoWrliow%2FZvYRd9VLPuelPFSlTZrS85gcAOPL6k%2BlNull2%2BFD1qtqBa3Yeai5iWXOlgwo6HUyQY6pgEGZAx8LJ7mHYxU86sleJqdI7yeDoQy9c5%2B5X2cNSe9ikEQXBMjAfJZkIQrf8yyq%2FhPUhGeCPUMpPjAk%2BTslzEckLJCWevfP6%2ByLE%2BalUJHxROvIhWi%2BCfiw6aSbhdmv4sUg2hewLFzUf0IkIPFJcnad5eRuvyms7yE3PgCCf9m1uyySt402%2BgAkkY5ZwivmkfEanXS8KBYatD4b1hWEUvt71tCFcZE&X-Amz-Signature=5bffb0ec6f1ba271d05a6509d0a8de5f3960dc3f843cdee69bd6e7861c974ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNNTSG5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhIbdm0hv7wn80PF5n6rP4wg%2F%2FPZ8epXWuamEwh35VdAiBetUDDVNTZK9NT%2Bjg2Iqc2s6k5CDvOx3AzBwkb6nb%2FLSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtA%2Bs1JQfQzHfeflPKtwDyU1FCcN8QV33hBE9KLaTCuo1Q2LhtxpevX16beWGvTVu2K4dc8bzkSqjHCHI28rnymw6ZlSsovCs4OlK1PKp0qu0oB%2B5Dux4OpsApJiffVmQVKtdifwrXOuliDf9khadfxjUTEQ8vJ9fys5N2801FeMsNM%2F8PMJhRtE%2FeRp1w4dPpJKMRNOIjMyf0JyjmgWH1fHDqd09O%2FxP5euv3oWs1y2DeZ%2FG50M0zYalR73BDiRKwJ3lGhxMQ%2BnCcHktei3ZZPTSEsKuNGFwhvkbit3OkG3CbEARlbOb6NZXdTNKBcwft24oB4r5ffznH%2FWDkSjkefwA1WOA2%2FQkTZSqMQsHfgxJ2DJz0JtY5S%2F5AtURI%2ByasnhAYOsZop%2BzV7qYfz4umCS%2FGk1vSiDYMmJx5R7Dm8LHhwiLmLUmSa1q1V8lRUpxEDkgCQgAjD3908Y14o9j4J0%2FDE%2BHkppiYbUabcPY43GnmBdOHdoywFRntjyO2mFLqScOH%2BdCWfkYjnPGDu0GgbAy3x8ebE3nSfjB4T4aVVAy5Npvm2uqRnV4MXsi8eK8HRvd8yJlz%2BwtwoWrliow%2FZvYRd9VLPuelPFSlTZrS85gcAOPL6k%2BlNull2%2BFD1qtqBa3Yeai5iWXOlgwo6HUyQY6pgEGZAx8LJ7mHYxU86sleJqdI7yeDoQy9c5%2B5X2cNSe9ikEQXBMjAfJZkIQrf8yyq%2FhPUhGeCPUMpPjAk%2BTslzEckLJCWevfP6%2ByLE%2BalUJHxROvIhWi%2BCfiw6aSbhdmv4sUg2hewLFzUf0IkIPFJcnad5eRuvyms7yE3PgCCf9m1uyySt402%2BgAkkY5ZwivmkfEanXS8KBYatD4b1hWEUvt71tCFcZE&X-Amz-Signature=df865803821275ead19a889213dd2ba3c54b0d29d0ca742c1adab0b743af4a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

