---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGG34JJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkvmX5kRwHUqVtZEnd9agz57t42TKcBmZbiNdIWEa6dAiEAwQG6sVMBchNfG%2FT%2FYGZE7Jmb25ozMP3iExTVhyE3yHsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHA4eLsRaC3w%2FABxqircA5CLjfRdJCNcJhDkRxgMt%2FXXXkljpktJ0MZ3JrfyqHAo64NMf2a5%2BckFMeaJkNK5BMy264oZlIybdSIIkJhNKGwiZDcZKNYVMlQWbtZwbITraj5WlBE4uM8VHomBfs0RB9jXv33pec9rP0TIrEXVyk5HIoDi8Gmw6%2B0dT3Py66OGNJ9zf0E6ntWcgplCk%2FUq2Y1Gj%2FnvwwKTKl8SEwSyeA%2FP8YBr7TkZez2r9kW2EyqrBcmwM8i63lBcMP6mQTQrBYhlYqRjwRNHhfKFfG%2FhwuBhOab0l%2BYbqRRe59C64fBN5p1QBT5uUf0ys%2BpW%2BZH8iE2Y8m4LChkiCsnJ8N7suS7qf6Gfs9AFdggEAmIwcz1XdXFhmGbfnaN5GXcJcr%2FnBafsK9ZtEX0ntoxKrY3M8mcxz%2BaHLacKLFhgEhZQ10QGEE%2B3sTjOBzrXjZL%2BPofF6gOvq3mf7wa5jdxNjO8oZAVzmQwk1phvsLANV4lOzHWx12pzxcwCyfX8IiV4Fbfu0R9A3BJ7lJz0lTWXJtfnyxY2XUTDedRZQNEQ37atoWjPrIIeN%2Fkn%2F5uAOWj8wwXNBoFeR9YUOofY1vN3rnOnraeGSp6uEulNqgxCB%2FtVprGrIJPPZBNV2vY3Rv6DMP%2Bm0MkGOqUBe4YigRf1%2BaBm8x8ptba4%2Bcz0h%2Fk6fZGJOaqBTpI3ar5aNbAEmWGOC0q%2FrpzMHqQVTNN3fIGTQ1wCONzLHiPlLf78c8pNoBxXrlHRmYg1p2luTZgDpeSGz%2BlRH95UA9smW%2FU600Wfg8q3Zjfw8A8EXNncPC2d6JkX8VXxCqTbCDbs66OlLRPp6C3OYl1TeziB%2B7U4XqOq6WX4P1G9Vc5CMUJIGl4e&X-Amz-Signature=ea6676b297384a8f7a4659c196542e5c3529ebf9fcfbc4504e8d73d78add6573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGG34JJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkvmX5kRwHUqVtZEnd9agz57t42TKcBmZbiNdIWEa6dAiEAwQG6sVMBchNfG%2FT%2FYGZE7Jmb25ozMP3iExTVhyE3yHsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHA4eLsRaC3w%2FABxqircA5CLjfRdJCNcJhDkRxgMt%2FXXXkljpktJ0MZ3JrfyqHAo64NMf2a5%2BckFMeaJkNK5BMy264oZlIybdSIIkJhNKGwiZDcZKNYVMlQWbtZwbITraj5WlBE4uM8VHomBfs0RB9jXv33pec9rP0TIrEXVyk5HIoDi8Gmw6%2B0dT3Py66OGNJ9zf0E6ntWcgplCk%2FUq2Y1Gj%2FnvwwKTKl8SEwSyeA%2FP8YBr7TkZez2r9kW2EyqrBcmwM8i63lBcMP6mQTQrBYhlYqRjwRNHhfKFfG%2FhwuBhOab0l%2BYbqRRe59C64fBN5p1QBT5uUf0ys%2BpW%2BZH8iE2Y8m4LChkiCsnJ8N7suS7qf6Gfs9AFdggEAmIwcz1XdXFhmGbfnaN5GXcJcr%2FnBafsK9ZtEX0ntoxKrY3M8mcxz%2BaHLacKLFhgEhZQ10QGEE%2B3sTjOBzrXjZL%2BPofF6gOvq3mf7wa5jdxNjO8oZAVzmQwk1phvsLANV4lOzHWx12pzxcwCyfX8IiV4Fbfu0R9A3BJ7lJz0lTWXJtfnyxY2XUTDedRZQNEQ37atoWjPrIIeN%2Fkn%2F5uAOWj8wwXNBoFeR9YUOofY1vN3rnOnraeGSp6uEulNqgxCB%2FtVprGrIJPPZBNV2vY3Rv6DMP%2Bm0MkGOqUBe4YigRf1%2BaBm8x8ptba4%2Bcz0h%2Fk6fZGJOaqBTpI3ar5aNbAEmWGOC0q%2FrpzMHqQVTNN3fIGTQ1wCONzLHiPlLf78c8pNoBxXrlHRmYg1p2luTZgDpeSGz%2BlRH95UA9smW%2FU600Wfg8q3Zjfw8A8EXNncPC2d6JkX8VXxCqTbCDbs66OlLRPp6C3OYl1TeziB%2B7U4XqOq6WX4P1G9Vc5CMUJIGl4e&X-Amz-Signature=46714851140e43a59375dd8a1690004e9ba4c67bb58ad0708e739a5f634de2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

