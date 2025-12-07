---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7EMEC3U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoSLqY8vxrlihEM%2B9mv6hk57h%2BT698c1OXfyAAK%2FfBxAiBjZty3S6EYFMIBvKMtsbf0mwOtK%2Fz6MtTYKasSK0OLCCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBWu8Lfsnb8aj3VrQKtwDijQV1ngY6QUwo7czpzwmxJ6qmilxAjTCPjxH7BQtLKMLNgQ5c74WoC2%2FfkfP1M4HbFcHAfCJtem9WSb79Q%2F%2BLB206o5%2FUKNXPxD0ShNznIzeESlvnNrIkV8DJLNxpk%2F2MXvvOV%2BQsEKfJ%2FW3ZtzZ%2BCJvxJ9B%2BpaGOfDVrqzzNhvF6N3fK6EuDjWM%2FUODfT9kAMK9euzuHMJkAa3DQXXE05P%2BBC2k6daPG7jvHwv8JyyTuTgLpZV1CYgTOtMxw4X1s95EZJp8xJI9pe3H9d5UtoG%2FO%2B6u90hnjj76y6Vfb%2FnJfLAHVB8nVSiJ1%2BvL6boh1bGljVwkjfWASRNmHEF0ezwg8JiYS5ZwfnDgyYwugIGjD9%2FX4G7MJbRHmAwl4Kv4tqMnJKFlyDZbbrQ4BVOZB4Vslbb4Aqo%2BK8ES9VCw2HggGkmkcKapYruF%2FMsQaGMpf%2FU%2BcT9EaHQTT9y9Bi%2FL%2Fy%2BhiPedW%2FsRTQtRjP185pKlzX3t1sBe9bp9JxTFk5MADa3hmygBBkGJ3XVBgCjrxGsjzxmExm8nHL%2B6S3y89rmR03HSzJraAkIafnmMJjDS0hprNlcNcx7xzHDdlbqR4536QukqpyboflxMsjWaxdL9kcEakG9q14FqJTMwu7bWyQY6pgFUchf9bASi8eebT3e5tPRvPiLYnGMyjlBDsIZAhJnu4d4LY0An%2F1huXti3Nj5P1QzvcYndgHfx6fHFxtq5z8P3gGtG3ZdtPTcBtyUyk0Cpd%2F0xAiWBu8e%2FQoR7V2mTUAiJI5huUl6RQkMGKoGyqKryMB8RPJbRnmNMeBba3CWfuOeHYMOUayK3KPMUXroSHm1%2B9qZfY4quPJXEQzv1mookn8TNUFdF&X-Amz-Signature=1db30f7bb1699bbf33aac26475bda29428d336e1088a557907b367b08f321006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7EMEC3U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoSLqY8vxrlihEM%2B9mv6hk57h%2BT698c1OXfyAAK%2FfBxAiBjZty3S6EYFMIBvKMtsbf0mwOtK%2Fz6MtTYKasSK0OLCCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBWu8Lfsnb8aj3VrQKtwDijQV1ngY6QUwo7czpzwmxJ6qmilxAjTCPjxH7BQtLKMLNgQ5c74WoC2%2FfkfP1M4HbFcHAfCJtem9WSb79Q%2F%2BLB206o5%2FUKNXPxD0ShNznIzeESlvnNrIkV8DJLNxpk%2F2MXvvOV%2BQsEKfJ%2FW3ZtzZ%2BCJvxJ9B%2BpaGOfDVrqzzNhvF6N3fK6EuDjWM%2FUODfT9kAMK9euzuHMJkAa3DQXXE05P%2BBC2k6daPG7jvHwv8JyyTuTgLpZV1CYgTOtMxw4X1s95EZJp8xJI9pe3H9d5UtoG%2FO%2B6u90hnjj76y6Vfb%2FnJfLAHVB8nVSiJ1%2BvL6boh1bGljVwkjfWASRNmHEF0ezwg8JiYS5ZwfnDgyYwugIGjD9%2FX4G7MJbRHmAwl4Kv4tqMnJKFlyDZbbrQ4BVOZB4Vslbb4Aqo%2BK8ES9VCw2HggGkmkcKapYruF%2FMsQaGMpf%2FU%2BcT9EaHQTT9y9Bi%2FL%2Fy%2BhiPedW%2FsRTQtRjP185pKlzX3t1sBe9bp9JxTFk5MADa3hmygBBkGJ3XVBgCjrxGsjzxmExm8nHL%2B6S3y89rmR03HSzJraAkIafnmMJjDS0hprNlcNcx7xzHDdlbqR4536QukqpyboflxMsjWaxdL9kcEakG9q14FqJTMwu7bWyQY6pgFUchf9bASi8eebT3e5tPRvPiLYnGMyjlBDsIZAhJnu4d4LY0An%2F1huXti3Nj5P1QzvcYndgHfx6fHFxtq5z8P3gGtG3ZdtPTcBtyUyk0Cpd%2F0xAiWBu8e%2FQoR7V2mTUAiJI5huUl6RQkMGKoGyqKryMB8RPJbRnmNMeBba3CWfuOeHYMOUayK3KPMUXroSHm1%2B9qZfY4quPJXEQzv1mookn8TNUFdF&X-Amz-Signature=f10d92ad3b53c9ef4eb47e510c14494046e1c4be2a87fa6ef398f32b40d543ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

