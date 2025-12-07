---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DWIZC7Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXsEx1LsjAqQdBYuddq7j55jmIt%2F6IshiK064wWhd4AIhANvZMWhsUE%2FIckhYS3Gt88FMXejpPOUT44gp875GD6XwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI314nJs6Zw5ME9lQq3APHSUsFyyalgKY46JUN9TyXf3Opmsnfx6M1IP2uYgOLv21vDyE%2Bef66abrXLnX0s0FbZSJyXHwdYqkr2nQertN0SXBe4o8JYEtQ%2Bc8bWw1jhg%2FmDWi7wau6wCjdFPvO5S%2Bzd7k6V05VRZNKD4dZaL5rfOgUTEibCzXiIrLvrZjt2CaVu7tVLukZosGVsZGAA9LpCNrt8bjImKcgc1DUbtjHKbFvFEdo%2BkwSG0r5lDCUsTX7EoAcN%2B6kgJxFMLfsg%2Bukq%2BvrsceZ3PbkcJdiqZpaJnhm6DpXQ3tLpIvo2FgrcVGc9k9IdJwCuW5M3hdNxdmjOrnwe4pHE2FxWOI4VwsevcJ1muLdyOSMStxZrV17fvtZf%2Fki2NE%2F0AgXj2EhZ%2BVwFwskBgQp4eHW%2Bm2Q4Uh6f7b6kK4eUQzBSLXIGK8pm35hgxpx%2F7oRGAEvjNjCp00Vm73lc7cMopXQZRuEeJTa%2B2%2FGqiW%2FL6oUsMyYWKVCqqj6JQLIKLnygzcx4d3cDL%2FOAisyIpIZLkPr%2FsxmBgRm5fc3Hc7y4qtWKXMBfUFd%2Fz1EQokXZhqZwZqusZCiBmLrjUI64vWSX%2BaUbN7R1kwNTLhU7jb2IW7TeuZQENmTbF65%2B1S38X2qf7mclTDJmdXJBjqkAQUsIZ6liQ%2FwjaUyt9JqeruKnd60wgii%2Fl2UEUOtq2IFPgHlnBtBdAP05T96NxF0zak9H8uty2Jqqi9ttgfiPSqk6J4VAfg%2FdJZ39L1chhzV1M7UaBDuQBn35DpcR9bDUrn15COE6AcdvivSXcgGt%2B9mU87AI1z3Jdf82S6NxQGG6nlZhRdyPG0SfUHqnEa6cAtXL9XOBZgifo%2BE%2FrT1xegeRJHG&X-Amz-Signature=af6f73bbbdceed5daea07e46280e42be12ae97356262e824af95a983eeefb7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DWIZC7Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXsEx1LsjAqQdBYuddq7j55jmIt%2F6IshiK064wWhd4AIhANvZMWhsUE%2FIckhYS3Gt88FMXejpPOUT44gp875GD6XwKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI314nJs6Zw5ME9lQq3APHSUsFyyalgKY46JUN9TyXf3Opmsnfx6M1IP2uYgOLv21vDyE%2Bef66abrXLnX0s0FbZSJyXHwdYqkr2nQertN0SXBe4o8JYEtQ%2Bc8bWw1jhg%2FmDWi7wau6wCjdFPvO5S%2Bzd7k6V05VRZNKD4dZaL5rfOgUTEibCzXiIrLvrZjt2CaVu7tVLukZosGVsZGAA9LpCNrt8bjImKcgc1DUbtjHKbFvFEdo%2BkwSG0r5lDCUsTX7EoAcN%2B6kgJxFMLfsg%2Bukq%2BvrsceZ3PbkcJdiqZpaJnhm6DpXQ3tLpIvo2FgrcVGc9k9IdJwCuW5M3hdNxdmjOrnwe4pHE2FxWOI4VwsevcJ1muLdyOSMStxZrV17fvtZf%2Fki2NE%2F0AgXj2EhZ%2BVwFwskBgQp4eHW%2Bm2Q4Uh6f7b6kK4eUQzBSLXIGK8pm35hgxpx%2F7oRGAEvjNjCp00Vm73lc7cMopXQZRuEeJTa%2B2%2FGqiW%2FL6oUsMyYWKVCqqj6JQLIKLnygzcx4d3cDL%2FOAisyIpIZLkPr%2FsxmBgRm5fc3Hc7y4qtWKXMBfUFd%2Fz1EQokXZhqZwZqusZCiBmLrjUI64vWSX%2BaUbN7R1kwNTLhU7jb2IW7TeuZQENmTbF65%2B1S38X2qf7mclTDJmdXJBjqkAQUsIZ6liQ%2FwjaUyt9JqeruKnd60wgii%2Fl2UEUOtq2IFPgHlnBtBdAP05T96NxF0zak9H8uty2Jqqi9ttgfiPSqk6J4VAfg%2FdJZ39L1chhzV1M7UaBDuQBn35DpcR9bDUrn15COE6AcdvivSXcgGt%2B9mU87AI1z3Jdf82S6NxQGG6nlZhRdyPG0SfUHqnEa6cAtXL9XOBZgifo%2BE%2FrT1xegeRJHG&X-Amz-Signature=9e040e238c6ff64955fc2682553a049a72e1d2d541087bd2db3118ce0107e2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

