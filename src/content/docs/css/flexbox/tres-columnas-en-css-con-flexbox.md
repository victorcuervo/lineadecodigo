---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIU77MR6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHurw1KuK%2BFNKs1yj%2FConKNO%2BIZpV8jCydD48NTyDQb4AiAptOSodBcDNAFNKvR82p3XDWGkktzL%2B%2F9TSXUxIHqMKyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMpjFZulEQinXbUhBKKtwDLWxNFCXy4rXPmazmTg9zUYp2p0N0%2Bwpyx2FRkvjyZIXfhhfGb3ItIf%2FvA7tcQK%2B3AHwvvGUEEi%2FvQhiKR2caVTKRZFHkg8Yu6RHSHM1jiB4zNRM4oH9IZVA7NtX2Ohav8yyiPFZ9eM%2BmLBDMt%2BPLOsppVtEKT4iLHc3NqTmZmo%2Fl7jqcrzOKoW8QltR7OKr4XHj%2FKFL8VWsXLI1AGhPEkI0A8RKcTMtbMBeAKVeO1BJNvsv0rNSRQuD7cqs9Z7mICp4Gwf%2BqLlF6txYwm1v9U9rne6qsizgiYZIaCQZDIeIretY5m7ZBS9Y2fbyBvcw6eLQAOH8Z4tk0c6G%2F9YPxcsUthZptaFM17m9vtOoQDGFafLK8ZxiB3ap%2F4cr0SWDFNuAZQB0Woh%2FPCr%2F2dxMpkiG8SbiE5qfDwb2kTBTvScjC3W49Wwxz9IJSX7dJBoj51TGwUFx%2FhgW5p90Pe4gxny6HWVq1N0bp4kpIsiRQQafGnEGOSwDqbetJLR5lAwan6YakGSLJf4jxscLZ8RYEPMEyxyRDboH8efswlYWahhY5ESBOxuLuJ1%2B%2FSQoJdvxFMWLafv0p1HPGwtzK08xwOLr52s7ksof5naogEYYtQqLqEgiDmLiI8RhQCngw39DKyQY6pgFgu0rNRtd9X0Qo8KyiNb2uMQgavsm2GDz1zQa%2F5Rmw%2Bt1gXPQFvAOqKAfcvBOjGqA3kMLzQJMKXsZY7OSiYMEwmlUWhgh%2FGiJbjsQaLoc2GtnwjNEixQglHDmUCn8ge%2Bc5zA1oIDcCDY1vkx6bEnpukjS8QRdoUGb3SJD5C%2Fri05BgRKlVtAHBzV9lp4yUKkDvqNrtGTe2P0sfH8CneDR8eZ7tARQC&X-Amz-Signature=1d32874c3a1cbcb112328d7fc42b803a5fbe5039f76126fc3dad2f341beb000a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIU77MR6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHurw1KuK%2BFNKs1yj%2FConKNO%2BIZpV8jCydD48NTyDQb4AiAptOSodBcDNAFNKvR82p3XDWGkktzL%2B%2F9TSXUxIHqMKyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMpjFZulEQinXbUhBKKtwDLWxNFCXy4rXPmazmTg9zUYp2p0N0%2Bwpyx2FRkvjyZIXfhhfGb3ItIf%2FvA7tcQK%2B3AHwvvGUEEi%2FvQhiKR2caVTKRZFHkg8Yu6RHSHM1jiB4zNRM4oH9IZVA7NtX2Ohav8yyiPFZ9eM%2BmLBDMt%2BPLOsppVtEKT4iLHc3NqTmZmo%2Fl7jqcrzOKoW8QltR7OKr4XHj%2FKFL8VWsXLI1AGhPEkI0A8RKcTMtbMBeAKVeO1BJNvsv0rNSRQuD7cqs9Z7mICp4Gwf%2BqLlF6txYwm1v9U9rne6qsizgiYZIaCQZDIeIretY5m7ZBS9Y2fbyBvcw6eLQAOH8Z4tk0c6G%2F9YPxcsUthZptaFM17m9vtOoQDGFafLK8ZxiB3ap%2F4cr0SWDFNuAZQB0Woh%2FPCr%2F2dxMpkiG8SbiE5qfDwb2kTBTvScjC3W49Wwxz9IJSX7dJBoj51TGwUFx%2FhgW5p90Pe4gxny6HWVq1N0bp4kpIsiRQQafGnEGOSwDqbetJLR5lAwan6YakGSLJf4jxscLZ8RYEPMEyxyRDboH8efswlYWahhY5ESBOxuLuJ1%2B%2FSQoJdvxFMWLafv0p1HPGwtzK08xwOLr52s7ksof5naogEYYtQqLqEgiDmLiI8RhQCngw39DKyQY6pgFgu0rNRtd9X0Qo8KyiNb2uMQgavsm2GDz1zQa%2F5Rmw%2Bt1gXPQFvAOqKAfcvBOjGqA3kMLzQJMKXsZY7OSiYMEwmlUWhgh%2FGiJbjsQaLoc2GtnwjNEixQglHDmUCn8ge%2Bc5zA1oIDcCDY1vkx6bEnpukjS8QRdoUGb3SJD5C%2Fri05BgRKlVtAHBzV9lp4yUKkDvqNrtGTe2P0sfH8CneDR8eZ7tARQC&X-Amz-Signature=c83168732387ad31593869188477a7f095e9303b0da90130a7d4f51a2f4d0d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

