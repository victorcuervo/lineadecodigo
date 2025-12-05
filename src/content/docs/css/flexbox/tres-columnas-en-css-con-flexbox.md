---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGTQUFB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnmf0ao8W0StWMSdHCYKgLYlTOlL0g%2Fp00oPNZqg1usAiEA7r6tg6Q3DggouS8YrF70tv%2FE%2FITWtpkiUdhwrR937Qsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBLQQH6HI%2FNrsdtqZCrcA1%2B2%2FQQ9je44egQI1SIhXENOcvjFq%2BHFNiMh%2BgJAUEAQZ0wi5aNg%2FZjREnQPlhHz2cax7BIxF7Gfdh4rqwhX%2Bqrh%2FCYe8Bt7M3eThXzlufueighdpJY4BqFu2K09j3yIK4aCzAqNLNpYGlTc8VDZpm5Q49TOs2mnBVzjANeu259rEzmpMs7QTHJYY3PlGhlM6HImJpKzKOlpU2R79QMzVAcMT9qaRxlu0zgU3T3dfDCSiK3yeUDJKFTq2s%2FXO6MQDjqAx%2F07MKD69zNjmylsdDjtJMipkZkrSbNb4rAYjsqCSucsZzDHJ2pQv5K%2B83ie4InztxK6VGZEUX%2BEDjuFcQKXzRBsUPQHZf5EaVK1%2ByHc4pVOFFEu59dN3ukkUeOPbx4iKkOw5AmeVYx77%2F8Mkahx2WptZSWoxpRDCV7ULMIIKY5v0Mzmli9BBqRZ%2B4fS%2F%2BXMAtHagRWS7CE%2BXjm5WjwNNGDYQUxKHTuiwesfOXLB0TM1o1VU27Qre1vx3%2B6AXcTtvGOQ7o0y4RPwyKba%2B5ZYRQc%2B7OD0QXcZoty8%2B4ZRHZdKT890fBWDU6KcPPOpW4sD26hkuXm4gG%2FA2fcOgoLVxZZRl5xKM%2FS9jT5U8VT%2B0DZAHPYC8dY7C5tmMKCMyMkGOqUBgFMzUJSPmZp0%2Fz76CqCtL3CcQoy3l0nNdYevRjRVfa%2B1lo3%2FS3PWjn5FQgE8S1tu4gg48VlYmfyCzug7TJVfB0q3Ha2dL%2FBHQKMTAGpkU2Pao%2BXpDFVowEIs8vjxxIyZqpK9uBWy%2BYYeN3aoKXO4xobwbtIypp%2BMO75Azb%2FARuu%2BA4pbrfl%2FbH3ikQ5TiAMdJttGwKKYP3VlOrtpmCxLVTvMGJW4&X-Amz-Signature=6f3304d2eebe2e3f7b32d65b27319dddb62dae35bc08535fa9adbc87cce3a55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGTQUFB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnmf0ao8W0StWMSdHCYKgLYlTOlL0g%2Fp00oPNZqg1usAiEA7r6tg6Q3DggouS8YrF70tv%2FE%2FITWtpkiUdhwrR937Qsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBLQQH6HI%2FNrsdtqZCrcA1%2B2%2FQQ9je44egQI1SIhXENOcvjFq%2BHFNiMh%2BgJAUEAQZ0wi5aNg%2FZjREnQPlhHz2cax7BIxF7Gfdh4rqwhX%2Bqrh%2FCYe8Bt7M3eThXzlufueighdpJY4BqFu2K09j3yIK4aCzAqNLNpYGlTc8VDZpm5Q49TOs2mnBVzjANeu259rEzmpMs7QTHJYY3PlGhlM6HImJpKzKOlpU2R79QMzVAcMT9qaRxlu0zgU3T3dfDCSiK3yeUDJKFTq2s%2FXO6MQDjqAx%2F07MKD69zNjmylsdDjtJMipkZkrSbNb4rAYjsqCSucsZzDHJ2pQv5K%2B83ie4InztxK6VGZEUX%2BEDjuFcQKXzRBsUPQHZf5EaVK1%2ByHc4pVOFFEu59dN3ukkUeOPbx4iKkOw5AmeVYx77%2F8Mkahx2WptZSWoxpRDCV7ULMIIKY5v0Mzmli9BBqRZ%2B4fS%2F%2BXMAtHagRWS7CE%2BXjm5WjwNNGDYQUxKHTuiwesfOXLB0TM1o1VU27Qre1vx3%2B6AXcTtvGOQ7o0y4RPwyKba%2B5ZYRQc%2B7OD0QXcZoty8%2B4ZRHZdKT890fBWDU6KcPPOpW4sD26hkuXm4gG%2FA2fcOgoLVxZZRl5xKM%2FS9jT5U8VT%2B0DZAHPYC8dY7C5tmMKCMyMkGOqUBgFMzUJSPmZp0%2Fz76CqCtL3CcQoy3l0nNdYevRjRVfa%2B1lo3%2FS3PWjn5FQgE8S1tu4gg48VlYmfyCzug7TJVfB0q3Ha2dL%2FBHQKMTAGpkU2Pao%2BXpDFVowEIs8vjxxIyZqpK9uBWy%2BYYeN3aoKXO4xobwbtIypp%2BMO75Azb%2FARuu%2BA4pbrfl%2FbH3ikQ5TiAMdJttGwKKYP3VlOrtpmCxLVTvMGJW4&X-Amz-Signature=412c8d384de7d9515fbe48b0ea671aef77254774c20ed1a61194e63375e38403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

