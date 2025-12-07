---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKSB6EE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXFTDr1t3ApkM2C%2BJE6xfn26Fl3lBUD%2BpiqCwa0ZpoGwIge6lQkO2mqwkgcWc88w8I8WYcENgZwomm8aPXhDW6cA8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQl%2FvhS%2BT0o8i%2FrQyrcAx%2Bqp0ZKvF5zyqPxQGA5q2r1sSm6Ir5OAxriWPYZap7AxGu8SITHJTzIA8KhVL70m%2FYYG7IfCxC0Ue6EAtyPg2g8mKOhXRsYL4ofAvoJMSqeZo8%2FmpvSRh3PYl9sEZiQ6d7%2FNvqCogxcZw9oUgpuIlRcy%2FrAZVs2AWlnqV9rw5EAFC7gu9Ej45h1DYufQrHniOjO8cBniIfjjn5ErNTSkGW3Cd4LhvIujAO%2FmWDdH38tMONt7bvrKL56yeP%2FYLmMMa1Ayyg%2BCPeT99ZerKLgn%2FSydoGSwzyM3yFhL3RZY8i45tA%2BHSXqLYAP7De2TUpiLi3ydDds%2FPwckktNzANv2q5d%2BMH0mYFyBNOPXN7FNeXVSKujPQpaRgR%2B6hlz%2FNe0q4R7NsxQGNR5sSdL5pbW2s5eXxOk0115Q%2BhErCtvJyyRGPVUoOwQxgHMRv%2FuUR0r7Ibiu0SKu3gi5L2aW6ZcWnvFyyidgCvc%2BMGdIJy2ai68hfQw6ChSNi7RaH97%2FPLeX0%2BOM4aavLPtb05M%2FBShW7ELzRPFGzFW5ZogAgEOHJyoKjBx4UlxBys9QMPoBE0YkXkE%2FEpRgpDxJGhAxrbYWZh7zUkS%2F8Jx8ldbmkvyXv3JSldJmRIabhYDEzE7MIyh1MkGOqUBOLKiBdfOqb4K%2BPVbkKSDyYk%2FiYfWySygMg5Tb%2FBYR0l%2FHPSgCWgTuF2NS3ZI2wZB9sfTR4HqRtE1akHlz24oZrhJs2gbwUBpZsyUovYgTAElMUXRNJIU30fv3jseLZo47bqJJKBoKv%2FMxRV%2Fv60OOCnvRCAlI2J6L04PR6cVGY28GL3tIsIobNP66fESG5%2BwAsiWBQX3M8tcnVE91N9nH1okQv8i&X-Amz-Signature=2611fe9bb68d73bd245b5ed126809cf2e9a8564ef8eb7d53dec4af06de771156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKSB6EE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXFTDr1t3ApkM2C%2BJE6xfn26Fl3lBUD%2BpiqCwa0ZpoGwIge6lQkO2mqwkgcWc88w8I8WYcENgZwomm8aPXhDW6cA8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQl%2FvhS%2BT0o8i%2FrQyrcAx%2Bqp0ZKvF5zyqPxQGA5q2r1sSm6Ir5OAxriWPYZap7AxGu8SITHJTzIA8KhVL70m%2FYYG7IfCxC0Ue6EAtyPg2g8mKOhXRsYL4ofAvoJMSqeZo8%2FmpvSRh3PYl9sEZiQ6d7%2FNvqCogxcZw9oUgpuIlRcy%2FrAZVs2AWlnqV9rw5EAFC7gu9Ej45h1DYufQrHniOjO8cBniIfjjn5ErNTSkGW3Cd4LhvIujAO%2FmWDdH38tMONt7bvrKL56yeP%2FYLmMMa1Ayyg%2BCPeT99ZerKLgn%2FSydoGSwzyM3yFhL3RZY8i45tA%2BHSXqLYAP7De2TUpiLi3ydDds%2FPwckktNzANv2q5d%2BMH0mYFyBNOPXN7FNeXVSKujPQpaRgR%2B6hlz%2FNe0q4R7NsxQGNR5sSdL5pbW2s5eXxOk0115Q%2BhErCtvJyyRGPVUoOwQxgHMRv%2FuUR0r7Ibiu0SKu3gi5L2aW6ZcWnvFyyidgCvc%2BMGdIJy2ai68hfQw6ChSNi7RaH97%2FPLeX0%2BOM4aavLPtb05M%2FBShW7ELzRPFGzFW5ZogAgEOHJyoKjBx4UlxBys9QMPoBE0YkXkE%2FEpRgpDxJGhAxrbYWZh7zUkS%2F8Jx8ldbmkvyXv3JSldJmRIabhYDEzE7MIyh1MkGOqUBOLKiBdfOqb4K%2BPVbkKSDyYk%2FiYfWySygMg5Tb%2FBYR0l%2FHPSgCWgTuF2NS3ZI2wZB9sfTR4HqRtE1akHlz24oZrhJs2gbwUBpZsyUovYgTAElMUXRNJIU30fv3jseLZo47bqJJKBoKv%2FMxRV%2Fv60OOCnvRCAlI2J6L04PR6cVGY28GL3tIsIobNP66fESG5%2BwAsiWBQX3M8tcnVE91N9nH1okQv8i&X-Amz-Signature=4c4d624f41bea49f4d5c2459bb459d2a7fad51a1c9398e19473bbc5e50ad9af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

