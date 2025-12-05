---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMMGI7BQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOK8d6NpU0yzI6dzIRzgzod3hytFclhy1B39hEoILjlAiBUz013qrsf6inxVCKXANDOc4k1D5E9%2FH1iUn4Cr89meyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2T9RHJSVTVQPkaWkKtwD%2B0u1aXleqC2jKKa2sY%2FaMgeghR1lqfnyVcTPyJmvBGxw0SDF8eJB6CsYVu0vTFQmd4KnEpKqxGo1C1porb0%2Bc%2BdYcgu%2Fe%2F9lgTIV7NZuX1VtWQKd0paMWkCUkcOg%2F3jBtEam9gAVcz0RSgNTSRl71ZD7ax2w3fnhhgzuc0yKHHuUp1I7jthnfQzhbJqV7SL9VfeojwiXdvK92MCbtXn4TgQ8ced%2FV3qM3HatNYk3gB%2FQ6pGDQyIc82efqCHs4WqQ8GMwHIlI8omLGqVdHtdJRswWgTCPRVp0nZUIVNIIkthJj3r4kjeGJlCBBADT0Vn6Q4D8QDhu5krfYl8Bj%2FgE1M0ysA4HIeOUHwEu6msT%2FA4raOu5rwri8nTkOYCmo6UYq%2BYyXSSlPkx%2FbP7tL%2Fvqxkl994AT7Xm4XbCko10Gi57R4ZGgDKAJLh4%2FH%2FXQnqfsIY7x9dhxWXNh1vfrRNn22KXFogNY1r%2Bs7G1rOuYdb1SF%2B4YJQ8L2CdGMqJbv6XoaHDu1GzxF8Kvti7Ln%2FeVpfmGH3lUea%2FJPMLry46VQnK8%2F5Ljmu6jUIpBcKeqMUL0DA8QYSJXOOiQzqcNMgqJpeF4G%2BI9klfVfoz%2FhIqJqBnx%2Bhjas8GvrtieyaJ4wisbNyQY6pgGPIcoyDXkP8QzSJPz56SsoPFwcXbeIHYEgSh%2F%2FGpTcEUAnFBnex55QuAghLCPz5KoaUmqPNNo3w0JrjFSN%2F45CmhV0KsiqzgoWFe9Zzv9TWwc5Oq4CnDxkGWkCsQTeEncUyerggAqyVP3hA7zzJDh1BnWFL4KH8nF3imzFlHWVfXnnCmDypWJrmOenW1oEJUsPqRZgYzjFOXTJpqcKHTPpALsD%2BGqi&X-Amz-Signature=b4879fec9a73b16ac07a019c7e210a390f145c2c8a07c6629ef19859ba9dabdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMMGI7BQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOK8d6NpU0yzI6dzIRzgzod3hytFclhy1B39hEoILjlAiBUz013qrsf6inxVCKXANDOc4k1D5E9%2FH1iUn4Cr89meyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2T9RHJSVTVQPkaWkKtwD%2B0u1aXleqC2jKKa2sY%2FaMgeghR1lqfnyVcTPyJmvBGxw0SDF8eJB6CsYVu0vTFQmd4KnEpKqxGo1C1porb0%2Bc%2BdYcgu%2Fe%2F9lgTIV7NZuX1VtWQKd0paMWkCUkcOg%2F3jBtEam9gAVcz0RSgNTSRl71ZD7ax2w3fnhhgzuc0yKHHuUp1I7jthnfQzhbJqV7SL9VfeojwiXdvK92MCbtXn4TgQ8ced%2FV3qM3HatNYk3gB%2FQ6pGDQyIc82efqCHs4WqQ8GMwHIlI8omLGqVdHtdJRswWgTCPRVp0nZUIVNIIkthJj3r4kjeGJlCBBADT0Vn6Q4D8QDhu5krfYl8Bj%2FgE1M0ysA4HIeOUHwEu6msT%2FA4raOu5rwri8nTkOYCmo6UYq%2BYyXSSlPkx%2FbP7tL%2Fvqxkl994AT7Xm4XbCko10Gi57R4ZGgDKAJLh4%2FH%2FXQnqfsIY7x9dhxWXNh1vfrRNn22KXFogNY1r%2Bs7G1rOuYdb1SF%2B4YJQ8L2CdGMqJbv6XoaHDu1GzxF8Kvti7Ln%2FeVpfmGH3lUea%2FJPMLry46VQnK8%2F5Ljmu6jUIpBcKeqMUL0DA8QYSJXOOiQzqcNMgqJpeF4G%2BI9klfVfoz%2FhIqJqBnx%2Bhjas8GvrtieyaJ4wisbNyQY6pgGPIcoyDXkP8QzSJPz56SsoPFwcXbeIHYEgSh%2F%2FGpTcEUAnFBnex55QuAghLCPz5KoaUmqPNNo3w0JrjFSN%2F45CmhV0KsiqzgoWFe9Zzv9TWwc5Oq4CnDxkGWkCsQTeEncUyerggAqyVP3hA7zzJDh1BnWFL4KH8nF3imzFlHWVfXnnCmDypWJrmOenW1oEJUsPqRZgYzjFOXTJpqcKHTPpALsD%2BGqi&X-Amz-Signature=f01e8ccc4e80d97a5f26ec40dea0ef2b98d56217be1cca45e22a51021af78d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

