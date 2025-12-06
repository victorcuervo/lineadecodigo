---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4B6DRES%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgbqelSs6%2BnD8jTKff7Eh379OZ%2FGFCf%2FrOFPhSPUj25wIhAOtOMR5pUQ9iUdv0ShLJddAf%2FYZlL0GEwNTDZX1IiCnHKv8DCH8QABoMNjM3NDIzMTgzODA1IgzNq4nGWZJzw3CTmsgq3AO9OcsqewVDuVx5eUzoTJlavwKSIlVIZy9y5%2FgHPwZOB6uQJIghxD%2FtAA88GmOuE7I4cF0jSg%2BzZ5IrsQ3Bj5IiitHPIG8c%2F%2B%2FM6EvH097cFiM2%2BO4dqailTM0YgYPNATLrMMdfS447PfNqrfT58aku45TlyNjtD%2BVKdJy0bxKRZi0KQ2aTHkGQPcsfMQu%2Fdd%2Ffr0IhO%2FvMMWXcB66TEocQZM4CvJFF357FNJAke2brr9Yq%2FvKd54yUYFa%2BR4VkduosAfgU48wAgv2Hf%2BsdxZ0K3Jc8W2Nu%2BIoh9eW5D95IOkuE9gy8ouumRL%2BMKRegWCU%2Bsuq6%2F7uH0lxA%2FsqNkoZt2%2BhOS5Ozhs9LNskxJb%2FXh3ApUeDXCF2Ed1Xb5Vl%2FTDSBrB42Pd2u2B8cWtJ6BgQ%2FGAFaa9IHMJ7dohRwwlIRSMdT%2FLu2Nmr1PzgRv%2FZg1xaQ1AlVopGzJcmqRaQVO8ty%2B0aOmu6mczfjeuzZfGsnrEG2UThm%2ByHa23kakeY9mnO4PsmyuEVrQRDNnaktgfdqWsfUy0ESj85F5wKEQQsTb%2FI8MQxEE79dII708nNDBaaK4icEgCL49WRW8qUlsjqVYYSGIofagqfxVQNOmEUmdeeTHXoWx0F3WTjVqjC91NLJBjqkAWpOmTbTto54X9f1YphmrfUa6BtOMLVlg5mANTk6U%2B1mAle2vwo3UM%2B4Yb3JBJKLxlNOkgPGhOnaevdAFQl6jQI%2BZlRNmTbP9CYIxZQkWrO0YzXMCBGYu%2B%2FY9LT5SgVzofDRhGtFgV2%2FJFc2Xy3YIPO8na8sfMEsYYa13HSwDU7A9M0TzHDTy%2BEA0gA9Xbfe09euorCVW6PBA5H13kVREhH6IFoM&X-Amz-Signature=b3ae4fec8cdc97609f96f8eed241bae7fa2e74a86626c1f38034ccfcd33c3ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4B6DRES%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgbqelSs6%2BnD8jTKff7Eh379OZ%2FGFCf%2FrOFPhSPUj25wIhAOtOMR5pUQ9iUdv0ShLJddAf%2FYZlL0GEwNTDZX1IiCnHKv8DCH8QABoMNjM3NDIzMTgzODA1IgzNq4nGWZJzw3CTmsgq3AO9OcsqewVDuVx5eUzoTJlavwKSIlVIZy9y5%2FgHPwZOB6uQJIghxD%2FtAA88GmOuE7I4cF0jSg%2BzZ5IrsQ3Bj5IiitHPIG8c%2F%2B%2FM6EvH097cFiM2%2BO4dqailTM0YgYPNATLrMMdfS447PfNqrfT58aku45TlyNjtD%2BVKdJy0bxKRZi0KQ2aTHkGQPcsfMQu%2Fdd%2Ffr0IhO%2FvMMWXcB66TEocQZM4CvJFF357FNJAke2brr9Yq%2FvKd54yUYFa%2BR4VkduosAfgU48wAgv2Hf%2BsdxZ0K3Jc8W2Nu%2BIoh9eW5D95IOkuE9gy8ouumRL%2BMKRegWCU%2Bsuq6%2F7uH0lxA%2FsqNkoZt2%2BhOS5Ozhs9LNskxJb%2FXh3ApUeDXCF2Ed1Xb5Vl%2FTDSBrB42Pd2u2B8cWtJ6BgQ%2FGAFaa9IHMJ7dohRwwlIRSMdT%2FLu2Nmr1PzgRv%2FZg1xaQ1AlVopGzJcmqRaQVO8ty%2B0aOmu6mczfjeuzZfGsnrEG2UThm%2ByHa23kakeY9mnO4PsmyuEVrQRDNnaktgfdqWsfUy0ESj85F5wKEQQsTb%2FI8MQxEE79dII708nNDBaaK4icEgCL49WRW8qUlsjqVYYSGIofagqfxVQNOmEUmdeeTHXoWx0F3WTjVqjC91NLJBjqkAWpOmTbTto54X9f1YphmrfUa6BtOMLVlg5mANTk6U%2B1mAle2vwo3UM%2B4Yb3JBJKLxlNOkgPGhOnaevdAFQl6jQI%2BZlRNmTbP9CYIxZQkWrO0YzXMCBGYu%2B%2FY9LT5SgVzofDRhGtFgV2%2FJFc2Xy3YIPO8na8sfMEsYYa13HSwDU7A9M0TzHDTy%2BEA0gA9Xbfe09euorCVW6PBA5H13kVREhH6IFoM&X-Amz-Signature=51873421a979ad4c3bdbec2920dc282c9f32a945c84ae93aec3cb6dbdc3c968b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

