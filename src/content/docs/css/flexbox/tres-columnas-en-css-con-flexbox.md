---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6JA4JGK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSJf8AC945tZP88drJd8VzvadXUEreVknYNTDfomWJdwIgYpiiwlZHxI7WIUMzd2o7xw2QvRFOIxVMl6z0gsMjcpIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJJcsoepov0AYw9NyrcAyGzJHYnD%2Fz292dYb2NBi9gHU%2FMbUx%2BRRObjuJ7TQuHG4tvz%2FbfVN3HHbIdGjgtZQ0LmSdzt%2FGpbR2pVKnwLmyT4ojS6wT7vDji4fllJWfGHMg70HXnjXBH2prWKRlV%2FGmZi5xL65cdyzRpZ5rnJd7uTCjNwhJEe9jV7bg%2BZ7o9gvsoA1tk%2Bcn54APSDBeNNmatMir6Lao7oCEqAgqZuhUOy%2F8O%2BbMoyMxcO72UwO60pdgvp0cBAoxzn1ybOyAOyj2iicwVdVhEMdS3tO2G1ujvLNcuamKT%2BVZaZeVLsmtle5fUzcoV6gG1Xp1vGVJZUsOPTp03rkeQxlrgk10BW2pShI76pLux%2FW6wVV8XgL%2BnDdAwR53WdWndohPxUONRMBHSEwFbna%2B1t%2BEorcE8thpj9hMCj2n33J8XWQF49lZxdtBKdu4GQE918v%2F5Lo9XpyRYhxhg0C3YhwRmO6aY7ktm6yodgAeNvgNy61hW%2FDV1LLMj2cOjpKa26a5n2SARkI7TG1nQo%2FwgX%2BOxhrw6L4D%2B7arZYSmda97eTwpq8OlbjDQm8h%2FhGg%2FV7wEaOvSLo%2BW266hF6oC10IgishrMb0p%2BQM9MeL%2Fv0%2FyZeKJ2BIG7yDR1m%2B3a1utiaOoX%2BMJuZ1ckGOqUB8waIcf2Ma2IEqikyypnr6hw%2F%2FIlWYdxFgJ4d0%2BnNyj8mah1Euu9rekTEBrLWWf1g3fMVZdFytVQaJhkFX21bMyfkcdDelRBxR1NfS1BjYiKj3SVUzdCpTCtIX01lf9XR7onvQrD272ft8%2FpmpcBXaCkWUWzZLykJtMwdo68VWOvY%2BIeMcoqNzsr2Qk3hjde%2Bz%2BvIegYWPXYy5yuJQzvxh3MvVPAw&X-Amz-Signature=2403abcfc2db79bb706193725f6bc32e240a6b9587852d68a7919d5dfe9229c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6JA4JGK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSJf8AC945tZP88drJd8VzvadXUEreVknYNTDfomWJdwIgYpiiwlZHxI7WIUMzd2o7xw2QvRFOIxVMl6z0gsMjcpIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJJcsoepov0AYw9NyrcAyGzJHYnD%2Fz292dYb2NBi9gHU%2FMbUx%2BRRObjuJ7TQuHG4tvz%2FbfVN3HHbIdGjgtZQ0LmSdzt%2FGpbR2pVKnwLmyT4ojS6wT7vDji4fllJWfGHMg70HXnjXBH2prWKRlV%2FGmZi5xL65cdyzRpZ5rnJd7uTCjNwhJEe9jV7bg%2BZ7o9gvsoA1tk%2Bcn54APSDBeNNmatMir6Lao7oCEqAgqZuhUOy%2F8O%2BbMoyMxcO72UwO60pdgvp0cBAoxzn1ybOyAOyj2iicwVdVhEMdS3tO2G1ujvLNcuamKT%2BVZaZeVLsmtle5fUzcoV6gG1Xp1vGVJZUsOPTp03rkeQxlrgk10BW2pShI76pLux%2FW6wVV8XgL%2BnDdAwR53WdWndohPxUONRMBHSEwFbna%2B1t%2BEorcE8thpj9hMCj2n33J8XWQF49lZxdtBKdu4GQE918v%2F5Lo9XpyRYhxhg0C3YhwRmO6aY7ktm6yodgAeNvgNy61hW%2FDV1LLMj2cOjpKa26a5n2SARkI7TG1nQo%2FwgX%2BOxhrw6L4D%2B7arZYSmda97eTwpq8OlbjDQm8h%2FhGg%2FV7wEaOvSLo%2BW266hF6oC10IgishrMb0p%2BQM9MeL%2Fv0%2FyZeKJ2BIG7yDR1m%2B3a1utiaOoX%2BMJuZ1ckGOqUB8waIcf2Ma2IEqikyypnr6hw%2F%2FIlWYdxFgJ4d0%2BnNyj8mah1Euu9rekTEBrLWWf1g3fMVZdFytVQaJhkFX21bMyfkcdDelRBxR1NfS1BjYiKj3SVUzdCpTCtIX01lf9XR7onvQrD272ft8%2FpmpcBXaCkWUWzZLykJtMwdo68VWOvY%2BIeMcoqNzsr2Qk3hjde%2Bz%2BvIegYWPXYy5yuJQzvxh3MvVPAw&X-Amz-Signature=b50da63c15b8804200d952ec852033d3884a26b1b8f44077c55f3671dc4ce9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

