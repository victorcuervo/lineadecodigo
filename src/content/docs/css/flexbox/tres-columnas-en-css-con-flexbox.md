---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2DB4HW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVv%2Bmfnefu5vSSyU3xYOhCXbNYAJsRgFLjsm2isdDp2wIgA0h7zhbWCYWjLduWmEvL8udJLhCdVAx1Xtgk7Pdzwo0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTuyOEL9sePtTbz9ircA9z6GyuBFWeLnfV5AB%2Bd4UamPBCXomZd0J%2F8LqEJ1tOYtlUvpy3QeyFTHM9fKeo1xCjCu3k0IcWcNXa5%2BRI1KSWnZA1iKdUewG%2BGXL9oxApTuQwVbqkPgs7jBg2eEEKJNJRprFJoSqR3Ng%2BzgEYu%2BuqKYk8og%2BSGzDtR2Yvzzs%2Fy%2FaZkiYs8eWHGsmzoXCwz6baQXO5F2vxbfOCYwXG%2BrtyVxB8VGYzRcKimcLaUFBuNHwPffSATEonlptHAf1F7RByCCAjLkZrIaSPQS9EpjRJfQYFByUEMUN1Y8UrXZLo8a1gdcda%2FZmlTyWAzd%2Fe0oyNEi3jVjd5D9Vc98BWU2NVpqNWqcNxgGRD4ZWXuBGWmB69aXTsl9QUaeZFWJJkaqgZ%2F7wkOdQfc8fuuIOf9amDqj50qrQv%2BsyOnE07dTNQRU4JtoigeworQdP0qsZs7diBe%2F6WMBIw5IFUk4M9x2a4JXXCP0WJbx0A1REUq0EGNtiQN5DeY4wWf81YaxcPjHDSTogXj52dvDVcGVhIM799P2t7JiueUN96IrfyyMKfSIn%2BBaHwTJ2O6LQ5bRhxMpfymjcKx1CXGSwNAvJGe%2FaDo3zMLRATDBaEXHVV3JMZevLldB8xgPyoAQgkvMKft2ckGOqUBoK%2BMgxNaE0Tgf%2B6hnYYytScU8o8Wr6zwbArPKoHkzeSC3R2UUn69x8yPo2Q580SntmsGE0VBTHQ94qwroWfvCCRckEWKnQu7jzc%2FHps8xP5QUUisCDOIzuZfNf2%2FdpW8DDPZSxJBzGUFybmz7BPebbljaMWl8G0V2u11aHExRsmWzyiuB%2BaLmhY2zJRXJ7W19dpJwSDrKxhTk9QKzRNENCRQqCAx&X-Amz-Signature=924672cbf736fff53449f3c3c11211b3c1e3eceab06932a961c192ee4e2926a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2DB4HW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVv%2Bmfnefu5vSSyU3xYOhCXbNYAJsRgFLjsm2isdDp2wIgA0h7zhbWCYWjLduWmEvL8udJLhCdVAx1Xtgk7Pdzwo0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTuyOEL9sePtTbz9ircA9z6GyuBFWeLnfV5AB%2Bd4UamPBCXomZd0J%2F8LqEJ1tOYtlUvpy3QeyFTHM9fKeo1xCjCu3k0IcWcNXa5%2BRI1KSWnZA1iKdUewG%2BGXL9oxApTuQwVbqkPgs7jBg2eEEKJNJRprFJoSqR3Ng%2BzgEYu%2BuqKYk8og%2BSGzDtR2Yvzzs%2Fy%2FaZkiYs8eWHGsmzoXCwz6baQXO5F2vxbfOCYwXG%2BrtyVxB8VGYzRcKimcLaUFBuNHwPffSATEonlptHAf1F7RByCCAjLkZrIaSPQS9EpjRJfQYFByUEMUN1Y8UrXZLo8a1gdcda%2FZmlTyWAzd%2Fe0oyNEi3jVjd5D9Vc98BWU2NVpqNWqcNxgGRD4ZWXuBGWmB69aXTsl9QUaeZFWJJkaqgZ%2F7wkOdQfc8fuuIOf9amDqj50qrQv%2BsyOnE07dTNQRU4JtoigeworQdP0qsZs7diBe%2F6WMBIw5IFUk4M9x2a4JXXCP0WJbx0A1REUq0EGNtiQN5DeY4wWf81YaxcPjHDSTogXj52dvDVcGVhIM799P2t7JiueUN96IrfyyMKfSIn%2BBaHwTJ2O6LQ5bRhxMpfymjcKx1CXGSwNAvJGe%2FaDo3zMLRATDBaEXHVV3JMZevLldB8xgPyoAQgkvMKft2ckGOqUBoK%2BMgxNaE0Tgf%2B6hnYYytScU8o8Wr6zwbArPKoHkzeSC3R2UUn69x8yPo2Q580SntmsGE0VBTHQ94qwroWfvCCRckEWKnQu7jzc%2FHps8xP5QUUisCDOIzuZfNf2%2FdpW8DDPZSxJBzGUFybmz7BPebbljaMWl8G0V2u11aHExRsmWzyiuB%2BaLmhY2zJRXJ7W19dpJwSDrKxhTk9QKzRNENCRQqCAx&X-Amz-Signature=0a0dffd7f2155726d6e2ede223e7c75020175bef540f62a23745b932c98c0560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

