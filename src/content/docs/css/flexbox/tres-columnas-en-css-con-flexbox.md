---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCTLWBVE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD4oaDFakdgYYQIg%2B3P8f9jJtx01tCsaZsOcB9PSKTHAiB29TtBmlKPdOw9QoLSaOgbIdmZTh%2FQ3FM73lIDCUSq1CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwrOFPAovsKYqxliGKtwDYeB8gTF3ZW8psypaf%2F2Ow4YtkHnw1YQxxeczDb1cHHMAEbUEZYmLVPqry873z%2FnO6rMqRauwhBqvcdxN38SjU%2Fim6D60DMxuyeZ6Wboh9h2nSFA9d8tSwP%2BahBz5gEK%2FfrCeXoMNMyFev3ARMWPktt2hbzNZ9JSNxT2v%2FvX84pX7I3e%2BwhufZ98mb%2BSC%2F3lEivZ9okxjwebfW9h%2FxEHEpgAkMeSxCrE%2FPycxtYxdYxKQEl7zmdVv7ao4ov0ibf9EPMsZ2tqAHOk6INwCGCAd07MVlMouqC8MBKj7e%2B95x1V7s7nyzMMGRCBMq7N7RI%2BuMpBSx4n1XdSLddz53WJdKwW1FGTp59XS3oYCnzC%2F2vhYPlf7F0kemMNklMoGCGXUbbXM7gSMO0m%2F%2F94LCxBTYgPoIiZbL3xnOLDQn9416qIKDdn%2FQJK8mfrD9C8qm7fuHti4coXAZfmB3xDbEdEkhQ9UYzfynaaXnWQH4yJ%2F8FSRM%2Fhh28i852xR6ijrCqKGZF3Hh16GTfj9ZlE26EEsJedB5sA7nRhpN2axlYjiDYbExYjhdReFCuWzERLN2KYlhigkVNp7UjjpXzmCZV%2FgseTQk007k0JBQCpDK46B63TWACFLYExz5Iq9CgUwwo%2FbyQY6pgFL40szfUcEeHNxm8Crdtfw1KsBYiQ4RL%2FyAURnk1XughMwA%2B%2BqZotvSBr3oJxHCd2xaalQSUAN0qWd3%2B3Qp3GUKWwwlrPKdEgaC32gUBr10PLWYEuqhXm%2Bbf8lcr0d4otKoUB6qAJlWtYGLH7ByB5RQV3ZBlJDauZBLuFMQElBVdK%2FG07vkHYE4BoJ2xdppjHLgGjXSZT0Bjh8%2FUKhpC18RK27zxqk&X-Amz-Signature=d7203fe323a1e60dad85289d62f21b28fc8e8fc9d6a01b9770c2ffbb51616529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCTLWBVE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD4oaDFakdgYYQIg%2B3P8f9jJtx01tCsaZsOcB9PSKTHAiB29TtBmlKPdOw9QoLSaOgbIdmZTh%2FQ3FM73lIDCUSq1CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwrOFPAovsKYqxliGKtwDYeB8gTF3ZW8psypaf%2F2Ow4YtkHnw1YQxxeczDb1cHHMAEbUEZYmLVPqry873z%2FnO6rMqRauwhBqvcdxN38SjU%2Fim6D60DMxuyeZ6Wboh9h2nSFA9d8tSwP%2BahBz5gEK%2FfrCeXoMNMyFev3ARMWPktt2hbzNZ9JSNxT2v%2FvX84pX7I3e%2BwhufZ98mb%2BSC%2F3lEivZ9okxjwebfW9h%2FxEHEpgAkMeSxCrE%2FPycxtYxdYxKQEl7zmdVv7ao4ov0ibf9EPMsZ2tqAHOk6INwCGCAd07MVlMouqC8MBKj7e%2B95x1V7s7nyzMMGRCBMq7N7RI%2BuMpBSx4n1XdSLddz53WJdKwW1FGTp59XS3oYCnzC%2F2vhYPlf7F0kemMNklMoGCGXUbbXM7gSMO0m%2F%2F94LCxBTYgPoIiZbL3xnOLDQn9416qIKDdn%2FQJK8mfrD9C8qm7fuHti4coXAZfmB3xDbEdEkhQ9UYzfynaaXnWQH4yJ%2F8FSRM%2Fhh28i852xR6ijrCqKGZF3Hh16GTfj9ZlE26EEsJedB5sA7nRhpN2axlYjiDYbExYjhdReFCuWzERLN2KYlhigkVNp7UjjpXzmCZV%2FgseTQk007k0JBQCpDK46B63TWACFLYExz5Iq9CgUwwo%2FbyQY6pgFL40szfUcEeHNxm8Crdtfw1KsBYiQ4RL%2FyAURnk1XughMwA%2B%2BqZotvSBr3oJxHCd2xaalQSUAN0qWd3%2B3Qp3GUKWwwlrPKdEgaC32gUBr10PLWYEuqhXm%2Bbf8lcr0d4otKoUB6qAJlWtYGLH7ByB5RQV3ZBlJDauZBLuFMQElBVdK%2FG07vkHYE4BoJ2xdppjHLgGjXSZT0Bjh8%2FUKhpC18RK27zxqk&X-Amz-Signature=b24745c3f902cf1c516033875d1b4c32fd7fdd40f838935b8f9bdcd7f62d1396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

