---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULH7KDKE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6Je76Jr6TZOGebUyJWKoQhEeVp9yEmUWEKfBswnK1mAiEA%2FNWTkycDVwbnZQTBfDH0Sbul76AmgpTljwzzgH%2FYuEIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXXfz3fMt9%2B1mbXFircAx6hpEoR4lV9a4WUrWvE0pU5z1kNAV85h4Q0ICljjjFB4g7BD3p8g0SYhs2Fhoxbv02bZ%2B8Qd48Zlci4nN5%2FkdqgYLAcxm2mJHDyeFVhRwrWwvOGhVIEC2PzLArvkYBuIABMfdmWeiQIZphXMRcLwykB%2FZ%2FeScLtaTxTg%2FD2zppFPJZXKEbqiBmGuTG2M%2F%2BncFIQ7nseIANwOqqg2vyY9758Wz1dwA9vdrWgx5RSBR714qCEQEJg6e4CaEyrQT7wj3PTpQln7fFZeKdYafcFmsSQnBL4vCN%2BskDWHsZ9p11Y%2FzeCp1qp4Za8bBetCd7SWWAeOdKxBY4r4AaTHCZYwPCQr2xyTMNAGJgzUYfn4LK2ZLrx3v56hD50kOWxrfSS63r4oulHdrJ3A8QL%2BWtcUcKZqN7Y1JDEhPScJKtIIuqd9kiW0EOo3GYqgPjhLsx1gmiijHnQ6KuKUh%2FXbtkVN10MLN%2FLER5s8LuAsx4Y94lUokjg15m%2B%2FfWWOFCbR7hfb8YLNjgTzYc4eNrSAkEdkYSjQ0h8U6QHukspWn%2Fa6HFHccFnecqPp0j%2BiYgIt7R9fSL9pzzQ5ht6dJTkDqxifVmDP5WgqXnF8zOnMBb%2B8e32t4XST4qM%2B0eNv2EiMKP90skGOqUBWvJXOTC12GMJyjUiIgCFPuIY05I%2F9kTOEYmHquoGf1NUV8lLv9jbLt10ysjSIMw5DsoLqacE2kUxGgqBcaS4NEQnvjzWBzZhQo%2BUY9hjGG6j%2F8qOHaSGWUcdHqPBVsSqoRNGgFbHlIZ1dSI6ijGM6JzLyyoVD6V8%2FViSiHdMI129lPxsiyguWP9x5jLZLjENNAfTJ2uc0szNCC0hdgoWqoBX5uhp&X-Amz-Signature=0b0fd4dd12e431aa62738fbdfc6bc670f820c607c4a1b352a698ed9c16edce1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULH7KDKE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6Je76Jr6TZOGebUyJWKoQhEeVp9yEmUWEKfBswnK1mAiEA%2FNWTkycDVwbnZQTBfDH0Sbul76AmgpTljwzzgH%2FYuEIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXXfz3fMt9%2B1mbXFircAx6hpEoR4lV9a4WUrWvE0pU5z1kNAV85h4Q0ICljjjFB4g7BD3p8g0SYhs2Fhoxbv02bZ%2B8Qd48Zlci4nN5%2FkdqgYLAcxm2mJHDyeFVhRwrWwvOGhVIEC2PzLArvkYBuIABMfdmWeiQIZphXMRcLwykB%2FZ%2FeScLtaTxTg%2FD2zppFPJZXKEbqiBmGuTG2M%2F%2BncFIQ7nseIANwOqqg2vyY9758Wz1dwA9vdrWgx5RSBR714qCEQEJg6e4CaEyrQT7wj3PTpQln7fFZeKdYafcFmsSQnBL4vCN%2BskDWHsZ9p11Y%2FzeCp1qp4Za8bBetCd7SWWAeOdKxBY4r4AaTHCZYwPCQr2xyTMNAGJgzUYfn4LK2ZLrx3v56hD50kOWxrfSS63r4oulHdrJ3A8QL%2BWtcUcKZqN7Y1JDEhPScJKtIIuqd9kiW0EOo3GYqgPjhLsx1gmiijHnQ6KuKUh%2FXbtkVN10MLN%2FLER5s8LuAsx4Y94lUokjg15m%2B%2FfWWOFCbR7hfb8YLNjgTzYc4eNrSAkEdkYSjQ0h8U6QHukspWn%2Fa6HFHccFnecqPp0j%2BiYgIt7R9fSL9pzzQ5ht6dJTkDqxifVmDP5WgqXnF8zOnMBb%2B8e32t4XST4qM%2B0eNv2EiMKP90skGOqUBWvJXOTC12GMJyjUiIgCFPuIY05I%2F9kTOEYmHquoGf1NUV8lLv9jbLt10ysjSIMw5DsoLqacE2kUxGgqBcaS4NEQnvjzWBzZhQo%2BUY9hjGG6j%2F8qOHaSGWUcdHqPBVsSqoRNGgFbHlIZ1dSI6ijGM6JzLyyoVD6V8%2FViSiHdMI129lPxsiyguWP9x5jLZLjENNAfTJ2uc0szNCC0hdgoWqoBX5uhp&X-Amz-Signature=ee357c26e1a130d37b7fdeaabe258525ac7b7c1b3512d40f2ad414a28e47e456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

