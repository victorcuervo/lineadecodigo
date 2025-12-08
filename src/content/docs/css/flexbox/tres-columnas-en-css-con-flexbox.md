---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FGHGMAO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD104LthGBbajHE2UmgdQolQsujO2rm4%2FRw79hhQ67QKgIgPDhn1kzwP2zJ2H%2B0Tu7SAJnG4iORJNhaZaDl8Y3hxBoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjiyH8hToIzmuhNxSrcA1R5egNh70OiuaUnhURmMm9qENMrvUulJQpOnaEfe3ziHS4f0BShrBN1%2FL6Duj%2FAz9VLkx3kznwdxWrfRKlliOxPNZGRd%2BqTs2vvu%2BN%2FEZB57h1%2B0ouq4kRTuZjWs9%2BIPEgdBUxnspOokjaCY5UXAHfrl6pOyWE3WWJGGNQa5usOJOY1L9A84PoeGS%2BAwlb6Yv7Fq6Nh4KyXdGNXF2778i8%2Fv4APRNOtBKKaP7vxTDe8705BDhCxbCxFAkg9hMU57tQGdqrfnc5EkgtSm3WcyuEZGNqyzbIUiXLMg71HCJi5mN99VyvEYVizGGZAqTELeEo13W0iCG4tdCOkJ0u5jBQZc%2FPK0T4uE3Qw952CsoHD4Ydzz5Gtz0HitK4a2q1xLEa0PES1kGBxYgvjaL1O2Qt9ZeDL701GwK%2FbkIbHoVzdsH5oUzQOw0HjbuYnKiHaGNYqRCGxT6ypn2DOxhFf70TmmVMdIZlqR2vlqf8YyHjBbAVXWu16vf%2FsHIFIX2cGx8890q%2B3P935aYFjmNXYGfF0MjgKJKRFJ%2BTZJMl7d7k6HKpsDJhRUNiliQ2Sx4FJlMvEozCgWIeMSPprFbBxrGm7PKfQE0yz6l8kVf0uCg0jesChiBaVNf6NsrU2MMKA3ckGOqUBFIIfVRt9o3se8LM8ghmcll5Ga3CJKy%2FW290GKmgri7xiRG0UdZgcOEDMZSMoYnM0DeLDmDP7uRooC6jWn2AND9I7uhPicZHbM77D5Wg7J0ZSook1z4aJx8O3kpilxkmxzpnSdGnJLjsXP6NiFU%2FQCsO7%2BmhapcJchZH54GKV9bwGXiA3X1IsEyYW9M%2Bf6WZJwsncCMU5x2%2B5%2FWWLyvyGQCEZuCPG&X-Amz-Signature=e799457995aebeb2f9ed077b9d9103dbe3e357982e475f1edb8ed37ffd7c3b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FGHGMAO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD104LthGBbajHE2UmgdQolQsujO2rm4%2FRw79hhQ67QKgIgPDhn1kzwP2zJ2H%2B0Tu7SAJnG4iORJNhaZaDl8Y3hxBoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjiyH8hToIzmuhNxSrcA1R5egNh70OiuaUnhURmMm9qENMrvUulJQpOnaEfe3ziHS4f0BShrBN1%2FL6Duj%2FAz9VLkx3kznwdxWrfRKlliOxPNZGRd%2BqTs2vvu%2BN%2FEZB57h1%2B0ouq4kRTuZjWs9%2BIPEgdBUxnspOokjaCY5UXAHfrl6pOyWE3WWJGGNQa5usOJOY1L9A84PoeGS%2BAwlb6Yv7Fq6Nh4KyXdGNXF2778i8%2Fv4APRNOtBKKaP7vxTDe8705BDhCxbCxFAkg9hMU57tQGdqrfnc5EkgtSm3WcyuEZGNqyzbIUiXLMg71HCJi5mN99VyvEYVizGGZAqTELeEo13W0iCG4tdCOkJ0u5jBQZc%2FPK0T4uE3Qw952CsoHD4Ydzz5Gtz0HitK4a2q1xLEa0PES1kGBxYgvjaL1O2Qt9ZeDL701GwK%2FbkIbHoVzdsH5oUzQOw0HjbuYnKiHaGNYqRCGxT6ypn2DOxhFf70TmmVMdIZlqR2vlqf8YyHjBbAVXWu16vf%2FsHIFIX2cGx8890q%2B3P935aYFjmNXYGfF0MjgKJKRFJ%2BTZJMl7d7k6HKpsDJhRUNiliQ2Sx4FJlMvEozCgWIeMSPprFbBxrGm7PKfQE0yz6l8kVf0uCg0jesChiBaVNf6NsrU2MMKA3ckGOqUBFIIfVRt9o3se8LM8ghmcll5Ga3CJKy%2FW290GKmgri7xiRG0UdZgcOEDMZSMoYnM0DeLDmDP7uRooC6jWn2AND9I7uhPicZHbM77D5Wg7J0ZSook1z4aJx8O3kpilxkmxzpnSdGnJLjsXP6NiFU%2FQCsO7%2BmhapcJchZH54GKV9bwGXiA3X1IsEyYW9M%2Bf6WZJwsncCMU5x2%2B5%2FWWLyvyGQCEZuCPG&X-Amz-Signature=1a94e1bd715f55b264061c67b3fc7baa0be5bb03eb9163ea132c0eddf219ce14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

