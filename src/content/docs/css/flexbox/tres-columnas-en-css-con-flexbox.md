---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDV3S3GI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe3e2kSs7mvf4Ha7scQhof4PumLamRNOd6LOhTopNGlAiEAl1%2FZy4lDT9SgmwDtm8AgHAgYV7yjvjNmeTJFwrhtQpgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbUY4RgxXD7tJsC%2ByrcAxqzaMhyNgGRrWmVIv7I3t6CdKoI%2F2DJ9rvoOABILd%2BGLsjGxae998dBoXUeaLnudbD%2FZJqc4EX66GIpgUm9Zh6%2F0SArkRDU8MSJGIJR9R2dhiwYLsIAJNxZiTemzt8y3zXpT7fz988X81vS6SYdxZMeQ%2F6u%2FZ%2Fhb4z2mesyNDB545tfsdJlVhyAYpwqotHW9K3B16ns5VBdhxrxwUf4wwu3oPGQCxU1yG1sqJJBJC8Ij10gab41iYmMjjw0ZzKX8vhDgu3ttBYK38SRje1pzw9Cnk5thVopUWUsZbtjEfaksRpR%2FU%2BnDrZAPw4HWE33e2F3BUlbxtWPxFYivTtqgjLXAecBEy2Xt2CNM39P3RRscb7hjn4X44VFNuKhJ%2Bu6QFFLLgCiLfoOLIJk87%2BmrfQ5UTcGC4K95BuasxKm0bTgF5lXYtkgruCZX%2FzR4m3stfsDIwClOa787tgZHK1l1FNLtKRk9IlN78Ql5ZbAKz6E96K5%2BSBuwPNrJcEKBYZtYfXpBQajHf3ImC7DY9QcDbj3vbLvkTWpFEOKSai8X4NARw%2BsXq%2BE4T4SWCeVH5cL9MRy7hTvNvpDSzGesRV9rscK69YvvwlmY1qx95OhvhY0AOpsh9qtlo%2BqAD0oMPbz2skGOqUBpu1xMSiQYwu6MP8UGUbuw%2Ff08%2BENWJ5%2FBNORlH3pUXpc6bPE%2FQcR8h6h8pc%2BgogSj8HrGKK4nkBgYuvTC6%2BkhjE3mEFu221gXUmnCT%2FFqqTFoAfTpdKx1rpS9IpETZghCshVAvK1QGncEZPvEDkx9awq7e3VFIsIqlZ0H0eU%2FEjAjeiyvtmXmxl6heGYjM7qE0byYvz8Pu%2BicNE7FfmmEGI55oZw&X-Amz-Signature=fc95c5c087f268873f65a76377c12886a66c98c7c533917d1263884132edaaad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDV3S3GI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe3e2kSs7mvf4Ha7scQhof4PumLamRNOd6LOhTopNGlAiEAl1%2FZy4lDT9SgmwDtm8AgHAgYV7yjvjNmeTJFwrhtQpgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbUY4RgxXD7tJsC%2ByrcAxqzaMhyNgGRrWmVIv7I3t6CdKoI%2F2DJ9rvoOABILd%2BGLsjGxae998dBoXUeaLnudbD%2FZJqc4EX66GIpgUm9Zh6%2F0SArkRDU8MSJGIJR9R2dhiwYLsIAJNxZiTemzt8y3zXpT7fz988X81vS6SYdxZMeQ%2F6u%2FZ%2Fhb4z2mesyNDB545tfsdJlVhyAYpwqotHW9K3B16ns5VBdhxrxwUf4wwu3oPGQCxU1yG1sqJJBJC8Ij10gab41iYmMjjw0ZzKX8vhDgu3ttBYK38SRje1pzw9Cnk5thVopUWUsZbtjEfaksRpR%2FU%2BnDrZAPw4HWE33e2F3BUlbxtWPxFYivTtqgjLXAecBEy2Xt2CNM39P3RRscb7hjn4X44VFNuKhJ%2Bu6QFFLLgCiLfoOLIJk87%2BmrfQ5UTcGC4K95BuasxKm0bTgF5lXYtkgruCZX%2FzR4m3stfsDIwClOa787tgZHK1l1FNLtKRk9IlN78Ql5ZbAKz6E96K5%2BSBuwPNrJcEKBYZtYfXpBQajHf3ImC7DY9QcDbj3vbLvkTWpFEOKSai8X4NARw%2BsXq%2BE4T4SWCeVH5cL9MRy7hTvNvpDSzGesRV9rscK69YvvwlmY1qx95OhvhY0AOpsh9qtlo%2BqAD0oMPbz2skGOqUBpu1xMSiQYwu6MP8UGUbuw%2Ff08%2BENWJ5%2FBNORlH3pUXpc6bPE%2FQcR8h6h8pc%2BgogSj8HrGKK4nkBgYuvTC6%2BkhjE3mEFu221gXUmnCT%2FFqqTFoAfTpdKx1rpS9IpETZghCshVAvK1QGncEZPvEDkx9awq7e3VFIsIqlZ0H0eU%2FEjAjeiyvtmXmxl6heGYjM7qE0byYvz8Pu%2BicNE7FfmmEGI55oZw&X-Amz-Signature=46f604d5607f5ae99a50882bc204d31ef4115c64cbb414c264d609595588ba84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

