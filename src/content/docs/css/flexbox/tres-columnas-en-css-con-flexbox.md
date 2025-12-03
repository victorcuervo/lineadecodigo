---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMZO7SD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCMew6f7u%2Bw248bz%2BUobTzX%2BpVQXvTKazhOWOzwbUjljQIgMKrhS0p9wDYG234fppBtOkLdQSgH7YEjoHwTPdeUxlcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMA9uRWm46aC5PMFpSrcA0dIycW3CgY0cVk8JQ7R4GvJOF9S7Vwj9kd8Jzsxy5VJbIXXsfMlHmUOfXP9PDxOqhrvgB53Ls6g%2FN5P%2FFVnhUjG3%2BpHyjgexRTbpOnX1ZD%2B9EjCyuIHKgIPAMYeNYV%2BwRJkMC74wn4AA4iQVIng1oipcx7L0IU2XRVWuWOMA7FwBJ9P7ujIwxyNWDgqB2KJzOM0RZhyB1xQ2KOboQCoOfqJpu13L55XejDn5vCnF2CtqVgg%2B2k8aKOr0X7sc%2Bra%2F5n3O6IUOfOCp%2FPjNtKsRwvsVKI3fljOUz%2B2OJ%2Brc%2BfM7b5VoJlj9%2BUh0KFLAuB7WdQwd4M%2FdPdZoEqGj%2B8mkSQFN0%2BZ9hkI7gnkT1gVkxQ9mH1fMnDbTf%2BmG1T7O2eJC7wsOWhGEz33FItUoBWh3ivnye9FU81JKYdKSXFLxd%2F27%2BxdhSYcSl9Erca3kM6Inwp3N44QM%2B6FEJwctWpq8IiAhkxHzD0C5TgZKRqcbYMU5zNTi7ciTz3Ex9H2XVKMnE1OZYQ%2BH%2FsEX%2BGg%2F%2BqtvQWPfx%2FubNJf9ohDbLn8H%2Bd3WGsEWnnOqVYxNvTskz6BRLQDCmgu9kRFDzfXlDjI4o4JgeINF7Gk%2FqYgWOQLfR3O7Kwuhz%2F%2B46L5fwsZMKiVw8kGOqUBn4m%2BdfD%2BweYX%2BMyY%2FARhNP5BNxiueFQBiN45XpfdNOaSvXZhQ0MBca4p%2FsQqQzUGmugqFsGoDKinjIw%2B0i4CPGb3xR5eNZfw9C%2BNuERyoK1V1yL1Dn4gy5X%2FO4syw%2BhhW5PKWyZVD%2BqdgE1avBOwO3qlypCi3cmCM1d93seMWuva07lX0FtERp0iMMeaLXiQm5wY9aMSmOvUC2xv632TsW8BOSkv&X-Amz-Signature=2c2b8113b537e7861c65b1d78e43eddf6ae88316adca20fc0bf83dc0d83c0051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMZO7SD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCMew6f7u%2Bw248bz%2BUobTzX%2BpVQXvTKazhOWOzwbUjljQIgMKrhS0p9wDYG234fppBtOkLdQSgH7YEjoHwTPdeUxlcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMA9uRWm46aC5PMFpSrcA0dIycW3CgY0cVk8JQ7R4GvJOF9S7Vwj9kd8Jzsxy5VJbIXXsfMlHmUOfXP9PDxOqhrvgB53Ls6g%2FN5P%2FFVnhUjG3%2BpHyjgexRTbpOnX1ZD%2B9EjCyuIHKgIPAMYeNYV%2BwRJkMC74wn4AA4iQVIng1oipcx7L0IU2XRVWuWOMA7FwBJ9P7ujIwxyNWDgqB2KJzOM0RZhyB1xQ2KOboQCoOfqJpu13L55XejDn5vCnF2CtqVgg%2B2k8aKOr0X7sc%2Bra%2F5n3O6IUOfOCp%2FPjNtKsRwvsVKI3fljOUz%2B2OJ%2Brc%2BfM7b5VoJlj9%2BUh0KFLAuB7WdQwd4M%2FdPdZoEqGj%2B8mkSQFN0%2BZ9hkI7gnkT1gVkxQ9mH1fMnDbTf%2BmG1T7O2eJC7wsOWhGEz33FItUoBWh3ivnye9FU81JKYdKSXFLxd%2F27%2BxdhSYcSl9Erca3kM6Inwp3N44QM%2B6FEJwctWpq8IiAhkxHzD0C5TgZKRqcbYMU5zNTi7ciTz3Ex9H2XVKMnE1OZYQ%2BH%2FsEX%2BGg%2F%2BqtvQWPfx%2FubNJf9ohDbLn8H%2Bd3WGsEWnnOqVYxNvTskz6BRLQDCmgu9kRFDzfXlDjI4o4JgeINF7Gk%2FqYgWOQLfR3O7Kwuhz%2F%2B46L5fwsZMKiVw8kGOqUBn4m%2BdfD%2BweYX%2BMyY%2FARhNP5BNxiueFQBiN45XpfdNOaSvXZhQ0MBca4p%2FsQqQzUGmugqFsGoDKinjIw%2B0i4CPGb3xR5eNZfw9C%2BNuERyoK1V1yL1Dn4gy5X%2FO4syw%2BhhW5PKWyZVD%2BqdgE1avBOwO3qlypCi3cmCM1d93seMWuva07lX0FtERp0iMMeaLXiQm5wY9aMSmOvUC2xv632TsW8BOSkv&X-Amz-Signature=279dd5259bd45ccbf24da85dbf914f9d8086b2c2dd92dd6b813c94f5f74ec826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

