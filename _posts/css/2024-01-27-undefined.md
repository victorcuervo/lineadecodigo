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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQLXECY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCKrHwX3de1dRc2DxOXFhTsP6FVCf4Dlivgn1j%2FdoN6hwIhAPdCrtamvCfTWylobjEUgSrHl%2BH0NRUbeF6IOr7oAmsMKv8DCCkQABoMNjM3NDIzMTgzODA1IgxkKOkBZPBdvoIuc20q3AMuV0QEOqO9jXA4FeGaggbw0PN57sfKCs%2Bmp6Xmo51UYYPAJ%2BeNWF0UpXdRdU24b4HhUmjpE%2F7urYJ7%2FgVLBlbZVhPOsuXywYpRA6uVkWpFF8enyAE9pVwmQPMjMKhtOQulSs195t7AUiqG0dEsb3JSXumyZ36CnZ7cWeYJ4TZ4lORDsIZ0%2FPcIzJu9zAfmKRyWL9ZEDbah2WF%2BMtm5xFDfzm%2FUw7jt1zF0ioni86GhvDTiup%2FRAZYf2EOOXEMJKwezmRDwq86toZPoKV8U1edKe9Vm8xh7Pz%2Fc1ppqj014HSHS6gqaid9GtFvR7gnTLTyDBguKG0ydfkohGzEy7uhcoohOFXIK3FIU86Onvug5hvtcf3LR9zV%2BlaZenBQSoXFjlQYWxiNxBrLfK8KiCuarIRfYEvqiwfIV6gHbyBiuMk39BOxNb%2FX%2FXWa2Nr5i2qFULasHuX3K8UUdU%2BZx4LB20dbNgAybUkSMJ3ONOGTGMiCvQ5QG0Ft1Mio43nCjWY32afCXQABAYA60kzf60SOnn9o8nHsMYnjsRizmAqbM3S3zzbMdW5gZotLut1aqvm6BTCYDRFJlCByf7%2BXMRQVH%2F6X2y48eNGw%2BjuCZPWVKNnJJROk7mN2jT0pWxzDr1L%2FJBjqkAbaK7dFsIu%2BVatTT0ZveJDF6laFacHLceW%2BVAVUufIgqcPtm6As%2B%2FFCxHAKFZOytquy4nlEC0oN61Y8knaNVTZsdXfW79EixxBGAaFsXavoAKlRPUxAA%2FzrNDbK%2F3hSNVOoayJ2%2FYl%2B9AgGCYY8uTr3ych4lu2VU2VrCFwCMjYXUiauel8tI1fqunYFQ4711f5%2BKuZwU2Z2KkY47s1Uz%2FEaKdf4z&X-Amz-Signature=9813182528237370cc20ff9743238cd6fc6821cb28196ba566519502ce1fc86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQLXECY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCKrHwX3de1dRc2DxOXFhTsP6FVCf4Dlivgn1j%2FdoN6hwIhAPdCrtamvCfTWylobjEUgSrHl%2BH0NRUbeF6IOr7oAmsMKv8DCCkQABoMNjM3NDIzMTgzODA1IgxkKOkBZPBdvoIuc20q3AMuV0QEOqO9jXA4FeGaggbw0PN57sfKCs%2Bmp6Xmo51UYYPAJ%2BeNWF0UpXdRdU24b4HhUmjpE%2F7urYJ7%2FgVLBlbZVhPOsuXywYpRA6uVkWpFF8enyAE9pVwmQPMjMKhtOQulSs195t7AUiqG0dEsb3JSXumyZ36CnZ7cWeYJ4TZ4lORDsIZ0%2FPcIzJu9zAfmKRyWL9ZEDbah2WF%2BMtm5xFDfzm%2FUw7jt1zF0ioni86GhvDTiup%2FRAZYf2EOOXEMJKwezmRDwq86toZPoKV8U1edKe9Vm8xh7Pz%2Fc1ppqj014HSHS6gqaid9GtFvR7gnTLTyDBguKG0ydfkohGzEy7uhcoohOFXIK3FIU86Onvug5hvtcf3LR9zV%2BlaZenBQSoXFjlQYWxiNxBrLfK8KiCuarIRfYEvqiwfIV6gHbyBiuMk39BOxNb%2FX%2FXWa2Nr5i2qFULasHuX3K8UUdU%2BZx4LB20dbNgAybUkSMJ3ONOGTGMiCvQ5QG0Ft1Mio43nCjWY32afCXQABAYA60kzf60SOnn9o8nHsMYnjsRizmAqbM3S3zzbMdW5gZotLut1aqvm6BTCYDRFJlCByf7%2BXMRQVH%2F6X2y48eNGw%2BjuCZPWVKNnJJROk7mN2jT0pWxzDr1L%2FJBjqkAbaK7dFsIu%2BVatTT0ZveJDF6laFacHLceW%2BVAVUufIgqcPtm6As%2B%2FFCxHAKFZOytquy4nlEC0oN61Y8knaNVTZsdXfW79EixxBGAaFsXavoAKlRPUxAA%2FzrNDbK%2F3hSNVOoayJ2%2FYl%2B9AgGCYY8uTr3ych4lu2VU2VrCFwCMjYXUiauel8tI1fqunYFQ4711f5%2BKuZwU2Z2KkY47s1Uz%2FEaKdf4z&X-Amz-Signature=8ad3b05bff99f11dec112e1424645a3188e1b88990ce0f98588f43de0ffe948d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

