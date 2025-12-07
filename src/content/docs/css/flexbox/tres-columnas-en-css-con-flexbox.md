---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4BF5D2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4RhuYFPKqXh%2FxGZgZyjqtzR1Cay%2FhLGHSQg8iqJ50EAiBL%2BIlawYjQfauNK0S0Tnc7rwM6MYyn3nV0jnO2ieG%2BkCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdF%2BzV8x8IvXOSy2uKtwDd7u8Qs%2Ba88T7nZXmHtKNxCR9avdaJsufP0wtc5mjPpAISJDIYRjB4mhZBX%2BM5YRYPjm2b4fMP8YdogZPz80758jC3ByqGkqVTTV6kIPGzkhv5RHskXiprpIqbJbRpkpQShxaiBEudKQVMW9wCW68UO9fveEV1j2cqzf%2FixQlYV8PVIa%2FHY4%2Fa3ZNY57imQ18ldmQvV9CtIDZOwkE8Yh6MY4ttZFlanbA1ZNLYZ%2FZvcYjIdAEX6xareGarl9tPmaAzrNrfgxsXVGmMGVxtkSJ9WhK4HT%2BKawPYxqdngVRHA9meDwy8YoY8cWLXXcmcAbv0F%2FF8TWsA3ShEkRb6%2Fs5NmQylzOYadHN0UM6w77oAmW9FSPcMFOWRbmYC4QIQr57tDMLqu1%2BI8Cip4WV8hLQL9F4pC6ocb6w9xH1sJ%2FTaMY6wQjkhnHz2KoAFn3En%2BxhgDAu4kU8bVX39b%2FhxQO%2BCPpltLgoF9ghVK%2BQAuuIZLGIVfzIAqA3ID4xYr24i1P4kqeHFOkfeF7x0asFEPMt5vbHUK7LG5w%2F4PEYgbnxKh22GJEtfXbvu3dM7DfK15SQfeh7WzYbynhPUmQxK44q3%2BoNkroQOkyqfc5ZJXIULtZiEqL9PjRzzcgDu1wwrrPWyQY6pgHEffMvbolyhgo9COhZvYFz40fLPtk22eu0h00RaP1%2F2uOxYkIHmVNUMqfTR09Mk%2FyGQ%2F4DdSKdpMNS9NeLJ69MudfvLKXW%2B%2BVqrJfRPZg%2F%2BE8DhWU7pBIyfoHypEYdAbfmEOogVuUGO9Gpnp2YAabuyqlBW%2FF5QXa0noVbNK0UTJHwH%2FAUt4rVlYWYdbGgpmBASENX5eM3sWeCv%2B1bImzCBeNuRwkD&X-Amz-Signature=d487b186c02e90abf29a5a9964adc600556410c4f7396ceeb4d071854de58836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4BF5D2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4RhuYFPKqXh%2FxGZgZyjqtzR1Cay%2FhLGHSQg8iqJ50EAiBL%2BIlawYjQfauNK0S0Tnc7rwM6MYyn3nV0jnO2ieG%2BkCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdF%2BzV8x8IvXOSy2uKtwDd7u8Qs%2Ba88T7nZXmHtKNxCR9avdaJsufP0wtc5mjPpAISJDIYRjB4mhZBX%2BM5YRYPjm2b4fMP8YdogZPz80758jC3ByqGkqVTTV6kIPGzkhv5RHskXiprpIqbJbRpkpQShxaiBEudKQVMW9wCW68UO9fveEV1j2cqzf%2FixQlYV8PVIa%2FHY4%2Fa3ZNY57imQ18ldmQvV9CtIDZOwkE8Yh6MY4ttZFlanbA1ZNLYZ%2FZvcYjIdAEX6xareGarl9tPmaAzrNrfgxsXVGmMGVxtkSJ9WhK4HT%2BKawPYxqdngVRHA9meDwy8YoY8cWLXXcmcAbv0F%2FF8TWsA3ShEkRb6%2Fs5NmQylzOYadHN0UM6w77oAmW9FSPcMFOWRbmYC4QIQr57tDMLqu1%2BI8Cip4WV8hLQL9F4pC6ocb6w9xH1sJ%2FTaMY6wQjkhnHz2KoAFn3En%2BxhgDAu4kU8bVX39b%2FhxQO%2BCPpltLgoF9ghVK%2BQAuuIZLGIVfzIAqA3ID4xYr24i1P4kqeHFOkfeF7x0asFEPMt5vbHUK7LG5w%2F4PEYgbnxKh22GJEtfXbvu3dM7DfK15SQfeh7WzYbynhPUmQxK44q3%2BoNkroQOkyqfc5ZJXIULtZiEqL9PjRzzcgDu1wwrrPWyQY6pgHEffMvbolyhgo9COhZvYFz40fLPtk22eu0h00RaP1%2F2uOxYkIHmVNUMqfTR09Mk%2FyGQ%2F4DdSKdpMNS9NeLJ69MudfvLKXW%2B%2BVqrJfRPZg%2F%2BE8DhWU7pBIyfoHypEYdAbfmEOogVuUGO9Gpnp2YAabuyqlBW%2FF5QXa0noVbNK0UTJHwH%2FAUt4rVlYWYdbGgpmBASENX5eM3sWeCv%2B1bImzCBeNuRwkD&X-Amz-Signature=97dbb28a55991a9f917e6994d78c73ae1ac7c8fb0b4ed18f68a2a4261a914300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

