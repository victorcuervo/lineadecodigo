---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4P3AQK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCFuT2swaDOKfFcWeFxrGHs0M%2Bs2U5W82%2FFsxN30PeKlgIgRYs%2Fdu7aGTg9wtGNX10OlOezFYfYeqMSVDwExjQ4W58q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKl3lpoD16XBrXLLiCrcAyPIBMe33dkCNr5sk%2BSCDAKZRuxmgT%2FyW4y3VABfCaOcR%2F4uKAeONv0o52C%2FLXQZ2w99m9etwIQ%2BismmogUzptYohhIYwm4ZyW86QUhmxn0Exovwd3Gu8HP%2FZoDdkSdlAO5GNj0DskHjvfEUwCBaUq%2BZhBEpwO6Fu4p0zAf1vssuHWZMiIYiE8W86QeejGKgtd%2BSxG%2FW%2F1lg8OiUqiz76AsIfOxQlD5KmL0XPNuHyQXuq8PQYA1Pjfb%2BW2lK%2BX8qIzcAP5aSh1aBgEb87n%2BbIHXzAoMd3RTyv0LxmFrZsl7%2BhWAGzLjld7%2F1acHCmd9UfdKlJbglC2lEaUgucelxZq%2F%2FrcwOARyFIG2aUUPS1OI3YTBp5BmO756q%2B3mxYNbCARU%2B0H5XlpSQwwryCBkyq6H%2BMhiCYQsWdN33C4LTaCLI1W%2FNqGDrCNGKljiAYBdn0L%2Fn6CbxXFDN6t%2F0USoLQbZZiyjwlMx271uUJMw6nqjDvOxgk3iVbZYTIDRNai2RQ0SsAGSN%2BqmF9EkeNjNS0h8cOfJYtSqKT3avSBC%2BkzK7ua6SRHC66MET%2FpGHhOXZIrTE41fhgJCIcgmlhmjtZ%2FR7UbxejH%2B50PWOADZWEmUoM3FkJTJeNjJUf4aIMI6%2FxskGOqUBw9vEf%2BoouOD0P8NYRFMHYt11KXFytZEgM%2FyftukexmnoPIPsTKIso3ToUQDzd%2FLvwuj5bQSv2PMVFmT4FdWFvoXfminP6yy157b%2F72KJOlYDFGYkxg%2BEuzXLpYZzPHyPKLvtUiN%2FNxRw9zeutHIM0NIpjXCKChAYPvO0CKeGYvJf5KCn14OXmWeXne4ZSBaEqz7SHHGC%2F%2BN%2BO71gGX5hVB%2BIKzRh&X-Amz-Signature=8e9828648f5c1e9488febbecfdb5cc78e5256a18bb0cb0f3fe2824df611cd226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4P3AQK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCFuT2swaDOKfFcWeFxrGHs0M%2Bs2U5W82%2FFsxN30PeKlgIgRYs%2Fdu7aGTg9wtGNX10OlOezFYfYeqMSVDwExjQ4W58q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKl3lpoD16XBrXLLiCrcAyPIBMe33dkCNr5sk%2BSCDAKZRuxmgT%2FyW4y3VABfCaOcR%2F4uKAeONv0o52C%2FLXQZ2w99m9etwIQ%2BismmogUzptYohhIYwm4ZyW86QUhmxn0Exovwd3Gu8HP%2FZoDdkSdlAO5GNj0DskHjvfEUwCBaUq%2BZhBEpwO6Fu4p0zAf1vssuHWZMiIYiE8W86QeejGKgtd%2BSxG%2FW%2F1lg8OiUqiz76AsIfOxQlD5KmL0XPNuHyQXuq8PQYA1Pjfb%2BW2lK%2BX8qIzcAP5aSh1aBgEb87n%2BbIHXzAoMd3RTyv0LxmFrZsl7%2BhWAGzLjld7%2F1acHCmd9UfdKlJbglC2lEaUgucelxZq%2F%2FrcwOARyFIG2aUUPS1OI3YTBp5BmO756q%2B3mxYNbCARU%2B0H5XlpSQwwryCBkyq6H%2BMhiCYQsWdN33C4LTaCLI1W%2FNqGDrCNGKljiAYBdn0L%2Fn6CbxXFDN6t%2F0USoLQbZZiyjwlMx271uUJMw6nqjDvOxgk3iVbZYTIDRNai2RQ0SsAGSN%2BqmF9EkeNjNS0h8cOfJYtSqKT3avSBC%2BkzK7ua6SRHC66MET%2FpGHhOXZIrTE41fhgJCIcgmlhmjtZ%2FR7UbxejH%2B50PWOADZWEmUoM3FkJTJeNjJUf4aIMI6%2FxskGOqUBw9vEf%2BoouOD0P8NYRFMHYt11KXFytZEgM%2FyftukexmnoPIPsTKIso3ToUQDzd%2FLvwuj5bQSv2PMVFmT4FdWFvoXfminP6yy157b%2F72KJOlYDFGYkxg%2BEuzXLpYZzPHyPKLvtUiN%2FNxRw9zeutHIM0NIpjXCKChAYPvO0CKeGYvJf5KCn14OXmWeXne4ZSBaEqz7SHHGC%2F%2BN%2BO71gGX5hVB%2BIKzRh&X-Amz-Signature=d1fac04291d098e4dae5b78378e3b4dfce2864a11096e8a71e4778faa94c9fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

