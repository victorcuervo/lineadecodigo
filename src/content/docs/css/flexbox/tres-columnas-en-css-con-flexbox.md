---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQRIUIE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgmvCsL5IAv2zZJhRaEGxryFa5NTPJTGYAkG%2BKm1RRVwIgcD%2F0xgiV909jp%2BTv%2BGcb0ZUS7dumkvMGNXTHQ%2BpjkvIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGzQFIb7U4EWqBMoiSrcAzt8UvQZ%2BlArK28zddi0tWqrALaonvy%2FyCG83R0r4nYlOiffkEGfTMLSh38NzQyX6fTHykDaaVOPeQo4FxPHYmelXYL1%2BMaa980Hb6ipvQ2K9cT8bWjEjNuWspgh7svJhhKB%2FVpjYAu4VKOZ%2BomW5vjSjpaIOKMhug47ElktphD0PxhTHfe6CQaKFg2sRNzAbBcQAThQiJcB82P4Fa0FA3FpOeHj9zy7uVfwXHHWRGaumQsJ7GfoiTFrHtotnU0TqdgXftiDqjVdKKFklV8fzHqLHsBg4I454Zcni5T2uZII1CThRD%2FKoY8rXXRzRixN9MxOGL8tqL8WAJEk4T7591E9nuOYqo%2FKDyk5x%2FMpoSeuXDFQglHKBpsLUPVSsnGOjKuqbFRWQdoMI%2F6%2FftmTw%2BlbZI3%2F5scpI9lKm7CltIv44ctXSeEdxrs5Ir79M7iph5hYQwEbjQxa%2BxzV49YI16VEPFUiISQmS3XiF23%2B%2FkZN%2FYKgGiZE9nuPuwS2htelUe4G00UAZINNIuD4%2FsKpSlf9Zu7xIfDlH2TUaSFijvkX4h6UMKRuSnYz2DIGcvC0m5JSppHv%2B%2Bkyb1s907H0lqym07OQMRlyKoqhwh%2BhckE%2BnEtqy%2FV8hwfIjp%2BwMKC8z8kGOqUBvVxrljepELP2m1%2BbY4vGL4L6ERvQ2ccEKratvvcCzp5FymPqP%2BuXKkP393wbYLMWcYZ%2BhmlXr6ZVopsVGHBpNaZXqMykuIPfrGvc6kWTJDMMLdj7o%2B48Or2JLosvS85nM949jWeY2EvrY2GyMTvXrZsLEx0vNi8gf0sAUyMrYTijxnVoo0jLF6gz4d9OwJJuQvXTMpoPiiB6bOfrIcgaKW26xvGG&X-Amz-Signature=416cd18eb3f88c2a81c41469b978d1e33aa85c604f0fea52d040095ea7c6f47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQRIUIE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgmvCsL5IAv2zZJhRaEGxryFa5NTPJTGYAkG%2BKm1RRVwIgcD%2F0xgiV909jp%2BTv%2BGcb0ZUS7dumkvMGNXTHQ%2BpjkvIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGzQFIb7U4EWqBMoiSrcAzt8UvQZ%2BlArK28zddi0tWqrALaonvy%2FyCG83R0r4nYlOiffkEGfTMLSh38NzQyX6fTHykDaaVOPeQo4FxPHYmelXYL1%2BMaa980Hb6ipvQ2K9cT8bWjEjNuWspgh7svJhhKB%2FVpjYAu4VKOZ%2BomW5vjSjpaIOKMhug47ElktphD0PxhTHfe6CQaKFg2sRNzAbBcQAThQiJcB82P4Fa0FA3FpOeHj9zy7uVfwXHHWRGaumQsJ7GfoiTFrHtotnU0TqdgXftiDqjVdKKFklV8fzHqLHsBg4I454Zcni5T2uZII1CThRD%2FKoY8rXXRzRixN9MxOGL8tqL8WAJEk4T7591E9nuOYqo%2FKDyk5x%2FMpoSeuXDFQglHKBpsLUPVSsnGOjKuqbFRWQdoMI%2F6%2FftmTw%2BlbZI3%2F5scpI9lKm7CltIv44ctXSeEdxrs5Ir79M7iph5hYQwEbjQxa%2BxzV49YI16VEPFUiISQmS3XiF23%2B%2FkZN%2FYKgGiZE9nuPuwS2htelUe4G00UAZINNIuD4%2FsKpSlf9Zu7xIfDlH2TUaSFijvkX4h6UMKRuSnYz2DIGcvC0m5JSppHv%2B%2Bkyb1s907H0lqym07OQMRlyKoqhwh%2BhckE%2BnEtqy%2FV8hwfIjp%2BwMKC8z8kGOqUBvVxrljepELP2m1%2BbY4vGL4L6ERvQ2ccEKratvvcCzp5FymPqP%2BuXKkP393wbYLMWcYZ%2BhmlXr6ZVopsVGHBpNaZXqMykuIPfrGvc6kWTJDMMLdj7o%2B48Or2JLosvS85nM949jWeY2EvrY2GyMTvXrZsLEx0vNi8gf0sAUyMrYTijxnVoo0jLF6gz4d9OwJJuQvXTMpoPiiB6bOfrIcgaKW26xvGG&X-Amz-Signature=76ec9943c07fc3b8d926992d9c2128709c1881b6827c743e9ed471df151e001a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

