---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYMORMR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgC3iClzIgPjpsQEqtlMUycIYflZ%2BQfa81d5c1YaJ9MwIgeb70ENvXkKMWvoYkJJ9WNUbz549qebfb%2BYrpafq60mUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEMU6X1K%2FFi6wbC%2FkyrcA2Alkmj72ogzz5g12SEICYl1uXordtzDE6XcNOipLa095p6kKv6ANPl3IwD%2BlTYY0WYr%2FYhVSCSptB7sBHtbKVUViatYSUl31y733Mta4cXlsNRJCy3ot%2B89vZsbzbImuoty6TLktsLDgR0H72dMcMk1KvqNCLW%2Fw5AcDob1MRNN6Eu7y2mqR1eztJhOD15SUojJ%2BFbiChNdH58GNA55mTVZqFbqqPMa%2F%2FlRjpMu5lE3nw%2FRdgs4TGK1SkmtOHrHnvnLrzQN1LCherl8KX0%2FU2K0Cs0ZFHdRIeEBeiPrlqMQmnYnfaDWr893LD8uQgNyjh9DjNWh2jhgSF0h3Z0CyrzzL7r5iSKvwrolacL1fiZU551aNp4ivZ4HvRb5Nkli8d4rF8J7%2FZd%2FgTWf6gzSXtDM52D%2Bts8GsjFpps5liynKXxYe6bpGl8x4HnDSNdAoYwULI6B5HuDmae3fQ2RJfgq8QrrGEJzf8riDMdX7ykPzUGSCDDEJVHdiZVtmOB3YYandWt%2FH1GGGFhzCbbjjQTRt0V8yHY%2FCjpsckFa2WzYo9vsRSLQmkfT0F4ogheSoOn9zMolgUVZXkS93lCNFen4w39N2fBrGjlmwcUNXvxVSsj0BJY67WyO%2BN6uZMJ%2B8z8kGOqUBpB6AiZwFgtmp7OGQ4FQYhUj4yiFQm0haj9vEHPJNISnXZljAexabKwFd838UDV3HzYoKdeWg0FYS6VPdsRHnGAYu1lJY1MDtNAruK71L8zz3mReZeqX2lQwDLMJrAKPQMgtm3FzLUKHpwSY67BHCQdopKfCvKdm2e%2BOvO1nzYDsrpy9YeggXNg5kI7rm7rP%2BbWaKb0QX4UOCj0WBOZ7FbIKLpxFZ&X-Amz-Signature=0778f49ec023976b39be052da0733436e6a5db7367cdae574a487df7310c24eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYMORMR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgC3iClzIgPjpsQEqtlMUycIYflZ%2BQfa81d5c1YaJ9MwIgeb70ENvXkKMWvoYkJJ9WNUbz549qebfb%2BYrpafq60mUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEMU6X1K%2FFi6wbC%2FkyrcA2Alkmj72ogzz5g12SEICYl1uXordtzDE6XcNOipLa095p6kKv6ANPl3IwD%2BlTYY0WYr%2FYhVSCSptB7sBHtbKVUViatYSUl31y733Mta4cXlsNRJCy3ot%2B89vZsbzbImuoty6TLktsLDgR0H72dMcMk1KvqNCLW%2Fw5AcDob1MRNN6Eu7y2mqR1eztJhOD15SUojJ%2BFbiChNdH58GNA55mTVZqFbqqPMa%2F%2FlRjpMu5lE3nw%2FRdgs4TGK1SkmtOHrHnvnLrzQN1LCherl8KX0%2FU2K0Cs0ZFHdRIeEBeiPrlqMQmnYnfaDWr893LD8uQgNyjh9DjNWh2jhgSF0h3Z0CyrzzL7r5iSKvwrolacL1fiZU551aNp4ivZ4HvRb5Nkli8d4rF8J7%2FZd%2FgTWf6gzSXtDM52D%2Bts8GsjFpps5liynKXxYe6bpGl8x4HnDSNdAoYwULI6B5HuDmae3fQ2RJfgq8QrrGEJzf8riDMdX7ykPzUGSCDDEJVHdiZVtmOB3YYandWt%2FH1GGGFhzCbbjjQTRt0V8yHY%2FCjpsckFa2WzYo9vsRSLQmkfT0F4ogheSoOn9zMolgUVZXkS93lCNFen4w39N2fBrGjlmwcUNXvxVSsj0BJY67WyO%2BN6uZMJ%2B8z8kGOqUBpB6AiZwFgtmp7OGQ4FQYhUj4yiFQm0haj9vEHPJNISnXZljAexabKwFd838UDV3HzYoKdeWg0FYS6VPdsRHnGAYu1lJY1MDtNAruK71L8zz3mReZeqX2lQwDLMJrAKPQMgtm3FzLUKHpwSY67BHCQdopKfCvKdm2e%2BOvO1nzYDsrpy9YeggXNg5kI7rm7rP%2BbWaKb0QX4UOCj0WBOZ7FbIKLpxFZ&X-Amz-Signature=4dc3ff122520589b4a93172b481c72ac28b2b96568f80bbf6792a85b72e9412f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

