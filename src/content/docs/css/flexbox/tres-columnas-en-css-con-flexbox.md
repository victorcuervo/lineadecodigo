---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664XMRMSI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2%2FcIbupkUAdJFJVRdp5LwZzf9hmx3tgq5ExclnZ0wFAiEAj5W2yQ%2BF%2FgV2KWakelilv3t0nkm1g%2Fq5M%2F3KD%2BCYNxAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIh%2BiTkwAn7HUM8jsSrcA%2FDjN%2B5O1kbTMNS1R8lPQckCxIiGmy0ayYhLF9KYbN0qpELIVZG%2BGdjJVRg22lBB0mxZyrzmnB5kuuHLUgFlvVtj6QJWhVQsfF9zguNhv9lt3bPMirVrimHXnitLDGUlX8KnUgxZKbWYKOzCY4gBcdYgivfFaXoX%2F1ytByos4aWoePQEkoMnHwr2oM1AyXk5Ac4L%2FG8qrKQLk%2F8AxJrXMQ5w3pT2NtYAtku2RT6VQuX5X8bAorbrMJE9ZGbQI5EquIABWTUQm76iFkXVbmtN0vRZoqxG7K%2BmCoSt5PUgfrlQUEzWEhsMDXWZ%2BX442mlMcZCs12LbhP42WMLUgQzWLo1JU5FfcWvlf1sydRWs4u6ElrRElc8ECE0lvKptmXTQONGy%2FZsEyRiKQGdkOZ0DkS3H1X5WyAq1hE15zsEy6J0B26ARkI9zKVsy0hT14lIB8aKpSDwooRloyEAf9Wx7TLsPt%2BkUEPjl0L1NUzHnCrPdmD1RmhJQEVzMG6DhVLKz7Y2skXjjUq72mKu%2F%2FFcILjVnNQWPkVl61CbsXxQk5EHLWV9kEtqqygVFnbJHhbs%2FCipWs2fctdSWTEinaElS8troFiS4R%2Bamh2gPCznkak4yYWz4rxgpfe9w20cCMKrcxskGOqUBjPMWXx%2BmvfQa%2B8wZRx%2FuJ%2BXt%2Bb39WVcb1CmoAYJY0wPF957wncX%2BamGeTn2xfZneriyXf0PpGocWpqZxhJi%2BJ8lz%2B8nluuq%2BPL5zMUkvcil2JM7HOh6bouodzzX7MvWW9Kku3T%2FW7AV9iVIWhUSHiqoBko0U25JUrcWAKIASApvbcYGNU9HI5wlswt0JVZqtEoFUpJ6NfuZ6Rts9VzdWeyAQ696R&X-Amz-Signature=0a1cdf892a14f0ae8e96383ded3825983b7ae13134e8451223fe7dc6cb3efaf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664XMRMSI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2%2FcIbupkUAdJFJVRdp5LwZzf9hmx3tgq5ExclnZ0wFAiEAj5W2yQ%2BF%2FgV2KWakelilv3t0nkm1g%2Fq5M%2F3KD%2BCYNxAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIh%2BiTkwAn7HUM8jsSrcA%2FDjN%2B5O1kbTMNS1R8lPQckCxIiGmy0ayYhLF9KYbN0qpELIVZG%2BGdjJVRg22lBB0mxZyrzmnB5kuuHLUgFlvVtj6QJWhVQsfF9zguNhv9lt3bPMirVrimHXnitLDGUlX8KnUgxZKbWYKOzCY4gBcdYgivfFaXoX%2F1ytByos4aWoePQEkoMnHwr2oM1AyXk5Ac4L%2FG8qrKQLk%2F8AxJrXMQ5w3pT2NtYAtku2RT6VQuX5X8bAorbrMJE9ZGbQI5EquIABWTUQm76iFkXVbmtN0vRZoqxG7K%2BmCoSt5PUgfrlQUEzWEhsMDXWZ%2BX442mlMcZCs12LbhP42WMLUgQzWLo1JU5FfcWvlf1sydRWs4u6ElrRElc8ECE0lvKptmXTQONGy%2FZsEyRiKQGdkOZ0DkS3H1X5WyAq1hE15zsEy6J0B26ARkI9zKVsy0hT14lIB8aKpSDwooRloyEAf9Wx7TLsPt%2BkUEPjl0L1NUzHnCrPdmD1RmhJQEVzMG6DhVLKz7Y2skXjjUq72mKu%2F%2FFcILjVnNQWPkVl61CbsXxQk5EHLWV9kEtqqygVFnbJHhbs%2FCipWs2fctdSWTEinaElS8troFiS4R%2Bamh2gPCznkak4yYWz4rxgpfe9w20cCMKrcxskGOqUBjPMWXx%2BmvfQa%2B8wZRx%2FuJ%2BXt%2Bb39WVcb1CmoAYJY0wPF957wncX%2BamGeTn2xfZneriyXf0PpGocWpqZxhJi%2BJ8lz%2B8nluuq%2BPL5zMUkvcil2JM7HOh6bouodzzX7MvWW9Kku3T%2FW7AV9iVIWhUSHiqoBko0U25JUrcWAKIASApvbcYGNU9HI5wlswt0JVZqtEoFUpJ6NfuZ6Rts9VzdWeyAQ696R&X-Amz-Signature=f2eea19b798f342929c3b1e63b865846880a701fed7e50fce0f85621fff2160f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

