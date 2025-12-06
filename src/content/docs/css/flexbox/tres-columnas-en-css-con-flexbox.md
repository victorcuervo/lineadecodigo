---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LY5JIH7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQConiNwq26VejIEjiiwXGUTsARL1VqVNc1nzqoavMNifAIgbsR7UfQULzGB2NoNMjcAiSj1EuokqbMs2oJlrFeqvLoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOAviK8bJIbZohM8WCrcA2dbFUqHWA%2FzY9SFCDKv%2BFBo3Opwks5jS2IFwkTaxaxpo6rj2vNsAXMdpz7lTcAhbyYWul7NBY6IH%2Bwy6Uv%2FX2Pmokhs31jQ61ZQj9%2FNTGFVpTOefGF2eW%2FfnQz3JhyLeMNeofIuMKVp%2FuvHJVpkIq2yRegCXG5QXAfynh4%2B1gWyKDLDU%2Flkf8sYhG082qN2UAez2KTT3DFyrAWlja9ogfav%2Fa8UCSopjlsArSU0%2BxnACv4kgPtgC2mkqBfi50TsBRLgKTF2JFmff%2F6Lb2BRfAkkhH8wvNt0vfObZ8IKmhgAtfvVA0Ng2o0q7%2BkeOx9jWxknndxhoeIKvRziOihkyM3townpz%2BvgW9qiFphru5FD05h8AQ5LJ0zeY%2FoJeQ%2Fwt3Ts5SPzQZ3vHT7jCyuNjGvjMn4Yx2e8KHE2QS8%2FD87Yk0M1GqjYpoJOdkdIrIbNBBzRabyObEtIOcbukYwUEUEcJWHTpG64axdkMg1qq3o7SrWOv9oyXF4t3MWWBfVuaZ7SFvJIbuJYxt7GOIBuSmZz0GMKOGyQA9vfQWVi%2FFT7c19v8knWgKf%2FPhykV1rM5x9rYJdLSdokSng4Wt78moPY%2B%2BQx7klLl3ZnuJF5p4mrsk2g6u0hzj6PAK6sMLLrz8kGOqUBwu7JHnvqf5RR1gzJs5jIUWbZ77QaEjrd4Nrt%2FI5Nlk%2B8GERL6EaDZebiRSzdK64Q3osFng09BzD%2BE8v44%2FhfH7v5s9uGaAhsGqiaJU5YIeGXAlNxV%2FpOQExkSuNOxFj8GCLWuFg92VZtE3yyuUYY%2BCaBejRYRBIT0XEHjSpEq2CrmqU%2BpG7SWCA4Cu19iP5wIseuLbZaIwwgcjWjMlMIr0Oz1oLn&X-Amz-Signature=f8c887d290ca3e854bdd381cb600d97fa4cc6974415e7010fe8b8bfc6d0c0325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LY5JIH7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQConiNwq26VejIEjiiwXGUTsARL1VqVNc1nzqoavMNifAIgbsR7UfQULzGB2NoNMjcAiSj1EuokqbMs2oJlrFeqvLoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOAviK8bJIbZohM8WCrcA2dbFUqHWA%2FzY9SFCDKv%2BFBo3Opwks5jS2IFwkTaxaxpo6rj2vNsAXMdpz7lTcAhbyYWul7NBY6IH%2Bwy6Uv%2FX2Pmokhs31jQ61ZQj9%2FNTGFVpTOefGF2eW%2FfnQz3JhyLeMNeofIuMKVp%2FuvHJVpkIq2yRegCXG5QXAfynh4%2B1gWyKDLDU%2Flkf8sYhG082qN2UAez2KTT3DFyrAWlja9ogfav%2Fa8UCSopjlsArSU0%2BxnACv4kgPtgC2mkqBfi50TsBRLgKTF2JFmff%2F6Lb2BRfAkkhH8wvNt0vfObZ8IKmhgAtfvVA0Ng2o0q7%2BkeOx9jWxknndxhoeIKvRziOihkyM3townpz%2BvgW9qiFphru5FD05h8AQ5LJ0zeY%2FoJeQ%2Fwt3Ts5SPzQZ3vHT7jCyuNjGvjMn4Yx2e8KHE2QS8%2FD87Yk0M1GqjYpoJOdkdIrIbNBBzRabyObEtIOcbukYwUEUEcJWHTpG64axdkMg1qq3o7SrWOv9oyXF4t3MWWBfVuaZ7SFvJIbuJYxt7GOIBuSmZz0GMKOGyQA9vfQWVi%2FFT7c19v8knWgKf%2FPhykV1rM5x9rYJdLSdokSng4Wt78moPY%2B%2BQx7klLl3ZnuJF5p4mrsk2g6u0hzj6PAK6sMLLrz8kGOqUBwu7JHnvqf5RR1gzJs5jIUWbZ77QaEjrd4Nrt%2FI5Nlk%2B8GERL6EaDZebiRSzdK64Q3osFng09BzD%2BE8v44%2FhfH7v5s9uGaAhsGqiaJU5YIeGXAlNxV%2FpOQExkSuNOxFj8GCLWuFg92VZtE3yyuUYY%2BCaBejRYRBIT0XEHjSpEq2CrmqU%2BpG7SWCA4Cu19iP5wIseuLbZaIwwgcjWjMlMIr0Oz1oLn&X-Amz-Signature=2408f5c745de3a169f18088189486f820a84c53d1982ca0c23964f675aabb32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

