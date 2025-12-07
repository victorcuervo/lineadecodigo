---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPDJ6FJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzBZfkoQbblPnHvSyySnBspTdZquE%2FRp036PVsvjb8NAiEAg4oJrzwWi8qEZyw5U%2FZct9GaVGYRR9F3ssGnSj1Z70MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqA12XUxKQdtn4A8ircAz63r57vCe6WutCQNxnwWK3s5GR68Dv7M%2BD7RNWhSHwn8Y8dbFidxqVOE8oqEgPKJSDTn9NUhOqaboDPCzR0lt%2BKFjkwM7Qti%2Fv64tfO7l6unlXdEAmZ6PTeA2QzZJ6%2FA4o1HDdxyXEYAzmWoTtw3FH5cZn2VMSp1zXkWp37MlL1P%2FDJ9En26UI6d%2Bd3xoWLf%2FvG461Y5zwlr3zS14zxB4TvbZSEgTuHT%2FPxxm2hkVo%2Fof5MAgS7hfNhLU92IF6yYDBw4oSFmewXIL3sKJIGf3KmGM%2BQHmIwZQCS%2BqxKjXpJWz5hnIx%2F%2FKOm0UgSBes9XLMb%2F%2B5oDoEFfbFUcSPB6mjvISufK%2F8ZD%2FOmFHxVYYAn3NNbKRKe1Pi7q0zvwy6vnPAVUsjlVLFgNnp8A2z9Ux3p9py8%2FrDqxJy6nMYfH99XL7OG6n59E5XSJiqriCaOKTbKjbuvtIfFsgzkNQqvUOQOM7wlVIlAEEPQULRh4k3Zj%2FUAa%2FhVKdzs41iTWIUO2f7NICF0%2FiIYk9eor1fKHWMSMgTn4y5QMQ0mW1VACGFgyV29Spp08RxKQYrv8%2F%2FJvu6s8xvLqw1OVnt1zBafXnVIRNfqomaJ%2BVRa96gMfzzr6tthseAM3wgNvElIMPL90skGOqUBSvfEB%2B2uttb9nZnW15jUB%2FW%2FyerL2rsyXKK5sUbIGej2wCCX3nAApO%2BaLiVCX65dYCVP4yLclSyMPFm1uKuAI%2Brbth7KrkuK3Qy2Zol8TICmIwfCIomYS9E3a75YXU98EXS5IgydfOk9MnuLoQnyo4tAokZ7OxOfQh8unyr5i5dBnhBXmcNJ2hWryMMOSTmCpFkF0GqHw8HN2fr7xJQaq0rPjczB&X-Amz-Signature=51b5cbdc08300ff0d17642bcb78e9616c4c93df672d9a6d9ed02b174d88fd936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPDJ6FJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzBZfkoQbblPnHvSyySnBspTdZquE%2FRp036PVsvjb8NAiEAg4oJrzwWi8qEZyw5U%2FZct9GaVGYRR9F3ssGnSj1Z70MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqA12XUxKQdtn4A8ircAz63r57vCe6WutCQNxnwWK3s5GR68Dv7M%2BD7RNWhSHwn8Y8dbFidxqVOE8oqEgPKJSDTn9NUhOqaboDPCzR0lt%2BKFjkwM7Qti%2Fv64tfO7l6unlXdEAmZ6PTeA2QzZJ6%2FA4o1HDdxyXEYAzmWoTtw3FH5cZn2VMSp1zXkWp37MlL1P%2FDJ9En26UI6d%2Bd3xoWLf%2FvG461Y5zwlr3zS14zxB4TvbZSEgTuHT%2FPxxm2hkVo%2Fof5MAgS7hfNhLU92IF6yYDBw4oSFmewXIL3sKJIGf3KmGM%2BQHmIwZQCS%2BqxKjXpJWz5hnIx%2F%2FKOm0UgSBes9XLMb%2F%2B5oDoEFfbFUcSPB6mjvISufK%2F8ZD%2FOmFHxVYYAn3NNbKRKe1Pi7q0zvwy6vnPAVUsjlVLFgNnp8A2z9Ux3p9py8%2FrDqxJy6nMYfH99XL7OG6n59E5XSJiqriCaOKTbKjbuvtIfFsgzkNQqvUOQOM7wlVIlAEEPQULRh4k3Zj%2FUAa%2FhVKdzs41iTWIUO2f7NICF0%2FiIYk9eor1fKHWMSMgTn4y5QMQ0mW1VACGFgyV29Spp08RxKQYrv8%2F%2FJvu6s8xvLqw1OVnt1zBafXnVIRNfqomaJ%2BVRa96gMfzzr6tthseAM3wgNvElIMPL90skGOqUBSvfEB%2B2uttb9nZnW15jUB%2FW%2FyerL2rsyXKK5sUbIGej2wCCX3nAApO%2BaLiVCX65dYCVP4yLclSyMPFm1uKuAI%2Brbth7KrkuK3Qy2Zol8TICmIwfCIomYS9E3a75YXU98EXS5IgydfOk9MnuLoQnyo4tAokZ7OxOfQh8unyr5i5dBnhBXmcNJ2hWryMMOSTmCpFkF0GqHw8HN2fr7xJQaq0rPjczB&X-Amz-Signature=77fad6f95079b5af43ee0f0d81ed585a48137de0275247368b0d942b01e34c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

