---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKODCQRU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1315qYsEkM0KU%2BfV%2FlBHulsgvLjF8r%2BrSq8q2%2FV89kAiAxrH0Lur%2BrKawFpVmw3CrMtZFLEgs5o3As1huVKANh%2FSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMQK%2BOMTsHEEpy6KPcKtwDxspFfmiz2uyhtqZD7HwjFFtkEAN5zp4xAtqr4GO32tdMZzSX8v8qbiHki7XX%2FESJY6sQ0ZH6BnhuzDcD2o0D%2FmxbHQ%2Bwm2130%2BpT1E3ehNPg5yxcGJaZctcbwomnskE%2F9whOBuZOTc5MaDCeaVIC3vL6nXzGNnMIH98PbI3z5nYGOeNLh2y14c92SerRq0A8aYk0kLifvbti7RzVY3PU9oMm7%2BegVftMjS5XsIvDBYiK6wUJi%2FadkgxE%2FmLWFft1X8v8nEJxEEEJRRQzv%2FEnLeCGrMn4UkNxDkWIwJnjgRfvaioLdGTETQrzwqmO0M%2BpPXDUB9jm9uHyWG1Y7qn5DZO9nJ1TwAxeyPuaA5%2Fqkl9pPYvzzd5C3nGAEAXoE26MnbC1QB1l0M%2FIAwhF7sMMhcBl3bNCjy2sv6oi6lYJrjrY%2FFBNDcus8C8x%2FUb1m6F%2Bem1OT3u8C8KnTRLnsF17cDerYxRTIH3a%2FxylBvs91%2Be%2BGrmoOn7nFNRIKtAIcTfBGFHRpdJdVjiyZAndeTKw7fPIDM1zIywiCKQcnMLxv8z5%2FK99G3AF7DAND%2FJJUSWHe7wUQOkY0UdXoz62tMN6n5Hke6PKYyihbdk87NnQ10zBYR0Vhj3cQ2fBUmEwis3RyQY6pgEWcMkSqV9svw1jc%2FfoyeqxU1t6zi6N7Pn79whbSzniA%2FiN7lBUnYP0%2BoTdsxbwp3nfajYjiJP80qOY7C6SejFINqzJRedNXYDnzGx7%2BIlvQRbvmslPaXyh6UIq7fiSotjnPqFE8yu9OMpzBgSbwyo0AJR7%2F4ZhFk6xcMLJQErZU5pJBSxHdSt74BWNlxH%2FeG7g2%2ByDP6ecOsjP7qA%2FyguhzKdqDSf8&X-Amz-Signature=b8b5689aa66a821a929f53d8c14e321a745be20efadd931a6397660e469e64bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKODCQRU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1315qYsEkM0KU%2BfV%2FlBHulsgvLjF8r%2BrSq8q2%2FV89kAiAxrH0Lur%2BrKawFpVmw3CrMtZFLEgs5o3As1huVKANh%2FSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMQK%2BOMTsHEEpy6KPcKtwDxspFfmiz2uyhtqZD7HwjFFtkEAN5zp4xAtqr4GO32tdMZzSX8v8qbiHki7XX%2FESJY6sQ0ZH6BnhuzDcD2o0D%2FmxbHQ%2Bwm2130%2BpT1E3ehNPg5yxcGJaZctcbwomnskE%2F9whOBuZOTc5MaDCeaVIC3vL6nXzGNnMIH98PbI3z5nYGOeNLh2y14c92SerRq0A8aYk0kLifvbti7RzVY3PU9oMm7%2BegVftMjS5XsIvDBYiK6wUJi%2FadkgxE%2FmLWFft1X8v8nEJxEEEJRRQzv%2FEnLeCGrMn4UkNxDkWIwJnjgRfvaioLdGTETQrzwqmO0M%2BpPXDUB9jm9uHyWG1Y7qn5DZO9nJ1TwAxeyPuaA5%2Fqkl9pPYvzzd5C3nGAEAXoE26MnbC1QB1l0M%2FIAwhF7sMMhcBl3bNCjy2sv6oi6lYJrjrY%2FFBNDcus8C8x%2FUb1m6F%2Bem1OT3u8C8KnTRLnsF17cDerYxRTIH3a%2FxylBvs91%2Be%2BGrmoOn7nFNRIKtAIcTfBGFHRpdJdVjiyZAndeTKw7fPIDM1zIywiCKQcnMLxv8z5%2FK99G3AF7DAND%2FJJUSWHe7wUQOkY0UdXoz62tMN6n5Hke6PKYyihbdk87NnQ10zBYR0Vhj3cQ2fBUmEwis3RyQY6pgEWcMkSqV9svw1jc%2FfoyeqxU1t6zi6N7Pn79whbSzniA%2FiN7lBUnYP0%2BoTdsxbwp3nfajYjiJP80qOY7C6SejFINqzJRedNXYDnzGx7%2BIlvQRbvmslPaXyh6UIq7fiSotjnPqFE8yu9OMpzBgSbwyo0AJR7%2F4ZhFk6xcMLJQErZU5pJBSxHdSt74BWNlxH%2FeG7g2%2ByDP6ecOsjP7qA%2FyguhzKdqDSf8&X-Amz-Signature=4b5bdbab72bc6a15a34b876600ab46425e9bc42793559885e214c90eb0defd82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

