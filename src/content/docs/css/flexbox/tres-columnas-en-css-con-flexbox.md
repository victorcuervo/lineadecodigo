---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXP64SU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBdmsg1P2O1ohD%2FKqr54bgeTKugUxNomibvMUF%2Bh%2FuDAIgYKZGRqyAcRJUKlhSx5ppBpnU8sZwc0lHzLfbZZAkCtAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDC7HDR4D0otL8k1cGSrcA5Lv9AN7LmjbtRwoxWFGLmnck4GaLY8Oq6irs0rsdqXUEzGTZdyLkAu9u%2FlNWnri9QJD9kGpct6pMXo6JHycj3jgJhl4ADC0jbACD1%2Br3AWLmvVqmbe0hL3cwPTdhLSkHGqdSRhmlUQ%2BfZgxOSMgMRZemK%2BHjElOnZdhUTaFXEN7L7mxA98Ho1xKKU6GaZgBeJB4jWkp0tMdTj9Q1BDhTEuCxbaGT6UPmKMz0GBQ6xnIDOzViTkwKu8hyY3XRnVzGwLae%2FYlVuTScU9haJtQOrwynNttLXHgJSe9ndUy8tFNUvFHfEVfn0KAG%2FQaKMdkLiSNEiqbpmt3IKb31L3SVeKcfZcTBEKtpx5nTodWvhsSkyq7mtHC9eReLhtn2B12YS1IUTEeoLnO1tU36WAWY37%2B08F%2FWcjkWYNHm6e%2FbjXFKNuWH2hucNENnwJy9nbY%2FOljPi6ZYYcQH649AW7KGVPQ6d4u6apUBw4ZkFvRaeroSqJYxCURwsxkhsB8ezCnKr8cVH4hQH%2ByG6GOQQ%2BfvGfdMs7%2F6YsQlMVwa0YUACOI6MUrifRYPeAU5%2BIEch5eHJFEKyJsGtSszjl8cEs9JWfIfdoYZ%2FX6WmeyKyhYj4wl1xp0RHGoXuGpCVYfMIuK0MkGOqUBXqqpeYy1XMwRiXqGjHm40b2UOi2Qjak691pt6PkBpbI6WuX0tWNVYkrc6o6YZJTL1NSlXIpoKx6FnDCbCL6HGnrmTm1TwWINe0G5XdzwgiFgcBMqAXOqIzJZ3IsJCloiHrMr26TiKkoBm%2BQIy%2F3oh9qqIRephzV3YFZEq23oBBGLDIl%2BbrwMqoCAtJVTTPZZ%2BV2BMs0vlG9DnLDdZoo%2BL4kXoJ63&X-Amz-Signature=240275c0d22fa44f31176ed5a9687b6adc2449c19e547e643b90cfc6f3dca830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXP64SU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBdmsg1P2O1ohD%2FKqr54bgeTKugUxNomibvMUF%2Bh%2FuDAIgYKZGRqyAcRJUKlhSx5ppBpnU8sZwc0lHzLfbZZAkCtAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDC7HDR4D0otL8k1cGSrcA5Lv9AN7LmjbtRwoxWFGLmnck4GaLY8Oq6irs0rsdqXUEzGTZdyLkAu9u%2FlNWnri9QJD9kGpct6pMXo6JHycj3jgJhl4ADC0jbACD1%2Br3AWLmvVqmbe0hL3cwPTdhLSkHGqdSRhmlUQ%2BfZgxOSMgMRZemK%2BHjElOnZdhUTaFXEN7L7mxA98Ho1xKKU6GaZgBeJB4jWkp0tMdTj9Q1BDhTEuCxbaGT6UPmKMz0GBQ6xnIDOzViTkwKu8hyY3XRnVzGwLae%2FYlVuTScU9haJtQOrwynNttLXHgJSe9ndUy8tFNUvFHfEVfn0KAG%2FQaKMdkLiSNEiqbpmt3IKb31L3SVeKcfZcTBEKtpx5nTodWvhsSkyq7mtHC9eReLhtn2B12YS1IUTEeoLnO1tU36WAWY37%2B08F%2FWcjkWYNHm6e%2FbjXFKNuWH2hucNENnwJy9nbY%2FOljPi6ZYYcQH649AW7KGVPQ6d4u6apUBw4ZkFvRaeroSqJYxCURwsxkhsB8ezCnKr8cVH4hQH%2ByG6GOQQ%2BfvGfdMs7%2F6YsQlMVwa0YUACOI6MUrifRYPeAU5%2BIEch5eHJFEKyJsGtSszjl8cEs9JWfIfdoYZ%2FX6WmeyKyhYj4wl1xp0RHGoXuGpCVYfMIuK0MkGOqUBXqqpeYy1XMwRiXqGjHm40b2UOi2Qjak691pt6PkBpbI6WuX0tWNVYkrc6o6YZJTL1NSlXIpoKx6FnDCbCL6HGnrmTm1TwWINe0G5XdzwgiFgcBMqAXOqIzJZ3IsJCloiHrMr26TiKkoBm%2BQIy%2F3oh9qqIRephzV3YFZEq23oBBGLDIl%2BbrwMqoCAtJVTTPZZ%2BV2BMs0vlG9DnLDdZoo%2BL4kXoJ63&X-Amz-Signature=662a4fcd4c83aea843e5af069f7dc562d10a44437a05ff535c5676de25921752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

