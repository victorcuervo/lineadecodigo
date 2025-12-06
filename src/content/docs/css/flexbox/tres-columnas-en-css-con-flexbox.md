---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAISIFTK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChurwneRCJlNQTyMC7B9ygPeHNEiR8TuhHVGfu9cxV9QIhAOEh9dNYsWwzN%2BTbTP6bLXoU0iDthWrp9GV6wh0fsRiQKv8DCHoQABoMNjM3NDIzMTgzODA1IgycvCZHkYm26dwGBO4q3APq4WeZrvZyhgNmjbyh4ArkN4JWg0sy8cWEeBXiqhZwvxgo%2BGJdoO5CZ%2BMXL%2FpBUGbrJQI987r7ZlGAzRScGcMgxNC29qvdzuoQrgHW4L3V8Cp8jUcPhs6YV83iNYC9xQUwNl97VDnGFtkrbKs4hluCdSixm%2BjijF9x4oJKWDolv1JWjHneaC0TuoUMn5mnysULwPUWP84KcD107Ipblw0gzORuXZqcndsUOeDnGZuVvlz7ltDiqkJwMOnu2wYPK1oaiF93iCgSooWmVnTa%2FI42Nbw7kM5gcgvSiCQBlUwFC39SfsoUBnPLG%2B396gIlivFQxEOvgAfhswNQEwXqRF1xyNzO5pirSocL8KtW2aAIf1nv6NGlFIxFFJzlPDxim9iP4e1fdJQtlOhhR1tStvIMKhgElMgpRHIVHsPz15XpXmeYwGlLHX329FNraXnRAwDK0tt9EwM5FNq1PbjeFqnw2OsshaaOtINA3tBHTcFTsPV5YnTBCQjFaHvnQv%2BkTK8OXaZkAMQV3Eb7j6X2ZsztJMqUP3%2F0N9AQVGV3SW4OzTN6ev9dcQwYz4cMxRPPoTRAWeNCdF9vS1JvSC52YuSueRB%2B6f%2FMF5B5ZfI1GHyj%2Fl1y%2BBAZiY2AVmjsPzDxzNHJBjqkAb9guQaI%2FqmHiMmI58zAbitieLgWahIcJA6PMLzdtvpwroV3PwOyjs1cqfhqtKfNG7dyNwd6CKv8ppQcXyMqvmwqQlcwMF48qzv6qnWno3Ci0jP%2FVMdXbMad3YcJlTfub2a%2BF28PzNuxyMlb1gTK%2B90tkKnbo4OS9eScA5iNMbgAQouIunp0hBoiAuShAfSE8PqVN6TjuRT1pQNrlDQnjQiiuJbK&X-Amz-Signature=40a9edb48b0e90931ae9664a6fd9660b6671984364325254789e31a7c390b946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAISIFTK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChurwneRCJlNQTyMC7B9ygPeHNEiR8TuhHVGfu9cxV9QIhAOEh9dNYsWwzN%2BTbTP6bLXoU0iDthWrp9GV6wh0fsRiQKv8DCHoQABoMNjM3NDIzMTgzODA1IgycvCZHkYm26dwGBO4q3APq4WeZrvZyhgNmjbyh4ArkN4JWg0sy8cWEeBXiqhZwvxgo%2BGJdoO5CZ%2BMXL%2FpBUGbrJQI987r7ZlGAzRScGcMgxNC29qvdzuoQrgHW4L3V8Cp8jUcPhs6YV83iNYC9xQUwNl97VDnGFtkrbKs4hluCdSixm%2BjijF9x4oJKWDolv1JWjHneaC0TuoUMn5mnysULwPUWP84KcD107Ipblw0gzORuXZqcndsUOeDnGZuVvlz7ltDiqkJwMOnu2wYPK1oaiF93iCgSooWmVnTa%2FI42Nbw7kM5gcgvSiCQBlUwFC39SfsoUBnPLG%2B396gIlivFQxEOvgAfhswNQEwXqRF1xyNzO5pirSocL8KtW2aAIf1nv6NGlFIxFFJzlPDxim9iP4e1fdJQtlOhhR1tStvIMKhgElMgpRHIVHsPz15XpXmeYwGlLHX329FNraXnRAwDK0tt9EwM5FNq1PbjeFqnw2OsshaaOtINA3tBHTcFTsPV5YnTBCQjFaHvnQv%2BkTK8OXaZkAMQV3Eb7j6X2ZsztJMqUP3%2F0N9AQVGV3SW4OzTN6ev9dcQwYz4cMxRPPoTRAWeNCdF9vS1JvSC52YuSueRB%2B6f%2FMF5B5ZfI1GHyj%2Fl1y%2BBAZiY2AVmjsPzDxzNHJBjqkAb9guQaI%2FqmHiMmI58zAbitieLgWahIcJA6PMLzdtvpwroV3PwOyjs1cqfhqtKfNG7dyNwd6CKv8ppQcXyMqvmwqQlcwMF48qzv6qnWno3Ci0jP%2FVMdXbMad3YcJlTfub2a%2BF28PzNuxyMlb1gTK%2B90tkKnbo4OS9eScA5iNMbgAQouIunp0hBoiAuShAfSE8PqVN6TjuRT1pQNrlDQnjQiiuJbK&X-Amz-Signature=0e8234df041dbdab29dc2d19c49479c48671690b40539088772a69fbd9b55499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

