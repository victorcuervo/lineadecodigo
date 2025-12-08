---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWVKFZP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbc8EBUIiWckVL0F6PE1d6uy%2FN25cbmhW1AO78QRBQXQIhAKNyA52iJwwCSO5R3SgH%2FtHTNBZTIci%2FwXuomoGlYxjnKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpGNpBeq30eqpIACMq3ANofCWd6pLc8aS%2BCltCrb5Nu%2BAD8zoZOnXvzIaSUrOoUW33Bh4OfwcQAx%2BVDYt1WmFmqn5R78H01cKQVYBwB62LzZF1HgeRljcG59ST9x33K01h5qEBn1NooLz6UY%2Fhw%2BrvpqjuMOOjq37XMHXCCrE4k7hJ8GUuTaAjIE23UCQn77Tie2Bu5a8ejU5PzBciy9vhipL%2BYh5wZwMNGfyPNvThqkwYuP%2BJZFx8oZclf3lrJXdfe5MFbZ2L21%2FKUN8is3oolGoGjamQ5R%2F9Hq80EIrA%2FNZHO3ECODvwLrO5afqxPMjmB8s1lyjLnhpMUl1324Kcc%2BSHDA7DgLHoxjOLuJTJFoDzl3OPskT15XIv1ZKQN7TcZzif736bZ88SyBzoRHc65bg6UfY9Cx167kmnpUVORnNEzPsicn6TYhE1%2B15tbBsCX2DIp%2Bi1kkWyTLnM2UUYYndSSlSVSlFLm2rkHaGpVE8oZID6AF83IxGLX3frbksO6LN6UGgfmjdn480PgQb1ZhjdmQran2GjQHY2b%2FZQ%2Bu7buRdRiDbNDgojf4bkT023z%2Bj7Pb7NobGQgnVEOw%2BjbzZIVqoHVYgCu9xjogppUUijvAoSmV1T0Y1mCYN0E20reVER1YKlaiQtdDDBot3JBjqkATm3JKdIbLTqoowD8d8Os78ZAoG79VSA%2BYUgcxw0qsewhIroRdMAGoga1IxnCWuCiy9nkb%2FJoMZHObIcxeZzMNzPln259J9EZ7CxI1GwjNDMAzc6dRfqGwynN9SXmvBTZiKnN5bueeMJ6kuQeWvs3PchyFcck1coX7afo7fQr7WFh5ymMDHQbH1iqp%2FNa%2FBr%2B2KD65MAQuZ1TAlxHA%2FJLDI%2Bnn%2Fn&X-Amz-Signature=d8ba7da28eec303fb253f0b3edb615589d5ed4157d8ff776d1f2e7df79b6b76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWVKFZP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbc8EBUIiWckVL0F6PE1d6uy%2FN25cbmhW1AO78QRBQXQIhAKNyA52iJwwCSO5R3SgH%2FtHTNBZTIci%2FwXuomoGlYxjnKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpGNpBeq30eqpIACMq3ANofCWd6pLc8aS%2BCltCrb5Nu%2BAD8zoZOnXvzIaSUrOoUW33Bh4OfwcQAx%2BVDYt1WmFmqn5R78H01cKQVYBwB62LzZF1HgeRljcG59ST9x33K01h5qEBn1NooLz6UY%2Fhw%2BrvpqjuMOOjq37XMHXCCrE4k7hJ8GUuTaAjIE23UCQn77Tie2Bu5a8ejU5PzBciy9vhipL%2BYh5wZwMNGfyPNvThqkwYuP%2BJZFx8oZclf3lrJXdfe5MFbZ2L21%2FKUN8is3oolGoGjamQ5R%2F9Hq80EIrA%2FNZHO3ECODvwLrO5afqxPMjmB8s1lyjLnhpMUl1324Kcc%2BSHDA7DgLHoxjOLuJTJFoDzl3OPskT15XIv1ZKQN7TcZzif736bZ88SyBzoRHc65bg6UfY9Cx167kmnpUVORnNEzPsicn6TYhE1%2B15tbBsCX2DIp%2Bi1kkWyTLnM2UUYYndSSlSVSlFLm2rkHaGpVE8oZID6AF83IxGLX3frbksO6LN6UGgfmjdn480PgQb1ZhjdmQran2GjQHY2b%2FZQ%2Bu7buRdRiDbNDgojf4bkT023z%2Bj7Pb7NobGQgnVEOw%2BjbzZIVqoHVYgCu9xjogppUUijvAoSmV1T0Y1mCYN0E20reVER1YKlaiQtdDDBot3JBjqkATm3JKdIbLTqoowD8d8Os78ZAoG79VSA%2BYUgcxw0qsewhIroRdMAGoga1IxnCWuCiy9nkb%2FJoMZHObIcxeZzMNzPln259J9EZ7CxI1GwjNDMAzc6dRfqGwynN9SXmvBTZiKnN5bueeMJ6kuQeWvs3PchyFcck1coX7afo7fQr7WFh5ymMDHQbH1iqp%2FNa%2FBr%2B2KD65MAQuZ1TAlxHA%2FJLDI%2Bnn%2Fn&X-Amz-Signature=c5357bc405e489bb2d92abaceb0c30b732e722393264f752c1e00cb7ca247a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

