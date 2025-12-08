---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTJFJFO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJWJcXTx9P61eDpxV2%2BajSXHyX1CHgAkEJS1HO88T1PAiEAvAC2KXUX94b8Y7JIfzjNn6pNVCH0eKXzWr9gALve1zUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFd74YfQm%2BoT0bFWyrcA9Xc1qqsR4m0THflpvqqD4vQvweSQFFHXoxe3oZpl6Fx0UXy4W5oi1m%2FnOW1GvmI8iKgkmBoPIZ23RzzmMEMm75KkSUANUykV6FlAuf3L8BxVHPHGzaMjvfG%2ByDudzf%2Fln7Hu%2B7CC4enZ5jcSOHNddOjYbX1jADZsVn7QhUL2KWYbYTbpD2hhnXfZ0%2Fwapa2wQY5%2Fz4LUp9vaxysvAitQhfUEEUTsvZbsXNXeyqkwl%2Fj5AN8Fm026%2BEsqhYDpbAbziEoWAepKekRaHhAJ9cyfDkGjvdZNXRBs4BD3Bk6nFxykdR%2BfCFV4LQokPp%2FXr4MCaRMQw6jSCeEYBZyMacomJtO%2BZCdCndZljpEg0arz4oQMN1%2BgOJDWiI%2FTpHwFQ1WC2ptP9yEXCJ6ZtHMzR0NUDB1H6dY5lOZqpexVk6Z1eSKZ3%2Faxmh6o5kYCCb68itvTwnLyACZPWzuTrAxxB7xiujntcZa7ZfWqGf%2FWle0L%2Bo6Ik%2FBH2XDGP%2FhqzTaQhdVxHnn0ltGiguhxg%2F4M35vmZghXj4eV3RMlWVyMCmsHqtVzhrBLT6WjiixpA1g5qbT383iVMB5Xyvm6Jeh%2F2NSX6qN%2BcclJLaXMfk%2BnFuMom5ObJG%2ForZfZ8LlJp6CMJ%2Bh2MkGOqUBEkFibcVw5xQRfebfvB1oWss5KIIWImuKD79QAhI3HfMdXdIWU9XPBNin0enAzkgMgMMC%2FnlBIpsBkwDiLK%2Fp4T3gmxWw22Hy%2F41PR%2B5AaqjyFAx9ZqFttXJgAcolDIG%2Bp9TM45pPFZgyPsWjbXzbT%2BZ4EGhGnxGguEwJJ%2FfNxRD8lspjQjNXzb%2B5HChO8RxRQ%2BqN%2BKzamvDr5v4d5TE2RRtb6uhh&X-Amz-Signature=dea9d94e511d3587b90a31e70425a0002d0cc9a869b986e4886c2936fab699d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTJFJFO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJWJcXTx9P61eDpxV2%2BajSXHyX1CHgAkEJS1HO88T1PAiEAvAC2KXUX94b8Y7JIfzjNn6pNVCH0eKXzWr9gALve1zUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFd74YfQm%2BoT0bFWyrcA9Xc1qqsR4m0THflpvqqD4vQvweSQFFHXoxe3oZpl6Fx0UXy4W5oi1m%2FnOW1GvmI8iKgkmBoPIZ23RzzmMEMm75KkSUANUykV6FlAuf3L8BxVHPHGzaMjvfG%2ByDudzf%2Fln7Hu%2B7CC4enZ5jcSOHNddOjYbX1jADZsVn7QhUL2KWYbYTbpD2hhnXfZ0%2Fwapa2wQY5%2Fz4LUp9vaxysvAitQhfUEEUTsvZbsXNXeyqkwl%2Fj5AN8Fm026%2BEsqhYDpbAbziEoWAepKekRaHhAJ9cyfDkGjvdZNXRBs4BD3Bk6nFxykdR%2BfCFV4LQokPp%2FXr4MCaRMQw6jSCeEYBZyMacomJtO%2BZCdCndZljpEg0arz4oQMN1%2BgOJDWiI%2FTpHwFQ1WC2ptP9yEXCJ6ZtHMzR0NUDB1H6dY5lOZqpexVk6Z1eSKZ3%2Faxmh6o5kYCCb68itvTwnLyACZPWzuTrAxxB7xiujntcZa7ZfWqGf%2FWle0L%2Bo6Ik%2FBH2XDGP%2FhqzTaQhdVxHnn0ltGiguhxg%2F4M35vmZghXj4eV3RMlWVyMCmsHqtVzhrBLT6WjiixpA1g5qbT383iVMB5Xyvm6Jeh%2F2NSX6qN%2BcclJLaXMfk%2BnFuMom5ObJG%2ForZfZ8LlJp6CMJ%2Bh2MkGOqUBEkFibcVw5xQRfebfvB1oWss5KIIWImuKD79QAhI3HfMdXdIWU9XPBNin0enAzkgMgMMC%2FnlBIpsBkwDiLK%2Fp4T3gmxWw22Hy%2F41PR%2B5AaqjyFAx9ZqFttXJgAcolDIG%2Bp9TM45pPFZgyPsWjbXzbT%2BZ4EGhGnxGguEwJJ%2FfNxRD8lspjQjNXzb%2B5HChO8RxRQ%2BqN%2BKzamvDr5v4d5TE2RRtb6uhh&X-Amz-Signature=1e89e4feeb7b2e3f15b580a0383ced0861a23b5e327f4e2c9c8ac291117df496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

