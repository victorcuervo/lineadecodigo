---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIFB3R3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPKAXl4aODPh3O6RzTuquuxpi0jFYvxGySt0sWkZoljgIhAOnvjOLZULtoCh%2FqROhk4E4HQCOuX4PxfKNkU4WgwYQjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg9xSIXTcvv%2BBmHUIq3AMdzX17CLbnRmAKt824hEArE3J%2FVEWZKSU7bet%2FvXhQjk%2FGZTu%2B4ENA%2B0PyyjhtuMgwB8ocmGUqcD8sowN93J4yuzoyQ%2BYRzo8NMqGvfZgmny1jFnz%2Frf%2BV0VN8JECYr%2BLQUeeS9Y9%2BD3uqJ0WxLLu%2Bac4wFeraD9nYkUNGybfPDhdZIfjovL1iPZJol0wl0hHkWvv46VIQQpRi1t%2Bj1shtLKo8rZg1%2F%2F%2F0Px8bOWZXfjPH6bKSl9NhNG6aGBR59p1UjwCYO7FQvBItI1EU%2F%2FfLDAujqlZ5HpE5pnFOGB33sYA%2FnA5Pj2Jlf%2B%2FW4h3Wpah9uF12w0MkiQhkXRt04aHGp%2Bpa5Mv35iirKR3LdeZahgNcoTXBphj1ZDOZ05YD3IaKbNPc8Fh6OboZqUGwLsAB2IuiG%2BmNWchDAw5Ph8AuiHsTi4PabR741%2BRa8OW7COT6RwFVqFHY4M10%2BdcxvQruIzjLdfoz9xPIx009HT9Ewjw1V7sC%2B7Sff9bHHDgv0YjshH47mR5A%2BcxTsvGIQEhMqBDuTfy4oMNErR32iuSoP606GnzkcoeuuFrH%2F3wp2fubSvmXpdpUZENsUGkhTccjhzhuiGV9MV6LSxcWXvcipQjyXEIFT429ML9%2FLTDi%2FdLJBjqkATKtS5Qyzx72R7pfJ1sq6GdNfUoq%2FuW9qoFNvmOZTiSZ2JFQrPQ67%2BiHc6Xi5swnw1HuePqH1gHLAxf7dcApcEQ44jXolZztrGRnzBaMrX6Q4ojKIbq%2BUIqYtIDIPjiPTO3AhRUBnR41k3imB%2Fe6uyLD9rWQhc7eZ731byTSWA%2FieFMzd9aFUjTn6C7ogYWoNzSSTnv2Lrk5fJsb3VLZRx8wvNl1&X-Amz-Signature=14c00e759d93dd79afe83c7670f14f6fd31e16f5841a2c8c7bb3da21a2199309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIFB3R3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPKAXl4aODPh3O6RzTuquuxpi0jFYvxGySt0sWkZoljgIhAOnvjOLZULtoCh%2FqROhk4E4HQCOuX4PxfKNkU4WgwYQjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg9xSIXTcvv%2BBmHUIq3AMdzX17CLbnRmAKt824hEArE3J%2FVEWZKSU7bet%2FvXhQjk%2FGZTu%2B4ENA%2B0PyyjhtuMgwB8ocmGUqcD8sowN93J4yuzoyQ%2BYRzo8NMqGvfZgmny1jFnz%2Frf%2BV0VN8JECYr%2BLQUeeS9Y9%2BD3uqJ0WxLLu%2Bac4wFeraD9nYkUNGybfPDhdZIfjovL1iPZJol0wl0hHkWvv46VIQQpRi1t%2Bj1shtLKo8rZg1%2F%2F%2F0Px8bOWZXfjPH6bKSl9NhNG6aGBR59p1UjwCYO7FQvBItI1EU%2F%2FfLDAujqlZ5HpE5pnFOGB33sYA%2FnA5Pj2Jlf%2B%2FW4h3Wpah9uF12w0MkiQhkXRt04aHGp%2Bpa5Mv35iirKR3LdeZahgNcoTXBphj1ZDOZ05YD3IaKbNPc8Fh6OboZqUGwLsAB2IuiG%2BmNWchDAw5Ph8AuiHsTi4PabR741%2BRa8OW7COT6RwFVqFHY4M10%2BdcxvQruIzjLdfoz9xPIx009HT9Ewjw1V7sC%2B7Sff9bHHDgv0YjshH47mR5A%2BcxTsvGIQEhMqBDuTfy4oMNErR32iuSoP606GnzkcoeuuFrH%2F3wp2fubSvmXpdpUZENsUGkhTccjhzhuiGV9MV6LSxcWXvcipQjyXEIFT429ML9%2FLTDi%2FdLJBjqkATKtS5Qyzx72R7pfJ1sq6GdNfUoq%2FuW9qoFNvmOZTiSZ2JFQrPQ67%2BiHc6Xi5swnw1HuePqH1gHLAxf7dcApcEQ44jXolZztrGRnzBaMrX6Q4ojKIbq%2BUIqYtIDIPjiPTO3AhRUBnR41k3imB%2Fe6uyLD9rWQhc7eZ731byTSWA%2FieFMzd9aFUjTn6C7ogYWoNzSSTnv2Lrk5fJsb3VLZRx8wvNl1&X-Amz-Signature=9dda8859084ba6e1005a9376d0caeb27d30e3c4b22c36ddb10b4711139cf9dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

