---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZFSPG5S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp6ArdQLs2tlWAzofqMsBqHYJnNKKqeI5Hw4L5kxImkAiBqiH6wcKpzMysIuZkysTmTf6LFwRDx%2B2iLk9ZT6Hf9MCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMBC7e4yJPRlPEDHu0KtwDGgIy5%2FluNAyoOfmwO5hvRZ0aglNNl1NJKA%2BYB4BwYMcevSffPidKbOMSRD%2BYDNhF4Hy7Rht5LiJcHYwVmBW56R9WFB6rxc%2BqlDkh%2FojQk68Rm0vyNWE7cAGWCIRbhCJzeFnPFjlMPZ%2FmcHXccDGwrxpEjAUOcVI6nlf230s92f1inQ9xdOHu%2BwcOzTKKQfSmMOAT2CxEOe5Jv12AcKdtyEckGwa%2BpakKWHFkuhA3x3xgSP6RMsXh%2B5LQEGWSa%2B4fMEQ2CrUkNWyD%2BJFxDD2N%2BCfiLWG7QO8EJg0YAcfkxEtWaKHEFZ73AtBEnJOSYJAOfGKyguNBpNlpxg3toiyYqtrKiYi%2Fv2Nfwp9Notrerdx8sIwVnfUVIYHnCnBZHQu9YVEFYROhTjKF9n7eL6ugDJ7pJ9JzRFBzC9%2FEukDLbPmkXjrPXS0MrotIHoWlhFy200UuKobzTCZlsBJQ8e4IF9BC9j5P1b7JQ1yoTDz%2Bo6Ohiw2Dnnv3GTL0795Dw3uNa0%2FCXPaA8a0QDtOHnJy1oCbhAZpK2T5Pvapa%2FO%2FmsbDSHKB0vd1K55h2gE%2BMDhNl8z9KGRITvTClSVB8Lc2iuZV2DN3bNcpOLV9%2BiqRAmFCPfnyD3aIHDjnpwSkw5MnRyQY6pgGHC8Zpbr%2FTH1%2BPceOVBTWXkVgHMJfiD8RoqNoql98uVQMfugPCd4fUUP7sVQpNW2JLCLG0Fwnib9xOT7Ie2R2nXWtfjIL518m%2FN0hSdji39U88GJdzNLFoUaujnNU%2FEcis7JZ%2BURblLtuqoLYMNWbI1362oKSTlKnwGeunLtgjYSLKq79CNrreo%2FdjKhVjboipCqGKW%2FfGib4ojT3X964gpKTl4IQg&X-Amz-Signature=47058e922f36c35ca1ee96fd2b0c228ed5d5e0d57f4acfc0a664c0565bc2a27a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZFSPG5S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp6ArdQLs2tlWAzofqMsBqHYJnNKKqeI5Hw4L5kxImkAiBqiH6wcKpzMysIuZkysTmTf6LFwRDx%2B2iLk9ZT6Hf9MCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMBC7e4yJPRlPEDHu0KtwDGgIy5%2FluNAyoOfmwO5hvRZ0aglNNl1NJKA%2BYB4BwYMcevSffPidKbOMSRD%2BYDNhF4Hy7Rht5LiJcHYwVmBW56R9WFB6rxc%2BqlDkh%2FojQk68Rm0vyNWE7cAGWCIRbhCJzeFnPFjlMPZ%2FmcHXccDGwrxpEjAUOcVI6nlf230s92f1inQ9xdOHu%2BwcOzTKKQfSmMOAT2CxEOe5Jv12AcKdtyEckGwa%2BpakKWHFkuhA3x3xgSP6RMsXh%2B5LQEGWSa%2B4fMEQ2CrUkNWyD%2BJFxDD2N%2BCfiLWG7QO8EJg0YAcfkxEtWaKHEFZ73AtBEnJOSYJAOfGKyguNBpNlpxg3toiyYqtrKiYi%2Fv2Nfwp9Notrerdx8sIwVnfUVIYHnCnBZHQu9YVEFYROhTjKF9n7eL6ugDJ7pJ9JzRFBzC9%2FEukDLbPmkXjrPXS0MrotIHoWlhFy200UuKobzTCZlsBJQ8e4IF9BC9j5P1b7JQ1yoTDz%2Bo6Ohiw2Dnnv3GTL0795Dw3uNa0%2FCXPaA8a0QDtOHnJy1oCbhAZpK2T5Pvapa%2FO%2FmsbDSHKB0vd1K55h2gE%2BMDhNl8z9KGRITvTClSVB8Lc2iuZV2DN3bNcpOLV9%2BiqRAmFCPfnyD3aIHDjnpwSkw5MnRyQY6pgGHC8Zpbr%2FTH1%2BPceOVBTWXkVgHMJfiD8RoqNoql98uVQMfugPCd4fUUP7sVQpNW2JLCLG0Fwnib9xOT7Ie2R2nXWtfjIL518m%2FN0hSdji39U88GJdzNLFoUaujnNU%2FEcis7JZ%2BURblLtuqoLYMNWbI1362oKSTlKnwGeunLtgjYSLKq79CNrreo%2FdjKhVjboipCqGKW%2FfGib4ojT3X964gpKTl4IQg&X-Amz-Signature=59c271e45204df1a69876be410146c697a00c0168e0d23dec953cf46a824abcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

