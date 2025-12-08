---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QX4NR7A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ1RUL6BzeKD%2BKKxDLpJSRD%2FlBQ5rEbCy3zkjN6LFtfAiAaZNCJL527%2FE9gzUPEXf6c7%2BuUuYszUALVJI9DVeiXZiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFqAvK9dg14EVosG6KtwD79qoU0h78pOPMBMODun3bff5PV%2BWgOpNdjtAeA%2BgEIY5x7J1noMAaCSl2AsBmJxe%2B%2BxDoyWXSTRnLsvo9635ghCX1al218k4ozI1mfO1XqXpNPOehkntBR0RKG192kvRT5w0XO%2BKMVRqhCtH7AUJKYxJex5tiXNn5WpdMfRCFkZhWqtMSyVxLBLtKn1C431k3Yv815X7Hr1xFIENwy%2FOwi0dSyS9TR3ne%2FDG0z2i9QOBmzlAvv7FzXYSqbx8Zn8Y3AsU3y1WIlnr0DvLJ83fyXx7iK7TuMJbMpnQRB3JBLWLiKIhBGk4RaaIhUDI3uWzPlByjzX3qYhbKq8LYE6JBwKT%2FznLr5nY4UC0I%2FtseTOo%2FSk4r7yx9i5lQY6TQpl7UEdSJDSOEaVsQVV1sIzue4R6CtoLfUTVOH%2BkuLTk457VIA9gcPzfcmtZwoZtYpvv%2B2eLQTcvq5KLLwdTooRqTgk2%2BkaHc0TGowEaV%2FGfEwIk4%2B%2F4rEfSpGCDy1ljhhqSLFbHz4kUMFMmYndJw47D4FVqtMg77VHfI%2Bpmh8yBcfn2Bt7HusdHpTxwPbzHLGYcNbIK9%2BNXP5vkQBQ9q0TD3ir%2FPniTHn7tGKMzeGYTHexyR4nOBBv8l9M%2F9tkwiLTZyQY6pgGOOv3WvktUYs2rWeZQ9VHeSX8UqFhQuEGsothfj6mDTClmJIuuKyoD8XCxgUR3ydk68uQzHKZEFkpgGdSqh0yHAsdqiYUyM8ctupAsyMWm%2BIk02y%2BumLRnhSzBIjYlauPFSgpkaMzFMKOWmo0lQ0CoTkDGFZ%2FraPO9V1vGXqVHhlB%2BHA%2BXD%2BMSbldOOKEkdi6jY747uA%2Bb%2FQfZmND6Na3wGI6EgO1K&X-Amz-Signature=34834e074028d463881e3b57c0c1e51c0e51007655a81b5d201c1603cb225c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QX4NR7A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ1RUL6BzeKD%2BKKxDLpJSRD%2FlBQ5rEbCy3zkjN6LFtfAiAaZNCJL527%2FE9gzUPEXf6c7%2BuUuYszUALVJI9DVeiXZiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFqAvK9dg14EVosG6KtwD79qoU0h78pOPMBMODun3bff5PV%2BWgOpNdjtAeA%2BgEIY5x7J1noMAaCSl2AsBmJxe%2B%2BxDoyWXSTRnLsvo9635ghCX1al218k4ozI1mfO1XqXpNPOehkntBR0RKG192kvRT5w0XO%2BKMVRqhCtH7AUJKYxJex5tiXNn5WpdMfRCFkZhWqtMSyVxLBLtKn1C431k3Yv815X7Hr1xFIENwy%2FOwi0dSyS9TR3ne%2FDG0z2i9QOBmzlAvv7FzXYSqbx8Zn8Y3AsU3y1WIlnr0DvLJ83fyXx7iK7TuMJbMpnQRB3JBLWLiKIhBGk4RaaIhUDI3uWzPlByjzX3qYhbKq8LYE6JBwKT%2FznLr5nY4UC0I%2FtseTOo%2FSk4r7yx9i5lQY6TQpl7UEdSJDSOEaVsQVV1sIzue4R6CtoLfUTVOH%2BkuLTk457VIA9gcPzfcmtZwoZtYpvv%2B2eLQTcvq5KLLwdTooRqTgk2%2BkaHc0TGowEaV%2FGfEwIk4%2B%2F4rEfSpGCDy1ljhhqSLFbHz4kUMFMmYndJw47D4FVqtMg77VHfI%2Bpmh8yBcfn2Bt7HusdHpTxwPbzHLGYcNbIK9%2BNXP5vkQBQ9q0TD3ir%2FPniTHn7tGKMzeGYTHexyR4nOBBv8l9M%2F9tkwiLTZyQY6pgGOOv3WvktUYs2rWeZQ9VHeSX8UqFhQuEGsothfj6mDTClmJIuuKyoD8XCxgUR3ydk68uQzHKZEFkpgGdSqh0yHAsdqiYUyM8ctupAsyMWm%2BIk02y%2BumLRnhSzBIjYlauPFSgpkaMzFMKOWmo0lQ0CoTkDGFZ%2FraPO9V1vGXqVHhlB%2BHA%2BXD%2BMSbldOOKEkdi6jY747uA%2Bb%2FQfZmND6Na3wGI6EgO1K&X-Amz-Signature=20544fb62d2ec45ab6241809529fe5efb23f503196ce994659ddb386f7fb66ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

