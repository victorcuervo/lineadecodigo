---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIRXEXX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC5rVQ16VKbjZhT5teq2y3SZ5KBr4hLjwqiT%2F2niL1W6AIgLS0Q6iER9dWDttLct9iKMVGap1VxLOnj%2FlWnICWJR6Mq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBYs9brrkRfGyTNq6yrcA4I2DiAE%2BRFG9WRj4usGV27HgWxcKwCGqGOBiZV2iuUgiTT0wwQB8pWiNiEem1T51U7UwaSI0xQYiEUaP1c9%2F6p8uv6KwZ%2FN9EbhxjdiP7IajGBgKglnWijTjzsp%2FLNuqfB6B4a5rbpsIpZhTnOXCbkvYW1hvZ3pL6qVytImYOqjCcv5%2BVnqpKY5Fn4dwm%2BOgzZwN5%2BLLkjhQrdyaM1%2FuOyUTrEAf0L5jBiik84Vj2qTYQAa02YjXzTAZtw%2BxgcZdYcVGI6NAi7awg%2FDmmEaGcq5CKY%2B2BsyR0963km6kcFxYNlwbUamPtFXXaxzmCdELUNzwJSdbiozR8Pf%2FHpEiGn%2BtQAx7g47uWz0cz8bAe1ODZzwA%2BBO0U%2BhKdrEOnZvBvRTZh8d51xqm24L%2FYVnTJ6Z7Ni%2B7dAfBbwjoZ0wLVFu0sqzPsO64MTuy47hzMqEwD0KExzjuqwPxPZ4UpVMuJvCtJrbT%2F08S8ummFdW0uGZLVLAhcjwHE1KtDGJgL1Q%2F6bF1o8c%2F0K4mhRMgy1KhMeIuC4Tk66AagSGNImvl1RGSXG3qsZPQm70Ltu%2BPLoHbugvHbUOzFiXi8hAUk8MXiOfEp0PXdSDgYwKDPaVjSs%2BBi3AcIoF9ev2idIGMKihvskGOqUBYInXyQ%2Fm7EY60%2FU4%2Fd1CRj5vpaPyTDkxikQDZxwrFCbZtJILQHBupyvIG7Lkkcwg%2FfyZbmRJHGnuHzDm6yYRSiZ7dfg1nlSnDvGDoHoENOSbLq%2BMnTrFmOVhtjwHPQXoNAgn8c%2F5iVUlm%2Bs2oAhf5wEorOqvw0jX5h%2Bnv%2Bdkj4Yr%2Bo0QU3g3NVYtAlSJ5iYhuVFDpQDy8iidyFCA3MU099rsaZBQ&X-Amz-Signature=9c6264b0411e443e900492ad97fdc5a97d53181253af5f07a0f678ff4ff61cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIRXEXX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC5rVQ16VKbjZhT5teq2y3SZ5KBr4hLjwqiT%2F2niL1W6AIgLS0Q6iER9dWDttLct9iKMVGap1VxLOnj%2FlWnICWJR6Mq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBYs9brrkRfGyTNq6yrcA4I2DiAE%2BRFG9WRj4usGV27HgWxcKwCGqGOBiZV2iuUgiTT0wwQB8pWiNiEem1T51U7UwaSI0xQYiEUaP1c9%2F6p8uv6KwZ%2FN9EbhxjdiP7IajGBgKglnWijTjzsp%2FLNuqfB6B4a5rbpsIpZhTnOXCbkvYW1hvZ3pL6qVytImYOqjCcv5%2BVnqpKY5Fn4dwm%2BOgzZwN5%2BLLkjhQrdyaM1%2FuOyUTrEAf0L5jBiik84Vj2qTYQAa02YjXzTAZtw%2BxgcZdYcVGI6NAi7awg%2FDmmEaGcq5CKY%2B2BsyR0963km6kcFxYNlwbUamPtFXXaxzmCdELUNzwJSdbiozR8Pf%2FHpEiGn%2BtQAx7g47uWz0cz8bAe1ODZzwA%2BBO0U%2BhKdrEOnZvBvRTZh8d51xqm24L%2FYVnTJ6Z7Ni%2B7dAfBbwjoZ0wLVFu0sqzPsO64MTuy47hzMqEwD0KExzjuqwPxPZ4UpVMuJvCtJrbT%2F08S8ummFdW0uGZLVLAhcjwHE1KtDGJgL1Q%2F6bF1o8c%2F0K4mhRMgy1KhMeIuC4Tk66AagSGNImvl1RGSXG3qsZPQm70Ltu%2BPLoHbugvHbUOzFiXi8hAUk8MXiOfEp0PXdSDgYwKDPaVjSs%2BBi3AcIoF9ev2idIGMKihvskGOqUBYInXyQ%2Fm7EY60%2FU4%2Fd1CRj5vpaPyTDkxikQDZxwrFCbZtJILQHBupyvIG7Lkkcwg%2FfyZbmRJHGnuHzDm6yYRSiZ7dfg1nlSnDvGDoHoENOSbLq%2BMnTrFmOVhtjwHPQXoNAgn8c%2F5iVUlm%2Bs2oAhf5wEorOqvw0jX5h%2Bnv%2Bdkj4Yr%2Bo0QU3g3NVYtAlSJ5iYhuVFDpQDy8iidyFCA3MU099rsaZBQ&X-Amz-Signature=7f59b54de16dd8e42af654aa019ae55dc1fa054252a57e673aa038f1c77edadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

