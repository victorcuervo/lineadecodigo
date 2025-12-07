---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SPHGF4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiksJFcKwglnKPg0kgDUCk7zWMt9EslKMnE2g94%2FTDjAiA%2BzyLRnGVIvxm6eSuCdF838pzxxcT0xkK9zIGCLB757yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDjo%2F0dAJ%2FLwk1ZiTKtwD9SedYiScc%2B0lwaGvRnpjEO3PPVuY5lDb%2FyrDPodFbiLJ4CJkXdjlXhCM%2BymMS7qhxrBYt17LElvHSsQgXcavGC9GPgHgL3CmQGPjlAmJNB%2BzbpTmG%2F%2BslcZtGxbwssRfkvCYuRSp7ZlStZzLt%2BUbT%2B8%2FirisbL4%2FdEkT%2BnjwH24iVpXIN%2Bj9ed%2FIRXIe6wxegyXrOPyQ3IgJ1Jjmy9gzarWjn7sNJijSwjE010yGbbYfKX67TW9QsBB8v7UHUeDpYpeMcJyTuqZI0j4wI6U%2FI5ySq%2Fh9kDLoXY2LObN0rkF1eFOkTYuhjpvJrsBgdab9jRX4S3a2QfV6ynuqu42bXdv%2BOdHgk0kh0WtVZeI7x51uF1N03TLj5mrMia0wlWbJ3nXSmt4U2cw%2B5XvwUUO25jxGfZbbPjz4Pz8by%2B%2FQpMoFixPhivCOnZ3LYjI5fJ96Tsh1fjNxPTgWPJ%2FfsMhHH4kr3uA733822SvyTSLJ8TP8CaqHmZY3%2B2gTG835x%2FPdtYYHSt8N4zNwyKSgjGRkcQWtY%2FirKHLt%2FLR3Uw7iPeCHJHX6zZm8YukW7kMoxF2Q8xY%2FovY6X2Xbt5NGGb3YV5DOaBu9V1kMfILQpYrc21UXUKOr9PlXyXwdwLwwgcDWyQY6pgEbQPhAiSSB%2BIzaBIztMeJVDYBibcnjs9CoosprFShpj6Xiu8ikHIBpLFuSphOZCUky6K%2F%2FcTnF3%2BoFTV1yQAXvMA9k0pn7OFp7C%2F2a5zE%2Bo9b8%2B4cPsZsGDNR%2Fh2tjymohv4o8XekDwUO70TobnLCyjCnAaUL9jeZd0WIJSCqCkfeEJj794V%2Ff8PSFg%2FhfYMsG4XYbqS0b5bOpCrH1DmJdBCAJAPLo&X-Amz-Signature=fbd62765f9a635f923fe3b9df373e3c19ba7d43fdbbfa0764f4d6dc3d9c733d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SPHGF4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiksJFcKwglnKPg0kgDUCk7zWMt9EslKMnE2g94%2FTDjAiA%2BzyLRnGVIvxm6eSuCdF838pzxxcT0xkK9zIGCLB757yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDjo%2F0dAJ%2FLwk1ZiTKtwD9SedYiScc%2B0lwaGvRnpjEO3PPVuY5lDb%2FyrDPodFbiLJ4CJkXdjlXhCM%2BymMS7qhxrBYt17LElvHSsQgXcavGC9GPgHgL3CmQGPjlAmJNB%2BzbpTmG%2F%2BslcZtGxbwssRfkvCYuRSp7ZlStZzLt%2BUbT%2B8%2FirisbL4%2FdEkT%2BnjwH24iVpXIN%2Bj9ed%2FIRXIe6wxegyXrOPyQ3IgJ1Jjmy9gzarWjn7sNJijSwjE010yGbbYfKX67TW9QsBB8v7UHUeDpYpeMcJyTuqZI0j4wI6U%2FI5ySq%2Fh9kDLoXY2LObN0rkF1eFOkTYuhjpvJrsBgdab9jRX4S3a2QfV6ynuqu42bXdv%2BOdHgk0kh0WtVZeI7x51uF1N03TLj5mrMia0wlWbJ3nXSmt4U2cw%2B5XvwUUO25jxGfZbbPjz4Pz8by%2B%2FQpMoFixPhivCOnZ3LYjI5fJ96Tsh1fjNxPTgWPJ%2FfsMhHH4kr3uA733822SvyTSLJ8TP8CaqHmZY3%2B2gTG835x%2FPdtYYHSt8N4zNwyKSgjGRkcQWtY%2FirKHLt%2FLR3Uw7iPeCHJHX6zZm8YukW7kMoxF2Q8xY%2FovY6X2Xbt5NGGb3YV5DOaBu9V1kMfILQpYrc21UXUKOr9PlXyXwdwLwwgcDWyQY6pgEbQPhAiSSB%2BIzaBIztMeJVDYBibcnjs9CoosprFShpj6Xiu8ikHIBpLFuSphOZCUky6K%2F%2FcTnF3%2BoFTV1yQAXvMA9k0pn7OFp7C%2F2a5zE%2Bo9b8%2B4cPsZsGDNR%2Fh2tjymohv4o8XekDwUO70TobnLCyjCnAaUL9jeZd0WIJSCqCkfeEJj794V%2Ff8PSFg%2FhfYMsG4XYbqS0b5bOpCrH1DmJdBCAJAPLo&X-Amz-Signature=3e7698c7006c05bd1c05a1e82594ce0e05433d7b1e695a61bca971a6756b033f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

