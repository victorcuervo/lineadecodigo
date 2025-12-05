---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JT2U4OU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyT2RxkDpJXUU7RPmNKEib0Gs4jJHLMsDyTCIlmm6XJwIgfxfq%2F2sGd%2B%2F45ukakR49DcQzo2FQFDZj%2Fe9cbBUTSZcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPG%2BEWVW%2FBnAYPd%2FUyrcA3dbnaOMXDVeztgO76weFptW4LGLcLRy%2FTZQB01tt%2FYU40s8MB2UAfvYozl3pnPTaa8c1gOWF1FGLN%2BkgVH6OpFzw8CBpRerc8CRseB%2BjcQASOlWG3uLMYU1IepcrsEKuuhC7o7b0tUA7NSlGpt%2F2CaiLsesxwPx6VHEafRupx3YK3DPDY3KEQzVZ5KbumOK7RpWhitIQFdCCTBOr6D3ZlHVECONJdXeFdShmG3%2BpNheTqYRnwtA4d%2FrBhLCoZ%2F7faLujVPErqjUxBaBkMUiS%2FJlNxaPkoh0bPin0FKKgWKOcw4P8Op0BESyWOhuBthV8rLo048hKpT1C9FmTTJ7bblTHZ%2FBuzNmmyUDNWtpg%2BTSxJMcmgW1y%2FtodY8nOI18FrDte%2Bh%2Fd0gs5JC%2F%2F8D4X%2Bwgngxfxn0Xtm4bRaOKTkJMPZnW6ouq4M6KPyYO2JV8q1pm6d68v77N9YwLg09Ow1xLu7XkM7Qv2cm8FdkJFABb1Us7IyPPvkY59cGSbKgHlw%2BGu57ftM6t4ZVvNQJJQVZ38ILc4%2BArB%2BcGHTFqATcaZqkZKsHO8sND%2Bqqa2UJmZPmHrzx4prXo%2Bvsyd5jyynf1uGr9hCGpgh80AKE6PrL60y7qtqcccLSqeuVNMInKyskGOqUBBUj%2BaoavWZ1a9pRcxD0kTBCw76aACr%2FbxeJXRttbNdJ28wOnyK724vSBXHDFOcxQzVuk23qf8Ga9B%2Bwe91Icn5m1%2BVO0BvJn3FTUE455dGX1QjWKAhOWQ5gqseHQICjDrSUjKZBn%2FlcL7HfP7%2F5PRLQ9f0dfcqezuheBIjXiM0%2BGEhK5lP4L4nfRD51aH4PA%2B10dxSCOFmZl0YfjtU4pTtK7yEi7&X-Amz-Signature=9fe8bcd29837823ac6d783901eafad301c5f8cb129aa5f89b36deb612b3df6af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JT2U4OU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyT2RxkDpJXUU7RPmNKEib0Gs4jJHLMsDyTCIlmm6XJwIgfxfq%2F2sGd%2B%2F45ukakR49DcQzo2FQFDZj%2Fe9cbBUTSZcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPG%2BEWVW%2FBnAYPd%2FUyrcA3dbnaOMXDVeztgO76weFptW4LGLcLRy%2FTZQB01tt%2FYU40s8MB2UAfvYozl3pnPTaa8c1gOWF1FGLN%2BkgVH6OpFzw8CBpRerc8CRseB%2BjcQASOlWG3uLMYU1IepcrsEKuuhC7o7b0tUA7NSlGpt%2F2CaiLsesxwPx6VHEafRupx3YK3DPDY3KEQzVZ5KbumOK7RpWhitIQFdCCTBOr6D3ZlHVECONJdXeFdShmG3%2BpNheTqYRnwtA4d%2FrBhLCoZ%2F7faLujVPErqjUxBaBkMUiS%2FJlNxaPkoh0bPin0FKKgWKOcw4P8Op0BESyWOhuBthV8rLo048hKpT1C9FmTTJ7bblTHZ%2FBuzNmmyUDNWtpg%2BTSxJMcmgW1y%2FtodY8nOI18FrDte%2Bh%2Fd0gs5JC%2F%2F8D4X%2Bwgngxfxn0Xtm4bRaOKTkJMPZnW6ouq4M6KPyYO2JV8q1pm6d68v77N9YwLg09Ow1xLu7XkM7Qv2cm8FdkJFABb1Us7IyPPvkY59cGSbKgHlw%2BGu57ftM6t4ZVvNQJJQVZ38ILc4%2BArB%2BcGHTFqATcaZqkZKsHO8sND%2Bqqa2UJmZPmHrzx4prXo%2Bvsyd5jyynf1uGr9hCGpgh80AKE6PrL60y7qtqcccLSqeuVNMInKyskGOqUBBUj%2BaoavWZ1a9pRcxD0kTBCw76aACr%2FbxeJXRttbNdJ28wOnyK724vSBXHDFOcxQzVuk23qf8Ga9B%2Bwe91Icn5m1%2BVO0BvJn3FTUE455dGX1QjWKAhOWQ5gqseHQICjDrSUjKZBn%2FlcL7HfP7%2F5PRLQ9f0dfcqezuheBIjXiM0%2BGEhK5lP4L4nfRD51aH4PA%2B10dxSCOFmZl0YfjtU4pTtK7yEi7&X-Amz-Signature=f4a0c48d9c766592c3a8cb62554b18d0bc836e020aab9eaa9a09b7411ede36ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

