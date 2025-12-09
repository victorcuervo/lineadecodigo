---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAEBG3S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcQnyP6q8RMv3eOToQZi9w%2FxRJR0rgJF6e3vlBHJaAGAiByl%2BJh9H09%2Br78NfJte2X9LEacVeQDDtX95eGN4BWXUyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BXPTaM6e4j2c3d8oKtwDmRS0fKHhUgvjDBweL%2B0llN1XhLn0BkKSU%2FGUfrAqwC1DtXxVBK%2BwU1Sigu7fL24WtwWdpC%2BrFGkdRe44Vf4Xte5iHu%2F1SdR0fMb8KL5OMWfmlUOzD8uWRU1lhw4Ml36nfbHETvPlSuc0eZX%2FhYVtb6mJY3GAAiT9QUD0y9%2BEqqxqClAw39CTndaw0vZZfeoyG43PapK9MA0NZNtq2dWhMs1MAvSugYCGE82etQgOQiIQITVyr2YjDLXH66QW9yH2CU%2BqvyrMlQJFVCc22fGc1Io4QoyBYOB3a%2BhYSNAqbPJNGx378VrK6Vmf4aN3p5o%2BlkvliQ%2FpsHZ5WnUDiBVFCP9qM9fATShfwV3MmJ5aYIvYAl2fZjUDSJd8vcCFuaePljJMxeHn9IpHTr6um7QBPYWv5kiVn22l8YRPvWS1XN8TGKpDjp2NgWXz%2FIjDTUtW8UXunx6Ugwr1gGl%2B3FtdDcdo1TPQcK24i4wl90oJ5NiAiwyq5mcK%2BNUNG33ihFtMoo0ifw%2BfwGrSR%2FQU2nif038wyVsc%2BK0g%2B8xcswDu0Q97nnre6QiZZemDVdXqc4x%2BHIjd2zfqyyz225%2BUWw9kzcClibiZoQzAHH7tzlfYYrI6mZnzpd%2ByoaP75IAw8Y7eyQY6pgG9pw7G5Wp1KzkUyQ8Uy5rRdewzDTgXV8Isf%2BedXUk%2F8SlTQUfoeYi9S4FMOXzgJ4lRmQGBceRhnIAqG3Fc7HtZ1e5B%2FofQsFOLBl8gD30d4fEBnBanumrnMO6IEQ926tAk4c%2FyFDYdn8NTqehlIZF%2Fbfq25CIJaa%2F%2B0HCu0KWzL1OG%2BQJ66oXMYXPC9tXOFLW4vXR%2BpCTTNOgPVHRMAn5NYl7aTtYw&X-Amz-Signature=ffec99f30120dc8829657aaa8b83c73d62cd3a3aeb40ba44b423b4b2f6fee999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAEBG3S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcQnyP6q8RMv3eOToQZi9w%2FxRJR0rgJF6e3vlBHJaAGAiByl%2BJh9H09%2Br78NfJte2X9LEacVeQDDtX95eGN4BWXUyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BXPTaM6e4j2c3d8oKtwDmRS0fKHhUgvjDBweL%2B0llN1XhLn0BkKSU%2FGUfrAqwC1DtXxVBK%2BwU1Sigu7fL24WtwWdpC%2BrFGkdRe44Vf4Xte5iHu%2F1SdR0fMb8KL5OMWfmlUOzD8uWRU1lhw4Ml36nfbHETvPlSuc0eZX%2FhYVtb6mJY3GAAiT9QUD0y9%2BEqqxqClAw39CTndaw0vZZfeoyG43PapK9MA0NZNtq2dWhMs1MAvSugYCGE82etQgOQiIQITVyr2YjDLXH66QW9yH2CU%2BqvyrMlQJFVCc22fGc1Io4QoyBYOB3a%2BhYSNAqbPJNGx378VrK6Vmf4aN3p5o%2BlkvliQ%2FpsHZ5WnUDiBVFCP9qM9fATShfwV3MmJ5aYIvYAl2fZjUDSJd8vcCFuaePljJMxeHn9IpHTr6um7QBPYWv5kiVn22l8YRPvWS1XN8TGKpDjp2NgWXz%2FIjDTUtW8UXunx6Ugwr1gGl%2B3FtdDcdo1TPQcK24i4wl90oJ5NiAiwyq5mcK%2BNUNG33ihFtMoo0ifw%2BfwGrSR%2FQU2nif038wyVsc%2BK0g%2B8xcswDu0Q97nnre6QiZZemDVdXqc4x%2BHIjd2zfqyyz225%2BUWw9kzcClibiZoQzAHH7tzlfYYrI6mZnzpd%2ByoaP75IAw8Y7eyQY6pgG9pw7G5Wp1KzkUyQ8Uy5rRdewzDTgXV8Isf%2BedXUk%2F8SlTQUfoeYi9S4FMOXzgJ4lRmQGBceRhnIAqG3Fc7HtZ1e5B%2FofQsFOLBl8gD30d4fEBnBanumrnMO6IEQ926tAk4c%2FyFDYdn8NTqehlIZF%2Fbfq25CIJaa%2F%2B0HCu0KWzL1OG%2BQJ66oXMYXPC9tXOFLW4vXR%2BpCTTNOgPVHRMAn5NYl7aTtYw&X-Amz-Signature=b40dbf5f7d32ef1945c4112f5a801a41b83c92f033cc9e90f70564b18174a8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

