---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTMZYBUK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCXRHKY7PbsTdRA6eY39Bz6FU7RihXilBENDqpLFWZDAAIhAJjut%2Bh1nwdPxcUkWFimXNqpbGollB15r2LdqaTlN8P%2BKv8DCC0QABoMNjM3NDIzMTgzODA1IgwSOQwL2tHLXPM5I%2B0q3ANakbtmLdAiBE5UMVa4%2BnitfEZRvsnwPHN9d4VrdgycvQONApZKthhBqxak8Q3%2BlBqZS2eYl3LDtLYcvt0PXQtAAfj%2FM69tBK%2B36G46ZcktnIujzcPqNUSRE4rGjTdQWzJGGXzxG9mw%2BXB0QM2cVzRCGHOfmy7osUnM8teYB6vnF%2ByILCf3e8gCsjmbtQ36iYkpaSEKOIORSVDIf%2BGBkl7QwfdYx6ritML%2BOzU62CeMw7bKGOvUHrg1AhEhtrzadRGdVi4kHaZ5B0sDPnrQRxxAHHEbpFi8S74Ck%2BXAe8HabeKOSs3Wr23r%2BwrITawjLypTyJgazWUP9t1hUqbNIcXSxBN%2BXqpu7uJuy8mcDnTr5cPDBs%2BofuWd8Q1WOtmc2mza%2BEx0CrIGVkIoUJCGj37LYggXmXgZim%2BO9mJpiJS03aAw2H%2FQAclZ0Xg%2BwfSQMmPEN1WXpq9l3nTtnoswUWGlOObEwrp4u50Q3CLeqfmvu7oAIVHWhqwLuwMhGGXa6w4F9%2BWiiA0KN%2Fq%2FncjDa2T2HsabpYCEFKUunz62n6rBngom6BQHo97EY9QtXLw8byDW6CiN4VRMjGCIvqerxsw1lrOdlmvCryVGJFMCdjfAhK7UgLvYFR71JO52ODDDzMDJBjqkASpNrT4H0%2F4HqoD4jsyyUu%2ByPNLlEXVg6wjqa%2BiygVeZAZZ4mlCNaxzCUWj%2FtHc9IBQhCDDtyQqnfjmHAdxeup3ym5o8b9%2FpwcEfow5KHEPRoTSYOgte7As4ZNxzRv9JUWKWWtZguI8JSEaf%2FALWiqQhiPEcJ5rMh9WiLYTdPYj1Pgez1AmYr%2B9tfToJsKPlOFT948JqiWvntnsTpCgNKPquoxzU&X-Amz-Signature=00b503c244c9d948068fc814a34f4f2c601c5db8a104e99883f4802f929e64b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTMZYBUK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCXRHKY7PbsTdRA6eY39Bz6FU7RihXilBENDqpLFWZDAAIhAJjut%2Bh1nwdPxcUkWFimXNqpbGollB15r2LdqaTlN8P%2BKv8DCC0QABoMNjM3NDIzMTgzODA1IgwSOQwL2tHLXPM5I%2B0q3ANakbtmLdAiBE5UMVa4%2BnitfEZRvsnwPHN9d4VrdgycvQONApZKthhBqxak8Q3%2BlBqZS2eYl3LDtLYcvt0PXQtAAfj%2FM69tBK%2B36G46ZcktnIujzcPqNUSRE4rGjTdQWzJGGXzxG9mw%2BXB0QM2cVzRCGHOfmy7osUnM8teYB6vnF%2ByILCf3e8gCsjmbtQ36iYkpaSEKOIORSVDIf%2BGBkl7QwfdYx6ritML%2BOzU62CeMw7bKGOvUHrg1AhEhtrzadRGdVi4kHaZ5B0sDPnrQRxxAHHEbpFi8S74Ck%2BXAe8HabeKOSs3Wr23r%2BwrITawjLypTyJgazWUP9t1hUqbNIcXSxBN%2BXqpu7uJuy8mcDnTr5cPDBs%2BofuWd8Q1WOtmc2mza%2BEx0CrIGVkIoUJCGj37LYggXmXgZim%2BO9mJpiJS03aAw2H%2FQAclZ0Xg%2BwfSQMmPEN1WXpq9l3nTtnoswUWGlOObEwrp4u50Q3CLeqfmvu7oAIVHWhqwLuwMhGGXa6w4F9%2BWiiA0KN%2Fq%2FncjDa2T2HsabpYCEFKUunz62n6rBngom6BQHo97EY9QtXLw8byDW6CiN4VRMjGCIvqerxsw1lrOdlmvCryVGJFMCdjfAhK7UgLvYFR71JO52ODDDzMDJBjqkASpNrT4H0%2F4HqoD4jsyyUu%2ByPNLlEXVg6wjqa%2BiygVeZAZZ4mlCNaxzCUWj%2FtHc9IBQhCDDtyQqnfjmHAdxeup3ym5o8b9%2FpwcEfow5KHEPRoTSYOgte7As4ZNxzRv9JUWKWWtZguI8JSEaf%2FALWiqQhiPEcJ5rMh9WiLYTdPYj1Pgez1AmYr%2B9tfToJsKPlOFT948JqiWvntnsTpCgNKPquoxzU&X-Amz-Signature=d5f7f5d43672bd1abf6e053d55ec094c71fabd6da622e9cbd0cbbe5541a58818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

