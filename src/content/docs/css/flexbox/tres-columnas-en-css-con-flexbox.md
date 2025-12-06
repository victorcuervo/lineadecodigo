---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYHTLKJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2szRPSjhPCfxfIfraRmTPFU1YpGlwMujl6bvm%2F4%2B5gIgK5TQAXn2MWBSRL6662ee3BfQUIo9WYuGD6RuwxX6zRgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA60hUJqgS33s4dssyrcA%2FdCG15x%2BgliL0g%2BZ%2BuSNgk7YOeEHgg81wSRo3EztJ8lp0Rr3UDkXPotdnHJv8oN8MI2jOmadQJM%2F8XjEpd1tjVnPPx4DwhRvYFKprey7LZRUb6UP9yTaHPKVqpMZr6wJLvsRknIAEOpJCSFrZaLC2ln0I%2FX7zNS%2BKOqtGvSQeXBl86wEerlOfLspkmBTAfX%2BZ9xVDG3QUjBJSaQg76bohN9E1HC%2FoDpytfTDGy8exlr0O7mUjoli8UDBGnZJ5Wlv3tThD5NjL1NslotlVwbaAS1shNTLeRXXvM73uhhbcwiqbk5nj4r5CUYIcyntp1zuVjU1Agj6AvRjRy6Cyz6B0c91JngnyQ3iBCCd%2FvqyrtTmMS%2F%2FMy%2FGa6HNkrzHoPnGlwbrHWNjTnyxSxi1i0UF2KvAXTR9lyeMzZVsaRBlQMceiP%2BHQgYHDygHPjxbLKTqwR2UkUTiYseC0eTUzFnOGY1bo1aWbUHOfER%2BnidvBkktvz9fe1DdhFou7DQwrCxPGBMCM3Xs6wh9YwnkVufo8b50zAwypWbHv4mDFEe2MVzbFENVBGDjZGzLllfH3PBecEeEDW55nRuppMIIz3RuggWHxy81ldBad7Qkx7hHMw7TRh2L%2BHwgZ39uz1pMI2K0MkGOqUBVfsuHMVlGGIqndGb9lJtZ5ovlBWOxDzqcCQypmMjtD30DpL3JINhE2z3O3hfZSFv1XsajBhR%2B9ZLm%2F9d%2BKcCOVdkNRvGInpdiqIeY0uoeVueaSwr1DI6V4Tkh4fxENAsw6x21mcUHYutyyfwYBuKEzfWdM1tvKbAPFSmi8HBcOE%2BTQmmBfsOwnLXBqP5qZCYUUM9x2hql0tCQJit0YhTQEiiNgLd&X-Amz-Signature=bfa2567f6c8e845ae64d63d967af4feb2d4fc966238e9ddcb30053f1ec765c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYHTLKJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2szRPSjhPCfxfIfraRmTPFU1YpGlwMujl6bvm%2F4%2B5gIgK5TQAXn2MWBSRL6662ee3BfQUIo9WYuGD6RuwxX6zRgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA60hUJqgS33s4dssyrcA%2FdCG15x%2BgliL0g%2BZ%2BuSNgk7YOeEHgg81wSRo3EztJ8lp0Rr3UDkXPotdnHJv8oN8MI2jOmadQJM%2F8XjEpd1tjVnPPx4DwhRvYFKprey7LZRUb6UP9yTaHPKVqpMZr6wJLvsRknIAEOpJCSFrZaLC2ln0I%2FX7zNS%2BKOqtGvSQeXBl86wEerlOfLspkmBTAfX%2BZ9xVDG3QUjBJSaQg76bohN9E1HC%2FoDpytfTDGy8exlr0O7mUjoli8UDBGnZJ5Wlv3tThD5NjL1NslotlVwbaAS1shNTLeRXXvM73uhhbcwiqbk5nj4r5CUYIcyntp1zuVjU1Agj6AvRjRy6Cyz6B0c91JngnyQ3iBCCd%2FvqyrtTmMS%2F%2FMy%2FGa6HNkrzHoPnGlwbrHWNjTnyxSxi1i0UF2KvAXTR9lyeMzZVsaRBlQMceiP%2BHQgYHDygHPjxbLKTqwR2UkUTiYseC0eTUzFnOGY1bo1aWbUHOfER%2BnidvBkktvz9fe1DdhFou7DQwrCxPGBMCM3Xs6wh9YwnkVufo8b50zAwypWbHv4mDFEe2MVzbFENVBGDjZGzLllfH3PBecEeEDW55nRuppMIIz3RuggWHxy81ldBad7Qkx7hHMw7TRh2L%2BHwgZ39uz1pMI2K0MkGOqUBVfsuHMVlGGIqndGb9lJtZ5ovlBWOxDzqcCQypmMjtD30DpL3JINhE2z3O3hfZSFv1XsajBhR%2B9ZLm%2F9d%2BKcCOVdkNRvGInpdiqIeY0uoeVueaSwr1DI6V4Tkh4fxENAsw6x21mcUHYutyyfwYBuKEzfWdM1tvKbAPFSmi8HBcOE%2BTQmmBfsOwnLXBqP5qZCYUUM9x2hql0tCQJit0YhTQEiiNgLd&X-Amz-Signature=9c9aac9f93751edcd59ad3717b1c7d3f15e22a8d10411ae02cfce7c201e6745e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

