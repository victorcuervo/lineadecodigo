---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRGJ62E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXJLyEt44J8Yq9V%2ByTHP7JrhlJz5lFAyiUTXiMubEvtQIhAPwMLJHk6ZCQWSEhSYzzJ0xe7xHU%2F7nGqG%2F9HEPFFYhNKv8DCE8QABoMNjM3NDIzMTgzODA1Igyv4PsOFAZQRpxqItMq3AMvdECm3vGqDztn14ch9vQYXYvKtQpHsBDkXa2rhN7smlf%2FVfB4%2FPzRnTtsdg7Lguwc59oeoNFvs%2BUx2ug0LarKbATa9ZYXTjY06Tc95QXYSfQPhypc3m7HyGUk8WZgGR0QmZeKZDIXRHFyTOuxWGZ27pC7To8uIIO9%2FWysr6APMCBh6llJpwvpf886lDkHbMRTfx0O1D9rsvtoSxlfTTSI4srVIfKWR0TGBaPgc%2FIIZhBQY1Y0oDq4MuyM36CfBMI0qEKr3eQYicZjkh4otMjX0z62xI8cr5oKwPq5U3ismsK%2FmEBAUt8sY8IZtUXMM5zVXkAcsuRjsGk%2Fsk%2F5iSUqR2U4VWo7mBVifqWexXlW1xfqhrFOrXOwQHmHBu7ShMPOXnqMlyT8qytE1U3wZ7pGzacgjOOdrmJxvwMKHgx0P%2FBhdvJZ0%2B0twn0USCb4UxwSRfrCItuupwXxrV5UNApKeXHAkzK43rWYKg%2B%2BCQ44ifRfCC7RpxUYnc1pXDlnWCHaJ2N7jZ0v2UkhOaJiehNEefdtW4snFlsdmi6m%2FuvWWqW5frn9LRUGzgKEjvnAcs9T1VgjtngSYKYTaqzRYKegLV1M7%2FSysCjBgG5IUgqHkYsFruzzEt3e68K8ojChjMjJBjqkASc0CfFEdOrXXbUcwSSUs1P9cqMgvV%2FlwXR3uvWoDFfBXKlmvdjc09wqxMI9zV3b0VRsK21VNXdca0yAy83SB0%2BohaUPARWCAJ1JW5zPfDgUS9HX6nXPNfilDef%2BzMyjwoQdzXlOa3HEFYSnF7aze%2FMX6WOrd2M%2FvTWGa%2Ff3R%2FLffM%2BfxdrTVTgECEDELqvhQMnfjY3fLCXhZKFTIh55HlLaQ%2B2K&X-Amz-Signature=aa204bdff4b4e1bc6f18123cb32e9a2f79cc41db3661d969c393e361b476f37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRGJ62E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXJLyEt44J8Yq9V%2ByTHP7JrhlJz5lFAyiUTXiMubEvtQIhAPwMLJHk6ZCQWSEhSYzzJ0xe7xHU%2F7nGqG%2F9HEPFFYhNKv8DCE8QABoMNjM3NDIzMTgzODA1Igyv4PsOFAZQRpxqItMq3AMvdECm3vGqDztn14ch9vQYXYvKtQpHsBDkXa2rhN7smlf%2FVfB4%2FPzRnTtsdg7Lguwc59oeoNFvs%2BUx2ug0LarKbATa9ZYXTjY06Tc95QXYSfQPhypc3m7HyGUk8WZgGR0QmZeKZDIXRHFyTOuxWGZ27pC7To8uIIO9%2FWysr6APMCBh6llJpwvpf886lDkHbMRTfx0O1D9rsvtoSxlfTTSI4srVIfKWR0TGBaPgc%2FIIZhBQY1Y0oDq4MuyM36CfBMI0qEKr3eQYicZjkh4otMjX0z62xI8cr5oKwPq5U3ismsK%2FmEBAUt8sY8IZtUXMM5zVXkAcsuRjsGk%2Fsk%2F5iSUqR2U4VWo7mBVifqWexXlW1xfqhrFOrXOwQHmHBu7ShMPOXnqMlyT8qytE1U3wZ7pGzacgjOOdrmJxvwMKHgx0P%2FBhdvJZ0%2B0twn0USCb4UxwSRfrCItuupwXxrV5UNApKeXHAkzK43rWYKg%2B%2BCQ44ifRfCC7RpxUYnc1pXDlnWCHaJ2N7jZ0v2UkhOaJiehNEefdtW4snFlsdmi6m%2FuvWWqW5frn9LRUGzgKEjvnAcs9T1VgjtngSYKYTaqzRYKegLV1M7%2FSysCjBgG5IUgqHkYsFruzzEt3e68K8ojChjMjJBjqkASc0CfFEdOrXXbUcwSSUs1P9cqMgvV%2FlwXR3uvWoDFfBXKlmvdjc09wqxMI9zV3b0VRsK21VNXdca0yAy83SB0%2BohaUPARWCAJ1JW5zPfDgUS9HX6nXPNfilDef%2BzMyjwoQdzXlOa3HEFYSnF7aze%2FMX6WOrd2M%2FvTWGa%2Ff3R%2FLffM%2BfxdrTVTgECEDELqvhQMnfjY3fLCXhZKFTIh55HlLaQ%2B2K&X-Amz-Signature=c5ce09c2874ce4ff96db8eb38880767cd958dc376f0a618cdd99b232a51af27a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

