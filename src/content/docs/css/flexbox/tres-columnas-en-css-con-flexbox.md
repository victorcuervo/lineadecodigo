---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGYGY4N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDTdOdD9t9RAr3P5olrkRWo0XfBRU6WAeiVsiwGQMcj%2BAiBqLanEqOP41o90FhwTBtm7M6Ba0C6kzN3M87NicQsLBir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM2FqlP%2Fi0M8unwjPbKtwDvoJmAABz7MZ0L84DOfA3IXKWOzeXhAsgfs%2F5NCKB2Qexqm79vV%2BwiVnNqBtyHO2ZW5Cwx9zGd80EZBEj2GECgSpAs%2FvCzsiEdgZLGhx%2BkQAZgtRnru0dWEd26YEkoGG6S8hkCpyq0Z5jAT7FpQwwsTMHCEaGGuJ%2FgkdBnFWhNXp9HS%2BsygCxAxVHWbd%2FtZ0yY65qu6E5%2FluEjU0DlflJN4YTrY0WJ9ROpKynoxJoFOX7kJAoTfE5gFttCF2xmyXQHOUSvIFMRoNyc%2FLj2CIsrcyBdNuHX6B2aivGrNoJhFHJngiM6HPuANUpeQ2eSPhvjkvu9iLeV78vqRulVKuawz3LaIW5N93A2EQ3Pez%2BUfHo9TM%2Fzv4Non83u107hLWFpg7AfDvJy3msYFmPyxG0mjgb691uSA8Ikol6sLSrdsfIN5mRE11XAWngmYeH2BgPPuEtzTYYopk3jLbeFrrmoCNbFiWv0QkrR44EiOIAp8ginXtsoWr5W9P8RogYBggjNWfoUxYd9fOPNM5uN4ZC8qUHcdF7ne%2FupxSgLJfxSYG5rvi9Nu9LocO7Cb%2FDYCnM0yTUOEt%2Bhn4tPDt0%2BO5NrwUJ%2BVmFxNuzeGDTVJn10Ymto13opQAgUOVvcvww9NPDyQY6pgEC2VWj5pmi4MesNsTG8I8fmnSaC477j0SPMemwt0dBORN6K0nEijr0b%2BsGc9m6%2BYRy1DUjhG%2BV8aXAvEhllkAR3uerwWXW%2BbS%2F0ymYRjNhALwv3JmMyJeJXl80vuYY1JroFC8SA5qgKm8Bfz9pkQcr6zRpqS%2BqQ9ZBt%2BIQ1KAfpITczp1KSGT8WU0LjHaod%2Bv67EZbKNU5FN0pW%2BQ5m2uSudydNSqs&X-Amz-Signature=42f89ec8753066261cd95831ce489de7a7859c0960a4f434207d9fe9c4bb135f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGYGY4N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDTdOdD9t9RAr3P5olrkRWo0XfBRU6WAeiVsiwGQMcj%2BAiBqLanEqOP41o90FhwTBtm7M6Ba0C6kzN3M87NicQsLBir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM2FqlP%2Fi0M8unwjPbKtwDvoJmAABz7MZ0L84DOfA3IXKWOzeXhAsgfs%2F5NCKB2Qexqm79vV%2BwiVnNqBtyHO2ZW5Cwx9zGd80EZBEj2GECgSpAs%2FvCzsiEdgZLGhx%2BkQAZgtRnru0dWEd26YEkoGG6S8hkCpyq0Z5jAT7FpQwwsTMHCEaGGuJ%2FgkdBnFWhNXp9HS%2BsygCxAxVHWbd%2FtZ0yY65qu6E5%2FluEjU0DlflJN4YTrY0WJ9ROpKynoxJoFOX7kJAoTfE5gFttCF2xmyXQHOUSvIFMRoNyc%2FLj2CIsrcyBdNuHX6B2aivGrNoJhFHJngiM6HPuANUpeQ2eSPhvjkvu9iLeV78vqRulVKuawz3LaIW5N93A2EQ3Pez%2BUfHo9TM%2Fzv4Non83u107hLWFpg7AfDvJy3msYFmPyxG0mjgb691uSA8Ikol6sLSrdsfIN5mRE11XAWngmYeH2BgPPuEtzTYYopk3jLbeFrrmoCNbFiWv0QkrR44EiOIAp8ginXtsoWr5W9P8RogYBggjNWfoUxYd9fOPNM5uN4ZC8qUHcdF7ne%2FupxSgLJfxSYG5rvi9Nu9LocO7Cb%2FDYCnM0yTUOEt%2Bhn4tPDt0%2BO5NrwUJ%2BVmFxNuzeGDTVJn10Ymto13opQAgUOVvcvww9NPDyQY6pgEC2VWj5pmi4MesNsTG8I8fmnSaC477j0SPMemwt0dBORN6K0nEijr0b%2BsGc9m6%2BYRy1DUjhG%2BV8aXAvEhllkAR3uerwWXW%2BbS%2F0ymYRjNhALwv3JmMyJeJXl80vuYY1JroFC8SA5qgKm8Bfz9pkQcr6zRpqS%2BqQ9ZBt%2BIQ1KAfpITczp1KSGT8WU0LjHaod%2Bv67EZbKNU5FN0pW%2BQ5m2uSudydNSqs&X-Amz-Signature=e7b1af72b5a749ffabcaff8fe9cfc2d320ab45454b104fb2fd3c46340a3a432d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

