---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U234EMJZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEz8MO1FHWf2qF6ovtB7j91X1w0HGBSVhkYsBrYIQn%2FXAiEAw7zHIbnuahCF6VPfnqrazT%2F3h2o0oYYYNL%2Bn065ME%2BUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOwm3WWuFqY4Z1QDLSrcAwblUn7Z8LQRGij9WZ%2B29Chu%2BohOHdGzZhJdYMnCdOfA5LU18%2F%2FjVehXu3wmfWtzhA6jE3RnJ0pcFMdGNSAnqqyyYvQWghiIWK2Xu0H%2FTwNywC0ZXPo1YYdGGa%2Fg%2B9OcUuKrNBkxqSRbSHAKsa7V75lJcc7LRwyNzRtQMWLt4UhoWoJ4sYJv%2BNLaYY%2Fj9DxGtE0ZRrgrTkD5ko6Ol7ErndHDq9ZEaxCHPrds2H6%2Fvn%2Fsbuam3QwMd6W3W6BldglxobBbbbMu3p%2FgfucWAbjVv68Dyy4C3oR8yu%2BzxItlBi31p0puCzj263kR3wa4Fp3kBylG4ZtfhxNfqw2l6B1VbV5D6Dr0drPnS2AmkhwEuqSDF7hngs5xbctt5JDNPMMbNRg24iu8s2bRmgzsygvdUQX072ICkEbWCQYOvF9dW4Xo1DZfMtwXy8geY9ul1mGCqkYH6mvariCJmv0vjIebJHTH%2BO7WQt6D1aXmkTG%2B5W6ehcE%2BQEi7JUby4vIQaYTfGKyyDTSe%2FG8PBSbvH%2FOfgdPeA%2B6FTlvTrEGCa3hiDwQbKKkDRiAVpFXACOT3lawfnyoI8uLdWprdtFQop3%2BF2e6EVEuoiRLPMCo4RMu2nJT%2FM4gpa7O0VgVkWZF%2FMP3zw8kGOqUBkn%2FKBSR354D7QoTQE8fwrdq5ox8ZRVRAsaSWFeIj080Q4nXqqQeggI%2Fmaid%2BgUuqnDGJZsOsIEsLoIhf68NSs45OG7KmDFgb8RyxQtdNJ3B8%2Fm1h52mxv%2FA9IA7l7qVSNz1dIpKGbuGxO0dcJDpXxXpEH%2FiHTiLZrYu%2BXJpiauXNpKf5%2BZUokXZ5HLq0jsjfw5U2Hsfgco7mKCromTabvAW79%2B3x&X-Amz-Signature=6df9fce6fa1f3478668e30cd53bfbe967dcc0017b186c013f56e4c121c28273b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U234EMJZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEz8MO1FHWf2qF6ovtB7j91X1w0HGBSVhkYsBrYIQn%2FXAiEAw7zHIbnuahCF6VPfnqrazT%2F3h2o0oYYYNL%2Bn065ME%2BUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOwm3WWuFqY4Z1QDLSrcAwblUn7Z8LQRGij9WZ%2B29Chu%2BohOHdGzZhJdYMnCdOfA5LU18%2F%2FjVehXu3wmfWtzhA6jE3RnJ0pcFMdGNSAnqqyyYvQWghiIWK2Xu0H%2FTwNywC0ZXPo1YYdGGa%2Fg%2B9OcUuKrNBkxqSRbSHAKsa7V75lJcc7LRwyNzRtQMWLt4UhoWoJ4sYJv%2BNLaYY%2Fj9DxGtE0ZRrgrTkD5ko6Ol7ErndHDq9ZEaxCHPrds2H6%2Fvn%2Fsbuam3QwMd6W3W6BldglxobBbbbMu3p%2FgfucWAbjVv68Dyy4C3oR8yu%2BzxItlBi31p0puCzj263kR3wa4Fp3kBylG4ZtfhxNfqw2l6B1VbV5D6Dr0drPnS2AmkhwEuqSDF7hngs5xbctt5JDNPMMbNRg24iu8s2bRmgzsygvdUQX072ICkEbWCQYOvF9dW4Xo1DZfMtwXy8geY9ul1mGCqkYH6mvariCJmv0vjIebJHTH%2BO7WQt6D1aXmkTG%2B5W6ehcE%2BQEi7JUby4vIQaYTfGKyyDTSe%2FG8PBSbvH%2FOfgdPeA%2B6FTlvTrEGCa3hiDwQbKKkDRiAVpFXACOT3lawfnyoI8uLdWprdtFQop3%2BF2e6EVEuoiRLPMCo4RMu2nJT%2FM4gpa7O0VgVkWZF%2FMP3zw8kGOqUBkn%2FKBSR354D7QoTQE8fwrdq5ox8ZRVRAsaSWFeIj080Q4nXqqQeggI%2Fmaid%2BgUuqnDGJZsOsIEsLoIhf68NSs45OG7KmDFgb8RyxQtdNJ3B8%2Fm1h52mxv%2FA9IA7l7qVSNz1dIpKGbuGxO0dcJDpXxXpEH%2FiHTiLZrYu%2BXJpiauXNpKf5%2BZUokXZ5HLq0jsjfw5U2Hsfgco7mKCromTabvAW79%2B3x&X-Amz-Signature=c5f0e59e12eb5138cb4128ee29bdfa113e46e4eb6a81db308ed29052b7bae5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

