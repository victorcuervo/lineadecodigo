---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV5LQCD2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHhwmFzp8ePLmeqvH5ugs3EEC6BNZ6m%2FwbqElFQyHDsSAiEAlUpdnnGtb2dzGhdY9G5aoM1B8MAXhsu4YSDnuBaH1kQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMe3Fe1AU%2BEUYv4PByrcA8FQ%2FqIr5lhwyXuI8V4TC1S%2FuJEizpOruw0puBoTA808w997Z%2FPI0Clc3wZuVwPjM%2FdkVcjPgIxyef4foqRZbV0aiNRTrG9uKJh%2FnQ7Jj1VjDg%2FthQkXGDM%2B7wd7%2BCuTnI0TGWardwV1mZob7UdWkKaN9uMlO%2FYI7KnRmBDaGIrbfxotS0XboCmh1ddedxYKNKY8siEhzaxZpPFEE8phVqkwXMAdmQV0w05DVl19%2FTjdqRHP5ORYRSx1zGl99LuKcJM9HbHAs%2BsXS1VOsSXbyTAbOz9LjDb2q5daF4a7TXYH835FHSQpDyHbvzzGvB1YgeJrdDMdKVRk%2BjfcG8WwYo5byKZa6ARfiguEIIivM9ZRmtBFvEIxD0qLCFLVj2o%2F0OP7euyBmV5y7ftXe7C3xPYj3C0RncGBBpNckkPubeDMu9VlqpD4lUbqQF%2BbV%2BBw0WL%2FqKV9lJs%2FXuBOwOjM0oM4ZdIHLf4iub3qKdnhTtFtkzz%2Fr5lMcM4wzZ%2FBv3eMQRbPaW9OKL%2Bh4wj%2Bgx0N4d929Cyu0fKDBlQCZjkohprOJStn7SjbZCIyTiQVR6QdUrN%2BuEWJxZXQSvDP5qp8Bp63zrnkPtl5mB8UBFla4i1cPpV%2B05tNLn1oxXgbMKChxskGOqUBuqoaJQWFug%2B4%2FbgphSu99k8bqPJfhvoDRF3sqi5egYBJHnI4xBgGWqV2iCeDrTlP6OObNMzIUPI50gIuPjse2vg364Q5%2Fvg2xMe1M%2FGmEV5JPW21Nj5If8%2Fwb38NI4UytFTt3pMN085LzPkNdZbMRwc31w83HUu5rjMQQNZqUTVFKVJsoDqARcMR16PJzR800WXr46WBnCSICfALmcRdY0Adx8k0&X-Amz-Signature=5298d25dc2107a71691e9f162f5bd4884459739d75e4e42878470e13ab035087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV5LQCD2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHhwmFzp8ePLmeqvH5ugs3EEC6BNZ6m%2FwbqElFQyHDsSAiEAlUpdnnGtb2dzGhdY9G5aoM1B8MAXhsu4YSDnuBaH1kQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMe3Fe1AU%2BEUYv4PByrcA8FQ%2FqIr5lhwyXuI8V4TC1S%2FuJEizpOruw0puBoTA808w997Z%2FPI0Clc3wZuVwPjM%2FdkVcjPgIxyef4foqRZbV0aiNRTrG9uKJh%2FnQ7Jj1VjDg%2FthQkXGDM%2B7wd7%2BCuTnI0TGWardwV1mZob7UdWkKaN9uMlO%2FYI7KnRmBDaGIrbfxotS0XboCmh1ddedxYKNKY8siEhzaxZpPFEE8phVqkwXMAdmQV0w05DVl19%2FTjdqRHP5ORYRSx1zGl99LuKcJM9HbHAs%2BsXS1VOsSXbyTAbOz9LjDb2q5daF4a7TXYH835FHSQpDyHbvzzGvB1YgeJrdDMdKVRk%2BjfcG8WwYo5byKZa6ARfiguEIIivM9ZRmtBFvEIxD0qLCFLVj2o%2F0OP7euyBmV5y7ftXe7C3xPYj3C0RncGBBpNckkPubeDMu9VlqpD4lUbqQF%2BbV%2BBw0WL%2FqKV9lJs%2FXuBOwOjM0oM4ZdIHLf4iub3qKdnhTtFtkzz%2Fr5lMcM4wzZ%2FBv3eMQRbPaW9OKL%2Bh4wj%2Bgx0N4d929Cyu0fKDBlQCZjkohprOJStn7SjbZCIyTiQVR6QdUrN%2BuEWJxZXQSvDP5qp8Bp63zrnkPtl5mB8UBFla4i1cPpV%2B05tNLn1oxXgbMKChxskGOqUBuqoaJQWFug%2B4%2FbgphSu99k8bqPJfhvoDRF3sqi5egYBJHnI4xBgGWqV2iCeDrTlP6OObNMzIUPI50gIuPjse2vg364Q5%2Fvg2xMe1M%2FGmEV5JPW21Nj5If8%2Fwb38NI4UytFTt3pMN085LzPkNdZbMRwc31w83HUu5rjMQQNZqUTVFKVJsoDqARcMR16PJzR800WXr46WBnCSICfALmcRdY0Adx8k0&X-Amz-Signature=d623c714d3f07d39f9fcfb388e7e80b2c75cae55a7e8789b6ae396b38fc4551e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

