---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA4XOFFL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOd1BPFAJp8aegR%2FcpmSLZkfiglOz3Wuy3835GeYGJsgIhAMmEzCn5IXLu3g1pKTmpHEwhn1T%2FvsG%2B1Xv%2BGLOxGrm9KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymWDOODfQ0trjB4iIq3APZUNVMHvDjBLS4bIRihk3eTVh8pu5vJFgDACD6FelPrkAYfdb9x1NHDxyVzUZsVFNV1mXSzMni%2BWa6mKlIvW2m%2Flm00YQix1YUvHKOKPHlusSl8aVy56IpunO9ZOTYfLSM1quk6jQjqW9TCMmLT3NFJ4Q5ZuG3DATRhzodODMu9Lt24U%2F0OlZC6Ev%2FSP54nzA3CHo7RPIr3ak0HfT5X45k2YCEZGZ%2Fr3%2By2AdQ9FS7DZsugesmR0%2FvhAbWh2ZkGFYO%2BOjCq10Ach9guU654elXhiWHILbntQx3DML5hytmQTzF49v8Bl8Cd4xSYw5Pyt1ufW7mkApt2o54m5uSIE4ddFSHWUBDkNki23KlR4cOHcTfdhCaFpOyJan%2FB4eLKJvmUIUb9cSyINJiuYSRGAP5J93wwO1jizz6xj1hD6G5tBsxyH7vM9ARe3AHIaTBXhdPVojuiW7l13g%2B2cCpjSBd3LlIFlQUJhYbElg2DsUjz9nIuZo1R2xvD5WwrFdVnNkIu%2BJ8TMD0%2Bs8L2JilKVmKUnG%2BhX2rTqcOUUpfxcXZBQ0jw3eluxdis3HG24aldg2DGdiwBLhq2sB2sxWWC0ZnjEssqVomhsjlRyh1BvmgfBzifQ0tFXup7gypCTCz9NrJBjqkAVQOHQuIKoOx4yipzS%2F1GGIJ%2BD89lbV5y0hR6EdUjbtOelXXhiLNRoThtHeZpvb4M%2B1IUoY1ka%2BhEAAk3z%2F6Cznw0%2Bvl6OzYusq2pyPZSDm4X6b1ldfHOjzXhZrulo0oeIz%2B%2BzRiHGQAwvGIt%2BTuoIHHDqqnzPLaQ%2Fk2f2frfnzyIWf2YYQMY%2BqzW8arj4xzLV29cU%2BTf3zPj%2BMALlJlHeYt%2B987&X-Amz-Signature=46c794636465a5d635de5eb9d31397e4cc813c20161d42b8d594fd12e48e5013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA4XOFFL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOd1BPFAJp8aegR%2FcpmSLZkfiglOz3Wuy3835GeYGJsgIhAMmEzCn5IXLu3g1pKTmpHEwhn1T%2FvsG%2B1Xv%2BGLOxGrm9KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymWDOODfQ0trjB4iIq3APZUNVMHvDjBLS4bIRihk3eTVh8pu5vJFgDACD6FelPrkAYfdb9x1NHDxyVzUZsVFNV1mXSzMni%2BWa6mKlIvW2m%2Flm00YQix1YUvHKOKPHlusSl8aVy56IpunO9ZOTYfLSM1quk6jQjqW9TCMmLT3NFJ4Q5ZuG3DATRhzodODMu9Lt24U%2F0OlZC6Ev%2FSP54nzA3CHo7RPIr3ak0HfT5X45k2YCEZGZ%2Fr3%2By2AdQ9FS7DZsugesmR0%2FvhAbWh2ZkGFYO%2BOjCq10Ach9guU654elXhiWHILbntQx3DML5hytmQTzF49v8Bl8Cd4xSYw5Pyt1ufW7mkApt2o54m5uSIE4ddFSHWUBDkNki23KlR4cOHcTfdhCaFpOyJan%2FB4eLKJvmUIUb9cSyINJiuYSRGAP5J93wwO1jizz6xj1hD6G5tBsxyH7vM9ARe3AHIaTBXhdPVojuiW7l13g%2B2cCpjSBd3LlIFlQUJhYbElg2DsUjz9nIuZo1R2xvD5WwrFdVnNkIu%2BJ8TMD0%2Bs8L2JilKVmKUnG%2BhX2rTqcOUUpfxcXZBQ0jw3eluxdis3HG24aldg2DGdiwBLhq2sB2sxWWC0ZnjEssqVomhsjlRyh1BvmgfBzifQ0tFXup7gypCTCz9NrJBjqkAVQOHQuIKoOx4yipzS%2F1GGIJ%2BD89lbV5y0hR6EdUjbtOelXXhiLNRoThtHeZpvb4M%2B1IUoY1ka%2BhEAAk3z%2F6Cznw0%2Bvl6OzYusq2pyPZSDm4X6b1ldfHOjzXhZrulo0oeIz%2B%2BzRiHGQAwvGIt%2BTuoIHHDqqnzPLaQ%2Fk2f2frfnzyIWf2YYQMY%2BqzW8arj4xzLV29cU%2BTf3zPj%2BMALlJlHeYt%2B987&X-Amz-Signature=6972c65bf7f4b73bd24a714087b5a5217afa8ad013daacf0b9c5e18cc34d2ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

