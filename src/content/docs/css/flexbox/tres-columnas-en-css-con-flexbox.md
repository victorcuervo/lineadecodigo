---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6B2JCKA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FfKCcbhJfy5vh%2BCqafy5fur2SJqOXwX0UsM5Pz5mfxgIgCAWAPriUl1tq9ZCBUyYrom7qHg%2BsJ4lcen19e6t3i1Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKwVaiTxsE5ihVpDVyrcA5AeJt6HG%2FNDJtP2B4IJkE3x22zbluuu%2ByfxCzktOJnmv6wHB6pKLTnzZl82afR2O4klrj2FOwA8vgL6cEhZfD0MMcslL7%2B7xJGDU6pp6O0z0yxPm%2FS9N2PH71qODwvyn%2BUD9se3R2TuWH5VFWnfFg4ZbzWblgAlJh42ohvLCPgIaFKGyjO%2BiLOu5T4NS%2FxrB4PouQPaoLIWoKQD4A%2FtdjRedJQHzzSwDTjiPDFMmztm5TrYQJ1fWB3E4lP9mc4HTPifwSvbfSH1nDtE%2BBu3wRgU%2BUW8P6xZMt8hxmdazgKo7bAxVSPhrpVWO2ykM91nlAEh1lTP0NQQ0T6Nc1h2lWVX%2F5Hc3%2BEoKC25%2BJ5Dp120m%2Ff7WSrdHrzjcWxPbGiH1Xr6MTWiwOMViQaC%2FWF270VM54RrfRaTE8Z5HiDfchfo%2BmxzkdK9YbEQZv8HDzLh3c46G8F36E7wWJq9KyWza851j4LNw0HxNkROGeY4rK%2FuZgYA5DT2zOR0XQDcEIRpwWPK2Tox2qWySejffO%2F3CXosaN3NCcSKTkj5JZ5owCCejpiFeoghHuzCdkICkCh7u011CG6GsAk2kLkq%2BYUq3mwT5yaUSNJOml5YaX1Hzkx20d6RJR%2BgS%2FLZwz5aMKrDzskGOqUBcZSdKyhr5Y6X0crWHgIz%2BG%2BFcb5fy6eKMx5n9BCzz%2Fc0%2F7gIzfEFA7GyfGRphshPUAF8FhIXzNXCFefOnoNkTSt4a87HCGMNPyTREG85iwdRGxLa%2Bws%2FVXMakkYSWI708ph7XNPSkBaA7JOv5zPr7Yad1ShOtVk3lu%2Fg%2FdPUQPTV1V0Od602fgko3Vicy%2F5cdA7QvWKuiAjIiYGtqky%2BU%2F8Wa9bQ&X-Amz-Signature=ff66a9ce90df3cf2e3b9e3428ae6f0d8a507abe141a61159a98124c446b95ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6B2JCKA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FfKCcbhJfy5vh%2BCqafy5fur2SJqOXwX0UsM5Pz5mfxgIgCAWAPriUl1tq9ZCBUyYrom7qHg%2BsJ4lcen19e6t3i1Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKwVaiTxsE5ihVpDVyrcA5AeJt6HG%2FNDJtP2B4IJkE3x22zbluuu%2ByfxCzktOJnmv6wHB6pKLTnzZl82afR2O4klrj2FOwA8vgL6cEhZfD0MMcslL7%2B7xJGDU6pp6O0z0yxPm%2FS9N2PH71qODwvyn%2BUD9se3R2TuWH5VFWnfFg4ZbzWblgAlJh42ohvLCPgIaFKGyjO%2BiLOu5T4NS%2FxrB4PouQPaoLIWoKQD4A%2FtdjRedJQHzzSwDTjiPDFMmztm5TrYQJ1fWB3E4lP9mc4HTPifwSvbfSH1nDtE%2BBu3wRgU%2BUW8P6xZMt8hxmdazgKo7bAxVSPhrpVWO2ykM91nlAEh1lTP0NQQ0T6Nc1h2lWVX%2F5Hc3%2BEoKC25%2BJ5Dp120m%2Ff7WSrdHrzjcWxPbGiH1Xr6MTWiwOMViQaC%2FWF270VM54RrfRaTE8Z5HiDfchfo%2BmxzkdK9YbEQZv8HDzLh3c46G8F36E7wWJq9KyWza851j4LNw0HxNkROGeY4rK%2FuZgYA5DT2zOR0XQDcEIRpwWPK2Tox2qWySejffO%2F3CXosaN3NCcSKTkj5JZ5owCCejpiFeoghHuzCdkICkCh7u011CG6GsAk2kLkq%2BYUq3mwT5yaUSNJOml5YaX1Hzkx20d6RJR%2BgS%2FLZwz5aMKrDzskGOqUBcZSdKyhr5Y6X0crWHgIz%2BG%2BFcb5fy6eKMx5n9BCzz%2Fc0%2F7gIzfEFA7GyfGRphshPUAF8FhIXzNXCFefOnoNkTSt4a87HCGMNPyTREG85iwdRGxLa%2Bws%2FVXMakkYSWI708ph7XNPSkBaA7JOv5zPr7Yad1ShOtVk3lu%2Fg%2FdPUQPTV1V0Od602fgko3Vicy%2F5cdA7QvWKuiAjIiYGtqky%2BU%2F8Wa9bQ&X-Amz-Signature=9f2bd593347de4b3f47e10217dacfa4d8bbdaa2e81b89f96ff61acaf816263b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

